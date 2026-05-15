const questions = [
  {
    question: "Which of the following items is an example of industrial goods?",
    img: "",
    answers: [
      { text: "Cassava tuber", img: "", correct: true },
      { text: "Toothpaste", img: "", correct: false },
      { text: "Bread", img: "", correct: false },
      { text: "Cake", img: "", correct: false }
    ]
  },
  {
    question: "The first institution to introduce a degree programme in marketing in Nigeria is University of",
    img: "",
    answers: [
      { text: "Ibadan.", img: "", correct: false },
      { text: "Nigeria, Nsukka.", img: "", correct: true },
      { text: "Lagos.", img: "", correct: false },
      { text: "Jos.", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following marketing terms is applied to a buyer that obtains a desired product by offering something in return?",
    img: "",
    answers: [
      { text: "Needs", img: "", correct: false },
      { text: "Wants", img: "", correct: false },
      { text: "Demand", img: "", correct: false },
      { text: "Exchange", img: "", correct: true }
    ]
  },
  {
    question: "A company's orientation that concentrates on mass distribution and low cost of its product is a",
    img: "",
    answers: [
      { text: "product concept.", img: "", correct: false },
      { text: "production concept.", img: "", correct: true },
      { text: "marketing concept.", img: "", correct: false },
      { text: "selling concept.", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following business orientations stresses that promotional efforts are necessary before customers buy a product?",
    img: "",
    answers: [
      { text: "Production concept", img: "", correct: false },
      { text: "Product concept", img: "", correct: false },
      { text: "Selling concept", img: "", correct: true },
      { text: "Marketing concept", img: "", correct: false }
    ]
  },
  {
    question: "A set of controllable variables that a firm uses to pursue its objectives is",
    img: "",
    answers: [
      { text: "product mix.", img: "", correct: false },
      { text: "product concept.", img: "", correct: false },
      { text: "selling concept.", img: "", correct: false },
      { text: "marketing mix.", img: "", correct: true }
    ]
  },
  {
    question: "A feature of product as a marketing mix element is",
    img: "",
    answers: [
      { text: "credit terms.", img: "", correct: false },
      { text: "warranty", img: "", correct: true },
      { text: "cash discount.", img: "", correct: false },
      { text: "allowances.", img: "", correct: false }
    ]
  },
  {
    question: "Which marketing mix element is applicable when a firm provides parking space for its customers?",
    img: "",
    answers: [
      { text: "Process", img: "", correct: true },
      { text: "People", img: "", correct: false },
      { text: "Price", img: "", correct: false },
      { text: "Promotion", img: "", correct: false }
    ]
  },
  {
    question: "In marketing, the term product refers to",
    img: "",
    answers: [
      { text: "any item that can be seen or touched.", img: "", correct: false },
      { text: "anything that can be offered for consumption.", img: "", correct: true },
      { text: "goods and ideas.", img: "", correct: false },
      { text: "packages' design and warranty.", img: "", correct: false }
    ]
  },
  {
    question: "Milk, sugar and bread bought by Amaka for her children's breakfast are examples of",
    img: "",
    answers: [
      { text: "shopping goods.", img: "", correct: false },
      { text: "convenience goods.", img: "", correct: true },
      { text: "specialty goods.", img: "", correct: false },
      { text: "unsought goods.", img: "", correct: false }
    ]
  },
  {
    question: "Companies that purchase goods for further processing is an example of",
    img: "",
    answers: [
      { text: "a consumer market.", img: "", correct: false },
      { text: "an industrial market.", img: "", correct: true },
      { text: "a reseller market.", img: "", correct: false },
      { text: "a government market.", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following statements explains an organizational market?",
    img: "",
    answers: [
      { text: "Buyers are widespread", img: "", correct: false },
      { text: "Buyers are price conscious", img: "", correct: false },
      { text: "Purchasing is on first-come, first-served", img: "", correct: false },
      { text: "Purchasing is done by trained personnel", img: "", correct: true }
    ]
  },
  {
    question: "At what stage in the buying process does a consumer consider product attributes of available brands?",
    img: "",
    answers: [
      { text: "Alternative search", img: "", correct: false },
      { text: "Alternative evaluation", img: "", correct: true },
      { text: "Purchase decision", img: "", correct: false },
      { text: "Post-purchase decision", img: "", correct: false }
    ]
  },
  {
    question: "The last stage in the consumer buying decision process is",
    img: "",
    answers: [
      { text: "information search.", img: "", correct: false },
      { text: "evaluation of alternatives.", img: "", correct: false },
      { text: "problem recognition.", img: "", correct: false },
      { text: "post-purchase decision.", img: "", correct: true }
    ]
  },
  {
    question: "The process of collecting and analyzing relevant information to solve a marketing problem is marketing",
    img: "",
    answers: [
      { text: "intelligence.", img: "", correct: false },
      { text: "research.", img: "", correct: true },
      { text: "audit.", img: "", correct: false },
      { text: "planning.", img: "", correct: false }
    ]
  },
  {
    question: "An information required for marketing planning is",
    img: "",
    answers: [
      { text: "product quality control mechanism.", img: "", correct: false },
      { text: "company's recruitment policy.", img: "", correct: false },
      { text: "previous year's sales volume.", img: "", correct: true },
      { text: "company's financial policy.", img: "", correct: false }
    ]
  },
  {
    question: "The purpose of feedback from customers who use a company's product is to",
    img: "",
    answers: [
      { text: "train marketing staff.", img: "", correct: false },
      { text: "improve the quality of products.", img: "", correct: true },
      { text: "determine distribution channel to adopt.", img: "", correct: false },
      { text: "determine the promotional tool to adopt.", img: "", correct: false }
    ]
  },
  {
    question: "A retailer's cost and selling price for a bag of rice are N 10,000 and N 14,000 respectively. What is the company's mark-up on cost?",
    img: "",
    answers: [
      { text: "28.6%", img: "", correct: false },
      { text: "35%", img: "", correct: false },
      { text: "40%", img: "", correct: true },
      { text: "71.4%", img: "", correct: false }
    ]
  },
  {
    question: "A retailer's cost and selling price for a bag of rice are N 10,000 and N 14,000 respectively. What is the retailer's profit per bag of rice if he incurs an additional cost of N500 on each bag of rice?",
    img: "",
    answers: [
      { text: "N 3,000", img: "", correct: false },
      { text: "N 3,500", img: "", correct: true },
      { text: "N 4,000", img: "", correct: false },
      { text: "N 4,500", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following activities is not a function of advertising? It",
    img: "",
    answers: [
      { text: "informs the audience about a product.", img: "", correct: false },
      { text: "reminds the audience about a product.", img: "", correct: false },
      { text: "is used in place of personal selling.", img: "", correct: true },
      { text: "encourages middlemen to stock a product desired.", img: "", correct: false }
    ]
  },
  {
    question: "An example of a non-personal means of reaching the target audience by an identified sponsor is",
    img: "",
    answers: [
      { text: "personal selling.", img: "", correct: false },
      { text: "coupon.", img: "", correct: false },
      { text: "sales promotion.", img: "", correct: false },
      { text: "billboard.", img: "", correct: true }
    ]
  },
  {
    question: "A reason for granting quantity discount is to",
    img: "",
    answers: [
      { text: "encourage prompt payment.", img: "", correct: false },
      { text: "encourage bulk purchases.", img: "", correct: true },
      { text: "make sales outlet popular.", img: "", correct: false },
      { text: "encourage competitions.", img: "", correct: false }
    ]
  },
  {
    question: "Coupon is used as a sales promotional tool targeted at",
    img: "",
    answers: [
      { text: "wholesalers.", img: "", correct: false },
      { text: "consumers.", img: "", correct: true },
      { text: "retailers.", img: "", correct: false },
      { text: "salesmen.", img: "", correct: false }
    ]
  },
  {
    question: "The creation of awareness for products at the point of sale is",
    img: "",
    answers: [
      { text: "sales promotion.", img: "", correct: false },
      { text: "sampling.", img: "", correct: false },
      { text: "personal selling.", img: "", correct: false },
      { text: "merchandising.", img: "", correct: true }
    ]
  },
  {
    question: "An example of merchandising activities is",
    img: "",
    answers: [
      { text: "canvasing for customers by salesmen.", img: "", correct: false },
      { text: "displaying products at the retail store.", img: "", correct: true },
      { text: "distribution of goods to customers.", img: "", correct: false },
      { text: "sales call by salesmen.", img: "", correct: false }
    ]
  },
  {
    question: "The channel member who does not take title to goods is the",
    img: "",
    answers: [
      { text: "retailer.", img: "", correct: false },
      { text: "wholesaler.", img: "", correct: false },
      { text: "agent.", img: "", correct: true },
      { text: "distributor.", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following distribution channels would be used to sell tractors and cranes?",
    img: "",
    answers: [
      { text: "Producer → Agent → Consumer", img: "", correct: true },
      { text: "Producer → Agent → Retailer → Consumer", img: "", correct: false },
      { text: "Producer → Agent → Wholesaler → Retailer → Consumer", img: "", correct: false },
      { text: "Producer → Agent → Wholesaler → Consumer", img: "", correct: false }
    ]
  },
  {
    question: "The document that shows the details of goods being transported is the",
    img: "",
    answers: [
      { text: "Bill of Exchange.", img: "", correct: false },
      { text: "invoice.", img: "", correct: false },
      { text: "waybill.", img: "", correct: true },
      { text: "Certificate of Origin.", img: "", correct: false }
    ]
  },
  {
    question: "One of the reasons transportation is important is that it",
    img: "",
    answers: [
      { text: "ensures customers' satisfaction.", img: "", correct: false },
      { text: "ensures profit maximization.", img: "", correct: false },
      { text: "facilitates the distribution of goods.", img: "", correct: true },
      { text: "ensures stabilization of product price.", img: "", correct: false }
    ]
  },
  {
    question: "An example of a government warehouse is",
    img: "",
    answers: [
      { text: "co-operative warehouse.", img: "", correct: false },
      { text: "bonded warehouse.", img: "", correct: true },
      { text: "manufacturers's warehouse.", img: "", correct: false },
      { text: "private warehouse.", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following goods are kept in bonded warehouse?",
    img: "",
    answers: [
      { text: "Semi-finished goods", img: "", correct: false },
      { text: "Dutiable goods", img: "", correct: true },
      { text: "Consumer goods", img: "", correct: false },
      { text: "Finished goods", img: "", correct: false }
    ]
  },
  {
    question: "A body that comprises sellers of onions in an area is an example of a",
    img: "",
    answers: [
      { text: "labour union.", img: "", correct: false },
      { text: "market union.", img: "", correct: true },
      { text: "employers' association.", img: "", correct: false },
      { text: "producers' association.", img: "", correct: false }
    ]
  },
  {
    question: "An example of market facilitator is",
    img: "",
    answers: [
      { text: "transportation companies.", img: "", correct: true },
      { text: "manufacturing companies.", img: "", correct: false },
      { text: "manufacturer's association.", img: "", correct: false },
      { text: "textile sellers association.", img: "", correct: false }
    ]
  },
  {
    question: "A method of engaging in international marketing with the lowest business risk is",
    img: "",
    answers: [
      { text: "agency.", img: "", correct: false },
      { text: "exporting", img: "", correct: true },
      { text: "joint venture.", img: "", correct: false },
      { text: "direct investment.", img: "", correct: false }
    ]
  },
  {
    question: "A form of engaging in international marketing that involves the pooling of resources between local and foreign firms is",
    img: "",
    answers: [
      { text: "joint venture.", img: "", correct: true },
      { text: "direct investment.", img: "", correct: false },
      { text: "franchising.", img: "", correct: false },
      { text: "licencing.", img: "", correct: false }
    ]
  },
  {
    question: "One of the benefits of e-marketing is that it",
    img: "",
    answers: [
      { text: "distributes company's goods.", img: "", correct: false },
      { text: "enhances product quality.", img: "", correct: false },
      { text: "broadens a company's customer base.", img: "", correct: true },
      { text: "prevents pilferage of company's goods.", img: "", correct: false }
    ]
  },
  {
    question: "One of the uses of e-marketing platform is to",
    img: "",
    answers: [
      { text: "deliver goods ordered.", img: "", correct: false },
      { text: "provide after sales service.", img: "", correct: false },
      { text: "provide packaging for products.", img: "", correct: false },
      { text: "promote goods and services.", img: "", correct: true }
    ]
  },
  {
    question: "A skill a sales personnel should possess to enable him handle aggressive customer in a market outlet is",
    img: "",
    answers: [
      { text: "calculative skill.", img: "", correct: false },
      { text: "managerial skill.", img: "", correct: false },
      { text: "bargaining skill.", img: "", correct: true },
      { text: "technical skill.", img: "", correct: false }
    ]
  },
  {
    question: "A factor to be considered in extending credit facilities to a customer is the",
    img: "",
    answers: [
      { text: "nature of products to be sold.", img: "", correct: false },
      { text: "cost of producing the product.", img: "", correct: false },
      { text: "individual's total purchases in a given period.", img: "", correct: true },
      { text: "number of channel members involved in distribution.", img: "", correct: false }
    ]
  },
  {
    question: "An entrepreneur who intends to establish a frozen fish shop will need a",
    img: "",
    answers: [
      { text: "reliable power supply.", img: "", correct: true },
      { text: "good communication network.", img: "", correct: false },
      { text: "good network of road.", img: "", correct: false },
      { text: "reliable skilled labour.", img: "", correct: false }
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

  // TEXT (Now supports HTML tables)
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  // IMAGE Logic (Checks if img exists AND is not empty)
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

    // TEXT + IMAGE inside option
    // Checks if answer.img exists AND is not empty
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

  // Generate Review Section (Missed Questions)
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

// Restart quiz
restartBtn.addEventListener("click", startQuiz);

// Initialize app
startQuiz();