import { CodeOptions } from './CodeOptions';
import { ShapeObject } from 'kittik-shape-basic/dist/ShapeObject';
import { ShapeOptions } from 'kittik-shape-basic/dist/ShapeOptions';

export interface CodeObject extends ShapeObject {
  options?: Partial<ShapeOptions & CodeOptions>
}
