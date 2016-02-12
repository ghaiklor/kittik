import keypress from 'keypress';
import Cursor from 'kittik-cursor';
import Print from 'kittik-animation-print';
import Slide from './Slide';

/**
 * Implements Presentation class.
 * Responsible for switching slide and running the presentation.
 *
 * @since 1.0.0
 * @version 1.0.0
 */
export default class Deck {
  /**
   * Creates presentation instance with slides.
   *
   * @param {Array<Array<Object>>} declaration
   */
  constructor(declaration) {
    this._cursor = Cursor.create().resetTTY().hideCursor().flush();
    this._currentSlideIndex = 0;
    this._slides = declaration.slides.map(slide => Slide.create(slide));

    keypress(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.setEncoding('utf8');

    process.stdin.on('keypress', this._onKeyPress.bind(this));
  }

  /**
   * Run the presentation.
   *
   * @returns {Presentation}
   */
  run() {
    this.renderSlide();
    return this;
  }

  /**
   * Renders specified slide.
   *
   * @param {Number} [index] Slide index in presentation
   * @returns {Presentation}
   */
  renderSlide(index = this._currentSlideIndex) {
    if (!this._slides[index]) return this;

    this._cursor.resetTTY().hideCursor().flush();
    this._slides[index].render(this._cursor);

    return this;
  }

  /**
   * Renders the next slide.
   *
   * @returns {Presentation}
   */
  nextSlide() {
    if (this._currentSlideIndex + 1 > this._slides.length - 1) return this;

    this.renderSlide(++this._currentSlideIndex);
    return this;
  }

  /**
   * Renders the previous slide.
   *
   * @returns {Presentation}
   */
  prevSlide() {
    if (this._currentSlideIndex - 1 < 0) return this;

    this.renderSlide(--this._currentSlideIndex);
    return this;
  }

  /**
   * Closes the presentation and returns to terminal.
   */
  exit() {
    this._cursor.resetTTY().showCursor().flush();
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
