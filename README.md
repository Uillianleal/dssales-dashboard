# DSSales
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/neliocursos/exemplo-readme/blob/main/LICENSE) 

# Sobre o projeto


DS Sales é uma aplicação full stack e mobile desenvolvido no Módulo 12 do curso BootCamp Spring React da DevSuperior [DevSuperior](https://devsuperior.com.br/ "Site da DevSuperior").

Este projeto foi elaborado como parte da conclusão do Módulo 12 - Dashboard, do nosso curso, visando solidificar e demonstrar os conhecimentos adquiridos sobre o tema. Trata-se de um painel de controle analítico que exibe as vendas de diversas lojas, situadas em diferentes localidades, dentro de um intervalo de tempo específico. Utilizando ApexCharts, os dados são visualizados por meio de gráficos intuitivos, permitindo a filtragem das vendas por período e gênero.

A interface inclui um segmento dedicado à análise de vendas, exibindo a média, quantidade, mínimas e máximas vendas no período selecionado. Inclui-se um gráfico compreensivo das quantidades de vendas, além de outros que discriminam as vendas totais por loja e por métodos de pagamento. Complementarmente, uma tabela detalhada fornece uma visão completa das transações comerciais realizadas no intervalo definido, enriquecendo a análise e oferecendo insights valiosos para a tomada de decisões.


## Layout web
![Web 1](https://github.com/Uillianleal/imagens/blob/main/assets-dssales/dssales-01.png?raw=true)

![Web 2](https://github.com/Uillianleal/imagens/blob/main/assets-dssales/dssales-02.png?raw=true)


## Modelo conceitual
![Modelo Conceitual](https://github.com/Uillianleal/imagens/blob/main/assets-dssales/model_dashboard.png?raw=true)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven

## Front end
- HTML / CSS / Sass/ Bootstrap/ JS / TypeScript
- ReactJS
- Axios
- React Hook Forms
- React Select
- Entre outras

- ## Implantação em produção
- Back end: heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone git@github.com:Uillianleal/dssales-dashboard.git

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn 

nvm: version 14.21.3

```bash
# clonar repositório
git clone git@github.com:Uillianleal/dssales-dashboard.git

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor
Uillian Leal Santos

linkedin: https://www.linkedin.com/in/uillian-leal-santos-06a897161/
