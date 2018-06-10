const { assert } = require('chai');
const sinon = require('sinon');
const Cursor = require('terminal-canvas');
const Image = require('../src/index');

const cursor = Cursor.create();

describe('Shape::Image', () => {
  it('Should properly get/set image', () => {
    const image = new Image(cursor);

    assert.notOk(image.getImage());
    assert.instanceOf(image.setImage('dGVzdA=='), Image);
    assert.equal(image.getImage(), 'dGVzdA==');

    assert.instanceOf(image.setImage('./examples/nodejs.png'), Image);
    assert.ok(Image.isBase64(image.getImage()));
  });

  it('Should properly get/set preserveAspectRatio', () => {
    const image = new Image(cursor);

    assert.ok(image.isPreserveAspectRatio());
    assert.instanceOf(image.setPreserveAspectRatio(false), Image);
    assert.notOk(image.isPreserveAspectRatio());
  });

  it('Should properly render the shape', () => {
    const cursor = new Cursor({ stream: { write: sinon.spy() } });
    const image = new Image(cursor, { image: 'dGVzdA==' });

    image.render();

    assert.ok(cursor._stream.write.calledOnce);
    assert.equal(cursor._stream.write.getCall(0).args[0], '\u001b[11;11H\u001b]1337;File=width=15;height=5;preserveAspectRatio=1;inline=1:dGVzdA==^G');
  });

  it('Should properly render the shape with disabled preserveAspectRatio', () => {
    const cursor = new Cursor({ stream: { write: sinon.spy() } });
    const image = new Image(cursor, { image: 'dGVzdA==', preserveAspectRatio: false });

    image.render();

    assert.ok(cursor._stream.write.calledOnce);
    assert.equal(cursor._stream.write.getCall(0).args[0], '\u001b[11;11H\u001b]1337;File=width=15;height=5;preserveAspectRatio=0;inline=1:dGVzdA==^G');
  });

  it('Should properly serialize shape to object', () => {
    const image = new Image(cursor, { image: 'dGVzdA==' });
    const obj = image.toObject();

    assert.deepEqual(obj, {
      type: 'Image',
      options: {
        text: '',
        width: 15,
        height: 5,
        x: 10,
        y: 10,
        background: 'none',
        foreground: 'none',
        image: 'dGVzdA==',
        preserveAspectRatio: true
      }
    });
  });

  it('Should properly create Image from object', () => {
    const obj = {
      type: 'Image',
      options: {
        x: 20,
        y: 20,
        image: 'dGVzdA=='
      }
    };

    const image = Image.fromObject(obj, cursor);
    assert.instanceOf(image, Image);
    assert.instanceOf(image.getCursor(), Cursor);
    assert.equal(image.getText(), '');
    assert.equal(image.getWidth(), 15);
    assert.equal(image.getHeight(), 5);
    assert.equal(image.getX(), 20);
    assert.equal(image.getY(), 20);
    assert.equal(image.getBackground(), 'none');
    assert.equal(image.getForeground(), 'none');
    assert.equal(image.getImage(), 'dGVzdA==');
    assert.ok(image.isPreserveAspectRatio());
  });

  it('Should properly check if string isBase64', () => {
    assert.ok(Image.isBase64('dGVzdA=='));
    assert.notOk(Image.isBase64('not base64'));
  });
});
