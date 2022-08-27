const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/crud'
const app = express()
mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection
con.on('open', () => {
    console.log('connected...')
})
app.use(express.json())
const categoryRouter = require('./routes/categories')
app.use('/category', categoryRouter)
app.listen(3000, () => {
    console.log('server started')
})