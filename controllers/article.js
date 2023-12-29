const Article = require('../models/article');

function get_home_page(req, res) {
    Article.find()
        .then((result) => {
            res.render('../views/index.ejs', { articles: result });
        })
        .catch((err) => {
            console.log(err);
        });
}
function get_create_page(req, res) {
    res.render('../views/create.ejs');
}
function get_article_details(req, res) {
    const id = req.params.id;
    Article.findById(id)
        .then((result) => {
            res.render('../views/article.ejs', { article: result });
        })
        .catch((err) => {
            console.log(err);
        });
}
function delete_article(req, res) {
    const id = req.params.id;
    Article.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/' });
        })
        .catch((err) => {
            console.log(err);
        });
}
function add_article(req, res) {
    const article = new Article(req.body);
    article.save()
        .then((result) => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
}
function get_404_page(req, res) {
    res.status(404).render('../views/notFound.ejs');
}
function redirect_about_me(req, res) {
    res.redirect('/about');
}
function get_about_page(req, res) {
    res.render('../views/about.ejs');
}


module.exports = {
    get_home_page,
    get_create_page,
    get_article_details,
    delete_article,
    add_article,
    get_404_page,
    redirect_about_me,
    get_about_page
}