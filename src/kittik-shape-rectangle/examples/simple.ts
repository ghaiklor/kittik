import { Canvas } from 'terminal-canvas';
import { Rectangle } from '..';

const canvas = new Canvas().reset();
const shape = new Rectangle(canvas, { text: 'Hello, World!' });
shape.render().cursor.flush();
