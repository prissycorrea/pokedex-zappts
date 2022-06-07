<img src="https://raw.githubusercontent.com/prissycorrea/pokedex-zappts/fb90335df5835526343f690a506c08deff3165d6/project-images/logo.svg">

# Pokedex
Single Page Application desenvolvida em React JS com objetivo de criar uma Pokedex utilizando a api [PokeApi](https://pokeapi.co/).

## 📝 Objetivo do projeto
O presente projeto foi desenvolvido como teste prático para um processo seletivo da empresa [Zappts](https://www.zappts.com.br/). A proposta era criar uma página da web utilizando React JS, SASS e uma api de Pokémons para criar uma Pokedex seguindo um layout apresentado no Figma.

## Status do projeto
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>

## 💭 Principais desafios encontrados/ainda não concluídos:
A realização desta tarefa foi um grande desafio devido a falta de tempo hábil para me dedicar a realização, visto que foi necessário estudar a ferramenta, já não tinha conhecimento em ReactJS até então. Também encontrei alguns problemas em utilizar o SASS junto ao ReactJS, bem como em implantar uma função que alterasse a cor de fundo dos cards de Pokémon e filtrasse os resultados de busca de acordo com o tipo de cada um. Contudo, infelizmente não foi possível entregar todos os passos do projeto.

## Preview do projeto
<img src="https://github.com/prissycorrea/pokedex-zappts/blob/main/readme-images/pc-home.PNG?raw=true" width="500">
<img src="https://github.com/prissycorrea/pokedex-zappts/blob/main/readme-images/pc-screen-pokedex.PNG?raw=true" width="500">
<img src="https://raw.githubusercontent.com/prissycorrea/pokedex-zappts/fb90335df5835526343f690a506c08deff3165d6/readme-images/mockup-pokedex-mobile.svg" width="550">

## 📁 Acesso ao projeto
Você pode acessar os arquivos do projeto clicando [aqui](https://github.com/prissycorrea/pokedex-zappts).

## ✔ Tecnologias utilizadas
- ``React JS``
- ``CSS``
- ``PokeApi``

## 📦 Dependências
- ``Node JS 14 ou superior``
- ``npm 5.6 ou superior``

## 🧯 Método dos testes realizados
Os testes realizados foram realizados através do comando 'console.log' para verificar a resposta da API, bem como a própria resposta da interface gráfica no navegador para os componentes gráficos e clicáveis.

## 🔨 Descrição/Funcionalidades do projeto
-  [x] `Página inicial/home`: Frase convidando o usuário a escolher um Pokémon, imagem do Pikachu e botão de acesso à Pokedex;

- `Página Pokedex`: 
  - [x] `Pesquisa`: Barra de pesquisa funcional, que retorna o card do Pokémon digitado ou uma mensagem de Pokémon inexistente caso o nome digitado não exista na api;
  - [ ] `Filtro por tipo, ataque ou defesa`: :construction: em construção :construction:
  - [x] `Cards dos Pokemons`: cada página contém 18 cards de diferentes Pokémons, contendo id, nome, tipo, e imagem. Estão organizados em ordem crescente de acordo com seu id;
  - [x] `Botão voltar/avançar página`: dois botões com setas intuitivas para esquerda (voltar) e para direita (avançar);
  - [x] `Página atual`: entre os botões voltar e avançar, há um contador identificando em que página da Pokedex o usuário está.

## 🛠️ Funcionalidades a serem implantadas
- `Mais informações do Pokemon`: Ao clicar no card do Pokémon, um modal se abrirá com outros dados do Pokémon, como tamanho, peso, poder, ataque, etc;
- `Página de contato`: Ao clicar em 'contato', um modal com formulário de contato se abrirá, contendo campo para nome, e-mail, assunto e mensagem;
- `Mudança de cor do card`: Cada tipo de Pokémon terá uma cor de fundo diferente no card (ex.: tipo fogo terá fundo laranja, enquanto o tipo água terá o fundo azul);
- `Link do menu ativo`: ao clicar em um link da barra de menu, o mesmo ficará com peso de fonte maior e com sublinhado abaixo, identificando em que página o usuário está.

## 🚀 Começando
Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.
Este projeto foi desenvolvido com [Create React App](https://github.com/facebook/create-react-app).

## 🔧 Instalação das dependências
### Node JS/npm
Caso utilize sistema operacional Windows, você pode baixar o Node JS através de seu site oficial [clicando aqui](https://nodejs.org/en/)
ou, se utiliza sistema operacional Linux ou prefira instalar via gerenciador de pacotes, o site oficial do Node JS tem o passo-a-passo, acesse [clicando aqui](https://nodejs.org/pt-br/download/package-manager/) 


Após instalar as dependências, abra o terminal e, no diretório do projeto, execute:

### `npm start`

Rode o arquivo no modo desenvolvimento:
Caso utilize a porta padrão, abra [http://localhost:3000/home](http://localhost:3000/home) para ver o projeto no seu navegador, ou siga o endereço utilizado da porta utilizada seguido de `/home` ao final da url.

## 🖖 Pessoa desenvolvedora do projeto
Priscilla Correa

[<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width=30px>](https://www.linkedin.com/in/priscilla-correa/)

