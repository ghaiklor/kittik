import { assert } from 'chai';
import sinon from 'sinon';
import { Text } from '../../../src/shapes/Text';
import { Cursor, COLORS } from '../../../src/cursor/Cursor';

describe('Shape::Text', () => {
  it('Should properly create instance', () => {
    let text = new Text();
    assert.instanceOf(text, Text);
  });

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
    mock.expects('setPosition').once(20, 20);
    mock.expects('write').once().withArgs('test');

    text.render(cursor);

    mock.verify();
  });
});
