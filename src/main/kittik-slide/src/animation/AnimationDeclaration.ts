import type { AnimationOptions, AnimationType } from "./Animations";
import type { AnimationObject } from "kittik-animation-basic";

export interface AnimationDeclaration
  extends AnimationObject<
    AnimationType,
    Partial<AnimationOptions<AnimationType>>
  > {
  name: string;
}
