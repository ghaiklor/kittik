import {assert} from 'chai';
import sinon from 'sinon';
import Cursor from 'kittik-cursor';
import Text from 'kittik-shape-text';
import Print from 'kittik-animation-print';
import Slide from '../../src/Slide';

const cursor = Cursor.create();

const SLIDE_DECLARATION = {
  shapes: [{
    name: 'Hello',
    type: 'Text',
    options: {
      text: 'Hello, World!'
    }
  }],
  animations: [{
    name: 'Print',
    type: 'Print',
    options: {
      duration: 1
    }
  }],
  order: [
    'Hello::Print->Print'
  ]
};

const SERIALIZED_SLIDE_DECLARATION = {
  shapes: [{
    name: 'Hello',
    type: 'Text',
    options: {
      align: 'center',
      background: false,
      blink: false,
      bold: false,
      dim: false,
      foreground: false,
      height: 5,
      hidden: false,
      reverse: false,
      text: 'Hello, World!',
      underlined: false,
      width: 15,
      x: 10,
      y: 10
    }
  }],
  animations: [{
    name: 'Print',
    type: 'Print',
    options: {
      duration: 1,
      easing: 'outQuad'
    }
  }],
  order: [
    'Hello::Print->Print'
  ]
};

describe('kittik::Slide', () => {
  it('Should properly create slide instance', () => {
    const slide = Slide.create(cursor, SLIDE_DECLARATION);

    assert.instanceOf(slide._cursor, Cursor);
    assert.instanceOf(slide._shapes['Hello'], Text);
    assert.instanceOf(slide._animations['Print'], Print);
    assert.equal(slide._order.length, 1);
  });

  it('Should properly build shapes from declaration', () => {
    const slide = Slide.create(cursor, SLIDE_DECLARATION);

    assert.instanceOf(slide._shapes, Object);
    assert.instanceOf(slide._shapes['Hello'], Text);
  });

  it('Should properly build animations from declaration', () => {
    const slide = Slide.create(cursor, SLIDE_DECLARATION);

    assert.instanceOf(slide._animations, Object);
    assert.instanceOf(slide._animations['Print'], Print);
  });

  it('Should properly build order from declaration', () => {
    const slide = Slide.create(cursor, SLIDE_DECLARATION);

    assert.deepEqual(slide._order, [{shape: 'Hello', animations: ['Print', 'Print']}]);
  });

  it('Should properly render the specified shapes', () => {
    const cursor = Cursor.create();
    const mock = sinon.mock(cursor);
    const slide = Slide.create(cursor, SLIDE_DECLARATION);

    mock.expects('eraseScreen').once();
    mock.expects('flush').once();

    slide._renderShapes([slide._shapes['Hello']]);

    mock.verify();
  });

  it('Should properly render the whole slide', done => {
    const cursor = Cursor.create();
    const mock = sinon.mock(cursor);
    const slide = Slide.create(cursor, SLIDE_DECLARATION);

    mock.expects('write').atLeast(1).returns(cursor);
    mock.expects('eraseScreen').atLeast(1).returns(cursor);
    mock.expects('flush').atLeast(1).returns(cursor);

    slide.render().then(() => {
      mock.verify();
      done();
    });
  });

  it('Should properly serialize slide to the object representation', () => {
    const slide = Slide.create(cursor, SLIDE_DECLARATION);

    assert.deepEqual(slide.toObject(), SERIALIZED_SLIDE_DECLARATION);
  });

  it('Should properly serialize slide to JSON representation', () => {
    const slide = Slide.create(cursor, SLIDE_DECLARATION);

    assert.deepEqual(JSON.parse(slide.toJSON()), SERIALIZED_SLIDE_DECLARATION);
  });

  it('Should properly create Slide instance from static create() method', () => {
    const slide = Slide.create(cursor, SLIDE_DECLARATION);

    assert.instanceOf(slide, Slide);
    assert.instanceOf(slide._cursor, Cursor);
    assert.instanceOf(slide._shapes, Object);
    assert.instanceOf(slide._shapes['Hello'], Text);
    assert.instanceOf(slide._animations, Object);
    assert.instanceOf(slide._animations['Print'], Print);
    assert.instanceOf(slide._order, Array);
    assert.deepEqual(slide._order, [{shape: 'Hello', animations: ['Print', 'Print']}]);
  });

  it('Should properly create Slide instance from Object representation', () => {
    const slide = Slide.fromObject(SERIALIZED_SLIDE_DECLARATION, cursor);

    assert.instanceOf(slide._cursor, Cursor);
    assert.instanceOf(slide._shapes['Hello'], Text);
    assert.instanceOf(slide._animations['Print'], Print);
    assert.deepEqual(slide._order[0], {shape: 'Hello', animations: ['Print', 'Print']});
  });

  it('Should properly create Slide instance from JSON representation', () => {
    const slide = Slide.fromJSON(JSON.stringify(SERIALIZED_SLIDE_DECLARATION), cursor);

    assert.instanceOf(slide._cursor, Cursor);
    assert.instanceOf(slide._shapes['Hello'], Text);
    assert.instanceOf(slide._animations['Print'], Print);
    assert.deepEqual(slide._order[0], {shape: 'Hello', animations: ['Print', 'Print']});
  });
});
