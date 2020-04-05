import { Animationable } from 'kittik-animation-basic';
import { Canvas } from 'terminal-canvas';
import { Deck, DeckDeclaration } from '../src/Deck';
import { ShapeRenderable } from 'kittik-shape-basic';

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
      name: 'Global Animation',
      shapes: [],
      order: [{
        shape: 'Global Shape',
        animations: [
          'Global Animation'
        ]
      }]
    },
    {
      name: 'Global Animation 2',
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

describe('deck', () => {
  it('should properly handle the key press for previous slide', async () => {
    expect.hasAssertions();

    const deck = new Deck(DECK_DECLARATION);
    const renderSpy = jest.spyOn(deck, 'renderSlide').mockResolvedValue();

    await deck.nextSlide();
    process.stdin.emit('keypress', 'p');

    expect(renderSpy).toHaveBeenCalledTimes(2);
    expect(renderSpy).toHaveBeenCalledWith(1);
    expect(renderSpy).toHaveBeenCalledWith(0);

    deck.exit();
  });

  it('should properly handle the key press for next slide', async () => {
    expect.hasAssertions();

    const deck = new Deck(DECK_DECLARATION);
    const renderSpy = jest.spyOn(deck, 'renderSlide').mockResolvedValue();

    await deck.previousSlide();
    process.stdin.emit('keypress', 'n');

    expect(renderSpy).toHaveBeenCalledTimes(1);
    expect(renderSpy).toHaveBeenCalledWith(1);

    deck.exit();
  });

  it('should properly handle the key press for exit', () => {
    expect.hasAssertions();

    const deck = new Deck(DECK_DECLARATION);
    const exitSpy = jest.spyOn(deck, 'exit');

    process.stdin.emit('keypress', 'q');

    expect(exitSpy).toHaveBeenCalledTimes(1);

    deck.exit();
  });

  it('should properly render next and previous slides', async () => {
    expect.hasAssertions();

    const deck = new Deck(DECK_DECLARATION);
    const renderSpy = jest.spyOn(deck, 'renderSlide').mockResolvedValue();

    await deck.nextSlide();
    await deck.nextSlide();
    await deck.previousSlide();
    await deck.previousSlide();

    expect(renderSpy).toHaveBeenCalledTimes(2);
    expect(renderSpy).toHaveBeenCalledWith(0);
    expect(renderSpy).toHaveBeenCalledWith(1);

    deck.exit();
  });

  it('should properly render slides without custom cursor', async () => {
    expect.hasAssertions();

    const deck = new Deck({ ...DECK_DECLARATION, cursor: undefined });
    const renderSpy = jest.spyOn(deck, 'renderSlide').mockResolvedValue();

    await deck.nextSlide();
    await deck.nextSlide();
    await deck.previousSlide();
    await deck.previousSlide();

    expect(renderSpy).toHaveBeenCalledTimes(2);
    expect(renderSpy).toHaveBeenCalledWith(0);
    expect(renderSpy).toHaveBeenCalledWith(1);

    deck.exit();
  });

  it('should properly render minimal slide without global shapes/animations', async () => {
    expect.hasAssertions();

    const deck = new Deck({ slides: [{ name: 'Test', shapes: [], order: [] }, { name: 'Test 2', shapes: [], order: [], animations: [] }] });
    const renderSpy = jest.spyOn(deck, 'renderSlide').mockResolvedValue();

    await deck.nextSlide();
    await deck.nextSlide();
    await deck.previousSlide();
    await deck.previousSlide();

    expect(renderSpy).toHaveBeenCalledTimes(2);
    expect(renderSpy).toHaveBeenCalledWith(0);
    expect(renderSpy).toHaveBeenCalledWith(1);

    deck.exit();
  });

  it('should not call slide renderer many times if slide is already rendering', () => {
    expect.hasAssertions();

    const deck = new Deck({ slides: [{ name: 'Test', shapes: [], order: [] }] });

    // Though, slides is a private property, I need to access it anyway in sake of the tests
    // This is done to test if slides render() behaves as expected
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    const renderSpy = jest.spyOn(deck.slides[0], 'render');

    deck.renderSlide(); // eslint-disable-line @typescript-eslint/no-floating-promises
    deck.renderSlide(); // eslint-disable-line @typescript-eslint/no-floating-promises
    deck.renderSlide(); // eslint-disable-line @typescript-eslint/no-floating-promises
    deck.renderSlide(); // eslint-disable-line @typescript-eslint/no-floating-promises

    expect(renderSpy).toHaveBeenCalledTimes(1);

    deck.exit();
  });

  it('should properly add a shape to all the slides in the deck', () => {
    expect.hasAssertions();

    const deck = new Deck({ slides: [{ name: 'Test', shapes: [{ name: 'Shape', type: 'Text' }], order: [] }] });
    const shape = {} as ShapeRenderable;

    deck.addShape('Shape 2', shape);

    // I am accessing the private property to check if there is actually a new shape exists
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    expect(deck.slides[0].shapes.size).toBe(2);

    deck.exit();
  });

  it('should properly throw an error if shape already exists in other slides', () => {
    expect.hasAssertions();

    const deck = new Deck({ slides: [{ name: 'Test', shapes: [{ name: 'Shape', type: 'Text' }], order: [] }] });
    const shape = {} as ShapeRenderable;

    expect(() => deck.addShape('Shape', shape)).toThrow('Slides [Test] already have a shape with the name "Shape"');

    deck.exit();
  });

  it('should properly add an animation to all the slides in the deck', () => {
    expect.hasAssertions();

    const deck = new Deck({ slides: [{ name: 'Test', shapes: [], order: [], animations: [{ name: 'Animation', type: 'Print' }] }] });
    const animation = {} as Animationable;

    deck.addAnimation('Animation 2', animation);

    // I am accessing the private property to check if there is actually a new animation exists
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    expect(deck.slides[0].animations.size).toBe(2);

    deck.exit();
  });

  it('should properly throw an error if animation already exists in other slides', () => {
    expect.hasAssertions();

    const deck = new Deck({ slides: [{ name: 'Test', shapes: [], order: [], animations: [{ name: 'Animation', type: 'Print' }] }] });
    const animation = {} as Animationable;

    expect(() => deck.addAnimation('Animation', animation)).toThrow('Slides [Test] already have an animation with the name "Animation"');

    deck.exit();
  });
});
