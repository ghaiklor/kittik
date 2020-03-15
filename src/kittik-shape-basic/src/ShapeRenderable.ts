import { Shape } from './Shape';

export interface ShapeRenderable extends Shape {
  render: () => void
}
