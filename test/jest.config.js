const { resolve } = require('path');
const { displayName } = require('../jest.config');
const root = resolve(__dirname, '..');
const rootConfig = require(`${root}/jest.config.js`);

module.require = {... rootConfig, ... {
    rootDir: root,
    displayName: "end2end-tests",
    setupFilesAfterEnv: ["<rootDir>/test/jest-setup.ts"],
    testMatch: ["<rootDir>/test/**/*.tests.ts"],
}}