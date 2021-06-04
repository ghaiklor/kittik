import { Canvas } from "terminal-canvas";
import { FigText } from "..";

const canvas = new Canvas().reset();
const shape = new FigText({ text: "Hello, World" });

shape.render(canvas);
canvas.flush();
