let vocabulary = [
  {"Japanese":"違った", "English": "different"},
  {"Japanese":"趣味", "English": "hobby"},
  {"Japanese":"楽しむ", "English": "enjoy"},
  {"Japanese":"〜を愛している", "English": "love"},
  {"Japanese":"〜を好む", "English": "prefer"},
  {"Japanese":"を憎む", "English": "hate"},
  {"Japanese":"尋ねる", "English": "ask"},
  {"Japanese":"(辞書など)を調べる:(専門家)に相談する", "English": "consult"},
  {"Japanese":"〜だろう", "English": "will"},
  {"Japanese":"〜する気がある", "English": "willing"},
  {"Japanese":"結婚する", "English": "marry"},
  {"Japanese":"賢い", "English": "clever"},
  {"Japanese":"ハンサムな", "English": "handsome"},
  {"Japanese":"かわいらしい", "English": "pretty"},
  {"Japanese":"憎い", "English": "ugly"},
  {"Japanese":"だから、とても", "English": "so"},
  {"Japanese":"熱心に:激しく", "English": "hard"},
  {"Japanese":"断固とした:会社", "English": "firm"},
  {"Japanese":"選択", "English": "choice"},
  {"Japanese":"お金", "English": "money"},
  {"Japanese":"旅行:移動", "English": "trip"},
  {"Japanese":"旅行する", "English": "travel"},
  {"Japanese":"〜しなければならない", "English": "must"},
  {"Japanese":"役に立つ", "English": "useful"},
  {"Japanese":"〜を見つける:〜だとわかる", "English": "find"},
  {"Japanese":"〜を発見する:〜気づく", "English": "discover"},
  {"Japanese":"〜を買う", "English": "buy"},
  {"Japanese":"長い", "English": "long"},
  {"Japanese":"現金", "English": "cash"},
  {"Japanese":"〜を支払う", "English": "pay"},
  {"Japanese":"(品物の)値段:代償:物価", "English": "price"},
  {"Japanese":"運賃", "English": "fare"},
  {"Japanese":"(参加:入場の)料金:謝礼", "English": "fee"},
  {"Japanese":"料金:責任:充電する", "English": "charge"},
  {"Japanese":"費用:(費用など)がかかる", "English": "cost"},
  {"Japanese":"収入", "English": "income"},
  {"Japanese":"財布", "English": "purse"},
  {"Japanese":"札入れ", "English": "wallet"},
  {"Japanese":"(預金)を引き出す", "English": "withdraw"},
  {"Japanese":"高価な:費用のかかる", "English": "costly"},
  {"Japanese":"費用:犠牲", "English": "expense"},
  {"Japanese":"割引:割引する", "English": "discount"},
  {"Japanese":"安っぽい", "English": "cheap"},
  {"Japanese":"高価な", "English": "expensive"},
  {"Japanese":"特別な:専門の", "English": "special"},
  {"Japanese":"独特の:唯一の", "English": "unique"},
  {"Japanese":"注目すべき:すぐれた", "English": "remarkable"},
  {"Japanese":"速く", "English": "quickly"},
  {"Japanese":"徐々に", "English": "gradually"},
  {"Japanese":"突然", "English": "suddenly"},
  {"Japanese":"〜が欲しい", "English": "want"},
  {"Japanese":"汁:ジュース", "English": "juice"},
  {"Japanese":"死ぬ", "English": "die"},
  {"Japanese":"再び:もう一度", "English": "again"},
  {"Japanese":"繰り返す", "English": "repeat"},
  {"Japanese":"もう一つの:別の", "English": "another"},
  {"Japanese":"その時:それから:それなら", "English": "then"},
  {"Japanese":"遠くへ:大いに", "English": "far"},
  {"Japanese":"...に〜させる", "English": "let"},
  {"Japanese":"病気の:うんざりして", "English": "sick"},
  {"Japanese":"病気で:悪い", "English": "ill"},
  {"Japanese":"(病気などで)青白い", "English": "pale"},
  {"Japanese":"〜を切る:削減する", "English": "cut"},
  {"Japanese":"うれしい:幸せな", "English": "happy"},
  {"Japanese":"素敵な:美しい", "English": "lovely"},
  {"Japanese":"〜を説明する", "English": "explain"},
  {"Japanese":"(〜を使って)を説明する", "English": "illustrate"},
  {"Japanese":"〜を実演する:〜を証明する", "English": "demonstrate"},
  {"Japanese":"〜を占める:口座", "English": "account"},
  {"Japanese":"〜を救う:〜を貯蓄する", "English": "save"},
  {"Japanese":"救助:救済", "English": "rescue"},
  {"Japanese":"手助けする", "English": "assist"},
  {"Japanese":"余分の:予備の", "English": "spare"},
  {"Japanese":"生命:一生", "English": "life"},
  {"Japanese":"に感謝する", "English": "thank"},
  {"Japanese":"親愛な:大切な", "English": "dear"},
  {"Japanese":"助ける:手伝う", "English": "help"},
  {"Japanese":"支援:救助(物資)", "English": "aid"},
  {"Japanese":"協力する", "English": "cooperate"},
  {"Japanese":"ボランティア:志願者", "English": "volunteer"},
  {"Japanese":"永久に", "English": "forever"},
  {"Japanese":"選ぶ", "English": "choose"},
  {"Japanese":"(きちんと)選ぶ", "English": "select"},
  {"Japanese":"(投票で)選ぶ", "English": "elect"},
  {"Japanese":"投票する", "English": "vote"},
  {"Japanese":"(軽めに)選ぶ:摘む", "English": "pick"},
  {"Japanese":"妻", "English": "wife"},
  {"Japanese":"夫", "English": "husband"},
  {"Japanese":"正しい:右", "English": "right"},
  {"Japanese":"間違った", "English": "wrong"},
  {"Japanese":"適切な:正しい", "English": "proper"},
  {"Japanese":"過度の", "English": "excessive"},
  {"Japanese":"魔法:手品", "English": "magic"},
  {"Japanese":"力学:動力学", "English": "dynamics"},
  {"Japanese":"(名声)を汚す:泥を塗る", "English": "besmirch"},
  {"Japanese":"(犬のように)クンクン泣く", "English": "whimper"},
  {"Japanese":"キラキラ:ぴかぴか", "English": "twinkle"},
  {"Japanese":"反証:反論:反駁", "English": "rebuttal"},
  {"Japanese":"かぎ針編み", "English": "crochet"},
  {"Japanese":"豊富に:多量に", "English": "abundantly"},
  {"Japanese":"手ごわい:手に負えそうにない", "English": "formidable"},
  {"Japanese":"比喩", "English": "metaphor"},
  {"Japanese":"(息などを)吐き出す:発散する", "English": "exhale"}
];
let UsedWord = [];

let Word_choice = 0;
let Word_value = 0;
let Problem_text = "";
let Typing_text = "";

document.addEventListener('DOMContentLoaded', () =>{
  const start_button = document.getElementById('start_button');
  document.getElementById('skip_button').style.display = "none";
  document.getElementById('skip_button').addEventListener("click", skip);
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