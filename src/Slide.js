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
   *
   * @param {Array<Shape>} shapes Array of serialized shapes
   * @constructor
   */
  constructor(shapes) {
    this._shapes = shapes.map(shape => {
      if (shape.name === 'Rectangle') return Rectangle.fromObject(shape.options);
      if (shape.name === 'Text') return Text.fromObject(shape.options);
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
}
