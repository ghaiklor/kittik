import Shape from 'kittik-shape-basic';
import {js_beautify as beautify} from 'js-beautify';
import redeyed from 'redeyed';
import {DEFAULT_THEME} from './themes/default';

/**
 * Implements Code shape which renders the highlighted code at specified point.
 *
 * @since 1.0.0
 * @extends {Shape}
 */
export default class Code extends Shape {
  /**
   * Create Code shape.
   *
   * @constructor
   * @param {Cursor} cursor Cursor instance
   * @param {Object} [options] Options object
   * @param {String} [options.code] Code fragment that you want to show
   * @example
   * Code.create(cursor, {
   *   code: 'console.log('Your code here');'
   * });
   */
  constructor(cursor, options = {}) {
    super(cursor, options);

    this.setCode(options.code);
  }

  /**
   * Get current code from shape.
   *
   * @returns {String}
   */
  getCode() {
    return this.get('code');
  }

  /**
   * Set new code to this shape.
   *
   * @param {String} [code='']
   * @returns {Shape}
   */
  setCode(code = '') {
    return this.set('code', beautify(code, {indent_size: 2}));
  }

  /**
   * Returns actual width of the shape.
   * Since code shape hasn't specified width, we need to override default.
   * It looks for the longest line in your shape and returns its length.
   *
   * @override
   * @returns {Number}
   */
  getWidth() {
    const code = this.getCode().split('\n').map(item => item.length);
    return Math.max(...code);
  }

  /**
   * Returns actual height of the shape.
   * Since code shape hasn't specified height, we need to override default.
   * It returns count of lines in our shape.
   *
   * @override
   * @returns {Number}
   */
  getHeight() {
    return this.getCode().split('\n').length;
  }

  /**
   * Render the shape based on options.
   *
   * @override
   * @returns {Text}
   */
  render() {
    const cursor = this.getCursor();
    const codeSplits = redeyed(this.getCode(), DEFAULT_THEME).splits;
    const x = this.getX();
    const y = this.getY();

    cursor.moveTo(x, y);

    codeSplits.forEach(split => {
      const code = split.replace(/__.*__/, '');
      const color = split.match(/__(.*)__/);

      if (code.match(/\n/)) return cursor.moveTo(x, cursor._y + 1).write(code.replace('\n', ''));

      cursor.foreground(color ? color[1] : 'none');
      cursor.write(code);
    });

    return this;
  }

  /**
   * Overrides default toObject() method because we have new fields here.
   *
   * @override
   * @returns {Object}
   */
  toObject() {
    const obj = super.toObject();

    Object.assign(obj.options, {
      code: this.get('code')
    });

    return obj;
  }
}
