import {assert} from 'chai';
import sinon from 'sinon';
import Rectangle from 'kittik-shape-rectangle';
import Focus from '../../src/Focus';

describe('Animation::Focus', () => {
  it('Should properly create animation instance', () => {
    const animation = new Focus();
    assert.instanceOf(animation, Focus);
  });

  it('Should properly get duration', () => {
    const animation = new Focus();
    assert.equal(animation.getDuration(), 1000);
  });

  it('Should properly get duration with different repeat count', () => {
    const animation = new Focus({duration: 5000, repeat: 5});
    assert.equal(animation.getDuration(), 1000);
  });

  it('Should properly get/set direction', () => {
    const animation = new Focus({direction: 'bounceDown'});
    assert.equal(animation.getDirection(), 'bounceDown');
    assert.instanceOf(animation.setDirection('bounceUp'), Focus);
    assert.equal(animation.getDirection(), 'bounceUp');
  });

  it('Should properly throw error if direction is not supports', () => {
    const animation = new Focus();
    assert.throws(() => animation.setDirection('wrong'), Error, 'Unknown direction: wrong');
  });

  it('Should properly get/set offset', () => {
    const animation = new Focus({offset: 10});
    assert.equal(animation.getOffset(), 10);
    assert.instanceOf(animation.setOffset(2), Focus);
    assert.equal(animation.getOffset(), 2);
  });

  it('Should properly get/set repeat', () => {
    const animation = new Focus({repeat: 5});
    assert.equal(animation.getRepeat(), 5);
    assert.instanceOf(animation.setRepeat(10), Focus);
    assert.equal(animation.getRepeat(), 10);
  });

  it('Should properly call _animateBounce() with bounceUp direction', done => {
    const animation = new Focus({direction: 'bounceUp'});
    const mock = sinon.mock(animation);
    const shape = new Rectangle();

    mock.expects('animateProperty').twice().returns(Promise.resolve());

    animation.animate(shape).then(() => {
      mock.verify();
      done();
    }).catch(done);
  });

  it('Should properly call _animateBounce() with bounceRight direction', done => {
    const animation = new Focus({direction: 'bounceRight'});
    const mock = sinon.mock(animation);
    const shape = new Rectangle();

    mock.expects('animateProperty').twice().returns(Promise.resolve());

    animation.animate(shape).then(() => {
      mock.verify();
      done();
    }).catch(done);
  });

  it('Should properly call _animateBounce() with bounceDown direction', done => {
    const animation = new Focus({direction: 'bounceDown'});
    const mock = sinon.mock(animation);
    const shape = new Rectangle();

    mock.expects('animateProperty').twice().returns(Promise.resolve());

    animation.animate(shape).then(() => {
      mock.verify();
      done();
    }).catch(done);
  });

  it('Should properly call _animateBounce() with bounceLeft direction', done => {
    const animation = new Focus({direction: 'bounceLeft'});
    const mock = sinon.mock(animation);
    const shape = new Rectangle();

    mock.expects('animateProperty').twice().returns(Promise.resolve());

    animation.animate(shape).then(() => {
      mock.verify();
      done();
    }).catch(done);
  });

  it('Should properly call _animateShake() with shakeX direction', done => {
    const animation = new Focus({direction: 'shakeX'});
    const mock = sinon.mock(animation);
    const shape = new Rectangle();

    mock.expects('animateProperty').thrice().returns(Promise.resolve());

    animation.animate(shape).then(() => {
      mock.verify();
      done();
    }).catch(done);
  });

  it('Should properly call _animateShake() with shakeY direction', done => {
    const animation = new Focus({direction: 'shakeY'});
    const mock = sinon.mock(animation);
    const shape = new Rectangle();

    mock.expects('animateProperty').thrice().returns(Promise.resolve());

    animation.animate(shape).then(() => {
      mock.verify();
      done();
    }).catch(done);
  });

  it('Should properly call the animate() method with default type', done => {
    const animation = new Focus();
    const shape = new Rectangle();
    const mock = sinon.mock(animation);

    mock.expects('_animateBounce').never().returns(Promise.resolve());
    mock.expects('_animateShake').once().returns(Promise.resolve());

    animation.animate(shape).then(() => {
      mock.verify();
      done();
    });
  });

  it('Should properly call the animate() method with bounce type', done => {
    const animation = new Focus({direction: 'bounceUp'});
    const shape = new Rectangle();
    const mock = sinon.mock(animation);

    mock.expects('_animateBounce').once().returns(Promise.resolve());
    mock.expects('_animateShake').never().returns(Promise.resolve());

    animation.animate(shape).then(() => {
      mock.verify();
      done();
    });
  });

  it('Should properly call the animate() method with shake type', done => {
    const animation = new Focus({direction: 'shakeX'});
    const shape = new Rectangle();
    const mock = sinon.mock(animation);

    mock.expects('_animateBounce').never().returns(Promise.resolve());
    mock.expects('_animateShake').once().returns(Promise.resolve());

    animation.animate(shape).then(() => {
      mock.verify();
      done();
    });
  });

  it('Should properly throw error if unknown type of the animation in animate()', done => {
    const animation = new Focus();
    const shape = new Rectangle();
    const mock = sinon.mock(animation);

    animation.direction = 'unknown';

    mock.expects('_animateBounce').never().returns(Promise.resolve());
    mock.expects('_animateShake').never().returns(Promise.resolve());

    animation.animate(shape).catch(error => {
      assert.equal(error, `Unknown direction: unknown`);
      mock.verify();
      done();
    });
  });

  it('Should properly serialize animation to Object', () => {
    const animation = new Focus();

    assert.deepEqual(animation.toObject(), {
      type: 'Focus',
      options: {
        duration: 1000,
        easing: 'outQuad',
        direction: 'shakeX',
        offset: 5,
        repeat: 1
      }
    });
  });

  it('Should properly create Animation instance from object', () => {
    const obj = {
      type: 'Focus',
      options: {
        duration: 4000,
        easing: 'inOutExpo',
        direction: 'bounceDown',
        offset: 20,
        repeat: 5
      }
    };

    const animation = Focus.fromObject(obj);
    assert.instanceOf(animation, Focus);
    assert.equal(animation.getDuration(), 4000 / 5);
    assert.equal(animation.getEasing(), 'inOutExpo');
    assert.equal(animation.getDirection(), 'bounceDown');
    assert.equal(animation.getOffset(), 20);
    assert.equal(animation.getRepeat(), 5);
    assert.isFunction(animation.animate);
  });
});
