jest.setTimeout(60000);

const NoticiasCriptomoeda = require('../desafios/NoticiasCripto')

test("Testa automacao de buscar a noticia mais recente de uma memecoin", async () => {
    let noticias = new NoticiasCriptomoeda('memes')

    try {
        await noticias.init()
        await noticias.abreNavegador()
        await noticias.aplicaFiltroPorTag()
        await noticias.selecionaPrimeiroItem()
        await noticias.navegaParaProjetoRelacionado()
        const url = await noticias.pegaUrl()
        expect(url).toContain("#News")
    } catch (error) {
        console.error(error)
    } finally {
        await noticias.driver.quit()
    }
})