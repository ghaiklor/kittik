import { ShapeOptions, ShapeType } from './Shapes';
import { ShapeObject } from 'kittik-shape-basic';

export interface ShapeDeclaration extends ShapeObject<ShapeType, Partial<ShapeOptions<ShapeType>>> {
  name: string
}
