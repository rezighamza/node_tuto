const express = require('express'); 
const { get_login_page, get_signup_page ,login , signup} = require('../controllers/user.js');
router = express.Router();

router.get('/login',get_login_page)
router.get('/signup',get_signup_page)
router.post('/login',login)
router.post('/signup',signup)


module.exports = router;