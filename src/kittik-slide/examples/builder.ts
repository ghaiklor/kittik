import { Canvas } from 'terminal-canvas';
import { AnimationBuilder, ShapeBuilder, SlideBuilder } from '..';

const cursor = Canvas.create().saveScreen().reset().hideCursor();

SlideBuilder
  .start()
  .withCursor(cursor)
  .withShape(
    'Hello, World',
    ShapeBuilder
      .start('Rectangle')
      .withText('Hello, World')
      .withBackground('aqua')
      .withForeground('green')
      .withX('center')
      .withY('middle')
      .end()
  )
  .withShape(
    'Footer',
    ShapeBuilder
      .start('FigText')
      .withText('kittik (c) ghaiklor')
      .withX('center')
      .withY('bottom')
      .end()
  )
  .withAnimation(
    'Printing',
    AnimationBuilder
      .start('Print')
      .end()
  )
  .withOrder('Hello, World', ['Printing'])
  .withOrder('Footer', ['Printing'])
  .end()
  .render()
  .finally(() => cursor.restoreScreen().showCursor())
  .catch(e => console.error(e));
