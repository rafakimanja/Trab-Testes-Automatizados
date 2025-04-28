const { Builder, Browser } = require("selenium-webdriver")

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

//Código simples para abrir uma nova janela e ampliar a janela
async function main(){

    let driver
    let url = 'https://coinmarketcap.com/'

    try {
        driver = await new Builder().forBrowser(Browser.CHROME).build()
        driver.get(url)
        await sleep(5000)
        driver.manage().window().maximize()
        await sleep(5000)
    } catch (error) {
        console.error(error)
    } finally {
        await driver.quit()
    }

}

main()