const express = require("express");
const app = express();
const fs = require('fs');
const data = require('./vocabulary.json')

const port = 8000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render('index')
})
app.get("/vocabulary", (req, res)=>{
  res.render("vocabulary", {vocabulary: data});
});
app.get("/start", (req, res) => {
  res.redirect("./app.html")
})

app.listen(port, () =>{
  console.log(`サーバーがlocalhost:${port}で起動中です。`);
});