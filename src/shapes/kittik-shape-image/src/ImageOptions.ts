import type { ShapeOptions } from "kittik-shape-basic";

export interface ImageOptions extends ShapeOptions {
  image: string;
  preserveAspectRatio: boolean;
}
