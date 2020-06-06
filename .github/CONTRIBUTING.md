# Contributing Guidelines

- [Contributing Guidelines](#contributing-guidelines)
  - [Prerequisites](#prerequisites)
    - [Rush](#rush)
  - [Building Locally](#building-locally)
  - [Running Locally](#running-locally)
  - [Design](#design)
    - [Overview](#overview)
    - [Shape](#shape)
    - [Animation](#animation)
    - [Slide](#slide)
    - [Deck](#deck)

## Prerequisites

### Rush

You need to install [Rush](https://rushjs.io) globally, it will simplify your routine with this monorepo a lot.

```shell
npm install -g @microsoft/rush
```

Check that you have it installed by calling:

```shell
$ rush --help

Rush Multi-Project Build Tool 5.24.3 - https://rushjs.io
```

## Building Locally

After you cloned the repository and installed the prerequisites, all you need to do is run `rush install` command:

```shell
rush install
```

It will install all the dependencies and link them together between projects.
To actually build the project, call `rush build` after install is done:

```shell
rush build
```

There are other pipelines implemented as custom commands for Rush CLI as well.
At the moment of writing, we have commands to run tests, lint checks, clean the artifacts, etc.

```shell
rush clean
rush rebuild
rush test
rust lint
```

You can find them all in [`common/config/rush/command-line.json`](../common/config/rush/command-line.json) file.

_NOTE: if you want to run the whole build pipeline, you can run `rush all` command._

## Running Locally

Some packages contain an `examples` folder where some simple code is located to test the package manually.
E.g. `kittik-deck` package has examples related to building the deck and rendering it, while `kittik-shape-fig-text` package has an example for rendering the Figlet, etc.

All the examples are written in TypeScript and you can easily run them without compiling locally with `ts-node`:

```shell
npx ts-node examples/some-example-to-run.ts
```

## Design

### Overview

Kittik has a simple design.
There are few entities that are combined in one package to handle them.

All begins with a shape.
**Shape** is an entity that knows how to render itself on the canvas.
You give it render options, how the specific shape must look like, and it will render itself on the canvas when told so.

**Animation** know how to animate properties on objects.
You give it a shape you want to animate and animation will start updating its properties regard to options you gave.
While its happening, animation also emits a tick event, that can be used as a feedback loop, so you know when to re-render the updated shape.

**Slide** combines everything [_animations_, _shapes_] together and provides builders to build these.
Slide knows about animations it contains as well as what shapes does it have.
It exposes a `render()` method then that can be called to actually render a slide on the canvas.

**Deck** is a compound package for Slide entities.
It exposes a builder for Deck that can be used to build slide entities as many as you want.
When deck is built, you can run it and get controls to switch slides back and forward, exit the presentation mode, etc.

### Shape

Shape is a simple class that holds all the options to render.
Like a text to display, its position on the canvas, width and height, color for background and foreground.
In other words, Shape is an entity that holds geometry of the shape and has a method `render()` that takes these options and render something on canvas.

The canvas itself is a package [terminal-canvas](https://github.com/ghaiklor/terminal-canvas).
It provides a canvas-like API to manipulate the cursor in terminal.
So the simple “Hello, World” shape will look like:

```typescript
import { Shape, ShapeRenderable } from 'kittik-shape-basic';

export class HelloWorld extends Shape implements ShapeRenderable {
  public render (canvas): void {
    canvas.write("Hello, World!");
  }
}
```

### Animation

Since shapes are simple objects of geometry properties, it is easy to implement animations over them.
Animation works with a property on object itself, setting it to new value each animation tick.

For this to happen, basic animation class has a built-in helper `animateProperty()`.
It takes a configuration for how exactly you want to animate property and what the property.
Then, it calculates new value for each time frame and sets it directly to the shape, emitting the `tick` event.

So, the simple animation that will slide the shape over could look like:

```typescript
import { Animation, Animationable } from 'kittik-animation-basic';

export class Slide extends Animation implements Animationable {
  public async animate (shape) {
    return this.animateProperty({ shape, property: 'x', startValue: 0, endValue: 50 });
  }
}
```

### Slide

Slide is an entity that collects all the implementations for all animations and shapes in a single module.
It allows to implement additional types for them and provide more friendly developer experience when building a slide.

So there are three sub-categories in slide: `animations` to hold builder for these alongside with the actual animations, the same for `shapes` and a `slide` itself.

Slide instantiates new animations and shapes based on input configuration.
So it takes JSON declaration or object, iterates over it and creates animations and shapes instances accordingly to configuration.
This is also can be achieved by builders provided.
As a result, slide holds a collection of shapes and animations ready to render or animate.

### Deck

Deck is the last one in the chain.
It provides controls to the user and handles a compound of slides, allowing to switch them interactively, enter and exit the presentation mode.

To achieve this, it just takes an input configuration for slides as an array and passes it to Slide constructors.
It stores the result in an array where index is the current slide to render.
We can achieve the same with a Deck builder provided as well.
