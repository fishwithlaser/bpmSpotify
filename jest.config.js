module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/*.test.ts', '**/tests/**/*.test.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
