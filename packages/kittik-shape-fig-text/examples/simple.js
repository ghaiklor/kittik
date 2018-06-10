"use strict";

const FigText = require('../lib/FigText');
const cursor = require('kittik-cursor').create().reset();

FigText.create(cursor, {
  text: 'KittikJS',
  x: 'center',
  y: 'middle',
  font: 'Star Wars',
  foreground: 'yellow',
  horizontalLayout: 'full'
}).render();

cursor.flush();
