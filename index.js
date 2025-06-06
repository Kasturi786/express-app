const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello Watchtower, this time download recent build image and update the running container!</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
