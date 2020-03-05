import { Canvas } from 'terminal-canvas';
import { Code } from '..';

const CODE = `
badWrittenCode     = 5 + ()=>{console.log('test')}
`;

const canvas = new Canvas();
const shape = new Code(canvas, { text: CODE });
shape.render().cursor.flush();
