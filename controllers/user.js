const User = require('../models/user');
const bcrypt = require('bcrypt');

function get_login_page(req, res) {
    res.json({ message: 'login page' });
}
function get_signup_page(req, res) {
    res.json({ message: 'signup page' });
}
function login(req, res) {
    let { email, password } = req.body;
    User.findOne({ email })
        .then((user) => {
            if (user) {
                const salt = bcrypt.genSaltSync(10);
                bcrypt.hash(password, salt)
                    .then((result) => {
                        console.log(result);    
                        console.log(user.password);
                        if (user.password == result) {
                            res.json({ message: 'login successful' })
                        }
                        else {
                            res.json({ message: 'invalid password' })
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
            else {
                res.json({ message: 'invalid email' })
            }
        })
        .catch((err) => {
            console.log(err);
        })
}
function signup(req, res) {
    let { email, password } = req.body;
    console.log(email, password);
    User.create({ email, password })
        .then((result) => {
            res.json({ message: 'user created', result })
        })
        .catch((err) => {
            console.log(err);
        })
}




module.exports = {
    get_login_page,
    get_signup_page,
    login,
    signup,
}