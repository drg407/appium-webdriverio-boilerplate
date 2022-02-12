class UiKitCatalog {
    get alertViews() {
        return $(`~Alert Views`);
    }

    async clickAlertViews() {
        await this.alertViews.click();
    }
}

export default new UiKitCatalog();