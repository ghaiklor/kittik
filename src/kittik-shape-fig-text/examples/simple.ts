import { Canvas } from 'terminal-canvas';
import { FigText } from '..';

const canvas = new Canvas().reset();
const shape = new FigText(canvas, { text: 'Hello, World' });
shape.render().cursor.flush();
