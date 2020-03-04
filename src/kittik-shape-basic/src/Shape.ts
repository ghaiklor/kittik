import { Canvas } from 'terminal-canvas';
import { ShapeObject } from './ShapeObject';
import { ShapeOptions } from './ShapeOptions';

export class Shape implements ShapeOptions {
  private readonly _cursor: Canvas;
  private _text = '';
  private _x = 'left';
  private _y = 'top';
  private _width = '50%';
  private _height = '25%';
  private _background = 'none';
  private _foreground = 'none';

  constructor(cursor: Canvas, options?: Partial<ShapeOptions>) {
    this._cursor = cursor;

    if (options?.text !== undefined) {
      this.text = options.text;
    }

    if (options?.width !== undefined) {
      this.width = options.width;
    }

    if (options?.height !== undefined) {
      this.height = options.height;
    }

    if (options?.x !== undefined) {
      this.x = options.x;
    }

    if (options?.y !== undefined) {
      this.y = options.y;
    }

    if (options?.background !== undefined) {
      this.background = options.background;
    }

    if (options?.foreground !== undefined) {
      this.foreground = options.foreground;
    }
  }

  get cursor(): Canvas {
    return this._cursor;
  }

  get text(): string {
    return this._text;
  }

  set text(text) {
    this._text = text;
  }

  get width(): string {
    const width = this._width;

    if (/\d+%$/.test(width)) {
      return Math.floor(parseInt(width.slice(0, -1)) * this._cursor.width / 100).toString();
    }

    return width;
  }

  set width(width) {
    this._width = width;
  }

  get height(): string {
    const height = this._height;

    if (/\d+%$/.test(height)) {
      return Math.floor(parseInt(height.slice(0, -1)) * this._cursor.height / 100).toString();
    }

    return height;
  }

  set height(height) {
    this._height = height;
  }

  get x(): string {
    const x = this._x;

    if (x === 'left') return '0';
    if (x === 'center') return Math.floor(this._cursor.width / 2 - parseInt(this.width) / 2).toString();
    if (x === 'right') return Math.floor(this._cursor.width - parseInt(this.width)).toString();
    if (/\d+%$/.test(x)) return Math.floor(parseInt(x.slice(0, -1)) * this._cursor.width / 100).toString();

    return x;
  }

  set x(x) {
    this._x = x;
  }

  get y(): string {
    const y = this._y;

    if (y === 'top') return '0';
    if (y === 'middle') return Math.floor(this._cursor.height / 2 - parseInt(this.height) / 2).toString();
    if (y === 'bottom') return Math.floor(this._cursor.height - parseInt(this.height)).toString();
    if (/\d+%$/.test(y)) return Math.floor(parseInt(y.slice(0, -1)) * this._cursor.height / 100).toString();

    return y;
  }

  set y(y) {
    this._y = y;
  }

  get background(): string {
    return this._background;
  }

  set background(background) {
    this._background = background;
  }

  get foreground(): string {
    return this._foreground;
  }

  set foreground(foreground) {
    this._foreground = foreground;
  }

  render(): Shape {
    throw new Error('render() method must be implemented');
  }

  toObject(): ShapeObject {
    return {
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
  }

  toJSON(): string {
    return JSON.stringify(this.toObject());
  }

  static create(cursor: Canvas, options?: Partial<ShapeOptions>): Shape {
    return new this(cursor, options);
  }

  static fromObject(obj: ShapeObject, cursor: Canvas): Shape {
    if (obj.type !== this.name) throw new Error(`${obj.type} is not an Object representation of the ${this.name}`);

    return this.create(cursor, obj.options);
  }

  static fromJSON(json: string, cursor: Canvas): Shape {
    return this.fromObject(JSON.parse(json), cursor);
  }
}
