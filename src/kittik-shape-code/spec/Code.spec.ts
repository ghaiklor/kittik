import { Code } from "../src/Code";
import { Canvas } from "terminal-canvas";
import { cursorTo } from "readline";
import { CodeObject } from "../src/CodeObject";

describe('Shape::Code', () => {
  it('Should properly get/set code', () => {
    const cursor = new Canvas();
    const shape = new Code(cursor);

    expect(shape.code).toEqual('');

    shape.code = `console.log(  'test'  )`;
    expect(shape.code).toEqual(`console.log('test')`);
  });

  it('Should properly get actual width of the shape', () => {
    const cursor = new Canvas();
    const shape = new Code(cursor, { code: `console.log('Test')` });

    expect(shape.width).toEqual(19);
  });

  it('Should properly get actual height of the shape', () => {
    const cursor = new Canvas();
    const shape = new Code(cursor, { code: `console.log('Test')` });

    expect(shape.height).toEqual(1);
  });

  it('Should properly render the shape', () => {
    const cursor = new Canvas();
    const shape = new Code(cursor, { code: `const b = 1234;\nprocess.exit()` });
    const moveToSpy = jest.spyOn(cursor, "moveTo").mockReturnThis();
    const foregroundSpy = jest.spyOn(cursor, "foreground").mockReturnThis();
    const writeSpy = jest.spyOn(cursor, "write").mockReturnThis();

    shape.render();

    expect(moveToSpy.mock).toBeCalledTimes(2);
    expect(foregroundSpy.mock).toBeCalledTimes(11);
    expect(writeSpy.mock).toBeCalledTimes(11);
  });

  it('Should properly serialize shape to Object representation', () => {
    const cursor = new Canvas();
    const code = Code.create(cursor, { code: 'console.log()' });
    const obj = code.toObject();

    expect(obj).toEqual({
      type: 'Code',
      options: {
        code: 'console.log()',
        text: '',
        width: 15,
        height: 5,
        x: 10,
        y: 10,
        background: 'none',
        foreground: 'none'
      }
    });
  });

  it('Should properly create code from Object representation', () => {
    const cursor = new Canvas();
    const obj = {
      type: 'Code',
      options: {
        code: 'console.log()',
        x: 'left',
        y: 'top'
      }
    };

    const code: Code = Code.fromObject(obj, cursor);

    expect(code).toBeInstanceOf(Code);
    expect(code.cursor).toBeInstanceOf(Canvas);
    expect(code.text).toEqual('');
    expect(code.code).toEqual('console.log()');
    expect(code.width).toEqual(13);
    expect(code.height).toEqual(1);
    expect(code.x).toEqual(0);
    expect(code.y).toEqual(0);
    expect(code.background).toEqual('none');
    expect(code.foreground).toEqual('none');
  });
});
