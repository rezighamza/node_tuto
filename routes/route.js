const express = require('express');
const router = express.Router();
const Article = require('../models/article.js');

router.get('/', async (req, res) => {
    Article.find()
    .then((result) => {
        res.render('../views/index.ejs', {articles:result});
    })
    .catch((err) => {
        console.log(err);
    }); 

});
router.get('/about', (req, res) => {
    res.render('../views/about.ejs');
});
router.get('/create', (req, res) => {
    res.render('../views/create.ejs');
});
router.post('/', (req, res) => {
    const article = new Article(req.body);
    article.save()
    .then((result) => {
        res.redirect('/');
    }) 
    .catch((err) => {
        console.log(err);
    });
});
//404
router.get('*', (req, res) => {
    res.status(404).render('../views/notFound.ejs');
});


//redirect about-me to about
router.get('/about-me', (req, res) => {
    res.status(301).redirect('/about');
});



module.exports = router;