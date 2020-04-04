import { Canvas } from 'terminal-canvas';
import { Rectangle } from '..';

const canvas = new Canvas().reset();
const shape = new Rectangle({
  text: 'Hello, World!',
  x: '5%',
  y: '10%',
  width: '50%',
  height: '25%',
  background: 'yellow',
  foreground: 'blue'
});

shape.render(canvas);
canvas.flush();