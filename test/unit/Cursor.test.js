import { assert } from 'chai';
import Cursor, { COLORS } from '../../src/Cursor';

describe('kittik::Cursor', () => {
  it('Should properly initialize', () => {
    let cursor = new Cursor();

    assert.instanceOf(cursor, Cursor);
  });

  it('Should properly export colors', () => {
    assert.equal(COLORS.BLACK, 'black');
    assert.equal(COLORS.BLUE, 'blue');
    assert.equal(COLORS.CYAN, 'cyan');
    assert.equal(COLORS.GREEN, 'green');
    assert.equal(COLORS.MAGENTA, 'magenta');
    assert.equal(COLORS.RED, 'red');
    assert.equal(COLORS.WHITE, 'white');
    assert.equal(COLORS.YELLOW, 'yellow');
  });
});
