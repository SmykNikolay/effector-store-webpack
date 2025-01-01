module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@app/(.*)$": "<rootDir>/src/app/$1",
    "^@processes/(.*)$": "<rootDir>/src/processes/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@widgets/(.*)$": "<rootDir>/src/widgets/$1",
    "^@features/(.*)$": "<rootDir>/src/features/$1",
    "^@entities/(.*)$": "<rootDir>/src/entities/$1",
    "^@shared/(.*)$": "<rootDir>/src/shared/$1"
  }
};