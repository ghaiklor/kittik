import { assert } from 'chai';
import { Cursor } from '../../../src/cursor/Cursor';
import sinon from 'sinon';

describe('Cursor', () => {
  it('Should properly initialize with default arguments', () => {
    let cursor = new Cursor();
    assert.instanceOf(cursor, Cursor);
  });

  it('Should properly initialize with custom stdout and stdin', () => {
    let cursor = new Cursor([], [process.stdin, process.stdin]);
    assert.instanceOf(cursor, Cursor);
  });

  it('Should properly trigger events', () => {
    let cursor = new Cursor();
    let mock = sinon.mock(cursor);

    mock.expects('on').once();
    mock.expects('off').twice();

    cursor.on('test', () => true);
    cursor.off('test', () => true);
    cursor.off('test');

    mock.verify();
  });
});
