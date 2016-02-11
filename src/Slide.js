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
    this._order = this._parseOrder(order);
  }

  /**
   * Parse shapes array and return object with references to the shapes.
   *
   * @param {Array} shapes Array of shapes
   * @returns {Object}
   * @private
   */
  _parseShapes(shapes) {
    return shapes.reduce((obj, shape) => {
      obj[shape.name] = SHAPES[shape.type].fromObject(shape);
      return obj;
    }, {});
  }

  /**
   * Parse animations and return object with references to the animations.
   *
   * @param {Array} animations Array of animations
   * @returns {Object}
   * @private
   */
  _parseAnimations(animations) {
    return animations.reduce((obj, animation) => {
      obj[animation.name] = ANIMATIONS[animation.type].fromObject(animation);
      return obj;
    }, {});
  }

  /**
   * Parse array with order settings and return array with shape reference and its animations references.
   *
   * @param {Array} order
   * @returns {{shape: *, animations: (Array|*)}}
   * @private
   */
  _parseOrder(order) {
    return order.map(item => {
      const parsed = item.split('::');
      const shape = parsed[0];
      const animations = (parsed[1] && parsed[1].split('->')) || undefined;

      return {shape, animations};
    });
  }

  /**
   * Switch current Slide state to the next shape.
   *
   * @returns {Slide}
   */
  nextShape() {
    if (this._currentIndex + 1 > this._order.length - 1) return this;

    this._currentIndex++;
    return this;
  }

  /**
   * Switch current Slide state to the previous shape.
   *
   * @returns {Slide}
   */
  prevShape() {
    if (this._currentIndex - 1 < 0) return this;

    this._currentIndex--;
    return this;
  }

  /**
   * Get current shape for rendering.
   *
   * @returns {Shape}
   */
  getCurrentShape() {
    return this._shapes[this._order[this._currentIndex].shape];
  }

  /**
   * Get an array of animations that must be played along with the current shape.
   *
   * @returns {Array}
   */
  getCurrentAnimations() {
    return this._order[this._currentIndex].animations.map(animation => this._animations[animation]);
  }

  /**
   * Iterate through all shapes in the slide.
   *
   * @param {Function} fn
   * @returns {Slide}
   */
  forEachShape(fn) {
    Object.keys(this._shapes).forEach(key => fn(this._shapes[key]));
    return this;
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
    this.forEachShape(shape => shape.render(cursor));
    cursor.flush();
    return this;
  }

  /**
   * Serialize Slide state to Object representation.
   *
   * @returns {Object}
   */
  toObject() {
    return {
      shapes: this._shapes.map(shape => shape.toObject()),
      animations: this._animations.map(animation => animation.toObject()),
      order: this._order.map(order => `${order.shape}::${order.animations.join('->')}`)
    }
  }

  /**
   * Serialize Slide state to JSON representation.
   *
   * @returns {JSON}
   */
  toJSON() {
    return JSON.stringify(this.toObject());
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

  /**
   * Create Slide instance from Object representation.
   *
   * @param {Object} obj
   * @returns {Slide}
   */
  static fromObject(obj) {
    return this.create({shapes: obj.shapes, animations: obj.animations, order: obj.order});
  }

  /**
   * Create Slide instance from JSON representation.
   *
   * @param {JSON} json
   * @returns {Slide}
   */
  static fromJSON(json) {
    return this.fromObject(JSON.parse(json));
  }
}
