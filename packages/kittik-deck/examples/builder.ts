import { AnimationBuilder, DeckBuilder, ShapeBuilder, SlideBuilder } from '..';

DeckBuilder
  .start()
  .withSlide(
    SlideBuilder
      .start()
      .withShape(
        'Local Shape',
        ShapeBuilder
          .start('Rectangle')
          .withText('Local Shape Here!')
          .withY('bottom')
          .withX('right')
          .withBackground('white')
          .withForeground('black')
          .end()
      )
      .withAnimation(
        'Local Animation',
        AnimationBuilder
          .start('Slide')
          .end()
      )
      .withOrder('Global Shape', ['Global Animation'])
      .withOrder('Local Shape', ['Local Animation'])
      .end()
  )
  .withShape(
    'Global Shape',
    ShapeBuilder
      .start('FigText')
      .withText('Hello, World!')
      .end()
  )
  .withAnimation(
    'Global Animation',
    AnimationBuilder
      .start('Print')
      .withDuration(5000)
      .end()
  )
  .end()
  .renderSlide()
  .catch((e) => console.error(e));
