const {By, Builder, Browser } = require("selenium-webdriver");

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

let driver;
let url = 'https://coinmarketcap.com/';


//Código simples para abrir uma nova janela e ampliar a janela
async function main(){
    try {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        driver.get(url);
        await sleep(5000);
        driver.manage().window().maximize();
        await sleep(5000);
    } catch (error) {
        console.error(error);
    } finally {
        await driver.quit();
    }
    
}
//main()

async function teste1(){
    try {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        driver.get(url);
        await sleep(1000);
        driver.manage().window().maximize();
        await sleep(3000);
        driver.findElement(By.className('sc-f48f9b47-1 cIjdOW')).click();
        await sleep(3000);
        driver.findElement(By.className('sc-951d4f56-3 gNFMEo search-input desktop-input')).sendKeys('bitcoin');
        await sleep(1000);
        driver.findElement(By.className('SearchCryptoRow_container__rfpiB')).click();
        await sleep(60000);
    } catch (error) {
        console.error(error);
    } finally {
        await driver.quit();
    }
}
teste1();
