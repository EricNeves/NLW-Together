<h1 align="center">NextLevelWeek 6.0</h1>
<div align="center">
    <img src="./github/nlw.svg" alt="Logo">
    <br />
    <img src="./github/rocketseat.svg" alt="Logo">
</div><br />

<p align="center">	
<img src="https://img.shields.io/badge/made%20by-Eric%20Neves-%2304D361" alt="Badge">

<img src="https://img.shields.io/github/repo-size/EricNeves/NLW-Together" alt="Badge">

<img src="https://img.shields.io/github/last-commit/ericneves/nlw-together" alt="Badge">

<img src="https://img.shields.io/github/license/ericneves/nlw-together" alt="Badge">

</p>

<h2>🙇🏻‍♂️ O que é a Next Level Week?</h2>

<p>A NLW ou Next Level Week, é um evento online, totalmente gratuito, oferecido pela Rocketseat, que consiste, em uma semana com muito conteúdo prático, cheios de desafios e com um projeto que nos ajudará a avançar e atingir o próximo nível.</p>

<a href="https://rocketseat.com.br/">Rocketseat 🚀</a>

<h2>🌍 Dias</h2>

<ul>
    <li>Dia 1: Liftoff 20/06 ✔️</li>
    <li>Dia 2: Maximum Speed 21/06 ✔️</li>
    <li>Dia 3: In Orbit 22/06 ✔️</li>
    <li>Dia 4: Landing 23/06 ✔️</li>
    <li>Dia 5: Surface Exploration 24/06 </li>
</ul>

<h2>💻 Projeto - NLW Valoriza</h2>

<p>NLW Valozira, é uma API desenvolvida com NodeJS, com o objetivo de conectar e valorizar as pessoas através de elogios.</p>

<h2>⛏️ Tecnologias</h2>

<ul>
    <li>Node JS</li>
    <li>Typescript</li>
    <li>Express</li>
    <li>express-async-errors</li>
    <li>reflect-metadata</li>
    <li>Typeorm</li>
    <li>Sqlite3</li>
    <li>bcryptjs</li>
    <li>JWT</li>
    <li>uuid</li>
    <li>dotenv</li>
</ul>

<h2>💻 Como Executar</h2>

```bash
# Clone
$ git clone git@github.com:EricNeves/NLW-Together.git

# Install Dependencies 
$ cd NLW-Together && yarn install

# Rename file ".env.example" to ".env"
$ mv .env.example .env

# Execute
$ yarn dev

```

<h2>🔥 Como Utilizar</h2>

<p>Abaixo é exibido a forma de utilização da API. </p>

| Route            |          Values              |                   Description                    |
| ---------------- |  --------------------------- | ------------------------------------------------ |
| /users           |  {name, email, password}     | Rota responsável por adicionar um novo usuário.  |
| /tags            |  {name}                      | Rota responsável por adicionar uma nova tag.     |
| /compliments     |  {tag_id, user_sender: id    | Rota responsável por adicionar um elogio.        |
| ---------------- |  user_receiver: id, message} | ------------------------------------------------ |
| /session         |                              |                                                  |
Restante em andamento..

<h2>👾 Autor</h2>

<img style="border-radius: 50%; max-width:100%;" src="./github/autor.jpg" width="100px;"/>
<h3><b>Eric Neves</b></h3>
<a href="https://www.linkedin.com/in/ericnevesrr/">
    <img src="./github/linkedin.png" />
</a>
<a href="https://www.instagram.com/eric_nevesr/">
    <img src="./github/instagram.png" />
</a>
