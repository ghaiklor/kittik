const parser = require('../src');

describe('Parser', () => {
  it('Should properly parse the basic expression', () => {
    console.log('parser :', parser('200').results);
  });
});
