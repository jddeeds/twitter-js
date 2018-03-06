const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const volleyball = require("volleyball");
app.set('view engine', "html")
app.engine('html', nunjucks.render)
nunjucks.configure("views", {noCache: true});

let locals = {
  title: "An example",
  people: [
    { name: "Frodo" },
    { name: "Hermoine" },
    { name: "Gandalf" },
    { name: "Duplicate Dan"},
    { name: "Party Pooper Pat"},
    { name: "Jovial Joey"}
  ],
  paragraph: "this is our content yo"
};
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

app.use((req, res, next) => {
  console.log(req.method + " " + req.path);
  let user = req.query.user
  // console.log(locals.people)
  locals.people.push({name: user})
  res.render('index.html', locals)
  next();
});



app.listen(3000);
