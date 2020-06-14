# kittik

![Travis (.com) branch](https://img.shields.io/travis/com/ghaiklor/kittik/master?style=flat-square)
![Codecov](https://img.shields.io/codecov/c/github/ghaiklor/kittik?style=flat-square)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ghaiklor/kittik?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/ghaiklor/kittik?style=flat-square)

[![GitHub followers](https://img.shields.io/github/followers/ghaiklor?label=Follow&style=social)](https://github.com/ghaiklor)
[![Twitter Follow](https://img.shields.io/twitter/follow/ghaiklor?label=Follow&style=social)](https://twitter.com/ghaiklor)

Do you have a conference soon?
Are you tired of presenting slides in Keynote, PowerPoint or any HTML based tool?
Why not to create and present slides in the terminal using ASCII only!

_NOTE: I’m not arguing that kittik is better than X tool designed for presentations. I’m saying that we can use it for fun in small topics or conferences._

## Why

I was always in love with the terminal and what we can do with it, and still is, actually.
Someday, I thought, why not to be a little creative and present speech on the conference in the terminal by using ASCII characters only?
I tried and turned out that it is a hard task.
That is why, I decided, we need a tooling for it!

That is how a name was born, _Keynote In the Terminal_ (KIT) and a palindrome for KIT - KITTIK.

## Features

- Unique shapes rendered via ASCII characters only, e.g. rectangle, ASCII art (_aka figlet_), code with syntax highlighting and more.
- Customize how shapes must look like in the terminal, their background and foreground color, positioning in the terminal, width and height.
- Animate every shape you want. YES! Kittik supports animations and still uses ASCII only. Create a rectangle and slide it in from the left side or make a text printing on the screen.
- Everything in kittik comes with a builder. No more typing JSON, YAML or objects and guessing keys.
- Developer Experience is a key feature. Everything in kittik is typed, even your custom names will be typed and suggested to you through autocompletion.
- Presenter mode. Run your slides and manage them with a keyboard (_N - next slide, P - previous slide, Q - quit_).

## Demo

| How to convert an RGB to HEX |
| ---------------------------- |
| ![demo.ts][demo.ts]          |

## Getting Started

All you need is a single dependency - `kittik`.

```shell
npm install kittik
```

The package provides everything you need to create your own slides - builders.
There are builders for shapes, animations, slides and deck.
Start with a builder for Deck.

```typescript
import { DeckBuilder } from "kittik";

DeckBuilder
  .start()
  .end()
  .render();
```

Every builder has a `start()` and `end()` methods.
So it is easier to write them down at first place before configuring, that way you will not forget about `end()`.
Although, type check does not allow this situation.

Every deck comprises your slides.
To add more slides, just call `withSlide()` method.
It accepts a function where the slide builder will be passed by the deck.

_NOTE: the builder is already started in `withSlide()`, so you need to end it only._

```typescript
import { DeckBuilder } from "kittik";

DeckBuilder
  .start()
  .withSlide((slide) => slide.end())
  .end()
  .render();
```

Now, slide builder provides two essential methods `withAnimation()` and `withShape()`.
`withAnimation()` accepts a name for your animation (_for further references_) and the animation that must be built through animation builder.
The same applies to `withShape()`.
It accepts a name, and a shape built with shape builder.

That way you can specify animations and shapes for your slide.
But kittik does not know in what order to render those shapes and what animations animate what shape.
To handle this situation there is `withOrder()` method.
It accepts a name of the shape you defined before and an array of animation names you want to use.

```typescript
import { DeckBuilder, ShapeBuilder } from "kittik";

DeckBuilder
  .start()
  .withSlide((slide) =>
    slide
      .withShape(
        "Hello, World!",
        ShapeBuilder.start("Text").withText("Hello, World!").end()
      )
      .withOrder("Hello, World!")
      .end()
  )
  .end()
  .render();
```

Congratulations, you just created a simple Deck with one slide and “Hello, World” in it.
Add more slides, animate them and bring them to live.

## More Examples

You can find more examples in [`examples`](./examples) folder.

## FAQ

- It is too hard to create a presentation even with builders and auto-completion

True, if you want to create a lot of slides, it will be not an exceptional experience in declaring them through builders.
That is why there is work in progress (_only in my mind_) for the concept of themes and parsers for different input, e.g. Markdown.

- Have questions?

Ask them in [issues](https://github.com/ghaiklor/kittik/issues), I’ll be glad to answer them.

## License

[MIT](./LICENSE)

[demo.ts]: https://user-images.githubusercontent.com/3625244/84595639-aca86800-ae61-11ea-93e3-4dd6ed7e9588.gif
