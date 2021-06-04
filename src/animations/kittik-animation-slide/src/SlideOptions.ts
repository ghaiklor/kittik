import type { AnimationOptions } from "kittik-animation-basic";

export type Direction =
  | "inDown"
  | "inLeft"
  | "inRight"
  | "inUp"
  | "outDown"
  | "outLeft"
  | "outRight"
  | "outUp";

export interface SlideOptions extends AnimationOptions {
  direction: Direction;
}
