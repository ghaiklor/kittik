import { Shape } from 'kittik-shape-basic';

export interface Animationable {
  animate<T extends Shape>(shape: T): Promise<T>
}
