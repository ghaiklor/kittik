import { Canvas } from 'terminal-canvas';
import { Deck, DeckDeclaration } from '../src/Deck';

const DECK_DECLARATION: DeckDeclaration = {
  cursor: Canvas.create(),
  shapes: [
    {
      name: 'Global Shape',
      type: 'Text',
      options: {
        text: 'Hello, World!'
      }
    }
  ],
  animations: [
    {
      name: 'Global Animation',
      type: 'Print',
      options: {
        duration: 1
      }
    }
  ],
  slides: [
    {
      shapes: [],
      order: [{
        shape: 'Global Shape',
        animations: [
          'Global Animation'
        ]
      }]
    },
    {
      shapes: [],
      order: [{
        shape: 'Global Shape',
        animations: [
          'Global Animation'
        ]
      }]
    }
  ]
};

describe('Deck', () => {
  it('Should properly render next and previous slides', async () => {
    const deck = new Deck(DECK_DECLARATION);
    const renderSpy = jest.spyOn(deck, 'renderSlide').mockResolvedValue();

    await deck.nextSlide();
    await deck.nextSlide();
    await deck.previousSlide();
    await deck.previousSlide();
    deck.exit();

    expect(renderSpy).toBeCalledTimes(2);
    expect(renderSpy).toBeCalledWith(0);
    expect(renderSpy).toBeCalledWith(1);
  });
});
