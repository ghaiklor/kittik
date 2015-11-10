export default class Primitive {
  constructor(cursor) {
    this.setCursor(cursor);
  }

  /**
   * Set cursor that will render
   * @param {Cursor} cursor
   * @returns {Primitive}
   */
  setCursor(cursor) {
    this._cursor = cursor;
    return this;
  }

  /**
   * Get cursor for rendering
   * @returns {Cursor}
   */
  getCursor() {
    return this._cursor;
  }
}
