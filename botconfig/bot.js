const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Ticket Bot | Hello World!')
})

app.listen(port, () => {
  console.log(`Ticket Bot | Web Server Started`)
})
require('dotenv').config();

module.exports = {
    token: process.env.TOKEN,
    prefix: process.env.PREFIX
}