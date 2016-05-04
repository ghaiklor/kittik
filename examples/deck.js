"use strict";

const Deck = require('../lib/Deck');

Deck.create({
  shapes: [{
    name: 'Global Shape',
    type: 'Text',
    options: {
      text: 'This shape is available in all slides',
      x: 'center',
      y: 2
    }
  }],
  animations: [{
    name: 'Global Animation',
    type: 'Print',
    options: {
      duration: 5000
    }
  }],
  slides: [{
    order: [
      'Global Shape::Global Animation'
    ]
  }, {
    shapes: [{
      name: 'Local Shape',
      type: 'Rectangle',
      options: {
        text: 'This shape is available only in current slide',
        width: '50%',
        height: 5,
        background: 'white',
        foreground: 'black',
        x: 'center',
        y: 6
      }
    }],
    animations: [{
      name: 'Local Animation',
      type: 'Focus',
      options: {
        direction: 'shakeY',
        duration: 500
      }
    }],
    order: [
      'Global Shape::Global Animation',
      'Local Shape::Global Animation->Local Animation'
    ]
  }]
}).run();
