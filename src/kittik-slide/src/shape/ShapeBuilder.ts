import { ShapeObject, ShapeOptions, ShapeRenderable } from 'kittik-shape-basic';
import { ShapeType, SHAPES } from './Shapes';
import { Canvas } from 'terminal-canvas';

export class ShapeBuilder implements ShapeObject {
  cursor: Canvas = Canvas.create();
  type: ShapeType;
  options?: Partial<ShapeOptions>;

  constructor (type: ShapeType) {
    this.type = type;
  }

  withCursor (cursor: Canvas): this {
    this.cursor = cursor;

    return this;
  }

  withType (type: ShapeType): this {
    this.type = type;

    return this;
  }

  withOptions (options: Partial<ShapeOptions>): this {
    this.options = { ...this.options, ...options };

    return this;
  }

  withText (text: string): this {
    this.options = { ...this.options, text };

    return this;
  }

  withX (x: string): this {
    this.options = { ...this.options, x };

    return this;
  }

  withY (y: string): this {
    this.options = { ...this.options, y };

    return this;
  }

  withWidth (width: string): this {
    this.options = { ...this.options, width };

    return this;
  }

  withHeight (height: string): this {
    this.options = { ...this.options, height };

    return this;
  }

  withBackground (background: string): this {
    this.options = { ...this.options, background };

    return this;
  }

  withForeground (foreground: string): this {
    this.options = { ...this.options, foreground };

    return this;
  }

  end (): ShapeRenderable {
    const ctr = SHAPES.get(this.type);
    if (ctr === undefined) {
      throw new Error(`Shape "${this.type}" you tried to build does not exist`);
    }

    return ctr.fromObject(this, this.cursor);
  }

  static start (type: ShapeType): ShapeBuilder {
    return new this(type);
  }
}
