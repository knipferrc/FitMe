const Bundler = require('parcel-bundler')
const express = require('express')
const bodyParser = require('body-parser')

let bundler = new Bundler('index.html')
let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/user', function(req, res) {
  var data = {
    firstName: 'Tyler',
    lastName: 'Knipfer',
    username: 'knipferrc',
    email: 'knipferrc@gmail.com'
  }
  res.status(200).send(data)
})

app.use(bundler.middleware())

app.listen(Number(process.env.PORT || 1234))
