const nextJest = require('next/jest')
const createJestConfig = nextJest({ dir: '.' })
const customJestConfig = {
    testEnvironment: 'jsdom',
    clearMocks: true,
    setupFilesAfterEnv: ['./components/setupTests.ts']
}

module.exports = createJestConfig(customJestConfig)