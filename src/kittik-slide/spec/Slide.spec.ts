import { AnimationDeclaration } from '../src/animation/AnimationDeclaration';
import { AnimationObject } from 'kittik-animation-basic';
import { Canvas } from 'terminal-canvas';
import { OrderDeclaration } from '../src/slide/OrderDeclaration';
import { ShapeDeclaration } from '../src/shape/ShapeDeclaration';
import { Slide } from '../src/slide/Slide';
import { SlideDeclaration } from '../src/slide/SlideDeclaration';
import { TextObject, Text } from 'kittik-shape-text';
import { Print } from 'kittik-animation-print';

const SLIDE_DECLARATION: SlideDeclaration = {
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
  shapes: [SERIALIZED_TEXT_DECLARATION],
  animations: [SERIALIZED_ANIMATION_DECLARATION],
  order: [SERIALIZED_ORDER_DECLARATION]
};

describe('Core::Slide', () => {
  it('Should properly throw an error if shape type is unknown', () => {
    const cursor = new Canvas();

    expect(() => new Slide(cursor, { shapes: [{ name: 'Test', type: 'unknown' }], order: [{ shape: 'Test' }] }))
      .toThrowError('Shape "Test" (unknown) is unknown for me, maybe you made a typo?');
  });

  it('Should properly throw an error if animation type is unknown', () => {
    const cursor = new Canvas();

    expect(() => new Slide(cursor, { shapes: [{ name: 'Test', type: 'Text' }], animations: [{ name: 'Test', type: 'unknown' }], order: [{ shape: 'Test' }] }))
      .toThrowError('Animation "Test" (unknown) is unknown for me, maybe you made a typo?');
  });

  it('Should properly throw an error if trying to use shape name in ordering that does not exist', async () => {
    const cursor = new Canvas();
    const slide = new Slide(cursor, { shapes: [], order: [{ shape: 'Not Exists' }] });

    await expect(slide.render()).rejects.toThrowError('You specified shape "Not Exists" as part of ordering, but it does not exist in shapes declaration.');
  });

  it('Should properly render the whole slide', async () => {
    const cursor = new Canvas();
    const slide = Slide.create(cursor, SLIDE_DECLARATION);
    const writeSpy = jest.spyOn(cursor, 'write').mockReturnThis();
    const eraseScreenSpy = jest.spyOn(cursor, 'eraseScreen').mockReturnThis();
    const flushSpy = jest.spyOn(cursor, 'flush').mockReturnThis();

    await expect(slide.render()).resolves.toBeUndefined();

    expect(writeSpy.mock.calls.length).toBeGreaterThanOrEqual(3);
    expect(eraseScreenSpy.mock.calls.length).toBeGreaterThanOrEqual(3);
    expect(flushSpy.mock.calls.length).toBeGreaterThanOrEqual(3);
  });

  it('Should render the slide without animations', async () => {
    const cursor = new Canvas();
    const slide = Slide.create(cursor, { shapes: [{ name: 'Test', type: 'Text' }], order: [{ shape: 'Test' }] });

    await expect(slide.render()).resolves.toBeUndefined();
  });

  it('Should render the slide with unknown animation in ordering', async () => {
    const cursor = new Canvas();
    const slide = Slide.create(cursor, { shapes: [{ name: 'Test', type: 'Text' }], order: [{ shape: 'Test', animations: ['Not Exists'] }] });

    await expect(slide.render()).resolves.toBeUndefined();
  });

  it('Should properly serialize slide to the object representation', () => {
    const cursor = new Canvas();
    const slide = Slide.create(cursor, SLIDE_DECLARATION);

    expect(slide.toObject()).toEqual(SERIALIZED_SLIDE_DECLARATION);
  });

  it('Should properly serialize slide to JSON representation', () => {
    const cursor = new Canvas();
    const slide = Slide.create(cursor, SLIDE_DECLARATION);

    expect(JSON.parse(slide.toJSON())).toEqual(SERIALIZED_SLIDE_DECLARATION);
  });

  it('Should properly create slide from object representation', async () => {
    const cursor = new Canvas();
    const slide = Slide.fromObject(SLIDE_DECLARATION, cursor);

    await expect(slide.render()).resolves.toBeUndefined();
  });

  it('Should properly create slide from json representation', async () => {
    const cursor = new Canvas();
    const slide = Slide.fromJSON(JSON.stringify(SLIDE_DECLARATION), cursor);

    await expect(slide.render()).resolves.toBeUndefined();
  });

  it('Should properly instantiate an empty slide instance when no declaration nor cursor is passed', () => {
    const slide = new Slide();

    expect(slide.cursor).toBeInstanceOf(Canvas);
    expect(slide.shapes.size).toBe(0);
    expect(slide.animations.size).toBe(0);
    expect(slide.order.length).toBe(0);
  });

  it('Should properly instantiate an empty slide instance when nothing is passed but an empty arrays', () => {
    const slide = new Slide(undefined, { order: [], shapes: [] });

    expect(slide.cursor).toBeInstanceOf(Canvas);
    expect(slide.shapes.size).toBe(0);
    expect(slide.animations.size).toBe(0);
    expect(slide.order.length).toBe(0);
  });

  it('Should properly throw an error when trying to add shape that is already added', () => {
    const slide = new Slide(undefined, { shapes: [{ name: 'Test', type: 'Text' }], order: [] });

    expect(() => slide.addShape('Test', Text.create(new Canvas()))).toThrowError('Shape "Test" already exists in slide');
  });

  it('Should properly throw an error when trying to add animation that is already added', () => {
    const slide = new Slide(undefined, { shapes: [], order: [], animations: [{ name: 'Test', type: 'Print' }] });

    expect(() => slide.addAnimation('Test', Print.create())).toThrowError('Animation "Test" already exists in slide');
  });

  it('Should properly throw an error when trying to add ordering for the shape that is already added', () => {
    const slide = new Slide(undefined, { shapes: [], order: [{ shape: 'Test' }] });

    expect(() => slide.addOrder('Test')).toThrowError(
      'You already have an ordering for "Test"\n' +
      'Seems like it was defined somewhere before'
    );
  });

  it('Should properly add order to the slide', () => {
    const slide = new Slide();

    slide.addOrder('Test');

    expect(slide.order.length).toBe(1);
    expect(slide.order[0]).toEqual({ shape: 'Test' });
  });
});
