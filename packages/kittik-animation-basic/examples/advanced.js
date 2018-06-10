"use strict";

const cursor = require('kittik-cursor').create().reset().hideCursor();
const Rectangle = require('kittik-shape-rectangle');
const Animation = require('../lib/Animation');
const shapes = [
  Rectangle.create(cursor, {background: 'dark_blue', x: 'left', y: 'top', text: 'Shape 1'}),
  Rectangle.create(cursor, {background: 'dark_blue', x: 'center', y: 'top', text: 'Shape 2'}),
  Rectangle.create(cursor, {background: 'dark_blue', x: 'right', y: 'top', text: 'Shape 3'}),
  Rectangle.create(cursor, {background: 'dark_green', x: 'left', y: 'middle', text: 'Shape 4'}),
  Rectangle.create(cursor, {background: 'dark_green', x: 'center', y: 'middle', text: 'Shape 5'}),
  Rectangle.create(cursor, {background: 'dark_green', x: 'right', y: 'middle', text: 'Shape 6'}),
  Rectangle.create(cursor, {background: 'dark_red', x: 'left', y: 'bottom', text: 'Shape 7'}),
  Rectangle.create(cursor, {background: 'dark_red', x: 'center', y: 'bottom', text: 'Shape 8'}),
  Rectangle.create(cursor, {background: 'dark_red', x: 'right', y: 'bottom', text: 'Shape 9'})
];

// Your animation
class Slide extends Animation {
  animate(shape) {
    return Promise.all([
      this.animateProperty({shape: shape, property: 'x', startValue: Math.random() * 100 - 50, endValue: shape.getX()}),
      this.animateProperty({shape: shape, property: 'y', startValue: Math.random() * 30 - 15, endValue: shape.getY()})
    ]).then(() => Promise.resolve(shape));
  }
}

// It's implemented in Kittik engine, so you need just to implement child class from Animation as above
let renderedShapes = [];
let currentShapeIndex = 0;

const onTick = (shape, property, value) => {
  cursor.eraseScreen();
  renderedShapes.forEach(shape => shape.render());
  shape.render();
  cursor.flush();
};

const nextShape = shape => {
  renderedShapes.push(shape);
  currentShapeIndex++;
  if (currentShapeIndex == 9) cursor.showCursor().flush();
  playAnimation(currentShapeIndex);
};

const playAnimation = index => {
  animation.animate(shapes[index]).then(nextShape);
};

const animation = new Slide({duration: 2000}).on('tick', onTick);
playAnimation(currentShapeIndex);
