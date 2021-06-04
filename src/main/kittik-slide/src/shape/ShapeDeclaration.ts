import type { ShapeOptions, ShapeType } from "./Shapes";
import type { ShapeObject } from "kittik-shape-basic";

export interface ShapeDeclaration
  extends ShapeObject<ShapeType, Partial<ShapeOptions<ShapeType>>> {
  name: string;
}
