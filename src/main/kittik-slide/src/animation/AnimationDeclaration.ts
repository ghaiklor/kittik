import { AnimationOptions, AnimationType } from './Animations';
import { AnimationObject } from 'kittik-animation-basic';

export interface AnimationDeclaration extends AnimationObject<AnimationType, Partial<AnimationOptions<AnimationType>>> {
  name: string
}
