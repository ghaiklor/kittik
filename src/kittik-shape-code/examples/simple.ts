import { Canvas } from 'terminal-canvas';
import { Code } from '..';

const canvas = new Canvas().reset();
const shape = new Code({ text: 'console.log("Hello, World")' });

shape.render(canvas);
canvas.flush();
