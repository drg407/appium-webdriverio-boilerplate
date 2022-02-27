# WebdriverIO 7 Appium Boilerplate with Browserstack integration

This is a Javascript boilerplate project that uses WebdriverIO 7, Appium and Browserstack for mobile app test automation. It includes example spec and conf files for Android and iOS. This framework utilizes the Page Object Model to store an object repository of reusable mobile elements and reusable driver actions with the help of commonly used utility methods.

## Getting Started

```code
git clone git@github.com:drg407/appium-webdriverio-boilerplate.git
cd appium-webdriverio-boilerplate
npm install
```

## dotenv

An example dotenv file is included and should be renamed to `.env` and include valid credentials to your browserstack account before running tests.

### `test/specs/android/android-example.spec.js`

```javascript
import ApiDemosScreen from '../../../test/screens/android/apiDemos.screens.js';

describe('Android Spec Example', () => {

    before('Before Hook Example', async () => {
        await ApiDemosScreen.clickAppButton();
    });

    it('Should click elements', async () => {
        await ApiDemosScreen.clickAlertDialogsButton();
        await ApiDemosScreen.clickSelectButton();
        await ApiDemosScreen.clickCommandTwoButton();

        //assertion by class
        const textAssertion = await $('//android.widget.TextView');
        expect(textAssertion).toHaveText('You selected: 1 , Command two');

    });
});
```

## Test example

The test in this project uses Appium to demonstrate test automation on a mobile emulator/simulator/real device.

Run example test locally with the following command:

```code
npx wdio config/wdio.android.conf.js
```

Run example test in Browserstack with the following command after adding your Browserstack credentials in the .env:

```code
npx wdio config/browserstack/wdio.android.bs.conf.js
```

## Reporters

TODO

## CI/CD

[github actions](https://github.com/drg407/appium-webdriverio-boilerplate/actions) are utilized to run tests on push and pull requests as set in ci.yaml.
