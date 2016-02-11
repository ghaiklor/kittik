import FigTextShape from 'kittik-shape-fig-text';
import ImageShape from 'kittik-shape-image';
import RectangleShape from 'kittik-shape-rectangle';
import TextShape from 'kittik-shape-text';

import FocusAnimation from 'kittik-animation-focus';
import PrintAnimation from 'kittik-animation-print';
import SlideAnimation from 'kittik-animation-slide';

const SHAPES = {FigText: FigTextShape, Image: ImageShape, Rectangle: RectangleShape, Text: TextShape};
const ANIMATIONS = {Focus: FocusAnimation, Print: PrintAnimation, Slide: SlideAnimation};

/**
 * Creates a new slide which can be rendered using kittik-cursor.
 *
 * @since 1.0.0
 */
export default class Slide {
  /**
   * Creates new Slide instance.
   *
   * @param {Object} [declaration]
   * @param {Array<Object>} [declaration.shapes] Array of shapes to render
   * @param {Array<Object>} [declaration.animations] Array of animations to create in this slide
   * @param {Array<String>} [declaration.order] Order for rendering shapes for this slide
   * @constructor
   */
  constructor(declaration = {}) {
    const {shapes = [], animations = [], order = []} = declaration;

    this._currentIndex = 0;
    this._shapes = this._parseShapes(shapes);
    this._animations = this._parseAnimations(animations);
    this._order = order.map(item => this._parseOrder(item));
  }

  /**
   * Parse shapes array and return object with references to the shapes.
   *
   * @param {Array} shapes Array of shapes
   * @returns {Object}
   * @private
   */
  _parseShapes(shapes) {
    return shapes.reduce((obj, shape) => (obj[shape.name] = SHAPES[shape.type].fromObject(shape)) && obj, {});
  }

  /**
   * Parse animations and return object with references to the animations.
   *
   * @param {Array} animations Array of animations
   * @returns {Object}
   * @private
   */
  _parseAnimations(animations) {
    return animations.reduce((obj, animation) => (obj[animation.name] = ANIMATIONS[animation.type].fromObject(animation)) && obj, {});
  }

  /**
   * Parse array with order settings and return array with shape reference and its animations references.
   *
   * @param {Array} order
   * @returns {{shape: *, animations: (Array|*)}}
   * @private
   */
  _parseOrder(order) {
    const parsed = order.split('::');
    const shape = parsed[0];
    const animations = (parsed[1] && parsed[1].split('->')) || undefined;

    return {shape, animations};
  }

  /**
   * Iterate through all previously rendered shapes.
   *
   * @param {Function} fn
   * @returns {Slide}
   */
  forEachRenderedShape(fn) {
    this._order.slice(0, this._currentIndex).map(item => this._shapes[item.shape]).forEach(fn);
    return this;
  }

  /**
   * Render the slide.
   *
   * @param {Cursor} cursor Cursor instance which is using for rendering the slide
   * @returns {Promise} Promise will be fulfilled when slide has rendered
   */
  render(cursor) {
    const shape = this._shapes[this._order[this._currentIndex].shape];
    const animations = this._animations[this._order[this._currentIndex].animations];

    this.forEachRenderedShape(shape => shape.render(cursor));

    return new Promise(resolve => {
      if (animations) return animations.animate(shape, cursor).then(resolve);

      shape.render(cursor);

      return resolve();
    });
  }

  /**
   * Wrapper around `new Slide()`.
   *
   * @static
   * @param {*} args
   * @returns {Slide}
   */
  static create(...args) {
    return new this(...args);
  }
}
