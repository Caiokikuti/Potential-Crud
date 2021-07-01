# API POTENTIAL CRUD REST - Feathers js

## Descrição

<p>Projeto de uma API REST utilizando o framework Feathers e o DB PostgreSQL</p>

## Tópicos

<!--ts-->

- [Descrição](#descrição)
- [Features](#features)
- [Pré-requisitos](#pré-requisitos)
- [Executar](#executar)
- [Endpoints](#endpoints)
- [Tecnologias utilizadas](#tecnologias)
- [Testes](#testes)
- [Autor](#autor)
<!--te-->

## Features

- [x] Autenticação de usuário usando jwt
- [x] Listagem de todos os desenvolvedores
- [x] Listagem de desenvolvedor por ID
- [x] Listagem de desenvolvedor pelos atributos nome, sexo, idade, data de nascimento e hobby
- [x] Busca de de desenvolvedor pelos atributos nome, sexo, idade, data de nascimento e hobby
- [x] Cadastro de desenvolvedor
- [x] Exclusão de desenvolvedor
- [x] Edição de dado do desenvolvedor

## Pré-requisitos

<p>Para rodar o projeto são necessárias as técnologias Nodejs e Docker</p>

## Executar

<p>Para subir o banco e a API basta rodar o comando:</p>

```bash
docker-compose up -d
```

<p>Para rodar os scripts de migração de tabela é necessário rodar:</p>

```bash
npm install -g db-migrate
```

<p>Em sequencia execute a migração pelo comando:</p>

```bash
db-migrate up
```

<p>Após subir os containers e realizar as migrações a api ficará alocada na porta 3030 (acesso por: http://localhost:3030 ) e o banco ficara alocado na porta 5432 </p>

<p>Caso deseje parar a execução do container, utilize:</p>

```bash
docker-compose down
```

## Endpoints

<p>Caso deseje parar a execução do container, utilize:</p>

## Tecnologias

<p>As seguintes ferramentas foram utilizadas na construção do projeto:</p>

- [Node.js](https://nodejs.org/en/)
- [Feathers](https://docs.feathersjs.com/)
- [PostgresSQL](https://www.postgresql.org/)
- [DB-Migrate](https://www.npmjs.com/package/db-migrate)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Mocha](https://mochajs.org/)

## Testes

<p>Para a realização dos testes unitários, execute:</p>

```bash
yarn test
```

## Autor

---

<a href="https://www.linkedin.com/in/caio-eduardo-kikuti-machado">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/37967111?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Caio Eduardo Kikuti Machado</b></sub></a> <a href="https://www.linkedin.com/in/caio-eduardo-kikuti-machado"> </a>

Contatos:

[![Linkedin Badge](https://img.shields.io/badge/-Caio-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/caio-eduardo-kikuti-machado)](https://www.linkedin.com/in/caio-eduardo-kikuti-machado)
[![Gmail Badge](https://img.shields.io/badge/-jakcaio@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jakcaio@gmail.com)](mailto:jakcaio@gmail.com)
