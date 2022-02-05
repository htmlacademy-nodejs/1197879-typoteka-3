'use strict';

const {Router} = require(`express`);

const searchRouter = new Router();

searchRouter.get(`/`, (_req, res) => res.send(`/search`));

module.exports = searchRouter;
