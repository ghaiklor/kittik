"use strict";

const Code = require('../lib/Code');
const cursor = require('kittik-cursor').create().reset();

Code.create(cursor, {
  code: `for (let i = 0; i < 1234; i++) {try{const bool = true;console.log(bool);}catch(e){throw new Error(e);}}`,
  x: 'center',
  y: 'middle'
}).render();

cursor.flush();
