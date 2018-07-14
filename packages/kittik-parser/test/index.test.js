const parser = require('../src');

describe('Core::DSL', () => {
  describe('Shape Declarations', () => {
    it('Should properly parse a simple declaration', () => {
      const declaration = parser(`
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
      const declaration = parser(`
        animation:slide (
          name "Slide"
          duration 20
          direction "upLeft"
        )`);
    });
  });
});
