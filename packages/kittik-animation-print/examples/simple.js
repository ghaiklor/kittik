"use strict";

const cursor = require('kittik-cursor').create().reset().hideCursor();
const Print = require('../lib/Print');
const shape = require('kittik-shape-rectangle').create(cursor, {
  text: 'Good news, everybody!',
  x: 'center',
  background: 'yellow',
  foreground: 'black',
  width: '50%'
});

new Print({
  easing: 'inOutSine',
  duration: 5000
}).on('tick', shape => cursor.eraseScreen() && shape.render() && cursor.flush()).animate(shape).then(() => cursor.showCursor());
