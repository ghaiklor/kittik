/**
 * Represents a token structure in the DSL.
 *
 * @since 3.0.0
 * @class
 */
class Token {
  /**
   * Creates new instance.
   *
   * @param {String} type Type of the token
   * @param {String} value Value, that matches in the source code
   */
  constructor(type, value) {
    this._type = type;
    this._value = value;
  }

  /**
   * Converts into string representation for easier debugging.
   *
   * @return {String}
   */
  toString() {
    return `(${this._type}:${this._value})`;
  }

  /**
   * Static wrapper for creating new Token instances.
   *
   * @static
   * @return {Token}
   */
  static create(...args) {
    return new this(...args);
  }

  /**
   * Token type for `:`.
   *
   * @static
   * @return {String}
   */
  static get COLON() {
    return 'COLON';
  }

  /**
   * Token type for left parenthesis.
   *
   * @static
   * @return {String}
   */
  static get LEFT_PARENTHESIS() {
    return 'LEFT_PARENTHESIS';
  }

  /**
   * Token type for right parenthesis.
   *
   * @static
   * @return {String}
   */
  static get RIGHT_PARENTHESIS() {
    return 'RIGHT_PARENTHESIS';
  }

  /**
   * Token type for numbers.
   *
   * @static
   * @return {String}
   */
  static get NUMBER() {
    return 'NUMBER';
  }

  /**
   * Token type for identifiers.
   *
   * @static
   * @return {String}
   */
  static get IDENTIFIER() {
    return 'IDENTIFIER';
  }

  /**
   * Token type for end-of-file.
   *
   * @static
   * @return {String}
   */
  static get EOF() {
    return 'EOF';
  }
}

module.exports = Token;
