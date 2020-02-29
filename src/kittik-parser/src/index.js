const nearley = require('nearley');
const grammar = require('./grammar/grammar');

// Workaround to convert Set view to Object view
// TODO: maybe there are a better way to do that?
const setToObject = set => {
  let result = [];
  for (let value of set.values()) result.push(JSON.parse(value));
  set.clear();
  return result;
}

module.exports = function parse(input) {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  const declaration = parser.feed(input).finish()[0];

  return {
    shapes: setToObject(declaration.shapes),
    animations: setToObject(declaration.animations)
  }
};
