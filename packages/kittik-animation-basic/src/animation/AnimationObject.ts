import { AnimationOptions } from './AnimationOptions';

export interface AnimationObject<T, O extends AnimationOptions> {
  type: T
  options: O
}
