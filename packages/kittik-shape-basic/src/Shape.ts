import { Canvas } from 'terminal-canvas';
import { ShapeObject } from './ShapeObject';
import { ShapeOptions } from './ShapeOptions';
import { ShapeRenderable } from './ShapeRenderable';

export { ShapeObject } from './ShapeObject';
export { ShapeOptions } from './ShapeOptions';
export { ShapeRenderable } from './ShapeRenderable';

export class Shape implements ShapeOptions, ShapeRenderable {
  protected _cursor = Canvas.create();
  protected _text = '';
  protected _x = 'left';
  protected _y = 'top';
  protected _width = '50%';
  protected _height = '25%';
  protected _background = 'none';
  protected _foreground = 'none';

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
    return this._cursor;
  }

  public get text (): string {
    return this._text;
  }

  public set text (text: string) {
    this._text = text;
  }

  public get x (): string {
    const x = this._x;

    if (x === 'left') return '0';
    if (x === 'center') return Math.floor(this._cursor.width / 2 - parseInt(this.width, 10) / 2).toString();
    if (x === 'right') return Math.floor(this._cursor.width - parseInt(this.width, 10)).toString();
    if ((/\d+%$/u).test(x)) return Math.floor(parseInt(x.slice(0, -1), 10) * this._cursor.width / 100).toString();

    return x;
  }

  public set x (x: string) {
    this._x = x;
  }

  public get y (): string {
    const y = this._y;

    if (y === 'top') return '0';
    if (y === 'middle') return Math.floor(this._cursor.height / 2 - parseInt(this.height, 10) / 2).toString();
    if (y === 'bottom') return Math.floor(this._cursor.height - parseInt(this.height, 10)).toString();
    if ((/\d+%$/u).test(y)) return Math.floor(parseInt(y.slice(0, -1), 10) * this._cursor.height / 100).toString();

    return y;
  }

  public set y (y: string) {
    this._y = y;
  }

  public get width (): string {
    const width = this._width;

    if ((/\d+%$/u).test(width)) {
      return Math.floor(parseInt(width.slice(0, -1), 10) * this._cursor.width / 100).toString();
    }

    return width;
  }

  public set width (width: string) {
    this._width = width;
  }

  public get height (): string {
    const height = this._height;

    if ((/\d+%$/u).test(height)) {
      return Math.floor(parseInt(height.slice(0, -1), 10) * this._cursor.height / 100).toString();
    }

    return height;
  }

  public set height (height: string) {
    this._height = height;
  }

  public get background (): string {
    return this._background;
  }

  public set background (background: string) {
    this._background = background;
  }

  public get foreground (): string {
    return this._foreground;
  }

  public set foreground (foreground: string) {
    this._foreground = foreground;
  }

  public render <T extends Canvas>(cursor: T): void {
    this._cursor = cursor;
  }

  public toObject<T extends ShapeObject>(): T {
    return {
      type: this.constructor.name,
      options: {
        background: this._background,
        foreground: this._foreground,
        height: this._height,
        text: this._text,
        width: this._width,
        x: this._x,
        y: this._y
      }
    } as T;
  }

  public toJSON (): string {
    return JSON.stringify(this.toObject());
  }
}
