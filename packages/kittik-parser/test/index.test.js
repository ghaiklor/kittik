const { assert } = require('chai');
const parse = require('../src');

describe('Core::DSL', () => {
  describe('Shape Declarations', () => {
    it('Should properly parse one declaration', () => {
      const declaration = parse(`
        shape:rectangle (
          name "My Shape"
          x 20
          y "middle"
        )
      `);

      assert.deepEqual(declaration, {
        shapes: [{
          name: 'My Shape',
          type: 'rectangle',
          options: { name: 'My Shape', x: 20, y: 'middle' }
        }],
        animations: []
      });
    });

    it('Should properly throw an error, if without parenthesis in options', () => {
      assert.throws(() => parse(`shape:rectangle name "Rectangle"`), 'Unexpected identifier token: "name"');
    });

    it('Should properly parse few declarations in a row', () => {
      const declaration = parse(`
        shape:rectangle(name "Shape 1" text "Hello, World")
        shape:text(name "Shape 2" text "Another World")
      `);

      assert.deepEqual(declaration, {
        shapes: [{
          name: 'Shape 1',
          type: 'rectangle',
          options: { name: 'Shape 1', text: 'Hello, World' }
        }, {
          name: 'Shape 2',
          type: 'text',
          options: { name: 'Shape 2', text: 'Another World' }
        }],
        animations: []
      })
    });
  });

  describe('Animation Declarations', () => {
    it('Should properly parse one declaration', () => {
      const declaration = parse(`
        animation:slide (
          name "Slide"
          duration 20
          direction "upLeft"
        )`);

      assert.deepEqual(declaration, {
        shapes: [],
        animations: [{
          name: 'Slide',
          type: 'slide',
          options: { name: 'Slide', duration: 20, direction: 'upLeft' }
        }]
      });
    });

    it('Should properly parse few declarations in a row', () => {
      const declaration = parse(`
        animation:slide (name "Slide 1")
        animation:print (name "Print 1")
      `);

      assert.deepEqual(declaration, {
        shapes: [],
        animations: [{
          name: 'Slide 1',
          type: 'slide',
          options: { name: 'Slide 1' }
        }, {
          name: 'Print 1',
          type: 'print',
          options: { name: 'Print 1' }
        }]
      });
    });
  });

  describe('Shapes + Animations Declaration', () => {
    it('Should properly parse mixed declarations of shapes and animations', () => {
      const declaration = parse(`
        shape:rectangle(name "My Shape 1")
        animation:slide(name "My Animation 1")
        animation:print(name "My Animation Print 2")
        shape:text(name "My Shape 2")
        animation:print(name "My Slow Animation Print 3" duration 10000)
      `);

      assert.deepEqual(declaration, {
        shapes: [{
          name: 'My Shape 1',
          type: 'rectangle',
          options: { name: 'My Shape 1' }
        }, {
          name: 'My Shape 2',
          type: 'text',
          options: { name: 'My Shape 2' }
        }],
        animations: [{
          name: 'My Animation 1',
          type: 'slide',
          options: { name: 'My Animation 1' }
        }, {
          name: 'My Animation Print 2',
          type: 'print',
          options: { name: 'My Animation Print 2' }
        }, {
          name: 'My Slow Animation Print 3',
          type: 'print',
          options: { name: 'My Slow Animation Print 3', duration: 10000 }
        }]
      });
    });
  });
});
