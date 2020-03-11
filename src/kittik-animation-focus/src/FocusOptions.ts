import { AnimationOptions } from 'kittik-animation-basic';

export type Direction = 'bounceUp' | 'bounceRight' | 'bounceDown' | 'bounceLeft' | 'shakeX' | 'shakeY';

export interface FocusOptions extends AnimationOptions {
  direction: Direction
  offset: number
  repeat: number
}
