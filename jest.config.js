const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.(ts|tsx)'],
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/src/assets'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
    '@testing-library/react',
    '<rootDir>/setupTests.ts',
  ],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
