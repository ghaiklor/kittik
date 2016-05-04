# Shape

Shapes are classes, that contains all needed logic for rendering itself via [Cursor](./Cursor.md).

## Getting Started

```shell
npm install kittik-shape-rectangle
```

Shapes classes accept two arguments in the constructor: `cursor` and `options`.

- `cursor` is an instance of `kittik-cursor`;
- `options` is a plain object representing the view options of this shape;

When shape instance is created, you can call `.render()` method which renders this shape, using Cursor API.

```js
import Cursor from 'kittik-cursor';
import Rectangle from 'kittik-shape-rectangle';

const cursor = Cursor.create();
const shape = Rectangle.create(cursor, {text: 'Random text'});

shape.render();
```

## Extending shapes

You can create your own shape, using `kittik-shape-basic`.
`kittik-shape-basic` consists of all needed methods that you can use for creating your own shapes.

Start by creating your own package, let's say, we want to create `kittik-shape-hello-world`.

```shell
mkdir kittik-shape-hello-world
cd kittik-shape-hello-world
npm init
npm install --save kittik-shape-basic
```

You have all what you need and can start creating your shape.

Create `src/HelloWorld.js` file with the following content:

```js
import Shape from 'kittik-shape-basic';

export default class HelloWorld extends Shape {
  render() {
    return this;
  }
}
```

It's a basic shape that do nothing. But...
Each shape **MUST** contain `.render()` method that will render your shape.

Let's start with simple example and create shape which will render Hello, World.

```js
import Shape from 'kittik-shape-basic';

export default class HelloWorld extends Shape {
  render() {
    const cursor = this.getCursor(); // Get cursor that you can use for render the shape

    cursor.moveTo(10, 10).write('Hello, World'); // Move to (10, 10) and write Hello, World

    return this;
  }
}
```

That's it.
Our shape can write Hello, World at (10, 10) point.

Let's add an opportunity to change text:

```js
import Shape from 'kittik-shape-basic';

export default class HelloWorld extends Shape {
  render() {
    const cursor = this.getCursor(); // Get cursor that you can use for render the shape
    const text = this.getText(); // getText() is implemented in basic shape, so you can just grab text from there

    cursor.moveTo(10, 10).write(text); // Move to (10, 10) and write value of the text

    return this;
  }
}
```

Also, we can change hardcoded coordinates to specified in the constructor:

```js
import Shape from 'kittik-shape-basic';

export default class HelloWorld extends Shape {
  render() {
    const cursor = this.getCursor(); // Get cursor that you can use for render the shape
    const text = this.getText(); // getText() is implemented in basic shape, so you can just grab text from there
    const x = this.getX(); // getX() is implemented in basic shape and suppports aligning
    const y = this.getY(); // getY() the same as getX()

    cursor.moveTo(x, y).write(text); // Move to (x, y) and write value of the text

    return this;
  }
}
```

What about custom properties?

As easy as it says.
You can override constructor method and add your own options to the shape:

```js
import Shape from 'kittik-shape-basic';

export default class HelloWorld extends Shape {
  constructor(cursor, options) {
    super(cursor, options);

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

  render() {
    const cursor = this.getCursor(); // Get cursor that you can use for render the shape
    const text = this.getText(); // getText() is implemented in basic shape, so you can just grab text from there
    const x = this.getX(); // getX() is implemented in basic shape and suppports aligning
    const y = this.getY(); // getY() the same as getX()
    const myMagicValue = this.getMagicValue(); // You can use your methods in render method as well

    // Do something with your magic value, maybe
    cursor.moveTo(x, y).write(text); // Move to (x, y) and write value of the text

    return this;
  }

  // Do not forgot to override toObject method with your custom properties
  // So Kittik engine can serialize\deserialize your shape
  toObject() {
    const obj = super.toObject();

    Object.assign(obj.options, {
      magicValue: this.get('magicValue')
    });

    return obj;
  }
}
```

I think that's it.
Everything is simple.
If you want to see more examples, just look at the shape-* repositories in the KittikJS organization.

## API

All implemented methods in `kittik-shape-basic` are described [here](./api/Shape.md#Shape).

Each implemented shape has its own API declaration that you can read [here](./api/Shape.md).
