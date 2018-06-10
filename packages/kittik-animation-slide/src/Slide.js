import Animation from 'kittik-animation-basic';

/**
 * Dictionary of all available directions, that you can use in animation.
 *
 * @type {Object}
 * @private
 */
const AVAILABLE_DIRECTIONS = ['inUp', 'inDown', 'inLeft', 'inRight', 'outUp', 'outDown', 'outLeft', 'outRight'];

/**
 * Animation that animates sliding of the shapes.
 *
 * @extends {Animation}
 * @since 1.0.0
 */
export default class Slide extends Animation {
  /**
   * Create Slide animation instance.
   *
   * @constructor
   * @param {Object} [options] Options object
   * @param {String} [options.direction] Direction of the animation
   * @example
   * Slide.create({
   *   direction: 'inLeft'
   * }).animate(someShapeInstance);
   */
  constructor(options = {}) {
    super(options);

    this.setDirection(options.direction);
  }

  /**
   * Get direction of the animation.
   *
   * @returns {String}
   */
  getDirection() {
    return this.get('direction');
  }

  /**
   * Set new direction of the animation.
   *
   * @param {String} direction
   * @returns {Slide}
   */
  setDirection(direction = 'inRight') {
    if (AVAILABLE_DIRECTIONS.indexOf(direction) === -1) throw new Error(`Unknown direction: ${direction}`);
    return this.set('direction', direction);
  }

  /**
   * Get shape instance and calculate startX, startY, endX and endY coordinates based on direction.
   *
   * @param {Shape} shape
   * @returns {Object} Returns an object with startX, startY, endX, endY properties
   * @private
   */
  _parseCoordinates(shape) {
    const cursor = shape.getCursor();
    const directions = {
      inUp: () => [shape.getX(), -shape.getHeight(), shape.getX(), shape.getY()],
      inDown: () => [shape.getX(), cursor._height + shape.getHeight(), shape.getX(), shape.getY()],
      inLeft: () => [-shape.getWidth(), shape.getY(), shape.getX(), shape.getY()],
      inRight: () => [cursor._width + shape.getWidth(), shape.getY(), shape.getX(), shape.getY()],
      outUp: () => [shape.getX(), shape.getY(), shape.getX(), -shape.getHeight()],
      outDown: () => [shape.getX(), shape.getY(), shape.getX(), cursor._height + shape.getHeight()],
      outLeft: () => [shape.getX(), shape.getY(), -shape.getWidth(), shape.getY()],
      outRight: () => [shape.getX(), shape.getY(), cursor._width + 1, shape.getY()]
    };

    const [startX, startY, endX, endY] = directions[this.getDirection()]();
    return {startX, startY, endX, endY};
  }

  /**
   * Main method that calls when shape need to be animated.
   *
   * @override
   * @param {Shape} shape
   * @returns {Promise}
   * @fulfil {Shape} When animation is done, fulfils with the Shape instance
   */
  animate(shape) {
    const {startX, startY, endX, endY} = this._parseCoordinates(shape);

    return Promise.all([
      this.animateProperty({shape: shape, property: 'x', startValue: startX, endValue: endX}),
      this.animateProperty({shape: shape, property: 'y', startValue: startY, endValue: endY})
    ]).then(() => Promise.resolve(shape));
  }

  /**
   * Serializes animation to Object representation.
   *
   * @override
   * @returns {Object}
   */
  toObject() {
    const obj = super.toObject();

    Object.assign(obj.options, {
      direction: this.get('direction')
    });

    return obj;
  }
}
