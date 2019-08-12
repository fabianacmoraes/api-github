## API-GITHUB

Aplicação responsável pela integração com a API do GitHub, afim de simplificar a busca por um usuário (tomando o login como parâmetro), assim como oferecer a possibilidade de visualizar os detalhes do perfil (na seção `/perfil`) e listar os seus repositórios.

## Tecnologias

Para o desenvolvimento da aplicação, foi utilizado o framework JavaScript [React](https://pt-br.reactjs.org/).

## Estrutura do Projeto

O projeto foi estruturado da seguinte maneira:

```
|-- src
    |-- assets
        |-- css
            `-- *.css // CSS global
    |-- components
        |-- Busca
            `-- busca.css
            `-- index.js
        |-- Cabecalho
            `-- cabecalho.css
            `-- index.js
        |-- Listagem
            `-- index.js
        |-- NavMenu
            `-- navmenu.css
            `-- index.js
        |-- Repositorio
            `-- repositorio.css
            `-- index.js
        |-- Usuario
            `-- usuario.css
            `-- index.js
        |-- Widget
            `-- widget.css
            `-- index.js
    |-- pages
        |-- Home
            `-- index.js
        |-- Perfil
            `-- index.js
    |-- utils
        `-- array.js
    `-- App.css
    `-- App.js
    `-- index.css
    `-- index.js
    `-- routes.js
    `-- serviceWorker.js
```

### Pré-requisitos

Para executar a aplicação, é necessário ter um dos seguintes gerenciadores de pacotes no ambiente:

- `npm` ou `yarn`

#### Instalação de Dependências

Para instalar as dependências do projeto, será necessário executar o comando a seguir:

- `npm install` ou `yarn install`

### Scripts Disponíveis

No diretório do projeto, pode-se executar os seguintes comandos:

#### `npm start` ou `yarn start`

Executa a aplicação em modo de desenvolvimento (hot reload).<br>
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar a aplicação.

A cada alteração feita, a página da aplicação irá recarregar.<br>
Todos os problemas relacionados a linter serão exibidos na console do navegador.

#### `npm run build` ou `yarn build`

Monta a estrutura da aplicação que deverá ser utilizada para o ambiente de produção. O conteúdo se encontrará dentro do diretório `build`, na raíz do projeto.<br>
