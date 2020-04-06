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
    if (options?.text !== undefined) {
      this.text = options.text;
    }

    if (options?.x !== undefined) {
      this.x = options.x;
    }

    if (options?.y !== undefined) {
      this.y = options.y;
    }

    if (options?.width !== undefined) {
      this.width = options.width;
    }

    if (options?.height !== undefined) {
      this.height = options.height;
    }

    if (options?.background !== undefined) {
      this.background = options.background;
    }

    if (options?.foreground !== undefined) {
      this.foreground = options.foreground;
    }
  }

  public static create<T extends Shape>(options?: Partial<ShapeOptions>): T
  public static create<T extends Shape, O extends ShapeOptions>(options?: Partial<O>): T {
    return (new this(options)) as T;
  }

  public static fromObject<T extends Shape>(obj: ShapeObject): T
  public static fromObject<T extends Shape, O extends ShapeObject>(obj: O): T {
    if (obj.type !== this.name) throw new Error(`${obj.type} is not an Object representation of the ${this.name}`);

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
    if (x === 'center') return Math.floor(this._cursor.width / 2 - parseInt(this.width) / 2).toString();
    if (x === 'right') return Math.floor(this._cursor.width - parseInt(this.width)).toString();
    if (/\d+%$/.test(x)) return Math.floor(parseInt(x.slice(0, -1)) * this._cursor.width / 100).toString();

    return x;
  }

  public set x (x: string) {
    this._x = x;
  }

  public get y (): string {
    const y = this._y;

    if (y === 'top') return '0';
    if (y === 'middle') return Math.floor(this._cursor.height / 2 - parseInt(this.height) / 2).toString();
    if (y === 'bottom') return Math.floor(this._cursor.height - parseInt(this.height)).toString();
    if (/\d+%$/.test(y)) return Math.floor(parseInt(y.slice(0, -1)) * this._cursor.height / 100).toString();

    return y;
  }

  public set y (y: string) {
    this._y = y;
  }

  public get width (): string {
    const width = this._width;

    if (/\d+%$/.test(width)) {
      return Math.floor(parseInt(width.slice(0, -1)) * this._cursor.width / 100).toString();
    }

    return width;
  }

  public set width (width: string) {
    this._width = width;
  }

  public get height (): string {
    const height = this._height;

    if (/\d+%$/.test(height)) {
      return Math.floor(parseInt(height.slice(0, -1)) * this._cursor.height / 100).toString();
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
    const obj = {
      type: this.constructor.name,
      options: {
        text: this._text,
        width: this._width,
        height: this._height,
        x: this._x,
        y: this._y,
        background: this._background,
        foreground: this._foreground
      }
    };

    return obj as T;
  }

  public toJSON (): string {
    return JSON.stringify(this.toObject());
  }
}
