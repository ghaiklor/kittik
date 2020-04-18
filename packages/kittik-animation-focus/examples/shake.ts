import { Canvas } from 'terminal-canvas';
import { Focus } from '..';
import { Rectangle } from 'kittik-shape-rectangle';

const onTick = (shape: Rectangle): void => {
  cursor.eraseScreen();
  shape.render(cursor);
  cursor.flush();
};

const cursor = new Canvas().reset().hideCursor();
const shape = new Rectangle({
  background: 'white',
  foreground: 'black',
  text: 'Shaking',
  x: 'center',
  y: 'middle'
});

const shakeX = new Focus({ direction: 'shakeX' }).on('tick', onTick);
const shakeY = new Focus({ direction: 'shakeY' }).on('tick', onTick);

(async function animate () {
  shape.render(cursor);
  cursor.flush();

  await shakeX.animate(shape);
  await shakeY.animate(shape);

  cursor.showCursor();
})().catch(console.error);
