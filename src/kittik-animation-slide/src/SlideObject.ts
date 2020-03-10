import { AnimationObject } from 'kittik-animation-basic/dist/AnimationObject';
import { SlideOptions } from './SlideOptions';

export interface SlideObject extends AnimationObject {
  options?: Partial<SlideOptions>
}
