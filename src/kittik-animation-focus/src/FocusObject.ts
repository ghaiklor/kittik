import { AnimationObject } from 'kittik-animation-basic/dist/AnimationObject';
import { FocusOptions } from './FocusOptions';

export interface FocusObject extends AnimationObject {
  options?: Partial<FocusOptions>
}
