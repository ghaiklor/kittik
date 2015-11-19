import { assert } from 'chai';
import sinon from 'sinon';
import { Rectangle } from '../../../src/shapes/Rectangle';
import { Cursor, COLORS } from '../../../src/cursor/Cursor';

describe('Shape::Rectangle', () => {
  it('Should properly render with default options', () => {
    let cursor = Cursor.create();
    let rectangle = new Rectangle();
    let mock = sinon.mock(cursor);

    mock.expects('fill').once().withArgs({
      x1: 10,
      y1: 10,
      x2: 25,
      y2: 15,
      background: undefined,
      foreground: undefined
    });
    mock.expects('setPosition').once().withArgs(18, 13).returns(cursor);
    mock.expects('write').once().withArgs('');

    rectangle.render(cursor);

    mock.verify();
  });

  it('Should properly render with custom options', () => {
    let cursor = Cursor.create();
    let mock = sinon.mock(cursor);
    let rectangle = new Rectangle({
      text: 'test',
      width: 10,
      height: 10,
      x: 0,
      y: 0,
      background: COLORS.YELLOW,
      foreground: COLORS.BLACK
    });

    mock.expects('fill').once().withArgs({
      x1: 0,
      y1: 0,
      x2: 10,
      y2: 10,
      background: 'yellow',
      foreground: 'black'
    });
    mock.expects('setPosition').once().withArgs(3, 5).returns(cursor);
    mock.expects('write').once().withArgs('test');

    rectangle.render(cursor);

    mock.verify();
  });
});
