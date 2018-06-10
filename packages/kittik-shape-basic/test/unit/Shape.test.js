import {assert} from 'chai';
import Cursor from 'kittik-cursor';
import Shape from '../../src/Shape';

const cursor = Cursor.create();

describe('Shape', () => {
  it('Should properly initialize shape instance with no arguments', () => {
    const shape = new Shape(cursor);

    assert.instanceOf(shape, Shape);
  });

  it('Should properly initialize shape instance with arguments', () => {
    const shape = new Shape(cursor, {text: 'test'});

    assert.instanceOf(shape, Shape);
    assert.equal(shape.getText(), 'test');
  });

  it('Should properly get/set property from the shape', () => {
    const shape = new Shape(cursor);

    assert.equal(shape.get('text'), '');
    assert.instanceOf(shape.set('animation.name', 'print'), Shape);
    assert.equal(shape.get('animation.name'), 'print');
    assert.instanceOf(shape.set('animation.name', 'test'), Shape);
    assert.equal(shape.get('animation.name'), 'test');
  });

  it('Should properly get/set text', () => {
    const shape = new Shape(cursor);

    assert.equal(shape.getText(), '');
    assert.instanceOf(shape.setText('test'), Shape);
    assert.equal(shape.getText(), 'test');
  });

  it('Should properly get/set width', () => {
    const shape = new Shape(cursor);

    assert.equal(shape.getWidth(), 15);
    assert.instanceOf(shape.setWidth(5), Shape);
    assert.equal(shape.getWidth(), 5);
    assert.instanceOf(shape.setWidth('50%'), Shape);
    assert.equal(shape.getWidth(), Math.ceil(cursor._width / 2));
  });

  it('Should properly get/set height', () => {
    const shape = new Shape(cursor);

    assert.equal(shape.getHeight(), 5);
    assert.instanceOf(shape.setHeight(15), Shape);
    assert.equal(shape.getHeight(), 15);
    assert.instanceOf(shape.setHeight('50%'), Shape);
    assert.equal(shape.getHeight(), Math.floor(cursor._height / 2));
  });

  it('Should properly get/set x coordinate', () => {
    const shape = new Shape(cursor);

    assert.equal(shape.getX(), 10);
    assert.instanceOf(shape.setX(20), Shape);
    assert.equal(shape.getX(), 20);
    assert.instanceOf(shape.setX('left'), Shape);
    assert.equal(shape.getX(), 0);
    assert.instanceOf(shape.setX('center'), Shape);
    assert.equal(shape.getX(), Math.floor(cursor._width / 2 - shape.getWidth() / 2));
    assert.instanceOf(shape.setX('right'), Shape);
    assert.equal(shape.getX(), Math.floor(cursor._width - shape.getWidth()));
    assert.instanceOf(shape.setX('50%'), Shape);
    assert.equal(shape.getX(), Math.floor(cursor._width / 2));
  });

  it('Should properly get/set y coordinate', () => {
    const shape = new Shape(cursor);

    assert.equal(shape.getY(), 10);
    assert.instanceOf(shape.setY(20), Shape);
    assert.equal(shape.getY(), 20);
    assert.instanceOf(shape.setY('top'), Shape);
    assert.equal(shape.getY(), 0);
    assert.instanceOf(shape.setY('middle'), Shape);
    assert.equal(shape.getY(), Math.floor(cursor._height / 2 - shape.getHeight() / 2));
    assert.instanceOf(shape.setY('bottom'), Shape);
    assert.equal(shape.getY(), Math.floor(cursor._height - shape.getHeight()));
    assert.instanceOf(shape.setY('50%'), Shape);
    assert.equal(shape.getY(), Math.floor(cursor._height / 2));
  });

  it('Should properly get/set background', () => {
    const shape = new Shape(cursor);

    assert.equal(shape.getBackground(), 'none');
    assert.instanceOf(shape.setBackground('red'), Shape);
    assert.equal(shape.getBackground(), 'red');
  });

  it('Should properly get/set foreground', () => {
    const shape = new Shape(cursor);

    assert.equal(shape.getForeground(), 'none');
    assert.instanceOf(shape.setForeground('yellow'), Shape);
    assert.equal(shape.getForeground(), 'yellow');
  });

  it('Should properly throw exception if render is not overridden', () => {
    const shape = new Shape(cursor);

    assert.throws(() => shape.render(), Error, 'render() method must be implemented');
  });

  it('Should properly serialize shape to object', () => {
    const shape = new Shape(cursor);
    const obj = shape.toObject();

    assert.deepEqual(obj, {
      type: 'Shape',
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

  it('Should properly serialize shape to object with custom options', () => {
    const shape = new Shape(cursor, {
      text: 'test',
      x: 0,
      y: 0,
      width: 30,
      height: 50,
      background: 'red',
      foreground: 'black'
    });
    const obj = shape.toObject();

    assert.deepEqual(obj, {
      type: 'Shape',
      options: {
        text: 'test',
        width: 30,
        height: 50,
        x: 0,
        y: 0,
        background: 'red',
        foreground: 'black'
      }
    });
  });

  it('Should properly serialize shape to JSON', () => {
    const shape = new Shape(cursor);
    const json = shape.toJSON();

    assert.equal(json, '{"type":"Shape","options":{"text":"","width":15,"height":5,"x":10,"y":10,"background":"none","foreground":"none"}}');
  });

  it('Should properly serialize shape to JSON with custom options', () => {
    const shape = new Shape(cursor, {text: 'test', x: 0, y: 0, width: 30, height: 50});
    const json = shape.toJSON();

    assert.equal(json, '{"type":"Shape","options":{"text":"test","width":30,"height":50,"x":0,"y":0,"background":"none","foreground":"none"}}');
  });

  it('Should properly create Shape instance from static create()', () => {
    const shape = Shape.create(cursor, {text: 'test'});

    assert.equal(shape.getText(), 'test');
    assert.instanceOf(shape, Shape);
  });

  it('Should properly throw error if trying to create Shape not from Object representation', () => {
    const obj = {};

    assert.throws(() => Shape.fromObject(obj), Error, 'It looks like it is not an Object representation of the shape');
  });

  it('Should properly throw error if trying to create Shape not from its representation', () => {
    const obj = {type: 'Rectangle', options: {}};

    assert.throws(() => Shape.fromObject(obj), Error, 'Rectangle is not an Object representation of the Shape');
  });

  it('Should properly create Shape instance from Object representation', () => {
    const obj = {
      type: 'Shape',
      options: {
        text: 'test',
        width: 30,
        height: 50,
        x: 1,
        y: 1,
        background: 'red',
        foreground: 'black'
      }
    };

    const shape = Shape.fromObject(obj, cursor);

    assert.instanceOf(shape, Shape);
    assert.instanceOf(shape.getCursor(), Cursor);
    assert.equal(shape.getText(), 'test');
    assert.equal(shape.getWidth(), 30);
    assert.equal(shape.getHeight(), 50);
    assert.equal(shape.getX(), 1);
    assert.equal(shape.getY(), 1);
    assert.equal(shape.getBackground(), 'red');
    assert.equal(shape.getForeground(), 'black');
  });

  it('Should properly create Shape instance from JSON representation', () => {
    const json = '{"type":"Shape","options":{"text":"test","width":30,"height":50,"x":1,"y":1}}';
    const shape = Shape.fromJSON(json, cursor);

    assert.instanceOf(shape, Shape);
    assert.instanceOf(shape.getCursor(), Cursor);
    assert.equal(shape.getText(), 'test');
    assert.equal(shape.getWidth(), 30);
    assert.equal(shape.getHeight(), 50);
    assert.equal(shape.getX(), 1);
    assert.equal(shape.getY(), 1);
    assert.equal(shape.getBackground(), 'none');
    assert.equal(shape.getForeground(), 'none');
  });
});
