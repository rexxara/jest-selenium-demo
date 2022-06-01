const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
  
test('search webdriver', async() => {
  
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    const title = await driver.getTitle();
    console.log(title);
    expect(title).toContain('webdriver');
  } finally {
    await driver.quit();
  }
});