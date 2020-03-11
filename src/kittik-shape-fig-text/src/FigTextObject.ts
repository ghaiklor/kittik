import { FigTextOptions } from './FigTextOptions';
import { ShapeObject } from 'kittik-shape-basic';

export interface FigTextObject extends ShapeObject {
  options?: Partial<FigTextOptions>
}
