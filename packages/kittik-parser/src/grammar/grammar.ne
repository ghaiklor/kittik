@{%
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
%}

@lexer lexer

# the whole declaration of kittik deck
deck ->
    %whitespace {% () => null %}
  | %comment {% () => null %}
  | shape
  | animation

# rule matches against shape declarations
# i.e. shape:rectangle (key value)
shape -> shapeType optionDecl
shapeType -> %shape %colon %identifier

# rule matches against animation declarations
# i.e. animation:slide (key value)
animation -> animationType optionDecl
animationType -> %animation %colon %identifier

# rule matches against (key-value) option
# i.e. (name "Hello, World") or (duration 20)
optionDecl -> %leftParenthesis optionList %rightParenthesis
optionList -> option optionList | null
option ->
    %identifier %whitespace %string {% ([key, _, value]) => ({[key]: value.value}) %}
  | %identifier %whitespace %number {% ([key, _, value]) => ({[key]: parseInt(value.value)}) %}
