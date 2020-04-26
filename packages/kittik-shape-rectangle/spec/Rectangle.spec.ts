import { Canvas } from 'terminal-canvas';
import { Rectangle } from '../src/Rectangle';

describe('rectangle shape', () => {
  it('should properly render with default options', () => {
    expect.hasAssertions();

    const canvas = Canvas.create();
    const rectangle = new Rectangle({ x: '0', y: '0', height: '2', width: '5' });
    const backgroundSpy = jest.spyOn(canvas, 'background').mockReturnThis();
    const foregroundSpy = jest.spyOn(canvas, 'foreground').mockReturnThis();
    const moveToSpy = jest.spyOn(canvas, 'moveTo').mockReturnThis();
    const writeSpy = jest.spyOn(canvas, 'write').mockReturnThis();

    rectangle.render(canvas);

    expect(backgroundSpy).toHaveBeenCalledTimes(1);
    expect(backgroundSpy).toHaveBeenCalledWith('none');
    expect(foregroundSpy).toHaveBeenCalledTimes(1);
    expect(foregroundSpy).toHaveBeenCalledWith('none');
    expect(moveToSpy).toHaveBeenCalledTimes(5);
    expect(moveToSpy).toHaveBeenCalledWith(0, 0);
    expect(moveToSpy).toHaveBeenCalledWith(0, 1);
    expect(writeSpy).toHaveBeenCalledTimes(4);
    expect(writeSpy).toHaveBeenCalledWith('     ');
  });

  it('should properly render with custom options', () => {
    expect.hasAssertions();

    const canvas = Canvas.create();
    const rectangle = new Rectangle({
      background: 'yellow',
      foreground: 'black',
      height: '11',
      text: 'test',
      width: '11',
      x: '1',
      y: '1'
    });

    const backgroundSpy = jest.spyOn(canvas, 'background').mockReturnThis();
    const foregroundSpy = jest.spyOn(canvas, 'foreground').mockReturnThis();
    const moveToSpy = jest.spyOn(canvas, 'moveTo').mockReturnThis();
    const writeSpy = jest.spyOn(canvas, 'write').mockReturnThis();

    rectangle.render(canvas);

    expect(backgroundSpy).toHaveBeenCalledTimes(1);
    expect(backgroundSpy).toHaveBeenCalledWith('yellow');
    expect(foregroundSpy).toHaveBeenCalledTimes(1);
    expect(foregroundSpy).toHaveBeenCalledWith('black');
    expect(moveToSpy).toHaveBeenCalledTimes(14);
    expect(writeSpy).toHaveBeenCalledTimes(13);
  });

  it('should properly serialize shape to Object representation', () => {
    expect.hasAssertions();

    const rectangle = new Rectangle();
    const obj = rectangle.toObject();

    expect(obj).toStrictEqual({
      type: 'Rectangle',
      options: {
        background: 'none',
        foreground: 'none',
        height: '25%',
        text: '',
        width: '50%',
        x: 'left',
        y: 'top'
      }
    });
  });

  it('should properly create rectangle from Object representation', () => {
    expect.hasAssertions();

    const obj = {
      type: 'Rectangle',
      options: {
        height: '50',
        text: 'test',
        width: '30',
        x: '1',
        y: '1'
      }
    };

    const rectangle = Rectangle.fromObject(obj);

    expect(rectangle).toBeInstanceOf(Rectangle);
    expect(rectangle.text).toStrictEqual('test');
    expect(rectangle.width).toStrictEqual('30');
    expect(rectangle.height).toStrictEqual('50');
    expect(rectangle.x).toStrictEqual('1');
    expect(rectangle.y).toStrictEqual('1');
    expect(rectangle.background).toStrictEqual('none');
    expect(rectangle.foreground).toStrictEqual('none');
  });
});
