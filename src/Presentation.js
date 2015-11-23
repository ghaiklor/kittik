import keypress from 'keypress';

import { Slide } from './Slide';
import { Cursor } from './cursor/Cursor';

/**
 * Implements Presentation class.
 * Responsible for switching slide and running the presentation.
 *
 * @since 1.0.0
 * @version 1.0.0
 */
export class Presentation {
  _cursor = Cursor.create([process.stdout], [process.stdin]).reset().hide();
  _currentSlideIndex = 0;
  _slides = [];

  /**
   * Creates presentation instance with slides.
   *
   * @param {Array<Array<Object>>} slides
   */
  constructor(slides) {
    this._slides = slides.map(slide => Slide.create(slide));

    keypress(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.setEncoding('utf8');

    process.stdin.on('keypress', this._onKeyPress.bind(this));

    this.renderSlide();
  }

  /**
   * Renders specified slide.
   *
   * @param {Number} [index] Slide index in presentation
   * @returns {Presentation}
   */
  renderSlide(index = this._currentSlideIndex) {
    this._cursor.reset().hide();
    if (this._slides[index]) this._slides[index].render(this._cursor);
    return this;
  }

  /**
   * Renders the next slide.
   *
   * @returns {Presentation}
   */
  nextSlide() {
    this._currentSlideIndex = this._currentSlideIndex + 1 > this._slides.length - 1 ? this._slides.length - 1 : this._currentSlideIndex + 1;
    this.renderSlide(this._currentSlideIndex);
    return this;
  }

  /**
   * Renders the previous slide.
   *
   * @returns {Presentation}
   */
  prevSlide() {
    this._currentSlideIndex = this._currentSlideIndex - 1 < 0 ? 0 : this._currentSlideIndex - 1;
    this.renderSlide(this._currentSlideIndex);
    return this;
  }

  /**
   * Closes the presentation and returns to terminal.
   */
  exit() {
    this._cursor.show().reset();
    process.exit(0);
  }

  /**
   * Triggers when user is pressing the key.
   *
   * @param {String} ch
   * @param {Object} key
   * @private
   */
  _onKeyPress(ch, key) {
    if (key.name == 'left') this.prevSlide();
    if (key.name == 'right') this.nextSlide();
    if (key.ctrl && key.name == 'c') this.exit();

    return this;
  }

  /**
   * Wrapper around `new Presentation()`.
   *
   * @param {*} args
   * @returns {Presentation}
   */
  static create(...args) {
    return new this(...args);
  }
}
