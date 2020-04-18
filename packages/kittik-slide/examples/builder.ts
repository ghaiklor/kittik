import { AnimationBuilder, ShapeBuilder, SlideBuilder } from '..';
import { Canvas } from 'terminal-canvas';

const cursor = Canvas
  .create()
  .reset()
  .hideCursor();

SlideBuilder
  .start()
  .withCursor(cursor)
  .withShape(
    'Hello, World',
    ShapeBuilder
      .start('Rectangle')
      .withText('Hello, World!')
      .withBackground('aqua')
      .withForeground('black')
      .withX('center')
      .withY('middle')
      .end()
  )
  .withAnimation(
    'Slide In From Left',
    AnimationBuilder
      .start('Slide')
      .withDuration(5000)
      .withEasing('inBounce')
      .withOptions({ direction: 'inLeft' })
      .end()
  )
  .withAnimation(
    'Focusing',
    AnimationBuilder
      .start('Focus')
      .withDuration(1000)
      .withEasing('inOutSine')
      .withOptions({ direction: 'shakeX', repeat: 3 })
      .end()
  )
  .withAnimation(
    'Slide Out To Right',
    AnimationBuilder
      .start('Slide')
      .withDuration(5000)
      .withEasing('outBounce')
      .withOptions({ direction: 'outRight' })
      .end()
  )
  .withOrder('Hello, World', ['Slide In From Left', 'Focusing', 'Slide Out To Right'])
  .end()
  .render()
  .finally(() => cursor.reset().showCursor())
  .catch((error) => console.error(error));
