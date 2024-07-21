const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // <= setup file here 
  testEnvironment: "jest-environment-jsdom",
  collectCoverageFrom: ["<rootDir>/**/*.{ts,tsx}"]
};

module.exports = createJestConfig(customJestConfig);