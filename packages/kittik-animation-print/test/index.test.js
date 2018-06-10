const sinon = require('sinon');
const Rectangle = require('kittik-shape-rectangle');
const Print = require('../src/index');

describe('Animation::Print', () => {
  it('Should properly call the animate() method', done => {
    const animation = new Print();
    const shape = new Rectangle();
    const mock = sinon.mock(animation);

    mock.expects('animateProperty').once().returns(Promise.resolve());

    animation.animate(shape).then(() => {
      mock.verify();
      done();
    });
  });

  it('Should properly animate property', done => {
    const animation = new Print({ duration: 1 });
    const shape = new Rectangle();
    const mock = sinon.mock(animation);

    mock.expects('emit').atLeast(1).withArgs('tick');

    animation.animate(shape).then(() => {
      mock.verify();
      done();
    });
  });
});
