const Animation = require('kittik-animation-basic');

/**
 * Animation that simulates text typing.
 *
 * @extends {Animation}
 * @since 1.0.0
 */
class Print extends Animation {
  /**
   * Creates Print animation instance.
   *
   * @constructor
   * @param {Object} options Options object
   * @example
   * Print.create({
   *   duration: 5000
   * }).animate(someShapeInstance);
   */
  constructor(options) {
    super(options);
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
    return this.animateProperty({ shape: shape, property: 'text', startValue: '', endValue: shape.getText() });
  }

  /**
   * Helper method that animates property in object.
   * On each animation tick it calls {@link onTick} method with shape, property and newValue arguments.
   *
   * @override
   * @param {Object} options Options object
   * @param {Object} options.shape Shape where property is need to be animated
   * @param {String} options.property Property name that need to be animated
   * @param {String} options.startValue Start value for animation
   * @param {String} options.endValue End value for animation
   * @param {Number} [options.byValue] Step value for easing, by default it calculates automatically
   * @param {Number} [options.duration] Duration of the animation in ms, by default it takes from Animation options
   * @param {String} [options.easing] Easing that need to apply to animation, by default it takes from Animation options
   * @returns {Promise} Returns Promise, that fulfills with shape instance which has been animated
   * @fulfil {Shape} When animation is done, fulfils Shape instance
   */
  animateProperty(options) {
    const shape = options.shape;
    const property = options.property;
    const startValue = options.startValue;
    const endValue = options.endValue;
    const byValue = options.byValue || (endValue.length - startValue.length);
    const duration = options.duration || this.getDuration();
    const easing = options.easing || this.getEasing();
    const delay = duration / (endValue.length - startValue.length);
    const start = Date.now();
    const end = start + duration;
    const tick = resolve => {
      const currentTime = Date.now();

      if (currentTime > end) {
        resolve(shape);
      } else {
        this.emit('tick', shape, property, endValue.slice(0, this.onEasing(easing, currentTime - start, startValue.length, byValue, duration)));
        this.delay(delay).then(() => tick(resolve));
      }
    };

    return new Promise(tick);
  }
}

module.exports = Print;
