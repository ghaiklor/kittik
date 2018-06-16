const { assert } = require('chai');
const Token = require('../src/Token');

describe('Parser::Token', () => {
  it('Should properly holds the info', () => {
    const token = new Token(Token.COLON, ':');

    assert.equal(token._type, 'COLON');
    assert.equal(token._value, ':');
  });

  it('Should properly convert token into string', () => {
    const token = new Token(Token.NUMBER, '20');

    assert.equal(token.toString(), '(NUMBER:20)');
  });
});
