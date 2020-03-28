import { Canvas } from 'terminal-canvas';
import { ImageObject } from './ImageObject';
import { ImageOptions } from './ImageOptions';
import { Shape, ShapeRenderable } from 'kittik-shape-basic';
import fs from 'fs';
import path from 'path';

export { ImageObject } from './ImageObject';
export { ImageOptions } from './ImageOptions';

export class Image extends Shape implements ImageOptions, ShapeRenderable {
  private _image = 'R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=';
  private _preserveAspectRatio = true;

  constructor (options?: Partial<ImageOptions>) {
    super(options);

    if (options?.image !== undefined) {
      this.image = options.image;
    }

    if (options?.preserveAspectRatio !== undefined) {
      this.preserveAspectRatio = options.preserveAspectRatio;
    }
  }

  get image (): string {
    if (Image.isBase64(this._image)) {
      return this._image;
    } else if (fs.existsSync(path.resolve(process.cwd(), this._image))) {
      return fs.readFileSync(path.resolve(process.cwd(), this._image), 'base64');
    } else {
      throw new Error('Image is not in base64 or does not exists on file system');
    }
  }

  set image (image: string) {
    this._image = image;
  }

  get preserveAspectRatio (): boolean {
    return this._preserveAspectRatio;
  }

  set preserveAspectRatio (preserve: boolean) {
    this._preserveAspectRatio = preserve;
  }

  render <T extends Canvas>(cursor: T): void {
    super.render(cursor);

    const width = this.width;
    const height = this.height;
    const x = parseInt(this.x);
    const y = parseInt(this.y);
    const image = this.image;
    const preserveAspectRatio = this.preserveAspectRatio;
    const size = 3 * (image.length / 4);
    const args = `size=${size};width=${width};height=${height};preserveAspectRatio=${preserveAspectRatio ? 1 : 0};inline=1`;

    cursor.stream.write(`\u001b[${y + 1};${x + 1}H\u001b]1337;File=${args}:${image}^G`);
  }

  toObject<T extends ImageObject>(): T {
    const obj: ImageObject = super.toObject();
    obj.options = {
      ...obj.options,
      image: this._image,
      preserveAspectRatio: this._preserveAspectRatio
    };

    return obj as T;
  }

  static isBase64 (string: string): boolean {
    return /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/.test(string);
  }
}
