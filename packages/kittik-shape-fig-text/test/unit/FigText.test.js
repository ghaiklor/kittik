import {assert} from 'chai';
import Cursor from 'kittik-cursor';
import sinon from 'sinon';
import FigText from '../../src/FigText';

const cursor = Cursor.create();

describe('Shape::FigText', () => {
  it('Should properly create FigText instance', () => {
    const text = new FigText(cursor);
    assert.instanceOf(text, FigText);
  });

  it('Should properly get actual width of the shape', () => {
    const text = new FigText(cursor, {text: 'test'});
    assert.equal(text.getWidth(), 19);
  });

  it('Should properly get actual height of the shape', () => {
    const text = new FigText(cursor, {text: 'test'});
    assert.equal(text.getHeight(), 6);
  });

  it('Should properly get/set font', () => {
    const text = new FigText(cursor);
    assert.equal(text.getFont(), 'Standard');
    assert.instanceOf(text.setFont('Ghost'), FigText);
    assert.equal(text.getFont(), 'Ghost');
  });

  it('Should properly get/set horizontal layout', () => {
    const text = new FigText(cursor);
    assert.equal(text.getHorizontalLayout(), 'default');
    assert.instanceOf(text.setHorizontalLayout('full'), FigText);
    assert.equal(text.getHorizontalLayout(), 'full');
  });

  it('Should properly throw exception if horizontal layout is wrong', () => {
    const text = new FigText(cursor);
    assert.throws(() => text.setHorizontalLayout('wrong'), Error, 'Unrecognized layout: wrong');
  });

  it('Should properly get/set vertical layout', () => {
    const text = new FigText(cursor);
    assert.equal(text.getVerticalLayout(), 'default');
    assert.instanceOf(text.setVerticalLayout('fitted'), FigText);
    assert.equal(text.getVerticalLayout(), 'fitted');
  });

  it('Should properly throw exception if vertical layout is wrong', () => {
    const text = new FigText(cursor);
    assert.throws(() => text.setVerticalLayout('wrong'), Error, 'Unrecognized layout: wrong');
  });

  it('Should properly render with default options', () => {
    const cursor = Cursor.create();
    const text = new FigText(cursor);
    const mock = sinon.mock(cursor);

    mock.expects('background').once().withExactArgs('none').returns(cursor);
    mock.expects('foreground').once().withExactArgs('none').returns(cursor);
    mock.expects('moveTo').exactly(6).returns(cursor);
    mock.expects('write').exactly(6).withArgs('').returns(cursor);

    text.render();

    mock.verify();
  });

  it('Should properly render with custom options', () => {
    const cursor = Cursor.create();
    const text = new FigText(cursor, {text: 'test', background: 'black', foreground: 'white'});
    const mock = sinon.mock(cursor);

    mock.expects('background').once().withArgs('black').returns(cursor);
    mock.expects('foreground').once().withArgs('white').returns(cursor);
    mock.expects('moveTo').exactly(6).returns(cursor);
    mock.expects('write').exactly(6).returns(cursor);

    text.render();

    mock.verify();
  });

  it('Should properly create Object representation', () => {
    const text = new FigText(cursor, {
      text: 'test',
      x: '10%',
      font: 'Ghost',
      horizontalLayout: 'full',
      verticalLayout: 'fitted'
    });
    const obj = text.toObject();

    assert.deepEqual(obj, {
      type: 'FigText',
      options: {
        text: 'test',
        width: 15,
        height: 5,
        x: '10%',
        y: 10,
        background: 'none',
        foreground: 'none',
        font: 'Ghost',
        horizontalLayout: 'full',
        verticalLayout: 'fitted'
      }
    });
  });

  it('Should properly create FigText instance from Object representation', () => {
    const text = FigText.fromObject({
      type: 'FigText',
      options: {
        text: 'test',
        x: 'center',
        y: 'middle',
        background: 'red',
        foreground: 'black',
        font: 'Ghost',
        horizontalLayout: 'full',
        verticalLayout: 'fitted'
      }
    }, cursor);

    assert.instanceOf(text, FigText);
    assert.instanceOf(text.getCursor(), Cursor);
    assert.equal(text.getText(), 'test');
    assert.equal(text.get('x'), 'center');
    assert.equal(text.get('y'), 'middle');
    assert.equal(text.getBackground(), 'red');
    assert.equal(text.getForeground(), 'black');
    assert.equal(text.getFont(), 'Ghost');
    assert.equal(text.getHorizontalLayout(), 'full');
    assert.equal(text.getVerticalLayout(), 'fitted');
  });
});
