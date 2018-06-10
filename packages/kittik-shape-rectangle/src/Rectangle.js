import Shape from 'kittik-shape-basic';

/**
 * Implements rectangle shape with text support.
 *
 * @extends {Shape}
 * @since 1.0.0
 */
export default class Rectangle extends Shape {
  /**
   * Create Rectangle shape instance.
   *
   * @param {Cursor} cursor Cursor instance
   * @param {Object} [options] Options object
   * @example
   * Rectangle.create(cursor, {
   *   text: 'Hello, World',
   *   width: 20,
   *   height: '50%',
   *   x: 'center',
   *   y: 'middle',
   *   background: 'black',
   *   foreground: 'white'
   * });
   */
  constructor(cursor, options) {
    super(cursor, options);
  }

  /**
   * Render the rectangle with specified options.
   *
   * @override
   * @returns {Rectangle}
   */
  render() {
    const cursor = this.getCursor();
    const text = this.getText();
    const width = this.getWidth();
    const height = this.getHeight();
    const x1 = this.getX();
    const y1 = this.getY();
    const x2 = x1 + width;
    const y2 = y1 + height;
    const background = this.getBackground();
    const foreground = this.getForeground();
    const filler = ' '.repeat(width);

    cursor.moveTo(x1, y1).background(background).foreground(foreground);

    for (let y = y1; y <= y2; y++) cursor.write(filler).moveTo(x1, y);

    cursor.moveTo(x1 + (width / 2 - text.length / 2), y1 + (height / 2)).write(text);

    return this;
  }
}
