const express = require("express");
const app = express();
const fs = require('fs');
const _ = require('lodash');
const dataPath = './test.json';
let data = JSON.parse(fs.readFileSync(dataPath));
let deleteItem = [];
const port = 8000;

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render('index')
})
app.get("/data", (req, res) => {
  const filteredData = data.filter(item => {
    return !deleteItem.some(deleteItem => _.isEqual(deleteItem, item));
  });
  console.log(filteredData)
  res.json(filteredData)
})
app.post("/deleteItem", (req, res) => {
  const item = req.body;
  deleteItem = deleteItem.concat(item)
  res.status(200).send('削除が成功しました。')
})
app.get("/vocabulary", (req, res)=>{
  res.redirect("./vocabulary.html")
});
app.get("/start", (req, res) => {
  res.redirect("./app.html")
})

app.listen(port, () =>{
  console.log(`サーバーがlocalhost:${port}で起動中です。`);
});