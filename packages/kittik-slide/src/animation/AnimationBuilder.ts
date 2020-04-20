import { ANIMATIONS, AnimationOptions, AnimationType } from './Animations';
import { Animationable } from 'kittik-animation-basic';

export class AnimationBuilder<T extends AnimationType, O extends AnimationOptions<T>> {
  public type: T;
  public options: Partial<O>;

  public constructor (type: T) {
    this.type = type;
    this.options = {};
  }

  public static start <T extends AnimationType, O extends AnimationOptions<T>>(type: T): AnimationBuilder<T, O> {
    return new this(type);
  }

  public withType (type: T): this {
    this.type = type;
    return this;
  }

  public withOptions (options: Partial<O>): this {
    this.options = { ...this.options, ...options };
    return this;
  }

  public withDuration (duration: O['duration']): this {
    this.options.duration = duration;
    return this;
  }

  public withEasing (easing: O['easing']): this {
    this.options.easing = easing;
    return this;
  }

  public end (): Animationable {
    const ctr = ANIMATIONS.get(this.type);
    if (typeof ctr === 'undefined') {
      throw new Error(
        `You tried to build an animation with the type "${this.type}". ` +
        'But the animation of this type is not implemented or you made a typo.'
      );
    }

    return ctr.fromObject(this);
  }
}
