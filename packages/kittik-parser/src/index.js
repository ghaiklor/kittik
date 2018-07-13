const nearley = require('nearley');
const grammar = require('./grammar/grammar');
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

module.exports = function parse(input) {
  return parser.feed(input);
}
