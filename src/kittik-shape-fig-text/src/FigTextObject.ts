import { FigTextOptions } from './FigTextOptions';
import { ShapeObject } from 'kittik-shape-basic/dist/ShapeObject';

export interface FigTextObject extends ShapeObject {
  options?: Partial<FigTextOptions>
}
