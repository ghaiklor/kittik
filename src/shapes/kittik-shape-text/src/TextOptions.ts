import type { ShapeOptions } from "kittik-shape-basic";

export interface TextOptions extends ShapeOptions {
  align: "center" | "left" | "right";
  blink: boolean;
  bold: boolean;
  dim: boolean;
  hidden: boolean;
  reverse: boolean;
  underlined: boolean;
}
