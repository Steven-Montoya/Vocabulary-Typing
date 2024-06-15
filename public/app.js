let vocabulary = [];
let UsedWord = [];

let Word_choice = 0;
let Word_value = 0;
let Problem_text = "";
let Typing_text = "";

document.addEventListener('DOMContentLoaded', () =>{
  const start_button = document.getElementById('start_button');
  const skip_button = document.getElementById('skip_button');
  skip_button.style.display = "none";
  skip_button.addEventListener("click", skip);
  start_button.addEventListener("click", GameStart);
});

function GameStart () {
  // スタートボタンを削除
  start_button.remove();
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
  // server.jsで送ったjsonデータを取得
  fetch('/data')
    .then(response => response.json())
    .then(data => {
      vocabulary = vocabulary.concat(data);
      console.log("app.jsで英単語を取得しました。")
      // 全ての英単語がUsedWordになったとき=>UsedWordの配列を空にする
      if (UsedWord.length >= vocabulary.length) {
        UsedWord.splice(0);
        console.log("全単語を周回しました。")
      }
      let newWord;
      // NewWordにUsedWordが含まれていないか確認
      do {
        newWord = Math.floor(Math.random() * vocabulary.length); 
      } while (UsedWord.includes(newWord)); 
      // UsedWordにnewWordを追加
      UsedWord.push(newWord); 
      // 変数設定
      Word_choice = newWord;
      Word_value = 0;
      Word_length = vocabulary[Word_choice].English.length;
      Problem_text = vocabulary[Word_choice].Japanese;
      Typing_text = vocabulary[Word_choice].English;
      document.getElementById('typing').innerHTML = " ";
      document.getElementById('problem').innerHTML = Problem_text;
    })
    .catch(error => console.error('英単語データを取得できませんでした', error));
};