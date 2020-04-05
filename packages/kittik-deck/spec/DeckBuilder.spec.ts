import { AnimationBuilder, ShapeBuilder, SlideBuilder } from '../src/Deck';
import { Canvas } from 'terminal-canvas';
import { DeckBuilder } from '../src/DeckBuilder';

describe('deck builder', () => {
  it('should properly create deck using DeckBuilder', () => {
    expect.hasAssertions();

    const deck = DeckBuilder
      .start()
      .withCursor(Canvas.create())
      .withAnimation(
        'Test Animation',
        AnimationBuilder
          .start('Focus')
          .end()
      )
      .withShape(
        'Test Shape',
        ShapeBuilder
          .start('Text')
          .end()
      )
      .withSlide(
        SlideBuilder
          .start()
          .end()
      )
      .end();

    expect(deck.cursor).toBeInstanceOf(Canvas);

    deck.exit();
  });
});
