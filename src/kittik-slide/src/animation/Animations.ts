import { Animationable, AnimationObject } from 'kittik-animation-basic';
import { Focus } from 'kittik-animation-focus';
import { Print } from 'kittik-animation-print';
import { Slide } from 'kittik-animation-slide';

export const ANIMATIONS = new Map<string, { fromObject<T extends AnimationObject>(obj: T): Animationable }>([
  ['Focus', Focus],
  ['Print', Print],
  ['Slide', Slide]
]);
