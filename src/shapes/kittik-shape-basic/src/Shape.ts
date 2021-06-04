import { Canvas } from "terminal-canvas";
import type { ShapeObject } from "./ShapeObject";
import type { ShapeOptions } from "./ShapeOptions";
import type { ShapeRenderable } from "./ShapeRenderable";

export { ShapeObject } from "./ShapeObject";
export { ShapeOptions } from "./ShapeOptions";
export { ShapeRenderable } from "./ShapeRenderable";

export class Shape implements ShapeOptions, ShapeRenderable {
  protected rawCanvas = Canvas.create();
  protected rawText = "";
  protected rawX = "left";
  protected rawY = "top";
  protected rawWidth = "50%";
  protected rawHeight = "25%";
  protected rawBackground = "none";
  protected rawForeground = "none";

  public constructor(options?: Partial<ShapeOptions>) {
    if (typeof options?.text !== "undefined") {
      this.text = options.text;
    }

    if (typeof options?.x !== "undefined") {
      this.x = options.x;
    }

    if (typeof options?.y !== "undefined") {
      this.y = options.y;
    }

    if (typeof options?.width !== "undefined") {
      this.width = options.width;
    }

    if (typeof options?.height !== "undefined") {
      this.height = options.height;
    }

    if (typeof options?.background !== "undefined") {
      this.background = options.background;
    }

    if (typeof options?.foreground !== "undefined") {
      this.foreground = options.foreground;
    }
  }

  public static create<S extends Shape, O extends Partial<ShapeOptions>>(
    options?: O
  ): S {
    return new this(options) as S;
  }

  public static fromObject<T, O extends Partial<ShapeOptions>, S extends Shape>(
    obj: ShapeObject<T, O>
  ): S;
  public static fromObject<T, O extends Partial<ShapeOptions>>(
    obj: ShapeObject<T, O>
  ): Shape;
  public static fromObject<T>(
    obj: ShapeObject<T, Partial<ShapeOptions>>
  ): Shape;
  public static fromObject(
    obj: ShapeObject<"Basic", Partial<ShapeOptions>>
  ): Shape {
    if (obj.type !== this.name) {
      throw new Error(
        `You specified configuration for "${obj.type}" but provided it to "${this.name}". ` +
          `Did you mean to set "type" in configuration to "${this.name}"?`
      );
    }

    return this.create(obj.options);
  }

  public static fromJSON<S extends Shape>(json: string): S {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return this.fromObject(JSON.parse(json));
  }

  public get canvas(): Canvas {
    return this.rawCanvas;
  }

  public get text(): string {
    return this.rawText;
  }

  public set text(text: string) {
    this.rawText = text;
  }

  public get x(): string {
    const x = this.rawX;

    if (x === "left") return "0";
    if (x === "center")
      return Math.floor(
        this.rawCanvas.width / 2 - parseInt(this.width, 10) / 2
      ).toString();
    if (x === "right")
      return Math.floor(
        this.rawCanvas.width - parseInt(this.width, 10)
      ).toString();
    if (/\d+%$/u.test(x))
      return Math.floor(
        (parseInt(x.slice(0, -1), 10) * this.rawCanvas.width) / 100
      ).toString();

    return x;
  }

  public set x(x: string) {
    this.rawX = x;
  }

  public get y(): string {
    const y = this.rawY;

    if (y === "top") return "0";
    if (y === "middle")
      return Math.floor(
        this.rawCanvas.height / 2 - parseInt(this.height, 10) / 2
      ).toString();
    if (y === "bottom")
      return Math.floor(
        this.rawCanvas.height - parseInt(this.height, 10)
      ).toString();
    if (/\d+%$/u.test(y))
      return Math.floor(
        (parseInt(y.slice(0, -1), 10) * this.rawCanvas.height) / 100
      ).toString();

    return y;
  }

  public set y(y: string) {
    this.rawY = y;
  }

  public get width(): string {
    const width = this.rawWidth;

    if (/\d+%$/u.test(width)) {
      return Math.floor(
        (parseInt(width.slice(0, -1), 10) * this.rawCanvas.width) / 100
      ).toString();
    }

    return width;
  }

  public set width(width: string) {
    this.rawWidth = width;
  }

  public get height(): string {
    const height = this.rawHeight;

    if (/\d+%$/u.test(height)) {
      return Math.floor(
        (parseInt(height.slice(0, -1), 10) * this.rawCanvas.height) / 100
      ).toString();
    }

    return height;
  }

  public set height(height: string) {
    this.rawHeight = height;
  }

  public get background(): string {
    return this.rawBackground;
  }

  public set background(background: string) {
    this.rawBackground = background;
  }

  public get foreground(): string {
    return this.rawForeground;
  }

  public set foreground(foreground: string) {
    this.rawForeground = foreground;
  }

  public render<T extends Canvas>(canvas: T): void {
    this.rawCanvas = canvas;
  }

  public toObject<T, O extends ShapeOptions>(): ShapeObject<T, O>;
  public toObject<T>(): ShapeObject<T, ShapeOptions>;
  public toObject(): ShapeObject<"Basic", ShapeOptions> {
    const type: "Basic" = "Basic" as const;
    const options: ShapeOptions = {
      background: this.rawBackground,
      foreground: this.rawForeground,
      height: this.rawHeight,
      text: this.rawText,
      width: this.rawWidth,
      x: this.rawX,
      y: this.rawY,
    };

    return { type, options };
  }

  public toJSON(): string {
    return JSON.stringify(this.toObject());
  }
}
