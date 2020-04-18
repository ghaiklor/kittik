import { Canvas } from 'terminal-canvas';
import { ShapeObject } from './ShapeObject';
import { ShapeOptions } from './ShapeOptions';
import { ShapeRenderable } from './ShapeRenderable';

export { ShapeObject } from './ShapeObject';
export { ShapeOptions } from './ShapeOptions';
export { ShapeRenderable } from './ShapeRenderable';

export class Shape implements ShapeOptions, ShapeRenderable {
  protected rawCursor = Canvas.create();
  protected rawText = '';
  protected rawX = 'left';
  protected rawY = 'top';
  protected rawWidth = '50%';
  protected rawHeight = '25%';
  protected rawBackground = 'none';
  protected rawForeground = 'none';

  public constructor (options?: Partial<ShapeOptions>) {
    if (typeof options?.text !== 'undefined') {
      this.text = options.text;
    }

    if (typeof options?.x !== 'undefined') {
      this.x = options.x;
    }

    if (typeof options?.y !== 'undefined') {
      this.y = options.y;
    }

    if (typeof options?.width !== 'undefined') {
      this.width = options.width;
    }

    if (typeof options?.height !== 'undefined') {
      this.height = options.height;
    }

    if (typeof options?.background !== 'undefined') {
      this.background = options.background;
    }

    if (typeof options?.foreground !== 'undefined') {
      this.foreground = options.foreground;
    }
  }

  public static create<T extends Shape>(options?: Partial<ShapeOptions>): T
  public static create<T extends Shape, O extends ShapeOptions>(options?: Partial<O>): T {
    return (new this(options)) as T;
  }

  public static fromObject<T extends Shape>(obj: ShapeObject): T
  public static fromObject<T extends Shape, O extends ShapeObject>(obj: O): T {
    if (obj.type !== this.name) {
      throw new Error(
        `You specified configuration for "${obj.type}" but provided it to "${this.name}". ` +
        `Did you mean to set "type" in configuration to "${this.name}"?`
      );
    }

    return this.create(obj.options);
  }

  public static fromJSON<T extends Shape>(json: string): T {
    return this.fromObject(JSON.parse(json));
  }

  public get cursor (): Canvas {
    return this.rawCursor;
  }

  public get text (): string {
    return this.rawText;
  }

  public set text (text: string) {
    this.rawText = text;
  }

  public get x (): string {
    const x = this.rawX;

    if (x === 'left') return '0';
    if (x === 'center') return Math.floor(this.rawCursor.width / 2 - parseInt(this.width, 10) / 2).toString();
    if (x === 'right') return Math.floor(this.rawCursor.width - parseInt(this.width, 10)).toString();
    if ((/\d+%$/u).test(x)) return Math.floor(parseInt(x.slice(0, -1), 10) * this.rawCursor.width / 100).toString();

    return x;
  }

  public set x (x: string) {
    this.rawX = x;
  }

  public get y (): string {
    const y = this.rawY;

    if (y === 'top') return '0';
    if (y === 'middle') return Math.floor(this.rawCursor.height / 2 - parseInt(this.height, 10) / 2).toString();
    if (y === 'bottom') return Math.floor(this.rawCursor.height - parseInt(this.height, 10)).toString();
    if ((/\d+%$/u).test(y)) return Math.floor(parseInt(y.slice(0, -1), 10) * this.rawCursor.height / 100).toString();

    return y;
  }

  public set y (y: string) {
    this.rawY = y;
  }

  public get width (): string {
    const width = this.rawWidth;

    if ((/\d+%$/u).test(width)) {
      return Math.floor(parseInt(width.slice(0, -1), 10) * this.rawCursor.width / 100).toString();
    }

    return width;
  }

  public set width (width: string) {
    this.rawWidth = width;
  }

  public get height (): string {
    const height = this.rawHeight;

    if ((/\d+%$/u).test(height)) {
      return Math.floor(parseInt(height.slice(0, -1), 10) * this.rawCursor.height / 100).toString();
    }

    return height;
  }

  public set height (height: string) {
    this.rawHeight = height;
  }

  public get background (): string {
    return this.rawBackground;
  }

  public set background (background: string) {
    this.rawBackground = background;
  }

  public get foreground (): string {
    return this.rawForeground;
  }

  public set foreground (foreground: string) {
    this.rawForeground = foreground;
  }

  public render <T extends Canvas>(cursor: T): void {
    this.rawCursor = cursor;
  }

  public toObject<T extends ShapeObject>(): T {
    return {
      type: this.constructor.name,
      options: {
        background: this.rawBackground,
        foreground: this.rawForeground,
        height: this.rawHeight,
        text: this.rawText,
        width: this.rawWidth,
        x: this.rawX,
        y: this.rawY
      }
    } as T;
  }

  public toJSON (): string {
    return JSON.stringify(this.toObject());
  }
}
