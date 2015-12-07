var Presentation = require('../lib/Presentation').Presentation;
var COLORS = require('kittik-cursor').COLORS;

Presentation
  .create([[{
    name: 'Text',
    options: {
      text: 'Hello there!',
      background: COLORS.YELLOW,
      foreground: COLORS.BLACK,
      animation: {
        name: 'print'
      }
    }
  }], [{
    name: 'Text',
    options: {
      text: 'You can combine different shapes in one slide',
      background: COLORS.YELLOW,
      foreground: COLORS.BLACK,
      animation: {
        name: 'print',
        interval: 10
      }
    }
  }, {
    name: 'Rectangle',
    options: {
      text: 'You can write text in the center of the rectangle',
      width: 100,
      height: 5,
      x: 10,
      y: 50,
      background: COLORS.BLUE,
      foreground: COLORS.WHITE
    }
  }]])
  .run();
