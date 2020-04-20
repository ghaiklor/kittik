import { CodeOptions } from './CodeOptions';
import { ShapeObject } from 'kittik-shape-basic';

export interface CodeObject extends ShapeObject {
  options?: Partial<CodeOptions>
}
