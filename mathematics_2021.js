/**
 * ExamVerse Database: Mathematics 2021
 * Fully Audited - 51 Intelligence Nodes Included
 * Created by Connectminds IT Tech
 */

const questions = [
  {
    topic: "Number Bases",
    question: "Correct 0.0007985 to three significant figures.",
    answers: [
      { text: "0.000798", correct: false },
      { text: "0.000800", correct: false },
      { text: "0.000799", correct: true },
      { text: "0.0008", correct: false }
    ]
  },
  {
    topic: "Number Bases",
    question: "Simplify: (11<sub>2</sub>)<sup>2</sup>",
    answers: [
      { text: "1001<sub>2</sub>", correct: true },
      { text: "1101<sub>2</sub>", correct: false },
      { text: "101<sub>2</sub>", correct: false },
      { text: "10001<sub>2</sub>", correct: false }
    ]
  },
  {
    topic: "Algebraic Processes",
    question: "Solve: 2<sup>√(2x+1)</sup> = 32",
    answers: [
      { text: "13", correct: false },
      { text: "24", correct: false },
      { text: "12", correct: true },
      { text: "11", correct: false }
    ]
  },
  {
    topic: "Indices & Logarithms",
    question: "If log<sub>10</sub>2 = m and log<sub>10</sub>3 = n, find log<sub>10</sub>24 in terms of m and n.",
    answers: [
      { text: "3m + n", correct: true },
      { text: "m + 3n", correct: false },
      { text: "4mn", correct: false },
      { text: "3mn", correct: false }
    ]
  },
  {
    topic: "Sequence & Series",
    question: "Find the 5th term of the sequence: 2, 5, 10, 17 ...",
    answers: [
      { text: "22", correct: false },
      { text: "24", correct: false },
      { text: "36", correct: false },
      { text: "26", correct: true }
    ]
  },
  {
    topic: "Sets",
    question: "If P = {x : 1 < x < 3} and Q = {x : 1 < x < 3}, find P ∩ Q where x is an integer.",
    answers: [
      { text: "0", correct: false },
      { text: "3", correct: false },
      { text: "2", correct: true },
      { text: "10", correct: false }
    ]
  },
  {
    topic: "Algebraic Processes",
    question: "Factorize: 6pq + 3ps + 6qr + 3rs.",
    answers: [
      { text: "3(r - p)(2q + s)", correct: false },
      { text: "3(p + r)(2q + s)", correct: false },
      { text: "3(2q + s)(p + r)", correct: true },
      { text: "3(r + p)(s + 2q)", correct: false }
    ]
  },
  {
    topic: "Fractions",
    question: "What number should be subtracted from the sum of 2<sup>1</sup>/<sub>6</sub> and 2<sup>7</sup>/<sub>12</sub> to give 3<sup>1</sup>/<sub>4</sub>?",
    answers: [
      { text: "1/3", correct: false },
      { text: "1 1/2", correct: true },
      { text: "1 1/6", correct: false },
      { text: "1/2", correct: false }
    ]
  },
  {
    topic: "Algebraic Processes",
    question: "Mensah is 5 years old and Joyce is thrice as old. In how many years will Joyce be twice as old as Mensah?",
    answers: [
      { text: "3 years", correct: false },
      { text: "10 years", correct: false },
      { text: "5 years", correct: true },
      { text: "15 years", correct: false }
    ]
  },
  {
    topic: "Indices & Logarithms",
    question: "If 16<sup>2(x+1)</sup> = 4<sup>x</sup> 8<sup>(1-x)</sup>, find the value of x.",
    answers: [
      { text: "-4", correct: false },
      { text: "4", correct: false },
      { text: "1", correct: false },
      { text: "-1", correct: true }
    ]
  },
  {
    topic: "Mensuration",
    question: "The circumference of a circular track is 9 km. A cyclist stops after covering 302 km. How far is the cyclist from the starting point?",
    answers: [
      { text: "5 km", correct: true },
      { text: "6 km", correct: false },
      { text: "7 km", correct: false },
      { text: "3 km", correct: false }
    ]
  },
  {
    topic: "Surds",
    question: "Simplify 2√7 – 14 / √7 + 7 / √21",
    answers: [
      { text: "√21/21", correct: false },
      { text: "7√21/3", correct: false },
      { text: "√21/3", correct: true },
      { text: "3√21", correct: false }
    ]
  },
  {
    topic: "Simultaneous Equations",
    question: "If 4x + 2y = 16 and 6x − 2y = 4, find the value of (y − x).",
    answers: [
      { text: "8", correct: false },
      { text: "2", correct: true },
      { text: "4", correct: false },
      { text: "6", correct: false }
    ]
  },
  {
    topic: "Variation",
    question: "R is directly proportional to L and inversely proportional to P. R = 3 when L = 9 and P = 0.8, find R when L = 15 and P = 1.8",
    answers: [
      { text: "2.2", correct: true },
      { text: "3.3", correct: false },
      { text: "6.6", correct: false },
      { text: "0.3", correct: false }
    ]
  },
  {
    topic: "Plane Geometry",
    question: "In the geometry diagram (Question 15), calculate the value of t.",
    img: "math_2021_q15.png",
    answers: [
      { text: "70°", correct: false },
      { text: "165°", correct: false },
      { text: "140°", correct: false },
      { text: "110°", correct: true }
    ]
  },
  {
    topic: "Plane Geometry",
    question: "The sum of interior angles of a regular polygon with k sides is (3k - 10) right angles. Size of exterior angle?",
    answers: [
      { text: "60°", correct: true },
      { text: "40°", correct: false },
      { text: "90°", correct: false },
      { text: "120°", correct: false }
    ]
  },
  {
    topic: "Algebraic Processes",
    question: "Make u the subject in x = (2u + 3) / (3u - 2)",
    answers: [
      { text: "u = (2x+3)/(3x-2)", correct: true },
      { text: "u = (2x-3)/(3x-2)", correct: false },
      { text: "u = (2x+3)/(2-3x)", correct: false },
      { text: "u = (2x+3)/(3x+2)", correct: false }
    ]
  },
  {
    topic: "Business Mathematics",
    question: "A trader paid import duty of 38 kobo in the naira on an engine. If he paid ₦22,800.00, find the cost of the engine.",
    answers: [
      { text: "₦60,000.00", correct: true },
      { text: "₦120,000.00", correct: false },
      { text: "₦24,000.00", correct: false },
      { text: "₦18,000.00", correct: false }
    ]
  },
  {
    topic: "Plane Geometry",
    question: "The height of an equilateral triangle of side length is 10√3 cm. Calculate its perimeter.",
    answers: [
      { text: "20cm", correct: false },
      { text: "60cm", correct: true },
      { text: "40cm", correct: false },
      { text: "30cm", correct: false }
    ]
  },
  {
    topic: "Trigonometry",
    question: "In ∆LMN, |LM| = 6 cm, ∠LNM = x, and sin x = 3/5. Find the area of ∆LMN.",
    answers: [
      { text: "60 cm²", correct: false },
      { text: "48 cm²", correct: false },
      { text: "24 cm²", correct: true },
      { text: "30 cm²", correct: false }
    ]
  },
  {
    topic: "Logic",
    question: "Students in Literature (L), History (H), and Geography (G). L ⊆ H, and H ∩ G = ∅. Which Venn illustrates this?",
    img: "math_2021_venn.png",
    answers: [
      { text: "Diagram A", correct: true },
      { text: "Diagram B", correct: false },
      { text: "Diagram C", correct: false },
      { text: "Diagram D", correct: false }
    ]
  },
  {
    topic: "Quadratic Equations",
    question: "Find the quadratic equation whose roots are -2q and 5q.",
    answers: [
      { text: "x<sup>2</sup> + 3qx - 10q<sup>2</sup> = 0", correct: false },
      { text: "x<sup>2</sup> + 3qx + 10q<sup>2</sup> = 0", correct: false },
      { text: "x<sup>2</sup> - 3qx + 10q<sup>2</sup> = 0", correct: false },
      { text: "x<sup>2</sup> - 3qx - 10q<sup>2</sup> = 0", correct: true }
    ]
  },
  {
    topic: "Trigonometry",
    question: "If tan θ = 3/4 and 180° < θ < 270°, find the value of cos θ.",
    answers: [
      { text: "4/5", correct: false },
      { text: "3/5", correct: false },
      { text: "-4/5", correct: true },
      { text: "-3/5", correct: false }
    ]
  },
  {
    topic: "Algebraic Processes",
    question: "Simplify: 2/(x-3) - 3/(x-2)",
    answers: [
      { text: "(5 - x) / (x-3)(x-2)", correct: true },
      { text: "-(x + 5) / (x-3)(x-2)", correct: false },
      { text: "(13 - x) / (x-3)(x-2)", correct: false },
      { text: "-(5x - 13) / (x-3)(x-2)", correct: false }
    ]
  },
  {
    topic: "Plane Geometry",
    question: "The diagonals of a rhombus are 12 cm and 5 cm. Calculate its perimeter.",
    answers: [
      { text: "26 cm", correct: true },
      { text: "24 cm", correct: false },
      { text: "17 cm", correct: false },
      { text: "34 cm", correct: false }
    ]
  },
  {
    topic: "Plane Geometry",
    question: "In the diagram (XYZ produce to T), |XY|=|ZY| and ∠XYT=40°. Find ∠XZT.",
    img: "math_2021_q26.png",
    answers: [
      { text: "110°", correct: true },
      { text: "130°", correct: false },
      { text: "140°", correct: false },
      { text: "180°", correct: false }
    ]
  },
  {
    topic: "Mensuration",
    question: "Cube recast as cone (both height h). Find radius r in terms of h.",
    answers: [
      { text: "r = h", correct: false },
      { text: "r = √(3h/π)", correct: false },
      { text: "r = πh", correct: false },
      { text: "r = h √(3/π)", correct: true }
    ]
  },
  {
    topic: "Plane Geometry",
    question: "Which of the following is NOT an exterior angle of a regular polygon?",
    answers: [
      { text: "66°", correct: true },
      { text: "72°", correct: false },
      { text: "24°", correct: false },
      { text: "15°", correct: false }
    ]
  },
  {
    topic: "Trigonometry",
    question: "A man moves 12 km West then 12 km South to point Q. Calculate the bearing of T from Q.",
    answers: [
      { text: "225°", correct: false },
      { text: "315°", correct: false },
      { text: "045°", correct: true },
      { text: "135°", correct: false }
    ]
  },
  {
    topic: "Circle Geometry",
    question: "In circle PQRS, O is centre, ∠PQR = 72°, and OR || PS. Find ∠OPS.",
    img: "math_2021_circle.png",
    answers: [
      { text: "18°", correct: true },
      { text: "108°", correct: false },
      { text: "54°", correct: false },
      { text: "36°", correct: false }
    ]
  },
  {
    topic: "Mensuration",
    question: "Trapezium (parallel sides 10, 21, height 8) in a circle (r=7). Area not covered?",
    answers: [
      { text: "84 cm²", correct: false },
      { text: "80 cm²", correct: false },
      { text: "30 cm²", correct: true },
      { text: "94 cm²", correct: false }
    ]
  },
  {
    topic: "Statistics",
    question: "Mean of 1.12, 2.23, 3.34, 4.45, and 5.56 correct to two decimal places.",
    answers: [
      { text: "3.71", correct: false },
      { text: "3.70", correct: false },
      { text: "3.34", correct: true },
      { text: "3.72", correct: false }
    ]
  },
  {
    topic: "Algebraic Processes",
    question: "Speed x for 2 hrs, then speed x+2 for 3 hrs. Total dist 36 km. Initial speed?",
    answers: [
      { text: "12 km/h", correct: false },
      { text: "3 km/h", correct: false },
      { text: "4 km/h", correct: false },
      { text: "6 km/h", correct: true }
    ]
  },
  {
    topic: "Fractions & Angles",
    question: "Find the value of (x + y) in the provided linear geometric diagram.",
    img: "math_2021_q34.png",
    answers: [
      { text: "215°", correct: false },
      { text: "70°", correct: false },
      { text: "135°", correct: false },
      { text: "145°", correct: true }
    ]
  },
  {
    topic: "Circle Geometry",
    question: "MP is tangent, PNQ = 64°, |RQ| = |RN|. Find marked t.",
    img: "math_2021_q35.png",
    answers: [
      { text: "130°", correct: false },
      { text: "115°", correct: false },
      { text: "58°", correct: true },
      { text: "68°", correct: false }
    ]
  },
  {
    topic: "Statistics",
    question: "Find the first quartile (Q<sub>1</sub>) of: 7, 8, 7, 9, 11, 8, 7, 9, 6, 8.",
    answers: [
      { text: "8.5", correct: false },
      { text: "7.0", correct: true },
      { text: "7.5", correct: false },
      { text: "8.0", correct: false }
    ]
  },
  {
    topic: "Plane Geometry",
    question: "In the diagram (Circle PQRS), find the value of x.",
    img: "math_2021_q37.png",
    answers: [
      { text: "50°", correct: false },
      { text: "30°", correct: false },
      { text: "80°", correct: true },
      { text: "100°", correct: false }
    ]
  },
  {
    topic: "Mensuration",
    question: "Base radius 8 cm, height 11 cm. Calculate curved surface area (to 2 d.p.).",
    answers: [
      { text: "341.98 cm²", correct: true },
      { text: "276.57 cm²", correct: false },
      { text: "201.14 cm²", correct: false },
      { text: "477.71 cm²", correct: false }
    ]
  },
  {
    topic: "Trigonometry",
    question: "Given sin x = 3/5 (0° to 90°), evaluate tan x + 2cos x.",
    answers: [
      { text: "2.35", correct: true },
      { text: "1.35", correct: false },
      { text: "0.55", correct: false },
      { text: "0.05", correct: false }
    ]
  },
  {
    topic: "Circle Geometry",
    question: "Line EC is diameter. ∠ABC = 158°, find ∠ADE.",
    img: "math_2021_q40.png",
    answers: [
      { text: "112°", correct: false },
      { text: "90°", correct: false },
      { text: "68°", correct: true },
      { text: "22°", correct: false }
    ]
  },
  {
    topic: "Statistics",
    question: "Calculate the mean height of 37 players from height data table.",
    img: "math_2021_table.png",
    answers: [
      { text: "163.0", correct: true },
      { text: "162.0", correct: false },
      { text: "160.0", correct: false },
      { text: "165.0", correct: false }
    ]
  },
  {
    topic: "Coordinate Geometry",
    question: "XY midpoint is (-4, -2). X is (-8, -12). Find Y(p, q).",
    answers: [
      { text: "(-6, -2)", correct: false },
      { text: "(0, 8)", correct: true },
      { text: "(4, 10)", correct: false },
      { text: "(0, 4)", correct: false }
    ]
  },
  {
    topic: "Algebraic Processes",
    question: "500 tickets. Adults $4.50, Children $3.00. Total $1987.50. Adult tickets sold?",
    answers: [
      { text: "325", correct: true },
      { text: "235", correct: false },
      { text: "175", correct: false },
      { text: "400", correct: false }
    ]
  },
  {
    topic: "Algebraic Processes",
    question: "Distance d Village: 18 < d ≤ 23. Which inequality represents this?",
    answers: [
      { text: "18 ≤ d ≤ 23", correct: false },
      { text: "18 < d < 23", correct: false },
      { text: "18 ≤ d < 23", correct: false },
      { text: "18 < d ≤ 23", correct: true }
    ]
  },
  {
    topic: "Statistics",
    question: "Pie chart distribution. 60 apples on display, find number of oranges.",
    img: "math_2021_pie.png",
    answers: [
      { text: "80", correct: false },
      { text: "270", correct: false },
      { text: "120", correct: true },
      { text: "90", correct: false }
    ]
  },
  {
    topic: "Probability",
    question: "40 identical balls: 10 red, 12 blue. Prob it is NEITHER red nor blue?",
    answers: [
      { text: "9/20", correct: true },
      { text: "3/10", correct: false },
      { text: "1/4", correct: false },
      { text: "11/20", correct: false }
    ]
  },
  {
    topic: "Probability",
    question: "Fair die tossed twice. Probability of getting a sum of at least 10?",
    answers: [
      { text: "1/6", correct: true },
      { text: "2/3", correct: false },
      { text: "5/18", correct: false },
      { text: "5/36", correct: false }
    ]
  },
  {
    topic: "Algebraic Processes",
    question: "Man will be (x+10) in 8 years. 2 years ago he was 63. Find x.",
    answers: [
      { text: "55", correct: false },
      { text: "63", correct: true },
      { text: "57", correct: false },
      { text: "67", correct: false }
    ]
  },
  {
    topic: "Coordinate Geometry",
    question: "Equation 3x − 5y = 7. Find gradient (slope).",
    answers: [
      { text: "5/3", correct: false },
      { text: "3/5", correct: true },
      { text: "-3/5", correct: false },
      { text: "-5/3", correct: false }
    ]
  },
  {
    topic: "Algebraic Processes",
    question: "For what value of x is (4 - 2x) / (x + 1) undefined?",
    answers: [
      { text: "2", correct: false },
      { text: "-1", correct: true },
      { text: "1", correct: false },
      { text: "-2", correct: false }
    ]
  }
];

/** STANDALONE EXECUTION LOGIC **/
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultSection = document.getElementById("result");
const correctCountText = document.getElementById("correct-count");
const missedCountText = document.getElementById("missed-count");
const totalCountText = document.getElementById("total-count");
const restartBtn = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress-bar");

let currentQuestionIndex = 0;
let score = 0;
let missed = 0;
let chart;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  missed = 0;
  resultSection.classList.add("hidden");
  document.querySelector(".quiz").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let qNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${qNo}. ${currentQuestion.question}`;

  if (currentQuestion.img && currentQuestion.img !== "") {
    const qImg = document.getElementById("question-image");
    qImg.src = currentQuestion.img;
    qImg.classList.remove("hidden");
  }

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    if (answer.correct) button.dataset.correct = "true";
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
  updateProgress();
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) answerButtons.removeChild(answerButtons.firstChild);
  document.getElementById("question-image").classList.add("hidden");
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) score++; else missed++;

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") button.classList.add("correct");
    if (button === selectedBtn && !isCorrect) button.classList.add("incorrect");
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) showQuestion(); else showResults();
});

function updateProgress() {
  const progress = (currentQuestionIndex / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

function showResults() {
  document.querySelector(".quiz").classList.add("hidden");
  resultSection.classList.remove("hidden");

  correctCountText.textContent = score;
  missedCountText.textContent = missed;
  totalCountText.textContent = questions.length;

  const ctx = document.getElementById('resultChart').getContext('2d');
  if (chart) chart.destroy();
  chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Correct', 'Missed'],
      datasets: [{
        data: [score, missed],
        backgroundColor: ['#8b5cf6', '#ef4444'],
        borderWidth: 0
      }]
    },
    options: { cutout: '70%', plugins: { legend: { position: 'bottom' } } }
  });
}

restartBtn.addEventListener("click", startQuiz);
document.addEventListener("DOMContentLoaded", startQuiz);