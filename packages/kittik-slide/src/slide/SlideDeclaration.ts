import { AnimationDeclaration } from '../animation/AnimationDeclaration';
import { OrderDeclaration } from './OrderDeclaration';
import { ShapeDeclaration } from '../shape/ShapeDeclaration';
import { ShapeOptions } from 'kittik-shape-basic';
import { ShapeType } from '../shape/Shapes';

export interface SlideDeclaration {
  name: string
  shapes: Array<ShapeDeclaration<ShapeType, ShapeOptions>>
  animations?: AnimationDeclaration[]
  order: OrderDeclaration[]
}
