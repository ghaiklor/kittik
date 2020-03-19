import { Canvas } from 'terminal-canvas';
import { Deck, DeckDeclaration } from '../src/Deck';

const DECK_DECLARATION: DeckDeclaration = {
  cursor: Canvas.create(),
  shapes: [{
    name: 'Global Shape',
    type: 'Text',
    options: {
      text: 'Hello, World!'
    }
  }],
  animations: [{
    name: 'Global Animation',
    type: 'Print',
    options: {
      duration: 1
    }
  }],
  slides: [{
    shapes: [],
    order: [{
      shape: 'Global Shape',
      animations: [
        'Global Animation'
      ]
    }]
  }]
};

describe.skip('Deck', () => {
  it('Should properly render next slide', async () => {
    const deck = new Deck(DECK_DECLARATION);
    const renderSpy = jest.spyOn(deck, 'renderSlide').mockResolvedValue();

    await deck.nextSlide();
    deck.exit();

    expect(renderSpy).toBeCalledTimes(1);
    expect(renderSpy).toBeCalledWith(0);
  });

  it('Should properly render previous slide', async () => {
    const deck = new Deck(DECK_DECLARATION);
    const renderSpy = jest.spyOn(deck, 'renderSlide').mockResolvedValue();

    await deck.previousSlide();
    deck.exit();

    expect(renderSpy).toBeCalledTimes(1);
    expect(renderSpy).toBeCalledWith(0);
  });
});
