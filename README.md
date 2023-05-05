# Desafio React Jr Server Softwares

## Tecnologias utilizadas:

- Backend (NodeJS, Express, Nodemon, MongoDB, TypeScript)
- Frontend (React/Vite, Styled-Components , TypeScript)

## Descrição do processo de criação

  

1. Backend
  Iniciei pelo backend como recomendado por trazer mais facilidade posteriormente para criar o frontend já com os campos e dados para retornar 	Criei rotas para criação, leitura, atualização e exclusão de produtos. 	
  Desafio pedia apenas código, preço, descrição e data de criação porém inclui também o nome para melhor gerenciar os produtos do que apenas via "código". 	Utilizei mongoose criar um modelo que padronizasse como seriam os 'produtos' e criei um arquivo de rotas para que chamavam as funções do CRUD da API. 	Criada a API fui iniciar o frontend.
---
2. Banco de Dados
  Para o banco de dados utilizei o MongoDB que é a base de dados que mais tenho utilizado tanto local quando a versão Atlas. Para esta aplicação utilizei a versão local.
---
3. Frontend
  Criei um projeto React utilizando Vite. Criei um SPA por facilitar a utilização da aplicação. 
  Montei um cabeçalho com o nome do desafio e da empresa. Montei a tabela e já fiz a requisição para que assim que carregasse a tela mostrasse os produtos já cadastrados.
  Inclui as ações de Editar, Excluir, e Detalhes. Editar irá mostrar os campos já cadastrados e é possível alterar os campos para atualizar na base de dados as informações. Excluir mostra um alerta de confirmação para deletar produto da base de dados. Detalhes para visualizar todos os dados do produto escolhido.

## Rodando projeto
- Primeiramente rode: 
  
```sh
yarn install / npm install
```
- Para rodar o projeto em modo dev

```sh
yarn dev / npm run dev
```