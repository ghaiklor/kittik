import { AnimationOptions } from 'kittik-animation-basic/dist/AnimationOptions';

export type Direction = 'inUp' | 'inDown' | 'inLeft' | 'inRight' | 'outUp' | 'outDown' | 'outLeft' | 'outRight';

export interface SlideOptions extends AnimationOptions {
  direction: Direction
}
