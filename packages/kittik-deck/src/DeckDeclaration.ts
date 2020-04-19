import { AnimationDeclaration, ShapeDeclaration, SlideDeclaration } from 'kittik-slide';
import { Canvas } from 'terminal-canvas';

export interface DeckDeclaration {
  canvas?: Canvas
  shapes?: ShapeDeclaration[]
  animations?: AnimationDeclaration[]
  slides: SlideDeclaration[]
}
