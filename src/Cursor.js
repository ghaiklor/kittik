import charm from 'charm';

export const COLORS = {
  RED: 'red',
  YELLOW: 'yellow',
  GREEN: 'green',
  BLUE: 'blue',
  CYAN: 'cyan',
  MAGENTA: 'magenta',
  BLACK: 'black',
  WHITE: 'white'
};

export const ERASE_REGIONS = {
  FROM_CURSOR_TO_END: 'end',
  FROM_CURSOR_TO_START: 'start',
  FROM_CURSOR_TO_DOWN: 'down',
  FROM_CURSOR_TO_UP: 'up',
  CURRENT_LINE: 'line',
  ENTIRE_SCREEN: 'screen'
};

export const DISPLAY_MODES = {
  RESET: 'reset',
  BRIGHT: 'bright',
  DIM: 'dim',
  UNDERSCORE: 'underscore',
  BLINK: 'blink',
  REVERSE: 'reverse',
  HIDDEN: 'hidden'
};

export default class Cursor {
  constructor() {
    this._cursor = charm(process);

    this.on('^C', process.exit);
  }

  /**
   * Write to the stream
   * @param {String} message Message to write into a stream
   * @returns {Cursor}
   */
  write(message) {
    this._cursor.write(message);
    return this;
  }

  /**
   * Set cursor position to specified point
   * @param {Number} x
   * @param {Number} y
   * @returns {Cursor}
   */
  setPosition(x, y) {
    this._cursor.position(x, y);
    return this;
  }

  /**
   * Get current position of cursor
   * @returns {Promise}
   */
  getPosition() {
    return new Promise((resolve, reject) => this._cursor.position((x, y) => resolve(x, y)));
  }

  /**
   * Move the cursor by the relative coordinates
   * @param {Number} x
   * @param {Number} y
   * @returns {Cursor}
   */
  move(x, y) {
    this._cursor.move(x, y);
    return this;
  }

  /**
   * Move the cursor up
   * @param {Number} y Rows count
   * @returns {Cursor}
   */
  up(y) {
    this._cursor.up(y);
    return this;
  }

  /**
   * Move the cursor down
   * @param {Number} y Rows count
   * @returns {Cursor}
   */
  down(y) {
    this._cursor.down(y);
    return this;
  }

  /**
   * Move the cursor left
   * @param {Number} x Columns count
   * @returns {Cursor}
   */
  left(x) {
    this._cursor.left(x);
    return this;
  }

  /**
   * Move the cursor right
   * @param {Number} x Columns count
   * @returns {Cursor}
   */
  right(x) {
    this._cursor.right(x);
    return this;
  }

  /**
   * Erase a defined region
   * @param {String} region
   * @returns {Cursor}
   */
  erase(region) {
    this._cursor.erase(region);
    return this;
  }

  /**
   * Erase from cursor to the end of the line
   * @returns {Cursor}
   */
  eraseToEnd() {
    return this.erase(ERASE_REGIONS.FROM_CURSOR_TO_END);
  }

  /**
   * Erase from cursor to the start of the line
   * @returns {Cursor}
   */
  eraseToStart() {
    return this.erase(ERASE_REGIONS.FROM_CURSOR_TO_START);
  }

  /**
   * Erase the entire line
   * @returns {Cursor}
   */
  eraseLine() {
    return this.erase(ERASE_REGIONS.CURRENT_LINE);
  }

  /**
   * Erase everything below the current line
   * @returns {Cursor}
   */
  eraseToDown() {
    return this.erase(ERASE_REGIONS.FROM_CURSOR_TO_DOWN);
  }

  /**
   * Erase everything above the current line
   * @returns {Cursor}
   */
  eraseToUp() {
    return this.erase(ERASE_REGIONS.FROM_CURSOR_TO_UP);
  }

  /**
   * Erase the entire screen
   * @returns {Cursor}
   */
  eraseScreen() {
    return this.erase(ERASE_REGIONS.ENTIRE_SCREEN);
  }

  /**
   * Set the foreground color
   * @param {String|Number} color
   * @returns {Cursor}
   */
  foreground(color) {
    this._cursor.foreground(color);
    return this;
  }

  /**
   * Set the background color
   * @param {String|Number} color
   * @returns {Cursor}
   */
  background(color) {
    this._cursor.background(color);
    return this;
  }

  /**
   * Set the cursor invisible
   * @returns {Cursor}
   */
  hide() {
    this._cursor.cursor(false);
    return this;
  }

  /**
   * Set the cursor visible
   * @returns {Cursor}
   */
  show() {
    this._cursor.cursor(true);
    return this;
  }

  /**
   * Set the display mode
   * @param {String} mode
   * @returns {Cursor}
   */
  display(mode) {
    this._cursor.display(mode);
    return this;
  }

  /**
   * Clear the entire screen
   * @returns {Cursor}
   */
  reset() {
    this._cursor.reset();
    return this;
  }

  /**
   * Remove all listeners from cursor
   * @param {String} event
   * @returns {Cursor}
   */
  removeAllListeners(event) {
    this._cursor.removeAllListeners(event);
    return this;
  }

  /**
   * Subscribe to event
   * @param {String} event
   * @param {Function} handler
   * @returns {Cursor}
   */
  on(event, handler) {
    this._cursor.on(event, handler);
    return this;
  }

  /**
   * Push the cursor state
   * @param {Boolean} withAttributes
   * @returns {Cursor}
   */
  push(withAttributes = false) {
    this._cursor.push(withAttributes);
    return this;
  }

  /**
   * Pop the cursor state
   * @param {Boolean} withAttributes
   * @returns {Cursor}
   */
  pop(withAttributes = false) {
    this._cursor.pop(withAttributes);
    return this;
  }

  /**
   * Destroy the cursor and emit end event downstream
   * @returns {Cursor}
   */
  destroy() {
    this._cursor.destroy();
    return this;
  }
}
