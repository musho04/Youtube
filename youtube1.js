const { Builder, By, Key, until } = require('selenium-webdriver');
fs = require('fs');
(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    await driver.get('https://www.youtube.com/c/akakasyan/about')
    let container1 = await driver.wait(until.elementLocated(By.id('description-container')));
    let container = await container1.findElement(By.id('description'));
    const text = await container.getText();
    fs.writeFile('helloworld.txt', text, (err) => {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
      });
    console.log('text', text);
    


})();

