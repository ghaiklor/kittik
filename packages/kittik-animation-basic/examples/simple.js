"use strict";

const cursor = require('kittik-cursor').create().reset().hideCursor();
const shape = require('kittik-shape-rectangle').create(cursor, {background: 'white', x: 'center'});
const Animation = require('../lib/Animation');

class Slide extends Animation {
  animate(shape) {
    return this.animateProperty({shape: shape, property: 'x', startValue: -shape.getWidth(), endValue: shape.getX()});
  }
}

new Slide({duration: 2000})
  .on('tick', shape => cursor.eraseScreen() && shape.render() && cursor.flush())
  .animate(shape).then(() => cursor.showCursor().flush());
