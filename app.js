const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path')

// config
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({optionsSuccessStatus: 200}))

// static
app.use(express.static(path.join(__dirname, 'public')));

// view enginges
app.set('view engine', 'ejs')
app.set('views', './views')

// db
const dbStart = require('./data/db')
dbStart()

// root level

    // static routes
app.get('/' , (req,res) => {
    res.send('Hello world from root route')
})
    // relative/dynamic routes
app.get('/api/:id', (req,res) => {
    const id = req.params.id
    // alternativ
    // const { id } = req.params
    res.send(`Your request params: ${id}`)
})

// posts routes
    // targeting route
    const postRoute = require('./routes/postRoutes')
    // middleware
    app.use('/posts', postRoute)

// chaining middleware
app.get('/date', (req,res,next) => {
    req.time = new Date().toString()
    next()
}, (req,res) => {
    res.send({ "time": req.time })
} ) // chained

const PORT = process.env.PORT || 3000

// server
app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`)
})