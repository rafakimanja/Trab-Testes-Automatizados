# Trab-Testes-Automatizados

Colaboradores: **_Rafael Lopes_** e **_Pedro Henrique_**

### Sobre

Este é o repositório para o trabalho sobre testes da disciplina de Frameworks para Desenvolvimento de Software. 
O objetivo deste trabalho é desenvolver um sistema para testar o site [CoinMarketCap](https://coinmarketcap.com/), que é um site que reune diversas informações sobre criptomoedas

---

### Tecnologias

Decidimos desenvolver o sistema em _JavaScript_, usando frameworks de testes como _Jest_ e _Selenium_

Desenvolvimento   | Tecnologia
------------------|-----------
Sistema           | JavaScript
Testes Unitários  | Jest
Teste Sistema     | Selenium

---

## Planos de Teste

Para o plano de teste vamos criar 3 testes principais para testar a funcionalidade do site.

### 1. Buscar Criptomoeda

O primeiro teste será o de entrar no site e buscar por uma criptomoeda em específico, então ele irá comparar se os dados retornados condizem com o esperado, são estes: Nome, Preço e Volume da criptomoeda.

### 2. Listagem Usando Filtros

Para o segundo teste vamos utilizar a opção de filtros na tabela e selecionar a primeira opção que aparacer, então ele irá comparar se os dados retornados condizem com o esperado, são estes: Nome, Preço e Volume da criptomoeda.

### 3. Notícias Atuais sobre Memecoin

Para o terceiro teste, queremos saber qual é a notícia mais recente de uma memecoin listada no mercado, o teste compara se o link atual é uma pagina válida de notícias.

