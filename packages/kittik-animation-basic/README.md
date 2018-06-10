# kittik-animation-basic

![Build Status](https://img.shields.io/travis/kittikjs/animation-basic.svg)
![Coverage](https://img.shields.io/coveralls/kittikjs/animation-basic.svg)

![Downloads](https://img.shields.io/npm/dm/kittik-animation-basic.svg)
![Downloads](https://img.shields.io/npm/dt/kittik-animation-basic.svg)
![npm version](https://img.shields.io/npm/v/kittik-animation-basic.svg)
![License](https://img.shields.io/npm/l/kittik-animation-basic.svg)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![dependencies](https://img.shields.io/david/kittikjs/animation-basic.svg)
![dev dependencies](https://img.shields.io/david/dev/kittikjs/animation-basic.svg)

Basic animation which is needed for creating other animations in Kittik engine.

| Examples |
| -------- |
| ![kittik](https://cloud.githubusercontent.com/assets/3625244/16447073/6b9ba184-3df3-11e6-947c-fe5f91a74385.gif) |

## Getting Started

Animation are classes that can animate your Kittik shapes instances.
Firstly, install the animation:

```shell
npm install kittik-animation-print
```

Animation classes accept one argument in their constructors - `options`.
`options` is a plain object with configuration for animation.

When you've created animation instance, you can call `.animate(shape)` method with shape instance, which you want to animate:

```js
import Print from 'kittik-animation-print';
import Rectangle from 'kittik-shape-rectangle';
import Cursor from 'kittik-cursor';

// Create cursor instance for shape, so shape can render itself
const cursor = Cursor.create().reset();

// Create shape instance with cursor and rendering options
const shape = new Rectangle(cursor, {
  text: 'Hello, World'
});

// Create animation instance with animation options
const animation = new Print({
  duration: 5000,
  easing: 'inQuad'
});

// Finally, you can call animate() method for animation
animation.animate(shape);
```

Code above starts animate properties in your shape.
However, you still need to re-render your shape when property is changed.
You must to realize, that animations only changes shapes properties.

Re-render can easily be done with `tick` event in animation.

```js
animation.on('tick', (shape, property, value) => {
  cursor.eraseScreen();
  shape.render();
  cursor.flush();
});
```

`tick` event accepts three arguments:

- `shape` - shape instance which has been modified;
- `property` - property name which has been modified;
- `value` - new value of `property` for this `shape`;

That way you can integrate these animations in any code you like.

## Extending animations

All animations are extended from `kittik-animation-basic` package.
`kittik-animation-basic` consists of all needed methods and helpers to animate the shape.

Let's start with simple animation, called `kittik-animation-hello-world`.

```shell
mkdir kittik-animation-hello-world
cd kittik-animation-hello-world
npm init
npm install --save kittik-animation-basic
```

Create `src/HelloWorld.js` file and add there the following:

```javascript
import Animation from 'kittik-animation-basic';

export default class HelloWorld extends Animation {
  animate(shape) {
    return Promise.resolve();
  }
}
```

It's a basic animation, that does nothing.
Each animation must contain `animate()` method that returns Promise which must be resolved, when animation is done.

Let's animate property `x` in our shape.

```javascript
import Animation from 'kittik-animation-basic';

export default class HelloWorld extends Animation {
  animate(shape) {
    return this.animateProperty({shape, property: 'x', startValue: 10, endValue: 20});
  }
}
```

`animateProperty` is a helper in `kittik-animation-basic` that allows to you animate numeric properties with easing.
In that case, we animate property `x` of our shape from 10 to 20.

Custom options in the animation can be added as in shapes.

```javascript
import Animation from 'kittik-animation-basic';

export default class HelloWorld extends Animation {
  constructor(options) {
    super(options);

    this.setMagicValue(options.magicValue);
  },

  getMagicValue() {
    // You can add your own logic here for calculating something
    return this.get('magicValue');
  },

  setMagicValue(magicValue) {
    // The same applies here, if needed, add your custom logic here
    return this.set('magicValue', magicValue);
  },

  animate(shape) {
    return this.animateProperty({shape, property: 'x', startValue: 10, endValue: 20});
  }

  // Do not forgot to override toObject method with your custom properties
  // So Kittik engine can serialize\deserialize your animation
  toObject() {
    const obj = super.toObject();

    Object.assign(obj.options, {
      magicValue: this.get('magicValue')
    });

    return obj;
  }
}
```

More examples you can find in `animation-*` repositories in KittikJS organization.

_NOTE_: Do not forgot, that you __MUST__ re-render the shape on `tick` event.
Otherwise, you see nothing, because properties will be only changed in the instance.
Shapes are not re-render itself due performance optimization, so you need to call `.render()` manually.

## API

API for `kittik-animation-basic` you can find [here](./API.md).

## License

The MIT License (MIT)

Copyright (c) 2015-2016 Eugene Obrezkov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
