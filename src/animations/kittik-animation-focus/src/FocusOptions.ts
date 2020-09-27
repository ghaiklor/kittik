import type { AnimationOptions } from 'kittik-animation-basic';

export type BounceDirection = 'bounceUp' | 'bounceRight' | 'bounceDown' | 'bounceLeft';
export type ShakeDirection = 'shakeX' | 'shakeY';
export type Direction = BounceDirection | ShakeDirection;

export interface FocusOptions extends AnimationOptions {
  direction: Direction
  offset: number
  repeat: number
}
