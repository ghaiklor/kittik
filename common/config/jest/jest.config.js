module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  errorOnDeprecated: true,
  globals: { 'ts-jest': { packageJson: 'package.json' } },
  maxWorkers: '80%',
  preset: 'ts-jest',
  reporters: ['jest-standard-reporter'],
  restoreMocks: true,
  slowTestThreshold: 5,
  testEnvironment: 'node',
  verbose: false
};
