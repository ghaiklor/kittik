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
    'Hello::Print->Slide X'
  ]
}).render().then(() => cursor.reset().showCursor());
