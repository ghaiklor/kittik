import { Canvas } from 'terminal-canvas';
import { Rectangle } from 'kittik-shape-rectangle';
import { Slide } from '../src/Slide';
import { SlideObject } from '../src/SlideObject';

describe('slide animation', () => {
  it('should properly parse coordinates for inUp', async () => {
    expect.hasAssertions();

    const shape = new Rectangle({ height: '5' });
    const animation = new Slide({ direction: 'inUp' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'x', startValue: 0, endValue: 0 }));
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'y', startValue: -5, endValue: 0 }));
  });

  it('should properly parse coordinates for inDown', async () => {
    expect.hasAssertions();

    const cursor = new Canvas();
    const shape = new Rectangle({ height: '5' });
    const animation = new Slide({ direction: 'inDown' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: 'x', startValue: 0, endValue: 0 })
    );

    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: 'y', startValue: cursor.height + 5, endValue: 0 })
    );
  });

  it('should properly parse coordinates for inLeft', async () => {
    expect.hasAssertions();

    const shape = new Rectangle({ width: '15' });
    const animation = new Slide({ direction: 'inLeft' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'x', startValue: -15, endValue: 0 }));
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'y', startValue: 0, endValue: 0 }));
  });

  it('should properly parse coordinates for inRight', async () => {
    expect.hasAssertions();

    const cursor = new Canvas();
    const shape = new Rectangle({ width: '15' });
    const animation = new Slide({ direction: 'inRight' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: 'x', startValue: cursor.width + 15, endValue: 0 })
    );

    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: 'y', startValue: 0, endValue: 0 })
    );
  });

  it('should properly parse coordinates for outUp', async () => {
    expect.hasAssertions();

    const shape = new Rectangle({ height: '5' });
    const animation = new Slide({ direction: 'outUp' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'x', startValue: 0, endValue: 0 }));
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'y', startValue: 0, endValue: -5 }));
  });

  it('should properly parse coordinates for outDown', async () => {
    expect.hasAssertions();

    const cursor = new Canvas();
    const shape = new Rectangle({ height: '5' });
    const animation = new Slide({ direction: 'outDown' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: 'x', startValue: 0, endValue: 0 })
    );

    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: 'y', startValue: 0, endValue: cursor.height + 5 })
    );
  });

  it('should properly parse coordinates for outLeft', async () => {
    expect.hasAssertions();

    const shape = new Rectangle({ width: '15' });
    const animation = new Slide({ direction: 'outLeft' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'x', startValue: 0, endValue: -15 }));
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ property: 'y', startValue: 0, endValue: 0 }));
  });

  it('should properly parse coordinates for outRight', async () => {
    expect.hasAssertions();

    const cursor = new Canvas();
    const shape = new Rectangle();
    const animation = new Slide({ direction: 'outRight' });
    const spy = jest.spyOn(animation, 'animateProperty').mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: 'x', startValue: 0, endValue: cursor.width + 1 })
    );

    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: 'y', startValue: 0, endValue: 0 })
    );
  });

  it('should properly serialize animation to Object', () => {
    expect.hasAssertions();

    const animation = new Slide();
    const obj = animation.toObject();

    expect(obj).toStrictEqual({
      type: 'Slide',
      options: {
        duration: 1000,
        easing: 'outQuad',
        direction: 'inRight'
      }
    });
  });

  it('should properly create Animation instance from object', () => {
    expect.hasAssertions();

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
