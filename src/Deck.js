import keypress from 'keypress';
import Cursor from 'kittik-cursor';
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
    this._cursor = Cursor.create().reset().hideCursor();
    this._currentSlideIndex = 0;
    this._slides = declaration.slides.map(slide => Slide.create(this._cursor, slide));

    keypress(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.setEncoding('utf8');

    process.stdin.on('keypress', this._onKeyPress.bind(this));
  }

  /**
   * Run the presentation.
   *
   * @returns {Deck}
   */
  run() {
    this.renderSlide();
    return this;
  }

  /**
   * Renders specified slide.
   *
   * @param {Number} [index] Slide index in presentation
   * @returns {Deck}
   */
  renderSlide(index = this._currentSlideIndex) {
    if (!this._slides[index]) return this;

    this._cursor.reset().hideCursor();
    this._slides[index].render();

    return this;
  }

  /**
   * Renders the next slide.
   *
   * @returns {Deck}
   */
  nextSlide() {
    if (this._currentSlideIndex + 1 > this._slides.length - 1) return this;

    this.renderSlide(++this._currentSlideIndex);
    return this;
  }

  /**
   * Renders the previous slide.
   *
   * @returns {Deck}
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
    this._cursor.reset().showCursor();
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
   * @returns {Deck}
   */
  static create(...args) {
    return new this(...args);
  }
}
