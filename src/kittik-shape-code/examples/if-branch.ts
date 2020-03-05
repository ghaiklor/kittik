import { Canvas } from 'terminal-canvas';
import { Code } from '..';

const CODE = `
if (somethingTrue) {
  doSomething();
} else {
  butOtherwiseDoAnother();
}
`;

const canvas = new Canvas();
const shape = new Code(canvas, { text: CODE });
shape.render().cursor.flush();
