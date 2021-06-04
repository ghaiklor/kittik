import { Canvas } from "terminal-canvas";
import { Rectangle } from "..";

const canvas = new Canvas().reset();
const shape = new Rectangle({
  background: "yellow",
  foreground: "blue",
  height: "25%",
  text: "Hello, World!",
  width: "50%",
  x: "5%",
  y: "10%",
});

shape.render(canvas);
canvas.flush();
