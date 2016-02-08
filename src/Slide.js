import FigTextShape from 'kittik-shape-fig-text';
import ImageShape from 'kittik-shape-image';
import RectangleShape from 'kittik-shape-rectangle';
import TextShape from 'kittik-shape-text';

import PrintAnimation from 'kittik-animation-print';
import SlideAnimation from 'kittik-animation-slide';

const SHAPES = {
  figText: FigTextShape,
  image: ImageShape,
  rectangle: RectangleShape,
  text: TextShape
};

const ANIMATIONS = {
  print: PrintAnimation,
  slide: SlideAnimation
};

/**
 * Creates a new slide with shapes.
 *
 * @since 1.0.0
 * @version 1.0.0
 */
export default class Slide {
  /**
   * Creates new Slide instance.
   *
   * @param {Object} [declaration] Array of serialized shapes
   * @param {Array<Object>} [declaration.shapes] Array of shapes to render
   * @param {Array<Object>} [declaration.animations] Array of animation to create in this slide
   * @param {Array<String>} [declaration.flow] Array of flow for current slide
   * @constructor
   */
  constructor(declaration = {}) {
    const {shapes, animations, flow} = declaration;

    this._renderedShapes = [];
    this._shapes = shapes.reduce((obj, shape) => (obj[shape.name] = SHAPES[shape.type.toLowerCase()].fromObject(shape)) && obj, {});
    this._animations = animations.reduce((obj, animation) => (obj[animation.name] = ANIMATIONS[animation.type.toLowerCase()].fromObject(animation)) && obj, {});
    this._flow = flow;
    this._currentPlayIndex = 0;
  }

  _parseFlow(flow) {
    const [,shapeName, animationName] = flow.match(/(.*)\((.*)\)/);
    return {shapeName, animationName};
  }

  /**
   * Renders the slide.
   *
   * @param {Cursor} cursor Cursor instance which is using for rendering the slide
   * @returns {Slide}
   */
  render(cursor) {
    const flow = this._parseFlow(this._flow[this._currentPlayIndex]);
    this._shapes[flow.shapeName].render(cursor);

    return this;
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
