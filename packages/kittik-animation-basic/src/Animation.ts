import * as EASING from './Easing';
import { AnimationObject } from './AnimationObject';
import { AnimationOptions } from './AnimationOptions';
import { AnimationPropertyOptions } from './AnimationPropertyOptions';
import { EventEmitter } from 'events';
import { Shape } from 'kittik-shape-basic';

export { Animationable } from './Animationable';
export { AnimationObject } from './AnimationObject';
export { AnimationOptions } from './AnimationOptions';
export { AnimationPropertyOptions } from './AnimationPropertyOptions';
export { Easing } from './Easing';

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

  public static create<T extends Animation>(options?: Partial<AnimationOptions>): T
  public static create<T extends Animation, O extends AnimationOptions>(options?: Partial<O>): T {
    return (new this(options)) as T;
  }

  public static fromObject<T extends Animation>(obj: AnimationObject): T
  public static fromObject<T extends Animation, O extends AnimationObject>(obj: O): T {
    if (obj.type !== this.name) {
      throw new Error(
        `You specified configuration for "${obj.type}" but provided it to "${this.name}". ` +
        `Did you mean to set "type" in configuration to "${this.name}"?`
      );
    }

    return this.create(obj.options);
  }

  public static fromJSON<T extends Animation>(json: string): T {
    return this.fromObject(JSON.parse(json));
  }

  // eslint-disable-next-line class-methods-use-this
  public onTick<S extends Shape, P extends keyof S, V extends number>(shape: S, property: P, value: V): void {
    Object.assign(shape, { [property]: value });
  }

  // eslint-disable-next-line class-methods-use-this
  public onEasing (easing: EASING.Easing, time: number, startValue: number, byValue: number, duration: number): number {
    return Math.round(EASING[easing](time, startValue, byValue, duration));
  }

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
        this.emit('tick', shape, property, this.onEasing(easing, currentTime - start, startValue, byValue, duration));
        this.delay(delay).then(() => tick(resolve, reject)).catch(reject);
      }
    };

    return await new Promise(tick);
  }

  public toObject<T extends AnimationObject>(): T {
    return {
      type: this.constructor.name,
      options: {
        duration: this.duration,
        easing: this.easing
      }
    } as T;
  }

  public toJSON (): string {
    return JSON.stringify(this.toObject());
  }
}
