import { Canvas } from 'terminal-canvas';
import { Code } from '../src/Code';
import { CodeOptions } from '../src/CodeOptions';
import { CodeObject } from '../src/CodeObject';

describe('Shape::Code', () => {
  it('Should properly get/set code', () => {
    const cursor = new Canvas();
    const shape = new Code(cursor);

    expect(shape.code).toEqual('');

    shape.code = 'console.log(  \'test\'  )';
    expect(shape.code).toEqual('console.log(\'test\')');
  });

  it('Should properly get actual width of the shape', () => {
    const cursor = new Canvas();
    const shape = new Code(cursor, { code: 'console.log(\'Test\')' });

    expect(shape.width).toEqual('19');
  });

  it('Should properly get actual height of the shape', () => {
    const cursor = new Canvas();
    const shape = new Code(cursor, { code: 'console.log(\'Test\')' });

    expect(shape.height).toEqual('1');
  });

  it('Should properly render the shape', () => {
    const cursor = new Canvas();
    const shape = new Code(cursor, { code: 'const b = 1234;\nprocess.exit()' });
    const moveToSpy = jest.spyOn(cursor, 'moveTo').mockReturnThis();
    const foregroundSpy = jest.spyOn(cursor, 'foreground').mockReturnThis();
    const writeSpy = jest.spyOn(cursor, 'write').mockReturnThis();

    shape.render();

    expect(moveToSpy).toBeCalledTimes(2);
    expect(foregroundSpy).toBeCalledTimes(13);
    expect(writeSpy).toBeCalledTimes(14);
  });

  it('Should properly serialize shape to Object representation', () => {
    const cursor = new Canvas();
    const shape = Code.create<Code, CodeOptions>(cursor, { code: 'console.log()' });
    const obj = shape.toObject();

    expect(obj).toEqual({
      type: 'Code',
      options: {
        code: 'console.log()',
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

  it('Should properly create code from Object representation', () => {
    const cursor = new Canvas();
    const obj: CodeObject = {
      type: 'Code',
      options: {
        code: 'console.log()',
        x: 'left',
        y: 'top'
      }
    };

    const code = Code.fromObject<Code>(obj, cursor);

    expect(code).toBeInstanceOf(Code);
    expect(code.cursor).toBeInstanceOf(Canvas);
    expect(code.text).toEqual('');
    expect(code.code).toEqual('console.log()');
    expect(code.width).toEqual('13');
    expect(code.height).toEqual('1');
    expect(code.x).toEqual('0');
    expect(code.y).toEqual('0');
    expect(code.background).toEqual('none');
    expect(code.foreground).toEqual('none');
  });
});
