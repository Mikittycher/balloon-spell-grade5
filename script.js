
const words = [
  { word: "apple", meaning: "りんご" },
  { word: "bag", meaning: "かばん" },
  { word: "bird", meaning: "鳥" },
  { word: "book", meaning: "本" },
  { word: "boy", meaning: "男の子" },
  { word: "car", meaning: "車" },
  { word: "cat", meaning: "ねこ" },
  { word: "chair", meaning: "いす" },
  { word: "class", meaning: "授業" },
  { word: "computer", meaning: "コンピューター" },
  { word: "desk", meaning: "机" },
  { word: "dog", meaning: "犬" },
  { word: "egg", meaning: "卵" },
  { word: "family", meaning: "家族" },
  { word: "father", meaning: "父" },
  { word: "friend", meaning: "友達" },
  { word: "girl", meaning: "女の子" },
  { word: "house", meaning: "家" },
  { word: "man", meaning: "男性" },
  { word: "mother", meaning: "母" },
  { word: "picture", meaning: "絵" },
  { word: "room", meaning: "部屋" },
  { word: "school", meaning: "学校" },
  { word: "sister", meaning: "姉・妹" },
  { word: "station", meaning: "駅" },
  { word: "student", meaning: "生徒" },
  { word: "sun", meaning: "太陽" },
  { word: "teacher", meaning: "先生" },
  { word: "time", meaning: "時間" },
  { word: "today", meaning: "今日" },
  { word: "water", meaning: "水" },
  { word: "weather", meaning: "天気" },
  { word: "woman", meaning: "女性" },
  { word: "write", meaning: "書く" },
  { word: "read", meaning: "読む" },
  { word: "listen", meaning: "聞く" },
  { word: "speak", meaning: "話す" },
  { word: "study", meaning: "勉強する" },
  { word: "learn", meaning: "学ぶ" },
  { word: "help", meaning: "手伝う" },
  { word: "play", meaning: "遊ぶ" },
  { word: "run", meaning: "走る" },
  { word: "walk", meaning: "歩く" },
  { word: "swim", meaning: "泳ぐ" },
  { word: "eat", meaning: "食べる" },
  { word: "drink", meaning: "飲む" },
  { word: "sleep", meaning: "眠る" },
  { word: "cook", meaning: "料理する" },
  { word: "come", meaning: "来る" },
  { word: "go", meaning: "行く" },
  { word: "have", meaning: "持っている" },
  { word: "know", meaning: "知っている" },
  { word: "like", meaning: "好き" },
  { word: "live", meaning: "住んでいる" },
  { word: "look", meaning: "見る" },
  { word: "make", meaning: "作る" },
  { word: "see", meaning: "見える" },
  { word: "use", meaning: "使う" },
  { word: "want", meaning: "欲しい" },
  { word: "ask", meaning: "たずねる" },
  { word: "buy", meaning: "買う" },
  { word: "hear", meaning: "聞こえる" },
  { word: "say", meaning: "言う" },
  { word: "talk", meaning: "話す" },
  { word: "bad", meaning: "悪い" },
  { word: "big", meaning: "大きい" },
  { word: "busy", meaning: "忙しい" },
  { word: "cold", meaning: "寒い・冷たい" },
  { word: "cute", meaning: "かわいい" },
  { word: "favorite", meaning: "お気に入りの" },
  { word: "fine", meaning: "元気な" },
  { word: "good", meaning: "良い" },
  { word: "happy", meaning: "幸せな" },
  { word: "hot", meaning: "暑い・熱い" },
  { word: "kind", meaning: "親切な" },
  { word: "new", meaning: "新しい" },
  { word: "old", meaning: "古い" },
  { word: "sad", meaning: "悲しい" },
  { word: "small", meaning: "小さい" },
  { word: "tall", meaning: "背が高い" },
  { word: "black", meaning: "黒" },
  { word: "blue", meaning: "青" },
  { word: "red", meaning: "赤" },
  { word: "white", meaning: "白" },
  { word: "brother", meaning: "兄・弟" },
  { word: "breakfast", meaning: "朝食" },
  { word: "bread", meaning: "パン" },
  { word: "bus", meaning: "バス" },
  { word: "cake", meaning: "ケーキ" },
  { word: "day", meaning: "日" },
  { word: "dinner", meaning: "夕食" },
  { word: "juice", meaning: "ジュース" },
  { word: "lunch", meaning: "昼食" },
  { word: "milk", meaning: "牛乳" },
  { word: "music", meaning: "音楽" },
  { word: "park", meaning: "公園" },
  { word: "pen", meaning: "ペン" },
  { word: "sport", meaning: "スポーツ" },
  { word: "store", meaning: "店" },
  { word: "Sunday", meaning: "日曜日" }
  
];

let current = 0;
let score = 0;
let lives = 3;
let isWaiting = false;

const correctSound = new Audio("pop.mp3.mp3");
const wrongSound = new Audio("wrong.mp3.mp3");

const meaningElement = document.getElementById("meaning");
const scoreElement = document.getElementById("score");
const livesElement = document.getElementById("lives");
const speakButton = document.getElementById("speak-button");
const answerInput = document.getElementById("answer-input");
const answerButton = document.getElementById("answer-button");
const messageElement = document.getElementById("message");

function showQuestion() {
  const currentWord = words[current];

  meaningElement.textContent = currentWord.meaning;
  scoreElement.textContent = score;
  livesElement.textContent = "❤️".repeat(Math.max(lives, 0));

  answerInput.value = "";
  messageElement.textContent = "";
  answerInput.disabled = false;
  answerButton.disabled = false;
  isWaiting = false;

  answerInput.focus();
}

function speakWord() {
  const currentWord = words[current];

  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(currentWord.word);
  utterance.lang = "en-US";
  utterance.rate = 0.85;

  speechSynthesis.speak(utterance);
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play().catch(function (error) {
    console.log("音声を再生できませんでした。", error);
  });
}

function checkAnswer() {
  if (isWaiting) {
    return;
  }

  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = words[current].word.toLowerCase();

  if (userAnswer === "") {
    messageElement.textContent = "英単語を入力してください";
    return;
  }

  isWaiting = true;
  answerInput.disabled = true;
  answerButton.disabled = true;

  if (userAnswer === correctAnswer) {
    messageElement.textContent = "✅ Correct!";
    score++;
    playSound(correctSound);
  } else {
    messageElement.textContent =
      "❌ Wrong! 正解は " + words[current].word;
    lives--;
    playSound(wrongSound);
  }

  scoreElement.textContent = score;
  livesElement.textContent = "❤️".repeat(Math.max(lives, 0));

  
if (score >= 10) {
  messageElement.textContent = "🎉 CLEAR!";
  answerInput.disabled = true;
  answerButton.disabled = true;
  speakButton.disabled = true;
  return;
}
  setTimeout(function () {
    current++;

    if (current >= words.length) {
      current = 0;
    }

    showQuestion();
  }, 1000);
}

speakButton.addEventListener("click", function (event) {
  event.preventDefault();
  speakWord();
});

answerButton.addEventListener("click", function (event) {
  event.preventDefault();
  checkAnswer();
});

answerInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkAnswer();
  }
});

showQuestion();
