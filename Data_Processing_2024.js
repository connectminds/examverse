const questions = [
  {
    question: "The stepped Reckoner was developed by",
    answers: [
      { text: "Gottfried Leibniz", correct: true },
      { text: "Herman Hollerith", correct: false },
      { text: "John Von Neumann", correct: false },
      { text: "William Schickard", correct: false }
    ]
  },
  {
    question: "The binary number 100101 can be written in denary as",
    answers: [
      { text: "25", correct: false },
      { text: "37", correct: true },
      { text: "45", correct: false },
      { text: "211", correct: false }
    ]
  },
  {
    question: "The first in computer data processing procedure is _________",
    answers: [
      { text: "Collection of data", correct: true },
      { text: "Communication of information", correct: false },
      { text: "Conversion of data", correct: false },
      { text: "Manipulation of data", correct: false }
    ]
  },
  {
    question: "One advantage of electronic data processing is that it",
    answers: [
      { text: "Involves special skills", correct: false },
      { text: "Deals only with simple data", correct: false },
      { text: "Is completely error-free", correct: false },
      { text: "Handles complex data", correct: true }
    ]
  },
  {
    question: "A computer cannot operate without",
    answers: [
      { text: "An operator", correct: false },
      { text: "An instruction", correct: true },
      { text: "A printer", correct: false },
      { text: "A mouse", correct: false }
    ]
  }
  // 🔹 Add all your remaining questions here exactly as they are
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultSection = document.getElementById("result");
const correctCount = document.getElementById("correct-count");
const missedCount = document.getElementById("missed-count");
const totalCount = document.getElementById("total-count");
const restartBtn = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress-bar");

let currentQuestionIndex = 0;
let score = 0;
let missed = 0;
let chart;

// Start quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  missed = 0;
  nextButton.innerText = "Next";
  resultSection.classList.add("hidden");
  document.querySelector(".quiz").classList.remove("hidden");
  showQuestion();
  updateProgress();
}

// Show question
function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    if (answer.correct) button.dataset.correct = true;
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
  updateProgress();
}

// Reset state
function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

// Handle answer click
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) score++;
  else missed++;

  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
    if (button.dataset.correct === "true") button.classList.add("correct");
    else if (button === selectedBtn && !isCorrect) button.classList.add("incorrect");
  });

  nextButton.style.display = "block";
}

// Handle next question
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
});

function updateProgress() {
  const progress = ((currentQuestionIndex) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

// Show results
function showResults() {
  document.querySelector(".quiz").classList.add("hidden");
  resultSection.classList.remove("hidden");

  correctCount.textContent = score;
  missedCount.textContent = missed;
  totalCount.textContent = questions.length;

  const correctPercent = ((score / questions.length) * 100).toFixed(1);
  const missedPercent = ((missed / questions.length) * 100).toFixed(1);

  if (chart) chart.destroy();
  chart = new Chart(document.getElementById("resultChart"), {
    type: "pie",
    data: {
      labels: ["Correct", "Missed"],
      datasets: [{
        data: [correctPercent, missedPercent],
        backgroundColor: ["#9aeabc", "#ff9393"]
      }]
    },
    options: {
      plugins: { legend: { position: "bottom" } },
      animation: { animateScale: true }
    }
  });
}

restartBtn.addEventListener("click", startQuiz);
startQuiz();
// Initialize Chart.js