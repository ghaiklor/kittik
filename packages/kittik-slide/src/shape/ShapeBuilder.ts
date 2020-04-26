import { SHAPES, ShapeOptions, ShapeType } from './Shapes';
import { ShapeObject, ShapeRenderable } from 'kittik-shape-basic';

export class ShapeBuilder<T extends ShapeType, O extends ShapeOptions<T>> implements ShapeObject<T, O> {
  public type: T;
  public options: O;

  public constructor (type: T) {
    this.type = type;

    // eslint-disable-next-line no-warning-comments
    // TODO: hmm, think about this unknown
    this.options = {} as unknown as O;
  }

  public static start <T extends ShapeType, O extends ShapeOptions<T>>(type: T): ShapeBuilder<T, O> {
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

  public withText (text: O['text']): this {
    this.options.text = text;
    return this;
  }

  public withX (x: O['x']): this {
    this.options.x = x;
    return this;
  }

  public withY (y: O['y']): this {
    this.options.y = y;
    return this;
  }

  public withWidth (width: O['width']): this {
    this.options.width = width;
    return this;
  }

  public withHeight (height: O['height']): this {
    this.options.height = height;
    return this;
  }

  public withBackground (background: O['background']): this {
    this.options.background = background;
    return this;
  }

  public withForeground (foreground: O['foreground']): this {
    this.options.foreground = foreground;
    return this;
  }

  public end (): ShapeRenderable {
    const ctr = SHAPES.get(this.type);
    if (typeof ctr === 'undefined') {
      throw new Error(
        `You tried to build a shape with the type "${this.type}". ` +
        'But the shape of this type is not implemented or you made a typo.'
      );
    }

    return ctr.fromObject<T, O, ShapeRenderable>(this);
  }
}
