import { DeckBuilder, ShapeBuilder } from '../src/main/kittik';

DeckBuilder
  .start()
  .withSlide(
    (builder) => builder
      .withShape(
        'Name of the Shape to reference',
        ShapeBuilder
          .start('Rectangle')
          .withBackground('aqua')
          .withForeground('green')
          .withHeight('40%')
          .withText('Hello, World!')
          .withWidth('80%')
          .withX('center')
          .withY('middle')
          .end()
      )
      .withOrder('Name of the Shape to reference')
      .end()
  )
  .end()
  .render()
  .catch((error) => console.error(error));
