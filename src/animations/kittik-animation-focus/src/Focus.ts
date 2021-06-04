import { Animation } from "kittik-animation-basic";
import type { Animationable } from "kittik-animation-basic";
import type {
  BounceDirection,
  Direction,
  FocusOptions,
  ShakeDirection,
} from "./FocusOptions";
import type { FocusObject } from "./FocusObject";
import type { Shape } from "kittik-shape-basic";

export { FocusObject } from "./FocusObject";
export {
  FocusOptions,
  Direction,
  BounceDirection,
  ShakeDirection,
} from "./FocusOptions";

export class Focus extends Animation implements FocusOptions, Animationable {
  public direction: Direction = "shakeX";
  public offset = 5;
  public repeat = 1;

  public constructor(options?: Partial<FocusOptions>) {
    super(options);

    if (typeof options?.duration !== "undefined") {
      this.duration = options.duration;
    }

    if (typeof options?.direction !== "undefined") {
      this.direction = options.direction;
    }

    if (typeof options?.offset !== "undefined") {
      this.offset = options.offset;
    }

    if (typeof options?.repeat !== "undefined") {
      this.repeat = options.repeat;
    }
  }

  public get duration(): number {
    return this.rawDuration / this.repeat;
  }

  public set duration(duration: number) {
    this.rawDuration = duration;
  }

  public async animate<T extends Shape>(shape: T): Promise<T> {
    const { direction } = this;

    if (direction.includes("bounce")) {
      return await this.animateBounce(shape, direction as BounceDirection);
    }

    if (direction.includes("shake")) {
      return await this.animateShake(shape, direction as ShakeDirection);
    }

    throw new Error(
      'Focus animation does not support any other directions, except "bounce" or "shake". ' +
        `But, you specified as a direction for the animation "${direction}". ` +
        "Maybe you made a typo?"
    );
  }

  public toObject(): FocusObject {
    const base = super.toObject();
    const type: FocusObject["type"] = "Focus";
    const options: FocusObject["options"] = {
      ...base.options,
      direction: this.direction,
      offset: this.offset,
      repeat: this.repeat,
    };

    return { type, options };
  }

  private async animateBounce<T extends Shape>(
    shape: T,
    direction: BounceDirection
  ): Promise<T> {
    const x = parseInt(shape.x, 10);
    const y = parseInt(shape.y, 10);
    const { offset } = this;

    let startValue = 0;
    let endValue = 0;
    let property: keyof T = "x";
    switch (direction) {
      case "bounceUp":
        startValue = y;
        endValue = y - offset;
        property = "y";
        break;
      case "bounceRight":
        startValue = x;
        endValue = x + offset;
        property = "x";
        break;
      case "bounceDown":
        startValue = y;
        endValue = y + offset;
        property = "y";
        break;
      case "bounceLeft":
        startValue = x;
        endValue = x - offset;
        property = "x";
        break;
      default:
        throw new Error(
          `Unexpected direction for bounce animation: ${direction as string}`
        );
    }

    const firstStep = async (): Promise<T> =>
      await this.animateProperty({
        shape,
        property,
        startValue,
        endValue,
      });

    const secondStep = async (): Promise<T> =>
      await this.animateProperty({
        shape,
        property,
        startValue: endValue,
        endValue: startValue,
      });

    let sequence: Promise<T> = Promise.resolve(shape);
    for (let counter = this.repeat; counter > 0; counter -= 1) {
      sequence = sequence.then(firstStep).then(secondStep);
    }

    return await sequence;
  }

  private async animateShake<T extends Shape>(
    shape: T,
    direction: ShakeDirection
  ): Promise<T> {
    const x = parseInt(shape.x, 10);
    const y = parseInt(shape.y, 10);
    const { offset } = this;

    let startValue = 0;
    let leftValue = 0;
    let rightValue = 0;
    let property: keyof T = "x";
    switch (direction) {
      case "shakeX":
        startValue = x;
        leftValue = x - offset;
        rightValue = x + offset;
        property = "x";
        break;
      case "shakeY":
        startValue = y;
        leftValue = y - offset;
        rightValue = y + offset;
        property = "y";
        break;
      default:
        throw new Error(
          `Unexpected direction for shake animation: ${direction as string}`
        );
    }

    const firstStep = async (): Promise<T> =>
      await this.animateProperty({
        shape,
        property,
        startValue,
        endValue: leftValue,
      });

    const secondStep = async (): Promise<T> =>
      await this.animateProperty({
        shape,
        property,
        startValue: leftValue,
        endValue: rightValue,
      });

    const thirdStep = async (): Promise<T> =>
      await this.animateProperty({
        shape,
        property,
        startValue: rightValue,
        endValue: startValue,
      });

    let sequence: Promise<T> = Promise.resolve(shape);
    for (let counter = this.repeat; counter > 0; counter -= 1) {
      sequence = sequence.then(firstStep).then(secondStep).then(thirdStep);
    }

    return await sequence;
  }
}
