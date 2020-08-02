const express = require('express')

const app = express()

app.set('view engine', 'ejs');

const server = "s0"
const node = "n0"

app.locals.server = server
app.locals.node = node

app.get('/', (req, res) => {
    res.render('index', {
    })
    app.use(express.static(__dirname + '/views'));  
})

app.get('/en', (req, res) => {
    res.render('en', {
    })
    app.use(express.static(__dirname + '/views'));  
})

app.get('/hu', (req, res) => {
    res.render('hu', {
    })
    app.use(express.static(__dirname + '/views'));  
})

/* app.use( (req,res,next) => {
    res.status(400)
    res.type('txt').send('404 FUCKED');
}) */

app.listen(8080)