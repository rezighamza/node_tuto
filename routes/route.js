const express = require('express');
const router = express.Router();
const { get_home_page, get_create_page, get_article_details, delete_article, add_article, get_404_page, redirect_about_me, get_about_page } = require('../controllers/article.js');

router.get('/', get_home_page);
router.get('/about',get_about_page);
router.get('/create',get_create_page );
router.get('/:id', get_article_details);
router.delete('/:id', delete_article);
router.post('/', add_article);
router.get('*',get_404_page);
router.get('/about-me', redirect_about_me);









module.exports = router;
