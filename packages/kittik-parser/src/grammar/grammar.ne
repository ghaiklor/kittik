@{%
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
%}

@lexer lexer

# production rule for deck declaration itself, that consists of animation, shapes, order of rendering, etc...
deck -> shape | animation

# production rule for shape declarations, that parses into an options for shape constructor
shape -> shapeType %leftParenthesis option %rightParenthesis
shapeType -> %shape %colon %any

# production rule for animation declaration, that parses into an options for animation constructor
animation -> animationType %leftParenthesis option %rightParenthesis
animationType -> %animation %colon %any

# production rule for option structure, that parses into simple key: value structure
optionList -> null | optionList option
option -> %alphaNumeric %whitespace %any {% ([key, _, value]) => ({key: value}) %}
