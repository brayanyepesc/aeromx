module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/*.test.(ts|tsx)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
} 