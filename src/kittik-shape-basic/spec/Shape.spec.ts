import { Shape } from '../src/Shape';
import { ShapeObject } from '../src/ShapeObject';
import { Canvas } from 'terminal-canvas';

describe('Shape::Basic', () => {
  it('Should properly get/set text', () => {
    const shape = new Shape();

    expect(shape.text).toEqual('');

    shape.text = 'test';
    expect(shape.text).toEqual('test');
  });

  it('Should properly get/set width', () => {
    const shape = new Shape({ width: '15' });

    expect(shape.width).toEqual('15');

    shape.width = '5';
    expect(shape.width).toEqual('5');

    shape.width = '50%';
    expect(parseInt(shape.width)).toBe(Math.floor(process.stdout.columns / 2));
  });

  it('Should properly get/set height', () => {
    const shape = new Shape({ height: '5' });

    expect(shape.height).toEqual('5');

    shape.height = '15';
    expect(shape.height).toEqual('15');

    shape.height = '50%';
    expect(shape.height).toEqual(Math.floor(process.stdout.rows / 2).toString());
  });

  it('Should properly get/set x coordinate', () => {
    const shape = new Shape({ x: '10' });

    expect(shape.x).toEqual('10');

    shape.x = '20';
    expect(shape.x).toEqual('20');

    shape.x = 'left';
    expect(shape.x).toEqual('0');

    shape.x = 'center';
    expect(shape.x).toEqual(Math.floor(process.stdout.columns / 2 - parseInt(shape.width) / 2).toString());

    shape.x = 'right';
    expect(shape.x).toEqual(Math.floor(process.stdout.columns - parseInt(shape.width)).toString());

    shape.x = '50%';
    expect(shape.x).toEqual(Math.floor(process.stdout.columns / 2).toString());
  });

  it('Should properly get/set y coordinate', () => {
    const shape = new Shape({ y: '10' });

    expect(shape.y).toEqual('10');

    shape.y = '20';
    expect(shape.y).toEqual('20');

    shape.y = 'top';
    expect(shape.y).toEqual('0');

    shape.y = 'middle';
    expect(shape.y).toEqual(Math.floor(process.stdout.rows / 2 - parseInt(shape.height) / 2).toString());

    shape.y = 'bottom';
    expect(shape.y).toEqual(Math.floor(process.stdout.rows - parseInt(shape.height)).toString());

    shape.y = '50%';
    expect(shape.y).toEqual(Math.floor(process.stdout.rows / 2).toString());
  });

  it('Should properly get/set background', () => {
    const shape = new Shape();

    expect(shape.background).toEqual('none');

    shape.background = 'red';
    expect(shape.background).toEqual('red');
  });

  it('Should properly get/set foreground', () => {
    const shape = new Shape();

    expect(shape.foreground).toEqual('none');

    shape.foreground = 'yellow';
    expect(shape.foreground).toEqual('yellow');
  });

  it('Should properly update the cursor when provided another one through render()', () => {
    const cursor = new Canvas({ width: 10, height: 20 });
    const shape = new Shape();

    expect(parseInt(shape.width)).toBe(Math.floor(process.stdout.columns / 2));

    shape.render(cursor);
    expect(parseInt(shape.width)).toBe(Math.floor(10 / 2));
  });

  it('Should properly serialize shape to object', () => {
    const shape = new Shape({ x: '10', y: '10' });
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
    const shape = new Shape({
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
    const shape = new Shape();
    const json = shape.toJSON();

    expect(json).toEqual('{"type":"Shape","options":{"text":"","width":"50%","height":"25%","x":"left","y":"top","background":"none","foreground":"none"}}');
  });

  it('Should properly serialize shape to JSON with custom options', () => {
    const shape = new Shape({ text: 'test', x: '0', y: '0', width: '30', height: '50' });
    const json = shape.toJSON();

    expect(json).toEqual('{"type":"Shape","options":{"text":"test","width":"30","height":"50","x":"0","y":"0","background":"none","foreground":"none"}}');
  });

  it('Should properly create Shape instance from static create()', () => {
    const shape = Shape.create({ text: 'test' });

    expect(shape.text).toEqual('test');
  });

  it('Should properly throw error if trying to create Shape not from its representation', () => {
    const obj = { type: 'Rectangle' };

    expect(() => Shape.fromObject(obj)).toThrowError('Rectangle is not an Object representation of the Shape');
  });

  it('Should properly create Shape instance from Object representation', () => {
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

    const shape = Shape.fromObject(obj);
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
    const shape = Shape.fromJSON(json);

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
