'use strict';

const {Router} = require(`express`);

const registerRoutes = new Router();

registerRoutes.get(`/`, (_req, res) => res.send(`/register`));

module.exports = registerRoutes;
