const express = require('express')

const app = express()

const {resolve} = require('path')

const port = process.env.PORT || 2020	

app.listen(port, () => console.log (`Starting Server in http://localhost:${port}`))

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(resolve('./views/home.html')))
app.get('/register', (req, res) => res.sendFile(resolve('./views/register.html')))
app.get('/login', (req, res) => res.sendFile(resolve('./views/login.html')))

