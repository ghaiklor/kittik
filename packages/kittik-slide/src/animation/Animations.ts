import { Focus, FocusObject, FocusOptions } from 'kittik-animation-focus';
import { Print, PrintObject, PrintOptions } from 'kittik-animation-print';
import { Slide, SlideObject, SlideOptions } from 'kittik-animation-slide';
import { Animation } from 'kittik-animation-basic';

export type AnimationType = 'Focus' | 'Print' | 'Slide';

export type AnimationOptions<T extends AnimationType> = T extends 'Focus'
  ? FocusOptions
  : T extends 'Print'
    ? PrintOptions
    : T extends 'Slide'
      ? SlideOptions
      : never;

export type AnimationObject<T extends AnimationType> = T extends 'Focus'
  ? FocusObject
  : T extends 'Print'
    ? PrintObject
    : T extends 'Slide'
      ? SlideObject
      : never;

export const ANIMATIONS = new Map<AnimationType, typeof Animation>([
  ['Focus', Focus],
  ['Print', Print],
  ['Slide', Slide]
]);
