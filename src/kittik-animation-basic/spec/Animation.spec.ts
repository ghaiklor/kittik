import { Animation } from '../src/Animation';
import { AnimationObject } from '../src/AnimationObject';
import { Canvas } from 'terminal-canvas';
import { Shape } from 'kittik-shape-basic';

describe('Animation::Basic', () => {
  it('Should properly create animation with custom options', () => {
    const animation = new Animation({ duration: 2000, easing: 'outExpo' });

    expect(animation.duration).toEqual(2000);
    expect(animation.easing).toEqual('outExpo');
  });

  it('Should properly emit tick event when animation frame happened', async () => {
    const cursor = new Canvas();
    const shape = new Shape(cursor);
    const animation = new Animation();
    const emitSpy = jest.spyOn(animation, 'emit');

    await animation.animateProperty({ shape, property: 'x', startValue: 0, endValue: 100 });

    expect(emitSpy.mock.calls.length).toBeGreaterThan(60);
    expect(emitSpy).toBeCalledWith('tick', expect.any(Shape), 'x', expect.any(Number));
  });

  it('Should properly emit tick event with custom byValue, duration, easing', async () => {
    const cursor = new Canvas();
    const shape = new Shape(cursor);
    const animation = new Animation();
    const emitSpy = jest.spyOn(animation, 'emit');

    await animation.animateProperty({ shape, property: 'x', startValue: 0, endValue: 100, byValue: 1, duration: 100, easing: 'inExpo' });

    expect(emitSpy.mock.calls.length).toBeGreaterThan(60);
    expect(emitSpy).toBeCalledWith('tick', expect.any(Shape), 'x', expect.any(Number));
  });

  it('Should properly throw error when animate() is not implemented', () => {
    const animation = new Animation();

    expect(() => animation.animate()).toThrowError('You must implement animate() method');
  });

  it('Should properly serialize animation to the object', () => {
    const animation = new Animation();

    expect(animation.toObject()).toEqual({
      type: 'Animation',
      options: {
        duration: 1000,
        easing: 'outQuad'
      }
    });
  });

  it('Should properly serialize animation to the JSON', () => {
    const animation = new Animation();

    expect(animation.toJSON()).toEqual('{"type":"Animation","options":{"duration":1000,"easing":"outQuad"}}');
  });

  it('Should properly create Animation instance from static create()', () => {
    const animation = Animation.create({ duration: 1 });

    expect(animation.duration).toEqual(1);
    expect(animation).toBeInstanceOf(Animation);
  });

  it('Should properly throw exception if object representation is not from this animation', () => {
    const obj = { type: 'Slide' };

    expect(() => Animation.fromObject(obj)).toThrow('Slide is not an object representation of the Animation');
  });

  it('Should properly create Animation instance from object representation', () => {
    const obj: AnimationObject = {
      type: 'Animation',
      options: {
        duration: 1,
        easing: 'inExpo'
      }
    };

    const animation = Animation.fromObject(obj);

    expect(animation).toBeInstanceOf(Animation);
    expect(animation.duration).toEqual(1);
    expect(animation.easing).toEqual('inExpo');
  });

  it('Should properly create Animation instance from JSON representation', () => {
    const json = '{"type":"Animation","options":{"duration":1000,"easing":"outQuad"}}';
    const animation = Animation.fromJSON(json);

    expect(animation).toBeInstanceOf(Animation);
    expect(animation.duration).toEqual(1000);
    expect(animation.easing).toEqual('outQuad');
  });
});
