import * as EASING from '../easing/Easing';
import { AnimationObject } from './AnimationObject';
import { AnimationOptions } from './AnimationOptions';
import { AnimationPropertyOptions } from './AnimationPropertyOptions';
import { EasingOptions } from '../easing/EasingOptions';
import { EventEmitter } from 'events';
import { Shape } from 'kittik-shape-basic';

export { Animationable } from './Animationable';
export { AnimationObject } from './AnimationObject';
export { AnimationOptions } from './AnimationOptions';
export { AnimationPropertyOptions } from './AnimationPropertyOptions';
export { Easing } from '../easing/Easing';
export { EasingOptions } from '../easing/EasingOptions';

export declare interface Animation {
  on: <
    S extends Shape,
    P extends keyof S,
    V extends number
  >(
    event: 'tick',
    listener: (shape: S, property: P, value: V) => void
  ) => this

  emit: <
    S extends Shape,
    P extends keyof S,
    V extends number
  >(
    event: 'tick',
    shape: S,
    property: P,
    value: V
  ) => boolean
}

export class Animation extends EventEmitter implements AnimationOptions {
  public duration = 1000;
  public easing: EASING.Easing = 'outQuad';

  public constructor (options?: Partial<AnimationOptions>) {
    super();

    if (typeof options?.duration !== 'undefined') {
      this.duration = options.duration;
    }

    if (typeof options?.easing !== 'undefined') {
      this.easing = options.easing;
    }

    this.on('tick', this.onTick.bind(this));
  }

  public static create <A extends Animation, O extends Partial<AnimationOptions>>(options: O): A
  public static create <O extends Partial<AnimationOptions>>(options: O): Animation
  public static create (options: Partial<AnimationOptions>): Animation {
    return new this(options);
  }

  public static fromObject <T, O extends Partial<AnimationOptions>, A extends Animation>(obj: AnimationObject<T, O>): A
  public static fromObject <T, O extends Partial<AnimationOptions>>(obj: AnimationObject<T, O>): Animation
  public static fromObject <T>(obj: AnimationObject<T, Partial<AnimationOptions>>): Animation
  public static fromObject (obj: AnimationObject<'Basic', Partial<AnimationOptions>>): Animation {
    if (obj.type !== this.name) {
      throw new Error(
        `You specified configuration for "${obj.type}" but provided it to "${this.name}". ` +
        `Did you mean to set "type" in configuration to "${this.name}"?`
      );
    }

    return this.create(obj.options);
  }

  public static fromJSON <A extends Animation>(json: string): A {
    return this.fromObject(JSON.parse(json));
  }

  // We need to have a possibility to override onTick in children
  // Moreover, in case overridden method wants to use its `this` we need to have it here
  // Even if we do not use `this` in this specific implementation, someone else can
  // eslint-disable-next-line class-methods-use-this
  public onTick <S extends Shape, P extends keyof S, V extends number>(shape: S, property: P, value: V): void {
    Object.assign(shape, { [property]: value });
  }

  // The same scenario applies to `this` in this method
  // Someone else can override it in children and make use of `this` in his own class
  // eslint-disable-next-line class-methods-use-this
  public onEasing (easing: EASING.Easing, options: EasingOptions): number {
    return Math.round(EASING[easing](options.time, options.startValue, options.byValue, options.duration));
  }

  // Again, the same scenario as above
  // Someone else can override it in children and make use of `this` in his own class
  // eslint-disable-next-line class-methods-use-this
  public async delay (ms: number): Promise<void> {
    return await new Promise((resolve) => setTimeout(resolve, isFinite(ms) ? ms : 1));
  }

  public async animateProperty<
    S extends Shape,
    P extends keyof S
  >(options: AnimationPropertyOptions<S, P>): Promise<S> {
    const { shape, property, startValue, endValue } = options;
    const byValue = options.byValue ?? (endValue - startValue);
    const duration = options.duration ?? this.duration;
    const easing = options.easing ?? this.easing;
    const delay = duration / (endValue - startValue);
    const start = Date.now();
    const end = start + duration;
    const tick = (resolve: (shape: S) => void, reject: () => void): void => {
      const currentTime = Date.now();

      if (currentTime > end) {
        resolve(shape);
      } else {
        this.emit(
          'tick',
          shape,
          property,
          this.onEasing(easing, { time: currentTime - start, startValue, byValue, duration })
        );

        this
          .delay(delay)
          .then(() => tick(resolve, reject))
          .catch(reject);
      }
    };

    return await new Promise(tick);
  }

  public toObject <T, O extends AnimationOptions>(): AnimationObject<T, O>
  public toObject <T>(): AnimationObject<T, AnimationOptions>
  public toObject (): AnimationObject<'Basic', AnimationOptions> {
    const type: 'Basic' = 'Basic' as const;
    const options: AnimationOptions = {
      duration: this.duration,
      easing: this.easing
    };

    return { type, options };
  }

  public toJSON (): string {
    return JSON.stringify(this.toObject());
  }
}
