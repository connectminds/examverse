const questions = [
  {
    question: "The stepped Reckoner was developed by",
    image: "",
    answers: [
      { text: "Gottfried Leibniz", img: "", correct: true },
      { text: "Herman Hollerith", img: "", correct: false },
      { text: "John Von Neumann", img: "", correct: false },
      { text: "William Schickard", img: "", correct: false }
    ]
  },
  {
    question: "The binary number 100101 can be written in denary as",
    image: "",
    answers: [
      { text: "25", img: "", correct: false },
      { text: "37", img: "", correct: true },
      { text: "45", img: "", correct: false },
      { text: "211", img: "", correct: false }
    ]
  },
  {
    question: "The first in computer data processing procedure is _________",
    image: "",
    answers: [
      { text: "Collection of data", img: "", correct: true },
      { text: "Communication of information", img: "", correct: false },
      { text: "Conversion of data", img: "", correct: false },
      { text: "Manipulation of data", img: "", correct: false }
    ]
  },
  {
    question: "One advantage of electronic data processing is that it",
    image: "",
    answers: [
      { text: "Involves special skills", img: "", correct: false },
      { text: "Deals only with simple data", img: "", correct: false },
      { text: "Is completely error-free", img: "", correct: false },
      { text: "Handles complex data", img: "", correct: true }
    ]
  },
  {
    question: "A computer cannot operate without",
    image: "",
    answers: [
      { text: "An operator", img: "", correct: false },
      { text: "An instruction", img: "", correct: true },
      { text: "A printer", img: "", correct: false },
      { text: "A mouse", img: "", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultSection = document.getElementById("result");
const correctCount = document.getElementById("correct-count");
const missedCount = document.getElementById("missed-count");
const totalCount = document.getElementById("total-count");
const restartBtn = document.getElementById("restart-btn");
const theoryBtn = document.getElementById("theory-btn");
const progressBar = document.getElementById("progress-bar");

let currentQuestionIndex = 0;
let score = 0;
let missed = 0;
let chart;
let missedQuestions = []; // 🔹 Array to store missed questions

// Start quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  missed = 0;
  missedQuestions = []; // Reset missed questions
  nextButton.innerText = "Next";
  resultSection.classList.add("hidden");
  document.querySelector(".quiz").classList.remove("hidden");
  
  // Clean up any old review data
  const oldReview = document.querySelector('.review-container');
  if(oldReview) oldReview.remove();

  showQuestion();
  updateProgress();
}

// Show question
function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;

  // TEXT
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  // IMAGE
  if (currentQuestion.image) {
    const qImg = document.createElement("img");
    qImg.src = currentQuestion.image;
    qImg.classList.add("question-image");
    questionElement.appendChild(qImg);
  }

  // OPTIONS
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.classList.add("btn");

    // TEXT + IMAGE inside option
    button.innerHTML = `
      <span>${answer.text}</span>
      ${answer.img ? `<img src="${answer.img}" class="answer-img">` : ""}
    `;

    if (answer.correct) button.dataset.correct = true;
    button.addEventListener("click", (e) => selectAnswer(e, currentQuestion));
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
function selectAnswer(e, currentQuestion) {
  const selectedBtn = e.target.closest("button");
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    score++;
  } else {
    missed++;
    // 🔹 Record the missed question and the correct answer
    const correctAnswer = currentQuestion.answers.find(a => a.correct).text;
    missedQuestions.push({
      question: currentQuestion.question,
      correctAnswer: correctAnswer
    });
  }

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

// Progress bar
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

  // Chart Logic
  const correctPercent = ((score / questions.length) * 100).toFixed(1);
  const missedPercent = ((missed / questions.length) * 100).toFixed(1);

  if (chart) chart.destroy();
  chart = new Chart(document.getElementById("resultChart"), {
    type: "pie",
    data: {
      labels: ["Correct", "Missed"],
      datasets: [{
        data: [correctPercent, missedPercent],
        backgroundColor: ["#10b981", "#ef4444"]
      }]
    },
    options: {
      plugins: { legend: { position: "bottom" } },
      animation: { animateScale: true }
    }
  });

  // 🔹 Generate Review Section (Missed Questions)
  generateReviewSection();
}

function generateReviewSection() {
  // Remove existing review if any
  const oldReview = document.querySelector('.review-container');
  if(oldReview) oldReview.remove();

  if (missedQuestions.length === 0) return; // Perfect score, nothing to show

  const reviewContainer = document.createElement('div');
  reviewContainer.classList.add('review-container');
  reviewContainer.innerHTML = `<h3>⚠️ Review Missed Questions</h3>`;

  missedQuestions.forEach((item, index) => {
    const card = document.createElement('div');
    card.classList.add('review-card');
    card.innerHTML = `
      <p class="review-q"><strong>Q:</strong> ${item.question}</p>
      <p class="review-a"><strong>Correct Answer:</strong> ${item.correctAnswer}</p>
    `;
    reviewContainer.appendChild(card);
  });

  // Insert before the Restart button
  resultSection.insertBefore(reviewContainer, restartBtn);
}

// Restart quiz
restartBtn.addEventListener("click", startQuiz);

// Initialize app
startQuiz();