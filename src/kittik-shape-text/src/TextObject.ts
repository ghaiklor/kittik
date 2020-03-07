import { ShapeObject } from 'kittik-shape-basic/dist/ShapeObject';
import { TextOptions } from './TextOptions';

export interface TextObject extends ShapeObject {
  options?: Partial<TextOptions>
}
