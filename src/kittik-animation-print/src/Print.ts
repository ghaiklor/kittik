import { Animation, Animationable } from 'kittik-animation-basic';
import { Shape } from 'kittik-shape-basic';

export class Print extends Animation implements Animationable {
  private originalText = '';

  onTick<S extends Shape, P extends keyof S, V extends number>(shape: S, _property: P, value: V): void {
    // TODO: this case is special, because I know that I'm changing text here only
    // But I did not figure out, how to explain it to TypeScript yet
    // It has some issues with generics in basic signature
    // eslint-disable-next-line
    // @ts-ignore
    shape.text = this.originalText.slice(0, value);
  }

  async animate<T extends Shape>(shape: T): Promise<T> {
    this.originalText = shape.text;

    return this.animateProperty({ shape, property: 'text', startValue: 0, endValue: this.originalText.length });
  }
}
