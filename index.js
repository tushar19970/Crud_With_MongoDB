const express = require('express')
const mongoose = require('mongoose')
const database = 'mongodb://localhost/Organization'
const app = express()
app.use(express.json())

mongoose.connect(database, {useNewUrlParser : true})
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected successfully...')
})

const home = require('./routes/router')
app.use('/', home)

const port = 2005
app.listen(port, ()=> {
    console.log(`We have connected with this port no. ${port}`);
})