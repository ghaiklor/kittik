const Cursor = require('terminal-canvas');
const Slide = require('../src/index');
const cursor = Cursor.create().reset();

new Slide(cursor, {
  shapes: [{
    name: 'Hello',
    type: 'FigText',
    options: {
      x: 'center',
      y: 'middle',
      text: 'Hello, World',
      font: 'Dr Pepper'
    }
  }],
  animations: [{
    name: 'Print',
    type: 'Print',
    options: {
      duration: 5000,
      easing: 'inQuad'
    }
  }, {
    name: 'Slide Out Down',
    type: 'Slide',
    options: {
      direction: 'outDown',
      easing: 'inBounce'
    }
  }],
  order: [
    'Hello::Print->Slide Out Down'
  ]
}).render();
