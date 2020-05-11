import { Deck, DeckDeclaration } from '../src/Deck';
import { Shape, ShapeRenderable } from 'kittik-shape-basic';
import { Animationable } from 'kittik-animation-basic';
import { Canvas } from 'terminal-canvas';
import { Print } from 'kittik-animation-print';
import { Slide } from 'kittik-slide';

const DECK_DECLARATION: DeckDeclaration = {
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

    const canvas = Canvas.create();
    const deck = new Deck(DECK_DECLARATION, canvas);
    const renderSpy = jest.spyOn(deck, 'render').mockResolvedValue(true);
    const resetSpy = jest.spyOn(canvas, 'reset').mockReturnThis();

    await deck.nextSlide();
    process.stdin.emit('keypress', 'p');

    expect(renderSpy).toHaveBeenCalledTimes(2);
    expect(renderSpy).toHaveBeenCalledWith(1);
    expect(renderSpy).toHaveBeenCalledWith(0);

    deck.exit();
    expect(resetSpy).toHaveBeenCalledTimes(1);
  });

  it('should properly handle the key press for next slide', () => {
    expect.hasAssertions();

    const canvas = Canvas.create();
    const deck = new Deck(DECK_DECLARATION, canvas);
    const renderSpy = jest.spyOn(deck, 'render').mockResolvedValue(true);
    const resetSpy = jest.spyOn(canvas, 'reset').mockReturnThis();

    process.stdin.emit('keypress', 'n');

    expect(renderSpy).toHaveBeenCalledTimes(1);
    expect(renderSpy).toHaveBeenCalledWith(1);

    deck.exit();
    expect(resetSpy).toHaveBeenCalledTimes(1);
  });

  it('should properly handle the key press for exit', () => {
    expect.hasAssertions();

    const canvas = Canvas.create();
    const deck = new Deck(DECK_DECLARATION, canvas);
    const exitSpy = jest.spyOn(deck, 'exit').mockImplementationOnce(() => true);
    const resetSpy = jest.spyOn(canvas, 'reset').mockReturnThis();

    process.stdin.emit('keypress', 'q');

    expect(exitSpy).toHaveBeenCalledTimes(1);

    deck.exit();
    expect(resetSpy).toHaveBeenCalledTimes(1);
  });

  it('should do nothing when unknown key has been pressed', () => {
    expect.hasAssertions();

    const canvas = Canvas.create();
    const deck = new Deck(DECK_DECLARATION, canvas);
    const resetSpy = jest.spyOn(canvas, 'reset').mockReturnThis();

    expect(process.stdin.emit('keypress', '?')).toBe(true);

    deck.exit();
    expect(resetSpy).toHaveBeenCalledTimes(1);
  });

  it('should properly render next and previous slides', async () => {
    expect.hasAssertions();

    const canvas = Canvas.create();
    const deck = new Deck(DECK_DECLARATION, canvas);
    const renderSpy = jest.spyOn(deck, 'render').mockResolvedValue(true);
    const resetSpy = jest.spyOn(canvas, 'reset').mockReturnThis();

    await deck.nextSlide();
    await deck.previousSlide();

    expect(renderSpy).toHaveBeenCalledTimes(2);
    expect(renderSpy).toHaveBeenCalledWith(1);
    expect(renderSpy).toHaveBeenCalledWith(0);

    deck.exit();
    expect(resetSpy).toHaveBeenCalledTimes(1);
  });

  it('should properly render slides without custom canvas', async () => {
    expect.hasAssertions();

    const canvas = Canvas.create();
    const deck = new Deck({ ...DECK_DECLARATION }, canvas);
    const renderSpy = jest.spyOn(deck, 'render').mockResolvedValue(true);
    const resetSpy = jest.spyOn(canvas, 'reset').mockReturnThis();

    await deck.nextSlide();
    await deck.previousSlide();

    expect(renderSpy).toHaveBeenCalledTimes(2);
    expect(renderSpy).toHaveBeenCalledWith(1);
    expect(renderSpy).toHaveBeenCalledWith(0);

    deck.exit();
    expect(resetSpy).toHaveBeenCalledTimes(1);
  });

  it('should properly render minimal slide without global shapes/animations', async () => {
    expect.hasAssertions();

    const canvas = Canvas.create();
    const deck = new Deck({
      slides: [
        {
          name: 'Test',
          shapes: [],
          order: []
        },
        {
          name: 'Test 2',
          shapes: [],
          order: [],
          animations: []
        }
      ]
    }, canvas);

    const renderSpy = jest.spyOn(deck, 'render').mockResolvedValue(true);
    const resetSpy = jest.spyOn(canvas, 'reset').mockReturnThis();

    await deck.nextSlide();
    await deck.previousSlide();

    expect(renderSpy).toHaveBeenCalledTimes(2);
    expect(renderSpy).toHaveBeenCalledWith(1);
    expect(renderSpy).toHaveBeenCalledWith(0);

    deck.exit();
    expect(resetSpy).toHaveBeenCalledTimes(1);
  });

  it('should not call slide renderer many times if slide is already rendering', () => {
    expect.hasAssertions();

    const canvas = Canvas.create();
    const deck = new Deck({
      slides: [{ name: 'Test', shapes: [], order: [] }]
    }, canvas);

    // Though, slides is a private property, I need to access it anyway in sake of the tests
    // This is done to test if slides render() behaves as expected
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const renderSpy = jest.spyOn(deck.slides[0], 'render');
    const resetSpy = jest.spyOn(canvas, 'reset').mockReturnThis();

    deck.render(); // eslint-disable-line @typescript-eslint/no-floating-promises
    deck.render(); // eslint-disable-line @typescript-eslint/no-floating-promises
    deck.render(); // eslint-disable-line @typescript-eslint/no-floating-promises
    deck.render(); // eslint-disable-line @typescript-eslint/no-floating-promises

    expect(renderSpy).toHaveBeenCalledTimes(1);

    deck.exit();
    expect(resetSpy).toHaveBeenCalledTimes(0);
  });

  it('should properly add a shape to all the slides in the deck', () => {
    expect.hasAssertions();

    const canvas = Canvas.create();
    const shape: ShapeRenderable = new Shape();
    const resetSpy = jest.spyOn(canvas, 'reset').mockReturnThis();
    const deck = new Deck({
      slides: [
        {
          name: 'Test',
          shapes: [{ name: 'Shape', type: 'Text' as const, options: {} }],
          order: []
        }
      ]
    }, canvas);

    deck.addShape('Shape 2', shape);

    // I am accessing the private property to check if there is actually a new shape exists
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(deck.slides[0].shapes.size).toBe(2);

    deck.exit();
    expect(resetSpy).toHaveBeenCalledTimes(1);
  });

  it('should properly throw an error if shape already exists in other slides', () => {
    expect.hasAssertions();

    const canvas = Canvas.create();
    const shape: ShapeRenderable = new Shape();
    const resetSpy = jest.spyOn(canvas, 'reset').mockReturnThis();
    const deck = new Deck({
      slides: [
        {
          name: 'Test',
          shapes: [{ name: 'Shape', type: 'Text' as const, options: {} }],
          order: []
        }
      ]
    }, canvas);

    expect(() => deck.addShape('Shape', shape)).toThrow(
      'You are trying to add a shape with the name "Shape" into the deck. ' +
      'When adding a shape into the deck, actually it adds the shape to all the slides in the deck. ' +
      'That is why we can not add the shape "Shape" to the deck, some of the slides already have it. ' +
      'Remove the shape from the slides [Test] or rename the shape.'
    );

    deck.exit();
    expect(resetSpy).toHaveBeenCalledTimes(1);
  });

  it('should properly add an animation to all the slides in the deck', () => {
    expect.hasAssertions();

    const canvas = Canvas.create();
    const animation: Animationable = new Print();
    const resetSpy = jest.spyOn(canvas, 'reset').mockReturnThis();
    const deck = new Deck({
      slides: [
        {
          name: 'Test',
          shapes: [],
          order: [],
          animations: [{ name: 'Animation', type: 'Print' as const, options: {} }]
        }
      ]
    }, canvas);

    deck.addAnimation('Animation 2', animation);

    // I am accessing the private property to check if there is actually a new animation exists
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(deck.slides[0].animations.size).toBe(2);

    deck.exit();
    expect(resetSpy).toHaveBeenCalledTimes(1);
  });

  it('should properly throw an error if animation already exists in other slides', () => {
    expect.hasAssertions();

    const canvas = Canvas.create();
    const animation: Animationable = new Print();
    const resetSpy = jest.spyOn(canvas, 'reset').mockReturnThis();
    const deck = new Deck({
      slides: [
        {
          name: 'Test',
          shapes: [],
          order: [],
          animations: [{ name: 'Animation', type: 'Print' as const, options: {} }]
        }
      ]
    }, canvas);

    expect(() => deck.addAnimation('Animation', animation)).toThrow(
      'You are trying to add an animation with the name "Animation" into the deck. ' +
      'When adding an animation into the deck, actually it adds the animation to all the slides in the deck. ' +
      'That is why we can not add the animation "Animation" to the deck, some of the slides already have it. ' +
      'Remove the animations from the slides [Test] or rename the animation.'
    );

    deck.exit();
    expect(resetSpy).toHaveBeenCalledTimes(1);
  });

  it('should properly throw an error if name of the slide already exists in the deck', () => {
    expect.hasAssertions();

    const canvas = Canvas.create();
    const resetSpy = jest.spyOn(canvas, 'reset').mockReturnThis();
    const deck = new Deck({
      slides: [
        {
          name: 'Slide #1',
          shapes: [],
          order: []
        }
      ]
    }, canvas);

    const slide = new Slide();
    slide.name = 'Slide #1';

    expect(() => deck.addSlide(slide)).toThrow(
      'You are trying to add a slide with the name "Slide #1" into the deck. ' +
      'But the slide with the same name already exists there. ' +
      'Remove the slide "Slide #1" from the deck or rename the slide you tried to add.'
    );

    deck.exit();
    expect(resetSpy).toHaveBeenCalledTimes(1);
  });
});
