"use strict";

const fs = require('fs');
const cursor = require('kittik-cursor').create().reset();
const shape = require('../lib/Image').create(cursor, {
  image: './examples/nodejs.png',
  x: 'center',
  y: 'middle',
  width: 10,
  height: 5,
  preserveAspectRatio: false
});

shape.render();

cursor.flush();
