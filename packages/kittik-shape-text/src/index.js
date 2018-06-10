const Shape = require('kittik-shape-basic');

/**
 * Implements Text shape which renders the text at specified point.
 *
 * @since 1.0.0
 * @extends {Shape}
 */
class Text extends Shape {
  /**
   * Create Text shape.
   *
   * @constructor
   * @param {Cursor} cursor Cursor instance
   * @param {Object} [options] Options object
   * @param {Boolean} [options.bold] Bold styling
   * @param {Boolean} [options.dim] Dim styling
   * @param {Boolean} [options.underlined] Underlined styling
   * @param {Boolean} [options.blink] Blink styling
   * @param {Boolean} [options.reverse] Reverse styling
   * @param {Boolean} [options.hidden] Hidden styling
   * @param {String} [options.align] Align text in the shape (left, center, right)
   * @example
   * Text.create(cursor, {
   *   bold: true,
   *   dim: false,
   *   underlined: true,
   *   blink: false,
   *   reverse: false,
   *   hidden: false,
   *   align: 'center'
   * });
   */
  constructor(cursor, options = {}) {
    super(cursor, options);

    this.setBold(options.bold);
    this.setDim(options.dim);
    this.setUnderlined(options.underlined);
    this.setBlink(options.blink);
    this.setReverse(options.reverse);
    this.setHidden(options.hidden);
    this.setAlign(options.align);
  }

  /**
   * Returns actual width of the shape.
   * Since text hasn't specified width, we need to override default.
   * It looks for the longest line in your shape and returns its length.
   *
   * @override
   * @returns {Number}
   */
  getWidth() {
    const text = this.getText().split('\n').map(item => item.length);
    return Math.max(...text);
  }

  /**
   * Returns actual height of the shape.
   * Since text hasn't specified height, we need to override default.
   * It returns count of lines in our shape.
   *
   * @override
   * @returns {Number}
   */
  getHeight() {
    return this.getText().split('\n').length;
  }

  /**
   * Check if text should be rendered as bold.
   *
   * @returns {Boolean}
   */
  isBold() {
    return !!this.get('bold');
  }

  /**
   * Toggle bold mode.
   *
   * @param {Boolean} [bold=false] If true, print bold text
   * @returns {Text}
   */
  setBold(bold = false) {
    return this.set('bold', bold);
  }

  /**
   * Check if text should be rendered as dim.
   *
   * @returns {Boolean}
   */
  isDim() {
    return !!this.get('dim');
  }

  /**
   * Toggle dim mode.
   *
   * @param {Boolean} [dim=false] If true, print dim text
   * @returns {Text}
   */
  setDim(dim = false) {
    return this.set('dim', dim);
  }

  /**
   * Check if text should be rendered as underlined.
   *
   * @returns {Boolean}
   */
  isUnderlined() {
    return !!this.get('underlined');
  }

  /**
   * Toggle underlined mode.
   *
   * @param {Boolean} [underlined=false] If true, print underlined text
   * @returns {Text}
   */
  setUnderlined(underlined = false) {
    return this.set('underlined', underlined);
  }

  /**
   * Check if text should be rendered as blink.
   *
   * @returns {Boolean}
   */
  isBlink() {
    return !!this.get('blink');
  }

  /**
   * Toggle blink mode.
   *
   * @param {Boolean} [blink=false] If true, print blink text
   * @returns {Text}
   */
  setBlink(blink = false) {
    return this.set('blink', blink);
  }

  /**
   * Check if text should be rendered with reversed colors.
   *
   * @returns {Boolean}
   */
  isReverse() {
    return !!this.get('reverse');
  }

  /**
   * Toggle reverse mode.
   *
   * @param {Boolean} [reverse=false] If true, print text with reversed colors
   * @returns {Text}
   */
  setReverse(reverse = false) {
    return this.set('reverse', reverse);
  }

  /**
   * Check if text should be rendered as hidden text.
   *
   * @returns {Boolean}
   */
  isHidden() {
    return !!this.get('hidden');
  }

  /**
   * Toggle hidden mode.
   *
   * @param {Boolean} [hidden=false] If true, print hidden text
   * @returns {Text}
   */
  setHidden(hidden = false) {
    return this.set('hidden', hidden);
  }

  /**
   * Get text align.
   *
   * @returns {String}
   */
  getAlign() {
    return this.get('align');
  }

  /**
   * Set text align.
   * Aligns text in the shape by anchors to the left, center or to the right.
   *
   * @param {String} [align='center'] Align value can be left, center or right
   * @returns {Text}
   */
  setAlign(align = 'center') {
    if (['left', 'center', 'right'].indexOf(align) === -1) throw new Error(`Unknown align option: ${align}`);
    return this.set('align', align);
  }

  /**
   * Render the shape based on options.
   *
   * @override
   * @returns {Text}
   */
  render() {
    const cursor = this.getCursor();
    const text = this.getText().split('\n');
    const x = this.getX();
    const y = this.getY();
    const foreground = this.getForeground();
    const background = this.getBackground();
    const isBold = this.isBold();
    const isDim = this.isDim();
    const isUnderlined = this.isUnderlined();
    const isBlink = this.isBlink();
    const isReverse = this.isReverse();
    const isHidden = this.isHidden();
    const align = this.getAlign();

    cursor
      .foreground(foreground)
      .background(background)
      .bold(isBold)
      .dim(isDim)
      .underlined(isUnderlined)
      .blink(isBlink)
      .reverse(isReverse)
      .hidden(isHidden);

    text.forEach((item, index) => {
      switch (align) {
        case 'left':
          cursor.moveTo(x, y + index).write(item);
          break;
        case 'center':
          cursor.moveTo(x + (this.getWidth() / 2 - item.length / 2), y + index).write(item);
          break;
        case 'right':
          cursor.moveTo(x + (this.getWidth() - item.length), y + index).write(item);
          break;
      }
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
      bold: this.get('bold'),
      dim: this.get('dim'),
      underlined: this.get('underlined'),
      blink: this.get('blink'),
      reverse: this.get('reverse'),
      hidden: this.get('hidden'),
      align: this.get('align')
    });

    return obj;
  }
}

module.exports = Text;
