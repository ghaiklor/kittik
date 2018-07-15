@{%
  const moo = require('moo');
  const lexer = moo.compile({
    whitespace: { match: /\s+/, lineBreaks: true },
    comment: { match: /#.*?$/ },
    string: { match: /".*?"/, lineBreaks: true, value: (value) => value.slice(1, -1) },
    number: { match: /[0-9]+/ },
    identifier: {
      match: /[a-zA-Z]+/,
      keywords: {
        shape: 'shape',
        animation: 'animation'
      }
    },
    leftParenthesis: '(',
    rightParenthesis: ')',
    colon: ':'
  });
%}

@lexer lexer

# rule, that parses the whole input into Deck compatible object
# the resulting object from this rule can be passed into kittik-deck as is
deck ->
  declaration:* {% id %}

# rule, that consists of all possible declarations in the DSL
# it was splitted to separate rules, so I can apply eBNF notation in deck rule
declaration ->
    wso shapeDecl wso {% ([_, shape]) => shape %}
  | wso animationDecl wso {% ([_, animation]) => animation %}

# rule, that parses the whole shape declaration into Deck compatible object
# i.e. shape:rectangle (name "Hello, World" x 50) will be parsed into kittik-shape-rectangle object
shapeDecl ->
    shapeType wso optionDecl {% ([type, _, options]) => ({name: options.name, type, options}) %}

# rule, that parses type of shape
# i.e. shape:rectangle is parsed into "rectangle"
shapeType ->
    %shape %colon %identifier {% ([, , type]) => type.value %}

# rule, that parses the whole animation declaration into Deck compatible object
# i.e. animation:slide (duration 2000) will be parsed into kittik-animation-slide object
animationDecl ->
    animationType wso optionDecl {% ([type, _, options]) => ({name: options.name, type, options}) %}

# rule, that parses type of animation
# i.e. animation:slide is parsed into "slide"
animationType ->
    %animation %colon %identifier {% ([, , type]) => type.value %}

# rule, that parses the whole option list in parenthesis into one object
# so, any key value structures in parenthesis is parsed as an option object
optionDecl ->
    %leftParenthesis wso optionList wso %rightParenthesis {% ([, , options]) => options %}

# rule, that parses a list of options into one object
# i.e. (duration 20 name "test") will be parsed into {duration: 20, name: "test"}
optionList ->
    option wsm optionList {% ([lhs, _, rhs]) => Object.assign(lhs, rhs) %}
  | option {% id %}
  | null

# rule, that parses key value structure into an object
# i.e. (duration 20) will be parsed into {duration: 20}
option ->
    %identifier wsm %string {% ([key, _, value]) => ({[key]: value.value}) %}
  | %identifier wsm %number {% ([key, _, value]) => ({[key]: parseInt(value.value)}) %}

# rules, that provide with optional\mandatory whitespaces
# if you need to have a mandatory whitespace between rules -> wsm
# but, if you could have whitespaces, but they are optional -> wso
wso -> %whitespace:* {% () => null %}
wsm -> %whitespace:+ {% () => null %}
