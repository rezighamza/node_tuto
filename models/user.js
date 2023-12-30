const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type:String,
        required: true,
        unique:true,
        validate:[isEmail,'invalid email']
    },
    password:{
        type:String,
        required:true,
        minlength:4,
    },
}
)

userSchema.pre('save',function(next){
    const salt = bcrypt.genSaltSync(10);
    const password = this.password;
    bcrypt.hash(password,salt)
    .then((result)=>{
        this.password = result;
        next();
    })
    .catch((err)=>{
        console.log(err);
    })
})






const User =mongoose.model('User', userSchema);
module.exports = User;