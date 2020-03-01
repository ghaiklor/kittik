import { Animation } from '../src'
import { AnimationObject } from '../src/AnimationObject'

describe('Animation::Basic', () => {
  it('Should properly create animation with custom options', () => {
    const animation = new Animation({ duration: 2000, easing: 'outExpo' })

    expect(animation.duration).toEqual(2000)
    expect(animation.easing).toEqual('outExpo')
  })

  it('Should properly get/set from options object', () => {
    const animation = new Animation()

    expect(animation.get('foo.bar')).toBeUndefined()
    expect(animation.set('foo.bar', true)).toBeInstanceOf(Animation)
    expect(animation.get('foo.bar')).toBeTruthy()
    expect(animation.set('foo.bar', false)).toBeInstanceOf(Animation)
    expect(animation.get('foo.bar')).toBeFalsy()
  })

  it('Should properly trigger onTick method when animates', async () => {
    const animation = new Animation()
    const spy = jest.spyOn(animation, 'emit')

    await animation.animateProperty({ shape: {}, property: 'x', duration: 1 })
    expect(spy).toBeCalledTimes(1)
    expect(spy.mock.calls[0]).toEqual(['tick'])
  })

  it('Should properly trigger onEasing method when animates', async () => {
    const animation = new Animation()
    const spy = jest.spyOn(animation, 'onEasing')

    await animation.animateProperty({ shape: {}, property: 'x', duration: 1 })
    expect(spy).toBeCalledTimes(1)
  })

  it('Should properly throw error when animate() is not implemented', () => {
    const animation = new Animation()
    expect(async () => animation.animate()).toThrowError('You must implement animate() method')
  })

  it('Should properly animate property in shape', async () => {
    const animation = new Animation({ duration: 1 })
    const shape = { set: jest.fn() }

    await animation.animateProperty({ shape, property: 'x' })
    expect(shape.set).toBeCalledTimes(1)
  })

  it('Should properly serialize animation to the object', () => {
    const animation = new Animation()

    expect(animation.toObject()).toEqual({
      type: 'Animation',
      options: {
        duration: 1000,
        easing: 'outQuad'
      }
    })
  })

  it('Should properly serialize animation to the JSON', () => {
    const animation = new Animation()
    expect(animation.toJSON()).toEqual('{"type":"Animation","options":{"duration":1000,"easing":"outQuad"}}')
  })

  it('Should properly create Animation instance from static create()', () => {
    const animation = Animation.create({ duration: 1 })

    expect(animation.get('duration')).toEqual(1)
    expect(animation).toBeInstanceOf(Animation)
  })

  it('Should properly throw exception if object representation is not from this animation', () => {
    const obj = { type: 'Slide', options: {} }
    expect(() => Animation.fromObject(obj)).toThrow('Slide is not an object representation of the Animation')
  })

  it('Should properly create Animation instance from object representation', () => {
    const obj: AnimationObject = {
      type: 'Animation',
      options: {
        duration: 1,
        easing: 'inExpo'
      }
    }

    const animation = Animation.fromObject(obj)
    expect(animation).toBeInstanceOf(Animation)
    expect(animation.duration).toEqual(1)
    expect(animation.easing).toEqual('inExpo')
  })

  it('Should properly create Animation instance from JSON representation', () => {
    const json = '{"type":"Animation","options":{"duration":1000,"easing":"outQuad"}}'
    const animation = Animation.fromJSON(json)

    expect(animation).toBeInstanceOf(Animation)
    expect(animation.duration).toEqual(1000)
    expect(animation.easing).toEqual('outQuad')
  })
})
