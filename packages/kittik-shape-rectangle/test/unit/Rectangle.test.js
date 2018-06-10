import {assert} from 'chai';
import sinon from 'sinon';
import Rectangle from '../../src/Rectangle';
import Cursor from 'kittik-cursor';

const cursor = Cursor.create();

describe('Shape::Rectangle', () => {
  it('Should properly render with default options', () => {
    const cursor = Cursor.create();
    const rectangle = new Rectangle(cursor);
    const mock = sinon.mock(cursor);

    mock.expects('background').once().withExactArgs('none').returns(cursor);
    mock.expects('foreground').once().withExactArgs('none').returns(cursor);
    mock.expects('moveTo').exactly(8).returns(cursor);
    mock.expects('write').exactly(7).returns(cursor);

    rectangle.render();

    mock.verify();
  });

  it('Should properly render with custom options', () => {
    const cursor = Cursor.create();
    const mock = sinon.mock(cursor);
    const rectangle = new Rectangle(cursor, {
      text: 'test',
      width: 11,
      height: 11,
      x: 1,
      y: 1,
      background: 'yellow',
      foreground: 'black'
    });

    mock.expects('background').once().withArgs('yellow').returns(cursor);
    mock.expects('foreground').once().withArgs('black').returns(cursor);
    mock.expects('moveTo').exactly(14).returns(cursor);
    mock.expects('write').exactly(13).returns(cursor);

    rectangle.render();

    mock.verify();
  });

  it('Should properly serialize shape to Object representation', () => {
    const rectangle = new Rectangle(cursor);
    const obj = rectangle.toObject();

    assert.deepEqual(obj, {
      type: 'Rectangle',
      options: {
        text: '',
        width: 15,
        height: 5,
        x: 10,
        y: 10,
        background: 'none',
        foreground: 'none'
      }
    });
  });

  it('Should properly create rectangle from Object representation', () => {
    const obj = {
      type: 'Rectangle',
      options: {
        text: 'test',
        width: 30,
        height: 50,
        x: 1,
        y: 1
      }
    };

    const rectangle = Rectangle.fromObject(obj, cursor);
    assert.instanceOf(rectangle, Rectangle);
    assert.instanceOf(rectangle.getCursor(), Cursor);
    assert.equal(rectangle.getText(), 'test');
    assert.equal(rectangle.getWidth(), 30);
    assert.equal(rectangle.getHeight(), 50);
    assert.equal(rectangle.getX(), 1);
    assert.equal(rectangle.getY(), 1);
    assert.equal(rectangle.getBackground(), 'none');
    assert.equal(rectangle.getForeground(), 'none');
  });
});
