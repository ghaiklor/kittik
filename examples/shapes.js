"use strict";

const Deck = require('../lib/Deck');

Deck.create({
  shapes: [{
    name: 'Text',
    type: 'Text',
    options: {
      text: 'Text',
      x: 'center',
      y: 'middle'
    }
  }, {
    name: 'Rectangle',
    type: 'Rectangle',
    options: {
      text: 'Rectangle',
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
    options: {
      text: 'ASCII ART',
      x: 'center',
      y: 'middle',
      font: 'Star Wars'
    }
  }, {
    name: 'Code',
    type: 'Code',
    options: {
      code: `const sentence = 'You can embed your code here';\nconsole.log(sentence);`,
      x: 'center',
      y: 'middle'
    }
  }],
  slides: [{
    order: ['Text']
  }, {
    order: ['Rectangle']
  }, {
    order: ['FigText']
  }, {
    order: ['Code']
  }]
}).run();
