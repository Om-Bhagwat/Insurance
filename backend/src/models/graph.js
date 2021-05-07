const mongoose = require('mongoose')
// const validator = require('validator')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')



const graphSchema = new mongoose.Schema({

    name: {
        type: String,

    },
    email: {
        type: String,

    },
    hash:{
        type: String,

    },
    phasecount:{
        type:Number,

    }
})


const graph = mongoose.model('graph',graphSchema)

module.exports = graph
