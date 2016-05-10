"use strict";

const Deck = require('../lib/Deck');

Deck.create({
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
  animations: [{
    name: 'Print',
    type: 'Print',
    options: {
      duration: 4000
    }
  }, {
    name: 'Slide In',
    type: 'Slide',
    options: {
      direction: 'inLeft',
      duration: 2000
    }
  }, {
    name: 'Focus',
    type: 'Focus',
    options: {
      direction: 'shakeX',
      offset: 3,
      repeat: 1,
      duration: 1000
    }
  }],
  slides: [{
    shapes: [{
      name: 'Kittik',
      type: 'FigText',
      options: {
        text: 'Hello!\nI am Kittik\n:)',
        font: 'Star Wars',
        x: 'center',
        y: 'middle'
      }
    }],
    order: [
      'Kittik::Print'
    ]
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
    order: [
      'Demo::Print'
    ]
  }, {
    order: [
      'Text::Print'
    ]
  }, {
    order: [
      'Rectangle::Slide In->Focus'
    ]
  }, {
    order: [
      'FigText::Slide In->Focus'
    ]
  }, {
    order: [
      'Code::Slide In'
    ]
  }, {
    shapes: [{
      name: 'Text',
      type: 'FigText',
      options: {
        text: 'Amazing\n:)',
        font: 'Star Wars',
        x: 'center',
        y: 'middle'
      }
    }],
    order: [
      'Text::Print'
    ]
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
    order: [
      'Text::Print'
    ]
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
    order: [
      'Text::Print'
    ]
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
    order: [
      'Text::Print'
    ]
  }, {
    shapes: [{
      name: 'Text',
      type: 'FigText',
      options: {
        text: 'Thanks\n:)',
        font: 'Star Wars',
        x: 'center',
        y: 'middle'
      }
    }],
    order: [
      'Text::Print'
    ]
  }]
}).run();
