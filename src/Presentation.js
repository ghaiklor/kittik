import keypress from 'keypress';

import { Slide } from './Slide';
import { Cursor } from './cursor/Cursor';

/**
 * Implements Presentation class.
 * Responsible for switching slide and running presentation.
 *
 * @since 1.0.0
 * @version 1.0.0
 */
export class Presentation {
  _cursor = Cursor.create([process.stdout], [process.stdin]);
  _currentSlideIndex = 0;
  _slides = [];

  constructor() {
    process.stdin.setRawMode(true);
    process.stdin.setEncoding('utf8');

    keypress(process.stdin);
  }

  /**
   * Renders specified slide
   * @param {Number} index Slide index in presentation
   * @returns {Presentation}
   */
  renderSlide(index) {
    this._slides[index || this._currentSlideIndex].render(this._cursor);
    return this;
  }

  /**
   * Render the next slide
   * @returns {Presentation}
   */
  nextSlide() {
    this.renderSlide(++this._currentSlideIndex);
    return this;
  }

  /**
   * Render the previous slide
   * @returns {Presentation}
   */
  prevSlide() {
    this.renderSlide(--this._currentSlideIndex);
    return this;
  }
}
