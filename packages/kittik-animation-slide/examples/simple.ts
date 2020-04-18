import { Canvas } from 'terminal-canvas';
import { Rectangle } from 'kittik-shape-rectangle';
import { Slide } from '..';

const onTick = (shape: Rectangle): void => {
  cursor.eraseScreen();
  shape.render(cursor);
  cursor.flush();
};

const cursor = new Canvas().reset().hideCursor();
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
  shape.render(cursor);
  cursor.flush();

  await inLeft.animate(shape);

  cursor.showCursor();
})().catch(console.error);
