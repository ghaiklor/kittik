import { Canvas } from 'terminal-canvas';
import { Image } from '..';

const canvas = new Canvas().reset();
const shape = new Image({
  image: './examples/panda.jpg',
  preserveAspectRatio: true,
  width: 'auto',
  height: 'auto'
});

shape.render(canvas);
canvas.flush();
