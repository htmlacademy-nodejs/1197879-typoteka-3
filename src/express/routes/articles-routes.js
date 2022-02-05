'use strict';

const {Router} = require(`express`);

const articlesRoutes = new Router();

articlesRoutes.get(`/:id`, (_req, res) => res.send(`/articles/:id`));
articlesRoutes.get(`/category/:id`, (_req, res) => res.send(`/articles/category/:id`));
articlesRoutes.get(`/add`, (_req, res) => res.send(`/articles/add`));
articlesRoutes.get(`/edit/:id`, (_req, res) => res.send(`/articles/edit/:id`));

module.exports = articlesRoutes;
