import { AnimationDeclaration } from '../src/animation/AnimationDeclaration';
import { Canvas } from 'terminal-canvas';
import { FigTextOptions } from 'kittik-shape-fig-text';
import { ShapeDeclaration } from '../src/shape/ShapeDeclaration';
import { Slide } from '..';
import { SlideOptions } from 'kittik-animation-slide';

const cursor = Canvas.create().reset();

const HelloShapeOptions: Partial<FigTextOptions> = {
  x: 'center',
  y: 'middle',
  text: 'Hello, World',
  font: 'Dr Pepper'
};

const HelloShapeDeclaration: ShapeDeclaration = {
  name: 'Hello',
  type: 'FigText',
  options: HelloShapeOptions
};

const PrintAnimationDeclaration: AnimationDeclaration = {
  name: 'Print',
  type: 'Print',
  options: {
    duration: 5000,
    easing: 'inQuad'
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

slide.render().then(() => true).catch(e => console.error(e));
