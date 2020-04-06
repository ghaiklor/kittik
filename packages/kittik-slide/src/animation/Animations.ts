import { Animationable, AnimationObject } from 'kittik-animation-basic';
import { Focus } from 'kittik-animation-focus';
import { Print } from 'kittik-animation-print';
import { Slide } from 'kittik-animation-slide';

export type AnimationType = 'Focus' | 'Print' | 'Slide';

// eslint-disable-next-line @typescript-eslint/no-extra-parens
export const ANIMATIONS = new Map<AnimationType, { fromObject<T extends AnimationObject>(obj: T): Animationable }>([
  ['Focus', Focus],
  ['Print', Print],
  ['Slide', Slide]
]);
