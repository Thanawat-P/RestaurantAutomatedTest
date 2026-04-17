class Restaurant {
    construct(page) {
        this.page= page;

        this.nameInput = 'input[type="restaurantname"]';
        this.openInput = 'input[type="opentime"]';
        this.closeInput = 'input[type="closetime"]';
        this.addressInput = 'input[type="address"]';
        this.errorMessage = '.error';
    }
    async gotoSetting() {
        await this.page.goto('https://example.com/setting');
    }

    async setRestuarant(name,open,close,address){
        await page.fill(this.nameInput, name);
        await page.fill(this.openInput, open);
        await page.fill(this.closeInput, close);
        await page.fill(this.addressInput, address);

        await page.click('button:has-text("Save Setting"')
    }
   
    async getErrorMessage() {
        return await this.page.textContent(this.errorMessage);
    }
}
module.exports = {Restaurant}