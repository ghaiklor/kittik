import { AnimationObject } from 'kittik-animation-basic';
import { SlideOptions } from './SlideOptions';

export interface SlideObject extends AnimationObject {
  options?: Partial<SlideOptions>
}
