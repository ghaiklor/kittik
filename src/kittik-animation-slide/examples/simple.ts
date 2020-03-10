import { Canvas } from 'terminal-canvas';
import { Rectangle } from 'kittik-shape-rectangle';
import { Slide } from '..';

const onTick = (shape: Rectangle): void => {
  cursor.eraseScreen();
  shape.render();
  cursor.flush();
};

const cursor = new Canvas().reset().hideCursor();
const shape = new Rectangle(cursor, { x: 'center', y: 'middle', background: 'white', foreground: 'black', text: 'Sliding' });
const inLeft = new Slide({ direction: 'inLeft' }).on('tick', onTick);

(async function animate() {
  shape.render().cursor.flush();

  await inLeft.animate(shape);

  cursor.showCursor();
})().catch(console.error);
