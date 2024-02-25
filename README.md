# Desafio Tax Strategy

## Tecnologias utilizadas

- [NodeJS](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
- [Angular 17](https://angular.dev/)
- [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Docker](https://www.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/)
- [Postman](https://www.postman.com/)

# Como executar o projeto

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Docker](https://www.docker.com/products/docker-desktop) e [Docker-compose](https://docs.docker.com/compose/install/).

## Rodando o Sistema

##### Clone este repositório:
    
```bash
$ git clone git@github.com:lsprgabriel/desafio-taxstrategy.git
```

##### Acesse a pasta do projeto no terminal/cmd:

```bash
$ cd desafio-taxstrategy
```

##### Execute o docker-compose para criar o container do MongoDB e do NestJS:

```bash
$ docker-compose up -d # Talvez seja necessário executar como administrador(sudo)
```

Pronto! 

O Backend em Nestjs estará rodando em http://localhost:3000 

O Frontend em Angular 17 em http://localhost:8000

# TaxStrategy | Repair

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
