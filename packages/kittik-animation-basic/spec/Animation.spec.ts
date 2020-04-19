import { Animation } from '../src/Animation';
import { AnimationObject } from '../src/AnimationObject';
import { Shape } from 'kittik-shape-basic';

describe('basic animation', () => {
  it('should properly create animation with custom options', () => {
    expect.hasAssertions();

    const animation = new Animation({ duration: 2000, easing: 'outExpo' });
    expect(animation.duration).toStrictEqual(2000);
    expect(animation.easing).toStrictEqual('outExpo');
  });

  it('should properly emit tick event when animation frame happened', async () => {
    expect.hasAssertions();

    const shape = new Shape();
    const animation = new Animation();
    const emitSpy = jest.spyOn(animation, 'emit');

    await animation.animateProperty({ shape, property: 'x', startValue: 0, endValue: 100 });

    expect(emitSpy.mock.calls.length).toBeGreaterThan(60);
    expect(emitSpy).toHaveBeenCalledWith('tick', expect.any(Shape), 'x', expect.any(Number));
  });

  it('should properly emit tick event with custom byValue, duration, easing', async () => {
    expect.hasAssertions();

    const shape = new Shape();
    const animation = new Animation();
    const emitSpy = jest.spyOn(animation, 'emit');

    await animation.animateProperty({
      byValue: 1,
      duration: 100,
      easing: 'inExpo',
      endValue: 100,
      property: 'x',
      shape,
      startValue: 0
    });

    expect(emitSpy.mock.calls.length).toBeGreaterThan(50);
    expect(emitSpy).toHaveBeenCalledWith('tick', expect.any(Shape), 'x', expect.any(Number));
  });

  it('should properly serialize animation to the object', () => {
    expect.hasAssertions();

    const animation = new Animation();
    expect(animation.toObject()).toStrictEqual({
      type: 'Animation',
      options: {
        duration: 1000,
        easing: 'outQuad'
      }
    });
  });

  it('should properly serialize animation to the JSON', () => {
    expect.hasAssertions();

    const animation = new Animation();
    expect(animation.toJSON()).toStrictEqual('{"type":"Animation","options":{"duration":1000,"easing":"outQuad"}}');
  });

  it('should properly create Animation instance from static create()', () => {
    expect.hasAssertions();

    const animation = Animation.create({ duration: 1 });
    expect(animation.duration).toStrictEqual(1);
    expect(animation).toBeInstanceOf(Animation);
  });

  it('should properly throw exception if object representation is not from this animation', () => {
    expect.hasAssertions();

    const obj = { type: 'Slide' };
    expect(() => Animation.fromObject(obj)).toThrow(
      'You specified configuration for "Slide" but provided it to "Animation". ' +
      'Did you mean to set "type" in configuration to "Animation"?'
    );
  });

  it('should properly create Animation instance from object representation', () => {
    expect.hasAssertions();

    const obj: AnimationObject = {
      type: 'Animation',
      options: {
        duration: 1,
        easing: 'inExpo'
      }
    };

    const animation = Animation.fromObject(obj);
    expect(animation).toBeInstanceOf(Animation);
    expect(animation.duration).toStrictEqual(1);
    expect(animation.easing).toStrictEqual('inExpo');
  });

  it('should properly create Animation instance from JSON representation', () => {
    expect.hasAssertions();

    const json = '{"type":"Animation","options":{"duration":1000,"easing":"outQuad"}}';
    const animation = Animation.fromJSON(json);

    expect(animation).toBeInstanceOf(Animation);
    expect(animation.duration).toStrictEqual(1000);
    expect(animation.easing).toStrictEqual('outQuad');
  });

  it('should properly handle non-number delay', async () => {
    expect.hasAssertions();
    expect(await new Animation().delay(Infinity)).toBeUndefined();
  });
});
