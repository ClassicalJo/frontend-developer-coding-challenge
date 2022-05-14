const nextJest = require('next/jest')
const createJestConfig = nextJest({ dir: '.' })
const customJestConfig = {
    testEnvironment: 'jsdom',
    clearMocks: true,
    setupFilesAfterEnv: ['./tests/setupTests.ts'],
    moduleDirectories: ["node_modules", "pages", 'components' ],
    moduleNameMapper: {
        "^@pages(.*)$": "<rootDir>/pages$1",
        "^@api(.*)$": "<rootDir>/api$1",
        "^@browse(.*)$": "<rootDir>/components/browse$1",
        "^@footer(.*)$": "<rootDir>/components/footer$1",
        "^@hero(.*)$": "<rootDir>/components/hero$1",
        "^@main(.*)$": "<rootDir>/components/main$1",
        "^@nav(.*)$": "<rootDir>/components/nav$1",
        "^@products(.*)$": "<rootDir>/components/products$1",
        "^@toasts(.*)$": "<rootDir>/components/toasts$1",
        "^@components(.*)$": "<rootDir>/components$1",
    }

}

module.exports = createJestConfig(customJestConfig)