'use strict';

const {Router} = require(`express`);

const mainRouter = new Router();

mainRouter.get(`/`, (_req, res) => res.render(`main-pages/main`));

module.exports = mainRouter;
