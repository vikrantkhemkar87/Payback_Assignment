const {Given, When, Then} = require('cucumber');
const identifier = require('../support/pgIdentifier');
const functionLibrary = require('../support/functionLibrary')
const expect = require('chai').expect;

When(/^I hit the Protractor page URL$/, async () => {
    await browser.get(identifier.protractorUrl);
});

When(/^I click on git button and I should get redirected to gitHub page$/, {timeout: 10 * 1000}, async function () {
    try {
        await browser.waitForAngularEnabled(true)
        await functionLibrary.singleClick(identifier.viewInGitlab)
        await browser.waitForAngularEnabled(false)
        await expect(await browser.driver.getCurrentUrl()).to.be.equal(identifier.protractorGithubRepo)
        await expect(await browser.driver.getTitle()).to.be.include(identifier.gitPageTitle)
        await browser.waitForAngularEnabled(true)
        await browser.get(identifier.protractorUrl)
    } catch (error) {
        console.log(error)
    }

});
When(/^I click on twitter button and Twitter page should get opened in new tab$/, {timeout: 10 * 1000}, async function () {
    try {
        await new Promise(resolve => {
            setTimeout(function () {
                resolve("Page loading");
            }, 2000);
        });
        await browser.switchTo().frame("twitter-widget-0");
        browser.ignoreSynchronization = true

        //await functionLibrary.singleClick(identifier.protractorTwitterButton)

        await functionLibrary.singleClick(identifier.protractorTwitterButton).then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                newWindowHandle = handles[1]; // this is your new window
                browser.switchTo().window(newWindowHandle).then(async function () {
                    await browser.waitForAngularEnabled(false)
                    await new Promise(resolve => {
                        setTimeout(function () {
                            resolve("Page loading");
                        }, 2000);
                    });
                    await expect(await browser.getCurrentUrl()).to.be.include(identifier.protractorTwitterPage)

                });
            });
        });

    } catch (error) {
        console.log(error)
    } finally {
        await browser.close()
    }

});
When(/^I click on Tutorial page link "([^"]*)" and should get redirected to Tutorial page$/, async function (source) {
    try{
        var navigation ={
            "under_Quick_Start":async function(){
                await functionLibrary.singleClick(identifier.quickStartIcon)
                await functionLibrary.singleClick(identifier.tutorialUnderQuickStart)
            },
            "on_Home_Page": async function () {
                await functionLibrary.singleClick(identifier.homePage)
                await functionLibrary.singleClick(identifier.tutorialOnHomepage)
            },
            "under_Protractor_tests": async function(){
                await functionLibrary.singleClick(identifier.protratorTestMenu)
                await functionLibrary.singleClick(identifier.tutorialUnderProtratorTest)
            }

        }
        return navigation[source]()

    }catch(error){
        console.log(error)
    }
    await new Promise(resolve => {
        setTimeout(function () {
            resolve("Page loading");
        }, 2000);
    });

    await expect(await browser.getCurrentUrl()).to.be.equal("https://www.protractortest.org/#/tutorial")

});

When(/^I hit the "([^"]*)" page URL$/,async function (url) {
    try{
        var hitUrl={
            "Payback":async function(){
                await browser.waitForAngularEnabled(false)
                await browser.get(identifier.paybackUrl)
            },
            "Protractor": async function(){
                await browser.get(identifier.protractorUrl)
            }
        }
        hitUrl[url]()
    }catch(errorMessage){
        console.log(errorMessage)
    }
});
Then(/^I verify the "([^"]*)" page title and URL$/,async function (pageLink) {
        try{
            await new Promise(resolve => {
                setTimeout(function () {
                    resolve("Page loading");
                }, 2000);
            });
            const title = await browser.driver.getTitle();
            const url = await browser.driver.getCurrentUrl();
            var validateLaunch={
                "Payback":async function(){
                    await expect(title).to.be.equal(identifier.paybackPagetitle);
                    await expect(url).to.be.include(identifier.paybackUrl);

                },
                "Protractor": async function(){
                    await expect(title).to.be.equal(identifier.protractorPageTitle);
                    await expect(url).to.be.include(identifier.protractorUrl);
                }
            }
           validateLaunch[pageLink]()
        }catch(errorMessage){
            console.log(errorMessage)
        }
});
Then(/^I accept the coookie preferences$/,async function () {
    await new Promise(resolve => { setTimeout(function () {
            resolve("Page loading");
        }, 2000);
    });
    await functionLibrary.singleClick(identifier.cookiePreference)
});
When(/^I search for "([^"]*)" on home page$/,{timeout: 10 * 1000},async function (searchTerm) {
    try{

        await new Promise(resolve => { setTimeout(function () {
            resolve("Page loading");
        }, 8000);
        });
        await functionLibrary.singleClick(identifier.enableSearchField)
        await functionLibrary.typeText(identifier.searchField,searchTerm)
    }
    catch(errorMessage){
        console.log(errorMessage)
        browser.close()
    }

});