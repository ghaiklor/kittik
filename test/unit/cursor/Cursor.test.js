import { assert } from 'chai';
import sinon from 'sinon';
import { Cursor, COLORS, ERASE_REGIONS } from '../../../src/cursor/Cursor';

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
    let mock = sinon.mock(cursor._cursor);
    let handler = () => true;

    mock.expects('on').once().withArgs('test', handler);
    mock.expects('removeListener').once().withArgs('test', handler);
    mock.expects('removeAllListeners').once().withArgs('test');

    cursor.on('test', handler);
    cursor.off('test', handler);
    cursor.off('test');

    mock.verify();
  });

  it('Should properly write to the cursor', () => {
    let cursor = new Cursor();
    let mock = sinon.mock(cursor._cursor);

    mock.expects('write').once().withArgs('test');

    cursor.write('test');

    mock.verify();
  });

  it('Should properly set absolute position of cursor', () => {
    let cursor = new Cursor();
    let mock = sinon.mock(cursor._cursor);

    mock.expects('position').once().withArgs(10, 10);

    cursor.setPosition(10, 10);

    mock.verify();
  });

  it('Should properly get absolute position of cursor', done => {
    let cursor = new Cursor();
    let mock = sinon.mock(cursor._cursor);

    mock.expects('position').once().callsArgWith(0, 10, 10);

    cursor
      .getPosition()
      .then(({x, y}) => {
        assert.equal(x, 10);
        assert.equal(y, 10);
        done();
      })
      .catch(done);

    mock.verify();
  });

  it('Should properly move cursor by relative coordinates', () => {
    let cursor = new Cursor();
    let mock = sinon.mock(cursor._cursor);

    mock.expects('move').once().withArgs(10, 10);

    cursor.move(10, 10);

    mock.verify();
  });

  it('Should properly move cursor up with default arguments', () => {
    let cursor = new Cursor();
    let mock = sinon.mock(cursor._cursor);

    mock.expects('up').once().withArgs(1);

    cursor.up();

    mock.verify();
  });

  it('Should properly move cursor up with custom arguments', () => {
    let cursor = new Cursor();
    let mock = sinon.mock(cursor._cursor);

    mock.expects('up').once().withArgs(5);

    cursor.up(5);

    mock.verify();
  });

  it('Should properly move cursor down with default arguments', () => {
    let cursor = new Cursor();
    let mock = sinon.mock(cursor._cursor);

    mock.expects('down').once().withArgs(1);

    cursor.down();

    mock.verify();
  });

  it('Should properly move cursor down with custom arguments', () => {
    let cursor = new Cursor();
    let mock = sinon.mock(cursor._cursor);

    mock.expects('down').once().withArgs(5);

    cursor.down(5);

    mock.verify();
  });

  it('Should properly move cursor left with default arguments', () => {
    let cursor = new Cursor();
    let mock = sinon.mock(cursor._cursor);

    mock.expects('left').once().withArgs(1);

    cursor.left();

    mock.verify();
  });

  it('Should properly move cursor left with custom arguments', () => {
    let cursor = new Cursor();
    let mock = sinon.mock(cursor._cursor);

    mock.expects('left').once().withArgs(5);

    cursor.left(5);

    mock.verify();
  });

  it('Should properly move cursor right with default arguments', () => {
    let cursor = new Cursor();
    let mock = sinon.mock(cursor._cursor);

    mock.expects('right').once().withArgs(1);

    cursor.right();

    mock.verify();
  });

  it('Should properly move cursor right with custom arguments', () => {
    let cursor = new Cursor();
    let mock = sinon.mock(cursor._cursor);

    mock.expects('right').once().withArgs(5);

    cursor.right(5);

    mock.verify();
  });

  it('Should properly erase the specified region', () => {
    let cursor = new Cursor();
    let mock = sinon.mock(cursor._cursor);

    mock.expects('erase').once().withArgs('screen');

    cursor.erase(ERASE_REGIONS.ENTIRE_SCREEN);

    mock.verify();
  });

  it('Should properly change foreground color', () => {
    let cursor = new Cursor();
    let mock = sinon.mock(cursor._cursor);

    mock.expects('foreground').once().withArgs('yellow');

    cursor.foreground(COLORS.YELLOW);

    mock.verify();
  });

  it('Should properly change background color', () => {
    let cursor = new Cursor();
    let mock = sinon.mock(cursor._cursor);

    mock.expects('background').once().withArgs('black');

    cursor.background(COLORS.BLACK);

    mock.verify();
  });

  it('Should properly fill the specified region without optional arguments', () => {
    let cursor = new Cursor();
    let mock = sinon.mock(cursor);

    mock.expects('background').never();
    mock.expects('foreground').never();
    mock.expects('setPosition').exactly(7);
    mock.expects('write').exactly(6).withArgs('     ');

    cursor.fill({x1: 0, y1: 0, x2: 5, y2: 5});

    mock.verify();
  });

  it('Should properly fill the specified region with optional arguments', () => {
    let cursor = new Cursor();
    let mock = sinon.mock(cursor);

    mock.expects('background').once().withArgs('yellow');
    mock.expects('foreground').once().withArgs('black');
    mock.expects('setPosition').exactly(7);
    mock.expects('write').exactly(6).withArgs('TTTTT');

    cursor.fill({x1: 0, y1: 0, x2: 5, y2: 5, symbol: 'T', background: COLORS.YELLOW, foreground: COLORS.BLACK});

    mock.verify();
  });
});
