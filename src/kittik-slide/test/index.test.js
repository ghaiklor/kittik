const { assert } = require('chai');
const sinon = require('sinon');
const Cursor = require('terminal-canvas');
const Text = require('kittik-shape-text');
const Print = require('kittik-animation-print');
const Slide = require('../src/index');

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

describe('Core::Slide', () => {
  it('Should properly create slide instance with default options', () => {
    const cursor = Cursor.create();
    const slide = Slide.create(cursor);

    assert.instanceOf(slide._cursor, Cursor);
    assert.deepEqual(slide._shapes, {});
    assert.deepEqual(slide._animations, {});
    assert.deepEqual(slide._order, []);
  });

  it('Should properly create slide instance with custom slide declaration', () => {
    const cursor = Cursor.create();
    const slide = Slide.create(cursor, SLIDE_DECLARATION);

    assert.instanceOf(slide._cursor, Cursor);
    assert.instanceOf(slide._shapes['Hello'], Text);
    assert.instanceOf(slide._animations['Print'], Print);
    assert.isUndefined(slide._shapes['NON_EXISTS']);
    assert.isUndefined(slide._animations['NON_EXISTS']);
    assert.equal(slide._order.length, 1);
    assert.deepEqual(slide._order, [{ shape: 'Hello', animations: ['Print', 'Print'] }]);
  });

  it('Should properly build shapes from declaration', () => {
    const cursor = Cursor.create();
    const slide = Slide.create(cursor, SLIDE_DECLARATION);

    assert.instanceOf(slide._shapes, Object);
    assert.instanceOf(slide._shapes['Hello'], Text);
    assert.isUndefined(slide._shapes['NON_EXISTS']);
  });

  it('Should properly build animations from declaration', () => {
    const cursor = Cursor.create();
    const slide = Slide.create(cursor, SLIDE_DECLARATION);

    assert.instanceOf(slide._animations, Object);
    assert.instanceOf(slide._animations['Print'], Print);
    assert.isUndefined(slide._animations['NON_EXISTS']);
  });

  it('Should properly build order from declaration without animations', () => {
    const cursor = Cursor.create();
    const slide = Slide.create(cursor, { order: ['Hello'] });

    assert.deepEqual(slide._order, [{ shape: 'Hello', animations: [] }]);
  });

  it('Should properly build order from declaration with animations', () => {
    const cursor = Cursor.create();
    const slide = Slide.create(cursor, SLIDE_DECLARATION);

    assert.deepEqual(slide._order, [{ shape: 'Hello', animations: ['Print', 'Print'] }]);
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
    const cursor = Cursor.create();
    const slide = Slide.create(cursor, SLIDE_DECLARATION);

    assert.deepEqual(slide.toObject(), SERIALIZED_SLIDE_DECLARATION);
  });

  it('Should properly serialize slide to JSON representation', () => {
    const cursor = Cursor.create();
    const slide = Slide.create(cursor, SLIDE_DECLARATION);

    assert.deepEqual(JSON.parse(slide.toJSON()), SERIALIZED_SLIDE_DECLARATION);
  });

  it('Should properly create Slide instance from static create() method', () => {
    const cursor = Cursor.create();
    const slide = Slide.create(cursor, SLIDE_DECLARATION);

    assert.instanceOf(slide, Slide);
    assert.instanceOf(slide._cursor, Cursor);
    assert.instanceOf(slide._shapes, Object);
    assert.instanceOf(slide._shapes['Hello'], Text);
    assert.instanceOf(slide._animations, Object);
    assert.instanceOf(slide._animations['Print'], Print);
    assert.instanceOf(slide._order, Array);
    assert.deepEqual(slide._order, [{ shape: 'Hello', animations: ['Print', 'Print'] }]);
  });

  it('Should properly create Slide instance from Object representation', () => {
    const cursor = Cursor.create();
    const slide = Slide.fromObject(SERIALIZED_SLIDE_DECLARATION, cursor);

    assert.instanceOf(slide._cursor, Cursor);
    assert.instanceOf(slide._shapes['Hello'], Text);
    assert.instanceOf(slide._animations['Print'], Print);
    assert.deepEqual(slide._order[0], { shape: 'Hello', animations: ['Print', 'Print'] });
  });

  it('Should properly create Slide instance from JSON representation', () => {
    const cursor = Cursor.create();
    const slide = Slide.fromJSON(JSON.stringify(SERIALIZED_SLIDE_DECLARATION), cursor);

    assert.instanceOf(slide._cursor, Cursor);
    assert.instanceOf(slide._shapes['Hello'], Text);
    assert.instanceOf(slide._animations['Print'], Print);
    assert.deepEqual(slide._order[0], { shape: 'Hello', animations: ['Print', 'Print'] });
  });
});
