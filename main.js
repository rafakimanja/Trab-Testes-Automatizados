const {By, Builder, Browser } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

let driver;
let url = 'https://coinmarketcap.com/';
let options = new chrome.Options();
options.setChromeLogFile('NUL');
options.addArguments('--log-level=3');

//Código simples para abrir uma nova janela e ampliar a janela
async function main(){
    try {
        driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();
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
        driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();
        driver.get(url);
        await sleep(1000);
        driver.manage().window().maximize();
        await sleep(3000);
        driver.findElement(By.className('sc-f48f9b47-1 cIjdOW')).click();
        await sleep(3000);
        driver.findElement(By.className('sc-951d4f56-3 gNFMEo search-input desktop-input')).sendKeys('bitcoin');
        await sleep(3000);
        driver.findElement(By.className('SearchCryptoRow_container__rfpiB')).click();
        await sleep(10000);
        getDados();
        await sleep(60000);
    } catch (error) {
        console.error(error);
    } finally {
        await driver.quit();
    }
}
//teste1();

async function teste2(){
    try {
        driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();
        driver.get(url);
        await sleep(1000);
        driver.manage().window().maximize();
        await sleep(3000);
        driver.findElement(By.className('sc-65e7f566-0 eQBACe BaseButton_base__34gwo bt-base BaseButton_t-default__8BIzz BaseButton_size-sm__oHKNE BaseButton_v-tertiary__AhlyE BaseButton_vd__gUkWt TableListingFiltersV4_button__Ipkdq')).click();
        await sleep(3000);
        driver.findElement(By.css('body > div:nth-child(10) > div:nth-child(2) > div > div > div.modal-body-wrapper.Modal_dialog-body-wrapper__G4CTp.Modal_dialog-common-wrapper-space__9oWxL > div > div:nth-child(1) > div.Form_field-container__ovGrK > div > div.append-comp-container')).click();
        await sleep(3000);
        driver.findElement(By.xpath('/html/body/div[6]/div/div/div/div/div/div/div[5]/span/div/div/div')).click();
        await sleep(3000);
        driver.findElement(By.css('body > div:nth-child(10) > div:nth-child(2) > div > div > div.FilterModalFooter_footer___MstY > button.sc-65e7f566-0.eQBACe.BaseButton_base__34gwo.bt-base.BaseButton_t-default__8BIzz.BaseButton_size-md__9TpuT.BaseButton_v-primary__gkWpJ.BaseButton_vd__gUkWt')).click();
        await sleep(5000);
        driver.findElement(By.className('sc-65e7f566-0 iPbTJf coin-item-name')).click();
        await sleep(10000);
        getDados();
        await sleep(60000);
    } catch (error) {
        console.error(error);
    } finally {
        await driver.quit();
    }
}
//teste2();

async function teste3(){
    try {
        driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();
        driver.get(url);
        await sleep(1000);
        driver.manage().window().maximize();
        await sleep(3000);
        driver.findElement(By.className('sc-65e7f566-0 eQBACe BaseButton_base__34gwo bt-base BaseButton_t-default__8BIzz BaseButton_size-sm__oHKNE BaseButton_v-tertiary__AhlyE BaseButton_vd__gUkWt TableListingFiltersV4_button__Ipkdq')).click();
        await sleep(3000);
        driver.findElement(By.css('body > div:nth-child(10) > div:nth-child(2) > div > div > div.modal-body-wrapper.Modal_dialog-body-wrapper__G4CTp.Modal_dialog-common-wrapper-space__9oWxL > div > div:nth-child(2) > div.Form_field-container__ovGrK > div > div.append-comp-container')).click();
        await sleep(3000);
        driver.findElement(By.xpath('/html/body/div[3]/div[2]/div/div/div[2]/div/div[2]/div[2]/div/div[1]/div/span/input')).sendKeys('memes');
        await sleep(3000);
        driver.findElement(By.xpath('/html/body/div[6]/div/div/div/div/div/div/div[5]/span/div/div/div')).click();
        await sleep(3000);
        driver.findElement(By.css('body > div:nth-child(10) > div:nth-child(2) > div > div > div.FilterModalFooter_footer___MstY > button.sc-65e7f566-0.eQBACe.BaseButton_base__34gwo.bt-base.BaseButton_t-default__8BIzz.BaseButton_size-md__9TpuT.BaseButton_v-primary__gkWpJ.BaseButton_vd__gUkWt')).click();
        await sleep(5000);
        driver.findElement(By.className('sc-65e7f566-0 iPbTJf coin-item-name')).click();
        await sleep(10000);
        driver.findElement(By.xpath('/html/body/div[1]/div[2]/div/div[2]/div/div/div[2]/div/nav/div/div/div/div[3]/div/span')).click();
        await sleep(5000);
        driver.findElement(By.xpath('/html/body/div[1]/div[2]/div/div[2]/div/div/div[6]/div[1]/div/div/div/div/ul/li[2]/div/div/h5')).click();
        await sleep(5000);
        driver.findElement(By.xpath('/html/body/div[1]/div[2]/div/div[2]/div/div/div[6]/div[2]/section/div/div/div[1]/a/div[2]/div[1]/div[1]/div[1]/div/h5')).click();
        await sleep(60000);
    } catch (error) {
        console.error(error);
    } finally {
        await driver.quit();
    }
}
teste3();

async function getDados(){
    let nome = await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div/div[2]/div/div/div[1]/div/section/div/div[1]/h1/span')).getText();
    console.log(nome);
    let valor = await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div/div[2]/div/div/div[1]/div/section/div/div[2]/span')).getText();
    console.log(valor);
    let valorNumerico = parseFloat(valor.replace('$', '').replace(/,/g, ''));
    console.log(valorNumerico);
}