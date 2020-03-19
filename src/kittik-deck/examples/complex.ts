import { Deck } from '..';
import { FigTextOptions } from 'kittik-shape-fig-text';
import { FocusOptions } from 'kittik-animation-focus';
import { SlideOptions } from 'kittik-animation-slide';

const AsciiArtShapeOptions: Partial<FigTextOptions> = {
  text: 'ASCII ART',
  x: 'center',
  y: 'middle',
  font: 'Star Wars'
};

const SlideInAnimationOptions: Partial<SlideOptions> = {
  direction: 'inLeft',
  duration: 2000
};

const FocusAnimationOptions: Partial<FocusOptions> = {
  direction: 'shakeX',
  offset: 3,
  repeat: 1,
  duration: 1000
};

const HelloKittikShapeOptions: Partial<FigTextOptions> = {
  text: 'Hello!\nI am Kittik\n:)',
  font: 'Star Wars',
  x: 'center',
  y: 'middle'
};

const AmazingArtShapeOptions: Partial<FigTextOptions> = {
  text: 'Amazing\n:)',
  font: 'Star Wars',
  x: 'center',
  y: 'middle'
};

const ThanksArtShapeOptions: Partial<FigTextOptions> = {
  text: 'Thanks\n:)',
  font: 'Star Wars',
  x: 'center',
  y: 'middle'
};

new Deck({
  shapes: [{
    name: 'Text',
    type: 'Text',
    options: {
      text: 'Shape: Text',
      x: 'center',
      y: 'middle'
    }
  }, {
    name: 'Rectangle',
    type: 'Rectangle',
    options: {
      text: 'Shape: Rectangle',
      x: 'center',
      y: 'middle',
      width: '50%',
      height: '20%',
      background: 'white',
      foreground: 'black'
    }
  }, {
    name: 'FigText',
    type: 'FigText',
    options: AsciiArtShapeOptions
  }, {
    name: 'Code',
    type: 'Code',
    options: {
      text: 'const sentence = \'You can embed your code here\';\nconsole.log(sentence);',
      x: 'center',
      y: 'middle'
    }
  }],
  animations: [{
    name: 'Print',
    type: 'Print',
    options: {
      duration: 4000
    }
  }, {
    name: 'Slide In',
    type: 'Slide',
    options: SlideInAnimationOptions
  }, {
    name: 'Focus',
    type: 'Focus',
    options: FocusAnimationOptions
  }],
  slides: [{
    shapes: [{
      name: 'Kittik',
      type: 'FigText',
      options: HelloKittikShapeOptions
    }],
    order: [{
      shape: 'Kittik',
      animations: ['Print']
    }]
  }, {
    shapes: [{
      name: 'Demo',
      type: 'Text',
      options: {
        text: 'Let me show you which shapes I can render',
        x: 'center',
        y: 'middle'
      }
    }],
    order: [{
      shape: 'Demo',
      animations: ['Print']
    }]
  }, {
    shapes: [],
    order: [{
      shape: 'Text',
      animations: ['Print']
    }]
  }, {
    shapes: [],
    order: [{
      shape: 'Rectangle',
      animations: ['Slide In', 'Focus']
    }]
  }, {
    shapes: [],
    order: [{
      shape: 'FigText',
      animations: ['Slide In', 'Focus']
    }]
  }, {
    shapes: [],
    order: [{
      shape: 'Code',
      animations: ['Slide In']
    }]
  }, {
    shapes: [{
      name: 'Text',
      type: 'FigText',
      options: AmazingArtShapeOptions
    }],
    order: [{
      shape: 'Text',
      animations: ['Print']
    }]
  }, {
    shapes: [{
      name: 'Text',
      type: 'Text',
      options: {
        text: 'You already saw the animations, that I can render',
        x: 'center',
        y: 'middle'
      }
    }],
    order: [{
      shape: 'Text',
      animations: ['Print']
    }]
  }, {
    shapes: [{
      name: 'Text',
      type: 'Text',
      options: {
        text: 'Also, I have a public API, so you can integrate me in any NodeJS project\nOr, add your own shapes and animations',
        x: 'center',
        y: 'middle'
      }
    }],
    order: [{
      shape: 'Text',
      animations: ['Print']
    }]
  }, {
    shapes: [{
      name: 'Text',
      type: 'Text',
      options: {
        text: 'I think, Kittik is amazing, because it is my pet-project :)',
        x: 'center',
        y: 'middle'
      }
    }],
    order: [{
      shape: 'Text',
      animations: ['Print']
    }]
  }, {
    shapes: [{
      name: 'Text',
      type: 'FigText',
      options: ThanksArtShapeOptions
    }],
    order: [{
      shape: 'Text',
      animations: ['Print']
    }]
  }]
}).renderSlide().catch((e: Error) => console.error(e));
