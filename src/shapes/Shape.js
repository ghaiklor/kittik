export default class Shape {
  constructor(options = {}) {
    this.setWidth(options.width);
    this.setHeight(options.height);
    this.setPosition(options.x, options.y);
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
   * Base render method that must be implemented in childes
   */
  render() {
    // TODO: Make sure that it's correct
    throw new Error('render() method must be implemented');
  }
}
