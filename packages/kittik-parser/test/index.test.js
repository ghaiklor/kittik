const parse = require('../src');

describe('Core::DSL', () => {
  describe('Shape Declarations', () => {
    it('Should properly parse a simple declaration', () => {
      const declaration = parse(`
        shape:rectangle (
          name "My Shape"
          x 20
          y "middle"
        )
      `);
    });
  });

  describe('Animation Declarations', () => {
    it('Should properly parse a simple declaration', () => {
      const declaration = parse(`
        animation:slide (
          name "Slide"
          duration 20
          direction "upLeft"
        )`);
    });
  });
});
