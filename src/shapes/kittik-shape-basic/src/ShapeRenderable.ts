import type { Canvas } from 'terminal-canvas';
import type { Shape } from './Shape';

export interface ShapeRenderable extends Shape {
  render: <T extends Canvas>(canvas: T) => void
}
