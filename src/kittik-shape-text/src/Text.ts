import { Canvas } from 'terminal-canvas';
import { Shape, ShapeRenderable } from 'kittik-shape-basic';
import { TextObject } from './TextObject';
import { TextOptions } from './TextOptions';

export class Text extends Shape implements TextOptions, ShapeRenderable {
  align: 'left' | 'center' | 'right' = 'center';
  blink = false;
  bold = false;
  dim = false;
  hidden = false;
  reverse = false;
  underlined = false;

  constructor(cursor: Canvas, options?: Partial<TextOptions>) {
    super(cursor, options);

    if (options?.align !== undefined) {
      this.align = options.align;
    }

    if (options?.blink !== undefined) {
      this.blink = options.blink;
    }

    if (options?.bold !== undefined) {
      this.bold = options.bold;
    }

    if (options?.dim !== undefined) {
      this.dim = options.dim;
    }

    if (options?.hidden !== undefined) {
      this.hidden = options.hidden;
    }

    if (options?.reverse !== undefined) {
      this.reverse = options.reverse;
    }

    if (options?.underlined !== undefined) {
      this.underlined = options.underlined;
    }
  }

  get width(): string {
    const lengths = this.text.split('\n').map(item => item.length);
    return Math.max(...lengths).toString();
  }

  get height(): string {
    return this.text.split('\n').length.toString();
  }

  render(): void {
    const cursor = this.cursor;
    const text = this.text.split('\n');
    const x = parseInt(this.x);
    const y = parseInt(this.y);
    const width = parseInt(this.width);

    cursor
      .background(this.background)
      .foreground(this.foreground)
      .blink(this.blink)
      .bold(this.bold)
      .dim(this.dim)
      .hidden(this.hidden)
      .reverse(this.reverse)
      .underlined(this.underlined);

    text.forEach((line, index) => {
      switch (this.align) {
        case 'left':
          cursor.moveTo(x, y + index).write(line);
          break;
        case 'center':
          cursor.moveTo(x + Math.floor(width / 2 - line.length / 2), y + index).write(line);
          break;
        case 'right':
          cursor.moveTo(x + (width - line.length), y + index).write(line);
          break;
      }
    });
  }

  toObject<T extends TextObject>(): T {
    const obj: TextObject = super.toObject();
    obj.options = {
      ...obj.options,
      align: this.align,
      blink: this.blink,
      bold: this.bold,
      dim: this.dim,
      hidden: this.hidden,
      reverse: this.reverse,
      underlined: this.underlined
    };

    return obj as T;
  }
}
