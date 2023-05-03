module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*test.ts'],
};