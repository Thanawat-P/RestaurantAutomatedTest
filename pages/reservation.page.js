class reservation {
    construct(page) {
        this.page= page;
        
        this.dateInput = 'input[type="date"]';
        this.timeInput = 'input[type="time"]';
        this.numberInput = 'input[type="number"]';
        this.tableInput = 'div.form-group:has-text("Table") select'
        this.searchButton = 'button:has-text("Search →")';
        this.errorMessage = '.error';
    }
    async gotoAvailability() {
        await this.page.goto('https://example.com/availability');
    }
    async fillTableNTime(date,time,pax){
        await page.fill(this.dateInput, date);
        await page.fill(this.timeInput, time);
        await page.fill(this.numberInput, pax);
    }
    async checkAvailability(date,time,pax) {
        await page.click('button:has-text("Check Availability")');
        await page.fillTableNTime(date,time,pax);
        await page.click('button:has-text("Search →")');
    }
    async gotoReservation() {
        await this.page.goto('https://example.com/availability');
    }
    async checkAvailability(date,time,pax,table) {
        await page.click('button:has-text("Check Availability")');
        await page.fillTableNTime(date,time,pax);
        await page.selectOption(this.tableInput, table);
        await page.click('button:has-text("Search →")');
    }
      async getErrorMessage() {
        return await this.page.textContent(this.errorMessage);
    }
}
module.exports = {reservation}