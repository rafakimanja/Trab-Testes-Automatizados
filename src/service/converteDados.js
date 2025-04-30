const { By } = require("selenium-webdriver")

async function getDados(driver) {
    let nome = await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div/div[2]/div/div/div[1]/div/section/div/div[1]/h1/span')).getText()
    let valor = await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div/div[2]/div/div/div[1]/div/section/div/div[2]/span')).getText()
    let volume = await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div/div[2]/div/div/div[1]/div/div[2]/section/div/div[1]/div/div/dl/div[2]/div/dd/div/div[1]/div/span')).getText()
    return {nome, valor, volume}
}

module.exports = getDados