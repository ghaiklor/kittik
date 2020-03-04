import { Canvas } from 'terminal-canvas';
import { Shape } from '../src/Shape';
import { ShapeObject } from '../src/ShapeObject';

describe('Shape::Basic', () => {
  it('Should properly get/set text', () => {
    const cursor = new Canvas();
    const shape = new Shape(cursor);

    expect(shape.text).toEqual('');

    shape.text = 'test';
    expect(shape.text).toEqual('test');
  });

  it('Should properly get/set width', () => {
    const cursor = new Canvas();
    const shape = new Shape(cursor, { width: '15' });

    expect(shape.width).toEqual('15');

    shape.width = '5';
    expect(shape.width).toEqual('5');

    shape.width = '50%';
    expect(shape.width).toEqual(Math.ceil(shape.cursor.width / 2).toString());
  });

  it('Should properly get/set height', () => {
    const cursor = new Canvas();
    const shape = new Shape(cursor, { height: '5' });

    expect(shape.height).toEqual('5');

    shape.height = '15';
    expect(shape.height).toEqual('15');

    shape.height = '50%';
    expect(shape.height).toEqual(Math.floor(shape.cursor.height / 2).toString());
  });

  it('Should properly get/set x coordinate', () => {
    const cursor = new Canvas();
    const shape = new Shape(cursor, { x: '10' });

    expect(shape.x).toEqual('10');

    shape.x = '20';
    expect(shape.x).toEqual('20');

    shape.x = 'left';
    expect(shape.x).toEqual('0');

    shape.x = 'center';
    expect(shape.x).toEqual(Math.floor(shape.cursor.width / 2 - parseInt(shape.width) / 2).toString());

    shape.x = 'right';
    expect(shape.x).toEqual(Math.floor(shape.cursor.width - parseInt(shape.width)).toString());

    shape.x = '50%';
    expect(shape.x).toEqual(Math.floor(shape.cursor.width / 2).toString());
  });

  it('Should properly get/set y coordinate', () => {
    const cursor = new Canvas();
    const shape = new Shape(cursor, { y: '10' });

    expect(shape.y).toEqual('10');

    shape.y = '20';
    expect(shape.y).toEqual('20');

    shape.y = 'top';
    expect(shape.y).toEqual('0');

    shape.y = 'middle';
    expect(shape.y).toEqual(Math.floor(shape.cursor.height / 2 - parseInt(shape.height) / 2).toString());

    shape.y = 'bottom';
    expect(shape.y).toEqual(Math.floor(shape.cursor.height - parseInt(shape.height)).toString());

    shape.y = '50%';
    expect(shape.y).toEqual(Math.floor(shape.cursor.height / 2).toString());
  });

  it('Should properly get/set background', () => {
    const cursor = new Canvas();
    const shape = new Shape(cursor);

    expect(shape.background).toEqual('none');

    shape.background = 'red';
    expect(shape.background).toEqual('red');
  });

  it('Should properly get/set foreground', () => {
    const cursor = new Canvas();
    const shape = new Shape(cursor);

    expect(shape.foreground).toEqual('none');

    shape.foreground = 'yellow';
    expect(shape.foreground).toEqual('yellow');
  });

  it('Should properly throw exception if render is not overridden', () => {
    const cursor = new Canvas();
    const shape = new Shape(cursor);

    expect(() => shape.render()).toThrowError('render() method must be implemented');
  });

  it('Should properly serialize shape to object', () => {
    const cursor = new Canvas();
    const shape = new Shape(cursor, { x: '10', y: '10' });
    const obj = shape.toObject();

    expect(obj).toEqual({
      type: 'Shape',
      options: {
        text: '',
        width: '50%',
        height: '25%',
        x: '10',
        y: '10',
        background: 'none',
        foreground: 'none'
      }
    });
  });

  it('Should properly serialize shape to object with custom options', () => {
    const cursor = new Canvas();
    const shape = new Shape(cursor, {
      text: 'test',
      x: '0',
      y: '0',
      width: '30',
      height: '50',
      background: 'red',
      foreground: 'black'
    });

    const obj = shape.toObject();
    expect(obj).toEqual({
      type: 'Shape',
      options: {
        text: 'test',
        width: '30',
        height: '50',
        x: '0',
        y: '0',
        background: 'red',
        foreground: 'black'
      }
    });
  });

  it('Should properly serialize shape to JSON', () => {
    const cursor = new Canvas();
    const shape = new Shape(cursor);
    const json = shape.toJSON();

    expect(json).toEqual('{"type":"Shape","options":{"text":"","width":"50%","height":"25%","x":"left","y":"top","background":"none","foreground":"none"}}');
  });

  it('Should properly serialize shape to JSON with custom options', () => {
    const cursor = new Canvas();
    const shape = new Shape(cursor, { text: 'test', x: '0', y: '0', width: '30', height: '50' });
    const json = shape.toJSON();

    expect(json).toEqual('{"type":"Shape","options":{"text":"test","width":"30","height":"50","x":"0","y":"0","background":"none","foreground":"none"}}');
  });

  it('Should properly create Shape instance from static create()', () => {
    const cursor = new Canvas();
    const shape = Shape.create(cursor, { text: 'test' });

    expect(shape.text).toEqual('test');
  });

  it('Should properly throw error if trying to create Shape not from its representation', () => {
    const cursor = new Canvas();
    const obj = { type: 'Rectangle' };

    expect(() => Shape.fromObject(obj, cursor)).toThrowError('Rectangle is not an Object representation of the Shape');
  });

  it('Should properly create Shape instance from Object representation', () => {
    const cursor = new Canvas();
    const obj: ShapeObject = {
      type: 'Shape',
      options: {
        text: 'test',
        width: '30',
        height: '50',
        x: '1',
        y: '1',
        background: 'red',
        foreground: 'black'
      }
    };

    const shape = Shape.fromObject(obj, cursor);
    expect(shape.text).toEqual('test');
    expect(shape.width).toEqual('30');
    expect(shape.height).toEqual('50');
    expect(shape.x).toEqual('1');
    expect(shape.y).toEqual('1');
    expect(shape.background).toEqual('red');
    expect(shape.foreground).toEqual('black');
  });

  it('Should properly create Shape instance from JSON representation', () => {
    const json = '{"type":"Shape","options":{"text":"test","width":"30","height":"50","x":"1","y":"1"}}';
    const cursor = new Canvas();
    const shape = Shape.fromJSON(json, cursor);

    expect(shape).toBeInstanceOf(Shape);
    expect(shape.text).toEqual('test');
    expect(shape.width).toEqual('30');
    expect(shape.height).toEqual('50');
    expect(shape.x).toEqual('1');
    expect(shape.y).toEqual('1');
    expect(shape.background).toEqual('none');
    expect(shape.foreground).toEqual('none');
  });
});
