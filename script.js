
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
  { word: "mother", meaning: "母" }
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
