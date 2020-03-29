import { Canvas } from 'terminal-canvas';
import { AnimationBuilder, ShapeBuilder, SlideBuilder } from '..';
import { SlideOptions } from 'kittik-animation-slide';
import { FocusOptions } from 'kittik-animation-focus';

const cursor = Canvas.create().reset().hideCursor();

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
      .withOptions({ direction: 'inLeft' } as SlideOptions)
      .end()
  )
  .withAnimation(
    'Focusing',
    AnimationBuilder
      .start('Focus')
      .withDuration(1000)
      .withEasing('inOutSine')
      .withOptions({ direction: 'shakeX', repeat: 3 } as FocusOptions)
      .end()
  )
  .withAnimation(
    'Slide Out To Right',
    AnimationBuilder
      .start('Slide')
      .withDuration(5000)
      .withEasing('outBounce')
      .withOptions({ direction: 'outRight' } as SlideOptions)
      .end()
  )
  .withOrder('Hello, World', ['Slide In From Left', 'Focusing', 'Slide Out To Right'])
  .end()
  .render()
  .finally(() => cursor.reset().showCursor())
  .catch(e => console.error(e));
