import { Shape, ShapeRenderable } from 'kittik-shape-basic';

export class Rectangle extends Shape implements ShapeRenderable {
  render (): void {
    const cursor = this.cursor;
    const text = this.text;
    const width = parseInt(this.width);
    const height = parseInt(this.height);
    const x1 = parseInt(this.x);
    const y1 = parseInt(this.y);
    const y2 = y1 + height;
    const background = this.background;
    const foreground = this.foreground;
    const filler = ' '.repeat(width);

    cursor.moveTo(x1, y1).background(background).foreground(foreground);

    for (let y = y1; y <= y2; y++) cursor.write(filler).moveTo(x1, y);

    cursor.moveTo(x1 + (width / 2 - text.length / 2), y1 + (height / 2)).write(text);
  }
}
