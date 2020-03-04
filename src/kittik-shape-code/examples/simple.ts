import { Canvas } from "terminal-canvas";
import { Code } from "..";

const canvas = new Canvas();
const shape = new Code(canvas, { code: 'console.log("Hello, World")' });
shape.render();
