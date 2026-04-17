class Reservation {
    construct(page) {
        this.page= page;
        
        this.dateInput = 'input[type="date"]';
        this.timeInput = 'input[type="time"]';
        this.numberInput = 'input[type="number"]';
        this.nameInput = 'input[type="name"]';
        this.phoneInput = 'input[type="phone"]'
        this.tableInput = 'div.form-group:has-text("Table") select'
        this.searchButton = 'button:has-text("Search →")';
        this.errorMessage = '.error';
    }  
    async fillTableNTime(date,time,pax){
        await page.fill(this.dateInput, date);
        await page.fill(this.timeInput, time);
        await page.fill(this.numberInput, pax);
    }

    async gotoAvailability() {
        await this.page.goto('https://example.com/availability');
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
    
    async gotoWalkin(){
        await this.page.goto('https://example.com/walkin')
    }
    async walkInReservation(name,phone,date,time,pax,table) {
        await page.fill(this.nameInput,name)
        await page.fill(this.phoneInput,phone)
        await page.fillTableNTime(date,time,pax);
        await page.selectOption(this.tableInput, table);
    }
    
    async gotoMyReservation(){
        await this.page.goto('https://example.com/myreservation');
    }
    async modifyReservation(id,date,time,pax,table){

        const row = page.locator('tr').filter({
            hasText: `#${id}`
        });
        await row.locator('button:has-text("Modify")').click();

        await page.fillTableNTime(date,time,pax);
        await page.selectOption(this.tableInput, table);

        await page.click('button:has-text("Save Setting"')
    }
    async cancelReservation(id){
        const row = page.locator('tr').filter({
            hasText: `#${id}`
        });
        await row.locator('button:has-text("Cancel")').click();
        await page.click('button:has-text("Confirm Cancellation"')
    }

      async getErrorMessage() {
        return await this.page.textContent(this.errorMessage);
    }
    
}
module.exports = {Reservation}