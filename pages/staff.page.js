class StaffAuthority{
     construct(page) {
        this.page= page;
    } 
    async gotoTable() {
        await this.page.goto('https://example.com/table');
    }

    async updateStatus(table,status){
         const row = page.locator('tr').filter({
            hasText: `${table}`
        });
        const dropdown = row.locator('select');
        await dropdown.selectOption({ label: status });
        await page.click('button:has-text("Save Status Changes →")')
    }
}
module.exports = {StaffAuthority}