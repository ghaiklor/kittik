import type { ShapeRenderable } from 'kittik-shape-basic';
import { Shape } from 'kittik-shape-basic';
import type { Canvas } from 'terminal-canvas';
import type { ImageObject } from './ImageObject';
import type { ImageOptions } from './ImageOptions';
import fs from 'fs';
import path from 'path';

export { ImageObject } from './ImageObject';
export { ImageOptions } from './ImageOptions';

export class Image extends Shape implements ImageOptions, ShapeRenderable {
  private rawImageOrPath = 'R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=';
  private rawPreserveAspectRatio = true;

  public constructor (options?: Partial<ImageOptions>) {
    super(options);

    if (typeof options?.image !== 'undefined') {
      this.image = options.image;
    }

    if (typeof options?.preserveAspectRatio !== 'undefined') {
      this.preserveAspectRatio = options.preserveAspectRatio;
    }
  }

  public static isBase64 (string: string): boolean {
    return (/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/u).test(string);
  }

  public get image (): string {
    if (Image.isBase64(this.rawImageOrPath)) {
      return this.rawImageOrPath;
    }

    if (fs.existsSync(path.resolve(process.cwd(), this.rawImageOrPath))) {
      return fs.readFileSync(path.resolve(process.cwd(), this.rawImageOrPath), 'base64');
    }

    throw new Error('Image is not in base64 or does not exist on file system');
  }

  public set image (image: string) {
    this.rawImageOrPath = image;
  }

  public get preserveAspectRatio (): boolean {
    return this.rawPreserveAspectRatio;
  }

  public set preserveAspectRatio (preserve: boolean) {
    this.rawPreserveAspectRatio = preserve;
  }

  public render <T extends Canvas> (canvas: T): void {
    super.render(canvas);

    const { width, height, image, preserveAspectRatio } = this;
    const x = parseInt(this.x, 10);
    const y = parseInt(this.y, 10);
    const size = 3 * (image.length / 4);
    const args = [
      `size=${size}`,
      `width=${width}`,
      `height=${height}`,
      `preserveAspectRatio=${preserveAspectRatio ? 1 : 0}`,
      'inline=1'
    ].join(';');

    canvas.stream.write(`\u001b[${y + 1};${x + 1}H\u001b]1337;File=${args}:${image}\u0007`);
  }

  public toObject (): ImageObject {
    const base = super.toObject();
    const type: ImageObject['type'] = 'Image';
    const options: ImageObject['options'] = {
      ...base.options,
      image: this.rawImageOrPath,
      preserveAspectRatio: this.rawPreserveAspectRatio
    };

    return { type, options };
  }
}
