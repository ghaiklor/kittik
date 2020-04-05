import { Focus } from '../src/Focus';
import { FocusObject } from '../src/FocusObject';
import { Shape } from 'kittik-shape-basic';

describe('focus animation', () => {
  it('should properly get duration with different repeat count', () => {
    expect.hasAssertions();

    const animation = new Focus({ duration: 5000, repeat: 5 });
    expect(animation.duration).toBe(1000);
  });

  it('should properly call animateBounce() with bounceUp direction', async () => {
    expect.hasAssertions();

    const shape = new Shape();
    const animation = new Focus({ direction: 'bounceUp' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'y', startValue: 0, endValue: -5 }));
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'y', startValue: -5, endValue: 0 }));
  });

  it('should properly call animateBounce() with bounceRight direction', async () => {
    expect.hasAssertions();

    const shape = new Shape();
    const animation = new Focus({ direction: 'bounceRight' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'x', startValue: 0, endValue: 5 }));
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'x', startValue: 5, endValue: 0 }));
  });

  it('should properly call animateBounce() with bounceDown direction', async () => {
    expect.hasAssertions();

    const shape = new Shape();
    const animation = new Focus({ direction: 'bounceDown' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'y', startValue: 0, endValue: 5 }));
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'y', startValue: 5, endValue: 0 }));
  });

  it('should properly call animateBounce() with bounceLeft direction', async () => {
    expect.hasAssertions();

    const shape = new Shape();
    const animation = new Focus({ direction: 'bounceLeft' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'x', startValue: 0, endValue: -5 }));
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'x', startValue: -5, endValue: 0 }));
  });

  it('should properly call animateShake() with shakeX direction', async () => {
    expect.hasAssertions();

    const shape = new Shape();
    const animation = new Focus({ direction: 'shakeX' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'x', startValue: 0, endValue: -5 }));
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'x', startValue: -5, endValue: 5 }));
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'x', startValue: 5, endValue: 0 }));
  });

  it('should properly call animateShake() with shakeY direction', async () => {
    expect.hasAssertions();

    const shape = new Shape();
    const animation = new Focus({ direction: 'shakeY' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'y', startValue: 0, endValue: -5 }));
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'y', startValue: -5, endValue: 5 }));
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'y', startValue: 5, endValue: 0 }));
  });

  it('should properly call the animate() method with default type', async () => {
    expect.hasAssertions();

    const shape = new Shape();
    const animation = new Focus();
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'x', startValue: 0, endValue: -5 }));
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'x', startValue: -5, endValue: 5 }));
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'x', startValue: 5, endValue: 0 }));
  });

  it('should properly serialize animation to Object', () => {
    expect.hasAssertions();

    const animation = new Focus();
    const obj = animation.toObject();

    expect(obj).toStrictEqual({
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

  it('should properly create Animation instance from object', () => {
    expect.hasAssertions();

    const obj: FocusObject = {
      type: 'Focus',
      options: {
        duration: 4000,
        easing: 'inOutExpo',
        direction: 'bounceDown',
        offset: 20,
        repeat: 5
      }
    };

    const animation: Focus = Focus.fromObject(obj);

    expect(animation).toBeInstanceOf(Focus);
    expect(animation.duration).toBe(800);
    expect(animation.easing).toBe('inOutExpo');
    expect(animation.direction).toBe('bounceDown');
    expect(animation.offset).toBe(20);
    expect(animation.repeat).toBe(5);
  });
});
