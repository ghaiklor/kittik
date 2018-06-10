"use strict";

const Cursor = require('kittik-cursor');
const Shape = require('../lib/Shape');
const cursor = new Cursor().reset();

// Create class that extends from Shape and implement render() method
class Rectangle extends Shape {
  render() {
    const cursor = this.getCursor();
    const text = this.getText();
    const width = this.getWidth();
    const height = this.getHeight();
    const x1 = this.getX();
    const y1 = this.getY();
    const x2 = x1 + width;
    const y2 = y1 + height;
    const background = this.getBackground();
    const foreground = this.getForeground();
    const filler = ' '.repeat(width);

    cursor.moveTo(x1, y1);

    for (let y = y1; y <= y2; y++) {
      cursor.background(background).foreground(foreground).write(filler);
      cursor.moveTo(x1, y);
    }

    cursor.moveTo(x1 + (width / 2 - text.length / 2), y1 + (height / 2)).write(text);

    return this;
  }
}

Rectangle.create(cursor, {text: '1', x: 'left', y: 'top', background: 'dark_green', foreground: 'white'}).render();
Rectangle.create(cursor, {text: '2', x: 'center', y: 'top', background: 'black', foreground: 'white'}).render();
Rectangle.create(cursor, {text: '3', x: 'right', y: 'top', background: 'navy_blue', foreground: 'white'}).render();
Rectangle.create(cursor, {text: '4', x: 'left', y: 'middle', background: 'dark_green', foreground: 'white'}).render();
Rectangle.create(cursor, {text: '5', x: 'center', y: 'middle', background: 'black', foreground: 'white'}).render();
Rectangle.create(cursor, {text: '6', x: 'right', y: 'middle', background: 'navy_blue', foreground: 'white'}).render();
Rectangle.create(cursor, {text: '7', x: 'left', y: 'bottom', background: 'dark_green', foreground: 'white'}).render();
Rectangle.create(cursor, {text: '8', x: 'center', y: 'bottom', background: 'black', foreground: 'white'}).render();
Rectangle.create(cursor, {text: '9', x: 'right', y: 'bottom', background: 'navy_blue', foreground: 'white'}).render();

cursor.flush();
