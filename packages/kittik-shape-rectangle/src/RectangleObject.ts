import { RectangleOptions } from './RectangleOptions';
import { ShapeObject } from 'kittik-shape-basic';

export interface RectangleObject extends ShapeObject {
  options?: Partial<RectangleOptions>
}
