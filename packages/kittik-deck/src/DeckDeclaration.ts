import { AnimationDeclaration, ShapeDeclaration, SlideDeclaration } from 'kittik-slide';
import { Canvas } from 'terminal-canvas';

export interface DeckDeclaration {
  cursor?: Canvas
  shapes?: ShapeDeclaration[]
  animations?: AnimationDeclaration[]
  slides: SlideDeclaration[]
}
