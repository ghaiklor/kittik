const FocusAnimation = require('kittik-animation-focus');
const PrintAnimation = require('kittik-animation-print');
const SlideAnimation = require('kittik-animation-slide');

const CodeShape = require('kittik-shape-code');
const FigTextShape = require('kittik-shape-fig-text');
const ImageShape = require('kittik-shape-image');
const RectangleShape = require('kittik-shape-rectangle');
const TextShape = require('kittik-shape-text');

const ANIMATIONS = {
  Focus: FocusAnimation,
  Print: PrintAnimation,
  Slide: SlideAnimation
};

const SHAPES = {
  Code: CodeShape,
  FigText: FigTextShape,
  Image: ImageShape,
  Rectangle: RectangleShape,
  Text: TextShape
};

/**
 * Slide instance is responsible for rendering the slide.
 *
 * @since 1.0.0
 */
class Slide {
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
    const { shapes = [], animations = [], order = [] } = declaration;

    this._cursor = cursor;
    this._shapes = this._buildShapes(shapes);
    this._animations = this._buildAnimations(animations);
    this._order = this._buildOrder(order);
  }

  /**
   * Parse shapes declaration and return object with references to the created shapes.
   * It creates object with the name of the shape as a key and instance as a value.
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
   * It creates object with the name of the animation as a key and instance as a value.
   *
   * @private
   * @param {Array<Object>} declaration Array of animations declaration
   * @returns {Object} Returns object with created Animation instances
   */
  _buildAnimations(declaration) {
    return declaration.reduce((obj, animation) => (obj[animation.name] = ANIMATIONS[animation.type].fromObject(animation)) && obj, {});
  }

  /**
   * Parse order declaration and return array with shape name and its animations names.
   *
   * @private
   * @param {Array<String>} declaration Array of order declaration
   * @returns {Array<{shape: String, animations: Array<String>}>} Returns an array with shapes and animations names
   */
  _buildOrder(declaration) {
    return declaration.map(item => {
      const parsed = item.split('::');
      const shape = parsed[0];
      const animations = (parsed[1] && parsed[1].split('->')) || [];

      return { shape, animations };
    });
  }

  /**
   * Render the array of shapes.
   * Applies immediately in the terminal.
   * Clears the entire screen -> renders each shape from the array -> flush the changes.
   *
   * @private
   * @param {Array<Shape>} shapes Array of Shape instances
   * @returns {Slide}
   */
  _renderShapes(shapes) {
    this._cursor.eraseScreen();
    shapes.forEach(shape => shape.render());
    this._cursor.flush();

    return this;
  }

  /**
   * Renders the slide.
   * It builds the sequence of promises that responsible for sequentially rendering the slide as in order.
   *
   * @returns {Promise} Promise will be fulfilled when slide has been rendered
   */
  render() {
    const shapes = this._shapes;
    const animations = this._animations;
    const order = this._order;

    const shapesToRender = [];
    const sequence = [];

    Object.keys(animations).forEach(key => animations[key].on('tick', () => this._renderShapes(shapesToRender)));

    for (let i = 0; i < order.length; i++) {
      const shape = shapes[order[i].shape];
      const shapeAnimations = order[i].animations.map(item => animations[item]);

      sequence.push(() => shapesToRender.push(shape));
      shapeAnimations.forEach(animation => sequence.push(() => animation.animate(shape)));
      sequence.push(() => this._renderShapes(shapesToRender));
    }

    sequence.push(() => Object.keys(animations).forEach(key => animations[key].removeAllListeners()));

    return sequence.reduce((promise, item) => promise.then(item), Promise.resolve());
  }

  /**
   * Serialize Slide to Object representation.
   *
   * @returns {Object}
   */
  toObject() {
    return {
      shapes: Object.keys(this._shapes).map(name => Object.assign(this._shapes[name].toObject(), { name })),
      animations: Object.keys(this._animations).map(name => Object.assign(this._animations[name].toObject(), { name })),
      order: this._order.map(order => `${order.shape}::${order.animations.join('->')}`)
    };
  }

  /**
   * Serialize Slide to JSON representation.
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
   * @static
   * @param {Object} obj Object representation from {@link toObject} method
   * @param {Cursor} [cursor] Cursor instance
   * @returns {Slide}
   */
  static fromObject(obj, cursor) {
    return this.create(cursor, obj);
  }

  /**
   * Create Slide instance from JSON representation.
   *
   * @param {JSON} json JSON representation from {@link toJSON} method
   * @param {Cursor} [cursor] Cursor instance
   * @returns {Slide}
   */
  static fromJSON(json, cursor) {
    return this.fromObject(JSON.parse(json), cursor);
  }
}

module.exports = Slide;
