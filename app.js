const express = require('express');
const router = require('./routes/route.js');
const mongoose = require('mongoose');


const app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
//connect to mongodb
const dbURI = 'mongodb+srv://sterbenrk987:eyIokcArWeaTLx16@cluster0.zbstvzo.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then(() =>app.listen(3000) )
    .catch((err) => console.log(err));



app.use('/', router);








