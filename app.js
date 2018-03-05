const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(req.method + " " + req.path)
  next()
})

app.get('/', (req, res, next) => {
  res.send("hello tweet")
  next()
})

app.get('/news', (req, res, next) => {
  res.send("this is the news")
  next()
})



app.listen(3000)
