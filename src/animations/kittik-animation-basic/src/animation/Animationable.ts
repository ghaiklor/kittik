import type { Animation } from './Animation';
import type { Shape } from 'kittik-shape-basic';

export interface Animationable extends Animation {
  animate: <T extends Shape>(shape: T) => Promise<T>
}
