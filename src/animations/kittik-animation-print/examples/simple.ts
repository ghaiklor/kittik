import { Canvas } from "terminal-canvas";
import { Print } from "..";
import { Rectangle } from "kittik-shape-rectangle";

const onTick = (shape: Rectangle): void => {
  canvas.eraseScreen();
  shape.render(canvas);
  canvas.flush();
};

const canvas = new Canvas().reset().hideCursor();

const print = new Print({
  duration: 5000,
  easing: "inOutSine",
}).on("tick", onTick);

const shape = new Rectangle({
  background: "white",
  foreground: "black",
  text: "The Longest Hello, World printing out",
  x: "center",
  y: "middle",
});

(async function animate() {
  shape.render(canvas);
  canvas.flush();

  await print.animate(shape);

  canvas.showCursor();
})().catch(console.error);
