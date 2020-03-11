import { AnimationObject } from 'kittik-animation-basic';
import { FocusOptions } from './FocusOptions';

export interface FocusObject extends AnimationObject {
  options?: Partial<FocusOptions>
}
