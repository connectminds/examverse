const questions = [
  {
    question: "Evaluate, correct to three decimal places, 4.314 × 0.000056 ÷ 0.0067",
    img: "",
    answers: [
      { text: "0.361", img: "", correct: false },
      { text: "0.036", img: "", correct: true },
      { text: "0.037", img: "", correct: false },
      { text: "0.004", img: "", correct: false }
    ]
  },
  {
    question: "There are 30 students in a class. 15 study woodwork and 13 study metal work. 6 study neither of the two subjects. How many students study woodwork but not metalwork?",
    img: "",
    answers: [
      { text: "5", img: "", correct: false },
      { text: "9", img: "", correct: false },
      { text: "11", img: "", correct: true },
      { text: "13", img: "", correct: false }
    ]
  },
  {
    question: "Simplify the given expression (Indices/Fractions question)",
    img: "",
    answers: [
      { text: "1/3", img: "", correct: false },
      { text: "1/5", img: "", correct: false },
      { text: "1/2", img: "", correct: false },
      { text: "1/4", img: "", correct: true }
    ]
  },
  {
    question: "Solve the linear equation provided in the examination paper.",
    img: "",
    answers: [
      { text: "6", img: "", correct: false },
      { text: "12", img: "", correct: false },
      { text: "30", img: "", correct: false },
      { text: "66", img: "", correct: true }
    ]
  },
  {
    question: "Express 413₇ in base 5",
    img: "",
    answers: [
      { text: "1131₅", img: "", correct: false },
      { text: "1311₅", img: "", correct: true },
      { text: "2311₅", img: "", correct: false },
      { text: "2132₅", img: "", correct: false }
    ]
  },
  {
    question: "Solve: log₃x + log₃(x−8) = 2",
    img: "",
    answers: [
      { text: "6", img: "", correct: false },
      { text: "7", img: "", correct: false },
      { text: "8", img: "", correct: false },
      { text: "9", img: "", correct: true }
    ]
  },
  {
    question: "Mr. Manu is 4 times as old as his son, Adu. 7 years ago, the sum of their ages was 76 years. How old is Adu?",
    img: "",
    answers: [
      { text: "12 years", img: "", correct: false },
      { text: "15 years", img: "", correct: false },
      { text: "18 years", img: "", correct: true },
      { text: "22 years", img: "", correct: false }
    ]
  },
  {
    question: "Factorize completely: x² − (y + z)²",
    img: "",
    answers: [
      { text: "(x−y+z)(x−y−z)", img: "", correct: false },
      { text: "(x+y+z)(x−y−z)", img: "", correct: true },
      { text: "(x+y−z)(x+y+z)", img: "", correct: false },
      { text: "(x−y−z)(x−y−z)", img: "", correct: false }
    ]
  },
  {
    question: "Find the roots of the quadratic equation: 3m² − 2m − 65 = 0",
    img: "",
    answers: [
      { text: "(13/5, 5)", img: "", correct: false },
      { text: "(−13/5, −5)", img: "", correct: false },
      { text: "(−13/3, 5)", img: "", correct: true },
      { text: "(13/3, −5)", img: "", correct: false }
    ]
  },
  {
    question: "M varies jointly as the square of n and the square root of q. If M = 24 when n = 2 and q = 4, find M when n = 5 and q = 9.",
    img: "",
    answers: [
      { text: "288", img: "", correct: false },
      { text: "400", img: "", correct: false },
      { text: "300", img: "", correct: false },
      { text: "225", img: "", correct: true }
    ]
  },
  {
    question: "If m:n = 2⅓ : 1⅕ and n:q = 1½ : 1⅓, find q:m",
    img: "",
    answers: [
      { text: "16:35", img: "", correct: true },
      { text: "35:16", img: "", correct: false },
      { text: "18:35", img: "", correct: false },
      { text: "35:18", img: "", correct: false }
    ]
  },
  {
    question: "One-third the sum of two numbers is 12. Twice their difference is 12. Find the numbers.",
    img: "",
    answers: [
      { text: "21 and 15", img: "", correct: true },
      { text: "20 and 16", img: "", correct: false },
      { text: "22 and 14", img: "", correct: false },
      { text: "23 and 13", img: "", correct: false }
    ]
  },
  {
    question: "Find the quadratic equation whose roots are 2⅔ and −3¾",
    img: "",
    answers: [
      { text: "y² + y − 6 = 0", img: "", correct: false },
      { text: "12y² − y − 6 = 0", img: "", correct: false },
      { text: "12y² + 13y - 120 = 0", img: "", correct: true },
      { text: "12y² − y + 6 = 0", img: "", correct: false }
    ]
  },
  {
    question: "Make x the subject of the relation: y = (ax³ − b³) / 3z",
    img: "",
    answers: [
      { text: "x = ³√(3yzb/a)", img: "", correct: false },
      { text: "x = ³√((3yz + b³)/a)", img: "", correct: true },
      { text: "x = ³√((3yz − b³)/a)", img: "", correct: false },
      { text: "x = ³√((3y³ + b)/az)", img: "", correct: false }
    ]
  },
  {
    question: "The price of a shoe was decreased by 22%. If the new price was ₦27.30, what was the original price?",
    img: "",
    answers: [
      { text: "₦62.30", img: "", correct: false },
      { text: "₦42.30", img: "", correct: false },
      { text: "₦72.00", img: "", correct: false },
      { text: "₦35.00", img: "", correct: true }
    ]
  },
  {
    question: "The radius and height of a solid cylinder are 8 cm and 14 cm respectively. Find, correct to two decimal places, the total surface area. (Take π = 22/7)",
    img: "",
    answers: [
      { text: "1,106.28 cm²", img: "", correct: false },
      { text: "1,016.29 cm²", img: "", correct: false },
      { text: "1,106.29 cm²", img: "", correct: true },
      { text: "1,206.27 cm²", img: "", correct: false }
    ]
  },
  {
    question: "In the diagram, O is the centre of the circle NST. |NT| = |ST| and ∠NTS = 36°. Find the measure of the angle marked t.",
    img: "math_2023_q17.png",
    answers: [
      { text: "36°", img: "", correct: false },
      { text: "72°", img: "", correct: true },
      { text: "108°", img: "", correct: false },
      { text: "54°", img: "", correct: false }
    ]
  },
  {
    question: "A sphere has a radius of 3 cm. Find, in terms of π, its volume.",
    img: "",
    answers: [
      { text: "27π cm³", img: "", correct: false },
      { text: "108π cm³", img: "", correct: false },
      { text: "36π cm³", img: "", correct: true },
      { text: "30π cm³", img: "", correct: false }
    ]
  },
  {
    question: "Arrange the following numbers in ascending order of magnitude: 110₂, 31₈, 42₅",
    img: "",
    answers: [
      { text: "110₂, 31₈, 42₅", img: "", correct: false },
      { text: "110₂, 42₅, 31₈", img: "", correct: true },
      { text: "31₂, 42₈, 110₅", img: "", correct: false },
      { text: "42₂, 31₈, 110₅", img: "", correct: false }
    ]
  },
  {
    question: "A notebook of length 15 cm was measured by a student as 16.8 cm. Calculate, correct to two decimal places, the percentage error.",
    img: "",
    answers: [
      { text: "12.00%", img: "", correct: true },
      { text: "11.71%", img: "", correct: false },
      { text: "11.0%", img: "", correct: false },
      { text: "10.71%", img: "", correct: false }
    ]
  },
  {
    question: "Find the value of m in the geometric diagram provided.",
    img: "math_2023_q21.png",
    answers: [
      { text: "140°", img: "", correct: false },
      { text: "130°", img: "", correct: false },
      { text: "50°", img: "", correct: false },
      { text: "40°", img: "", correct: true }
    ]
  },
  {
    question: "A line L passing through (6, −13) is parallel to the line through (7, 4) and (−3, 9). Find the equation of L.",
    img: "",
    answers: [
      { text: "y = ½x − 10", img: "", correct: false },
      { text: "y = −½x + 10", img: "", correct: false },
      { text: "y = −½x − 10", img: "", correct: true },
      { text: "y = ½x + 10", img: "", correct: false }
    ]
  },
  {
    question: "An empty cylindrical tank is 140 cm in diameter. If 200 litres of water is poured in, calculate the height of water to the nearest cm. (π = 22/7)",
    img: "",
    answers: [
      { text: "91 cm", img: "", correct: false },
      { text: "57 cm", img: "", correct: false },
      { text: "13 cm", img: "", correct: true },
      { text: "7 cm", img: "", correct: false }
    ]
  },
  {
    question: "Mrs. Kebeh (2m tall) stands 110m away from a building 58m high. Find the angle of elevation of the top from her eye.",
    img: "",
    answers: [
      { text: "28°", img: "", correct: false },
      { text: "27°", img: "", correct: true },
      { text: "26°", img: "", correct: false },
      { text: "20°", img: "", correct: false }
    ]
  },
  {
    question: "Find the mean deviation of the set of numbers: 14, 15, 16, 17, 18, and 19.",
    img: "",
    answers: [
      { text: "1.7", img: "", correct: false },
      { text: "1.5", img: "", correct: true },
      { text: "2.5", img: "", correct: false },
      { text: "3.5", img: "", correct: false }
    ]
  },
  {
    question: "The interior angle of a regular polygon is 6 times its exterior angle. Find the number of sides.",
    img: "",
    answers: [
      { text: "12", img: "", correct: false },
      { text: "14", img: "", correct: true },
      { text: "15", img: "", correct: false },
      { text: "10", img: "", correct: false }
    ]
  },
  {
    question: "The length of the diagonal of a square is 12cm. Calculate the area of the square.",
    img: "",
    answers: [
      { text: "36 cm²", img: "", correct: false },
      { text: "48 cm²", img: "", correct: false },
      { text: "72 cm²", img: "", correct: true },
      { text: "18 cm²", img: "", correct: false }
    ]
  },
  {
    question: "Consider: p: Siah is from Foya; q: Foya is in Lofa. Write in symbolic form: “If Siah is from Foya, then Foya is in Lofa.”",
    img: "",
    answers: [
      { text: "q ⇒ p", img: "", correct: false },
      { text: "p ⇔ q", img: "", correct: false },
      { text: "p ⇒ q", img: "", correct: true },
      { text: "~q ⇔ p", img: "", correct: false }
    ]
  },
  {
    question: "What is the name of a triangle with vertices (1, −3), (6, 2) and (0, 4)?",
    img: "",
    answers: [
      { text: "Isosceles triangle", img: "", correct: true },
      { text: "Equilateral triangle", img: "", correct: false },
      { text: "Right triangle", img: "", correct: false },
      { text: "Scalene triangle", img: "", correct: false }
    ]
  },
  {
    question: "In the diagram, NR is a diameter, ∠MNR = x° and ∠SRN = (5x + 20)°. Find the value of 2x.",
    img: "math_2023_q30.png",
    answers: [
      { text: "20°", img: "", correct: false },
      { text: "35°", img: "", correct: false },
      { text: "42°", img: "", correct: true },
      { text: "90°", img: "", correct: false }
    ]
  },
  {
    question: "Find the value of α in the equation: cos(α + 14)° = sin(4α + 6)°.",
    img: "",
    answers: [
      { text: "14", img: "", correct: true },
      { text: "16", img: "", correct: false },
      { text: "13", img: "", correct: false },
      { text: "15", img: "", correct: false }
    ]
  },
  {
    question: "Bag A: 4W, 3B. Bag B: 5R, 6B. If one is picked from each, find the probability they are the same colour.",
    img: "",
    answers: [
      { text: "½", img: "", correct: false },
      { text: "18/77", img: "", correct: true },
      { text: "11/12", img: "", correct: false },
      { text: "9/11", img: "", correct: false }
    ]
  },
  {
    question: "The angle of a sector of a circle (radius 3.4 cm) is 115°. Find the area of the sector.",
    img: "",
    answers: [
      { text: "10.2 cm²", img: "", correct: false },
      { text: "11.6 cm²", img: "", correct: true },
      { text: "12.7 cm²", img: "", correct: false },
      { text: "9.4 cm²", img: "", correct: false }
    ]
  },
  {
    question: "The diagonals of a rhombus are 16 cm and 12 cm. Find the length of a side.",
    img: "",
    answers: [
      { text: "8 cm", img: "", correct: false },
      { text: "10 cm", img: "", correct: true },
      { text: "14 cm", img: "", correct: false },
      { text: "20 cm", img: "", correct: false }
    ]
  },
  {
    question: "Elevation of top of building from Z is 50°. Height is 124m. Find distance from Z to the foot.",
    img: "",
    answers: [
      { text: "104.05 m", img: "", correct: true },
      { text: "147.78 m", img: "", correct: false },
      { text: "161.87 m", img: "", correct: false },
      { text: "192.91 m", img: "", correct: false }
    ]
  },
  {
    question: "Student measured pole as 5.98m (error = 5%). Find the actual height.",
    img: "",
    answers: [
      { text: "6.65 m", img: "", correct: false },
      { text: "7.67 m", img: "", correct: false },
      { text: "6.29 m", img: "", correct: true },
      { text: "7.18 m", img: "", correct: false }
    ]
  },
  {
    question: "In the diagram, O is the centre of the circle QRS and ∠SQR = 28°. Find ∠ORS.",
    img: "math_2023_q37.png",
    answers: [
      { text: "76°", img: "", correct: false },
      { text: "62°", img: "", correct: true },
      { text: "56°", img: "", correct: false },
      { text: "28°", img: "", correct: false }
    ]
  },
  {
    question: "John was facing S 35° E. If he turned 90° anticlockwise, find his new direction.",
    img: "",
    answers: [
      { text: "N 55° E", img: "", correct: true },
      { text: "S 55° E", img: "", correct: false },
      { text: "S 35° W", img: "", correct: false },
      { text: "N 35° W", img: "", correct: false }
    ]
  },
  {
    question: "If 2x − 3y = −11 and 3x + 2y = 3, evaluate (y − x)².",
    img: "",
    answers: [
      { text: "4", img: "", correct: false },
      { text: "9", img: "", correct: false },
      { text: "16", img: "", correct: true },
      { text: "25", img: "", correct: false }
    ]
  },
  {
    question: "An equilateral triangle has side 2 cm. Calculate the height.",
    img: "",
    answers: [
      { text: "√3 cm", img: "", correct: true },
      { text: "√5 cm", img: "", correct: false },
      { text: "3 cm", img: "", correct: false },
      { text: "5 cm", img: "", correct: false }
    ]
  },
  {
    question: "A number is selected at random from 40 to 50 inclusive. Find the probability it is prime.",
    img: "",
    answers: [
      { text: "3/11", img: "", correct: true },
      { text: "4/11", img: "", correct: false },
      { text: "5/11", img: "", correct: false },
      { text: "8/11", img: "", correct: false }
    ]
  },
  {
    question: "If the failed mark was 4, what is the probability that a student selected at random passed?",
    img: "economics_bar_chart.png",
    answers: [
      { text: "0.64", img: "", correct: true },
      { text: "0.36", img: "", correct: false },
      { text: "0.74", img: "", correct: false },
      { text: "0.52", img: "", correct: false }
    ]
  },
  {
    question: "What percentage of students scored at most 5 marks?",
    img: "economics_bar_chart.png",
    answers: [
      { text: "63.2%", img: "", correct: true },
      { text: "58.5%", img: "", correct: false },
      { text: "41.5%", img: "", correct: false },
      { text: "38.3%", img: "", correct: false }
    ]
  },
  {
    question: "How many students scored at least 3 marks?",
    img: "economics_bar_chart.png",
    answers: [
      { text: "18", img: "", correct: false },
      { text: "52", img: "", correct: false },
      { text: "44", img: "", correct: true },
      { text: "38", img: "", correct: false }
    ]
  },
  {
    question: "If logₐ3 = m and logₐ5 = p, find logₐ75.",
    img: "",
    answers: [
      { text: "(m + p)/2", img: "", correct: false },
      { text: "2m + p", img: "", correct: false },
      { text: "m + 2p", img: "", correct: true },
      { text: "(m/2) + p", img: "", correct: false }
    ]
  },
  {
    question: "In the diagram, O is centre of circle MNR. ∠ORN = 48° and ∠RNM = 124°. Find ∠OMN.",
    img: "math_2023_q46.png",
    answers: [
      { text: "76°", img: "", correct: false },
      { text: "64°", img: "", correct: false },
      { text: "58°", img: "", correct: true },
      { text: "48°", img: "", correct: false }
    ]
  },
  {
    question: "Simplify: 3/√12 + 10/√3 − 6/√3.",
    img: "",
    answers: [
      { text: "14/√3", img: "", correct: false },
      { text: "18/√3", img: "", correct: false },
      { text: "10/√3", img: "", correct: false },
      { text: "7/√3", img: "", correct: true }
    ]
  },
  {
    question: "The truth set of 8 + 2x − x² = 0 is [p, q]. Evaluate p + q.",
    img: "",
    answers: [
      { text: "−6", img: "", correct: false },
      { text: "−2", img: "", correct: false },
      { text: "2", img: "", correct: true },
      { text: "4", img: "", correct: false }
    ]
  },
  {
    question: "Find the gradient of the line passing through (½, −⅓) and (3, ⅔).",
    img: "",
    answers: [
      { text: "7/2", img: "", correct: false },
      { text: "5/2", img: "", correct: false },
      { text: "2/7", img: "", correct: false },
      { text: "2/5", img: "", correct: true }
    ]
  },
  {
    question: "For what value of x is (x² + 2)/(10x² − 13x − 3) undefined?",
    img: "",
    answers: [
      { text: "7/2, 1/5", img: "", correct: false },
      { text: "3/2, -1/5", img: "", correct: true },
      { text: "−3/2", img: "", correct: false },
      { text: "−3/2, 1/5", img: "", correct: false }
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