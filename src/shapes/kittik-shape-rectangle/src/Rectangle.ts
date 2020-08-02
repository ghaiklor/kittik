import { Shape, ShapeRenderable } from 'kittik-shape-basic';
import { Canvas } from 'terminal-canvas';
import { RectangleObject } from './RectangleObject';
import { RectangleOptions } from './RectangleOptions';

export { RectangleObject } from './RectangleObject';
export { RectangleOptions } from './RectangleOptions';

export class Rectangle extends Shape implements RectangleOptions, ShapeRenderable {
  public render <T extends Canvas> (canvas: T): void {
    super.render(canvas);

    const { text, background, foreground } = this;
    const width = parseInt(this.width, 10);
    const height = parseInt(this.height, 10);
    const x1 = parseInt(this.x, 10);
    const y1 = parseInt(this.y, 10);
    const y2 = y1 + height;
    const filler = ' '.repeat(width);

    canvas
      .moveTo(x1, y1)
      .background(background)
      .foreground(foreground);

    for (let y = y1; y <= y2; y += 1) {
      canvas.write(filler).moveTo(x1, y);
    }

    canvas
      .moveTo(x1 + (width / 2 - text.length / 2), y1 + height / 2)
      .write(text);
  }

  public toObject (): RectangleObject {
    const base = super.toObject();
    const type: RectangleObject['type'] = 'Rectangle';
    const options: RectangleObject['options'] = {
      ...base.options
    };

    return { type, options };
  }
}
