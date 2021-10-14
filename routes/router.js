const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.post('/create', async(req, res) => {
    const data = new User({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        password : req.body.password
    })
    try {
        const a1 = await data.save()
        res.send("Your data has inserted")
    }catch(err) {
        res.send("Error" + err)
    }
})

router.get('/getAll', async(req, res) => {
    try {
        const data = await User.find()
        res.json(data)
    }catch (err){
        res.send('Error' + err)
    }
}) 

router.get('/get/:id', async(req, res) => {
    try {
        const data = await User.findById(req.params.id)
        res.json(data)
    }catch (err){
        res.send('Error' + err)
    }
}) 

router.patch('/update/:id', async(req, res) => {
    try{
        const data = await User.findById(req.params.id)
        data.name = req.body.name
        data.email = req.body.email
        data.phone = req.body.phone
        data.password = req.body.password
        const a1 = await data.save()
        res.json(a1)
        res.send('your data have updated successfully. ')
    }catch(err) {
        res.send("Error" + err)
    }
})

router.delete('/delete/:id', async(req, res) => {
    try{
        const data = await User.findById(req.params.id)
        const data1 = await data.remove()
        res.send("Your Id have deleted successfully..")
    }catch(err) {
        res.send("Error" + err)
    }
})

module.exports = router
