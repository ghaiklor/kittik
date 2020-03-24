import { AnimationObject } from './AnimationObject';
import { AnimationOptions } from './AnimationOptions';
import { AnimationPropertyOptions } from './AnimationPropertyOptions';
import { EventEmitter } from 'events';
import { Shape } from 'kittik-shape-basic';
import * as EASING from './Easing';

export { Animationable } from './Animationable';
export { AnimationObject } from './AnimationObject';
export { AnimationOptions } from './AnimationOptions';
export { AnimationPropertyOptions } from './AnimationPropertyOptions';
export { Easing } from './Easing';

export declare interface Animation {
  on<S extends Shape, P extends keyof S, V extends number>(event: 'tick', listener: (shape: S, property: P, value: V) => void): this
  emit<S extends Shape, P extends keyof S, V extends number>(event: 'tick', shape: S, property: P, value: V): boolean
}

export class Animation extends EventEmitter implements AnimationOptions {
  duration = 1000;
  easing: EASING.Easing = 'outQuad';

  constructor (options?: Partial<AnimationOptions>) {
    super();

    if (options?.duration !== undefined) {
      this.duration = options.duration;
    }

    if (options?.easing !== undefined) {
      this.easing = options.easing;
    }

    this.on('tick', this.onTick.bind(this));
  }

  onTick<S extends Shape, P extends keyof S, V extends number>(shape: S, property: P, value: V): void {
    Object.assign(shape, { [property]: value });
  }

  onEasing (easing: EASING.Easing, time: number, startValue: number, byValue: number, duration: number): number {
    return Math.round(EASING[easing](time, startValue, byValue, duration));
  }

  async delay (ms: number): Promise<void> {
    return await new Promise(resolve => setTimeout(resolve, isFinite(ms) ? ms : 1));
  }

  async animateProperty<S extends Shape, P extends keyof S>(options: AnimationPropertyOptions<S, P>): Promise<S> {
    const shape = options.shape;
    const property = options.property;
    const startValue = options.startValue;
    const endValue = options.endValue;
    const byValue = options.byValue ?? (endValue - startValue);
    const duration = options.duration ?? this.duration;
    const easing = options.easing ?? this.easing;
    const delay = duration / (endValue - startValue);
    const start = Date.now();
    const end = start + duration;
    const tick = (resolve: Function, reject: Function): void => {
      const currentTime = Date.now();

      if (currentTime > end) {
        resolve(shape);
      } else {
        this.emit('tick', shape, property, this.onEasing(easing, currentTime - start, startValue, byValue, duration));
        this.delay(delay).then(() => tick(resolve, reject)).catch((e) => reject(e));
      }
    };

    return await new Promise(tick);
  }

  toObject<T extends AnimationObject>(): T {
    const obj = {
      type: this.constructor.name,
      options: {
        duration: this.duration,
        easing: this.easing
      }
    };

    return obj as T;
  }

  toJSON (): string {
    return JSON.stringify(this.toObject());
  }

  static create<T extends Animation>(options?: Partial<AnimationOptions>): T
  static create<T extends Animation, O extends AnimationOptions>(options?: Partial<O>): T {
    return (new this(options)) as T;
  }

  static fromObject<T extends Animation>(obj: AnimationObject): T
  static fromObject<T extends Animation, O extends AnimationObject>(obj: O): T {
    if (obj.type !== this.name) {
      throw new Error(
        `${obj.type} is not an object representation of the ${this.name}.` +
        `Did you mean to set ${this.name} as a type of animation?`
      );
    }

    return this.create(obj.options);
  }

  static fromJSON<T extends Animation>(json: string): T {
    return this.fromObject(JSON.parse(json));
  }
}
