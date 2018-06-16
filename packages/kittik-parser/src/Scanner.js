const Token = require('./Token');

/**
 * Scanner class for tokenizing the DSL statements.
 *
 * @since 3.0.0
 * @class
 */
class Scanner {
  /**
   * Creates new scanner instance.
   *
   * @param {String} input
   */
  constructor(input) {
    this._input = input;
    this._position = 0;
    this._currentChar = this._input[this._position];
  }

  /**
   * Move the cursor by one character.
   *
   * @return {Scanner}
   */
  advance() {
    this._position += 1;
    this._currentChar = this._input[this._position];

    return this;
  }

  /**
   * Skip whitespaces in source code.
   */
  skipWhitespaces() {
    while (this._currentChar && Scanner.isWhitespace(this._currentChar)) {
      this.advance();
    }
  }

  /**
   * Parses a simple number by radix 10.
   *
   * @return {Token}
   */
  number() {
    let number = '';

    while (this._currentChar && Scanner.isNumeric(this._currentChar)) {
      number += this._currentChar;
      this.advance();
    }

    return Token.create(Token.NUMBER, parseInt(number));
  }

  /**
   * Parses an identifier from source code.
   *
   * @return {Token}
   */
  identifier() {
    let identifier = '';

    while (this._currentChar && Scanner.isAlphanumeric(this._currentChar)) {
      identifier += this._currentChar;
      this.advance();
    }

    return Token.create(Token.IDENTIFIER, identifier);
  }

  /**
   * Get next token from the source code.
   *
   * @return {Token}
   */
  next() {
    if (this._position >= this._input.length) return Token.create(Token.EOF, null);
    if (Scanner.isWhitespace(this._currentChar)) this.skipWhitespaces();
    if (Scanner.isNumeric(this._currentChar)) return this.number();
    if (Scanner.isAlpha(this._currentChar)) return this.identifier();

    if (this._currentChar === ':') {
      this.advance();
      return Token.create(Token.COLON, ':')
    }

    if (this._currentChar === '(') {
      this.advance();
      return Token.create(Token.LEFT_PARENTHESIS, '(');
    }

    if (this._currentChar === ')') {
      this.advance();
      return Token.create(Token.RIGHT_PARENTHESIS, ')');
    }

    throw new Error(`Unknown character: ${this._currentChar}`);
  }

  /**
   * Check if character is numeric.
   *
   * @static
   * @param {String} char
   * @return {Boolean}
   */
  static isNumeric(char) {
    return /\d/.test(char);
  }

  /**
   * Check if character is alpha.
   *
   * @static
   * @param {String} char
   * @return {Boolean}
   */
  static isAlpha(char) {
    return /\w/.test(char);
  }

  /**
   * Check if character is alphanumeric.
   *
   * @static
   * @param {String} char
   * @return {Boolean}
   */
  static isAlphanumeric(char) {
    return this.isAlpha(char) || this.isNumeric(char);
  }

  /**
   * Check if character is a whitespace.
   *
   * @static
   * @param {String} char
   * @return {Boolean}
   */
  static isWhitespace(char) {
    return /\s/.test(char);
  }
}

module.exports = Scanner;
