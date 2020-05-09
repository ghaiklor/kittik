import { AnimationDeclaration, ShapeDeclaration, SlideDeclaration } from 'kittik-slide';

export interface DeckDeclaration {
  shapes?: ShapeDeclaration[]
  animations?: AnimationDeclaration[]
  slides: SlideDeclaration[]
}
