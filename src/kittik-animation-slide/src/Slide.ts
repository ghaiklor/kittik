import { Animation, Animationable } from 'kittik-animation-basic';
import { Shape } from 'kittik-shape-basic';
import { SlideObject } from './SlideObject';
import { SlideOptions, Direction } from './SlideOptions';

export class Slide extends Animation implements SlideOptions, Animationable {
  direction: Direction = 'inRight';

  constructor(options?: Partial<SlideOptions>) {
    super(options);

    if (options?.direction !== undefined) {
      this.direction = options.direction;
    }
  }

  private parseCoordinates<T extends Shape>(shape: T): { startX: number, startY: number, endX: number, endY: number } {
    const cursor = shape.cursor;
    const x = parseInt(shape.x);
    const y = parseInt(shape.y);
    const width = parseInt(shape.width);
    const height = parseInt(shape.height);
    const directions = {
      inUp: () => [x, -height, x, y],
      inDown: () => [x, cursor.height + height, x, y],
      inLeft: () => [-width, y, x, y],
      inRight: () => [cursor.width + width, y, x, y],
      outUp: () => [x, y, x, -height],
      outDown: () => [x, y, x, cursor.height + height],
      outLeft: () => [x, y, -width, y],
      outRight: () => [x, y, cursor.width + 1, y]
    };

    const [startX, startY, endX, endY] = directions[this.direction]();

    return { startX, startY, endX, endY };
  }

  async animate<T extends Shape>(shape: T): Promise<T> {
    const { startX, startY, endX, endY } = this.parseCoordinates(shape);

    return Promise.all([
      this.animateProperty({ shape, property: 'x', startValue: startX, endValue: endX }),
      this.animateProperty({ shape, property: 'y', startValue: startY, endValue: endY })
    ]).then(async () => Promise.resolve(shape));
  }

  toObject<T extends SlideObject>(): T {
    const obj: SlideObject = super.toObject();
    obj.options = { ...obj.options, direction: this.direction };

    return obj as T;
  }
}
