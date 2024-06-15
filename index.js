const fs = require('fs');

let vocabulary = [];
let UsedWord = [];

let Word_choice = 0;
let Word_value = 0;
let Problem_text = "";
let Typing_text = "";

const path='./vocabulary.json';

document.addEventListener('DOMContentLoaded', () =>{
  // jsonデータを読み込む
  const data = JSON.parse(fs.readFileSync(path))
  vocabulary = vocabulary.concat(data)
  const start_button = document.getElementById('start_button');
  const vocabulary_view = document.getElementById('vocabulary_view');
  document.getElementById('skip_button').style.display = "none";
  document.getElementById('skip_button').addEventListener("click", skip);
  start_button.addEventListener("click", GameStart);
});

function GameStart () {
  // メニュー画面に表示されているボタンを削除
  start_button.remove();
  vocabulary_view.remove();
  // ゲーム画面用のボタンを表示
  document.getElementById('skip_button').style.display = "block";
  // タイピングゲーム機能
  GetWord();
  document.addEventListener('keydown', e =>{
    if(Typing_text.charAt(Word_value) == e.key) {
      Word_value++;
      document.getElementById('typing').innerHTML = Typing_text.substring(0, Word_value);
      if(Word_value === Word_length) {
        GetWord();
      };
    };
  });
};

function skip () { 
  GetWord();
};

// 新しい単語を取得し、使った単語を記録する関数
function GetWord() {
  if (UsedWord.length >= vocabulary.length) {
    UsedWord.splice(0);
  }
  let newWord;
  do {
    newWord = Math.floor(Math.random() * vocabulary.length); 
  } while (UsedWord.includes(newWord)); 
  UsedWord.push(newWord); 
  Word_choice = newWord;
  Word_value = 0;
  Word_length = vocabulary[Word_choice].English.length;
  Problem_text = vocabulary[Word_choice].Japanese;
  Typing_text = vocabulary[Word_choice].English;
  document.getElementById('typing').innerHTML = " ";
  document.getElementById('problem').innerHTML = Problem_text;
};

// 単語一覧を管理する関数
function VocabularyView() {
  start_button.remove();
  // coming soon...
}