import { AnimationDeclaration } from '../animation/AnimationDeclaration';
import { OrderDeclaration } from './OrderDeclaration';
import { ShapeDeclaration } from '../shape/ShapeDeclaration';

export interface SlideDeclaration {
  name: string
  shapes: ShapeDeclaration[]
  animations?: AnimationDeclaration[]
  order: OrderDeclaration[]
}
