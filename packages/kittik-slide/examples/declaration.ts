import { AnimationDeclaration } from '../src/animation/AnimationDeclaration';
import { Canvas } from 'terminal-canvas';
import { ShapeDeclaration } from '../src/shape/ShapeDeclaration';
import { Slide } from '..';
import { SlideOptions } from 'kittik-animation-slide';

const cursor = Canvas
  .create()
  .reset()
  .hideCursor();

const HelloShapeDeclaration: ShapeDeclaration = {
  name: 'Hello',
  type: 'Rectangle',
  options: {
    background: 'aqua',
    foreground: 'black',
    text: 'Hello, World!',
    x: 'center',
    y: 'middle'
  }
};

const PrintAnimationDeclaration: AnimationDeclaration = {
  name: 'Print',
  type: 'Print',
  options: {
    duration: 5000,
    easing: 'inOutCubic'
  }
};

const SlideInLeftAnimationOptions: Partial<SlideOptions> = {
  direction: 'inLeft',
  duration: 5000,
  easing: 'inBounce'
};

const SlideInLeftAnimationDeclaration: AnimationDeclaration = {
  name: 'Slide In Left',
  type: 'Slide',
  options: SlideInLeftAnimationOptions
};

const SlideOutRightAnimationOptions: Partial<SlideOptions> = {
  direction: 'outRight',
  duration: 5000,
  easing: 'outBounce'
};

const SlideOutRightAnimationDeclaration: AnimationDeclaration = {
  name: 'Slide Out Right',
  type: 'Slide',
  options: SlideOutRightAnimationOptions
};

const slide = new Slide(cursor, {
  name: 'Hello, World!',
  shapes: [HelloShapeDeclaration],
  animations: [PrintAnimationDeclaration, SlideInLeftAnimationDeclaration, SlideOutRightAnimationDeclaration],
  order: [{
    shape: 'Hello',
    animations: [
      'Slide In Left',
      'Print',
      'Slide Out Right'
    ]
  }]
});

slide
  .render()
  .finally(() => cursor.reset().showCursor())
  .catch((error) => console.error(error));
