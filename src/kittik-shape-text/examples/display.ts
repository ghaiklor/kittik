import { Canvas } from 'terminal-canvas';
import { Text } from '..';

const canvas = new Canvas().reset();
const shapes = [
  new Text(canvas, { text: 'BLINK', y: '0', blink: true }),
  new Text(canvas, { text: 'BOLD', y: '2', bold: true }),
  new Text(canvas, { text: 'DIM', y: '4', dim: true }),
  new Text(canvas, { text: 'HIDDEN', y: '6', hidden: true }),
  new Text(canvas, { text: 'REVERSE', y: '8', reverse: true }),
  new Text(canvas, { text: 'UNDERLINED', y: '10', underlined: true })
];

shapes.forEach(shape => shape.render());
canvas.flush();
