import {assert} from 'chai';
import sinon from 'sinon';
import Cursor from 'kittik-cursor';
import Rectangle from 'kittik-shape-rectangle';
import Slide from '../../src/Slide';

const cursor = Cursor.create();

describe('Animation::Slide', () => {
  it('Should properly get/set direction', () => {
    const animation = new Slide({direction: 'inLeft'});
    assert.equal(animation.getDirection(), 'inLeft');
    assert.instanceOf(animation.setDirection('inRight'), Slide);
    assert.equal(animation.getDirection(), 'inRight');
  });

  it('Should properly throw error if direction is not supports', () => {
    const animation = new Slide();
    assert.throws(() => animation.setDirection('wrong'), Error, 'Unknown direction: wrong');
  });

  it('Should properly parse coordinates for shape based on direction', () => {
    const animation = new Slide();
    const shape = new Rectangle(cursor);

    assert.instanceOf(animation.setDirection('inUp'), Slide);
    assert.deepEqual(animation._parseCoordinates(shape), {startX: 10, startY: -5, endX: 10, endY: 10});

    assert.instanceOf(animation.setDirection('inDown'), Slide);
    assert.deepEqual(animation._parseCoordinates(shape), {
      startX: 10,
      startY: process.stdout.rows + 5,
      endX: 10,
      endY: 10
    });

    assert.instanceOf(animation.setDirection('inLeft'), Slide);
    assert.deepEqual(animation._parseCoordinates(shape), {startX: -15, startY: 10, endX: 10, endY: 10});

    assert.instanceOf(animation.setDirection('inRight'), Slide);
    assert.deepEqual(animation._parseCoordinates(shape), {
      startX: process.stdout.columns + 15,
      startY: 10,
      endX: 10,
      endY: 10
    });

    assert.instanceOf(animation.setDirection('outUp'), Slide);
    assert.deepEqual(animation._parseCoordinates(shape), {startX: 10, startY: 10, endX: 10, endY: -5});

    assert.instanceOf(animation.setDirection('outDown'), Slide);
    assert.deepEqual(animation._parseCoordinates(shape), {
      startX: 10,
      startY: 10,
      endX: 10,
      endY: process.stdout.rows + 5
    });

    assert.instanceOf(animation.setDirection('outLeft'), Slide);
    assert.deepEqual(animation._parseCoordinates(shape), {startX: 10, startY: 10, endX: -15, endY: 10});

    assert.instanceOf(animation.setDirection('outRight'), Slide);
    assert.deepEqual(animation._parseCoordinates(shape), {
      startX: 10,
      startY: 10,
      endX: process.stdout.columns + 1,
      endY: 10
    });
  });

  it('Should properly call the animate() method', done => {
    const animation = new Slide();
    const shape = new Rectangle(cursor);
    const mock = sinon.mock(animation);

    mock.expects('animateProperty').twice().returns(Promise.resolve());

    animation.animate(shape).then(() => {
      mock.verify();
      done();
    });
  });

  it('Should properly serialize animation to Object', () => {
    const animation = new Slide();

    assert.deepEqual(animation.toObject(), {
      type: 'Slide',
      options: {
        duration: 1000,
        easing: 'outQuad',
        direction: 'inRight'
      }
    });
  });

  it('Should properly create Animation instance from object', () => {
    const obj = {
      type: 'Slide',
      options: {
        duration: 4000,
        easing: 'inOutExpo',
        direction: 'inLeft'
      }
    };

    const animation = Slide.fromObject(obj);
    assert.instanceOf(animation, Slide);
    assert.equal(animation.getDuration(), 4000);
    assert.equal(animation.getEasing(), 'inOutExpo');
    assert.equal(animation.getDirection(), 'inLeft');
    assert.isFunction(animation.animate);
  });
});
