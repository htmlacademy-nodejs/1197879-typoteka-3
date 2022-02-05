'use strict';

const DEFAULT_PORT = 8080;

const express = require(`express`);

const mainRouter = require(`./routes/main-routes.js`);
const registerRouter = require(`./routes/register-routes.js`);
const loginRouter = require(`./routes/login-routes.js`);
const articlesRouter = require(`./routes/articles-routes.js`);
const myRouter = require(`./routes/my-routes.js`);
const searchRouter = require(`./routes/search-routes.js`);

const app = express();

app.use(`/`, mainRouter);
app.use(`/register`, registerRouter);
app.use(`/login`, loginRouter);
app.use(`/articles`, articlesRouter);
app.use(`/my`, myRouter);
app.use(`/search`, searchRouter);

app.listen(DEFAULT_PORT);
