export class Shape {
  /**
   * Creates new base shape instance
   * It needed for creating other shapes as base class
   * @constructor
   * @param {String} text
   * @param {Number} width
   * @param {Number} height
   * @param {Number} x
   * @param {Number} y
   * @param {String} background
   * @param {String} foreground
   */
  constructor({text, width, height, x, y, background, foreground} = {}) {
    this.setText(text);
    this.setWidth(width);
    this.setHeight(height);
    this.setPosition(x, y);
    this.setBackground(background);
    this.setForeground(foreground);
  }

  /**
   * Get text content from this shape
   * @returns {String}
   */
  getText() {
    return this._text;
  }

  /**
   * Set new text content to this shape
   * @param {String} text
   * @returns {Shape}
   */
  setText(text = '') {
    this._text = text;
    return this;
  }

  /**
   * Get shape width
   * @returns {Number}
   */
  getWidth() {
    return this._width;
  }

  /**
   * Set new shape width
   * @param {Number} width
   * @returns {Shape}
   */
  setWidth(width = 15) {
    this._width = width;
    return this;
  }

  /**
   * Get shape height
   * @returns {Number}
   */
  getHeight() {
    return this._height;
  }

  /**
   * Set new shape height
   * @param {Number} height
   * @returns {Shape}
   */
  setHeight(height = 5) {
    this._height = height;
    return this;
  }

  /**
   * Get current position of shape
   * @returns {{x: Number, y: Number}}
   */
  getPosition() {
    return {x: this._x, y: this._y};
  }

  /**
   * Set new shape position
   * @param {Number} x
   * @param {Number} y
   * @returns {Shape}
   */
  setPosition(x = this._x || 10, y = this._y || 10) {
    this._x = x;
    this._y = y;
    return this;
  }

  /**
   * Get background color
   * @returns {String}
   */
  getBackground() {
    return this._background;
  }

  /**
   * Set new background color
   * @param {String} background
   * @returns {Shape}
   */
  setBackground(background) {
    this._background = background;
    return this;
  }

  /**
   * Get foreground color
   * @returns {String}
   */
  getForeground() {
    return this._foreground;
  }

  /**
   * Set new foreground color
   * @param {String} foreground
   * @returns {Shape}
   */
  setForeground(foreground) {
    this._foreground = foreground;
    return this;
  }

  /**
   * Base render method that must be implemented in childes
   */
  render() {
    // TODO: Make sure that it's correct
    throw new Error('render() method must be implemented');
  }

  /**
   * Create new shape instance
   * @param {*} args
   * @returns {Shape}
   */
  static create(...args) {
    return new this(...args);
  }
}
