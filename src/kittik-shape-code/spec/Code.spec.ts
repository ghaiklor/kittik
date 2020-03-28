import { Canvas } from 'terminal-canvas';
import { Code } from '../src/Code';

describe('Shape::Code', () => {
  it('Should properly get/set code', () => {
    const shape = new Code();

    expect(shape.text).toEqual('');

    shape.text = 'console.log(  \'test\'  )';
    expect(shape.text).toEqual('console.log(\'test\')');
  });

  it('Should properly get actual width of the shape', () => {
    const shape = new Code({ text: 'console.log(\'Test\')' });

    expect(shape.width).toEqual('19');
  });

  it('Should properly get actual height of the shape', () => {
    const shape = new Code({ text: 'console.log(\'Test\')' });

    expect(shape.height).toEqual('1');
  });

  it('Should properly render the shape', () => {
    const cursor = Canvas.create();
    const shape = new Code({ text: 'const b = 1234;\nprocess.exit()' });
    const moveToSpy = jest.spyOn(cursor, 'moveTo').mockReturnThis();
    const foregroundSpy = jest.spyOn(cursor, 'foreground').mockReturnThis();
    const writeSpy = jest.spyOn(cursor, 'write').mockReturnThis();

    shape.render(cursor);

    expect(moveToSpy).toBeCalledTimes(2);
    expect(foregroundSpy).toBeCalledTimes(13);
    expect(writeSpy).toBeCalledTimes(14);
  });

  it('Should properly serialize shape to Object representation', () => {
    const shape = Code.create({ text: 'console.log()' });
    const obj = shape.toObject();

    expect(obj).toEqual({
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

  it('Should properly create code from Object representation', () => {
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
    expect(code.text).toEqual('console.log()');
    expect(code.width).toEqual('13');
    expect(code.height).toEqual('1');
    expect(code.x).toEqual('0');
    expect(code.y).toEqual('0');
    expect(code.background).toEqual('none');
    expect(code.foreground).toEqual('none');
  });
});
