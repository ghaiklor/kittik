import { Canvas } from 'terminal-canvas';
import { Rectangle } from 'kittik-shape-rectangle';
import { Focus } from '..';

const onTick = (shape: Rectangle): void => {
  cursor.eraseScreen();
  shape.render();
  cursor.flush();
};

const cursor = new Canvas().reset().hideCursor();
const shape = new Rectangle(cursor, { x: 'center', y: 'middle', background: 'white', foreground: 'black', text: 'Shaking' });
const shakeX = new Focus({ direction: 'shakeX' }).on('tick', onTick);
const shakeY = new Focus({ direction: 'shakeY' }).on('tick', onTick);

(async function animate() {
  shape.render().cursor.flush();

  await shakeX.animate(shape);
  await shakeY.animate(shape);

  cursor.showCursor();
})().catch(console.error);
