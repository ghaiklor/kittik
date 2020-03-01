import { AnimationObject } from './AnimationObject'
import { AnimationOptions } from './AnimationOptions'
import { EventEmitter } from 'events'
import * as EASING from './Easing'

export class Animation extends EventEmitter implements AnimationOptions {
  duration = 1000;
  easing: EASING.Easing = 'outQuad';

  constructor(options?: Partial<AnimationOptions>) {
    super()

    if (options?.duration !== undefined) {
      this.duration = options.duration
    }

    if (options?.easing !== undefined) {
      this.easing = options.easing
    }

    this.on('tick', this.onTick.bind(this))
  }

  delay(ms = 1): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  onTick<S, V>(shape: S, property: string, value: V): Animation {
    shape.set(property, value)
    return this
  }

  onEasing(easing: EASING.Easing, time: number, startValue: number, byValue: number, duration: number) {
    return Math.round(EASING[easing](time, startValue, byValue, duration))
  }

  animate() {
    return Promise.reject(new Error('You must implement animate() method'))
  }

  animateProperty(options) {
    const shape = options.shape
    const property = options.property
    const startValue = options.startValue
    const endValue = options.endValue
    const byValue = options.byValue || (endValue - startValue)
    const duration = options.duration || this.duration
    const easing = options.easing || this.easing
    const delay = duration / (endValue - startValue)
    const start = Date.now()
    const end = start + duration
    const tick = resolve => {
      const currentTime = Date.now()

      if (currentTime > end) {
        resolve(shape)
      } else {
        this.emit('tick', shape, property, this.onEasing(easing, currentTime - start, startValue, byValue, duration))
        this.delay(delay).then(() => tick(resolve))
      }
    }

    return new Promise(tick)
  }

  toObject(): AnimationObject {
    return {
      type: this.constructor.name,
      options: {
        duration: this.duration,
        easing: this.easing
      }
    }
  }

  toJSON(): string {
    return JSON.stringify(this.toObject())
  }

  static create(options?: Partial<AnimationOptions>): Animation {
    return new this(options)
  }

  static fromObject(obj: AnimationObject): Animation {
    if (obj.type !== this.name) throw new Error(`${obj.type} is not an object representation of the ${this.name}`)

    return this.create(obj.options)
  }

  static fromJSON(json: string): Animation {
    return this.fromObject(JSON.parse(json))
  }
}
