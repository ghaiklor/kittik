import type { AnimationOptions } from './AnimationOptions';
import type { Shape } from 'kittik-shape-basic';

export interface AnimationPropertyOptions<S extends Shape, P extends keyof S> extends Partial<AnimationOptions> {
  shape: S
  property: P
  startValue: number
  endValue: number
  byValue?: number
}
