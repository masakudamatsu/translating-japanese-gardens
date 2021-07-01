const path = require('path');

module.exports = {
  clearMocks: true, // run jest.clearAllMocks() after each test
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/pages/_*.js',
    '!**/*.test.js',
    '!**/*.spec.js',
  ], // https://jestjs.io/docs/en/configuration#collectcoveragefrom-array
  coverageDirectory: 'coverage-jest', // to avoid clashing with Cypress coverage report (https://github.com/bahmutov/cypress-and-jest#jest-init)
  moduleDirectories: [
    'node_modules',
    __dirname,
    path.join(__dirname, '../src'), // allow imports with absolute paths
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'jest-axe/extend-expect',
    'jest-styled-components',
  ],
  testPathIgnorePatterns: ['<rootDir>/cypress/', '<rootDir>/node_modules/'],
};
