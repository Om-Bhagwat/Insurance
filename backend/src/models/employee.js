const mongoose = require('mongoose')
// const validator = require('validator')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')



const employeeSchema = new mongoose.Schema({
    
    name: {
        type: String,
        
    },
    officeid: {
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


const employee = mongoose.model('employee',employeeSchema)

module.exports = employee