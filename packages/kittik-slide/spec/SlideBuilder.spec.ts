import { AnimationBuilder, ShapeBuilder } from '../src/slide/Slide';
import { Canvas } from 'terminal-canvas';
import { SlideBuilder } from '../src/slide/SlideBuilder';

describe('slide builder', () => {
  it('should properly instantiate slide via builder', () => {
    expect.hasAssertions();

    const slide = SlideBuilder
      .start()
      .withName('Hello, World')
      .withCanvas(Canvas.create())
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

    expect(slide.name).toBe('Hello, World');
    expect(slide.shapes.size).toBe(1);
    expect(slide.shapes.get('Hello, World')?.toObject()).toStrictEqual({
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
    expect(slide.animations.get('Print')?.toObject()).toStrictEqual({
      type: 'Print',
      options: {
        duration: 2000,
        easing: 'outQuad'
      }
    });

    expect(slide.order).toStrictEqual([{
      shape: 'Hello, World',
      animations: ['Print']
    }]);
  });

  it('should properly mix the predefined shapes and animations through start() method', () => {
    expect.hasAssertions();

    const slide = SlideBuilder
      .start(
        { 'Predefined Shape': ShapeBuilder.start('Text').end() },
        { 'Predefined Animation': AnimationBuilder.start('Print').end() }
      )
      .withOrder('Predefined Shape', ['Predefined Animation'])
      .end();

    expect(slide.shapes.size).toBe(1);
    expect(slide.shapes.get('Predefined Shape')).not.toBeUndefined();
    expect(slide.animations.size).toBe(1);
    expect(slide.animations.get('Predefined Animation')).not.toBeUndefined();
    expect(slide.order).toStrictEqual([{
      shape: 'Predefined Shape',
      animations: ['Predefined Animation']
    }]);
  });
});
