import { Print } from '../src/Print';
import { Shape } from 'kittik-shape-basic';

describe('Animation::Print', () => {
  it('Should properly call the animate() method', async () => {
    const shape = new Shape({ text: 'Hello, World' });
    const animation = new Print();
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(expect.objectContaining({ property: 'text', startValue: 0, endValue: 12 }));
  });

  it('Should properly update the text length on each frame', async () => {
    const shape = new Shape({ text: 'Hello, World' });
    const animation = new Print();
    const spy = jest.spyOn(animation, 'emit');

    await animation.animate(shape);

    expect(spy.mock.calls.length).toBeGreaterThanOrEqual(10);
    expect(spy).toBeCalledWith('tick', expect.any(Shape), 'text', 0);
    expect(spy).toBeCalledWith('tick', expect.any(Shape), 'text', 2);
    expect(spy).toBeCalledWith('tick', expect.any(Shape), 'text', 4);
  });
});
