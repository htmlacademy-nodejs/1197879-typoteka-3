'use strict';

const {Router} = require(`express`);

const loginRoutes = new Router();

loginRoutes.get(`/`, (_req, res) => res.send(`/login`));

module.exports = loginRoutes;
