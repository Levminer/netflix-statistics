const express = require('express')

const app = express()
const port = 8080

const server = "s0"
const node = "n0"
const version = "2.0.0"

app.locals.server = server
app.locals.node = node
app.locals.version = version

app.set('view engine', 'ejs');

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

app.listen(port)
console.log(`Started at ${port} in ${server} on ${node} with ${version}`)