'use strict';

const DEFAULT_PORT = 8080;
const PUBLIC_DIR = `public`;

const express = require(`express`);
const path = require(`path`);

const mainRouter = require(`./routes/main-routes.js`);
const registerRouter = require(`./routes/register-routes.js`);
const loginRouter = require(`./routes/login-routes.js`);
const articlesRouter = require(`./routes/articles-routes.js`);
const myRouter = require(`./routes/my-routes.js`);
const searchRouter = require(`./routes/search-routes.js`);

const app = express();

app.set(`view engine`, `pug`);
app.set(`views`, path.resolve(__dirname, `templates`));

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));

app.use(`/`, mainRouter);
app.use(`/register`, registerRouter);
app.use(`/login`, loginRouter);
app.use(`/articles`, articlesRouter);
app.use(`/my`, myRouter);
app.use(`/search`, searchRouter);

app.listen(DEFAULT_PORT);
