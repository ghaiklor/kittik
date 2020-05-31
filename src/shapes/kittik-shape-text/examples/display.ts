import { Canvas } from 'terminal-canvas';
import { Text } from '..';

const canvas = new Canvas().reset();
const shapes = [
  new Text({ text: 'BLINK', y: '0', blink: true }),
  new Text({ text: 'BOLD', y: '2', bold: true }),
  new Text({ text: 'DIM', y: '4', dim: true }),
  new Text({ text: 'HIDDEN', y: '6', hidden: true }),
  new Text({ text: 'REVERSE', y: '8', reverse: true }),
  new Text({ text: 'UNDERLINED', y: '10', underlined: true })
];

shapes.forEach((shape) => shape.render(canvas));
canvas.flush();
