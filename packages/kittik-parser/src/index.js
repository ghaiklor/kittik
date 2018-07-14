const nearley = require('nearley');
const grammar = require('./grammar/grammar');

module.exports = function parse(input) {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  return parser.feed(input).finish().results[0];
};
