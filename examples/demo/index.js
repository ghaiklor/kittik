"use strict";

const cursor = require('kittik-cursor').create().resetTTY();
const SLIDES = [
  require('./slides/slide-1'),
  require('./slides/slide-2'),
  require('./slides/slide-3'),
  require('./slides/slide-4'),
  require('./slides/slide-5'),
  require('./slides/slide-6'),
  require('./slides/slide-7')
];

const Deck = require('../../lib/Deck');
const Slide = require('../../lib/Slide');

//Deck.create({slides: SLIDES}).run();
Slide.create(SLIDES[2]).render(cursor);
cursor.flush();
