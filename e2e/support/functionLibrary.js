const pgObject = require('./pgIdentifier.json')
module.exports = {
    async singleClick(identifier) {
        await browser.findElement(By.xpath(identifier)).click()
        //browser.sleep(3000)
    },
    async typeText(identifier, text) {
        await  browser.findElement(By.xpath(identifier)).sendKeys(text)
    },
    async doubleClick(identifier) {
        await browser.findElement(By.xpath(identifier))
    },
    async waitToClick(identifier, waitTime) {
        cy.get(identifier, {timeout: waitTime}).should('be.visible')
    },
    async clearFieldText(identifier) {
        cy.get(identifier).focused().clear()
    },
    async closeBrowser(){
        await browser.close()
    }

}