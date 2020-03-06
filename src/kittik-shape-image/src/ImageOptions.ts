import { ShapeOptions } from 'kittik-shape-basic/dist/ShapeOptions';

export interface ImageOptions extends ShapeOptions {
  image: string
  preserveAspectRatio: boolean
}
