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
        "memberVariableDeclaration": false
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
