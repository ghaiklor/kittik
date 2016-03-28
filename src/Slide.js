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
   * @param {Cursor} cursor Cursor instance
   * @param {Object} [declaration]
   * @param {Array<Object>} [declaration.shapes] Array of shapes to render
   * @param {Array<Object>} [declaration.animations] Array of animations to create in this slide
   * @param {Array<String>} [declaration.order] Order for rendering shapes for this slide
   * @constructor
   */
  constructor(cursor, declaration = {}) {
    const {shapes = [], animations = [], order = []} = declaration;

    this._cursor = cursor;
    this._shapes = Slide.parseShapes(shapes);
    this._animations = Slide.parseAnimations(animations);
    this._order = Slide.parseOrder(order);
  }

  renderShape(shape, cursor) {
    shape.setCursor(cursor).render();
    cursor.flush();
    return this;
  }

  renderShapes(shapes, cursor) {
    cursor.eraseScreen();
    shapes.map(shape => this.renderShape(shape, cursor));
    cursor.flush();
    return this;
  }

  /**
   * Render the slide.
   *
   * @param {Cursor} cursor Cursor instance which is using for rendering the slide
   * @returns {Promise} Promise will be fulfilled when slide has rendered
   */
  render(cursor) {
    const renderShape = (shape, cursor) => () => this.renderShape(shape, cursor);
    const renderShapes = (shapes, cursor) => () => this.renderShapes(shapes, cursor);
    const animateShape = (shape, animation, cursor) => () => animation.animate(shape, cursor);
    const promises = [];

    for (let i = 0; i < this._order.length; i++) {
      const shape = this._shapes[this._order[i].shape];
      const renderedShapes = this._order.slice(0, i).map(order => this._shapes[order.shape]);
      const animations = (this._order[i].animations || []).map(item => this._animations[item]);

      animations.forEach(animation => {
        animation.on('tick', shape => this.renderShapes(renderedShapes, cursor) && this.renderShape(shape, cursor));
        promises.push(animateShape(shape, animation, cursor));
      });

      promises.push(renderShapes(renderedShapes.concat([shape]), cursor));
    }

    return promises.reduce((promise, i) => promise.then(i), Promise.resolve());
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
   * Parse shapes array and return object with references to the shapes.
   *
   * @static
   * @param {Array<Object>} shapes Array of shapes declaration
   * @returns {Object} Returns Object with created Shape instances
   */
  static parseShapes(shapes) {
    return shapes.reduce((obj, shape) => (obj[shape.name] = SHAPES[shape.type].fromObject(shape)) && obj, {});
  }

  /**
   * Parse animations array and return object with references to the animations.
   *
   * @param {Array<Object>} animations Array of animations declaration
   * @returns {Object}
   * @static
   */
  static parseAnimations(animations) {
    return animations.reduce((obj, animation) => (obj[animation.name] = ANIMATIONS[animation.type].fromObject(animation)) && obj, {});
  }

  /**
   * Parse array with order settings and return array with shape reference and its animations references.
   *
   * @param {Array<String>} order
   * @returns {Array<Object>}
   * @static
   */
  static parseOrder(order) {
    return order.map(item => {
      const parsed = item.split('::');
      const shape = parsed[0];
      const animations = parsed[1] && parsed[1].split('->');

      return {shape, animations};
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
