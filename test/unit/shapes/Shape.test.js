import { assert } from 'chai';
import sinon from 'sinon';
import { Shape } from '../../../src/shapes/Shape';

describe('Shape', () => {
  it('Should properly initialize shape instance with no arguments', () => {
    let shape = new Shape();
    assert.instanceOf(shape, Shape);
  });

  it('Should properly initialize shape instance with arguments', () => {
    let shape = new Shape({text: 'test'});
    assert.instanceOf(shape, Shape);
    assert.equal(shape.getText(), 'test');
  });

  it('Should properly get/set text', () => {
    let shape = new Shape();
    assert.equal(shape.getText(), '');
    assert.instanceOf(shape.setText('test'), Shape);
    assert.equal(shape.getText(), 'test');
  });

  it('Should properly get/set width', () => {
    let shape = new Shape();
    assert.equal(shape.getWidth(), 15);
    assert.instanceOf(shape.setWidth(5), Shape);
    assert.equal(shape.getWidth(), 5);
  });

  it('Should properly get/set height', () => {
    let shape = new Shape();
    assert.equal(shape.getHeight(), 5);
    assert.instanceOf(shape.setHeight(15), Shape);
    assert.equal(shape.getHeight(), 15);
  });

  it('Should properly get/set position', () => {
    let shape = new Shape();
    assert.deepEqual(shape.getPosition(), {x: 10, y: 10});
    assert.instanceOf(shape.setPosition(20, 30), Shape);
    assert.deepEqual(shape.getPosition(), {x: 20, y: 30});
  });

  it('Should properly get/set background', () => {
    let shape = new Shape();
    assert.notOk(shape.getBackground());
    assert.instanceOf(shape.setBackground('test'), Shape);
    assert.equal(shape.getBackground(), 'test');
  });

  it('Should properly get/set foreground', () => {
    let shape = new Shape();
    assert.notOk(shape.getBackground());
    assert.instanceOf(shape.setForeground('test'), Shape);
    assert.equal(shape.getForeground(), 'test');
  });

  it('Should properly throw exception if render is not overridden', () => {
    let shape = new Shape();
    assert.throws(() => shape.render(), Error);

    class Child extends Shape {
    }

    let child = new Child();
    assert.throws(() => child.render(), Error);
  });

  it('Should properly create Shape instance from static create()', () => {
    let shape = Shape.create({text: 'test'});
    assert.equal(shape.getText(), 'test');
    assert.instanceOf(shape, Shape);
  });
});
