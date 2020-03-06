import { ImageOptions } from './ImageOptions';
import { ShapeObject } from 'kittik-shape-basic/dist/ShapeObject';

export interface ImageObject extends ShapeObject {
  options?: Partial<ImageOptions>
}
