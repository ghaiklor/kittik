import { Canvas } from 'terminal-canvas';
import { Shape } from '../src/Shape';
import { ShapeObject } from '../src/ShapeObject';

describe('basic shape', () => {
  it('should properly get/set text', () => {
    expect.hasAssertions();

    const shape = new Shape();
    expect(shape.text).toStrictEqual('');

    shape.text = 'test';
    expect(shape.text).toStrictEqual('test');
  });

  it('should properly get/set width', () => {
    expect.hasAssertions();

    const shape = new Shape({ width: '15' });
    expect(shape.width).toStrictEqual('15');

    shape.width = '5';
    expect(shape.width).toStrictEqual('5');

    shape.width = '50%';
    expect(parseInt(shape.width, 10)).toBe(Math.floor(process.stdout.columns / 2));
  });

  it('should properly get/set height', () => {
    expect.hasAssertions();

    const shape = new Shape({ height: '5' });
    expect(shape.height).toStrictEqual('5');

    shape.height = '15';
    expect(shape.height).toStrictEqual('15');

    shape.height = '50%';
    expect(shape.height).toStrictEqual(Math.floor(process.stdout.rows / 2).toString());
  });

  it('should properly get/set x coordinate', () => {
    expect.hasAssertions();

    const shape = new Shape({ x: '10' });
    expect(shape.x).toStrictEqual('10');

    shape.x = '20';
    expect(shape.x).toStrictEqual('20');

    shape.x = 'left';
    expect(shape.x).toStrictEqual('0');

    shape.x = 'center';
    expect(shape.x).toStrictEqual(Math.floor(process.stdout.columns / 2 - parseInt(shape.width, 10) / 2).toString());

    shape.x = 'right';
    expect(shape.x).toStrictEqual(Math.floor(process.stdout.columns - parseInt(shape.width, 10)).toString());

    shape.x = '50%';
    expect(shape.x).toStrictEqual(Math.floor(process.stdout.columns / 2).toString());
  });

  it('should properly get/set y coordinate', () => {
    expect.hasAssertions();

    const shape = new Shape({ y: '10' });
    expect(shape.y).toStrictEqual('10');

    shape.y = '20';
    expect(shape.y).toStrictEqual('20');

    shape.y = 'top';
    expect(shape.y).toStrictEqual('0');

    shape.y = 'middle';
    expect(shape.y).toStrictEqual(Math.floor(process.stdout.rows / 2 - parseInt(shape.height, 10) / 2).toString());

    shape.y = 'bottom';
    expect(shape.y).toStrictEqual(Math.floor(process.stdout.rows - parseInt(shape.height, 10)).toString());

    shape.y = '50%';
    expect(shape.y).toStrictEqual(Math.floor(process.stdout.rows / 2).toString());
  });

  it('should properly get/set background', () => {
    expect.hasAssertions();

    const shape = new Shape();
    expect(shape.background).toStrictEqual('none');

    shape.background = 'red';
    expect(shape.background).toStrictEqual('red');
  });

  it('should properly get/set foreground', () => {
    expect.hasAssertions();

    const shape = new Shape();
    expect(shape.foreground).toStrictEqual('none');

    shape.foreground = 'yellow';
    expect(shape.foreground).toStrictEqual('yellow');
  });

  it('should properly update the cursor when provided another one through render()', () => {
    expect.hasAssertions();

    const cursor = new Canvas({ width: 10, height: 20 });
    const shape = new Shape();

    expect(parseInt(shape.width, 10)).toBe(Math.floor(process.stdout.columns / 2));

    shape.render(cursor);
    expect(parseInt(shape.width, 10)).toBe(Math.floor(10 / 2));
  });

  it('should properly serialize shape to object', () => {
    expect.hasAssertions();

    const shape = new Shape({ x: '10', y: '10' });
    const obj = shape.toObject();

    expect(obj).toStrictEqual({
      type: 'Shape',
      options: {
        background: 'none',
        foreground: 'none',
        height: '25%',
        text: '',
        width: '50%',
        x: '10',
        y: '10'
      }
    });
  });

  it('should properly serialize shape to object with custom options', () => {
    expect.hasAssertions();

    const shape = new Shape({
      background: 'red',
      foreground: 'black',
      height: '50',
      text: 'test',
      width: '30',
      x: '0',
      y: '0'
    });

    const obj = shape.toObject();
    expect(obj).toStrictEqual({
      type: 'Shape',
      options: {
        background: 'red',
        foreground: 'black',
        height: '50',
        text: 'test',
        width: '30',
        x: '0',
        y: '0'
      }
    });
  });

  it('should properly serialize shape to JSON', () => {
    expect.hasAssertions();

    const shape = new Shape();
    const json = shape.toJSON();

    // eslint-disable-next-line max-len
    expect(json).toStrictEqual('{"type":"Shape","options":{"background":"none","foreground":"none","height":"25%","text":"","width":"50%","x":"left","y":"top"}}');
  });

  it('should properly serialize shape to JSON with custom options', () => {
    expect.hasAssertions();

    const shape = new Shape({
      height: '50',
      text: 'test',
      width: '30',
      x: '0',
      y: '0'
    });

    const json = shape.toJSON();

    // eslint-disable-next-line max-len
    expect(json).toStrictEqual('{"type":"Shape","options":{"background":"none","foreground":"none","height":"50","text":"test","width":"30","x":"0","y":"0"}}');
  });

  it('should properly create Shape instance from static create()', () => {
    expect.hasAssertions();

    const shape = Shape.create({ text: 'test' });
    expect(shape.text).toStrictEqual('test');
  });

  it('should properly throw error if trying to create Shape not from its representation', () => {
    expect.hasAssertions();

    const obj = { type: 'Rectangle' };
    expect(() => Shape.fromObject(obj)).toThrow(
      'You specified configuration for "Rectangle" but provided it to "Shape". ' +
      'Did you mean to set "type" in configuration to "Shape"?'
    );
  });

  it('should properly create Shape instance from Object representation', () => {
    expect.hasAssertions();

    const obj: ShapeObject = {
      type: 'Shape',
      options: {
        background: 'red',
        foreground: 'black',
        height: '50',
        text: 'test',
        width: '30',
        x: '1',
        y: '1'
      }
    };

    const shape = Shape.fromObject(obj);
    expect(shape.cursor).toBeInstanceOf(Canvas);
    expect(shape.text).toStrictEqual('test');
    expect(shape.width).toStrictEqual('30');
    expect(shape.height).toStrictEqual('50');
    expect(shape.x).toStrictEqual('1');
    expect(shape.y).toStrictEqual('1');
    expect(shape.background).toStrictEqual('red');
    expect(shape.foreground).toStrictEqual('black');
  });

  it('should properly create Shape instance from JSON representation', () => {
    expect.hasAssertions();

    const json = '{"type":"Shape","options":{"text":"test","width":"30","height":"50","x":"1","y":"1"}}';
    const shape = Shape.fromJSON(json);

    expect(shape).toBeInstanceOf(Shape);
    expect(shape.cursor).toBeInstanceOf(Canvas);
    expect(shape.text).toStrictEqual('test');
    expect(shape.width).toStrictEqual('30');
    expect(shape.height).toStrictEqual('50');
    expect(shape.x).toStrictEqual('1');
    expect(shape.y).toStrictEqual('1');
    expect(shape.background).toStrictEqual('none');
    expect(shape.foreground).toStrictEqual('none');
  });
});
