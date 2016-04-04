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
 * Slide instance is responsible for rendering the slide.
 *
 * @since 1.0.0
 */
export default class Slide {
  /**
   * Creates new Slide instance.
   *
   * @constructor
   * @param {Cursor} cursor Cursor instance
   * @param {Object} [declaration] Declaration of the slide
   * @param {Array<Object>} [declaration.shapes] Array of shapes to render
   * @param {Array<Object>} [declaration.animations] Array of animations to create in this slide
   * @param {Array<String>} [declaration.order] Order for rendering shapes for this slide
   * @example
   * Slide.create(cursor, {
   *   shapes: [{
   *     name: 'Your shape name', // custom name of your shape
   *     type: 'Text', // what is the type of this shape
   *     options: { // Additional options will be passed to shape constructor
   *       text: 'Hello, World',
   *       x: 'center',
   *       y: 'middle'
   *     }
   *   }],
   *   animations: [{
   *     name: 'Your animation name', // custom name of your animation
   *     type: 'Slide', // what is the type of this animation
   *     options: { // Additional options will be passed to animation constructor
   *       duration: 2000
   *     }
   *   }],
   *   order: [
   *     'Your shape name', // renders the specified shape immediately
   *     'Your shape name::Your animation name', // renders the specified shape with specified animation
   *     'Your shape name::Your animation name->Your animation name' // you can chain animations in sequence
   *   ]
   * });
   */
  constructor(cursor, declaration = {}) {
    const {shapes = [], animations = [], order = []} = declaration;

    this._cursor = cursor;
    this._shapes = this._buildShapes(shapes);
    this._animations = this._buildAnimations(animations);
    this._order = this._buildOrder(order);
  }

  /**
   * Parse shapes declaration and return object with references to the created shapes.
   *
   * @private
   * @param {Array<Object>} declaration Array of shapes declaration
   * @returns {Object} Returns object with created Shape instances
   */
  _buildShapes(declaration) {
    return declaration.reduce((obj, shape) => (obj[shape.name] = SHAPES[shape.type].fromObject(shape, this._cursor)) && obj, {});
  }

  /**
   * Parse animations declaration and return object with references to the created animations.
   *
   * @private
   * @param {Array<Object>} declaration Array of animations declaration
   * @returns {Object} Returns object with created Animation instances
   */
  _buildAnimations(declaration) {
    return declaration.reduce((obj, animation) => (obj[animation.name] = ANIMATIONS[animation.type].fromObject(animation)) && obj, {});
  }

  /**
   * Parse order declaration and return object with shape reference and its animations references.
   *
   * @private
   * @param {Array<String>} declaration Array of order declaration
   * @returns {{shape: String, animations: Array<String>}} Returns object with references to shape and animations, assigned to this shape
   */
  _buildOrder(declaration) {
    return declaration.map(item => {
      const parsed = item.split('::');
      const shape = parsed[0];
      const animations = (parsed[1] && parsed[1].split('->')) || [];

      return {shape, animations};
    });
  }

  /**
   * Render the array of shapes.
   * Clears the entire screen -> renders each shape from the array -> flush the changes.
   *
   * @param {Array<Shape>} shapes Array of Shape instances
   * @returns {Slide}
   */
  renderShapes(shapes) {
    this._cursor.eraseScreen();
    shapes.forEach(shape => shape.render());
    this._cursor.flush();

    return this;
  }

  /**
   * Renders the slide.
   *
   * @returns {Promise} Promise will be fulfilled when slide has been rendered
   */
  render() {
    const shapesToRender = [];
    const promises = [];

    for (let animation of Object.keys(this._animations)) {
      this._animations[animation].on('tick', () => this.renderShapes(shapesToRender));
    }

    for (let i = 0; i < this._order.length; i++) {
      const shape = this._shapes[this._order[i].shape];
      const animations = this._order[i].animations.map(item => this._animations[item]);

      promises.push(() => shapesToRender.push(shape));
      animations.forEach(animation => promises.push(() => animation.animate(shape)));
      promises.push(() => this.renderShapes(shapesToRender));
    }

    return promises.reduce((promise, item) => promise.then(item), Promise.resolve());
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
