import { Canvas } from 'terminal-canvas';
import { Print } from '..';
import { Rectangle } from 'kittik-shape-rectangle';

const onTick = (shape: Rectangle): void => {
  cursor.eraseScreen();
  shape.render(cursor);
  cursor.flush();
};

const cursor = new Canvas()
  .reset()
  .hideCursor();

const print = new Print({
  duration: 5000,
  easing: 'inOutSine'
}).on('tick', onTick);

const shape = new Rectangle({
  background: 'white',
  foreground: 'black',
  text: 'The Longest Hello, World printing out',
  x: 'center',
  y: 'middle'
});

(async function animate () {
  shape.render(cursor);
  cursor.flush();

  await print.animate(shape);

  cursor.showCursor();
})().catch(console.error);
