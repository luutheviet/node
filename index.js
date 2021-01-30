const express = require('express')
const app = express()
const port = 1999

app.get('/kira', (req, res) => {
  res.send('ddd')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})