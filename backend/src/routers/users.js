const express = require('express')
const user = require('../models/user')
const employee =require('../models/employee')
const graph =require('../models/graph')
// const comment=require('../models/comment')
// const data=require('../models/data')
// const auth = require('../middleware/auth')
const router = new express.Router()






// route to add user
router.post('/users/adduser', async (req, res) => {

 

    const user1 = new user(req.body)

    try {
        await user1.save()

        


        res.status(201).send({ user1 })
    } catch (e) {

        res.status(400).send(e)
    }

})

// route to add employee
router.post('/users/addemployee', async (req, res) => {

 

    const employee1 = new employee(req.body)

    try {
        await employee1.save()

        


        res.status(201).send({ employee1 })
    } catch (e) {

        res.status(400).send(e)
    }

})






 



//route to get uesr detail by his email
router.post('/users/getdetail', async (req, res) => {

    try {
        const user1= await user.find({ email: req.body.email })
        

        res.send({ user1})
    } catch (e) {
        res.status(400).send()
    }
})

//route to get uesr detail by his email
router.post('/users/getempdetail', async (req, res) => {

    try {
        const employee1= await employee.find({ email: req.body.email })
        

        res.send({ employee1})
    } catch (e) {
        res.status(400).send()
    }
})


// route to add graph
router.post('/users/addgraph', async (req, res) => {

 

    const graph1 = new graph(req.body)

    try {
        await graph1.save()




        res.status(201).send({ graph1 })
    } catch (e) {

        res.status(400).send(e)
    }

})





//route to get graph detail by his email
router.post('/users/getgraph', async (req, res) => {

    try {
        const graph1= await graph.find({ email: req.body.email })


        res.send({ graph1})
    } catch (e) {
        res.status(400).send()
    }
})



module.exports = router