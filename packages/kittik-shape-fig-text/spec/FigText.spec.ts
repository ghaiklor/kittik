import { FigText, FigTextOptions } from '../src/FigText';
import { Canvas } from 'terminal-canvas';

describe('fig text shape', () => {
  it('should properly get actual width of the shape', () => {
    expect.hasAssertions();

    const shape = new FigText({ text: 'test' });
    expect(shape.width).toStrictEqual('19');
  });

  it('should properly get actual height of the shape', () => {
    expect.hasAssertions();

    const shape = new FigText({ text: 'test' });
    expect(shape.height).toStrictEqual('6');
  });

  it('should properly render with default options', () => {
    expect.hasAssertions();

    const cursor = new Canvas();
    const shape = new FigText();
    const backgroundSpy = jest.spyOn(cursor, 'background').mockReturnThis();
    const foregroundSpy = jest.spyOn(cursor, 'foreground').mockReturnThis();
    const moveToSpy = jest.spyOn(cursor, 'moveTo').mockReturnThis();
    const writeSpy = jest.spyOn(cursor, 'write').mockReturnThis();

    shape.render(cursor);

    expect(backgroundSpy).toHaveBeenCalledTimes(1);
    expect(backgroundSpy).toHaveBeenCalledWith('none');
    expect(foregroundSpy).toHaveBeenCalledTimes(1);
    expect(foregroundSpy).toHaveBeenCalledWith('none');
    expect(moveToSpy).toHaveBeenCalledTimes(6);
    expect(writeSpy).toHaveBeenCalledTimes(6);
  });

  it('should properly render with custom options', () => {
    expect.hasAssertions();

    const cursor = new Canvas();
    const shape = new FigText({ text: 'test', background: 'black', foreground: 'white' });
    const backgroundSpy = jest.spyOn(cursor, 'background').mockReturnThis();
    const foregroundSpy = jest.spyOn(cursor, 'foreground').mockReturnThis();
    const moveToSpy = jest.spyOn(cursor, 'moveTo').mockReturnThis();
    const writeSpy = jest.spyOn(cursor, 'write').mockReturnThis();

    shape.render(cursor);

    expect(backgroundSpy).toHaveBeenCalledTimes(1);
    expect(backgroundSpy).toHaveBeenCalledWith('black');
    expect(foregroundSpy).toHaveBeenCalledTimes(1);
    expect(foregroundSpy).toHaveBeenCalledWith('white');
    expect(moveToSpy).toHaveBeenCalledTimes(6);
    expect(writeSpy).toHaveBeenCalledTimes(6);
  });

  it('should properly create Object representation', () => {
    expect.hasAssertions();

    const shape = new FigText({
      font: 'Ghost',
      horizontalLayout: 'full',
      printDirection: 1,
      showHardBlanks: false,
      text: 'test',
      verticalLayout: 'fitted',
      x: '10%'
    });

    const obj = shape.toObject();

    expect(obj).toStrictEqual({
      type: 'FigText',
      options: {
        background: 'none',
        font: 'Ghost',
        foreground: 'none',
        height: '25%',
        horizontalLayout: 'full',
        printDirection: 1,
        showHardBlanks: false,
        text: 'test',
        verticalLayout: 'fitted',
        width: '50%',
        x: '10%',
        y: 'top'
      }
    });
  });

  it('should properly create FigText instance from Object representation', () => {
    expect.hasAssertions();

    const options: Partial<FigTextOptions> = {
      background: 'red',
      font: 'Ghost',
      foreground: 'black',
      horizontalLayout: 'full',
      text: 'test',
      verticalLayout: 'fitted',
      x: 'left',
      y: 'top'
    };

    const shape: FigText = FigText.fromObject<FigText>({
      type: 'FigText',
      options
    });

    expect(shape).toBeInstanceOf(FigText);
    expect(shape.text).toStrictEqual('test');
    expect(shape.renderedText).toHaveLength(386);
    expect(shape.x).toStrictEqual('0');
    expect(shape.y).toStrictEqual('0');
    expect(shape.background).toStrictEqual('red');
    expect(shape.foreground).toStrictEqual('black');
    expect(shape.font).toStrictEqual('Ghost');
    expect(shape.horizontalLayout).toStrictEqual('full');
    expect(shape.verticalLayout).toStrictEqual('fitted');
  });
});
