import { Canvas } from "terminal-canvas";
import { Text } from "..";

const canvas = new Canvas().reset();
const shapes = [
  new Text({
    text: "I am\nfrom the\nleft",
    align: "left",
    x: "left",
    y: "top",
  }),
  new Text({
    text: "I am\nin the\ncenter",
    align: "center",
    x: "right",
    y: "middle",
  }),
  new Text({
    text: "I am\ngoing from the\nright",
    align: "right",
    x: "center",
    y: "bottom",
  }),
];

shapes.forEach((shape) => {
  shape.render(canvas);
});
canvas.flush();
