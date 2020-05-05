import { AnimationBuilder, DeckBuilder, ShapeBuilder, SlideBuilder } from '..';
import { Canvas } from 'terminal-canvas';

const canvas = Canvas
  .create()
  .reset()
  .hideCursor();

DeckBuilder
  .start()
  .withCanvas(canvas)
  .withSlide(
    SlideBuilder
      .start()
      .withName('Slide #1')
      .withShape(
        'Shape on slide #1',
        ShapeBuilder
          .start('Rectangle')
          .withText('Shape Here!')
          .withY('bottom')
          .withX('right')
          .withBackground('white')
          .withForeground('black')
          .end()
      )
      .withAnimation(
        'Animation on slide #1',
        AnimationBuilder
          .start('Slide')
          .end()
      )
      .withOrder('Shape on slide #1', ['Animation on slide #1'])
      .end()
  )
  .withSlide(
    SlideBuilder
      .start()
      .withName('Slide #2')
      .withShape(
        'Shape on slide #2',
        ShapeBuilder
          .start('Text')
          .withText('Another Shape')
          .end()
      )
      .withAnimation(
        'Animation on slide #2',
        AnimationBuilder
          .start('Print')
          .withDuration(5000)
          .end()
      )
      .withOrder('Shape on slide #2', ['Animation on slide #2'])
      .end()
  )
  .end()
  .render()
  .catch((error) => console.error(error));
