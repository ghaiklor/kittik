import { assert } from 'chai';
import sinon from 'sinon';
import { Rectangle } from '../../../src/shapes/Rectangle';
import { Cursor } from '../../../src/cursor/Cursor';

describe('Shape::Rectangle', () => {
  it('Should properly create instance', () => {
    let rectangle = new Rectangle();
    assert.instanceOf(rectangle, Rectangle);
  });

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
    mock.expects('write').once().withArgs('');
    mock.expects('setPosition').once().withArgs(18, 13).returns(cursor);

    rectangle.render(cursor);

    mock.verify();
  });
});
