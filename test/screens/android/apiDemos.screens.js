class ApiDemosScreen {
    get appButton() {
        // Accessibility id
        return $('~App');
    }

    get alertDialogsButton() {
        // xpath: //tagName[@attribute='value']  
        return $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
    }

    get selectButton() {
        // resource-id
        return $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]');
    }

    get commandTwoButton() {
        // Text
        return $('//android.widget.TextView[@text="Command two"]');
    }

    async clickAppButton() {
        await this.appButton.click();
    }

    async clickAlertDialogsButton() {
        await this.alertDialogsButton.click();
    }

    async clickSelectButton() {
        await this.selectButton.click();
    }

    async clickCommandTwoButton() {
        await this.commandTwoButton.click();
    }
}

export default new ApiDemosScreen();