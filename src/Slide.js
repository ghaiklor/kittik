import { Shape } from './Shape';

export class Slide {
  /**
   * Creates new Slide instance
   * @constructor
   */
  constructor() {
    this._shapes = [];
  }

  /**
   * Adds shape to slide
   * @param {Shape} shape
   * @returns {Slide}
   */
  addShape(shape) {
    if (!(shape instanceof Shape)) throw new Error('You must provide Shape instance');

    this._shapes.push(shape);
    return this;
  }

  /**
   * Renders the slide
   * @param {Cursor} cursor
   * @returns {Slide}
   */
  render(cursor) {
    this._shapes.forEach(shape => shape.render(cursor));
    return this;
  }
}
