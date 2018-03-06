const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const volleyball = require("volleyball");
const routes = require('./routes');
app.use('/', routes);
app.set('view engine', "html")
app.engine('html', nunjucks.render)
nunjucks.configure("views", {noCache: true});








// nunjucks.render("index.html", locals, (err, output) => {
//   console.log(output);
// });

// app.get("/", (req, res, next) => {
//   console.log('Hi Friends!');
//   next();
// })

// app.get("/", (req, res, next) => {
//   res.send("hello tweet");
//   next();
// });

// app.get("/news", (req, res, next) => {
//   res.send("this is the news");
//   next();
// });

// app.use((req, res, next) => {
//   console.log(req.method + " " + req.path);
//   let user = req.query.user
//   // console.log(locals.people)
//   locals.people.push({name: user})
//   res.render('index.html', locals)
//   next();
// });



app.listen(3000);
