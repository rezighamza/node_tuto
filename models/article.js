const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title:{
        type:String,
        required: true,
    },
    snippet:{
        type:String,
    },
    body:{
        type:String,
        required:true,
    }
    }
)



const Article =mongoose.model('Article', articleSchema);
module.exports = Article;