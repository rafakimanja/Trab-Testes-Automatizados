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

- Funcionalidade testada:
Automação da busca de uma criptomoeda por nome, com verificação de retorno de dados (nome, valor e volume) na página da moeda selecionada.

- Input (Entrada):
Nome da criptomoeda a ser buscada: "solana"

- Saídas esperadas:
1. Nome da moeda:
Deve ser uma string composta por letras e espaços, ex: "Solana"
Regex: ```/^[A-Za-z\s]+$/```

2. Valor atual da moeda:
Deve estar no formato monetário em dólares, ex: "$123.45"
Regex: ```/^\$\d+(\.\d+)?$/```

3. Volume de mercado:
Deve estar em formato monetário, podendo conter textos adicionais (ex: “24h volume”)
Regex: ```/^\$\d+(\.\d+)?[\s\S]*$/```

### 2. Listagem Usando Filtros

- Funcionalidade testada:
Automação do processo de filtragem de criptomoedas por categoria e verificação dos dados da primeira moeda listada após a aplicação do filtro.

- Input (Entrada):
1. Abertura do site
   
2. Aplicação de um filtro por categoria (categoria fixa na automação)

3. Seleção do primeiro item da lista resultante


- Saídas esperadas:
1. Nome da criptomoeda:
Deve ser uma string válida com letras e espaços (ex: "Ethereum").
Regex: ```/^[A-Za-z\s]+$/```

2. Valor da criptomoeda:
Deve estar no formato monetário em dólar (ex: "$1234.56").
Regex: ```/^\$\d+(\.\d+)?$/```

3. Volume de mercado:
Deve estar em formato monetário e pode conter outras informações como período (ex: "$2,345,678.90 - 24h volume").
Regex: ```/^\$\d+(\.\d+)?[\s\S]*$/```

### 3. Notícias Atuais sobre Memecoin

- Funcionalidade testada:
filtrando criptomoedas por tag (neste caso "memes"), acessando uma moeda e verificando se a aba atual tem relação a aba de notícias

- Input (Entrada)
Tag da categoria usada como filtro: "memes"

 - Saída esperada:
URL final acessada após a navegação pelos projetos relacionados deve conter a âncora ```"#News"```, indicando que a aba de notícias do projeto foi aberta com sucesso.


