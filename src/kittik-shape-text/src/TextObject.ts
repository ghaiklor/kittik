import { ShapeObject } from 'kittik-shape-basic';
import { TextOptions } from './TextOptions';

export interface TextObject extends ShapeObject {
  options?: Partial<TextOptions>
}
