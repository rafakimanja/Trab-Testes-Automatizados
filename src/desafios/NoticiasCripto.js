const { By, Builder, Browser } = require("selenium-webdriver")
const chrome = require("selenium-webdriver/chrome")
const sleep = require("../service/sleep")

class NoticiasCriptomoeda {

    url = 'https://coinmarketcap.com/'
    driver = null
    options = new chrome.Options()
    
    botaoAbrirFiltro = By.className('sc-65e7f566-0 eQBACe BaseButton_base__34gwo bt-base BaseButton_t-default__8BIzz BaseButton_size-sm__oHKNE BaseButton_v-tertiary__AhlyE BaseButton_vd__gUkWt TableListingFiltersV4_button__Ipkdq')
    campoTagFiltro = By.css('body > div:nth-child(10) > div:nth-child(2) > div > div > div.modal-body-wrapper.Modal_dialog-body-wrapper__G4CTp.Modal_dialog-common-wrapper-space__9oWxL > div > div:nth-child(2) > div.Form_field-container__ovGrK > div > div.append-comp-container')
    inputTag = By.xpath('/html/body/div[3]/div[2]/div/div/div[2]/div/div[2]/div[2]/div/div[1]/div/span/input')
    opcaoTag = By.xpath('/html/body/div[6]/div/div/div/div/div/div/div[5]/span/div/div/div')
    botaoAplicarFiltro = By.css('body > div:nth-child(10) > div:nth-child(2) > div > div > div.FilterModalFooter_footer___MstY > button.sc-65e7f566-0.eQBACe.BaseButton_base__34gwo.bt-base.BaseButton_t-default__8BIzz.BaseButton_size-md__9TpuT.BaseButton_v-primary__gkWpJ.BaseButton_vd__gUkWt')
    primeiroItem = By.className('sc-65e7f566-0 iPbTJf coin-item-name')
    abaRelated = By.xpath('/html/body/div[1]/div[2]/div/div[2]/div/div/div[2]/div/nav/div/div/div/div[3]/div/span')
    cardProjeto = By.xpath('/html/body/div[1]/div[2]/div/div[2]/div/div/div[6]/div[1]/div/div/div/div/ul/li[2]/div/div/h5')
    cardDetalheProjeto = By.xpath('/html/body/div[1]/div[2]/div/div[2]/div/div/div[6]/div[2]/section/div/div/div[1]/a/div[2]/div[1]/div[1]/div[1]/div/h5')

    constructor(categoria){
        this.categoria = categoria
    }

    async init() {
        this.options.setChromeLogFile("NUL")
        this.options.addArguments("--log-level=3")

        this.driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(this.options).build()
    }

    async abreNavegador() {
        await this.driver.get(this.url)
        await sleep(1000)
        await this.driver.manage().window().maximize()
        await sleep(3000)
    }

    async aplicaFiltroPorTag() {
        await this.driver.findElement(this.botaoAbrirFiltro).click()
        await sleep(3000)
        await this.driver.findElement(this.campoTagFiltro).click()
        await sleep(3000)
        await this.driver.findElement(this.inputTag).sendKeys(this.categoria)
        await sleep(3000)
        await this.driver.findElement(this.opcaoTag).click()
        await sleep(3000)
        await this.driver.findElement(this.botaoAplicarFiltro).click()
        await sleep(5000)
    }

    async selecionaPrimeiroItem() {
        await this.driver.findElement(this.primeiroItem).click()
        await sleep(10000)
    }

    async navegaParaProjetoRelacionado() {
        await this.driver.findElement(this.abaRelated).click()
        await sleep(5000)
        await this.driver.findElement(this.cardProjeto).click()
        await sleep(5000)
        await this.driver.findElement(this.cardDetalheProjeto).click()
        await sleep(5000)
    }

    async pegaUrl() {
        return await this.driver.getCurrentUrl()
    }
}

module.exports = NoticiasCriptomoeda
