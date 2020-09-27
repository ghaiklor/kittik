import type { AnimationOptions } from 'kittik-animation-basic';

export type Direction = 'inUp' | 'inDown' | 'inLeft' | 'inRight' | 'outUp' | 'outDown' | 'outLeft' | 'outRight';

export interface SlideOptions extends AnimationOptions {
  direction: Direction
}
