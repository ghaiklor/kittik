import { Canvas } from "terminal-canvas";
import { Code } from "..";

const CODE = `
if (somethingTrue) {
  doSomething();
} else {
  butOtherwiseDoAnother();
}
`;

const canvas = new Canvas().reset();
const shape = new Code({ text: CODE });

shape.render(canvas);
canvas.flush();
