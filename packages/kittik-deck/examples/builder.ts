import { AnimationBuilder, DeckBuilder, ShapeBuilder } from '..';
import { Canvas } from 'terminal-canvas';

const canvas = Canvas
  .create()
  .reset()
  .hideCursor();

const PREDEFINED_SHAPES = {
  'Predefined Shape Example': ShapeBuilder
    .start('Rectangle')
    .withX('left')
    .withY('middle')
    .withBackground('aqua')
    .withForeground('blue')
    .withText('Hello from a predefined shape')
    .end()
};

const PREDEFINED_ANIMATIONS = {
  'Predefined Animation Example': AnimationBuilder
    .start('Slide')
    .withOptions({ direction: 'inLeft' })
    .end()
};

DeckBuilder
  .start(PREDEFINED_SHAPES, PREDEFINED_ANIMATIONS)
  .withCanvas(canvas)
  .withSlide(
    (builder) => builder
      .withName('Slide #1')
      .withShape(
        'Shape on slide #1',
        ShapeBuilder
          .start('Rectangle')
          .withText('Shape Here!')
          .withY('middle')
          .withX('right')
          .withBackground('white')
          .withForeground('black')
          .end()
      )
      .withAnimation(
        'Animation on slide #1',
        AnimationBuilder
          .start('Slide')
          .withOptions({ direction: 'inRight' })
          .end()
      )
      .withOrder('Shape on slide #1', ['Animation on slide #1'])
      .withOrder('Predefined Shape Example', ['Predefined Animation Example'])
      .end()
  )
  .withSlide(
    (builder) => builder
      .withName('Slide #2')
      .withShape(
        'Shape on slide #2',
        ShapeBuilder
          .start('FigText')
          .withX('right')
          .withY('middle')
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
      .withOrder('Predefined Shape Example', ['Predefined Animation Example'])
      .withOrder('Shape on slide #2', ['Animation on slide #2'])
      .end()
  )
  .end()
  .on('exit', () => canvas.reset().showCursor())
  .render()
  .catch((error) => console.error(error));
