// Generated automatically by nearley, version 2.13.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

  const moo = require('moo');
  const lexer = moo.compile({
    any: /.+/,
    lineBreaks: /[\n|\r\n]/,
    whitespace: /\s+/,
    numeric: /[0-9]+/,
    alpha: /[a-zA-Z]+/,
    alphaNumeric: /[a-zA-Z0-9]+/,
    leftParenthesis: /\(/,
    rightParenthesis: /\)/,
    colon: /:/,
    shape: /shape/,
    animation: /animation/
  });
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "deck", "symbols": ["shape"]},
    {"name": "deck", "symbols": ["animation"]},
    {"name": "shape", "symbols": ["shapeType", (lexer.has("leftParenthesis") ? {type: "leftParenthesis"} : leftParenthesis), "option", (lexer.has("rightParenthesis") ? {type: "rightParenthesis"} : rightParenthesis)]},
    {"name": "shapeType", "symbols": [(lexer.has("shape") ? {type: "shape"} : shape), (lexer.has("colon") ? {type: "colon"} : colon), (lexer.has("any") ? {type: "any"} : any)]},
    {"name": "animation", "symbols": ["animationType", (lexer.has("leftParenthesis") ? {type: "leftParenthesis"} : leftParenthesis), "option", (lexer.has("rightParenthesis") ? {type: "rightParenthesis"} : rightParenthesis)]},
    {"name": "animationType", "symbols": [(lexer.has("animation") ? {type: "animation"} : animation), (lexer.has("colon") ? {type: "colon"} : colon), (lexer.has("any") ? {type: "any"} : any)]},
    {"name": "optionList", "symbols": []},
    {"name": "optionList", "symbols": ["optionList", "option"]},
    {"name": "option", "symbols": [(lexer.has("alphaNumeric") ? {type: "alphaNumeric"} : alphaNumeric), (lexer.has("whitespace") ? {type: "whitespace"} : whitespace), (lexer.has("any") ? {type: "any"} : any)], "postprocess": ([key, _, value]) => ({key: value})}
]
  , ParserStart: "deck"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
