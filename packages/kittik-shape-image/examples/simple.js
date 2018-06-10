"use strict";

const cursor = require('kittik-cursor').create().reset();
const shape = require('../lib/Image').create(cursor, {image: './examples/nodejs.png'});

shape.render();

cursor.flush();
