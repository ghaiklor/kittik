// Generated automatically by nearley, version 2.13.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

  const moo = require('moo');
  const lexer = moo.compile({
    shape: 'shape',
    animation: 'animation',
    whitespace: { match: /\s+/, lineBreaks: true },
    comment: { match: /#.*?$/ },
    string: { match: /".*?"/ },
    number: { match: /[0-9]+/ },
    identifier: { match: /[a-zA-Z]+/ },
    leftParenthesis: '(',
    rightParenthesis: ')',
    colon: ':'
  });
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "deck", "symbols": ["shapeDecl"]},
    {"name": "deck", "symbols": ["animationDecl"]},
    {"name": "shapeDecl", "symbols": ["shapeType", "optionDecl"], "postprocess": ([type, options]) => ({name: options.name, type, options})},
    {"name": "shapeType", "symbols": [(lexer.has("shape") ? {type: "shape"} : shape), (lexer.has("colon") ? {type: "colon"} : colon), (lexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": ([, , type]) => type.value},
    {"name": "animationDecl", "symbols": ["animationType", "optionDecl"], "postprocess": ([type, options]) => ({name: options.name, type, options})},
    {"name": "animationType", "symbols": [(lexer.has("animation") ? {type: "animation"} : animation), (lexer.has("colon") ? {type: "colon"} : colon), (lexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": ([, , type]) => type.value},
    {"name": "optionDecl", "symbols": [(lexer.has("leftParenthesis") ? {type: "leftParenthesis"} : leftParenthesis), "optionList", (lexer.has("rightParenthesis") ? {type: "rightParenthesis"} : rightParenthesis)], "postprocess": ([_, options]) => options},
    {"name": "optionList", "symbols": ["option", (lexer.has("whitespace") ? {type: "whitespace"} : whitespace), "optionList"], "postprocess": ([lhs, _, rhs]) => Object.assign(lhs, rhs)},
    {"name": "optionList", "symbols": ["option"], "postprocess": id},
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
