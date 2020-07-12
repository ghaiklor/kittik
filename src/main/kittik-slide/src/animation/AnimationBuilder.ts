import { ANIMATIONS, AnimationOptions, AnimationType } from './Animations';
import { AnimationObject, Animationable } from 'kittik-animation-basic';

export class AnimationBuilder<T extends AnimationType, O extends AnimationOptions<T>> implements AnimationObject<T, O> {
  public type: T;
  public options: O;

  public constructor (type: T) {
    this.type = type;

    // eslint-disable-next-line no-warning-comments
    // TODO: what to do with this unknown?
    this.options = {} as unknown as O;
  }

  public static start <T extends AnimationType, O extends AnimationOptions<T>> (type: T): AnimationBuilder<T, O> {
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

    return ctr.fromObject<T, O, Animationable>(this);
  }
}
