import { SHAPES, ShapeType } from './Shapes';
import { ShapeObject, ShapeOptions, ShapeRenderable } from 'kittik-shape-basic';

export class ShapeBuilder implements ShapeObject {
  public type: ShapeType;
  public options?: Partial<ShapeOptions>;

  public constructor (type: ShapeType) {
    this.type = type;
  }

  public static start (type: ShapeType): ShapeBuilder {
    return new this(type);
  }

  public withType (type: ShapeType): this {
    this.type = type;

    return this;
  }

  public withOptions (options: Partial<ShapeOptions>): this {
    this.options = { ...this.options, ...options };

    return this;
  }

  public withText (text: string): this {
    this.options = { ...this.options, text };

    return this;
  }

  public withX (x: string): this {
    this.options = { ...this.options, x };

    return this;
  }

  public withY (y: string): this {
    this.options = { ...this.options, y };

    return this;
  }

  public withWidth (width: string): this {
    this.options = { ...this.options, width };

    return this;
  }

  public withHeight (height: string): this {
    this.options = { ...this.options, height };

    return this;
  }

  public withBackground (background: string): this {
    this.options = { ...this.options, background };

    return this;
  }

  public withForeground (foreground: string): this {
    this.options = { ...this.options, foreground };

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

    return ctr.fromObject(this);
  }
}
