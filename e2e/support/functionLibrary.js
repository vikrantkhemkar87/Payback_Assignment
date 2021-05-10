const pgObject = require('./pgIdentifier.json')
module.exports = {
    async singleClick(identifier) {
        await browser.findElement(By.xpath(identifier)).click()
    },
    async typeText(identifier, text) {
        await  browser.findElement(By.xpath(identifier)).sendKeys(text)
    },
    async doubleClick(identifier) {
        await browser.findElement(By.xpath(identifier))
    },
    async closeBrowser(){
        await browser.close()
    }

}