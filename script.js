
const words = [
  { word: "apple", meaning: "りんご" },
  { word: "book", meaning: "本" },
  { word: "cat", meaning: "ねこ" },
  { word: "dog", meaning: "犬" },
  { word: "egg", meaning: "卵" }
];

let current = 0;
let score = 0;
let lives = 3;
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
  livesElement.textContent = "❤️".repeat(lives);

  answerInput.value = "";
  messageElement.textContent = "";
  answerInput.focus();
}
function speakWord() {
  const currentWord = words[current];

  const utterance = new SpeechSynthesisUtterance(currentWord.word);
  utterance.lang = "en-US";

  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

speakButton.addEventListener("click", speakWord);
function checkAnswer() {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = words[current].word.toLowerCase();

  if (userAnswer === correctAnswer) {
    messageElement.textContent = "✅ Correct!";
    score++;
  } else {
    messageElement.textContent = "❌ Wrong!";
    lives--;
  }

  scoreElement.textContent = score;
  livesElement.textContent = "❤️".repeat(lives);

setTimeout(() => {
  current++;

  if (current >= words.length) {
    current = 0;
  }

  showQuestion();
}, 3000);
  
}
answerButton.addEventListener("click", checkAnswer);
