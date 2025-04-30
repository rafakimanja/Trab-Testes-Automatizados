const { By, Builder, Browser } = require("selenium-webdriver")
const chrome = require("selenium-webdriver/chrome")
const sleep = require("../service/sleep")

class FiltroCriptomoeda {

    url = 'https://coinmarketcap.com/'
    driver = null
    options = new chrome.Options()

    botaoAbrirFiltro = By.className('sc-65e7f566-0 eQBACe BaseButton_base__34gwo bt-base BaseButton_t-default__8BIzz BaseButton_size-sm__oHKNE BaseButton_v-tertiary__AhlyE BaseButton_vd__gUkWt TableListingFiltersV4_button__Ipkdq')
    campoFiltroCategoria = By.css('body > div:nth-child(10) > div:nth-child(2) > div > div > div.modal-body-wrapper.Modal_dialog-body-wrapper__G4CTp.Modal_dialog-common-wrapper-space__9oWxL > div > div:nth-child(1) > div.Form_field-container__ovGrK > div > div.append-comp-container')
    opcaoCategoria = By.xpath('/html/body/div[6]/div/div/div/div/div/div/div[5]/span/div/div/div')
    botaoAplicarFiltro = By.css('body > div:nth-child(10) > div:nth-child(2) > div > div > div.FilterModalFooter_footer___MstY > button.sc-65e7f566-0.eQBACe.BaseButton_base__34gwo.bt-base.BaseButton_t-default__8BIzz.BaseButton_size-md__9TpuT.BaseButton_v-primary__gkWpJ.BaseButton_vd__gUkWt')
    primeiroItemLista = By.className('sc-65e7f566-0 iPbTJf coin-item-name')

    //configurar o driver do selenium
    async init() {
        this.options.setChromeLogFile("NUL")
        this.options.addArguments("--log-level=3")

        this.driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(this.options).build()
    }

    //metodo para abrir o navegador
    async abreNavegador() {
        await this.driver.get(this.url)
        await sleep(5000)
        await this.driver.manage().window().maximize()
        await sleep(5000)
    }

    //metodo que abre o filtro da tabela, seleciona uma categoria e aplica o filtro
    async aplicaFiltroCategoria() {
        await this.driver.findElement(this.botaoAbrirFiltro).click()
        await sleep(5000)
        await this.driver.findElement(this.campoFiltroCategoria).click()
        await sleep(5000)
        await this.driver.findElement(this.opcaoCategoria).click()
        await sleep(5000)
        await this.driver.findElement(this.botaoAplicarFiltro).click()
        await sleep(5000)
    }

    //metodo que seleciona a primeira opção exibida após os filtros
    async selecionaPrimeiraCripto() {
        await this.driver.findElement(this.primeiroItemLista).click()
        await sleep(5000)
    }
}

module.exports = FiltroCriptomoeda
