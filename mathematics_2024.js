const questions = [
  {
    question: "Multiply 3.4 × 10⁻⁵ by 7.1 × 10⁸ and leave the answer in standard form.",
    img: "",
    answers: [
      { text: "2.414 × 10²", img: "", correct: false },
      { text: "2.414 × 10³", img: "", correct: false },
      { text: "2.414 × 10⁴", img: "", correct: true },
      { text: "2.414 × 10⁵", img: "", correct: false }
    ]
  },
  {
    question: "Given that P = {p : 1 < p < 20}, where p is an integer and R = {r : 0 ≤ r ≤ 25, where r is a multiple of 4}. Find P ∩ R.",
    img: "",
    answers: [
      { text: "{4, 8, 10, 16}", img: "", correct: false },
      { text: "{4, 8, 12, 16}", img: "", correct: true },
      { text: "{4, 8, 12, 16, 20}", img: "", correct: false },
      { text: "{4, 8, 12, 16, 20, 24}", img: "", correct: false }
    ]
  },
  {
    question: "The first term of an arithmetic progression is 2 and the last term is 29. If the common difference is 3, how many terms are in the arithmetic progression?",
    img: "",
    answers: [
      { text: "8", img: "", correct: false },
      { text: "9", img: "", correct: false },
      { text: "10", img: "", correct: true },
      { text: "11", img: "", correct: false }
    ]
  },
  {
    question: "Express in index form: logₐx + logₐy = 3.",
    img: "",
    answers: [
      { text: "x + y = 3", img: "", correct: false },
      { text: "xy = 3", img: "", correct: false },
      { text: "xy = a³", img: "", correct: true },
      { text: "x + y = a³", img: "", correct: false }
    ]
  },
  {
    question: "Simplify: (2p − q)² − (p + q)².",
    img: "",
    answers: [
      { text: "3p(p − 2q)", img: "", correct: true },
      { text: "2p(p − 3q)", img: "", correct: false },
      { text: "3p(2p − q)", img: "", correct: false },
      { text: "2p(3p − q)", img: "", correct: false }
    ]
  },
  {
    question: "If (3 − 4√2)(1 + 3√2) = a + b√2, find the value of b.",
    img: "",
    answers: [
      { text: "-5", img: "", correct: false },
      { text: "5", img: "", correct: true },
      { text: "-21", img: "", correct: false },
      { text: "21", img: "", correct: false }
    ]
  },
  {
    question: "Find the time for which $1,250.00 will amount to $2,031.25 at 12.5% per annum simple interest.",
    img: "",
    answers: [
      { text: "2 years", img: "", correct: false },
      { text: "3 years", img: "", correct: false },
      { text: "4 years", img: "", correct: false },
      { text: "5 years", img: "", correct: true }
    ]
  },
  {
    question: "If log₂((x−1)/3) = 5, find the value of x.",
    img: "",
    answers: [
      { text: "8", img: "", correct: false },
      { text: "16", img: "", correct: false },
      { text: "64", img: "", correct: false },
      { text: "97", img: "", correct: true }
    ]
  },
  {
    question: "The population of a town increases by 3% every year. In the year 2000, the population was 3000. Find the population in the year 2003.",
    img: "",
    answers: [
      { text: "3278", img: "", correct: true },
      { text: "3127", img: "", correct: false },
      { text: "3556", img: "", correct: false },
      { text: "3618", img: "", correct: false }
    ]
  },
  {
    question: "A trader gave a change of ₦540.00 instead of ₦570.00 to a customer. Calculate the percentage error.",
    img: "",
    answers: [
      { text: "5 5/19%", img: "", correct: true },
      { text: "5 5/9%", img: "", correct: false },
      { text: "5 7/19%", img: "", correct: false },
      { text: "5 7/9%", img: "", correct: false }
    ]
  },
  {
    question: "The interior angle of a regular polygon is 168°. Find the number of sides of the polygon.",
    img: "",
    answers: [
      { text: "24", img: "", correct: false },
      { text: "30", img: "", correct: true },
      { text: "15", img: "", correct: false },
      { text: "12", img: "", correct: false }
    ]
  },
  {
    question: "If 3x − 2y = −5 and x + 2y = 9, find the value of (x−y)/(x+y).",
    img: "",
    answers: [
      { text: "5/3", img: "", correct: false },
      { text: "3/5", img: "", correct: false },
      { text: "−3/5", img: "", correct: true },
      { text: "−5/3", img: "", correct: false }
    ]
  },
  {
    question: "A variable W varies partly as M and partly inversely as P. Which of the following correctly represents the relation with k₁ and k₂ constants?",
    img: "",
    answers: [
      { text: "W = k₁M / k₂P", img: "", correct: false },
      { text: "W = (k₁ + k₂) M / P", img: "", correct: false },
      { text: "W = k₁M + k₂/P", img: "", correct: true },
      { text: "W = (k₁ + k₂)(M + P)", img: "", correct: false }
    ]
  },
  {
    question: "A cylindrical metallic barrel of height 2.5 m and radius 0.245 m is closed at one end. Find, correct to one decimal place, the total surface area of the barrel. [Take π = 22/7]",
    img: "",
    answers: [
      { text: "2.1 m²", img: "", correct: false },
      { text: "3.5 m²", img: "", correct: false },
      { text: "4.0 m²", img: "", correct: true },
      { text: "9.4 m²", img: "", correct: false }
    ]
  },
  {
    question: "Make R the subject of the relation V = πl(R² − r²).",
    img: "",
    answers: [
      { text: "R = √(V/πl + r²)", img: "", correct: true },
      { text: "R = √(V/πl − r²)", img: "", correct: false },
      { text: "R = √(V − πlr²)", img: "", correct: false },
      { text: "R = √(V + πlr²)", img: "", correct: false }
    ]
  },
  {
    question: "Consider the following statements: m = “Edna is respectful”, n = “Edna is brilliant.” If m ⇒ n, which of the following is valid?",
    img: "",
    answers: [
      { text: "¬n ⇒ ¬m", img: "", correct: true },
      { text: "¬m ⇒ ¬n", img: "", correct: false },
      { text: "n ⇒ ¬m", img: "", correct: false },
      { text: "m ⇒ n", img: "", correct: false }
    ]
  },
  {
    question: "A number is added to both the numerator and the denominator of the fraction 1/8. If the result is 1/2, find the number.",
    img: "",
    answers: [
      { text: "3", img: "", correct: false },
      { text: "4", img: "", correct: false },
      { text: "5", img: "", correct: false },
      { text: "6", img: "", correct: true }
    ]
  },
  {
    question: "Gifty, Justina, and Frank shared 60 oranges in the ratio 5 : 3 : 7 respectively. How many oranges did Justina receive?",
    img: "",
    answers: [
      { text: "16", img: "", correct: false },
      { text: "12", img: "", correct: true },
      { text: "20", img: "", correct: false },
      { text: "28", img: "", correct: false }
    ]
  },
  {
    question: "Find the quadratic equation whose roots are 2/3 and −1.",
    img: "",
    answers: [
      { text: "3x² − x − 2 = 0", img: "", correct: false },
      { text: "3x² + x + 2 = 0", img: "", correct: false },
      { text: "3x² + x − 2 = 0", img: "", correct: true },
      { text: "3x² + x − 1 = 0", img: "", correct: false }
    ]
  },
  {
    question: "A piece of rod of length 44 m is cut to form a rectangular shape such that the ratio of the length to the breadth is 7 : 4. Find the breadth.",
    img: "",
    answers: [
      { text: "8 m", img: "", correct: true },
      { text: "14 m", img: "", correct: false },
      { text: "16 m", img: "", correct: false },
      { text: "24 m", img: "", correct: false }
    ]
  },
  {
    question: "In the diagram, MN ∥ KL, ML and KN intersect at X. |MN| = 12 cm, |MX| = 10 cm and |KN| = 9 cm. If the area of △MXN is 16 cm², calculate the area of △LXK.",
    img: "math_2024_q21.png",
    answers: [
      { text: "8 cm²", img: "", correct: false },
      { text: "9 cm²", img: "", correct: true },
      { text: "10 cm²", img: "", correct: false },
      { text: "12 cm²", img: "", correct: false }
    ]
  },
  {
    question: "A ladder 15 m long leans against a vertical pole, making an angle of 72° with the horizontal. Calculate the distance between the foot of the ladder and the pole.",
    img: "",
    answers: [
      { text: "15.8 m", img: "", correct: false },
      { text: "14.3 m", img: "", correct: false },
      { text: "4.9 m", img: "", correct: false },
      { text: "4.6 m", img: "", correct: true }
    ]
  },
  {
    question: "In the diagram, O is the centre of the circle. If |OA| = 25 cm and |AB| = 40 cm, find the distance OH.",
    img: "math_2024_q23.png",
    answers: [
      { text: "15 cm", img: "", correct: true },
      { text: "20 cm", img: "", correct: false },
      { text: "25 cm", img: "", correct: false },
      { text: "30 cm", img: "", correct: false }
    ]
  },
  {
    question: "Given that P is 25 m on a bearing of 330° from Q, how far south of P is Q?",
    img: "",
    answers: [
      { text: "25.2 m", img: "", correct: false },
      { text: "21.7 m", img: "", correct: true },
      { text: "19.8 m", img: "", correct: false },
      { text: "18.5 m", img: "", correct: false }
    ]
  },
  {
    question: "A car valued at $600,000.00 depreciates by 10% each year. What will be the value of the car at the end of two years?",
    img: "",
    answers: [
      { text: "$120,000.00", img: "", correct: false },
      { text: "$480,000.00", img: "", correct: false },
      { text: "$486,000.00", img: "", correct: true },
      { text: "$540,000.00", img: "", correct: false }
    ]
  },
  {
    question: "The length and breadth of a cuboid are 15 cm and 8 cm respectively. If the volume is 1560 cm³, calculate the total surface area.",
    img: "",
    answers: [
      { text: "976 cm²", img: "", correct: false },
      { text: "838 cm²", img: "", correct: true },
      { text: "792 cm²", img: "", correct: false },
      { text: "746 cm²", img: "", correct: false }
    ]
  },
  {
    question: "The number 1621 was subtracted from 6244 in base x. If the result was 4323, find x.",
    img: "",
    answers: [
      { text: "7", img: "", correct: true },
      { text: "8", img: "", correct: false },
      { text: "9", img: "", correct: false },
      { text: "10", img: "", correct: false }
    ]
  },
  {
    question: "Factorize completely: 27x² − 48y².",
    img: "",
    answers: [
      { text: "3(3x + 4y)(3x − 4y)", img: "", correct: true },
      { text: "3(3x + 4y)(3x + 4y)", img: "", correct: false },
      { text: "3(9x − 16y)(9x + 16y)", img: "", correct: false },
      { text: "3(9x − 16y)(9x − 16y)", img: "", correct: false }
    ]
  },
  {
    question: "For what values of x is (x−3)/4 + (x+1)/8 ≥ 2?",
    img: "",
    answers: [
      { text: "x ≥ 5", img: "", correct: false },
      { text: "x ≥ 6", img: "", correct: false },
      { text: "x ≥ 7", img: "", correct: true },
      { text: "x ≥ 8", img: "", correct: false }
    ]
  },
  {
    question: "A cone and a cylinder are of equal volume. The base radius of the cone is twice the radius of the cylinder. What is the ratio of the height of the cylinder to that of the cone?",
    img: "",
    answers: [
      { text: "5:4", img: "", correct: false },
      { text: "4:3", img: "", correct: true },
      { text: "3:2", img: "", correct: false },
      { text: "3:4", img: "", correct: false }
    ]
  },
  {
    question: "The gradient of the line joining the points P(2, −8) and Q(1, y) is −4. Find the value of y.",
    img: "",
    answers: [
      { text: "2", img: "", correct: false },
      { text: "4", img: "", correct: false },
      { text: "−4", img: "", correct: true },
      { text: "−3", img: "", correct: false }
    ]
  },
  {
    question: "The perimeter of a rectangular garden is 90 m. If the width is 7 m less than the length, find the length of the garden.",
    img: "",
    answers: [
      { text: "19 m", img: "", correct: false },
      { text: "23 m", img: "", correct: false },
      { text: "24 m", img: "", correct: false },
      { text: "26 m", img: "", correct: true }
    ]
  },
  {
    question: "Four of the angles of a hexagon sum up to 420°. If the remaining angles are equal, find the value of each of the remaining angles.",
    img: "",
    answers: [
      { text: "60°", img: "", correct: false },
      { text: "100°", img: "", correct: false },
      { text: "120°", img: "", correct: false },
      { text: "150°", img: "", correct: true }
    ]
  },
  {
    question: "Calculate the mean mass of club members with masses: 59, 44, 53, 49, 57, 40, 48, and 50 kg.",
    img: "",
    answers: [
      { text: "44 kg", img: "", correct: false },
      { text: "50 kg", img: "", correct: true },
      { text: "40 kg", img: "", correct: false },
      { text: "53 kg", img: "", correct: false }
    ]
  },
  {
    question: "Calculate the variance of the masses: 59, 44, 53, 49, 57, 40, 48, and 50 kg.",
    img: "",
    answers: [
      { text: "35", img: "", correct: true },
      { text: "36", img: "", correct: false },
      { text: "40", img: "", correct: false },
      { text: "50", img: "", correct: false }
    ]
  },
  {
    question: "Two opposite sides of a rectangle are (5x+3) m and (2x+9) m. If an adjacent side is (6x−7) m, find the area of the rectangle.",
    img: "",
    answers: [
      { text: "45 m²", img: "", correct: false },
      { text: "65 m²", img: "", correct: true },
      { text: "125 m²", img: "", correct: false },
      { text: "165 m²", img: "", correct: false }
    ]
  },
  {
    question: "A die is tossed once. Find the probability of getting a prime number.",
    img: "",
    answers: [
      { text: "1/2", img: "", correct: true },
      { text: "1/6", img: "", correct: false },
      { text: "1/3", img: "", correct: false },
      { text: "2/3", img: "", correct: false }
    ]
  },
  {
    question: "The area of a sector of a circle with radius 7 cm is 51.3 cm². Calculate the angle of the sector. [Take π = 22/7]",
    img: "",
    answers: [
      { text: "60°", img: "", correct: false },
      { text: "120°", img: "", correct: true },
      { text: "150°", img: "", correct: false },
      { text: "180°", img: "", correct: false }
    ]
  },
  {
    question: "A cliff on the bank of a river is 87 m high. A boat is 22 m away from the cliff. Calculate the angle of depression of the boat from the top of the cliff.",
    img: "",
    answers: [
      { text: "76°", img: "", correct: true },
      { text: "64°", img: "", correct: false },
      { text: "36°", img: "", correct: false },
      { text: "24°", img: "", correct: false }
    ]
  },
  {
    question: "The probability that Amaka will pass is 3/7 and that Bala will pass is 4/9. Find the probability that both will pass.",
    img: "",
    answers: [
      { text: "2/21", img: "", correct: false },
      { text: "4/21", img: "", correct: true },
      { text: "5/21", img: "", correct: false },
      { text: "9/21", img: "", correct: false }
    ]
  },
  {
    question: "Find the range of the following set of numbers: 28, 29, 39, 38, 33, 37, 26, 20, 15, and 25.",
    img: "",
    answers: [
      { text: "22", img: "", correct: false },
      { text: "24", img: "", correct: true },
      { text: "25", img: "", correct: false },
      { text: "27", img: "", correct: false }
    ]
  },
  {
    question: "The fourth and eighth terms of an AP are 16 and 40 respectively. Find the common difference.",
    img: "",
    answers: [
      { text: "-6", img: "", correct: false },
      { text: "6", img: "", correct: true },
      { text: "-2", img: "", correct: false },
      { text: "2", img: "", correct: false }
    ]
  },
  {
    question: "For what values of y is (y+2)/(8y²−10y+3) not defined?",
    img: "",
    answers: [
      { text: "-3/4, 1/2", img: "", correct: false },
      { text: "-3/4, -1/2", img: "", correct: false },
      { text: "3/4, -1/2", img: "", correct: false },
      { text: "3/4, 1/2", img: "", correct: true }
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