import { Shape } from './Shape';

export class Text extends Shape {
  /**
   * Creates new Text instance
   * @constructor
   */
  constructor(...args) {
    super(...args);
  }

  /**
   * Renders a shape
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
