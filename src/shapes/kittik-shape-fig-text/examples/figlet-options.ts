import { Canvas } from 'terminal-canvas';
import { FigText } from '..';

const canvas = new Canvas().reset();
const shape = new FigText({
  font: 'Gothic',
  horizontalLayout: 'full',
  printDirection: 0,
  showHardBlanks: false,
  text: 'Hello, World',
  verticalLayout: 'full'
});

shape.render(canvas);
canvas.flush();
