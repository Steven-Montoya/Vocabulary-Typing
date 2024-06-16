const express = require("express");
const app = express();
const fs = require('fs');
const _ = require('lodash');
// 英単語データのパスを設定
const dataPath = './vocabulary.json';
let data = JSON.parse(fs.readFileSync(dataPath));
let deleteList = [];
// ポート番号
const PORT = 8000;

// ミドルウェア
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

// メニュー画面のルート
app.get("/", (req, res) => {
  res.render('index')
})

// jsonデータを保存してあるルート
app.get("/data", (req, res) => {
  // データリストからdeleteListが含まれている要素を除く
  const filteredData = data.filter(item => {
    return !deleteList.some(deleteList => _.isEqual(deleteList, item));
  });
  // jsonデータを送信
  res.json(filteredData);
});

// 削除リクエストに関するルート
app.post("/deleteList", (req, res) => {
  // POSTのbody(中身)を取得
  const item = req.body;
  // deleteListにPOSTされたデータを足す
  deleteList = deleteList.concat(item);
  // データリストにitemが含まれている要素を除く
  data = data.filter(entry => {
    return !_.isEqual(item, entry);
  });
  res.status(200).send('削除が成功しました。');
});

// 追加リクエストに関するルート
app.post("/addItem", (req, res) => {
  // POSTのbody(中身)を取得
  const item = req.body; 
  // データリストにPOSTされたデータを足す
  data = data.concat(item);
  // deleteListにitemが含まれている要素を除く
  deleteList = deleteList.filter(entry => {
    return !_.isEqual(item, entry);
  });
  res.status(200).send('追加が成功しました。')
});

// 削除リストのルート
app.get("/delete", (req, res) => {
  res.json(deleteList);
});

// 追加リストのルート
app.get("/add", (req,res) => {
  res.json(data);
});

// 英単語一覧のルート
app.get("/vocabulary", (req, res)=>{
  res.redirect("./vocabulary.html");
});

// タイピングゲームのルート
app.get("/start", (req, res) => {
  res.redirect("./app.html");
});

app.listen(PORT, () =>{
  console.log(`サーバーがlocalhost:${PORT}で起動中です。`);
});