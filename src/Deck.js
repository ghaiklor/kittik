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
   * Also, Deck is responsible for creating http server, so you can curl the presentation.
   *
   * @constructor
   * @param {Object} declaration Declaration for the deck, also consists of additional parameters to the deck
   * @example
   * Deck.create({
   *   cursor: Cursor.create(), // custom instance of the cursor
   *   port: 3000, // custom port where http will listen
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
    const {cursor = Cursor.create().reset().hideCursor(), port = 3000} = declaration;
    const {shapes = [], animations = [], slides = []} = declaration;

    this._cursor = cursor;
    this._port = port;
    this._slides = slides.map(slide => {
      console.log(slide);
      const slideShapes = slide.shapes && slide.shapes.concat(shapes);
      const slideAnimations = slide.animations && slide.animations.concat(animations);
      return Slide.create(this._cursor, Object.assign(slide, {shapes: slideShapes, animations: slideAnimations}));
    });

    this._currentSlideIndex = 0;

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
