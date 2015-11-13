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

export class Cursor {
  /**
   * Creates new Cursor instance
   * @constructor
   * @param {Stream|Boolean} [stdout]
   * @param {Stream|Boolean} [stdin]
   */
  constructor(stdout = process.stdout, stdin = false) {
    this._cursor = charm();

    if (stdout) this._cursor.pipe(stdout);
    if (stdin) stdin.pipe(this._cursor);

    process.on('exit', () => this.setPosition(Cursor.getTerminalWidth(), Cursor.getTerminalHeight()));
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
    return new Promise((resolve, reject) => this._cursor.position((x, y) => resolve({x, y})));
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
   * @param {String} region Constant from ERASE_REGIONS
   * @returns {Cursor}
   */
  erase(region) {
    this._cursor.erase(region);
    return this;
  }

  /**
   * Set the foreground color
   * @param {String|Number} color Constant from COLORS
   * @returns {Cursor}
   */
  foreground(color) {
    this._cursor.foreground(color);
    return this;
  }

  /**
   * Set the background color
   * @param {String|Number} color Constant from COLORS
   * @returns {Cursor}
   */
  background(color) {
    this._cursor.background(color);
    return this;
  }

  /**
   * Fill the specified region with symbol
   * @param {String} [symbol] Symbol that will be used for filling the region
   * @param {String} [background] Background color from COLORS
   * @param {String} [foreground] Foreground color from COLORS
   * @param {Number} x1
   * @param {Number} y1
   * @param {Number} x2
   * @param {Number} y2
   * @returns {Cursor}
   */
  fill({x1, y1, x2, y2, symbol = ' ', background, foreground}) {
    let filler = new Array(x2 - x1).fill(symbol).join('');

    if (background) this.background(background);
    if (foreground) this.foreground(foreground);

    this.setPosition(x1, y1);

    while (y1 <= y2) {
      this.write(filler);
      this.setPosition(x1, ++y1);
    }

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
   * Clear the entire screen
   * @returns {Cursor}
   */
  reset() {
    this._cursor.reset();
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

  /**
   * Get width of terminal
   * @returns {Number}
   */
  static getTerminalWidth() {
    return process.stdout.columns;
  }

  /**
   * Get height of terminal
   * @returns {Number}
   */
  static getTerminalHeight() {
    return process.stdout.rows;
  }
}
