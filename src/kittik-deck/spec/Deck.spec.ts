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
  it('Should properly handle the key press for previous slide', async () => {
    const deck = new Deck(DECK_DECLARATION);
    const renderSpy = jest.spyOn(deck, 'renderSlide').mockResolvedValue();

    await deck.nextSlide();
    process.stdin.emit('keypress', 'p');

    expect(renderSpy).toBeCalledTimes(2);
    expect(renderSpy).toBeCalledWith(1);
    expect(renderSpy).toBeCalledWith(0);
  });

  it('Should properly handle the key press for next slide', async () => {
    const deck = new Deck(DECK_DECLARATION);
    const renderSpy = jest.spyOn(deck, 'renderSlide').mockResolvedValue();

    await deck.previousSlide();
    process.stdin.emit('keypress', 'n');

    expect(renderSpy).toBeCalledTimes(1);
    expect(renderSpy).toBeCalledWith(1);
  });

  it('Should properly handle the key press for exit', () => {
    const deck = new Deck(DECK_DECLARATION);
    const exitSpy = jest.spyOn(deck, 'exit');

    process.stdin.emit('keypress', 'q');

    expect(exitSpy).toBeCalledTimes(1);
  });

  it('Should properly render next and previous slides', async () => {
    const deck = new Deck(DECK_DECLARATION);
    const renderSpy = jest.spyOn(deck, 'renderSlide').mockResolvedValue();

    await deck.nextSlide();
    await deck.nextSlide();
    await deck.previousSlide();
    await deck.previousSlide();

    expect(renderSpy).toBeCalledTimes(2);
    expect(renderSpy).toBeCalledWith(0);
    expect(renderSpy).toBeCalledWith(1);
  });

  it('Should properly render slides without custom cursor', async () => {
    const deck = new Deck({ ...DECK_DECLARATION, cursor: undefined });
    const renderSpy = jest.spyOn(deck, 'renderSlide').mockResolvedValue();

    await deck.nextSlide();
    await deck.nextSlide();
    await deck.previousSlide();
    await deck.previousSlide();

    expect(renderSpy).toBeCalledTimes(2);
    expect(renderSpy).toBeCalledWith(0);
    expect(renderSpy).toBeCalledWith(1);
  });

  it('Should properly render minimal slide without global shapes/animations', async () => {
    const deck = new Deck({ slides: [{ shapes: [], order: [] }, { shapes: [], order: [], animations: [] }] });
    const renderSpy = jest.spyOn(deck, 'renderSlide').mockResolvedValue();

    await deck.nextSlide();
    await deck.nextSlide();
    await deck.previousSlide();
    await deck.previousSlide();

    expect(renderSpy).toBeCalledTimes(2);
    expect(renderSpy).toBeCalledWith(0);
    expect(renderSpy).toBeCalledWith(1);
  });

  it('Should not call slide renderer many times if slide is already rendering', () => {
    const deck = new Deck({ slides: [{ shapes: [], order: [] }] });

    // Though, slides is a private property, I need to access it anyway in sake of the tests
    // This is done to test if slides render() behaves as expected
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    const renderSpy = jest.spyOn(deck.slides[0], 'render');

    deck.renderSlide(); // eslint-disable-line @typescript-eslint/no-floating-promises
    deck.renderSlide(); // eslint-disable-line @typescript-eslint/no-floating-promises
    deck.renderSlide(); // eslint-disable-line @typescript-eslint/no-floating-promises
    deck.renderSlide(); // eslint-disable-line @typescript-eslint/no-floating-promises
    deck.exit();

    expect(renderSpy).toBeCalledTimes(1);
  });
});
