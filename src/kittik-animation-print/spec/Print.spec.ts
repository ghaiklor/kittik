import { Canvas } from 'terminal-canvas';
import { Print } from '../src/Print';
import { Shape } from 'kittik-shape-basic';

describe('Animation::Print', () => {
  it('Should properly call the animate() method', async () => {
    const cursor = new Canvas();
    const shape = new Shape(cursor, { text: 'Hello, World' });
    const animation = new Print();
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(expect.objectContaining({ property: 'text', startValue: 0, endValue: 12 }));
  });

  it('Should properly update the text length on each frame', async () => {
    const cursor = new Canvas();
    const shape = new Shape(cursor, { text: 'Hello, World' });
    const animation = new Print();
    const spy = jest.spyOn(animation, 'emit');

    await animation.animate(shape);

    expect(spy).toBeCalledTimes(12);
    expect(spy).toBeCalledWith('tick', expect.any(Shape), 'text', 0);
    expect(spy).toBeCalledWith('tick', expect.any(Shape), 'text', 2);
    expect(spy).toBeCalledWith('tick', expect.any(Shape), 'text', 4);
  });
});
