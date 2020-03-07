import { Canvas } from 'terminal-canvas';
import { Rectangle } from '../src/Rectangle';
import { ShapeObject } from 'kittik-shape-basic/dist/ShapeObject';

describe('Shape::Rectangle', () => {
  it('Should properly render with default options', () => {
    const cursor = Canvas.create();
    const rectangle = new Rectangle(cursor);
    const backgroundSpy = jest.spyOn(cursor, 'background').mockReturnThis();
    const foregroundSpy = jest.spyOn(cursor, 'foreground').mockReturnThis();
    const moveToSpy = jest.spyOn(cursor, 'moveTo').mockReturnThis();
    const writeSpy = jest.spyOn(cursor, 'write').mockReturnThis();

    rectangle.render();

    expect(backgroundSpy).toBeCalledTimes(1);
    expect(backgroundSpy).toBeCalledWith('none');
    expect(foregroundSpy).toBeCalledTimes(1);
    expect(foregroundSpy).toBeCalledWith('none');
    expect(moveToSpy).toBeCalledTimes(6);
    expect(writeSpy).toBeCalledTimes(5);
  });

  it('Should properly render with custom options', () => {
    const cursor = Canvas.create();
    const rectangle = new Rectangle(cursor, {
      text: 'test',
      width: '11',
      height: '11',
      x: '1',
      y: '1',
      background: 'yellow',
      foreground: 'black'
    });

    const backgroundSpy = jest.spyOn(cursor, 'background').mockReturnThis();
    const foregroundSpy = jest.spyOn(cursor, 'foreground').mockReturnThis();
    const moveToSpy = jest.spyOn(cursor, 'moveTo').mockReturnThis();
    const writeSpy = jest.spyOn(cursor, 'write').mockReturnThis();

    rectangle.render();

    expect(backgroundSpy).toBeCalledTimes(1);
    expect(backgroundSpy).toBeCalledWith('yellow');
    expect(foregroundSpy).toBeCalledTimes(1);
    expect(foregroundSpy).toBeCalledWith('black');
    expect(moveToSpy).toBeCalledTimes(14);
    expect(writeSpy).toBeCalledTimes(13);
  });

  it('Should properly serialize shape to Object representation', () => {
    const cursor = new Canvas();
    const rectangle = new Rectangle(cursor);
    const obj = rectangle.toObject();

    expect(obj).toEqual({
      type: 'Rectangle',
      options: {
        text: '',
        width: '50%',
        height: '25%',
        x: 'left',
        y: 'top',
        background: 'none',
        foreground: 'none'
      }
    });
  });

  it('Should properly create rectangle from Object representation', () => {
    const cursor = new Canvas();
    const obj: ShapeObject = {
      type: 'Rectangle',
      options: {
        text: 'test',
        width: '30',
        height: '50',
        x: '1',
        y: '1'
      }
    };

    const rectangle = Rectangle.fromObject<Rectangle>(obj, cursor);

    expect(rectangle).toBeInstanceOf(Rectangle);
    expect(rectangle.cursor).toBeInstanceOf(Canvas);
    expect(rectangle.text).toEqual('test');
    expect(rectangle.width).toEqual('30');
    expect(rectangle.height).toEqual('50');
    expect(rectangle.x).toEqual('1');
    expect(rectangle.y).toEqual('1');
    expect(rectangle.background).toEqual('none');
    expect(rectangle.foreground).toEqual('none');
  });
});
