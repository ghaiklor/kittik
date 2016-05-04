"use strict";

const Slide = require('../lib/Slide');
const cursor = require('kittik-cursor').create().reset().hideCursor();

Slide.create(cursor, {
  shapes: [{
    name: 'Hello',
    type: 'FigText',
    options: {
      text: 'Hello, Kittik!',
      x: 'center',
      y: 'middle',
      font: 'Star Wars'
    }
  }, {
    name: 'Shape',
    type: 'Rectangle',
    options: {
      text: 'Rectangle example',
      x: 'center',
      y: 'middle',
      width: '50%',
      height: '10%',
      background: 'white',
      foreground: 'black'
    }
  }],
  animations: [{
    name: 'Print',
    type: 'Print',
    options: {
      easing: 'outCubic',
      duration: 6000
    }
  }, {
    name: 'Slide X',
    type: 'Slide',
    options: {
      direction: 'outRight',
      easing: 'inOutSine',
      duration: 2000
    }
  }],
  order: [
    'Hello::Print->Slide X',
    'Shape::Print->Slide X'
  ]
}).render().then(() => cursor.reset().showCursor());
