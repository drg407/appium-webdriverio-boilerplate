// const path = require('path');
import { config } from './wdio.shared.conf';

//
// ====================
// Runner Configuration
// ====================
// npx wdio config/wdio.android.conf.js
//
config.port = 4723;
//
// ==================
// Specify Test Files
// ==================
// Define which test specs should run. The pattern is relative to the directory
// from which `wdio` was called.
//
// The specs are defined as an array of spec files (optionally using wildcards
// that will be expanded). The test for each spec file will be run in a separate
// worker process. In order to have a group of spec files run in the same worker
// process simply enclose them in an array within the specs array.
//
// If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
// then the current working directory is where your `package.json` resides, so `wdio`
// will be called from there.
//
config.specs = [
    './test/specs/android/**.*.js'
];

// ============
// Capabilities
// ============
// Define your capabilities here. WebdriverIO can run multiple capabilities at the same
// time. Depending on the number of capabilities, WebdriverIO launches several test
// sessions. Within your capabilities you can overwrite the spec and exclude options in
// order to group specific specs to a specific capability.
//
config.capabilities = [
    {
        platformName: 'Android',
        "appium:automationName": 'UiAutomator2',
        "appium:platformVersion": '12',
        "appium:udid": 'emulator-5556',
        "appium:app": "./app/ApiDemos-debug.apk",
        "appium:autoGrantPermissions": true,
    }
];

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['appium'];

const _config = config;
export { _config as config };