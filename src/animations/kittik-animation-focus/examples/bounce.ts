import { Canvas } from 'terminal-canvas';
import { Focus } from '..';
import { Rectangle } from 'kittik-shape-rectangle';

const onTick = (shape: Rectangle): void => {
  canvas.eraseScreen();
  shape.render(canvas);
  canvas.flush();
};

const canvas = new Canvas()
  .reset()
  .hideCursor();

const shape = new Rectangle({
  background: 'white',
  foreground: 'black',
  text: 'Bouncing',
  x: 'center',
  y: 'middle'
});

const bounceUp = new Focus({ direction: 'bounceUp' }).on('tick', onTick);
const bounceDown = new Focus({ direction: 'bounceDown' }).on('tick', onTick);
const bounceLeft = new Focus({ direction: 'bounceLeft' }).on('tick', onTick);
const bounceRight = new Focus({ direction: 'bounceRight' }).on('tick', onTick);

(async function animate () {
  shape.render(canvas);
  canvas.flush();

  await bounceUp.animate(shape);
  await bounceDown.animate(shape);
  await bounceLeft.animate(shape);
  await bounceRight.animate(shape);

  canvas.showCursor();
})().catch(console.error);
