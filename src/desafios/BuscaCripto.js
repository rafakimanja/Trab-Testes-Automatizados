const {By, Builder, Browser } = require("selenium-webdriver")
const chrome = require('selenium-webdriver/chrome')
const sleep = require('../service/sleep')

class BuscaCriptomoeda{

    url = 'https://coinmarketcap.com/'
    driver = null
    options = new chrome.Options()

    //<div class="sc-f48f9b47-1 cIjdOW __web-inspector-hide-shortcut__">Search</div>
    barraPesquisa = By.className('sc-f48f9b47-1 cIjdOW')
    //<input maxlength="200" spellcheck="false" class="sc-951d4f56-3 gNFMEo search-input desktop-input" type="text" placeholder="Search coin, pair, NFT, contract address, exchange, or post" value="">
    barraPesquisaModal = By.className('sc-951d4f56-3 gNFMEo search-input desktop-input')
    //<div class="SearchCryptoRow_container__rfpiB"></div>
    elementoResultado = By.className('SearchCryptoRow_container__rfpiB')
    
    constructor(moeda){
        this.moeda = moeda
    }

    //metodo que configura o driver do Selenium
    async init(){
        this.options.setChromeLogFile('NUL')
        this.options.addArguments('--log-level=3')

        this.driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(this.options).build()
    }

    //metodo para abrir o navegador
    async abreNavegador(){
        this.driver.get(this.url)
        await sleep(5000)
        this.driver.manage().window().maximize()
        await sleep(5000)
    }

    //metodo que seleciona a barra de pesquisa do site
    async clicaBarraPesquisa(){
        this.driver.findElement(this.barraPesquisa).click()
        await sleep(5000)
    }

    //metodo que insere a moeda buscada na barra de pesquisa do modal
    async buscaModal(moeda){
        this.driver.findElement(this.barraPesquisaModal).sendKeys(this.moeda)
        await sleep(5000)
    }

    //metodo que abre o primeiro resultado da pesquisa
    async selecionaResultado(){
        this.driver.findElement(this.elementoResultado).click()
        await sleep(5000)
    }
}

module.exports = BuscaCriptomoeda