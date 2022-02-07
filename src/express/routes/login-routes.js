'use strict';

const {Router} = require(`express`);

const loginRoutes = new Router();

loginRoutes.get(`/`, (_req, res) => res.render(`login-pages/login`));

module.exports = loginRoutes;
