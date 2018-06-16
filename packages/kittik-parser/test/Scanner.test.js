const { assert } = require('chai');
const Scanner = require('../src/Scanner');

describe('Parser::Scanner', () => {
  it('Should properly tokenize the shape statement', () => {
    const scanner = new Scanner('shape:text (name testing width 20)');

    assert.equal(scanner.next().toString(), '(IDENTIFIER:shape)');
    assert.equal(scanner.next().toString(), '(COLON::)');
    assert.equal(scanner.next().toString(), '(IDENTIFIER:text)');
    assert.equal(scanner.next().toString(), '(LEFT_PARENTHESIS:()');
    assert.equal(scanner.next().toString(), '(IDENTIFIER:name)');
    assert.equal(scanner.next().toString(), '(IDENTIFIER:testing)');
    assert.equal(scanner.next().toString(), '(IDENTIFIER:width)');
    assert.equal(scanner.next().toString(), '(NUMBER:20)');
    assert.equal(scanner.next().toString(), '(RIGHT_PARENTHESIS:))');
    assert.equal(scanner.next().toString(), '(EOF:null)');
    assert.equal(scanner.next().toString(), '(EOF:null)');
  });
});
