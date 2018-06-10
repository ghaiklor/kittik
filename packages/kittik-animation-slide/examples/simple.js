"use strict";

const cursor = require('kittik-cursor').create().reset().hideCursor();
const Slide = require('../lib/Slide');
const shape = require('kittik-shape-rectangle').create(cursor, {
  text: 'Good news, everybody!',
  x: 'center',
  background: 'white',
  foreground: 'black',
  width: '50%'
});

new Slide({duration: 3000}).on('tick', shape => cursor.eraseScreen() && shape.render() && cursor.flush()).animate(shape).then(() => cursor.showCursor());
