import { Shape, ShapeRenderable } from 'kittik-shape-basic';
import { Canvas } from 'terminal-canvas';

export class Rectangle extends Shape implements ShapeRenderable {
  public render <T extends Canvas>(cursor: T): void {
    super.render(cursor);

    const { text, background, foreground } = this;
    const width = parseInt(this.width, 10);
    const height = parseInt(this.height, 10);
    const x1 = parseInt(this.x, 10);
    const y1 = parseInt(this.y, 10);
    const y2 = y1 + height;
    const filler = ' '.repeat(width);

    cursor.moveTo(x1, y1).background(background).foreground(foreground);
    for (let y = y1; y <= y2; y += 1) cursor.write(filler).moveTo(x1, y);
    cursor.moveTo(x1 + (width / 2 - text.length / 2), y1 + height / 2).write(text);
  }
}
