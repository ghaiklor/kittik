import { ShapeObject, ShapeOptions } from 'kittik-shape-basic';

export interface ShapeDeclaration<T, O extends ShapeOptions> extends ShapeObject<T, O> {
  name: string
}
