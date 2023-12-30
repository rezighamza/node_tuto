const express = require('express');
const articlesRoutes = require('./routes/route.js');
const authRoutes = require('./routes/auth.js');
const mongoose = require('mongoose');


const app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//connect to mongodb
const dbURI = 'mongodb+srv://sterbenrk987:eyIokcArWeaTLx16@cluster0.zbstvzo.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then(() =>{
        app.listen(3000)
        console.log('connected to db');
    })
    .catch((err) => console.log(err));


//Routes
app.use('/', authRoutes);
app.use('/', articlesRoutes);









