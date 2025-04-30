jest.setTimeout(30000);

const BuscaCriptomoeda = require("../desafios/BuscaCripto");
const getDados = require("../service/converteDados");

test("Testa automacao de buscar criptomoeda por nome", async () => {
  let buscaCripto = new BuscaCriptomoeda("solana");
  try {
    await buscaCripto.init();
    await buscaCripto.abreNavegador();
    await buscaCripto.clicaBarraPesquisa();
    await buscaCripto.buscaModal();
    await buscaCripto.selecionaResultado();
    const dados = await getDados(buscaCripto.driver);

    expect(dados.nome).toMatch(/^[A-Za-z\s]+$/);
    expect(dados.valor).toMatch(/^\$\d+(\.\d+)?$/);
    expect(dados.volume).toMatch(/^\$\d+(\.\d+)?[\s\S]*$/);
  } catch (error) {
    console.error(error);
  } finally {
    await buscaCripto.driver.quit();
  }
});
