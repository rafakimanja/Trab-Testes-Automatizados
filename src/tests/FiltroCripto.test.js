jest.setTimeout(90000);

const FiltroCriptomoeda = require("../desafios/FiltroCripto");
const getDados = require("../service/converteDados");

test("Testa automacao de buscar criptomoeda filtrando a tabela", async () => {
  let filtroCripto = new FiltroCriptomoeda();

  try {
    await filtroCripto.init();
    await filtroCripto.abreNavegador();
    await filtroCripto.aplicaFiltroCategoria();
    await filtroCripto.selecionaPrimeiraCripto();
    const dados = await getDados(filtroCripto.driver);

    expect(dados.nome).toMatch(/^[A-Za-z\s]+$/);
    expect(dados.valor).toMatch(/^\$\d+(\.\d+)?$/);
    expect(dados.volume).toMatch(/^\$\d+(\.\d+)?[\s\S]*$/);
  } catch (error) {
    console.error(error);
  } finally {
    await filtroCripto.driver.quit();
  }
});
