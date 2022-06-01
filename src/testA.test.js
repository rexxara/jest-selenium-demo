const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

describe('/ (Home Page)', () => {
    let driver;
    beforeAll(async () => {
        driver = await new Builder().forBrowser(Browser.CHROME).build();

        await driver.get('https://google.com');

    })

    afterAll(async () => {
        await driver.quit();
    })

    it('should load without error', async () => {
        const title = await driver.getTitle();
        expect(title).toContain('Google')
    })
})