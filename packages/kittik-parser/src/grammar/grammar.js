// Generated automatically by nearley, version 2.13.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

  const moo = require('moo');
  const lexer = moo.compile({
    whitespace: { match: /\s+/, lineBreaks: true },
    comment: { match: /#.*?$/ },
    number: { match: /[0-9]+/ },
    string: { match: /".*?"/ },
    identifier: { match: /[a-zA-Z]+/, keywords: {
      shape: 'shape',
      animation: 'animation',
      slide: 'slide'
    }},
    leftParenthesis: '(',
    rightParenthesis: ')',
    colon: ':'
  });
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "deck", "symbols": [(lexer.has("whitespace") ? {type: "whitespace"} : whitespace)], "postprocess": () => null},
    {"name": "deck", "symbols": [(lexer.has("comment") ? {type: "comment"} : comment)], "postprocess": () => null},
    {"name": "deck", "symbols": ["shape"]},
    {"name": "deck", "symbols": ["animation"]},
    {"name": "shape", "symbols": ["shapeType", "optionDecl"]},
    {"name": "shapeType", "symbols": [(lexer.has("shape") ? {type: "shape"} : shape), (lexer.has("colon") ? {type: "colon"} : colon), (lexer.has("identifier") ? {type: "identifier"} : identifier)]},
    {"name": "animation", "symbols": ["animationType", "optionDecl"]},
    {"name": "animationType", "symbols": [(lexer.has("animation") ? {type: "animation"} : animation), (lexer.has("colon") ? {type: "colon"} : colon), (lexer.has("identifier") ? {type: "identifier"} : identifier)]},
    {"name": "optionDecl", "symbols": [(lexer.has("leftParenthesis") ? {type: "leftParenthesis"} : leftParenthesis), "optionList", (lexer.has("rightParenthesis") ? {type: "rightParenthesis"} : rightParenthesis)]},
    {"name": "optionList", "symbols": ["option", "optionList"]},
    {"name": "optionList", "symbols": []},
    {"name": "option", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier), (lexer.has("whitespace") ? {type: "whitespace"} : whitespace), (lexer.has("string") ? {type: "string"} : string)], "postprocess": ([key, _, value]) => ({[key]: value.value})},
    {"name": "option", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier), (lexer.has("whitespace") ? {type: "whitespace"} : whitespace), (lexer.has("number") ? {type: "number"} : number)], "postprocess": ([key, _, value]) => ({[key]: parseInt(value.value)})}
]
  , ParserStart: "deck"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
