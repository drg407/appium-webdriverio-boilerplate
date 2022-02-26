import UiKitCatalog from '../../../test/screens/ios/uiKitCatalog.screens.js';

describe('iOS Example Spec', () => {
    before('Before Hook Example', async () => {
        console.log('Running before hook');
    });

    it('Should click elements', async () => {
        await UiKitCatalog.clickAlertViews();
    });
});