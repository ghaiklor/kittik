import keypress from 'keypress';

import { Slide } from './Slide';
import { Cursor } from './Cursor';

export class Presentation {
  constructor() {
    this._slides = [];
    this._currentSlideIndex = 0;
    this._cursor = new Cursor([process.stdout], [process.stdin]);

    keypress(process.stdin);

    process.stdin.setRawMode(true);
    process.stdin.setEncoding('utf8');
  }

  /**
   * Push slide instance
   * @param {Slide} slide
   * @returns {Presentation}
   */
  pushSlide(slide) {
    if (!(slide instanceof Slide)) throw new Error('You must provide Slide instance');

    this._slides.push(slide);
    return this;
  }

  /**
   * Renders specified slide
   * @param {Number} index Slide index in presentation
   * @returns {Presentation}
   */
  renderSlide(index) {
    this._slides[index].render();

    return this;
  }

  /**
   * Render the next slide
   * @returns {Presentation}
   */
  nextSlide() {
    return this;
  }

  /**
   * Render the previous slide
   * @returns {Presentation}
   */
  prevSlide() {
    return this;
  }
}
