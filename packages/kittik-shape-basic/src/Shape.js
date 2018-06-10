/**
 * Base class for creating other shapes.
 * Each custom shape must extends from this class.
 *
 * @since 1.0.0
 * @example
 * import Shape from 'kittik-shape-basic';
 *
 * export default class Rectangle extends Shape {
 *   render() {
 *     const cursor = this.getCursor();
 *     // Implement your logic here for rendering the shape
 *   }
 * }
 */
export default class Shape {
  /**
   * Create basic Shape instance.
   * This shape renders nothing, but throws an exception that you need to implement this shape in childes.
   *
   * @constructor
   * @param {Cursor} cursor Cursor instance used for render the shape
   * @param {Object} [options] Options object
   * @param {String} [options.text] Text that will be rendered in the shape
   * @param {Number|String} [options.width] Shape width can be 100 (cells) or 100%
   * @param {Number|String} [options.height] Shape height can be 100 (cells) or 100%
   * @param {Number|String} [options.x] Absolute coordinate X can be 100 (cells), left, center, right or percents
   * @param {Number|String} [options.y] Absolute coordinate Y can be 100 (cells), top, middle, bottom or percents
   * @param {String} [options.background] Background color can be only color name or `none` if you want to disable
   * @param {String} [options.foreground] Foreground color can be only color name or `none` if you want to disable
   * @example
   * Shape.create(cursor, {
   *   text: 'Hello, World',
   *   width: '50%',
   *   height: '50%',
   *   x: 'center',
   *   y: 'middle',
   *   background: 'black',
   *   foreground: 'none'
   * });
   */
  constructor(cursor, options = {}) {
    this.setCursor(cursor);
    this.setText(options.text);
    this.setWidth(options.width);
    this.setHeight(options.height);
    this.setX(options.x);
    this.setY(options.y);
    this.setBackground(options.background);
    this.setForeground(options.foreground);
  }

  /**
   * Get option value.
   *
   * @param {String} path Path can be set with dot-notation
   * @returns {*}
   * @example
   * shape.get('my.options.object.value');
   */
  get(path) {
    return path.split('.').reduce((obj, key) => obj && obj[key], this);
  }

  /**
   * Set new option value.
   *
   * @param {String} path Path can be set with dot-notation
   * @param {*} value Value that need to be written to the options object
   * @returns {Shape}
   * @example
   * shape.set('my.options.object.value', 'value');
   */
  set(path, value) {
    let obj = this;
    let tags = path.split('.');
    let len = tags.length - 1;

    for (let i = 0; i < len; i++) {
      if (typeof obj[tags[i]] === 'undefined') obj[tags[i]] = {};
      obj = obj[tags[i]];
    }

    obj[tags[len]] = value;

    return this;
  }

  /**
   * Get cursor that used for render this shape.
   *
   * @returns {Cursor}
   */
  getCursor() {
    return this.get('cursor');
  }

  /**
   * Assign cursor to the shape which will be used for render this shape.
   *
   * @param {Cursor} cursor
   * @returns {Shape}
   */
  setCursor(cursor) {
    return this.set('cursor', cursor);
  }

  /**
   * Get text content from this shape.
   *
   * @returns {String}
   */
  getText() {
    return this.get('text');
  }

  /**
   * Set new text content to this shape.
   *
   * @param {String} [text=''] New text
   * @returns {Shape}
   */
  setText(text = '') {
    return this.set('text', text);
  }

  /**
   * Get shape width.
   *
   * @returns {Number}
   */
  getWidth() {
    const width = this.get('width');

    if (/\d+%$/.test(width)) return Math.floor(width.slice(0, -1) * this.getCursor()._width / 100);

    return width;
  }

  /**
   * Set new shape width.
   *
   * @param {Number|String} [width=15] Shape width
   * @returns {Shape}
   * @example
   * shape.setWidth(15); // shape width is equal to 15 cells in the terminal
   * shape.setWidth('20%'); // shape width is equal to 20% of total viewport width
   */
  setWidth(width = 15) {
    return this.set('width', width);
  }

  /**
   * Get shape height.
   *
   * @returns {Number}
   */
  getHeight() {
    const height = this.get('height');

    if (/\d+%$/.test(height)) return Math.floor(height.slice(0, -1) * this.getCursor()._height / 100);

    return height;
  }

  /**
   * Set new shape height.
   *
   * @param {Number|String} [height=5] Shape height
   * @returns {Shape}
   * @example
   * shape.setHeight(15); // shape height is equal to 15 cells in the terminal
   * shape.setHeight('20%'); // shape height is equal to 20% of total viewport height
   */
  setHeight(height = 5) {
    return this.set('height', height);
  }

  /**
   * Get X coordinate.
   *
   * @returns {Number}
   */
  getX() {
    const x = this.get('x');

    if (x === 'left') return 0;
    if (x === 'center') return Math.floor(this.getCursor()._width / 2 - this.getWidth() / 2);
    if (x === 'right') return Math.floor(this.getCursor()._width - this.getWidth());
    if (/\d+%$/.test(x)) return Math.floor(x.slice(0, -1) * this.getCursor()._width / 100);

    return x;
  }

  /**
   * Set X coordinate.
   *
   * @param {Number|String} [x=10]
   * @returns {Shape}
   * @example
   * shape.setX(2); // move shape to third cell by X axis
   * shape.setX('left'); // align shape to the left
   * shape.setX('center'); // align shape in the center
   * shape.setX('right'); // align shape to the right
   * shape.setX('50%'); // move shape to 50% by X axis
   */
  setX(x = 10) {
    return this.set('x', x);
  }

  /**
   * Get Y coordinate.
   *
   * @returns {Number}
   */
  getY() {
    const y = this.get('y');

    if (y === 'top') return 0;
    if (y === 'middle') return Math.floor(this.getCursor()._height / 2 - this.getHeight() / 2);
    if (y === 'bottom') return Math.floor(this.getCursor()._height - this.getHeight());
    if (/\d+%$/.test(y)) return Math.floor(y.slice(0, -1) * this.getCursor()._height / 100);

    return y;
  }

  /**
   * Set Y coordinate.
   *
   * @param {Number|String} [y=10]
   * @returns {Shape}
   * @example
   * shape.setY(2); // move shape to third cell by Y axis
   * shape.setY('top'); // align shape to the top
   * shape.setY('middle'); // align shape in the middle
   * shape.setY('bottom'); // align shape to the bottom
   * shape.setY('50%'); // move shape to 50% by Y axis
   */
  setY(y = 10) {
    return this.set('y', y);
  }

  /**
   * Get background color.
   *
   * @returns {String}
   */
  getBackground() {
    return this.get('background');
  }

  /**
   * Set new background color.
   *
   * @param {String} [background = none] Color name or `none` if you want to disable background
   * @returns {Shape}
   * @example
   * shape.setBackground('black');
   * shape.setBackground('none');
   */
  setBackground(background = 'none') {
    return this.set('background', background);
  }

  /**
   * Get foreground color.
   *
   * @returns {String}
   */
  getForeground() {
    return this.get('foreground');
  }

  /**
   * Set new foreground color.
   *
   * @param {String} [foreground = none] Color name or `none` if you want to disable foreground
   * @returns {Shape}
   * @example
   * shape.setForeground('black');
   * shape.setForeground('none');
   */
  setForeground(foreground = 'none') {
    return this.set('foreground', foreground);
  }

  /**
   * Base render method that must be implemented in childes.
   *
   * @abstract
   * @throws {Error} Throws error if method is not overridden
   */
  render() {
    throw new Error('render() method must be implemented');
  }

  /**
   * Returns Object representation of the shape.
   * This representation consists of all options fields that you can pass in the constructor.
   *
   * @returns {Object}
   */
  toObject() {
    return {
      type: this.constructor.name,
      options: {
        text: this.get('text'),
        width: this.get('width'),
        height: this.get('height'),
        x: this.get('x'),
        y: this.get('y'),
        background: this.get('background'),
        foreground: this.get('foreground')
      }
    };
  }

  /**
   * Returns JSON representation of the shape.
   *
   * @returns {JSON}
   */
  toJSON() {
    return JSON.stringify(this.toObject());
  }

  /**
   * Wrapper around `new Shape()`.
   *
   * @static
   * @param {*} args
   * @returns {Shape}
   */
  static create(...args) {
    return new this(...args);
  }

  /**
   * Creates new Shape instance from Object representation.
   * You can ignore cursor param and create only Shape representation.
   * Though, you can add cursor in the runtime via {@link setCursor} method.
   *
   * @static
   * @param {Object} obj Object that you got from {@link toObject} method
   * @param {Cursor} [cursor] Cursor instance
   * @returns {Shape}
   * @throws {Error} Throws an error if object is not a representation of the shape
   */
  static fromObject(obj, cursor) {
    if (!obj.type || !obj.options) throw new Error('It looks like it is not an Object representation of the shape');
    if (obj.type !== this.name) throw new Error(`${obj.type} is not an Object representation of the ${this.name}`);

    return this.create(cursor, obj.options);
  }

  /**
   * Creates new Shape instance from JSON representation.
   * You can ignore cursor param and create only Shape representation.
   * Though, you can add cursor in the runtime via {@link setCursor} method.
   *
   * @static
   * @param {String} json JSON string that you got from {@link Shape.toJSON}
   * @param {Cursor} [cursor] Cursor instance
   * @returns {Shape}
   */
  static fromJSON(json, cursor) {
    return this.fromObject(JSON.parse(json), cursor);
  }
}
