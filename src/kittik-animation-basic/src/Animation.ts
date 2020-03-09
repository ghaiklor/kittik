import { AnimationObject } from './AnimationObject';
import { AnimationOptions } from './AnimationOptions';
import { AnimationPropertyOptions } from './AnimationPropertyOptions';
import { EventEmitter } from 'events';
import { Shape } from 'kittik-shape-basic';
import * as EASING from './Easing';

export class Animation extends EventEmitter implements AnimationOptions {
  duration = 1000;
  easing: EASING.Easing = 'outQuad';

  constructor(options?: Partial<AnimationOptions>) {
    super();

    if (options?.duration !== undefined) {
      this.duration = options.duration;
    }

    if (options?.easing !== undefined) {
      this.easing = options.easing;
    }

    this.on('tick', this.onTick.bind(this));
  }

  onTick<S extends Shape, P extends keyof S, V extends S[P]>(shape: S, property: P, value: V): void {
    shape[property] = value;
  }

  onEasing(easing: EASING.Easing, time: number, startValue: number, byValue: number, duration: number): number {
    return Math.round(EASING[easing](time, startValue, byValue, duration));
  }

  // TODO: this was done a long time ago when kittik was written in JavaScript
  // Now, we need to think about abstract classes maybe, or something else
  // that we can use to abstract implementation from the signature
  // For now, I left it till I'm done with porting it to TypeScript
  // eslint-disable-next-line
  // @ts-ignore
  // eslint-disable-next-line
  async animate<T extends Shape>(shape: T): Promise<T> {
    throw new Error('You must implement animate() method');
  }

  async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
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

    return new Promise(tick);
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

  toJSON(): string {
    return JSON.stringify(this.toObject());
  }

  static create<T extends Animation>(options?: Partial<AnimationOptions>): T
  static create<T extends Animation, O extends AnimationOptions>(options?: Partial<O>): T {
    return (new this(options)) as T;
  }

  static fromObject<T extends Animation>(obj: AnimationObject): T
  static fromObject<T extends Animation, O extends AnimationObject>(obj: O): T {
    if (obj.type !== this.name) throw new Error(`${obj.type} is not an object representation of the ${this.name}`);

    return this.create(obj.options);
  }

  static fromJSON<T extends Animation>(json: string): T {
    return this.fromObject(JSON.parse(json));
  }
}
