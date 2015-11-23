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
  _cursor = Cursor.create([process.stdout], [process.stdin]).reset().hide();
  _currentSlideIndex = 0;
  _slides = [];

  /**
   * Creates presentation instance with slides
   * @param {Array<Array<Object>>} slides
   */
  constructor(slides) {
    process.stdin.setRawMode(true);
    process.stdin.setEncoding('utf8');

    keypress(process.stdin);

    process.stdin.on('keypress', this._onKeyPress.bind(this));

    this._slides = slides.map(slide => Slide.create(slide));
    this.renderSlide();
  }

  /**
   * Renders specified slide
   * @param {Number} [index] Slide index in presentation
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

  exit() {
    this._cursor.show().reset();
    process.exit(0);
  }

  /**
   * Triggers when user is pressing the key.
   *
   * @param ch
   * @param key
   * @private
   */
  _onKeyPress(ch, key) {
    if (key.name == 'left') this.prevSlide();
    if (key.name == 'right') this.nextSlide();
    if (key.ctrl && key.name == 'c') this.exit();

    return this;
  }

  static create(...args) {
    return new this(...args);
  }
}
