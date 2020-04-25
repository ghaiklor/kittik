import { ShapeOptions } from './ShapeOptions';

export interface ShapeObject<T, O extends ShapeOptions> {
  type: T
  options: O
}
