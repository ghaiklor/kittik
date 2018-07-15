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
        name: 'My Shape',
        type: 'rectangle',
        options: {
          name: 'My Shape',
          x: 20,
          y: 'middle'
        }
      });
    });

    it('Should properly throw an error, if without parenthesis in options', () => {
      assert.throws(() => parse(`shape:rectangle name "Rectangle"`), 'Unexpected identifier token: "name"');
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
        name: 'Slide',
        type: 'slide',
        options: {
          name: 'Slide',
          duration: 20,
          direction: 'upLeft'
        }
      });
    });
  });
});
