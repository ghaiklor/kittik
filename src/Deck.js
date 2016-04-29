import keypress from 'keypress';
import Cursor from 'kittik-cursor';
import Slide from './Slide';

/**
 * Deck class is responsible for managing slides and their rendering.
 *
 * @since 1.0.0
 */
export default class Deck {
  /**
   * Creates deck instance.
   * You can declare shapes\animations\etc at the root of the declaration.
   * It will automatically merges to each instance of the slide.
   *
   * @constructor
   * @param {Object} declaration Declaration for the deck, also consists of additional parameters to the deck
   * @param {Cursor} [declaration.cursor] Cursor instance that you want to use when rendering slides
   * @param {Array<Object>} [declaration.shapes] Array of shapes declaration will be merged into each slide
   * @param {Array<Object>} [declaration.animations] Array of animations declaration will be merged into each slide
   * @param {Array<Object>} declaration.slides Array of slides declaration
   * @example
   * Deck.create({
   *   cursor: Cursor.create(), // custom instance of the cursor
   *   shapes: [{ // global shapes will be merged into each slide and will be available there by name
   *     name: 'Global Shape',
   *     type: 'Text',
   *     options: {
   *       text: 'Hello, World'
   *     }
   *   }],
   *   animations: [{
   *     name: 'Global Animation',
   *     type: 'Print',
   *     options: {
   *       duration: 3000,
   *       easing: 'inOutElastic'
   *     }
   *   }],
   *   slides: [{ // declaration for each slide
   *     shapes: [], // local shapes applied only to current slide
   *     animations: [], // local animations applied only to current slide
   *     order: [] // order of the current slide
   *   }]
   * });
   */
  constructor(declaration) {
    const {cursor = Cursor.create().saveScreen().reset().hideCursor()} = declaration;
    const {shapes = [], animations = [], slides = []} = declaration;

    this._currentSlideIndex = 0;
    this._cursor = cursor;
    this._slides = slides.map(slide => {
      const slideShapes = shapes.concat(slide.shapes || []);
      const slideAnimations = animations.concat(slide.animations || []);
      return Slide.create(this._cursor, Object.assign(slide, {shapes: slideShapes, animations: slideAnimations}));
    });

    this._initKeyboard();
  }

  /**
   * Init keyboard and bind EventEmitter to the stdin stream.
   *
   * @private
   */
  _initKeyboard() {
    if (this._cursor._stream === process.stdin) {
      keypress(process.stdin);
      process.stdin.setRawMode(true);
      process.stdin.setEncoding('utf8');
      process.stdin.on('keypress', this._onKeyPress.bind(this));
    }

    return this;
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
    if (key.name == 'right' || key.name == 'space') this.nextSlide();
    if (key.ctrl && key.name == 'c') this.exit();

    return this;
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

    this._cursor.eraseScreen();
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
    this._cursor.showCursor().restoreScreen().reset();
    process.exit(0);
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
