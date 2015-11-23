import { Rectangle } from './shapes/Rectangle';
import { Text } from './shapes/Text';

/**
 * Creates a new slide with shapes.
 *
 * @since 1.0.0
 * @version 1.0.0
 */
export class Slide {
  _shapes = [];

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
    this._shapes = shapes.map(shape => {
      if (shape.name === 'Rectangle') return Rectangle.fromObject(shape);
      if (shape.name === 'Text') return Text.fromObject(shape);
    });
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
