import { Canvas } from "terminal-canvas";
import { Rectangle } from "..";

const canvas = new Canvas().reset();
const shape = new Rectangle({ text: "Hello, World!" });

shape.render(canvas);
canvas.flush();
