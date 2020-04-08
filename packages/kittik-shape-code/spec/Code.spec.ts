import { Canvas } from 'terminal-canvas';
import { Code } from '../src/Code';

describe('code shape', () => {
  it('should properly get/set code', () => {
    expect.hasAssertions();

    const shape = new Code();
    expect(shape.text).toStrictEqual('');

    shape.text = 'console.log(  \'test\'  )';
    expect(shape.text).toStrictEqual('console.log(\'test\')');
  });

  it('should properly get actual width of the shape', () => {
    expect.hasAssertions();

    const shape = new Code({ text: 'console.log(\'Test\')' });
    expect(shape.width).toStrictEqual('19');
  });

  it('should properly get actual height of the shape', () => {
    expect.hasAssertions();

    const shape = new Code({ text: 'console.log(\'Test\')' });
    expect(shape.height).toStrictEqual('1');
  });

  it('should properly render the shape', () => {
    expect.hasAssertions();

    const cursor = Canvas.create();
    const shape = new Code({ text: 'const b = 1234;\nprocess.exit()' });
    const moveToSpy = jest.spyOn(cursor, 'moveTo').mockReturnThis();
    const foregroundSpy = jest.spyOn(cursor, 'foreground').mockReturnThis();
    const writeSpy = jest.spyOn(cursor, 'write').mockReturnThis();

    shape.render(cursor);

    expect(moveToSpy).toHaveBeenCalledTimes(2);
    expect(foregroundSpy).toHaveBeenCalledTimes(13);
    expect(writeSpy).toHaveBeenCalledTimes(14);
  });

  it('should properly serialize shape to Object representation', () => {
    expect.hasAssertions();

    const shape = Code.create({ text: 'console.log()' });
    const obj = shape.toObject();

    expect(obj).toStrictEqual({
      type: 'Code',
      options: {
        text: 'console.log()',
        width: '50%',
        height: '25%',
        x: 'left',
        y: 'top',
        background: 'none',
        foreground: 'none'
      }
    });
  });

  it('should properly create code from Object representation', () => {
    expect.hasAssertions();

    const obj = {
      type: 'Code',
      options: {
        text: 'console.log()',
        x: 'left',
        y: 'top'
      }
    };

    const code = Code.fromObject(obj);

    expect(code).toBeInstanceOf(Code);
    expect(code.text).toStrictEqual('console.log()');
    expect(code.width).toStrictEqual('13');
    expect(code.height).toStrictEqual('1');
    expect(code.x).toStrictEqual('0');
    expect(code.y).toStrictEqual('0');
    expect(code.background).toStrictEqual('none');
    expect(code.foreground).toStrictEqual('none');
  });
});
