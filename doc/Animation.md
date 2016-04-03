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
Though, you still need to re-render your shape when property is changed.

It can easily done with `tick` event in animation.

```js
animation.on('tick', (shape, property, value) => {
  cursor.eraseScreen();
  shape.render();
  cursor.flush();
});
```

## Extending animations

All animations are extended from `kittik-animation-basic` package.


