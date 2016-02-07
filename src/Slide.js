import FigTextShape from 'kittik-shape-fig-text';
import ImageShape from 'kittik-shape-image';
import RectangleShape from 'kittik-shape-rectangle';
import TextShape from 'kittik-shape-text';

import PrintAnimation from 'kittik-animation-print';
import SlideAnimation from 'kittik-animation-slide';

const shapes = {
  figText: FigTextShape,
  image: ImageShape,
  rectangle: RectangleShape,
  text: TextShape
};

const animations = {
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
   * You must pass serialized Object representation of each {@link Shape} as an array to this constructor.
   *
   * @param {Array<Shape>} shapes Array of serialized shapes
   * @constructor
   * @example
   * Slide.create([{
   *   name: 'Rectangle',
   *   options: {}
   * }, {
   *   name: 'Text',
   *   options: {
   *     text: 'Hello there'
   *   }
   * }]);
   */
  constructor(shapes) {
    this._shapes = shapes.map(shape => shapes[shape.type.toLowerCase()].fromObject(shape));
  }

  /**
   * Renders the slide.
   *
   * @param {Cursor} cursor Cursor instance which is using for rendering the slide
   * @returns {Slide}
   */
  render(cursor) {
    this._shapes.forEach(shape => shape.render(cursor));
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
