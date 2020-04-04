import { ImageOptions } from './ImageOptions';
import { ShapeObject } from 'kittik-shape-basic';

export interface ImageObject extends ShapeObject {
  options?: Partial<ImageOptions>
}
