const path = require('path');
const { config } = require('./wdio.shared.conf');

//
// ====================
// Runner Configuration
// ====================
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
        "appium:udid": 'emulator-5554',
        "appium:app": path.join(process.cwd(), "./app/android/ColorNote.apk"),
        "appium:autoGrantPermissions": true,
    }
];

exports.config = config;