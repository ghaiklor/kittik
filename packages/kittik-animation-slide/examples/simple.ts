import { Canvas } from 'terminal-canvas';
import { Rectangle } from 'kittik-shape-rectangle';
import { Slide } from '..';

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
  text: 'Sliding',
  x: 'center',
  y: 'middle'
});

const inLeft = new Slide({
  direction: 'inLeft',
  duration: 5000,
  easing: 'outBounce'
}).on('tick', onTick);

(async function animate () {
  shape.render(canvas);
  canvas.flush();

  await inLeft.animate(shape);

  canvas.showCursor();
})().catch(console.error);
