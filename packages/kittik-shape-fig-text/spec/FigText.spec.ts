import { Canvas } from 'terminal-canvas';
import { FigText, FigTextOptions } from '../src/FigText';

describe('Shape::FigText', () => {
  it('Should properly get actual width of the shape', () => {
    const shape = new FigText({ text: 'test' });

    expect(shape.width).toEqual('19');
  });

  it('Should properly get actual height of the shape', () => {
    const shape = new FigText({ text: 'test' });

    expect(shape.height).toEqual('6');
  });

  it('Should properly render with default options', () => {
    const cursor = new Canvas();
    const shape = new FigText();
    const backgroundSpy = jest.spyOn(cursor, 'background').mockReturnThis();
    const foregroundSpy = jest.spyOn(cursor, 'foreground').mockReturnThis();
    const moveToSpy = jest.spyOn(cursor, 'moveTo').mockReturnThis();
    const writeSpy = jest.spyOn(cursor, 'write').mockReturnThis();

    shape.render(cursor);

    expect(backgroundSpy).toBeCalledTimes(1);
    expect(backgroundSpy).toBeCalledWith('none');
    expect(foregroundSpy).toBeCalledTimes(1);
    expect(foregroundSpy).toBeCalledWith('none');
    expect(moveToSpy).toBeCalledTimes(6);
    expect(writeSpy).toBeCalledTimes(6);
  });

  it('Should properly render with custom options', () => {
    const cursor = new Canvas();
    const shape = new FigText({ text: 'test', background: 'black', foreground: 'white' });
    const backgroundSpy = jest.spyOn(cursor, 'background').mockReturnThis();
    const foregroundSpy = jest.spyOn(cursor, 'foreground').mockReturnThis();
    const moveToSpy = jest.spyOn(cursor, 'moveTo').mockReturnThis();
    const writeSpy = jest.spyOn(cursor, 'write').mockReturnThis();

    shape.render(cursor);

    expect(backgroundSpy).toBeCalledTimes(1);
    expect(backgroundSpy).toBeCalledWith('black');
    expect(foregroundSpy).toBeCalledTimes(1);
    expect(foregroundSpy).toBeCalledWith('white');
    expect(moveToSpy).toBeCalledTimes(6);
    expect(writeSpy).toBeCalledTimes(6);
  });

  it('Should properly create Object representation', () => {
    const shape = new FigText({
      text: 'test',
      x: '10%',
      font: 'Ghost',
      horizontalLayout: 'full',
      verticalLayout: 'fitted',
      printDirection: 1,
      showHardBlanks: false
    });

    const obj = shape.toObject();

    expect(obj).toEqual({
      type: 'FigText',
      options: {
        text: 'test',
        width: '50%',
        height: '25%',
        x: '10%',
        y: 'top',
        background: 'none',
        foreground: 'none',
        font: 'Ghost',
        horizontalLayout: 'full',
        verticalLayout: 'fitted',
        printDirection: 1,
        showHardBlanks: false
      }
    });
  });

  it('Should properly create FigText instance from Object representation', () => {
    const shape: FigText = FigText.fromObject<FigText>({
      type: 'FigText',
      options: {
        text: 'test',
        x: 'left',
        y: 'top',
        background: 'red',
        foreground: 'black',
        font: 'Ghost',
        horizontalLayout: 'full',
        verticalLayout: 'fitted'
      } as FigTextOptions
    });

    expect(shape).toBeInstanceOf(FigText);
    expect(shape.text).toEqual('test');
    expect(shape.renderedText.length).toEqual(386);
    expect(shape.x).toEqual('0');
    expect(shape.y).toEqual('0');
    expect(shape.background).toEqual('red');
    expect(shape.foreground).toEqual('black');
    expect(shape.font).toEqual('Ghost');
    expect(shape.horizontalLayout).toEqual('full');
    expect(shape.verticalLayout).toEqual('fitted');
  });
});
