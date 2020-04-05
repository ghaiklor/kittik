import { Print } from '../src/Print';
import { Shape } from 'kittik-shape-basic';

describe('print animation', () => {
  it('should properly call the animate() method', async () => {
    expect.hasAssertions();

    const shape = new Shape({ text: 'Hello, World' });
    const animation = new Print();
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'text', startValue: 0, endValue: 12 }));
  });

  it('should properly update the text length on each frame', async () => {
    expect.hasAssertions();

    const shape = new Shape({ text: 'Hello, World' });
    const animation = new Print();
    const spy = jest.spyOn(animation, 'emit');

    await animation.animate(shape);

    expect(spy.mock.calls.length).toBeGreaterThanOrEqual(10);
    expect(spy).toHaveBeenCalledWith('tick', expect.any(Shape), 'text', 0);
    expect(spy).toHaveBeenCalledWith('tick', expect.any(Shape), 'text', 2);
    expect(spy).toHaveBeenCalledWith('tick', expect.any(Shape), 'text', 4);
  });
});
