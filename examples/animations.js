"use strict";

const Deck = require('../lib/Deck');

Deck.create({
  shapes: [{
    name: 'Rectangle',
    type: 'Rectangle',
    options: {
      text: 'A long long random text here',
      x: 'center',
      y: 'middle',
      width: '50%',
      height: '20%',
      background: 'white',
      foreground: 'black'
    }
  }],
  animations: [{
    name: 'Print',
    type: 'Print',
    options: {
      duration: 3000,
      easing: 'outBounce'
    }
  }, {
    name: 'Slide In Left',
    type: 'Slide',
    options: {
      direction: 'inLeft',
      duration: 2000
    }
  }, {
    name: 'Slide In Right',
    type: 'Slide',
    options: {
      direction: 'inRight',
      duration: 2000
    }
  }, {
    name: 'Slide In Down',
    type: 'Slide',
    options: {
      direction: 'inDown',
      duration: 2000
    }
  }, {
    name: 'Slide In Up',
    type: 'Slide',
    options: {
      direction: 'inUp',
      duration: 2000
    }
  }, {
    name: 'Slide Out Left',
    type: 'Slide',
    options: {
      direction: 'outLeft',
      duration: 2000
    }
  }, {
    name: 'Slide Out Right',
    type: 'Slide',
    options: {
      direction: 'outRight',
      duration: 2000
    }
  }, {
    name: 'Slide Out Down',
    type: 'Slide',
    options: {
      direction: 'outDown',
      duration: 2000
    }
  }, {
    name: 'Slide Out Up',
    type: 'Slide',
    options: {
      direction: 'outUp',
      duration: 2000
    }
  }, {
    name: 'Focus Shake',
    type: 'Focus',
    options: {
      direction: 'shakeX',
      offset: 3,
      repeat: 1,
      duration: 1000
    }
  }, {
    name: 'Focus Bounce',
    type: 'Focus',
    options: {
      direction: 'bounceUp',
      offset: 10,
      repeat: 1,
      duration: 2000
    }
  }],
  slides: [{
    order: ['Rectangle::Print']
  }, {
    order: ['Rectangle::Slide In Left']
  }, {
    order: ['Rectangle::Slide In Right']
  }, {
    order: ['Rectangle::Slide In Down']
  }, {
    order: ['Rectangle::Slide In Up']
  }, {
    order: ['Rectangle::Slide Out Left']
  }, {
    order: ['Rectangle::Slide Out Right']
  }, {
    order: ['Rectangle::Slide Out Down']
  }, {
    order: ['Rectangle::Slide Out Up']
  }, {
    order: ['Rectangle::Focus Shake']
  }, {
    order: ['Rectangle::Focus Bounce']
  }]
}).run();
