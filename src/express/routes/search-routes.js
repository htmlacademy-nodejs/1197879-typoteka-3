'use strict';

const {Router} = require(`express`);

const searchRouter = new Router();

searchRouter.get(`/`, (_req, res) => res.render(`search-pages/search`));

module.exports = searchRouter;
