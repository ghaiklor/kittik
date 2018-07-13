const parser = require('../src');

describe('Parser', () => {
  it('Should properly parse the option', () => {
    console.log('parser :', parser('text hello').results);
  });
});
