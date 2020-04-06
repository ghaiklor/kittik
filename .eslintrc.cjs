module.exports = {
  "root": true,
  "env": {
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/all",
    "plugin:import/typescript",
    "plugin:jest/all",
    "plugin:node/recommended",
    "plugin:promise/recommended",
    "standard-with-typescript"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.eslint.json"
  },
  "plugins": [
    "@typescript-eslint",
    "import",
    "jest",
    "node",
    "promise",
    "standard"
  ],
  "rules": {
    // Mutating function arguments can lead to confusing, hard to debug behavior
    // Whilst it's easy to implicitly remember to not modify function arguments
    // explicitly typing arguments as readonly provides clear contract to consumers
    // Though, we don't need such a contract here as it is increase complexity in writing code
    // Maybe, some day...
    "@typescript-eslint/prefer-readonly-parameter-types": [
      "off"
    ],

    // TypeScript cannot always infer types for all places in code
    // Some locations require type annotations for their types to be inferred
    // Though, some are not... and these cases handled by another rule
    "@typescript-eslint/typedef": [
      "error",
      {
        "arrowParameter": false,
        "memberVariableDeclaration": false,
        "parameter": false
      }
    ],

    // Despite your best intentions, the any type can sometimes leak into your codebase
    // Member access on any typed variables is not checked at all by TypeScript
    // so it creates a potential safety hole, and source of bugs in your codebase
    // Though, for now... we are disabling this
    // Because we need to call not typed APIs, like JSON.parse, etc...
    "@typescript-eslint/no-unsafe-call": [
      "off"
    ],

    // When aliasing, the type alias does not create a new type
    // it just creates a new name to refer to the original type
    // So aliasing primitives and other simple types, tuples, unions or intersections can some times be redundant
    // Though, we are allowing this as it is provide more readability in our codebase
    "@typescript-eslint/no-type-alias": [
      "error",
      {
        "allowAliases": "always"
      }
    ],

    // Magic numbers are numbers that occur multiple times in code without an explicit meaning
    // They should preferably be replaced by named constants, but...
    // At the moment we don't have such a problem, except in tests, where it is normal
    "@typescript-eslint/no-magic-numbers": [
      "off"
    ],

    // In addition to ensuring that type assertions are written in a consistent way
    // this rule also helps make your codebase more type-safe
    // Except cases where I explicitly use `as` on object literals and it is ok in our case
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        "assertionStyle": "as",
        "objectLiteralTypeAssertions": "allow"
      }
    ],

    // This rule checks the file paths of import and export declarations
    // If the file paths don't exist, this reports these
    // By default, this rule does not have *.ts extension in resolvers
    // So, I'm adding this one here so it can check for *.ts files as well
    "node/no-missing-import": [
      "error",
      {
        "tryExtensions": [
          ".js",
          ".ts",
          ".json",
          ".node"
        ]
      }
    ],

    // This feature is known as automatic semicolon insertion (ASI)
    // It is considered one of the more controversial features of JavaScript
    // I prefer when it is explicitly set an end of statement
    // E.g. in Rust if there is no semicolon it means an expression
    "semi": [
      "error",
      "always"
    ]
  }
}
