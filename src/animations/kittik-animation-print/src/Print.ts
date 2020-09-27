import type { Animationable } from 'kittik-animation-basic';
import { Animation } from 'kittik-animation-basic';
import type { PrintObject } from './PrintObject';
import type { PrintOptions } from './PrintOptions';
import type { Shape } from 'kittik-shape-basic';

export { PrintObject } from './PrintObject';
export { PrintOptions } from './PrintOptions';

export class Print extends Animation implements PrintOptions, Animationable {
  private originalText = '';

  public onTick <S extends Shape, P extends keyof S, V extends number> (shape: S, _property: P, value: V): void {
    shape.text = this.originalText.slice(0, value);
  }

  public async animate<T extends Shape> (shape: T): Promise<T> {
    this.originalText = shape.text;

    return await this.animateProperty<T, 'text'>({
      shape,
      property: 'text',
      startValue: 0,
      endValue: this.originalText.length
    });
  }

  public toObject (): PrintObject {
    const base = super.toObject();
    const type: PrintObject['type'] = 'Print';
    const options: PrintObject['options'] = {
      ...base.options
    };

    return { type, options };
  }
}
