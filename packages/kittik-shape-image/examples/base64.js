"use strict";

const fs = require('fs');
const cursor = require('kittik-cursor').create().reset();
const shape = require('../lib/Image').create(cursor, {image: fs.readFileSync('./examples/nodejs.png', 'base64')});

shape.render();

cursor.flush();
