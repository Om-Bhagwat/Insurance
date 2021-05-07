const mongoose = require('mongoose')
// const validator = require('validator')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')



const userSchema = new mongoose.Schema({
    
    name: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    password:{
        type: String,
        
    },
    number:{
        type:Number,
        
    }
})


const user = mongoose.model('user',userSchema)

module.exports = user