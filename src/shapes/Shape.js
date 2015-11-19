/**
 * Base class for creating other shapes.
 * Each custom shape must extends from this class.
 *
 * @since 1.0.0
 * @version 1.0.0
 * @example
 * import { Shape } from './src/shapes/Shape';
 *
 * export class Rectangle extends Shape {
 *   constructor(...args) {
 *     super(...args);
 *   }
 *
 *   render(cursor) {
 *     // Implement your logic here for rendering the shape
 *   }
 * }
 */
export class Shape {
  _text = '';
  _width = 15;
  _height = 5;
  _x = 10;
  _y = 10;
  _background;
  _foreground;

  /**
   * Constructor is responsible for initializing base properties.
   * Don't forgot to call `super(...args)` when extending from this class.
   *
   * @constructor
   * @param {Object} [options]
   * @param {String} [options.text] Text that will be rendered in shape
   * @param {Number} [options.width] Shape width
   * @param {Number} [options.height] Shape height
   * @param {Number} [options.x] Absolute coordinate X
   * @param {Number} [options.y] Absolute coordinate Y
   * @param {String} [options.background] Background color from {@link COLORS}
   * @param {String} [options.foreground] Foreground color from {@link COLORS}
   */
  constructor(options) {
    let {text, width, height, x, y, background, foreground} = options;

    this.setText(text);
    this.setWidth(width);
    this.setHeight(height);
    this.setPosition(x, y);
    this.setBackground(background);
    this.setForeground(foreground);
  }

  /**
   * Get text content from this shape.
   *
   * @returns {String}
   */
  getText() {
    return this._text;
  }

  /**
   * Set new text content to this shape.
   *
   * @param {String} [text=''] New text
   * @returns {Shape}
   */
  setText(text = '') {
    this._text = text;
    return this;
  }

  /**
   * Get shape width.
   *
   * @returns {Number}
   */
  getWidth() {
    return this._width;
  }

  /**
   * Set new shape width.
   *
   * @param {Number} [width=15] Shape width
   * @returns {Shape}
   */
  setWidth(width = 15) {
    this._width = width;
    return this;
  }

  /**
   * Get shape height.
   *
   * @returns {Number}
   */
  getHeight() {
    return this._height;
  }

  /**
   * Set new shape height.
   *
   * @param {Number} [height=5] Shape height
   * @returns {Shape}
   */
  setHeight(height = 5) {
    this._height = height;
    return this;
  }

  /**
   * Get current position of shape.
   *
   * @returns {{x: Number, y: Number}}
   */
  getPosition() {
    return {x: this._x, y: this._y};
  }

  /**
   * Set new shape position.
   *
   * @param {Number} [x=10] Absolute coordinate X
   * @param {Number} [y=10] Absolute coordinate Y
   * @returns {Shape}
   */
  setPosition(x = this._x || 10, y = this._y || 10) {
    this._x = x;
    this._y = y;
    return this;
  }

  /**
   * Get background color.
   *
   * @returns {String}
   */
  getBackground() {
    return this._background;
  }

  /**
   * Set new background color.
   *
   * @param {String} background Background color from {@link COLORS}
   * @returns {Shape}
   */
  setBackground(background) {
    this._background = background;
    return this;
  }

  /**
   * Get foreground color.
   *
   * @returns {String}
   */
  getForeground() {
    return this._foreground;
  }

  /**
   * Set new foreground color.
   *
   * @param {String} foreground Foreground color from {@link COLORS}
   * @returns {Shape}
   */
  setForeground(foreground) {
    this._foreground = foreground;
    return this;
  }

  /**
   * Base render method that must be implemented in childes.
   *
   * @abstract
   * @param {Cursor} cursor Cursor instance that you can use for render the shape
   * @throws {Error} Throws error if method will not be overridden
   */
  render(cursor) {
    throw new Error('render() method must be implemented');
  }

  /**
   * Wrapper around `new Shape()`.
   *
   * @param {*} args
   * @returns {Shape}
   */
  static create(...args) {
    return new this(...args);
  }
}
