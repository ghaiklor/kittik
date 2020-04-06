import { Text, TextObject } from 'kittik-shape-text';
import { AnimationDeclaration } from '../src/animation/AnimationDeclaration';
import { AnimationObject } from 'kittik-animation-basic';
import { Canvas } from 'terminal-canvas';
import { OrderDeclaration } from '../src/slide/OrderDeclaration';
import { Print } from 'kittik-animation-print';
import { ShapeDeclaration } from '../src/shape/ShapeDeclaration';
import { Slide } from '../src/slide/Slide';
import { SlideDeclaration } from '../src/slide/SlideDeclaration';

const SLIDE_DECLARATION: SlideDeclaration = {
  name: 'Testing Slide',
  shapes: [{
    name: 'Hello',
    type: 'Text',
    options: {
      text: 'Hello, World!'
    }
  }],
  animations: [{
    name: 'Print',
    type: 'Print',
    options: {
      duration: 1
    }
  }],
  order: [{
    shape: 'Hello',
    animations: [
      'Print',
      'Print'
    ]
  }]
};

const SERIALIZED_TEXT_DECLARATION: ShapeDeclaration & TextObject = {
  name: 'Hello',
  type: 'Text',
  options: {
    align: 'center',
    background: 'none',
    blink: false,
    bold: false,
    dim: false,
    foreground: 'none',
    height: '25%',
    hidden: false,
    reverse: false,
    text: 'Hello, World!',
    underlined: false,
    width: '50%',
    x: 'left',
    y: 'top'
  }
};

const SERIALIZED_ANIMATION_DECLARATION: AnimationDeclaration & AnimationObject = {
  name: 'Print',
  type: 'Print',
  options: {
    duration: 1,
    easing: 'outQuad'
  }
};

const SERIALIZED_ORDER_DECLARATION: OrderDeclaration = {
  shape: 'Hello',
  animations: [
    'Print',
    'Print'
  ]
};

const SERIALIZED_SLIDE_DECLARATION: SlideDeclaration = {
  name: 'Testing Slide',
  shapes: [SERIALIZED_TEXT_DECLARATION],
  animations: [SERIALIZED_ANIMATION_DECLARATION],
  order: [SERIALIZED_ORDER_DECLARATION]
};

describe('slide', () => {
  it('should properly throw an error if shape type is unknown', () => {
    expect.hasAssertions();

    const cursor = new Canvas();

    expect(
      () => new Slide(
        cursor, {
          name: 'Test',
          shapes: [{ name: 'Test', type: 'unknown' }],
          order: [{ shape: 'Test' }]
        }
      )
    ).toThrow('Shape "Test" (unknown) is unknown for me, maybe you made a typo?');
  });

  it('should properly throw an error if animation type is unknown', () => {
    expect.hasAssertions();

    const cursor = new Canvas();
    expect(
      () => new Slide(
        cursor, {
          name: 'Test',
          shapes: [{ name: 'Test', type: 'Text' }],
          animations: [{ name: 'Test', type: 'unknown' }],
          order: [{ shape: 'Test' }]
        }
      )
    ).toThrow('Animation "Test" (unknown) is unknown for me, maybe you made a typo?');
  });

  it('should properly throw an error if trying to use shape name in ordering that does not exist', async () => {
    expect.hasAssertions();

    const cursor = new Canvas();
    const slide = new Slide(cursor, { name: 'Test', shapes: [], order: [{ shape: 'Not Exists' }] });

    await expect(slide.render()).rejects.toThrow(
      'You specified shape "Not Exists" in slide "Test" as part of ordering, ' +
      'but it does not exist in shapes declaration.'
    );
  });

  it('should properly render the whole slide', async () => {
    expect.hasAssertions();

    const cursor = new Canvas();
    const slide = Slide.create(cursor, SLIDE_DECLARATION);
    const writeSpy = jest.spyOn(cursor, 'write').mockReturnThis();
    const eraseScreenSpy = jest.spyOn(cursor, 'eraseScreen').mockReturnThis();
    const flushSpy = jest.spyOn(cursor, 'flush').mockReturnThis();

    expect(await slide.render()).toBeUndefined();

    expect(writeSpy.mock.calls.length).toBeGreaterThanOrEqual(3);
    expect(eraseScreenSpy.mock.calls.length).toBeGreaterThanOrEqual(3);
    expect(flushSpy.mock.calls.length).toBeGreaterThanOrEqual(3);
  });

  it('should render the slide without animations', async () => {
    expect.hasAssertions();

    const cursor = new Canvas();
    const slide = Slide.create(cursor, {
      name: 'Test',
      shapes: [{ name: 'Test', type: 'Text' }],
      order: [{ shape: 'Test' }]
    });

    expect(await slide.render()).toBeUndefined();
  });

  it('should render the slide with unknown animation in ordering', async () => {
    expect.hasAssertions();

    const cursor = new Canvas();
    const slide = Slide.create(cursor, {
      name: 'Test',
      shapes: [{ name: 'Test', type: 'Text' }],
      order: [{ shape: 'Test', animations: ['Not Exists'] }]
    });

    expect(await slide.render()).toBeUndefined();
  });

  it('should properly serialize slide to the object representation', () => {
    expect.hasAssertions();

    const cursor = new Canvas();
    const slide = Slide.create(cursor, SLIDE_DECLARATION);

    expect(slide.toObject()).toStrictEqual(SERIALIZED_SLIDE_DECLARATION);
  });

  it('should properly serialize slide to JSON representation', () => {
    expect.hasAssertions();

    const cursor = new Canvas();
    const slide = Slide.create(cursor, SLIDE_DECLARATION);

    expect(JSON.parse(slide.toJSON())).toStrictEqual(SERIALIZED_SLIDE_DECLARATION);
  });

  it('should properly create slide from object representation', async () => {
    expect.hasAssertions();

    const cursor = new Canvas();
    const slide = Slide.fromObject(SLIDE_DECLARATION, cursor);

    expect(await slide.render()).toBeUndefined();
  });

  it('should properly create slide from json representation', async () => {
    expect.hasAssertions();

    const cursor = new Canvas();
    const slide = Slide.fromJSON(JSON.stringify(SLIDE_DECLARATION), cursor);

    expect(await slide.render()).toBeUndefined();
  });

  it('should properly instantiate an empty slide instance when no declaration nor cursor is passed', () => {
    expect.hasAssertions();

    const slide = new Slide();
    expect(slide.cursor).toBeInstanceOf(Canvas);
    expect(slide.shapes.size).toBe(0);
    expect(slide.animations.size).toBe(0);
    expect(slide.order).toHaveLength(0);
  });

  it('should properly instantiate an empty slide instance when nothing is passed but an empty arrays', () => {
    expect.hasAssertions();

    const slide = new Slide(null, { name: 'Test', order: [], shapes: [] });
    expect(slide.cursor).toBeInstanceOf(Canvas);
    expect(slide.shapes.size).toBe(0);
    expect(slide.animations.size).toBe(0);
    expect(slide.order).toHaveLength(0);
  });

  it('should properly throw an error when trying to add shape that is already added', () => {
    expect.hasAssertions();

    const slide = new Slide(null, { name: 'Test', shapes: [{ name: 'Test', type: 'Text' }], order: [] });
    expect(() => slide.addShape('Test', Text.create())).toThrow('Shape "Test" already exists in slide');
  });

  it('should properly throw an error when trying to add animation that is already added', () => {
    expect.hasAssertions();

    const slide = new Slide(null, {
      name: 'Test',
      shapes: [],
      order: [],
      animations: [{ name: 'Test', type: 'Print' }]
    });

    expect(() => slide.addAnimation('Test', Print.create())).toThrow('Animation "Test" already exists in slide');
  });

  it('should properly throw an error when trying to add ordering for the shape that is already added', () => {
    expect.hasAssertions();

    const slide = new Slide(null, { name: 'Test', shapes: [], order: [{ shape: 'Test' }] });
    expect(() => slide.addOrder('Test')).toThrow(
      'You already have an ordering for shape "Test" in slide "Test"'
    );
  });

  it('should properly add order to the slide', () => {
    expect.hasAssertions();

    const slide = new Slide();
    slide.addOrder('Test');

    expect(slide.order).toHaveLength(1);
    expect(slide.order[0]).toStrictEqual({ animations: [], shape: 'Test' });
  });
});
