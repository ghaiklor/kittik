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

export default class Cursor {
  constructor() {
    this._cursor = charm(process);

    this.reset().on('^C', process.exit);
  }

  destroy() {
    this._cursor.destroy();
    return this;
  }

  write(...args) {
    this._cursor.write(...args);
    return this;
  }

  setPosition(x, y) {
    this._cursor.position(x, y);
    return this;
  }

  async getPosition() {
    return await this._cursor.position();
  }

  move(x, y) {
    this._cursor.move(x, y);
    return this;
  }

  up(y) {
    this._cursor.up(y);
    return this;
  }

  down(y) {
    this._cursor.down(y);
    return this;
  }

  left(x) {
    this._cursor.left(x);
    return this;
  }

  right(x) {
    this._cursor.right(x);
    return this;
  }

  reset() {
    this._cursor.reset();
    return this;
  }

  erase(s) {
    this._cursor.erase(s);
    return this;
  }

  eraseToEnd() {
    return this.erase('end');
  }

  eraseToStart() {
    return this.erase('start');
  }

  eraseLine() {
    return this.erase('line');
  }

  eraseToDown() {
    return this.erase('down');
  }

  eraseToUp() {
    return this.erase('up');
  }

  eraseScreen() {
    return this.erase('screen');
  }

  foreground(color) {
    this._cursor.foreground(color);
  }

  background(color) {
    this._cursor.background(color);
    return this;
  }

  removeAllListeners() {
    this._cursor.removeAllListeners();
    return this;
  }

  on(...args) {
    this._cursor.on(...args);
    return this;
  }
}
