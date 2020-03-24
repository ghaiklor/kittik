import { Canvas } from 'terminal-canvas';
import { Rectangle } from 'kittik-shape-rectangle';
import { Print } from '..';

const onTick = (shape: Rectangle): void => {
  cursor.eraseScreen();
  shape.render();
  cursor.flush();
};

const cursor = new Canvas().reset().hideCursor();
const print = new Print({ duration: 5000, easing: 'inOutSine' }).on('tick', onTick);
const shape = new Rectangle(cursor, {
  x: 'center',
  y: 'middle',
  background: 'white',
  foreground: 'black',
  text: 'The Longest Hello, World printing out'
});

(async function animate () {
  shape.render();
  cursor.flush();

  await print.animate(shape);

  cursor.showCursor();
})().catch(console.error);
