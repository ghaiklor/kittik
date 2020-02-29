const { assert } = require('chai');
const sinon = require('sinon');
const Code = require('../src/index');
const Cursor = require('terminal-canvas');

const cursor = Cursor.create();

describe('Shape::Code', () => {
  it('Should properly create Code instance', () => {
    const code = new Code(cursor);
    assert.instanceOf(code, Code);
  });

  it('Should properly get/set code', () => {
    const code = new Code(cursor);

    assert.equal(code.getCode(), '');
    assert.instanceOf(code.setCode(`console.log(  'test'  )`), Code);
    assert.equal(code.getCode(), `console.log('test')`);
  });

  it('Should properly get actual width of the shape', () => {
    const code = new Code(cursor, { code: `console.log('Test')` });
    assert.equal(code.getWidth(), 19);
  });

  it('Should properly get actual height of the shape', () => {
    const code = new Code(cursor, { code: `console.log('Test')` });
    assert.equal(code.getHeight(), 1);
  });

  it('Should properly render the shape', () => {
    const cursor = Cursor.create();
    const code = new Code(cursor, { code: `const b = 1234;\nprocess.exit()` });
    const mock = sinon.mock(cursor);

    mock.expects('moveTo').atLeast(2).returns(cursor);
    mock.expects('foreground').atLeast(11).returns(cursor);
    mock.expects('write').atLeast(11).returns(cursor);

    code.render();

    mock.verify();
  });

  it('Should properly serialize shape to Object representation', () => {
    const code = Code.create(cursor, { code: 'console.log()' });
    const obj = code.toObject();

    assert.deepEqual(obj, {
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
    const obj = {
      type: 'Code',
      options: {
        code: 'console.log()',
        x: 'left',
        y: 'top'
      }
    };

    const code = Code.fromObject(obj, cursor);
    assert.instanceOf(code, Code);
    assert.instanceOf(code.getCursor(), Cursor);
    assert.equal(code.getText(), '');
    assert.equal(code.getCode(), 'console.log()');
    assert.equal(code.getWidth(), 13);
    assert.equal(code.getHeight(), 1);
    assert.equal(code.getX(), 0);
    assert.equal(code.getY(), 0);
    assert.equal(code.getBackground(), 'none');
    assert.equal(code.getForeground(), 'none');
  });
});
