import { AnimationObject, AnimationOptions, Animationable, Easing } from 'kittik-animation-basic';
import { AnimationType, ANIMATIONS } from './Animations';

export class AnimationBuilder implements AnimationObject {
  type: AnimationType;
  options?: Partial<AnimationOptions>;

  constructor (type: AnimationType) {
    this.type = type;
  }

  withType (type: AnimationType): this {
    this.type = type;

    return this;
  }

  withOptions (options: Partial<AnimationOptions>): this {
    this.options = { ...this.options, ...options };

    return this;
  }

  withDuration (duration: number): this {
    this.options = { ...this.options, duration };

    return this;
  }

  withEasing (easing: Easing): this {
    this.options = { ...this.options, easing };

    return this;
  }

  end (): Animationable {
    const ctr = ANIMATIONS.get(this.type);
    if (ctr === undefined) {
      throw new Error(`Animation "${this.type}" you tried to build does not exist`);
    }

    return ctr.fromObject(this);
  }

  static start (type: AnimationType): AnimationBuilder {
    return new this(type);
  }
}
