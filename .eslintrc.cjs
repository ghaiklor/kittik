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
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        "assertionStyle": "as",
        "objectLiteralTypeAssertions": "allow"
      }
    ],
    "@typescript-eslint/prefer-readonly-parameter-types": [
      "off"
    ],
    "@typescript-eslint/typedef": [
      "error",
      {
        "memberVariableDeclaration": false
      }
    ],
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
    "semi": [
      "error",
      "always"
    ]
  }
}
