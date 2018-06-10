import Shape from 'kittik-shape-basic';
import figlet from 'figlet';

/**
 * Implements ASCII art text via Figlet fonts.
 *
 * @extends {Shape}
 * @since 1.0.0
 */
export default class FigText extends Shape {
  /**
   * Create ASCII-art shape.
   *
   * @constructor
   * @param {Cursor} cursor Cursor instance
   * @param {Object} [options] Options object
   * @param {String} [options.font] Figlet font that you want to use
   * @param {String} [options.horizontalLayout] A string value that indicates the horizontal layout to use
   * @param {String} [options.verticalLayout] A string value that indicates the vertical layout to use
   * @example
   * FigText.create(cursor, {
   *   text: 'Hello, World',
   *   x: 'center',
   *   y: 'middle',
   *   font: 'Ghost',
   *   horizontalLayout: 'full',
   *   verticalLayout: 'full'
   * });
   */
  constructor(cursor, options = {}) {
    super(cursor, options);

    this.setFont(options.font);
    this.setHorizontalLayout(options.horizontalLayout);
    this.setVerticalLayout(options.verticalLayout);
  }

  /**
   * Get actual width of the shape.
   * Since we don't specify width of the shape, we need to calculate its sizes on our own.
   * The longest line in our shape will be our shape width.
   *
   * @override
   * @returns {Number}
   */
  getWidth() {
    const text = this._render().split('\n').map(item => item.length);
    return Math.max(...text);
  }

  /**
   * Get actual height of the shape.
   * Since we don't specify height of the shape, we need to calculate its sizes on our own.
   * Count of total lines in our shape will be our height.
   *
   * @override
   * @returns {Number}
   */
  getHeight() {
    return this._render().split('\n').length;
  }

  /**
   * Get font that uses for rendering text.
   *
   * @returns {String}
   */
  getFont() {
    return this.get('font');
  }

  /**
   * Set font that will be used for rendering the text.
   *
   * @param {String} [font='Standard']
   * @returns {FigText}
   */
  setFont(font = 'Standard') {
    return this.set('font', font);
  }

  /**
   * Get horizontal layout.
   *
   * @returns {String}
   */
  getHorizontalLayout() {
    return this.get('horizontalLayout');
  }

  /**
   * Set horizontal layout.
   *
   * @param {String} [layout='default'] Can be default, full or fitted
   * @returns {FigText}
   */
  setHorizontalLayout(layout = 'default') {
    if (['default', 'full', 'fitted'].indexOf(layout) === -1) throw new Error(`Unrecognized layout: ${layout}`);
    return this.set('horizontalLayout', layout);
  }

  /**
   * Get vertical layout.
   *
   * @returns {String}
   */
  getVerticalLayout() {
    return this.get('verticalLayout');
  }

  /**
   * Set vertical layout.
   *
   * @param {String} [layout='default'] Can be default, full or fitted
   * @returns {FigText}
   */
  setVerticalLayout(layout = 'default') {
    if (['default', 'full', 'fitted'].indexOf(layout) === -1) throw new Error(`Unrecognized layout: ${layout}`);
    return this.set('verticalLayout', layout);
  }

  /**
   * Pre render the ASCII art without writing it to the cursor.
   *
   * @returns {String} Returns string of ASCII art
   * @private
   */
  _render() {
    const font = this.getFont();
    const horizontalLayout = this.getHorizontalLayout();
    const verticalLayout = this.getVerticalLayout();

    return figlet.textSync(this.getText(), {font, horizontalLayout, verticalLayout});
  }

  /**
   * Renders the shape.
   *
   * @returns {FigText}
   */
  render() {
    const cursor = this.getCursor();
    const text = this._render().split('\n');
    const x = this.getX();
    const y = this.getY();
    const background = this.getBackground();
    const foreground = this.getForeground();

    cursor.background(background).foreground(foreground);

    text.forEach((item, index) => cursor.moveTo(x, y + index).write(item));

    return this;
  }

  /**
   * Serialize shape to object representation.
   *
   * @returns {Object}
   */
  toObject() {
    const obj = super.toObject();

    Object.assign(obj.options, {
      font: this.get('font'),
      horizontalLayout: this.get('horizontalLayout'),
      verticalLayout: this.get('verticalLayout')
    });

    return obj;
  }
}
