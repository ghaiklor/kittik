import { AnimationBuilder, ShapeBuilder } from '../src/Deck';
import { Canvas } from 'terminal-canvas';
import { DeckBuilder } from '../src/DeckBuilder';
import { Slide } from 'kittik-slide';

describe('deck builder', () => {
  it('should properly create deck using DeckBuilder', () => {
    expect.hasAssertions();

    const canvas = Canvas.create();
    const resetSpy = jest.spyOn(canvas, 'reset').mockReturnThis();

    const PREDEFINED_SHAPES = { 'Test Shape': ShapeBuilder.start('Text').end() };
    const PREDEFINED_ANIMATIONS = { 'Test Animation': AnimationBuilder.start('Focus').end() };
    const deck = DeckBuilder
      .start(PREDEFINED_SHAPES, PREDEFINED_ANIMATIONS)
      .withCanvas(canvas)
      .withSlide(
        (builder) => builder
          .withName('Slide #1')
          .withOrder('Test Shape', ['Test Animation'])
          .end()
      )
      .withSlide(
        (builder) => builder
          .withName('Slide #2')
          .withAnimation('Local Animation', AnimationBuilder.start('Focus').end())
          .withOrder('Test Shape', ['Test Animation', 'Local Animation'])
          .end()
      )
      .end();

    expect(deck.canvas).toBeInstanceOf(Canvas);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const [firstSlide, secondSlide] = deck.slides as [Slide, Slide];

    expect(firstSlide.shapes.size).toBe(1);
    expect(firstSlide.shapes.has('Test Shape')).toBe(true);
    expect(firstSlide.animations.size).toBe(1);
    expect(firstSlide.animations.has('Test Animation')).toBe(true);
    expect(firstSlide.order).toStrictEqual([{
      shape: 'Test Shape',
      animations: ['Test Animation']
    }]);

    expect(secondSlide.shapes.size).toBe(1);
    expect(secondSlide.shapes.has('Test Shape')).toBe(true);
    expect(secondSlide.animations.size).toBe(2);
    expect(secondSlide.animations.has('Test Animation')).toBe(true);
    expect(secondSlide.animations.has('Local Animation')).toBe(true);
    expect(secondSlide.order).toStrictEqual([{
      shape: 'Test Shape',
      animations: ['Test Animation', 'Local Animation']
    }]);

    deck.exit();
    expect(resetSpy).toHaveBeenCalledTimes(1);
  });
});
