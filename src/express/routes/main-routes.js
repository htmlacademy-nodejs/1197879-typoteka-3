'use strict';

const {Router} = require(`express`);

const mainRouter = new Router();

mainRouter.get(`/`, (_req, res) => res.send(`/`));

module.exports = mainRouter;
