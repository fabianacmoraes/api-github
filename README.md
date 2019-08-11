## API-GITHUB

Aplicação responsável pela integração com a API do GitHub, afim de simplificar a busca por um usuário (tomando o login como parâmetro), assim como oferecer a possibilidade de visualizar os detalhes do perfil (na seção `/perfil`) e listar os seus repositórios.

## Tecnologias

Para o desenvolvimento da aplicação, foi utilizado o framework JavaScript [React](https://pt-br.reactjs.org/).

## Estrutura do Projeto

O projeto foi estruturado da seguinte maneira:

```
|-- src
    |-- assets
    |-- components
    |-- pages
```

### Pré-requisitos

Para executar a aplicação, é necessário ter as seguintes configurações no ambiente:

- `npm | yarn`

#### Instalação de Dependências

Para instalar as dependências do projeto, será necessário executar o comando a seguir:

- `npm install | yarn install`

### Scripts Disponíveis

No diretório do projeto, pode-se executar os seguintes comandos:

#### `npm start | yarn start`

Executa a aplicação em modo de desenvolvimento (hot reload).<br>
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar a aplicação.

A cada alteração feita, a página da aplicação irá recarregar.<br>
Todos os problemas relacionados a linter serão exibidos na console do navegador.

#### `npm test | yarn test`

Executa o `test runner` no modo interativo.<br>

#### `npm run build | yarn build`

Monta a estrutura da aplicação que deverá ser utilizada para o ambiente de produção. O conteúdo se encontrará dentro do diretório `build`.<br>
