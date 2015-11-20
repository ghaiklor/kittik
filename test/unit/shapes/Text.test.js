import { assert } from 'chai';
import sinon from 'sinon';
import { Text } from '../../../src/shapes/Text';
import { Cursor, COLORS } from '../../../src/cursor/Cursor';

describe('Shape::Text', () => {
  it('Should properly render with default options', () => {
    let cursor = Cursor.create();
    let text = new Text();
    let mock = sinon.mock(cursor);

    mock.expects('background').never();
    mock.expects('foreground').never();
    mock.expects('setPosition').once(10, 10);
    mock.expects('write').once().withArgs('');

    text.render(cursor);

    mock.verify();
  });

  it('Should properly render with custom options', () => {
    let cursor = Cursor.create();
    let text = Text.create({background: COLORS.YELLOW, foreground: COLORS.BLACK}).setPosition(20, 20).setText('test');
    let mock = sinon.mock(cursor);

    mock.expects('background').once().withArgs('yellow');
    mock.expects('foreground').once().withArgs('black');
    mock.expects('setPosition').once().withArgs(20, 20);
    mock.expects('write').once().withArgs('test');

    text.render(cursor);

    mock.verify();
  });

  it('Should properly serialize shape to Object representation', () => {
    let text = new Text().setText('test');
    let obj = text.toObject();

    assert.deepEqual(obj, {
      name: 'Text',
      options: {
        text: 'test',
        width: 15,
        height: 5,
        x: 10,
        y: 10,
        background: undefined,
        foreground: undefined
      }
    });
  });

  it('Should properly create text from Object representation', () => {
    let obj = {
      name: 'Text',
      options: {
        text: 'test',
        width: 30,
        height: 50,
        x: 0,
        y: 0,
        background: undefined,
        foreground: undefined
      }
    };

    let text = Text.fromObject(obj);
    assert.instanceOf(text, Text);
    assert.equal(text.getText(), 'test');
    assert.equal(text.getWidth(), 30);
    assert.equal(text.getHeight(), 50);
    assert.deepEqual(text.getPosition(), {x: 0, y: 0});
    assert.isUndefined(text.getBackground());
    assert.isUndefined(text.getForeground());
  });
});
