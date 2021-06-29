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
    <li>Dia 5: Surface Exploration 24/06 ✔️</li>
</ul>

<h2>💻 Projeto - NLW Valoriza</h2>

<p>NLW Valozira, é uma <a href="https://togethernlw.herokuapp.com/">API</a> desenvolvida com NodeJS, com o objetivo de conectar e valorizar as pessoas através de elogios.</p>

<h2>⛏️ Tecnologias</h2>

<ul>
    <li>Node JS</li>
    <li>Typescript</li>
    <li>Express</li>
    <li>Typeorm</li>
    <li>express-async-errors</li>
    <li>reflect-metadata</li>
    <li>class-transformer</li>
    <li>Sqlite3</li>
    <li>bcryptjs</li>
    <li>JWT</li>
    <li>uuid</li>
    <li>cors</li>
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

# Mude todo o conteúdo de ormconfig.json pelo o techo de código abaixo.
{
    "type": "sqlite",
    "database": "src/database/database.sqlite",
    "migrations": ["src/database/migrations/*.ts"],
    "entities": ["src/entities/*.ts"],
    "cli": {
        "migrationsDir": "src/database/migrations",
        "entitiesDir": "src/entities"
    }
}

# Execute
$ yarn dev

```

<h2>🔥 Como Utilizar a API</h2>

<p>Abaixo é exibido a forma de utilização da API.</p>

<p>API: <a href="https://togethernlw.herokuapp.com/">https://togethernlw.herokuapp.com/</a>, utilize o site https://reqbin.com/ para possíveis testes.</p>

```js
/*
* Home
* @Route("http://host:port/, method={"GET"}")
*/
fetch(url, {
    method: 'GET',
    headers: {
        "Content-type" : "application/json"
    }
})
```

```js
/*
* Add a new User
* @Route("http://host:port/users, method={"POST"}")
*/
fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      name: "Eric",
      email: "ericnevesr@gmail.com",
      password: "admin",
      admin: true // true or false
	}),
    headers: {
    	"Content-type": "application/json; charset=UTF-8"
    }
})
```

```js
/*
* Create a session to receive a token
* @Route("http://host:port/session, method={"POST"}")
*/
fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      email: "ericnevesr@gmail.com",
      password: "admin"
	}),
    headers: {
    	"Content-type": "application/json; charset=UTF-8"
    }
})
```

```js
/*
* List Tags
* @Route("http://host:port/tags, method={"GET"}")
*/
fetch(url, {
    method: 'GET',
    headers: {
        "Content-type" : "application/json",
        "Authorization" : "Bearer {token}"
    }
})
```

```js
/*
* List Tag By Id
* @Route("http://host:port/tags/{ ID }, method={"GET"}")
*/
fetch(url, {
    method: 'GET',
    headers: {
        "Content-type" : "application/json",
        "Authorization" : "Bearer {token}"
    }
})
```

```js
/*
* Add a new tag if you are an administrator
* @Route("http://host:port/tags, method={"POST"}")
*/
fetch(url, {
    method: 'POST',
    body: JSON.stringify({
        name: "Inspiration"
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization" : "Bearer {token}"
    }
})
```

```js
/*
* List Users
* @Route("http://host:port/users, method={"GET"}")
*/
fetch(url, {
    method: 'GET',
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization" : "Bearer {token}"
    }
})
```

```js
/*
* List User By ID
* @Route("http://host:port/users/{ ID }, method={"GET"}")
*/
fetch(url, {
    method: 'GET',
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization" : "Bearer {token}"
    }
})
```

```js
/*
* Add a new compliment
* @Route("http://host:port/compliment, method={"POST"}")
*/
fetch(url, {
    method: 'POST',
    body: JSON.stringify({
        tag_id: "{tag_id}",
        user_receiver: "{receiver_user_id}",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization" : "Bearer {token}"
    }
})
```

```js
/*
* List of compliments sent by user
* @Route("http://host:port/users/compliments/send, method={"GET"}")
*/
fetch(url, {
    method: 'GET',
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization" : "Bearer {token}"
    }
})
```

```js
/*
* List of compliments received 
* @Route("http://host:port/users/compliments/receive, method={"GET"}")
*/
fetch(url, {
    method: 'GET',
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization" : "Bearer {token}"
    }
})
```

```js
/*
* Delete tag if you are an administrator
* @Route("http://host:port/tag, method={"DELETE"}")
*/
fetch(url, {
    method: 'DELETE',
    body: JSON.stringify({
        tag_id: "{tag_id}",
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization" : "Bearer {token}"
    }
})
```

```js
/*
* Update tag if you are an administrator
* @Route("http://host:port/tag, method={"PUT"}")
*/
fetch(url, {
    method: 'PUT',
    body: JSON.stringify({
        tag_id: "{tag_id}",
        tag_name: "Inspiration"
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization" : "Bearer {token}"
    }
})
```

```js
/*
* Delete compliment sent by user
* @Route("http://host:port/compliment, method={"DELETE"}")
*/
fetch(url, {
    method: 'DELETE',
    body: JSON.stringify({
        id_compliment: "{id_compliment}"
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization" : "Bearer {token}"
    }
})
```

```js
/*
* Update compliment sent by user
* @Route("http://host:port/compliment, method={"PUT"}")
*/
fetch(url, {
    method: 'PUT',
    body: JSON.stringify({
        id_compliment: "{id_compliment}",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization" : "Bearer {token}"
    }
})
```


<h2>👾 Autor</h2>

<img src="./github/autor.jpg" width="100px;"/>
<h3><b>Eric Neves</b></h3>
<a href="https://www.linkedin.com/in/ericnevesrr/">
    <img src="./github/linkedin.png" />
</a>
<a href="https://www.instagram.com/eric_nevesr/">
    <img src="./github/instagram.png" />
</a>
