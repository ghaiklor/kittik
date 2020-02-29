const { assert } = require('chai')
const sinon = require('sinon')
const Rectangle = require('kittik-shape-rectangle')
const Animation = require('../src/index')

describe('Animation::Basic', () => {
  it('Should properly create animation with custom options', () => {
    const animation = new Animation({ duration: 2000, easing: 'outExpo' })
    assert.equal(animation.getDuration(), 2000)
    assert.equal(animation.getEasing(), 'outExpo')
  })

  it('Should properly get/set from options object', () => {
    const animation = new Animation()
    assert.notOk(animation.get('enabled'))
    assert.instanceOf(animation.set('foo.bar', true), Animation)
    assert.ok(animation.get('foo.bar'))
    assert.instanceOf(animation.set('foo.bar', false), Animation)
    assert.notOk(animation.get('foo.bar'), false)
  })

  it('Should properly get/set duration of the animation', () => {
    const animation = new Animation()
    assert.equal(animation.getDuration(), 1000)
    assert.instanceOf(animation.setDuration(2000), Animation)
    assert.equal(animation.getDuration(), 2000)
  })

  it('Should properly get/set easing of the animation', () => {
    const animation = new Animation()
    assert.equal(animation.getEasing(), 'outQuad')
    assert.instanceOf(animation.setEasing('inQuad'), Animation)
    assert.equal(animation.getEasing(), 'inQuad')
  })

  it('Should properly throw error if not supported easing', () => {
    const animation = new Animation()
    assert.throws(() => animation.setEasing('wrong'), Error, 'Unknown easing: wrong')
  })

  it('Should properly make delay', () => {
    return new Promise(done => {
      const animation = new Animation()
      animation.delay(1).then(() => {
        done()
      })
    })
  })

  it('Should properly trigger onTick method when animates', () => {
    return new Promise(done => {
      const animation = new Animation()
      const shape = new Rectangle()
      const mock = sinon.mock(animation)

      mock.expects('emit').atLeast(1).withArgs('tick')

      animation.animateProperty({ shape: shape, property: 'x', duration: 1 }).then(() => {
        mock.verify()
        done()
      })
    })
  })

  it('Should properly trigger onEasing method when animates', () => {
    return new Promise(done => {
      const animation = new Animation()
      const shape = new Rectangle()
      const mock = sinon.mock(animation)

      mock.expects('onEasing').atLeast(1)

      animation.animateProperty({ shape: shape, property: 'x', duration: 1 }).then(() => {
        mock.verify()
        done()
      })
    })
  })

  it('Should properly throw error when animate() is not implemented', () => {
    return new Promise(done => {
      const animation = new Animation()

      animation.animate().catch(error => {
        assert.instanceOf(error, Error)
        assert.equal(error.message, 'You must implement animate() method')
        done()
      })
    })
  })

  it('Should properly animate property in shape', () => {
    return new Promise(done => {
      const animation = new Animation({ duration: 1 })
      const shape = new Rectangle()
      const mock = sinon.mock(shape)

      mock.expects('set').atLeast(1)

      animation.animateProperty({ shape: shape, property: 'x' }).then(() => {
        mock.verify()
        done()
      })
    })
  })

  it('Should properly serialize animation to the object', () => {
    const animation = new Animation()

    assert.deepEqual(animation.toObject(), {
      type: 'Animation',
      options: {
        duration: 1000,
        easing: 'outQuad'
      }
    })
  })

  it('Should properly serialize animation to the JSON', () => {
    const animation = new Animation()
    assert.equal(animation.toJSON(), '{"type":"Animation","options":{"duration":1000,"easing":"outQuad"}}')
  })

  it('Should properly create Animation instance from static create()', () => {
    const animation = Animation.create({ duration: 1 })
    assert.equal(animation.get('duration'), 1)
    assert.instanceOf(animation, Animation)
  })

  it('Should properly throw exception if object representation is not valid', () => {
    assert.throws(() => Animation.fromObject({}), Error, 'It looks like the object is not a representation of the Animation')
  })

  it('Should properly throw exception if object representation is not from this animation', () => {
    const obj = { type: 'Slide', options: {} }
    assert.throws(() => Animation.fromObject(obj), Error, 'Slide is not an object representation of the Animation')
  })

  it('Should properly create Animation instance from object representation', () => {
    const obj = {
      type: 'Animation',
      options: {
        duration: 1,
        easing: 'inExpo'
      }
    }

    const animation = Animation.fromObject(obj)
    assert.instanceOf(animation, Animation)
    assert.equal(animation.getDuration(), 1)
    assert.equal(animation.getEasing(), 'inExpo')
  })

  it('Should properly create Animation instance from JSON representation', () => {
    const json = '{"type":"Animation","options":{"duration":1000,"easing":"outQuad"}}'
    const animation = Animation.fromJSON(json)

    assert.instanceOf(animation, Animation)
    assert.equal(animation.getDuration(), 1000)
    assert.equal(animation.getEasing(), 'outQuad')
  })
})
