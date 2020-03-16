import { AnimationDeclaration } from '../src/animation/AnimationDeclaration';
import { Canvas } from 'terminal-canvas';
import { ShapeDeclaration } from '../src/shape/ShapeDeclaration';
import { Slide } from '..';
import { SlideOptions } from 'kittik-animation-slide';

const cursor = Canvas.create().reset().hideCursor();

const HelloShapeDeclaration: ShapeDeclaration = {
  name: 'Hello',
  type: 'Rectangle',
  options: {
    x: 'center',
    y: 'middle',
    background: 'aqua',
    foreground: 'black',
    text: 'Hello, World!'
  }
};

const PrintAnimationDeclaration: AnimationDeclaration = {
  name: 'Print',
  type: 'Print',
  options: {
    duration: 3000,
    easing: 'outBounce'
  }
};

const SlideOutDownAnimationOptions: Partial<SlideOptions> = {
  direction: 'outDown',
  easing: 'inBounce'
};

const SlideOutDownAnimationDeclaration: AnimationDeclaration = {
  name: 'Slide Out Down',
  type: 'Slide',
  options: SlideOutDownAnimationOptions
};

const slide = new Slide(cursor, {
  shapes: [HelloShapeDeclaration],
  animations: [PrintAnimationDeclaration, SlideOutDownAnimationDeclaration],
  order: [{
    shape: 'Hello',
    animations: [
      'Print',
      'Slide Out Down'
    ]
  }]
});

slide.render().then(() => cursor.showCursor()).catch(e => console.error(e));
