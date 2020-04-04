import { Canvas } from 'terminal-canvas';
import { ShapeDeclaration, AnimationDeclaration, SlideDeclaration } from 'kittik-slide';

export interface DeckDeclaration {
  cursor?: Canvas
  shapes?: ShapeDeclaration[]
  animations?: AnimationDeclaration[]
  slides: SlideDeclaration[]
}
