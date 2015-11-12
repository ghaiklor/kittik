import { Shape } from '../Shape';

export class Rectangle extends Shape {
  /**
   * Creates new Rectangle instance
   * @constructor
   */
  constructor(...args) {
    super(...args);
  }

  /**
   * Renders the shape
   * @param {Cursor} cursor
   * @returns {Rectangle}
   */
  render(cursor) {
    let position = this.getPosition();
    let width = this.getWidth();
    let height = this.getHeight();
    let background = this.getBackground();
    let foreground = this.getForeground();

    cursor.fill({
      x1: position.x,
      y1: position.y,
      x2: width + position.x,
      y2: height + position.y,
      background,
      foreground
    });

    return this;
  }
}
