@{%
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
%}

@lexer lexer

# rule, that parses the whole input into Deck compatible object
# the resulting object from this rule can be passed into kittik-deck as is
deck ->
    shapeDecl
  | animationDecl

# rule, that parses the whole shape declaration into Deck compatible object
# i.e. shape:rectangle (name "Hello, World" x 50) will be parsed into kittik-shape-rectangle object
shapeDecl ->
    shapeType optionDecl {% ([type, options]) => ({name: options.name, type, options}) %}

# rule, that parses type of shape
# i.e. shape:rectangle is parsed into "rectangle"
shapeType ->
    %shape %colon %identifier {% ([, , type]) => type.value %}

# rule, that parses the whole animation declaration into Deck compatible object
# i.e. animation:slide (duration 2000) will be parsed into kittik-animation-slide object
animationDecl ->
    animationType optionDecl {% ([type, options]) => ({name: options.name, type, options}) %}

# rule, that parses type of animation
# i.e. animation:slide is parsed into "slide"
animationType ->
    %animation %colon %identifier {% ([, , type]) => type.value %}

# rule, that parses the whole option list in parenthesis into one object
optionDecl ->
    %leftParenthesis optionList %rightParenthesis {% ([_, options]) => options %}

# rule, that parses a list of options into one object
# i.e. (duration 20 name "test") will be parsed into {duration: 20, name: "test"}
optionList ->
    option %whitespace optionList {% ([lhs, _, rhs]) => Object.assign(lhs, rhs) %}
  | option {% id %}
  | null

# rule, that parses key value structure into an object
# i.e. (duration 20) will be parsed into {duration: 20}
option ->
    %identifier %whitespace %string {% ([key, _, value]) => ({[key]: value.value}) %}
  | %identifier %whitespace %number {% ([key, _, value]) => ({[key]: parseInt(value.value)}) %}
