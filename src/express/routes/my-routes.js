'use strict';

const {Router} = require(`express`);

const myRouter = new Router();

myRouter.get(`/`, (_req, res) => res.render(`my-pages/my`));
myRouter.get(`/comments`, (_req, res) => res.render(`my-pages/comments`));
myRouter.get(`/categories`, (_req, res) => res.render(`my-pages/all-categories`));

module.exports = myRouter;
