"use strict";

const Cursor = require('kittik-cursor');
const Shape = require('../lib/Shape');
const cursor = new Cursor().reset();

// Create class that extends from Shape and implement render() method
class Text extends Shape {
  render() {
    const cursor = this.getCursor();
    const text = this.getText();
    const x = this.getX();
    const y = this.getY();

    cursor.moveTo(x, y).write(text);

    return this;
  }
}

Text.create(cursor, {text: 'Hello there', x: 'center', y: 'middle'}).render();

cursor.flush();
