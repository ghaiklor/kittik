var Deck = require('../lib/Deck');

Deck
  .create([{
    // Slide #1
    shapes: [{
      name: 'Hello',
      type: 'Text',
      options: {
        text: 'Hello there!',
        background: 'yellow',
        foreground: 'black'
      }
    }],
    animations: [{
      name: 'Simple Print',
      type: 'Print',
      options: {}
    }],
    flow: [
      'Hello(Simple Print)'
    ]
  }, {
    // Slide #2
    shapes: [{
      name: 'Desc 1',
      type: 'Text',
      options: {
        text: 'You can combine different shapes in one slide',
        background: 'yellow',
        foreground: 'black'
      }
    }, {
      name: 'Desc 2',
      type: 'Rectangle',
      options: {
        text: 'You can write text in the center of the rectangle',
        width: 100,
        height: 5,
        x: 10,
        y: 50,
        background: 'blue',
        foreground: 'white'
      }
    }],
    animations: [{
      name: 'Slide In',
      type: 'Slide',
      options: {
        direction: 'outRight'
      }
    }],
    flow: [
      'Desc 1(Slide In)',
      'Desc 2(Slide In)'
    ]
  }])
  .run();
