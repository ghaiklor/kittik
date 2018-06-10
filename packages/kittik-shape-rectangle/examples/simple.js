"use strict";

const Rectangle = require('../lib/Rectangle');
const cursor = require('kittik-cursor').create().reset();

Rectangle.create(cursor, {
  text: 'Text here!',
  x: 'center',
  y: 2,
  width: 40,
  background: 'green',
  foreground: 'black'
}).render();

Rectangle.create(cursor, {
  text: 'Text here',
  x: 'center',
  y: 'middle',
  width: '50%',
  height: 7,
  background: 'dark_blue'
}).render(cursor);

cursor.flush();
