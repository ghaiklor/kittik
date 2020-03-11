import { Canvas } from 'terminal-canvas';
import { Image } from '..';

const canvas = new Canvas().reset();
const shape = new Image(canvas);

shape.render();
canvas.flush();
