"use strict";

const Deck = require('../../lib/Deck');
const SLIDES = [
  require('./slides/slide-1'),
  require('./slides/slide-2'),
  require('./slides/slide-3'),
  require('./slides/slide-4'),
  require('./slides/slide-5'),
  require('./slides/slide-6'),
  require('./slides/slide-7'),
  require('./slides/slide-8'),
  require('./slides/slide-9')
];

Deck.create({
  animations: [{
    name: 'Print',
    type: 'Print',
    options: {
      duration: 4000
    }
  }],
  slides: SLIDES
}).run();
