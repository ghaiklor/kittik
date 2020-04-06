import { Animation, Animationable } from 'kittik-animation-basic';
import { FocusObject } from './FocusObject';
import { FocusOptions, Direction, BounceDirection, ShakeDirection } from './FocusOptions';
import { Shape } from 'kittik-shape-basic';

export { FocusObject } from './FocusObject';
export { FocusOptions, Direction, BounceDirection, ShakeDirection } from './FocusOptions';

export class Focus extends Animation implements FocusOptions, Animationable {
  public direction: Direction = 'shakeX';
  public offset = 5;
  public repeat = 1;
  private _duration = 1000;

  public constructor (options?: Partial<FocusOptions>) {
    super(options);

    if (options?.duration !== undefined) {
      this.duration = options.duration;
    }

    if (options?.direction !== undefined) {
      this.direction = options.direction;
    }

    if (options?.offset !== undefined) {
      this.offset = options.offset;
    }

    if (options?.repeat !== undefined) {
      this.repeat = options.repeat;
    }
  }

  public get duration (): number {
    return this._duration / this.repeat;
  }

  public set duration (duration: number) {
    this._duration = duration;
  }

  public async animate<T extends Shape>(shape: T): Promise<T> {
    const direction = this.direction;

    if (direction.includes('bounce')) {
      return await this.animateBounce(shape, direction as BounceDirection);
    } else {
      return await this.animateShake(shape, direction as ShakeDirection);
    }
  }

  public toObject<T extends FocusObject>(): T {
    const obj: FocusObject = super.toObject();
    obj.options = {
      ...obj.options,
      direction: this.direction,
      offset: this.offset,
      repeat: this.repeat
    };

    return obj as T;
  }

  private async animateBounce<T extends Shape>(shape: T, direction: BounceDirection): Promise<T> {
    const x = parseInt(shape.x);
    const y = parseInt(shape.y);
    const offset = this.offset;

    let startValue: number;
    let endValue: number;
    let property: keyof T;
    switch (direction) {
      case 'bounceUp':
        startValue = y;
        endValue = y - offset;
        property = 'y';
        break;
      case 'bounceRight':
        startValue = x;
        endValue = x + offset;
        property = 'x';
        break;
      case 'bounceDown':
        startValue = y;
        endValue = y + offset;
        property = 'y';
        break;
      case 'bounceLeft':
        startValue = x;
        endValue = x - offset;
        property = 'x';
        break;
    }

    const length = this.repeat;
    const firstStep = async (): Promise<T> => await this.animateProperty({ shape, property, startValue, endValue });
    const secondStep = async (): Promise<T> => await this.animateProperty({ shape, property, startValue: endValue, endValue: startValue });

    return await Array.from({ length }).reduce(async (promise: Promise<T>) => await promise.then(firstStep).then(secondStep), Promise.resolve(shape));
  }

  private async animateShake<T extends Shape>(shape: T, direction: ShakeDirection): Promise<T> {
    const x = parseInt(shape.x);
    const y = parseInt(shape.y);
    const offset = this.offset;

    let startValue: number;
    let leftValue: number;
    let rightValue: number;
    let property: keyof T;
    switch (direction) {
      case 'shakeX':
        startValue = x;
        leftValue = x - offset;
        rightValue = x + offset;
        property = 'x';
        break;
      case 'shakeY':
        startValue = y;
        leftValue = y - offset;
        rightValue = y + offset;
        property = 'y';
        break;
    }

    const length = this.repeat;
    const firstStep = async (): Promise<T> => await this.animateProperty({ shape, property, startValue, endValue: leftValue });
    const secondStep = async (): Promise<T> => await this.animateProperty({ shape, property, startValue: leftValue, endValue: rightValue });
    const thirdStep = async (): Promise<T> => await this.animateProperty({ shape, property, startValue: rightValue, endValue: startValue });

    return await Array.from({ length }).reduce(async (promise: Promise<T>) => await promise.then(firstStep).then(secondStep).then(thirdStep), Promise.resolve(shape));
  }
}
