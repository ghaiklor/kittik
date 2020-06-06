import { DeckBuilder, ShapeBuilder } from '../src/main/kittik';

DeckBuilder
  .start()
  .withSlide(
    (builder) => builder
      .withShape(
        'Hello, World',
        ShapeBuilder
          .start('Text')
          .withText('Hello, World')
          .end()
      )
      .withOrder('Hello, World')
      .end()
  )
  .end()
  .render()
  .catch((error) => console.error(error));
