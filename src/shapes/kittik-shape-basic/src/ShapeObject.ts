import type { ShapeOptions } from "./ShapeOptions";

export interface ShapeObject<T, O extends Partial<ShapeOptions>> {
  type: T;
  options: O;
}
