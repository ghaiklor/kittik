# How to create a presentation?

In this guide, I'm going to describe the process of creating a presentation.

There is 2 ways you can do this: via `kittik` API and `kittik-cli` CLI.
First, let me describe the way via [Kittik API](#via-kittik-api).
Afterwards, you will be able to create presentations [via YAML and CLI](#via-kittik-cli).

## via Kittik API

_If you are creating a presentation using `kittik` package and its API._

Install `kittik` package and require `Deck` module from it.

```shell
npm install kittik
```

```javascript
import Deck from 'kittik';
```

Deck is a collection of slides.
You need to declare an array of slides in Deck.
To do so, provide Deck constructor with an object with `slides` property in it.

```javascript
import Deck from 'kittik';

Deck.create({
  slides: [{
    shapes: [{
      name: 'Local Shape',
      type: 'Rectangle',
      options: {
        text: 'This shape is available only in current slide',
        width: '50%',
        height: 5,
        background: 'white',
        foreground: 'black',
        x: 'center',
        y: 6
      }
    }],
    animations: [{
      name: 'Local Animation',
      type: 'Focus',
      options: {
        direction: 'shakeY',
        duration: 500
      }
    }],
    order: [
      'Local Shape::Local Animation->Local Animation'
    ]
  }]
});
```

Let me describe what happened here.
Except `Deck`, there is `Slide` class also.
Each `Slide` declaration contains `shapes`, `animations` and `order` properties.

- `shapes` property is an array of shapes, that you want to create. It must contain `name` for reference, `type` for telling Kittik what shape to use and `options` for passing it in `kittik-shape-*` packages.
- `animations` property is an array of animations, that you want to create. It must contain `name` for reference, `type` for telling Kittik what animation to use and `options` for passing it in `kittik-animation-*` packages.
- `order` property is an array of strings, where you specify the order of rendering the slide. First goes shape name by reference and if you want to animate it, you need to append `::`. After that, specify the animation name by reference. If you want to chain animations, you can use `->` and specify another animation you want to play after that one.

I hope there is not a lot information for you.

Now, you can specify global shapes and animations to reduce the declaration size, when you want to reuse shapes in other slides.
To do that, you can specify `shapes` and `animations` properties in the root of Deck declaration.
Here is our example with one more slide and global shapes and animations.

```javascript
import Deck from 'kittik';

Deck.create({
  shapes: [{
    name: 'Global Shape',
    type: 'Text',
    options: {
      text: 'This shape is available in all slides',
      x: 'center',
      y: 2
    }
  }],
  animations: [{
    name: 'Global Animation',
    type: 'Print',
    options: {
      duration: 5000
    }
  }],
  slides: [{
    order: [
      'Global Shape::Global Animation'
    ]
  }, {
    shapes: [{
      name: 'Local Shape',
      type: 'Rectangle',
      options: {
        text: 'This shape is available only in current slide',
        width: '50%',
        height: 5,
        background: 'white',
        foreground: 'black',
        x: 'center',
        y: 6
      }
    }],
    animations: [{
      name: 'Local Animation',
      type: 'Focus',
      options: {
        direction: 'shakeY',
        duration: 500
      }
    }],
    order: [
      'Global Shape::Global Animation',
      'Local Shape::Global Animation->Local Animation'
    ]
  }]
});
```

Finally, to run the presentation, just call `.run()` method on Deck instance.

```javascript
deck.run();
```

Let me show you the full example of our presentation.

```javascript
import Deck from 'kittik';

Deck.create({
  shapes: [{
    name: 'Global Shape',
    type: 'Text',
    options: {
      text: 'This shape is available in all slides',
      x: 'center',
      y: 2
    }
  }],
  animations: [{
    name: 'Global Animation',
    type: 'Print',
    options: {
      duration: 5000
    }
  }],
  slides: [{
    order: [
      'Global Shape::Global Animation'
    ]
  }, {
    shapes: [{
      name: 'Local Shape',
      type: 'Rectangle',
      options: {
        text: 'This shape is available only in current slide',
        width: '50%',
        height: 5,
        background: 'white',
        foreground: 'black',
        x: 'center',
        y: 6
      }
    }],
    animations: [{
      name: 'Local Animation',
      type: 'Focus',
      options: {
        direction: 'shakeY',
        duration: 500
      }
    }],
    order: [
      'Global Shape::Global Animation',
      'Local Shape::Global Animation->Local Animation'
    ]
  }]
}).run();
```

Here is a demo of what we got here:

![kittik](https://cloud.githubusercontent.com/assets/3625244/16487609/b5ae9740-3ed4-11e6-8862-c47c913b2e82.gif)

__How do you know what options you can pass in in animations\shapes?__

Well, very simple. Each shape and animation has API declarations.
You can find them at [doc folder](../api).

For instance, you want to know what options you can pass in in Text shape.
Open [api/shapes/Text.md](../api/shapes/Text.md) file and look at the `constructor`.
You will find declaration and example of using for this shape.
The same for other shapes and animations.

_NOTE:_ Don't forgot, that shapes and animations extended from basic classes, which can accept basic options as well.

I hope you got the idea.

## via Kittik CLI

_If you are creating a presentation using `kittik-cli` package._

The whole idea remains the same as with [Kittik API](#via-kittik-api).
The main difference here is - you can write these declarations in YAML.
I'm not going to describe all again, you easily can lead the idea from Kittik API section.

Install `kittik-cli` package:

```shell
npm -g install kittik-cli
```

Create a new presentation file:

```shell
kittik create presentation-name
```

Update a generated `presentation-name.yml` YAML file with declaration like this:

```yaml
shapes:
  - name: "Hello, Kittik"
    type: "FigText"
    options:
      text: "Hello, Kittik"
      x: "center"
      y: "middle"
      foreground: "red"

animations:
  - name: "Print"
    type: "Print"
    options:
      duration: 2000

slides:
  - order:
    - "Hello, Kittik::Print"
```

Run the presentation:

```shell
kittik start presentation-name.yml
```

You see? The declaration totally equals to declaration in Kittik API, just in YAML.

I hope, after this guide, you can create your own presentations.
If not, open an issue and I'll update the guide according to you.
