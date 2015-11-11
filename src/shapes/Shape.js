export default class Shape {
  constructor(options = {}) {
    this.setWidth(options.width);
    this.setHeight(options.height);
    this.setPosition(options.x, options.y);
    this.setBackground(options.background);
    this.setForeground(options.foreground);
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
  setWidth(width = 10) {
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
  setHeight(height = 10) {
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
}
