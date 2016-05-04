# Animation

Animation are classes that can animate your shapes.

## Getting Started

```shell
npm install kittik-animation-print
```

Animation classes accept one argument in their constructors - `options`.
`options` is a plain object with configuration for animation.

When you've created animation instance, you can call `.animate()` method with shape instance, which you want to animate:

```js
import Print from 'kittik-animation-print';
import Rectangle from 'kittik-shape-rectangle';
import Cursor from 'kittik-cursor';

const cursor = Cursor.create().reset();
const shape = new Rectangle(cursor, {
  text: 'Hello, World'
});

const animation = new Print({
  duration: 5000,
  easing: 'inQuad'
});

animation.animate(shape);
```

Code above starts animate properties in your shape.
However, you still need to re-render your shape when property is changed.

It can easily be done with `tick` event in animation.

```js
animation.on('tick', (shape, property, value) => {
  cursor.eraseScreen();
  shape.render();
  cursor.flush();
});
```

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

## API

Animations API you can find [here](./api/Animation.md).
