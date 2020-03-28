import { Canvas } from 'terminal-canvas';
import { ShapeBuilder, AnimationBuilder } from '../src/slide/Slide';
import { SlideBuilder } from '../src/slide/SlideBuilder';

describe('SlideBuilder', () => {
  it('Should properly instantiate slide via builder', () => {
    const slide = SlideBuilder
      .start()
      .withCursor(Canvas.create())
      .withShape(
        'Hello, World',
        ShapeBuilder
          .start('Text')
          .withText('Hello, World')
          .withBackground('white')
          .withForeground('black')
          .end()
      )
      .withAnimation(
        'Print',
        AnimationBuilder
          .start('Print')
          .withDuration(2000)
          .end()
      )
      .withOrder('Hello, World', ['Print'])
      .end();

    expect(slide.shapes.size).toBe(1);
    expect(slide.shapes.get('Hello, World')?.toObject()).toEqual({
      type: 'Text',
      options: {
        align: 'center',
        background: 'white',
        blink: false,
        bold: false,
        dim: false,
        foreground: 'black',
        height: '25%',
        hidden: false,
        reverse: false,
        text: 'Hello, World',
        underlined: false,
        width: '50%',
        x: 'left',
        y: 'top'
      }
    });

    expect(slide.animations.size).toBe(1);
    expect(slide.animations.get('Print')?.toObject()).toEqual({
      type: 'Print',
      options: {
        duration: 2000,
        easing: 'outQuad'
      }
    });

    expect(slide.order).toEqual([{
      shape: 'Hello, World',
      animations: ['Print']
    }]);
  });
});
