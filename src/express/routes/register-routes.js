'use strict';

const {Router} = require(`express`);

const registerRoutes = new Router();

registerRoutes.get(`/`, (_req, res) => res.render(`register-pages/sign-up`));

module.exports = registerRoutes;
