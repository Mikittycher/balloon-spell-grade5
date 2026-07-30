// ==============================
// 英検5級 Balloon Quest
// 100語の単語データ
// ==============================

const questions = [
// 学校・勉強
{ word: "book", answer: "本", ruby: "ほん", type: "noun" },
{ word: "pen", answer: "ペン", ruby: "", type: "noun" },
{ word: "desk", answer: "机", ruby: "つくえ", type: "noun" },
{ word: "chair", answer: "椅子", ruby: "いす", type: "noun" },
{ word: "teacher", answer: "先生", ruby: "せんせい", type: "noun" },
{ word: "student", answer: "生徒", ruby: "せいと", type: "noun" },
{ word: "school", answer: "学校", ruby: "がっこう", type: "noun" },
{ word: "class", answer: "授業", ruby: "じゅぎょう", type: "noun" },
{ word: "bag", answer: "かばん", ruby: "", type: "noun" },
{ word: "computer", answer: "コンピュータ", ruby: "", type: "noun" },

// 家族・人
{ word: "father", answer: "父親", ruby: "ちちおや", type: "noun" },
{ word: "mother", answer: "母親", ruby: "ははおや", type: "noun" },
{ word: "brother", answer: "兄・弟", ruby: "あに・おとうと", type: "noun" },
{ word: "sister", answer: "姉・妹", ruby: "あね・いもうと", type: "noun" },
{ word: "friend", answer: "友達", ruby: "ともだち", type: "noun" },
{ word: "boy", answer: "男の子", ruby: "おとこのこ", type: "noun" },
{ word: "girl", answer: "女の子", ruby: "おんなのこ", type: "noun" },
{ word: "man", answer: "男性", ruby: "だんせい", type: "noun" },
{ word: "woman", answer: "女性", ruby: "じょせい", type: "noun" },
{ word: "family", answer: "家族", ruby: "かぞく", type: "noun" },

  // 食べ物・飲み物
{ word: "apple", answer: "りんご", ruby: "", type: "noun" },
{ word: "milk", answer: "牛乳", ruby: "ぎゅうにゅう", type: "noun" },
{ word: "water", answer: "水", ruby: "みず", type: "noun" },
{ word: "lunch", answer: "昼食", ruby: "ちゅうしょく", type: "noun" },
{ word: "dinner", answer: "夕食", ruby: "ゆうしょく", type: "noun" },
{ word: "breakfast", answer: "朝食", ruby: "ちょうしょく", type: "noun" },
{ word: "cake", answer: "ケーキ", ruby: "", type: "noun" },
{ word: "bread", answer: "パン", ruby: "", type: "noun" },
{ word: "egg", answer: "卵", ruby: "たまご", type: "noun" },
{ word: "juice", answer: "ジュース", ruby: "", type: "noun" },

// 曜日・時・場所
{ word: "Sunday", answer: "日曜日", ruby: "にちようび", type: "noun" },
{ word: "Monday", answer: "月曜日", ruby: "げつようび", type: "noun" },
{ word: "time", answer: "時間", ruby: "じかん", type: "noun" },
{ word: "day", answer: "日", ruby: "ひ", type: "noun" },
{ word: "today", answer: "今日", ruby: "きょう", type: "noun" },
{ word: "house", answer: "家", ruby: "いえ", type: "noun" },
{ word: "park", answer: "公園", ruby: "こうえん", type: "noun" },
{ word: "room", answer: "部屋", ruby: "へや", type: "noun" },
{ word: "station", answer: "駅", ruby: "えき", type: "noun" },
{ word: "store", answer: "店", ruby: "みせ", type: "noun" },

  // 自然・生き物・その他
{ word: "dog", answer: "犬", ruby: "いぬ", type: "noun" },
{ word: "cat", answer: "猫", ruby: "ねこ", type: "noun" },
{ word: "bird", answer: "鳥", ruby: "とり", type: "noun" },
{ word: "sun", answer: "太陽", ruby: "たいよう", type: "noun" },
{ word: "weather", answer: "天気", ruby: "てんき", type: "noun" },
{ word: "car", answer: "車", ruby: "くるま", type: "noun" },
{ word: "bus", answer: "バス", ruby: "", type: "noun" },
{ word: "music", answer: "音楽", ruby: "おんがく", type: "noun" },
{ word: "sport", answer: "スポーツ", ruby: "", type: "noun" },
{ word: "picture", answer: "写真", ruby: "しゃしん", type: "noun" },

// 動作・行動
{ word: "play", answer: "遊ぶ", ruby: "あそぶ", type: "verb" },
{ word: "run", answer: "走る", ruby: "はしる", type: "verb" },
{ word: "walk", answer: "歩く", ruby: "あるく", type: "verb" },
{ word: "swim", answer: "泳ぐ", ruby: "およぐ", type: "verb" },
{ word: "go", answer: "行く", ruby: "いく", type: "verb" },
{ word: "come", answer: "来る", ruby: "くる", type: "verb" },
{ word: "eat", answer: "食べる", ruby: "たべる", type: "verb" },
{ word: "drink", answer: "飲む", ruby: "のむ", type: "verb" },
{ word: "sleep", answer: "寝る", ruby: "ねる", type: "verb" },
{ word: "cook", answer: "料理", ruby: "りょうり", type: "verb" },

  // 学習・情報・コミュニケーション
{ word: "study", answer: "勉強", ruby: "べんきょう", type: "verb" },
{ word: "read", answer: "読む", ruby: "よむ", type: "verb" },
{ word: "write", answer: "書く", ruby: "かく", type: "verb" },
{ word: "speak", answer: "話す", ruby: "はなす", type: "verb" },
{ word: "listen", answer: "聴く", ruby: "きく", type: "verb" },
{ word: "hear", answer: "聞く", ruby: "きく", type: "verb" },
{ word: "know", answer: "知る", ruby: "しる", type: "verb" },
{ word: "learn", answer: "学ぶ", ruby: "まなぶ", type: "verb" },
{ word: "talk", answer: "話す", ruby: "はなす", type: "verb" },
{ word: "ask", answer: "尋ねる", ruby: "たずねる", type: "verb" },

// 気持ち・所有・その他
{ word: "like", answer: "好き", ruby: "すき", type: "verb" },
{ word: "want", answer: "欲しい", ruby: "ほしい", type: "verb" },
{ word: "have", answer: "持つ", ruby: "もつ", type: "verb" },
{ word: "look", answer: "見る", ruby: "みる", type: "verb" },
{ word: "see", answer: "見る", ruby: "みる", type: "verb" },
{ word: "make", answer: "作る", ruby: "つくる", type: "verb" },
{ word: "use", answer: "使う", ruby: "つかう", type: "verb" },
{ word: "buy", answer: "買う", ruby: "かう", type: "verb" },
{ word: "live", answer: "住む", ruby: "すむ", type: "verb" },
{ word: "help", answer: "手伝う", ruby: "てつだう", type: "verb" },

  // 状態・性質
{ word: "good", answer: "良い", ruby: "よい", type: "adjective" },
{ word: "bad", answer: "悪い", ruby: "わるい", type: "adjective" },
{ word: "big", answer: "大きい", ruby: "おおきい", type: "adjective" },
{ word: "small", answer: "小さい", ruby: "ちいさい", type: "adjective" },
{ word: "hot", answer: "暑い", ruby: "あつい", type: "adjective" },
{ word: "cold", answer: "寒い", ruby: "さむい", type: "adjective" },
{ word: "new", answer: "新しい", ruby: "あたらしい", type: "adjective" },
{ word: "old", answer: "古い", ruby: "ふるい", type: "adjective" },
{ word: "busy", answer: "忙しい", ruby: "いそがしい", type: "adjective" },
{ word: "fine", answer: "元気", ruby: "げんき", type: "adjective" },

// 感情・外見・色
{ word: "happy", answer: "幸せ", ruby: "しあわせ", type: "adjective" },
{ word: "sad", answer: "悲しい", ruby: "かなしい", type: "adjective" },
{ word: "cute", answer: "かわいい", ruby: "", type: "adjective" },
{ word: "tall", answer: "背が高い", ruby: "せがたかい", type: "adjective" },
{ word: "red", answer: "赤い", ruby: "あかい", type: "adjective" },
{ word: "blue", answer: "青い", ruby: "あおい", type: "adjective" },
{ word: "white", answer: "白い", ruby: "しろい", type: "adjective" },
{ word: "black", answer: "黒い", ruby: "くろい", type: "adjective" },
{ word: "favorite", answer: "大好きな", ruby: "だいすきな", type: "adjective" },
{ word: "kind", answer: "親切", ruby: "しんせつ", type: "adjective" },
];

// ==============================
// ゲーム設定
// ==============================

let score = 0;
let lives = 3;
let currentQuestion = null;
let usedWords = [];
let gameFinished = false;

// HTMLの部品を見つける
const wordElement =
  document.querySelector("#word") ||
  document.querySelector("#english-word");

const scoreElement =
  document.querySelector("#score");

const livesElement =
  document.querySelector("#lives");

const resultElement =
  document.querySelector("#result") ||
  document.querySelector("#message");

const speakButton =
  document.querySelector("#speak-button") ||
  document.querySelector("#speak-btn") ||
  document.querySelector("#pronunciation-button") ||
  document.querySelector(".speak-button") ||
  document.querySelector(".speak-btn") ||
  [...document.querySelectorAll("button")].find(button =>
    button.textContent.includes("発音")
  );

let answerButtons = document.querySelectorAll(
  "button.balloon, .answer-btn, .choice"
);

// 上の方法で見つからなかった場合
if (answerButtons.length === 0) {
  answerButtons = document.querySelectorAll("#answers button");
}
let popAudioContext;
const popSound = new Audio("pop.mp3.mp3");
const wrongSound = new Audio("wrong.mp3.mp3");
const clearSound = new Audio("clear.mp3.mp3");
function playPopSound() {
  popSound.currentTime = 0;
  popSound.play();
}

function playWrongSound() {
  wrongSound.currentTime = 0;
  wrongSound.play();
}

function playClearSound() {
  clearSound.currentTime = 0;
  clearSound.play();
}
// ==============================
// 配列をランダムに並べ替える
// ==============================

function shuffle(array) {
  const copiedArray = [...array];

  for (let i = copiedArray.length - 1; i > 0; i--) {
    const randomNumber = Math.floor(Math.random() * (i + 1));

    [copiedArray[i], copiedArray[randomNumber]] =
      [copiedArray[randomNumber], copiedArray[i]];
  }

  return copiedArray;
}

// ==============================
// 次の問題を選ぶ
// ==============================

function getNextQuestion() {
  let availableQuestions = questions.filter(
    question => !usedWords.includes(question.word)
  );

  // 100語すべて出題したら、最初から使えるようにする
  if (availableQuestions.length === 0) {
    usedWords = [];
    availableQuestions = [...questions];
  }

  const randomIndex = Math.floor(
    Math.random() * availableQuestions.length
  );

  const selectedQuestion = availableQuestions[randomIndex];

  usedWords.push(selectedQuestion.word);

  return selectedQuestion;
}

// ==============================
// 4つの選択肢を自動で作る
// ==============================

function makeChoices(question) {
  // 正解と同じ品詞の単語を使う
  const sameTypeQuestions = questions.filter(item =>
    item.type === question.type &&
    item.word !== question.word &&
    item.answer !== question.answer
  );

  const wrongAnswers = shuffle(sameTypeQuestions)
    .slice(0, 3)
    .map(item => item.answer);

  const choices = [question.answer, ...wrongAnswers];

  return shuffle(choices);
}

// ==============================
// 問題を表示する
// ==============================

function showQuestion() {
  if (gameFinished) {
    return;
  }

  currentQuestion = getNextQuestion();
  const choices = makeChoices(currentQuestion);

  wordElement.textContent = currentQuestion.word;
  resultElement.textContent = "";

  answerButtons.forEach((button, index) => {
        const item = questions.find(q => q.answer === choices[index]);

if (item && item.ruby) {
    button.innerHTML = `<ruby>${item.answer}<rt>${item.ruby}</rt></ruby>`;

    } else {
    button.textContent = choices[index];
}

button.dataset.answer = choices[index];

button.disabled = false;

    // 前の問題の色を元に戻す
    
button.classList.remove("correct-answer");
button.classList.remove("wrong-answer");
button.classList.remove("pop-animation");
  });

  updateDisplay();
}

// ==============================
// 答えを確認する
// ==============================

function checkAnswer(event) {
  if (gameFinished) {
    return;
  }

  const selectedButton = event.currentTarget;
  const selectedAnswer = selectedButton.dataset.answer;

  if (selectedAnswer === currentQuestion.answer) {
    score++;
playPopSound();
    resultElement.textContent = "せいかい！🎉";
    selectedButton.classList.add("correct-answer");
    selectedButton.animate(
    [
        { scale: 1, opacity: 1 },
        { scale: 1.3, opacity: 1, offset: 0.35 },
        { scale: 0.6, opacity: 0.5, offset: 0.7 },
        { scale: 0, opacity: 0 }
    ],
    {
        duration: 700,
        easing: "ease-out",
        fill: "none"
    }
);
    answerButtons.forEach(button => {
      button.disabled = true;
    });

    updateDisplay();

    // 10問正解でクリア
    if (score >= 10) {
      clearGame();
      return;
    }

    setTimeout(showQuestion, 900);
  } else {
    lives--;
    playWrongSound();
    resultElement.textContent = "おしい！もう一度考えてみよう";
    selectedButton.classList.add("wrong-answer");
    selectedButton.disabled = true;

    updateDisplay();

    if (lives <= 0) {
      gameOver();
    }
  }
}

// ==============================
// 得点とライフを表示する
// ==============================

function updateDisplay() {
  if (scoreElement) {
    scoreElement.textContent = `${score} / 10 点`;
  }

  if (livesElement) {
    livesElement.textContent = "❤️".repeat(lives);
  }
}

// ==============================
// 10問正解したとき
// ==============================

function clearGame() {
    playClearSound();
    gameFinished = true;

    wordElement.textContent = "CLEAR!";
    resultElement.textContent = "10問正解！おめでとう！";

    answerButtons.forEach(button => {
        button.disabled = true;
    });

    setTimeout(() => {
    const playAgain = confirm("🎉 CLEAR!\n\nもう一度遊びますか？");

    if (playAgain) {
        location.reload();
    } else {
        wordElement.textContent = "Thank you!";
        resultElement.textContent = "Thanks for playing Balloon Quest!";
    }
}, 3000);
}

// ==============================
// ライフがなくなったとき
// ==============================

function gameOver() {
  gameFinished = true;

  wordElement.textContent = "GAME OVER";
  resultElement.textContent = "もう一度挑戦してね！";

  answerButtons.forEach(button => {
    button.disabled = true;
  });

  // 少し待ってから自動で最初に戻る
  setTimeout(() => {
    score = 0;
    lives = 3;
    usedWords = [];
    gameFinished = false;
    showQuestion();
  }, 2000);
}

// ==============================
// 英単語を発音する
// ==============================

function speakWord() {
  if (!currentQuestion || gameFinished) {
    return;
  }

  if (!("speechSynthesis" in window)) {
    alert("このブラウザでは発音機能を利用できません。");
    return;
  }

  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(currentQuestion.word);
  speech.lang = "en-US";
  speech.rate = 0.75;
  speech.pitch = 1;

  setTimeout(() => {
    window.speechSynthesis.speak(speech);
  }, 100);
}

// ==============================
// ボタンを動かす
// ==============================

answerButtons.forEach(button => {
  button.addEventListener("click", checkAnswer);
});

if (speakButton) {
  speakButton.addEventListener("click", speakWord);
}

// 最初の問題を表示
showQuestion();
