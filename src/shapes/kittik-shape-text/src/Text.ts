import type { ShapeRenderable } from 'kittik-shape-basic';
import { Shape } from 'kittik-shape-basic';
import type { Canvas } from 'terminal-canvas';
import type { TextObject } from './TextObject';
import type { TextOptions } from './TextOptions';

export { TextObject } from './TextObject';
export { TextOptions } from './TextOptions';

export class Text extends Shape implements TextOptions, ShapeRenderable {
  public align: 'left' | 'center' | 'right' = 'center';
  public blink = false;
  public bold = false;
  public dim = false;
  public hidden = false;
  public reverse = false;
  public underlined = false;

  public constructor (options?: Partial<TextOptions>) {
    super(options);

    if (typeof options?.align !== 'undefined') {
      this.align = options.align;
    }

    if (typeof options?.blink !== 'undefined') {
      this.blink = options.blink;
    }

    if (typeof options?.bold !== 'undefined') {
      this.bold = options.bold;
    }

    if (typeof options?.dim !== 'undefined') {
      this.dim = options.dim;
    }

    if (typeof options?.hidden !== 'undefined') {
      this.hidden = options.hidden;
    }

    if (typeof options?.reverse !== 'undefined') {
      this.reverse = options.reverse;
    }

    if (typeof options?.underlined !== 'undefined') {
      this.underlined = options.underlined;
    }
  }

  public get width (): string {
    const lengths = this.text.split('\n').map((item) => item.length);
    return Math.max(...lengths).toString();
  }

  public get height (): string {
    return this.text.split('\n').length.toString();
  }

  public render <T extends Canvas> (canvas: T): void {
    super.render(canvas);

    const text = this.text.split('\n');
    const x = parseInt(this.x, 10);
    const y = parseInt(this.y, 10);
    const width = parseInt(this.width, 10);

    canvas
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
          canvas.moveTo(x, y + index).write(line);
          break;
        case 'center':
          canvas.moveTo(x + Math.floor(width / 2 - line.length / 2), y + index).write(line);
          break;
        case 'right':
          canvas.moveTo(x + (width - line.length), y + index).write(line);
          break;
        default:
          throw new Error(`Unknown align specified for text: ${this.align as string}`);
      }
    });
  }

  public toObject (): TextObject {
    const base = super.toObject();
    const type: TextObject['type'] = 'Text';
    const options: TextObject['options'] = {
      ...base.options,
      align: this.align,
      blink: this.blink,
      bold: this.bold,
      dim: this.dim,
      hidden: this.hidden,
      reverse: this.reverse,
      underlined: this.underlined
    };

    return { type, options };
  }
}
