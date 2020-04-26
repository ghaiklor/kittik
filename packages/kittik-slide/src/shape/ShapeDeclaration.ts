import { ShapeOptions, ShapeType } from './Shapes';
import { ShapeObject } from 'kittik-shape-basic';

export interface ShapeDeclaration extends ShapeObject<ShapeType, ShapeOptions<ShapeType>> {
  name: string
}
