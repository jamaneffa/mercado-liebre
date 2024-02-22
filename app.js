const express = require('express')

const app = express()

const {resolve} = require('path')

const port = 2020	

app.listen(port, () => console.log (`Starting Server in http://localhost:${port}`))

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(resolve('./views/home.html')))
