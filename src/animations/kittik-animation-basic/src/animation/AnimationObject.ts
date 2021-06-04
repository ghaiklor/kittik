import type { AnimationOptions } from "./AnimationOptions";

export interface AnimationObject<T, O extends Partial<AnimationOptions>> {
  type: T;
  options: O;
}
