import { Canvas } from 'terminal-canvas';
import { Text } from '../src/Text';
import { TextObject } from '../src/TextObject';
import { TextOptions } from '../src/TextOptions';

describe('text shape', () => {
  it('should properly get actual width of the shape', () => {
    expect.hasAssertions();

    const shape = new Text({ text: 'test' });
    expect(shape.width).toStrictEqual('4');
  });

  it('should properly get actual height of the shape', () => {
    expect.hasAssertions();

    const text = new Text({ text: 'test' });
    expect(text.height).toStrictEqual('1');
  });

  it('should properly render with default options', () => {
    expect.hasAssertions();

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

    expect(foregroundSpy).toHaveBeenCalledTimes(1);
    expect(foregroundSpy).toHaveBeenCalledWith('none');
    expect(backgroundSpy).toHaveBeenCalledTimes(1);
    expect(backgroundSpy).toHaveBeenCalledWith('none');
    expect(boldSpy).toHaveBeenCalledTimes(1);
    expect(boldSpy).toHaveBeenCalledWith(false);
    expect(dimSpy).toHaveBeenCalledTimes(1);
    expect(dimSpy).toHaveBeenCalledWith(false);
    expect(underlinedSpy).toHaveBeenCalledTimes(1);
    expect(underlinedSpy).toHaveBeenCalledWith(false);
    expect(blinkSpy).toHaveBeenCalledTimes(1);
    expect(blinkSpy).toHaveBeenCalledWith(false);
    expect(reverseSpy).toHaveBeenCalledTimes(1);
    expect(reverseSpy).toHaveBeenCalledWith(false);
    expect(hiddenSpy).toHaveBeenCalledTimes(1);
    expect(hiddenSpy).toHaveBeenCalledWith(false);
    expect(moveToSpy).toHaveBeenCalledTimes(1);
    expect(moveToSpy).toHaveBeenCalledWith(0, 0);
    expect(writeSpy).toHaveBeenCalledTimes(1);
    expect(writeSpy).toHaveBeenCalledWith('');
  });

  it('should properly render with text align to left', () => {
    expect.hasAssertions();

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

    expect(foregroundSpy).toHaveBeenCalledTimes(1);
    expect(foregroundSpy).toHaveBeenCalledWith('none');
    expect(backgroundSpy).toHaveBeenCalledTimes(1);
    expect(backgroundSpy).toHaveBeenCalledWith('none');
    expect(boldSpy).toHaveBeenCalledTimes(1);
    expect(boldSpy).toHaveBeenCalledWith(false);
    expect(dimSpy).toHaveBeenCalledTimes(1);
    expect(dimSpy).toHaveBeenCalledWith(false);
    expect(underlinedSpy).toHaveBeenCalledTimes(1);
    expect(underlinedSpy).toHaveBeenCalledWith(false);
    expect(blinkSpy).toHaveBeenCalledTimes(1);
    expect(blinkSpy).toHaveBeenCalledWith(false);
    expect(reverseSpy).toHaveBeenCalledTimes(1);
    expect(reverseSpy).toHaveBeenCalledWith(false);
    expect(hiddenSpy).toHaveBeenCalledTimes(1);
    expect(hiddenSpy).toHaveBeenCalledWith(false);
    expect(moveToSpy).toHaveBeenCalledTimes(2);
    expect(moveToSpy).toHaveBeenCalledWith(0, 0);
    expect(moveToSpy).toHaveBeenCalledWith(0, 1);
    expect(writeSpy).toHaveBeenCalledTimes(2);
    expect(writeSpy).toHaveBeenCalledWith('test');
    expect(writeSpy).toHaveBeenCalledWith('longest');
  });

  it('should properly render with text align to center', () => {
    expect.hasAssertions();

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

    expect(foregroundSpy).toHaveBeenCalledTimes(1);
    expect(foregroundSpy).toHaveBeenCalledWith('none');
    expect(backgroundSpy).toHaveBeenCalledTimes(1);
    expect(backgroundSpy).toHaveBeenCalledWith('none');
    expect(boldSpy).toHaveBeenCalledTimes(1);
    expect(boldSpy).toHaveBeenCalledWith(false);
    expect(dimSpy).toHaveBeenCalledTimes(1);
    expect(dimSpy).toHaveBeenCalledWith(false);
    expect(underlinedSpy).toHaveBeenCalledTimes(1);
    expect(underlinedSpy).toHaveBeenCalledWith(false);
    expect(blinkSpy).toHaveBeenCalledTimes(1);
    expect(blinkSpy).toHaveBeenCalledWith(false);
    expect(reverseSpy).toHaveBeenCalledTimes(1);
    expect(reverseSpy).toHaveBeenCalledWith(false);
    expect(hiddenSpy).toHaveBeenCalledTimes(1);
    expect(hiddenSpy).toHaveBeenCalledWith(false);
    expect(moveToSpy).toHaveBeenCalledTimes(2);
    expect(moveToSpy).toHaveBeenCalledWith(1, 0);
    expect(moveToSpy).toHaveBeenCalledWith(0, 1);
    expect(writeSpy).toHaveBeenCalledTimes(2);
    expect(writeSpy).toHaveBeenCalledWith('test');
    expect(writeSpy).toHaveBeenCalledWith('longest');
  });

  it('should properly render with text align to right', () => {
    expect.hasAssertions();

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

    expect(foregroundSpy).toHaveBeenCalledTimes(1);
    expect(foregroundSpy).toHaveBeenCalledWith('none');
    expect(backgroundSpy).toHaveBeenCalledTimes(1);
    expect(backgroundSpy).toHaveBeenCalledWith('none');
    expect(boldSpy).toHaveBeenCalledTimes(1);
    expect(boldSpy).toHaveBeenCalledWith(false);
    expect(dimSpy).toHaveBeenCalledTimes(1);
    expect(dimSpy).toHaveBeenCalledWith(false);
    expect(underlinedSpy).toHaveBeenCalledTimes(1);
    expect(underlinedSpy).toHaveBeenCalledWith(false);
    expect(blinkSpy).toHaveBeenCalledTimes(1);
    expect(blinkSpy).toHaveBeenCalledWith(false);
    expect(reverseSpy).toHaveBeenCalledTimes(1);
    expect(reverseSpy).toHaveBeenCalledWith(false);
    expect(hiddenSpy).toHaveBeenCalledTimes(1);
    expect(hiddenSpy).toHaveBeenCalledWith(false);
    expect(moveToSpy).toHaveBeenCalledTimes(2);
    expect(moveToSpy).toHaveBeenCalledWith(3, 0);
    expect(moveToSpy).toHaveBeenCalledWith(0, 1);
    expect(writeSpy).toHaveBeenCalledTimes(2);
    expect(writeSpy).toHaveBeenCalledWith('test');
    expect(writeSpy).toHaveBeenCalledWith('longest');
  });

  it('should properly throw an error if align property is wrong', () => {
    expect.hasAssertions();

    // Alignment can be set at runtime
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const text = new Text({ align: 'wrong' });
    const cursor = Canvas.create();

    expect(() => text.render(cursor)).toThrow(
      'Unknown align specified for text: wrong'
    );
  });

  it('should properly render with custom options', () => {
    expect.hasAssertions();

    const cursor = Canvas.create();
    const text = new Text({
      align: 'center',
      background: 'yellow',
      blink: true,
      bold: true,
      dim: true,
      foreground: 'black',
      hidden: true,
      reverse: true,
      text: 'Hello, World',
      underlined: true,
      x: 'left',
      y: '10'
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

    expect(foregroundSpy).toHaveBeenCalledTimes(1);
    expect(foregroundSpy).toHaveBeenCalledWith('black');
    expect(backgroundSpy).toHaveBeenCalledTimes(1);
    expect(backgroundSpy).toHaveBeenCalledWith('yellow');
    expect(boldSpy).toHaveBeenCalledTimes(1);
    expect(boldSpy).toHaveBeenCalledWith(true);
    expect(dimSpy).toHaveBeenCalledTimes(1);
    expect(dimSpy).toHaveBeenCalledWith(true);
    expect(underlinedSpy).toHaveBeenCalledTimes(1);
    expect(underlinedSpy).toHaveBeenCalledWith(true);
    expect(blinkSpy).toHaveBeenCalledTimes(1);
    expect(blinkSpy).toHaveBeenCalledWith(true);
    expect(reverseSpy).toHaveBeenCalledTimes(1);
    expect(reverseSpy).toHaveBeenCalledWith(true);
    expect(hiddenSpy).toHaveBeenCalledTimes(1);
    expect(hiddenSpy).toHaveBeenCalledWith(true);
    expect(moveToSpy).toHaveBeenCalledTimes(1);
    expect(moveToSpy).toHaveBeenCalledWith(0, 10);
    expect(writeSpy).toHaveBeenCalledTimes(1);
    expect(writeSpy).toHaveBeenCalledWith('Hello, World');
  });

  it('should properly render multi-lined text', () => {
    expect.hasAssertions();

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

    expect(foregroundSpy).toHaveBeenCalledTimes(1);
    expect(foregroundSpy).toHaveBeenCalledWith('none');
    expect(backgroundSpy).toHaveBeenCalledTimes(1);
    expect(backgroundSpy).toHaveBeenCalledWith('none');
    expect(boldSpy).toHaveBeenCalledTimes(1);
    expect(boldSpy).toHaveBeenCalledWith(false);
    expect(dimSpy).toHaveBeenCalledTimes(1);
    expect(dimSpy).toHaveBeenCalledWith(false);
    expect(underlinedSpy).toHaveBeenCalledTimes(1);
    expect(underlinedSpy).toHaveBeenCalledWith(false);
    expect(blinkSpy).toHaveBeenCalledTimes(1);
    expect(blinkSpy).toHaveBeenCalledWith(false);
    expect(reverseSpy).toHaveBeenCalledTimes(1);
    expect(reverseSpy).toHaveBeenCalledWith(false);
    expect(hiddenSpy).toHaveBeenCalledTimes(1);
    expect(hiddenSpy).toHaveBeenCalledWith(false);
    expect(moveToSpy).toHaveBeenCalledTimes(2);
    expect(moveToSpy).toHaveBeenCalledWith(0, 0);
    expect(moveToSpy).toHaveBeenCalledWith(0, 1);
    expect(writeSpy).toHaveBeenCalledTimes(2);
    expect(writeSpy).toHaveBeenCalledWith('Hello');
    expect(writeSpy).toHaveBeenCalledWith('World');
  });

  it('should properly serialize shape to Object representation', () => {
    expect.hasAssertions();

    const options: Partial<TextOptions> = { text: 'test', bold: true };
    const text = Text.create(options);
    const obj = text.toObject();

    expect(obj).toStrictEqual({
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

  it('should properly create text from Object representation', () => {
    expect.hasAssertions();

    const obj: TextObject = {
      type: 'Text',
      options: {
        align: 'right',
        bold: true,
        text: 'test',
        underlined: true,
        x: 'left',
        y: 'top'
      }
    };

    const text = Text.fromObject<Text>(obj);

    expect(text).toBeInstanceOf(Text);
    expect(text.text).toStrictEqual('test');
    expect(text.width).toStrictEqual('4');
    expect(text.height).toStrictEqual('1');
    expect(text.x).toStrictEqual('0');
    expect(text.y).toStrictEqual('0');
    expect(text.background).toStrictEqual('none');
    expect(text.foreground).toStrictEqual('none');
    expect(text.bold).toBe(true);
    expect(text.dim).toBe(false);
    expect(text.underlined).toBe(true);
    expect(text.blink).toBe(false);
    expect(text.reverse).toBe(false);
    expect(text.hidden).toBe(false);
    expect(text.align).toStrictEqual('right');
  });
});
