"use strict";

const cursor = require('kittik-cursor').create().reset().hideCursor();
const Rectangle = require('kittik-shape-rectangle');
const Slide = require('../lib/Slide');
const AVAILABLE_DIRECTIONS = ['inUp', 'inDown', 'inLeft', 'inRight'];
const shapes = [
  Rectangle.create(cursor, {background: 'dark_blue', x: 'left', y: 'top', text: 'Shape 1'}),
  Rectangle.create(cursor, {background: 'dark_blue', x: 'center', y: 'top', text: 'Shape 2'}),
  Rectangle.create(cursor, {background: 'dark_blue', x: 'right', y: 'top', text: 'Shape 3'}),
  Rectangle.create(cursor, {background: 'navy_blue', x: 'left', y: 'middle', text: 'Shape 4'}),
  Rectangle.create(cursor, {background: 'navy_blue', x: 'center', y: 'middle', text: 'Shape 5'}),
  Rectangle.create(cursor, {background: 'navy_blue', x: 'right', y: 'middle', text: 'Shape 6'}),
  Rectangle.create(cursor, {background: 'yellow', x: 'left', y: 'bottom', text: 'Shape 7'}),
  Rectangle.create(cursor, {background: 'yellow', x: 'center', y: 'bottom', text: 'Shape 8'}),
  Rectangle.create(cursor, {background: 'yellow', x: 'right', y: 'bottom', text: 'Shape 9'})
];

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
  const animation = new Slide({direction: AVAILABLE_DIRECTIONS[Math.round(Math.random() * 3)]}).on('tick', onTick);
  animation.animate(shapes[index], cursor).then(nextShape);
};

playAnimation(currentShapeIndex);
