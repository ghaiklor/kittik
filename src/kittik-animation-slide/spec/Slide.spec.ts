import { Canvas } from 'terminal-canvas';
import { Rectangle } from 'kittik-shape-rectangle';
import { Slide } from '../src/Slide';
import { SlideObject } from '../src/SlideObject';

describe('Animation::Slide', () => {
  it('Should properly parse coordinates for inUp', async () => {
    const shape = new Rectangle({ height: '5' });
    const animation = new Slide({ direction: 'inUp' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toBeCalledTimes(2);
    expect(spy).toBeCalledWith(expect.objectContaining({ property: 'x', startValue: 0, endValue: 0 }));
    expect(spy).toBeCalledWith(expect.objectContaining({ property: 'y', startValue: -5, endValue: 0 }));
  });

  it('Should properly parse coordinates for inDown', async () => {
    const cursor = new Canvas();
    const shape = new Rectangle({ height: '5' });
    const animation = new Slide({ direction: 'inDown' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toBeCalledTimes(2);
    expect(spy).toBeCalledWith(expect.objectContaining({ property: 'x', startValue: 0, endValue: 0 }));
    expect(spy).toBeCalledWith(expect.objectContaining({ property: 'y', startValue: cursor.height + 5, endValue: 0 }));
  });

  it('Should properly parse coordinates for inLeft', async () => {
    const shape = new Rectangle({ width: '15' });
    const animation = new Slide({ direction: 'inLeft' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toBeCalledTimes(2);
    expect(spy).toBeCalledWith(expect.objectContaining({ property: 'x', startValue: -15, endValue: 0 }));
    expect(spy).toBeCalledWith(expect.objectContaining({ property: 'y', startValue: 0, endValue: 0 }));
  });

  it('Should properly parse coordinates for inRight', async () => {
    const cursor = new Canvas();
    const shape = new Rectangle({ width: '15' });
    const animation = new Slide({ direction: 'inRight' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toBeCalledTimes(2);
    expect(spy).toBeCalledWith(expect.objectContaining({ property: 'x', startValue: cursor.width + 15, endValue: 0 }));
    expect(spy).toBeCalledWith(expect.objectContaining({ property: 'y', startValue: 0, endValue: 0 }));
  });

  it('Should properly parse coordinates for outUp', async () => {
    const shape = new Rectangle({ height: '5' });
    const animation = new Slide({ direction: 'outUp' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toBeCalledTimes(2);
    expect(spy).toBeCalledWith(expect.objectContaining({ property: 'x', startValue: 0, endValue: 0 }));
    expect(spy).toBeCalledWith(expect.objectContaining({ property: 'y', startValue: 0, endValue: -5 }));
  });

  it('Should properly parse coordinates for outDown', async () => {
    const cursor = new Canvas();
    const shape = new Rectangle({ height: '5' });
    const animation = new Slide({ direction: 'outDown' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toBeCalledTimes(2);
    expect(spy).toBeCalledWith(expect.objectContaining({ property: 'x', startValue: 0, endValue: 0 }));
    expect(spy).toBeCalledWith(expect.objectContaining({ property: 'y', startValue: 0, endValue: cursor.height + 5 }));
  });

  it('Should properly parse coordinates for outLeft', async () => {
    const shape = new Rectangle({ width: '15' });
    const animation = new Slide({ direction: 'outLeft' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toBeCalledTimes(2);
    expect(spy).toBeCalledWith(expect.objectContaining({ property: 'x', startValue: 0, endValue: -15 }));
    expect(spy).toBeCalledWith(expect.objectContaining({ property: 'y', startValue: 0, endValue: 0 }));
  });

  it('Should properly parse coordinates for outRight', async () => {
    const cursor = new Canvas();
    const shape = new Rectangle();
    const animation = new Slide({ direction: 'outRight' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toBeCalledTimes(2);
    expect(spy).toBeCalledWith(expect.objectContaining({ property: 'x', startValue: 0, endValue: cursor.width + 1 }));
    expect(spy).toBeCalledWith(expect.objectContaining({ property: 'y', startValue: 0, endValue: 0 }));
  });

  it('Should properly serialize animation to Object', () => {
    const animation = new Slide();
    const obj = animation.toObject();

    expect(obj).toEqual({
      type: 'Slide',
      options: {
        duration: 1000,
        easing: 'outQuad',
        direction: 'inRight'
      }
    });
  });

  it('Should properly create Animation instance from object', () => {
    const obj: SlideObject = {
      type: 'Slide',
      options: {
        duration: 4000,
        easing: 'inOutExpo',
        direction: 'inLeft'
      }
    };

    const animation = Slide.fromObject<Slide>(obj);

    expect(animation).toBeInstanceOf(Slide);
    expect(animation.duration).toBe(4000);
    expect(animation.easing).toBe('inOutExpo');
    expect(animation.direction).toBe('inLeft');
  });
});
