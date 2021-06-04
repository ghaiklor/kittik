import { Canvas } from "terminal-canvas";
import { Text } from "..";

const canvas = new Canvas().reset();
const shape = new Text({ text: "Hello, World!" });

shape.render(canvas);
canvas.flush();
