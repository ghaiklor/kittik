import { Focus, FocusObject, FocusOptions } from 'kittik-animation-focus';
import { Print, PrintObject, PrintOptions } from 'kittik-animation-print';
import { Slide, SlideObject, SlideOptions } from 'kittik-animation-slide';
import { Animation } from 'kittik-animation-basic';

export type AnimationType = 'Focus' | 'Print' | 'Slide';
export type AnimationOptions<T extends AnimationType> = TypesMap[T]['options'];
export type AnimationObject<T extends AnimationType> = TypesMap[T]['object'];

export const ANIMATIONS = new Map<AnimationType, typeof Animation>([
  ['Focus', Focus],
  ['Print', Print],
  ['Slide', Slide]
]);

interface TypesMap {
  Focus: { options: FocusOptions, object: FocusObject }
  Print: { options: PrintOptions, object: PrintObject }
  Slide: { options: SlideOptions, object: SlideObject }
}
