'use strict';

const {Router} = require(`express`);

const articlesRoutes = new Router();

articlesRoutes.get(`/:id`, (_req, res) => res.render(`articles-pages/post-detail`));
articlesRoutes.get(`/category/:id`, (_req, res) => res.render(`articles-pages/articles-by-category`));
articlesRoutes.get(`/add`, (_req, res) => res.render(`articles-pages/post`));
articlesRoutes.get(`/edit/:id`, (_req, res) => res.render(`articles-pages/post`));

module.exports = articlesRoutes;
