module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["json", "text", "lcov", "clover"],
  displayName: "kittik",
  errorOnDeprecated: true,
  globals: { "ts-jest": { packageJson: "package.json" } },
  maxWorkers: "80%",
  preset: "ts-jest",
  reporters: ["jest-standard-reporter"],
  testEnvironment: "node",
  verbose: true,
};
