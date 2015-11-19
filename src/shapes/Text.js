import { Shape } from './Shape';

/**
 * Implements Text shape which is rendering the text at specified point.
 *
 * @since 1.0.0
 * @version 1.0.0
 */
export class Text extends Shape {
  /**
   * Creates new Text instance.
   *
   * @constructor
   * @param {Object} [options] Options go into {@link Shape} class and they are the same.
   */
  constructor(options) {
    super(options);
  }

  /**
   * Renders a shape.
   *
   * @override
   * @param {Cursor} cursor
   * @returns {Text}
   */
  render(cursor) {
    let text = this.getText();
    let {x, y} = this.getPosition();
    let background = this.getBackground();
    let foreground = this.getForeground();

    if (background) cursor.background(background);
    if (foreground) cursor.foreground(foreground);

    cursor.setPosition(x, y);
    cursor.write(text);

    return this;
  }
}
