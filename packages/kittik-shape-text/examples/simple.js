"use strict";

const Text = require('../lib/Text');
const cursor = require('kittik-cursor').create().reset();

Text.create(cursor, {text: 'Hello, there!', x: 'center', y: 5, underlined: true}).render();
Text.create(cursor, {text: 'It is a simple text shape', x: 'center', y: 7, bold: true}).render();
Text.create(cursor, {text: 'If you see this, it works', x: 'center', y: 9, reverse: true}).render();
Text.create(cursor, {text: 'You\ncan\nwrite\nmulti-lines', x: 'center', align: 'right', y: 15, dim: true}).render();

cursor.flush();
