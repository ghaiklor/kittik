import { Canvas } from 'terminal-canvas';
import { Text } from '../src/Text';
import { TextObject } from '../src/TextObject';
import { TextOptions } from '../src/TextOptions';

describe('Shape::Text', () => {
  it('Should properly get actual width of the shape', () => {
    const shape = new Text({ text: 'test' });

    expect(shape.width).toEqual('4');
  });

  it('Should properly get actual height of the shape', () => {
    const text = new Text({ text: 'test' });

    expect(text.height).toEqual('1');
  });

  it('Should properly render with default options', () => {
    const cursor = Canvas.create();
    const text = new Text();
    const foregroundSpy = jest.spyOn(cursor, 'foreground').mockReturnThis();
    const backgroundSpy = jest.spyOn(cursor, 'background').mockReturnThis();
    const boldSpy = jest.spyOn(cursor, 'bold').mockReturnThis();
    const dimSpy = jest.spyOn(cursor, 'dim').mockReturnThis();
    const underlinedSpy = jest.spyOn(cursor, 'underlined').mockReturnThis();
    const blinkSpy = jest.spyOn(cursor, 'blink').mockReturnThis();
    const reverseSpy = jest.spyOn(cursor, 'reverse').mockReturnThis();
    const hiddenSpy = jest.spyOn(cursor, 'hidden').mockReturnThis();
    const moveToSpy = jest.spyOn(cursor, 'moveTo').mockReturnThis();
    const writeSpy = jest.spyOn(cursor, 'write').mockReturnThis();

    text.render(cursor);

    expect(foregroundSpy).toBeCalledTimes(1);
    expect(foregroundSpy).toBeCalledWith('none');
    expect(backgroundSpy).toBeCalledTimes(1);
    expect(backgroundSpy).toBeCalledWith('none');
    expect(boldSpy).toBeCalledTimes(1);
    expect(boldSpy).toBeCalledWith(false);
    expect(dimSpy).toBeCalledTimes(1);
    expect(dimSpy).toBeCalledWith(false);
    expect(underlinedSpy).toBeCalledTimes(1);
    expect(underlinedSpy).toBeCalledWith(false);
    expect(blinkSpy).toBeCalledTimes(1);
    expect(blinkSpy).toBeCalledWith(false);
    expect(reverseSpy).toBeCalledTimes(1);
    expect(reverseSpy).toBeCalledWith(false);
    expect(hiddenSpy).toBeCalledTimes(1);
    expect(hiddenSpy).toBeCalledWith(false);
    expect(moveToSpy).toBeCalledTimes(1);
    expect(moveToSpy).toBeCalledWith(0, 0);
    expect(writeSpy).toBeCalledTimes(1);
    expect(writeSpy).toBeCalledWith('');
  });

  it('Should properly render with text align to left', () => {
    const cursor = Canvas.create();
    const text = new Text({ text: 'test\nlongest', align: 'left' });
    const foregroundSpy = jest.spyOn(cursor, 'foreground').mockReturnThis();
    const backgroundSpy = jest.spyOn(cursor, 'background').mockReturnThis();
    const boldSpy = jest.spyOn(cursor, 'bold').mockReturnThis();
    const dimSpy = jest.spyOn(cursor, 'dim').mockReturnThis();
    const underlinedSpy = jest.spyOn(cursor, 'underlined').mockReturnThis();
    const blinkSpy = jest.spyOn(cursor, 'blink').mockReturnThis();
    const reverseSpy = jest.spyOn(cursor, 'reverse').mockReturnThis();
    const hiddenSpy = jest.spyOn(cursor, 'hidden').mockReturnThis();
    const moveToSpy = jest.spyOn(cursor, 'moveTo').mockReturnThis();
    const writeSpy = jest.spyOn(cursor, 'write').mockReturnThis();

    text.render(cursor);

    expect(foregroundSpy).toBeCalledTimes(1);
    expect(foregroundSpy).toBeCalledWith('none');
    expect(backgroundSpy).toBeCalledTimes(1);
    expect(backgroundSpy).toBeCalledWith('none');
    expect(boldSpy).toBeCalledTimes(1);
    expect(boldSpy).toBeCalledWith(false);
    expect(dimSpy).toBeCalledTimes(1);
    expect(dimSpy).toBeCalledWith(false);
    expect(underlinedSpy).toBeCalledTimes(1);
    expect(underlinedSpy).toBeCalledWith(false);
    expect(blinkSpy).toBeCalledTimes(1);
    expect(blinkSpy).toBeCalledWith(false);
    expect(reverseSpy).toBeCalledTimes(1);
    expect(reverseSpy).toBeCalledWith(false);
    expect(hiddenSpy).toBeCalledTimes(1);
    expect(hiddenSpy).toBeCalledWith(false);
    expect(moveToSpy).toBeCalledTimes(2);
    expect(moveToSpy).toBeCalledWith(0, 0);
    expect(moveToSpy).toBeCalledWith(0, 1);
    expect(writeSpy).toBeCalledTimes(2);
    expect(writeSpy).toBeCalledWith('test');
    expect(writeSpy).toBeCalledWith('longest');
  });

  it('Should properly render with text align to center', () => {
    const cursor = Canvas.create();
    const text = new Text({ text: 'test\nlongest', align: 'center' });
    const foregroundSpy = jest.spyOn(cursor, 'foreground').mockReturnThis();
    const backgroundSpy = jest.spyOn(cursor, 'background').mockReturnThis();
    const boldSpy = jest.spyOn(cursor, 'bold').mockReturnThis();
    const dimSpy = jest.spyOn(cursor, 'dim').mockReturnThis();
    const underlinedSpy = jest.spyOn(cursor, 'underlined').mockReturnThis();
    const blinkSpy = jest.spyOn(cursor, 'blink').mockReturnThis();
    const reverseSpy = jest.spyOn(cursor, 'reverse').mockReturnThis();
    const hiddenSpy = jest.spyOn(cursor, 'hidden').mockReturnThis();
    const moveToSpy = jest.spyOn(cursor, 'moveTo').mockReturnThis();
    const writeSpy = jest.spyOn(cursor, 'write').mockReturnThis();

    text.render(cursor);

    expect(foregroundSpy).toBeCalledTimes(1);
    expect(foregroundSpy).toBeCalledWith('none');
    expect(backgroundSpy).toBeCalledTimes(1);
    expect(backgroundSpy).toBeCalledWith('none');
    expect(boldSpy).toBeCalledTimes(1);
    expect(boldSpy).toBeCalledWith(false);
    expect(dimSpy).toBeCalledTimes(1);
    expect(dimSpy).toBeCalledWith(false);
    expect(underlinedSpy).toBeCalledTimes(1);
    expect(underlinedSpy).toBeCalledWith(false);
    expect(blinkSpy).toBeCalledTimes(1);
    expect(blinkSpy).toBeCalledWith(false);
    expect(reverseSpy).toBeCalledTimes(1);
    expect(reverseSpy).toBeCalledWith(false);
    expect(hiddenSpy).toBeCalledTimes(1);
    expect(hiddenSpy).toBeCalledWith(false);
    expect(moveToSpy).toBeCalledTimes(2);
    expect(moveToSpy).toBeCalledWith(1, 0);
    expect(moveToSpy).toBeCalledWith(0, 1);
    expect(writeSpy).toBeCalledTimes(2);
    expect(writeSpy).toBeCalledWith('test');
    expect(writeSpy).toBeCalledWith('longest');
  });

  it('Should properly render with text align to right', () => {
    const cursor = Canvas.create();
    const text = new Text({ text: 'test\nlongest', align: 'right' });
    const foregroundSpy = jest.spyOn(cursor, 'foreground').mockReturnThis();
    const backgroundSpy = jest.spyOn(cursor, 'background').mockReturnThis();
    const boldSpy = jest.spyOn(cursor, 'bold').mockReturnThis();
    const dimSpy = jest.spyOn(cursor, 'dim').mockReturnThis();
    const underlinedSpy = jest.spyOn(cursor, 'underlined').mockReturnThis();
    const blinkSpy = jest.spyOn(cursor, 'blink').mockReturnThis();
    const reverseSpy = jest.spyOn(cursor, 'reverse').mockReturnThis();
    const hiddenSpy = jest.spyOn(cursor, 'hidden').mockReturnThis();
    const moveToSpy = jest.spyOn(cursor, 'moveTo').mockReturnThis();
    const writeSpy = jest.spyOn(cursor, 'write').mockReturnThis();

    text.render(cursor);

    expect(foregroundSpy).toBeCalledTimes(1);
    expect(foregroundSpy).toBeCalledWith('none');
    expect(backgroundSpy).toBeCalledTimes(1);
    expect(backgroundSpy).toBeCalledWith('none');
    expect(boldSpy).toBeCalledTimes(1);
    expect(boldSpy).toBeCalledWith(false);
    expect(dimSpy).toBeCalledTimes(1);
    expect(dimSpy).toBeCalledWith(false);
    expect(underlinedSpy).toBeCalledTimes(1);
    expect(underlinedSpy).toBeCalledWith(false);
    expect(blinkSpy).toBeCalledTimes(1);
    expect(blinkSpy).toBeCalledWith(false);
    expect(reverseSpy).toBeCalledTimes(1);
    expect(reverseSpy).toBeCalledWith(false);
    expect(hiddenSpy).toBeCalledTimes(1);
    expect(hiddenSpy).toBeCalledWith(false);
    expect(moveToSpy).toBeCalledTimes(2);
    expect(moveToSpy).toBeCalledWith(3, 0);
    expect(moveToSpy).toBeCalledWith(0, 1);
    expect(writeSpy).toBeCalledTimes(2);
    expect(writeSpy).toBeCalledWith('test');
    expect(writeSpy).toBeCalledWith('longest');
  });

  it('Should properly render with custom options', () => {
    const cursor = Canvas.create();
    const text = new Text({
      text: 'Hello, World',
      x: 'left',
      y: '10',
      align: 'center',
      background: 'yellow',
      foreground: 'black',
      bold: true,
      dim: true,
      underlined: true,
      blink: true,
      reverse: true,
      hidden: true
    });

    const foregroundSpy = jest.spyOn(cursor, 'foreground').mockReturnThis();
    const backgroundSpy = jest.spyOn(cursor, 'background').mockReturnThis();
    const boldSpy = jest.spyOn(cursor, 'bold').mockReturnThis();
    const dimSpy = jest.spyOn(cursor, 'dim').mockReturnThis();
    const underlinedSpy = jest.spyOn(cursor, 'underlined').mockReturnThis();
    const blinkSpy = jest.spyOn(cursor, 'blink').mockReturnThis();
    const reverseSpy = jest.spyOn(cursor, 'reverse').mockReturnThis();
    const hiddenSpy = jest.spyOn(cursor, 'hidden').mockReturnThis();
    const moveToSpy = jest.spyOn(cursor, 'moveTo').mockReturnThis();
    const writeSpy = jest.spyOn(cursor, 'write').mockReturnThis();

    text.render(cursor);

    expect(foregroundSpy).toBeCalledTimes(1);
    expect(foregroundSpy).toBeCalledWith('black');
    expect(backgroundSpy).toBeCalledTimes(1);
    expect(backgroundSpy).toBeCalledWith('yellow');
    expect(boldSpy).toBeCalledTimes(1);
    expect(boldSpy).toBeCalledWith(true);
    expect(dimSpy).toBeCalledTimes(1);
    expect(dimSpy).toBeCalledWith(true);
    expect(underlinedSpy).toBeCalledTimes(1);
    expect(underlinedSpy).toBeCalledWith(true);
    expect(blinkSpy).toBeCalledTimes(1);
    expect(blinkSpy).toBeCalledWith(true);
    expect(reverseSpy).toBeCalledTimes(1);
    expect(reverseSpy).toBeCalledWith(true);
    expect(hiddenSpy).toBeCalledTimes(1);
    expect(hiddenSpy).toBeCalledWith(true);
    expect(moveToSpy).toBeCalledTimes(1);
    expect(moveToSpy).toBeCalledWith(0, 10);
    expect(writeSpy).toBeCalledTimes(1);
    expect(writeSpy).toBeCalledWith('Hello, World');
  });

  it('Should properly render multi-lined text', () => {
    const cursor = Canvas.create();
    const text = new Text({ text: 'Hello\nWorld' });
    const foregroundSpy = jest.spyOn(cursor, 'foreground').mockReturnThis();
    const backgroundSpy = jest.spyOn(cursor, 'background').mockReturnThis();
    const boldSpy = jest.spyOn(cursor, 'bold').mockReturnThis();
    const dimSpy = jest.spyOn(cursor, 'dim').mockReturnThis();
    const underlinedSpy = jest.spyOn(cursor, 'underlined').mockReturnThis();
    const blinkSpy = jest.spyOn(cursor, 'blink').mockReturnThis();
    const reverseSpy = jest.spyOn(cursor, 'reverse').mockReturnThis();
    const hiddenSpy = jest.spyOn(cursor, 'hidden').mockReturnThis();
    const moveToSpy = jest.spyOn(cursor, 'moveTo').mockReturnThis();
    const writeSpy = jest.spyOn(cursor, 'write').mockReturnThis();

    text.render(cursor);

    expect(foregroundSpy).toBeCalledTimes(1);
    expect(foregroundSpy).toBeCalledWith('none');
    expect(backgroundSpy).toBeCalledTimes(1);
    expect(backgroundSpy).toBeCalledWith('none');
    expect(boldSpy).toBeCalledTimes(1);
    expect(boldSpy).toBeCalledWith(false);
    expect(dimSpy).toBeCalledTimes(1);
    expect(dimSpy).toBeCalledWith(false);
    expect(underlinedSpy).toBeCalledTimes(1);
    expect(underlinedSpy).toBeCalledWith(false);
    expect(blinkSpy).toBeCalledTimes(1);
    expect(blinkSpy).toBeCalledWith(false);
    expect(reverseSpy).toBeCalledTimes(1);
    expect(reverseSpy).toBeCalledWith(false);
    expect(hiddenSpy).toBeCalledTimes(1);
    expect(hiddenSpy).toBeCalledWith(false);
    expect(moveToSpy).toBeCalledTimes(2);
    expect(moveToSpy).toBeCalledWith(0, 0);
    expect(moveToSpy).toBeCalledWith(0, 1);
    expect(writeSpy).toBeCalledTimes(2);
    expect(writeSpy).toBeCalledWith('Hello');
    expect(writeSpy).toBeCalledWith('World');
  });

  it('Should properly serialize shape to Object representation', () => {
    const text = Text.create({ text: 'test', bold: true } as TextOptions);
    const obj = text.toObject();

    expect(obj).toEqual({
      type: 'Text',
      options: {
        align: 'center',
        background: 'none',
        blink: false,
        bold: true,
        dim: false,
        foreground: 'none',
        height: '25%',
        hidden: false,
        reverse: false,
        text: 'test',
        underlined: false,
        width: '50%',
        x: 'left',
        y: 'top'
      }
    });
  });

  it('Should properly create text from Object representation', () => {
    const obj: TextObject = {
      type: 'Text',
      options: {
        text: 'test',
        x: 'left',
        y: 'top',
        bold: true,
        underlined: true,
        align: 'right'
      }
    };

    const text = Text.fromObject<Text>(obj);

    expect(text).toBeInstanceOf(Text);
    expect(text.text).toEqual('test');
    expect(text.width).toEqual('4');
    expect(text.height).toEqual('1');
    expect(text.x).toEqual('0');
    expect(text.y).toEqual('0');
    expect(text.background).toEqual('none');
    expect(text.foreground).toEqual('none');
    expect(text.bold).toBeTruthy();
    expect(text.dim).toBeFalsy();
    expect(text.underlined).toBeTruthy();
    expect(text.blink).toBeFalsy();
    expect(text.reverse).toBeFalsy();
    expect(text.hidden).toBeFalsy();
    expect(text.align).toEqual('right');
  });
});
