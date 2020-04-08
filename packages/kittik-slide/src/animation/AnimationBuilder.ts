import { ANIMATIONS, AnimationType } from './Animations';
import { AnimationObject, AnimationOptions, Animationable, Easing } from 'kittik-animation-basic';

export class AnimationBuilder implements AnimationObject {
  public type: AnimationType;
  public options?: Partial<AnimationOptions>;

  public constructor (type: AnimationType) {
    this.type = type;
  }

  public static start (type: AnimationType): AnimationBuilder {
    return new this(type);
  }

  public withType (type: AnimationType): this {
    this.type = type;

    return this;
  }

  public withOptions (options: Partial<AnimationOptions>): this {
    this.options = { ...this.options, ...options };

    return this;
  }

  public withDuration (duration: number): this {
    this.options = { ...this.options, duration };

    return this;
  }

  public withEasing (easing: Easing): this {
    this.options = { ...this.options, easing };

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
