import { Shape } from './Shape';

/**
 * Implements rectangle shape with text support.
 *
 * @since 1.0.0
 * @version 1.0.0
 */
export class Rectangle extends Shape {
  /**
   * Creates new Rectangle instance.
   *
   * @constructor
   * @param {Object} [options] Options go into {@link Shape} class and supports all the options from there
   */
  constructor(options) {
    super(options);
  }

  /**
   * Renders the shape.
   *
   * @override
   * @param {Cursor} cursor
   * @returns {Rectangle}
   */
  render(cursor) {
    let text = this.getText();
    let width = this.getWidth();
    let height = this.getHeight();
    let {x: x1, y: y1} = this.getPosition();
    let {x2, y2} = {x2: width + x1, y2: height + y1};
    let background = this.getBackground();
    let foreground = this.getForeground();

    cursor.fill({x1, y1, x2, y2, background, foreground});
    cursor.setPosition(x1 + Math.round(width / 2 - text.length / 2), y1 + Math.round(height / 2)).write(text);

    return this;
  }
}
