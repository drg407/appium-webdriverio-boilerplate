import ApiDemosScreen from '../../../test/screens/android/apiDemos.screens.js';

describe('Android Spec Example', () => {
    it('Should click elements', async () => {
        await ApiDemosScreen.clickAppButton();
        await ApiDemosScreen.clickAlertDialogsButton();
        await ApiDemosScreen.clickSelectButton();
        await ApiDemosScreen.clickCommandTwoButton();

        //assertion by class
        const textAssertion = await $('//android.widget.TextView');
        expect(textAssertion).toHaveText('You selected: 1 , Command two');

    });
});