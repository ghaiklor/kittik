import { AnimationDeclaration } from '../src/animation/AnimationDeclaration';
import { AnimationObject } from 'kittik-animation-basic';
import { Canvas } from 'terminal-canvas';
import { OrderDeclaration } from '../src/slide/OrderDeclaration';
import { ShapeDeclaration } from '../src/shape/ShapeDeclaration';
import { Slide } from '../src/slide/Slide';
import { SlideDeclaration } from '../src/slide/SlideDeclaration';
import { TextObject } from 'kittik-shape-text';

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
  it('Should properly render the whole slide', async () => {
    const cursor = new Canvas();
    const slide = Slide.create(cursor, SLIDE_DECLARATION);
    const writeSpy = jest.spyOn(cursor, 'write').mockReturnThis();
    const eraseScreenSpy = jest.spyOn(cursor, 'eraseScreen').mockReturnThis();
    const flushSpy = jest.spyOn(cursor, 'flush').mockReturnThis();

    await slide.render();

    expect(writeSpy.mock.calls.length).toBeGreaterThanOrEqual(3);
    expect(eraseScreenSpy.mock.calls.length).toBeGreaterThanOrEqual(3);
    expect(flushSpy.mock.calls.length).toBeGreaterThanOrEqual(3);
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
});
