const questions = [
  {
    question: "Evaluate, correct to four significant figures, (573.06 × 184.25).",
    img: "",
    answers: [
      { text: "105600", img: "", correct: true },
      { text: "105622", img: "", correct: false },
      { text: "105500", img: "", correct: false },
      { text: "105532", img: "", correct: false }
    ]
  },
  {
    question: "Change 432₅ to a number in base three.",
    img: "",
    answers: [
      { text: "11100₃", img: "", correct: true },
      { text: "10100₃", img: "", correct: false },
      { text: "11101₃", img: "", correct: false },
      { text: "1010₃", img: "", correct: false }
    ]
  },
  {
    question: "Given that A and B are sets such that n(A) = 8, n(B) = 12 and n(A ∩ B) = 3, find n(A ∪ B).",
    img: "",
    answers: [
      { text: "15", img: "", correct: false },
      { text: "17", img: "", correct: true },
      { text: "20", img: "", correct: false },
      { text: "23", img: "", correct: false }
    ]
  },
  {
    question: "If √24 + √96 − √600 = y√6, find the value of y.",
    img: "",
    answers: [
      { text: "4", img: "", correct: false },
      { text: "2", img: "", correct: false },
      { text: "-2", img: "", correct: false },
      { text: "-4", img: "", correct: true }
    ]
  },
  {
    question: "Evaluate 25 × 54 (mod 7).",
    img: "",
    answers: [
      { text: "2", img: "", correct: false },
      { text: "3", img: "", correct: false },
      { text: "5", img: "", correct: false },
      { text: "6", img: "", correct: true }
    ]
  },
  {
    question: "If 4³ˣ = 16ˣ⁺¹, find the value of x.",
    img: "",
    answers: [
      { text: "-2", img: "", correct: false },
      { text: "2", img: "", correct: true },
      { text: "1", img: "", correct: false },
      { text: "-1", img: "", correct: false }
    ]
  },
  {
    question: "A weaver bought a bundle of grass for ₦50.00 from which he made 8 mats. If each mat was sold for ₦15.00, find the percentage profit.",
    img: "",
    answers: [
      { text: "240%", img: "", correct: false },
      { text: "140%", img: "", correct: true },
      { text: "120%", img: "", correct: false },
      { text: "40%", img: "", correct: false }
    ]
  },
  {
    question: "Find the 17th term of the Arithmetic Progression (A.P): -6, -1, 4, ---",
    img: "",
    answers: [
      { text: "-91", img: "", correct: false },
      { text: "-86", img: "", correct: false },
      { text: "74", img: "", correct: true },
      { text: "79", img: "", correct: false }
    ]
  },
  {
    question: "M varies directly as n and inversely as the square of p. If M = 3 when n = 2 and p = 1, find M in terms of n and p.",
    img: "",
    answers: [
      { text: "M = 3n / 2p²", img: "", correct: true },
      { text: "M = 2n / 3p²", img: "", correct: false },
      { text: "M = 2n / 3p", img: "", correct: false },
      { text: "M = 3n² / 2p²", img: "", correct: false }
    ]
  },
  {
    question: "If a = 3, and b = -7, find the value of (5b + (a + b)²) / (a − b)².",
    img: "",
    answers: [
      { text: "0.51", img: "", correct: false },
      { text: "0.19", img: "", correct: false },
      { text: "-0.19", img: "", correct: true },
      { text: "-0.51", img: "", correct: false }
    ]
  },
  {
    question: "Three boys shared D10,500.00 in the ratio 6:7:8. Find the largest share.",
    img: "",
    answers: [
      { text: "D4,000.00", img: "", correct: true },
      { text: "D5,000.00", img: "", correct: false },
      { text: "D4,500.00", img: "", correct: false },
      { text: "D3,500.00", img: "", correct: false }
    ]
  },
  {
    question: "The length of a piece of stick is 1.75m. A boy measured it as 1.80m. Find the percentage error.",
    img: "",
    answers: [
      { text: "50/17.5 %", img: "", correct: false },
      { text: "20/7 %", img: "", correct: true },
      { text: "2/9 %", img: "", correct: false },
      { text: "4/9 %", img: "", correct: false }
    ]
  },
  {
    question: "If 5x + 3y = 4 and 5x - 3y = 2, what is the value of (25x² − 9y²)?",
    img: "",
    answers: [
      { text: "20", img: "", correct: false },
      { text: "16", img: "", correct: false },
      { text: "2", img: "", correct: false },
      { text: "8", img: "", correct: true }
    ]
  },
  {
    question: "Mary has ₦3.00 more than Ben but ₦5.00 less than Jane. If Mary has ₦x, how much do Jane and Ben have altogether?",
    img: "",
    answers: [
      { text: "₦(2x - 8)", img: "", correct: false },
      { text: "₦(2x + 8)", img: "", correct: false },
      { text: "₦(2x - 2)", img: "", correct: false },
      { text: "₦(2x + 2)", img: "", correct: true }
    ]
  },
  {
    question: "Stephen is intelligent (p) and Stephen is good at Mathematics (q). If p ⇒ q, which is a valid conclusion?",
    img: "",
    answers: [
      { text: "If Stephen is good at Maths, then he is intelligent", img: "", correct: false },
      { text: "If Stephen is not good at Maths, then he is not intelligent", img: "", correct: true },
      { text: "If Stephen is not intelligent, then he is not good at Maths", img: "", correct: false },
      { text: "If Stephen is not good at Maths, then he is intelligent", img: "", correct: false }
    ]
  },
  {
    question: "What value of p will make (x² − 4x + p) a perfect square?",
    img: "",
    answers: [
      { text: "-2", img: "", correct: false },
      { text: "16", img: "", correct: false },
      { text: "4", img: "", correct: true },
      { text: "-8", img: "", correct: false }
    ]
  },
  {
    question: "Find the value of x such that (1/x + 4/3x − 5/6x + 1) = 0.",
    img: "",
    answers: [
      { text: "1/6", img: "", correct: false },
      { text: "1/4", img: "", correct: false },
      { text: "-3/2", img: "", correct: true },
      { text: "-7/6", img: "", correct: false }
    ]
  },
  {
    question: "Make t the subject of k = (t − p)r/m.",
    img: "",
    answers: [
      { text: "t = km/r + p", img: "", correct: true },
      { text: "t = km/r - p", img: "", correct: false },
      { text: "t = m/kr + p", img: "", correct: false },
      { text: "t = r/km + p", img: "", correct: false }
    ]
  },
  {
    question: "In a triangle geometry problem, if two angles are 25° and 90°, find the third angle x.",
    img: "math_2022_q19.png",
    answers: [
      { text: "50°", img: "", correct: false },
      { text: "65°", img: "", correct: true },
      { text: "25°", img: "", correct: false },
      { text: "155°", img: "", correct: false }
    ]
  },
  {
    question: "An exterior angle of a regular polygon is 22.5°. Find the number of sides.",
    img: "",
    answers: [
      { text: "13", img: "", correct: false },
      { text: "14", img: "", correct: false },
      { text: "15", img: "", correct: false },
      { text: "16", img: "", correct: true }
    ]
  },
  {
    question: "In the diagram, ∠POQ = 150° and radius is 4.2 cm. Find the length of the minor arc PRQ. [π = 22/7]",
    img: "math_2022_q21.png",
    answers: [
      { text: "11.00 cm", img: "", correct: true },
      { text: "15.40 cm", img: "", correct: false },
      { text: "17.64 cm", img: "", correct: false },
      { text: "23.10 cm", img: "", correct: false }
    ]
  },
  {
    question: "Find the area of the minor sector POQ where ∠POQ = 150° and radius is 4.2 cm.",
    img: "math_2022_q21.png",
    answers: [
      { text: "15.40 cm²", img: "", correct: false },
      { text: "17.64 cm²", img: "", correct: false },
      { text: "23.10 cm²", img: "", correct: true },
      { text: "32.34 cm²", img: "", correct: false }
    ]
  },
  {
    question: "A ladder 6 m long leans against a vertical wall at an angle of 53° to the horizontal. How high up the wall does it reach?",
    img: "",
    answers: [
      { text: "3.611 m", img: "", correct: false },
      { text: "4.521 m", img: "", correct: false },
      { text: "4.792 m", img: "", correct: true },
      { text: "3.962 m", img: "", correct: false }
    ]
  },
  {
    question: "A cylinder opened at one end has a radius of 3.5 cm and height 8 cm. Calculate total surface area. [π = 22/7]",
    img: "",
    answers: [
      { text: "126.5 cm²", img: "", correct: false },
      { text: "165.0 cm²", img: "", correct: false },
      { text: "212.0 cm²", img: "", correct: false },
      { text: "214.5 cm²", img: "", correct: true }
    ]
  },
  {
    question: "From the diagram provided, find the perimeter of WXYZ.",
    img: "math_2022_q25.png",
    answers: [
      { text: "30 cm", img: "", correct: false },
      { text: "32 cm", img: "", correct: false },
      { text: "35 cm", img: "", correct: false },
      { text: "37 cm", img: "", correct: true }
    ]
  },
  {
    question: "The length of a rectangle is 10 cm. If its perimeter is 28 cm, find the area.",
    img: "",
    answers: [
      { text: "30 cm²", img: "", correct: false },
      { text: "40 cm²", img: "", correct: true },
      { text: "60 cm²", img: "", correct: false },
      { text: "80 cm²", img: "", correct: false }
    ]
  },
  {
    question: "In the diagram, |MN| = |NR|, ∠MNR = 110°, and ∠WRS = 86°. Find the value of x°.",
    img: "math_2022_q27.png",
    answers: [
      { text: "86°", img: "", correct: false },
      { text: "70°", img: "", correct: false },
      { text: "51°", img: "", correct: true },
      { text: "42°", img: "", correct: false }
    ]
  },
  {
    question: "A boy 1.4 m tall stood 10 m away from a tree of height 12 m. Calculate the angle of elevation of the top from his eyes.",
    img: "",
    answers: [
      { text: "47°", img: "", correct: true },
      { text: "71°", img: "", correct: false },
      { text: "19°", img: "", correct: false },
      { text: "8°", img: "", correct: false }
    ]
  },
  {
    question: "Given that sin(5x − 28)° = cos(3x − 50)°, find the value of x.",
    img: "",
    answers: [
      { text: "39", img: "", correct: false },
      { text: "32", img: "", correct: false },
      { text: "21", img: "", correct: true },
      { text: "14", img: "", correct: false }
    ]
  },
  {
    question: "In the diagram, MNR is tangent to the circle at N and ∠NOS = 108°. Find ∠OSN.",
    img: "math_2022_q30.png",
    answers: [
      { text: "72°", img: "", correct: false },
      { text: "42°", img: "", correct: false },
      { text: "36°", img: "", correct: true },
      { text: "18°", img: "", correct: false }
    ]
  },
  {
    question: "In the same diagram as above, find ∠SNR.",
    img: "math_2022_q30.png",
    answers: [
      { text: "36°", img: "", correct: false },
      { text: "42°", img: "", correct: false },
      { text: "54°", img: "", correct: true },
      { text: "72°", img: "", correct: false }
    ]
  },
  {
    question: "Prob. birth to girl is 1/2. Prob. blue eyes is 1/4. Prob. girl with blue eyes?",
    img: "",
    answers: [
      { text: "1", img: "", correct: false },
      { text: "3/4", img: "", correct: false },
      { text: "1/8", img: "", correct: true },
      { text: "1/4", img: "", correct: false }
    ]
  },
  {
    question: "Mean of 10 numbers is 56. Mean of first nine is 55. Find the 10th number.",
    img: "",
    answers: [
      { text: "75", img: "", correct: false },
      { text: "65", img: "", correct: true },
      { text: "55", img: "", correct: false },
      { text: "45", img: "", correct: false }
    ]
  },
  {
    question: "Simplify (2 − 18m²) / (1 + 3m).",
    img: "",
    answers: [
      { text: "2(1 + 3m)", img: "", correct: false },
      { text: "2(1 + 3m²)", img: "", correct: false },
      { text: "2(1 − 3m)", img: "", correct: true },
      { text: "2(1 − 3m²)", img: "", correct: false }
    ]
  },
  {
    question: "Triangle PQR is inscribed in a circle. PS is tangent at P. Find ∠PRQ.",
    img: "math_2022_q35.png",
    answers: [
      { text: "49°", img: "", correct: false },
      { text: "58°", img: "", correct: true },
      { text: "73°", img: "", correct: false },
      { text: "131°", img: "", correct: false }
    ]
  },
  {
    question: "Triangle MNR inscribed in a circle. ∠MRN = 41° and ∠PMR = 141°. Find ∠QNR.",
    img: "math_2022_q36.png",
    answers: [
      { text: "39°", img: "", correct: false },
      { text: "89°", img: "", correct: true },
      { text: "110°", img: "", correct: false },
      { text: "141°", img: "", correct: false }
    ]
  },
  {
    question: "Solve: (y + 2)/4 − (y − 1)/3 > 1.",
    img: "",
    answers: [
      { text: "y < −10", img: "", correct: false },
      { text: "y < −2", img: "", correct: true },
      { text: "y < 2", img: "", correct: false },
      { text: "y < 10", img: "", correct: false }
    ]
  },
  {
    question: "Find the lower quartile (Q1) of: 12, 47, 49, 15, 43, 41, 13, 39, 43, 41, 13, 39, 43, 41, 36.",
    img: "",
    answers: [
      { text: "12", img: "", correct: false },
      { text: "13", img: "", correct: false },
      { text: "15", img: "", correct: true },
      { text: "20", img: "", correct: false }
    ]
  },
  {
    question: "Find the mean of the ages: 12, 47, 49, 15, 43, 41, 13, 39, 43, 41, 13, 39, 43, 41, 36.",
    img: "",
    answers: [
      { text: "33.35", img: "", correct: false },
      { text: "35.54", img: "", correct: false },
      { text: "34.45", img: "", correct: true },
      { text: "36.44", img: "", correct: false }
    ]
  },
  {
    question: "Find, correct to two decimal places, the volume of a sphere whose radius is 3 cm. [π = 22/7]",
    img: "",
    answers: [
      { text: "75.57 cm³", img: "", correct: false },
      { text: "88.12 cm³", img: "", correct: false },
      { text: "105.29 cm³", img: "", correct: false },
      { text: "113.14 cm³", img: "", correct: true }
    ]
  },
  {
    question: "Parallel sides of a trapezium are 9 cm and 12 cm. Area is 105 cm². Find the height.",
    img: "",
    answers: [
      { text: "5 cm", img: "", correct: false },
      { text: "7 cm", img: "", correct: false },
      { text: "10 cm", img: "", correct: true },
      { text: "15 cm", img: "", correct: false }
    ]
  },
  {
    question: "Find the volume of a cone of radius 3.5 cm and vertical height 12 cm. [π = 22/7]",
    img: "",
    answers: [
      { text: "15.5 cm³", img: "", correct: false },
      { text: "21.0 cm³", img: "", correct: false },
      { text: "142.0 cm³", img: "", correct: false },
      { text: "154.0 cm³", img: "", correct: true }
    ]
  },
  {
    question: "45% read Paper A, 60% read Paper B. 20% read both. Probability household reads at least one?",
    img: "",
    answers: [
      { text: "0.45", img: "", correct: false },
      { text: "0.65", img: "", correct: false },
      { text: "0.85", img: "", correct: true },
      { text: "0.95", img: "", correct: false }
    ]
  },
  {
    question: "A rectangle has width 3/4 cm and area of 3 3/8 cm². Find the length.",
    img: "",
    answers: [
      { text: "6 cm", img: "", correct: false },
      { text: "4 1/2 cm", img: "", correct: true },
      { text: "2 5/8 cm", img: "", correct: false },
      { text: "12 cm", img: "", correct: false }
    ]
  },
  {
    question: "The mean of x and y is 4. Find the mean of the four numbers x, 2x, y and 2y.",
    img: "",
    answers: [
      { text: "2", img: "", correct: false },
      { text: "4", img: "", correct: false },
      { text: "6", img: "", correct: true },
      { text: "8", img: "", correct: false }
    ]
  },
  {
    question: "The straight line y = mx − 4 passes through (−4, 16). Calculate the gradient m.",
    img: "",
    answers: [
      { text: "−5", img: "", correct: true },
      { text: "−3", img: "", correct: false },
      { text: "3", img: "", correct: false },
      { text: "5", img: "", correct: false }
    ]
  },
  {
    question: "If x² − 5x + 6 = 0 and x² + px + 6 = 0 have common roots, find p.",
    img: "",
    answers: [
      { text: "5", img: "", correct: false },
      { text: "6", img: "", correct: false },
      { text: "−6", img: "", correct: false },
      { text: "−5", img: "", correct: true }
    ]
  },
  {
    question: "A trader made a loss of 15%. Find the ratio of selling price to cost price.",
    img: "",
    answers: [
      { text: "3 : 20", img: "", correct: false },
      { text: "3 : 17", img: "", correct: false },
      { text: "17 : 20", img: "", correct: true },
      { text: "20 : 23", img: "", correct: false }
    ]
  },
  {
    question: "Given that log₃ 27 = 2x + 1, find the value of x.",
    img: "",
    answers: [
      { text: "0", img: "", correct: false },
      { text: "1", img: "", correct: true },
      { text: "2", img: "", correct: false },
      { text: "3", img: "", correct: false }
    ]
  },
  {
    question: "Solve 6x² = 5x − 1.",
    img: "",
    answers: [
      { text: "x = 2, 3", img: "", correct: false },
      { text: "x = 0, 3", img: "", correct: false },
      { text: "x = 1/2, 1/3", img: "", correct: true },
      { text: "x = 1/2, -1/3", img: "", correct: false }
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
let missedQuestions = []; 

// Start quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  missed = 0;
  missedQuestions = []; 
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

  // IMAGE Logic
  if (currentQuestion.img && currentQuestion.img !== "") {
    const qImg = document.createElement("img");
    qImg.src = currentQuestion.img;
    qImg.classList.add("question-image");
    questionElement.appendChild(qImg);
  }

  // OPTIONS
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.classList.add("btn");

    button.innerHTML = `
      <span>${answer.text}</span>
      ${(answer.img && answer.img !== "") ? `<img src="${answer.img}" class="answer-img">` : ""}
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
    const correctObj = currentQuestion.answers.find(a => a.correct);
    const correctAnswerText = correctObj ? correctObj.text : "No answer marked";
    
    missedQuestions.push({
      question: currentQuestion.question,
      correctAnswer: correctAnswerText
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

  generateReviewSection();
}

function generateReviewSection() {
  const oldReview = document.querySelector('.review-container');
  if(oldReview) oldReview.remove();

  if (missedQuestions.length === 0) return;

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

  resultSection.insertBefore(reviewContainer, restartBtn);
}

restartBtn.addEventListener("click", startQuiz);

startQuiz();