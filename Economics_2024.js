const questions = [
  {
    question: "There is scarcity when",
    img: "",
    answers: [
      { text: "the means exceed society's wants.", img: "", correct: false },
      { text: "demand for resources is greater than its supply.", img: "", correct: true },
      { text: "productive resources are in excess.", img: "", correct: false },
      { text: "supply of resources is greater than its demand.", img: "", correct: false }
    ]
  },
  {
    question: "Points within a Production Possibilities Curve (PPC) indicate",
    img: "",
    answers: [
      { text: "optimum production levels.", img: "", correct: false },
      { text: "attainable but inefficient production levels.", img: "", correct: true },
      { text: "unattainable production levels.", img: "", correct: false },
      { text: "attainable and efficient production levels.", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following is not a feature of labour?",
    img: "",
    answers: [
      { text: "It is an active factor", img: "", correct: false },
      { text: "It is highly mobile", img: "", correct: false },
      { text: "Its reward is wages or salaries", img: "", correct: false },
      { text: "Its efficiency depends on its size", img: "", correct: true }
    ]
  },
  {
    question: "The pursuit of private profits is a feature of",
    img: "",
    answers: [
      { text: "command economies.", img: "", correct: false },
      { text: "Socialist economies.", img: "", correct: false },
      { text: "capitalist economies.", img: "", correct: true },
      { text: "statutory corporations.", img: "", correct: false }
    ]
  },
  {
    question: "A major feature of the socialist economic system is",
    img: "",
    answers: [
      { text: "setting of production targets by public authorities.", img: "", correct: true },
      { text: "freedom of choice for consumers.", img: "", correct: false },
      { text: "determination of price by market forces.", img: "", correct: false },
      { text: "private ownership of productive inputs.", img: "", correct: false }
    ]
  },
  {
    question: "If the budget on education is $50 m out of an annual national budget of $300 m, the sector of a pie chart representing education is",
    img: "",
    answers: [
      { text: "16.6°", img: "", correct: false },
      { text: "60°", img: "", correct: true },
      { text: "150°", img: "", correct: false },
      { text: "300°", img: "", correct: false }
    ]
  },
  {
    question: "Price elasticity of demand is the responsiveness of quantity demanded to a change in",
    img: "",
    answers: [
      { text: "demand for the product.", img: "", correct: false },
      { text: "price of another product.", img: "", correct: false },
      { text: "income of the buyer.", img: "", correct: false },
      { text: "price of the product.", img: "", correct: true }
    ]
  },
  {
    question: "When total revenue increases as price falls, the coefficient of price elasticity of demand is",
    img: "",
    answers: [
      { text: "greater than one.", img: "", correct: true },
      { text: "one", img: "", correct: false },
      { text: "less than one", img: "", correct: false },
      { text: "zero", img: "", correct: false }
    ]
  },
  {
    question: "If the quantity demanded of rice decreased from 150 bags to 100 bags, the percentage change in quantity demanded is",
    img: "",
    answers: [
      { text: "30.0 %", img: "", correct: false },
      { text: "33.3 %", img: "", correct: true },
      { text: "50.0 %", img: "", correct: false },
      { text: "66.7 %", img: "", correct: false }
    ]
  },
  {
    question: "The law of demand will not hold when",
    img: "",
    answers: [
      { text: "normal goods are involved.", img: "", correct: false },
      { text: "size of the population changes.", img: "", correct: false },
      { text: "rare commodities are involved.", img: "", correct: true },
      { text: "incomes of consumers increase.", img: "", correct: false }
    ]
  },
  {
    question: "<b>The diagram below shows the demand for milk. Use it to answer questions 11 and 12.</b><br><br>The movement from point x to z might have been caused by",
    img: "economics_year_2024_question_11-12_image.png",
    answers: [
      { text: "a change in taste in favour of milk.", img: "", correct: false },
      { text: "a decrease in price of milk.", img: "", correct: false },
      { text: "an increase in income of consumers.", img: "", correct: true },
      { text: "a favourable weather condition.", img: "", correct: false }
    ]
  },
  {
    question: "If demand for postal services declines as a result of increased use of e-mails, then the two services are in",
    img: "economics_year_2024_question_11-12_image.png",
    answers: [
      { text: "composite demand.", img: "", correct: false },
      { text: "derived demand.", img: "", correct: false },
      { text: "competitive demand.", img: "", correct: true },
      { text: "complementary demand.", img: "", correct: false }
    ]
  },
  {
    question: "Other things being equal, an increase in the demand for land in the short-run will cause an increase in the",
    img: "",
    answers: [
      { text: "price only.", img: "", correct: true },
      { text: "price and supply.", img: "", correct: false },
      { text: "quantity supplied only.", img: "", correct: false },
      { text: "supply only.", img: "", correct: false }
    ]
  },
  {
    question: "If the coefficient of price elasticity of supply of a commodity is 0.8, then supply is",
    img: "",
    answers: [
      { text: "perfectly elastic.", img: "", correct: false },
      { text: "fairly inelastic.", img: "", correct: true },
      { text: "perfectly inelastic.", img: "", correct: false },
      { text: "fairly elastic.", img: "", correct: false }
    ]
  },
  {
    question: "The negative slope of the demand curve is best explained by",
    img: "",
    answers: [
      { text: "consumer's choice.", img: "", correct: false },
      { text: "increasing returns to scale.", img: "", correct: false },
      { text: "diminishing returns to scale.", img: "", correct: false },
      { text: "diminishing marginal utility.", img: "", correct: true }
    ]
  },
  {
    question: "Minimum price legislation is used to protect the interests of",
    img: "",
    answers: [
      { text: "Small-scale producers.", img: "", correct: true },
      { text: "foreign companies.", img: "", correct: false },
      { text: "government.", img: "", correct: false },
      { text: "consumers.", img: "", correct: false }
    ]
  },
  {
    question: "The table below shows the supply and demand schedule for apples. Use it to answer question 17.<br><br><table border='1' style='width:100%; border-collapse:collapse; text-align:center;'><tr><th>Price ($)</th><th>Qty Demanded</th><th>Qty Supplied</th></tr><tr><td>10</td><td>50</td><td>25</td></tr><tr><td>20</td><td>35</td><td>35</td></tr><tr><td>30</td><td>20</td><td>45</td></tr><tr><td>40</td><td>5</td><td>55</td></tr></table><br>At what price is excess supply equal to 25?",
    img: "",
    answers: [
      { text: "$10", img: "", correct: false },
      { text: "$20", img: "", correct: false },
      { text: "$30", img: "", correct: true },
      { text: "$40", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following best explains diseconomies of scale? Increase in output causes the",
    img: "",
    answers: [
      { text: "average cost to rise.", img: "", correct: true },
      { text: "marginal revenue to fall.", img: "", correct: false },
      { text: "marginal cost to fall.", img: "", correct: false },
      { text: "firm to be destabilized.", img: "", correct: false }
    ]
  },
  {
    question: "In the short-run, a firm can increase output by",
    img: "",
    answers: [
      { text: "increasing the size of its machines.", img: "", correct: false },
      { text: "purchasing more equipment.", img: "", correct: false },
      { text: "changing its organizational structure.", img: "", correct: false },
      { text: "increasing the quantity of raw materials.", img: "", correct: true }
    ]
  },
  {
    question: "The fixed cost of producing 100 units of a good is $600. If the variable cost is $400, the average total cost of one unit of the good is",
    img: "",
    answers: [
      { text: "$4", img: "", correct: false },
      { text: "$6", img: "", correct: false },
      { text: "$8", img: "", correct: false },
      { text: "$10", img: "", correct: true }
    ]
  },
  {
    question: "Firms in perfect competition break even in the long-run because",
    img: "",
    answers: [
      { text: "new firms cannot enter the market due to copyright laws.", img: "", correct: false },
      { text: "more firms can enter the industry due to attractive profits.", img: "", correct: true },
      { text: "marginal revenue is greater than marginal cost at all levels.", img: "", correct: false },
      { text: "profits are not enough to repay traders' loans.", img: "", correct: false }
    ]
  },
  {
    question: "The government policy that encourages public corporations to operate profitably is",
    img: "",
    answers: [
      { text: "liberalization", img: "", correct: false },
      { text: "nationalization", img: "", correct: false },
      { text: "commercialization", img: "", correct: true },
      { text: "indigenization", img: "", correct: false }
    ]
  },
  {
    question: "Separation of ownership from control is more pronounced in a",
    img: "",
    answers: [
      { text: "partnership", img: "", correct: false },
      { text: "joint-stock company", img: "", correct: true },
      { text: "sole proprietorship", img: "", correct: false },
      { text: "consumer co-operative society", img: "", correct: false }
    ]
  },
  {
    question: "Warehousing of goods in the process of distribution is the function of",
    img: "",
    answers: [
      { text: "supermarkets", img: "", correct: false },
      { text: "departmental stores", img: "", correct: false },
      { text: "retailers", img: "", correct: false },
      { text: "wholesalers", img: "", correct: true }
    ]
  },
  {
    question: "The supply of labour to an occupation will tend to rise when",
    img: "",
    answers: [
      { text: "there are less monetary benefits.", img: "", correct: false },
      { text: "holiday entitlement is cut.", img: "", correct: false },
      { text: "welfare packages improve.", img: "", correct: true },
      { text: "unemployment benefit rises.", img: "", correct: false }
    ]
  },
  {
    question: "Malthus predictions did not come to pass mainly because",
    img: "",
    answers: [
      { text: "food supply and population grew at the same rate.", img: "", correct: false },
      { text: "the use of machines in agriculture was discouraged.", img: "", correct: false },
      { text: "a lot of people died during epidemics.", img: "", correct: false },
      { text: "many people emigrated to the new lands.", img: "", correct: true }
    ]
  },
  {
    question: "In determining the growth of a country's population, infant mortality is a component of",
    img: "",
    answers: [
      { text: "immigration rate.", img: "", correct: false },
      { text: "fertility rate.", img: "", correct: false },
      { text: "net migration.", img: "", correct: false },
      { text: "death rate.", img: "", correct: true }
    ]
  },
  {
    question: "The low productivity per worker in agriculture experienced in West African countries is due to",
    img: "",
    answers: [
      { text: "laziness on the part of farmers.", img: "", correct: false },
      { text: "the use of simple traditional implements.", img: "", correct: true },
      { text: "the presence of many extension workers.", img: "", correct: false },
      { text: "the law of increasing returns to scale.", img: "", correct: false }
    ]
  },
  {
    question: "What will be the likely effect if agriculture is fully mechanized in West Africa?",
    img: "",
    answers: [
      { text: "More jobs will be available for farm labourers.", img: "", correct: false },
      { text: "Labour intensive method of farming will still be dominant.", img: "", correct: false },
      { text: "Less labour will be required on the farm.", img: "", correct: true },
      { text: "Governments will no longer be involved in agriculture.", img: "", correct: false }
    ]
  },
  {
    question: "Locating firms in urban areas",
    img: "",
    answers: [
      { text: "reduce rural-urban migration.", img: "", correct: false },
      { text: "ensure balanced development of rural areas.", img: "", correct: false },
      { text: "make a firm enjoy the benefits of the existence of other firms.", img: "", correct: true },
      { text: "increase urban-rural migration.", img: "", correct: false }
    ]
  },
  {
    question: "An advantage a small firm has over a large firm is that the former can better",
    img: "",
    answers: [
      { text: "enjoy financial economies of scale.", img: "", correct: false },
      { text: "satisfy individual tastes.", img: "", correct: true },
      { text: "enjoy internal economies of scale.", img: "", correct: false },
      { text: "attract huge discounts on inputs.", img: "", correct: false }
    ]
  },
  {
    question: "National income estimates will be understated as a result of the activities of",
    img: "",
    answers: [
      { text: "subsistence farmers.", img: "", correct: false },
      { text: "musicians.", img: "", correct: false },
      { text: "laundry women.", img: "", correct: false },
      { text: "housekeepers.", img: "", correct: true }
    ]
  },
  {
    question: "Use the table below to answer questions 33 and 34.<br><br><table border='1' style='width:100%; border-collapse:collapse; text-align:left;'><tr><th style='padding:5px;'>Item</th><th style='padding:5px;'>Value</th></tr><tr><td style='padding:5px;'>Gross National Product</td><td style='padding:5px;'>$400m</td></tr><tr><td style='padding:5px;'>Depreciation</td><td style='padding:5px;'>$100m</td></tr><tr><td style='padding:5px;'>Total Population</td><td style='padding:5px;'>25m</td></tr></table><br>The value of Net National Product is",
    img: "",
    answers: [
      { text: "$100m", img: "", correct: false },
      { text: "$275m", img: "", correct: false },
      { text: "$300m", img: "", correct: true },
      { text: "$500m", img: "", correct: false }
    ]
  },
  {
    question: "Use the table below to answer questions 33 and 34.<br><br><table border='1' style='width:100%; border-collapse:collapse; text-align:left;'><tr><th style='padding:5px;'>Item</th><th style='padding:5px;'>Value</th></tr><tr><td style='padding:5px;'>Gross National Product</td><td style='padding:5px;'>$400m</td></tr><tr><td style='padding:5px;'>Depreciation</td><td style='padding:5px;'>$100m</td></tr><tr><td style='padding:5px;'>Total Population</td><td style='padding:5px;'>25m</td></tr></table><br>	The value of per capita income is",
    img: "",
    answers: [
      { text: "$20", img: "", correct: false },
      { text: "$12", img: "", correct: false },
      { text: "$16", img: "", correct: true },
      { text: "$4", img: "", correct: false }
    ]
  },
  {
    question: "One effect of inflation is that",
    img: "",
    answers: [
      { text: "money's purchasing power will increase.", img: "", correct: false },
      { text: "the real incomes of workers will rise.", img: "", correct: false },
      { text: "both borrowers and lenders benefit from it.", img: "", correct: false },
      { text: "money's purchasing power will fall.", img: "", correct: true }
    ]
  },
  {
    question: "The function of money that enables credit purchases of goods and services is",
    img: "",
    answers: [
      { text: "unit of account.", img: "", correct: false },
      { text: "store of value.", img: "", correct: false },
      { text: "standard for deferred payment.", img: "", correct: true },
      { text: "relative scarcity.", img: "", correct: false }
    ]
  },
  {
    question: "Supply of money is best defined as the",
    img: "",
    answers: [
      { text: "money in circulation plus bank deposits.", img: "", correct: true },
      { text: "money given out as loans to members of the public.", img: "", correct: false },
      { text: "amount of currency printed annually by the government.", img: "", correct: false },
      { text: "amount of money spent on consumer goods.", img: "", correct: false }
    ]
  },
  {
    question: "Capital market operators deal in the",
    img: "",
    answers: [
      { text: "supply of and demand for short-term loans only.", img: "", correct: false },
      { text: "supply of and demand for long-term loans for investment.", img: "", correct: true },
      { text: "sales and purchases of treasury bills.", img: "", correct: false },
      { text: "sales and purchases of capital equipment.", img: "", correct: false }
    ]
  },
  {
    question: "Money supply will increase when the Central Bank",
    img: "",
    answers: [
      { text: "buys securities from the public.", img: "", correct: true },
      { text: "increases the reserve requirements.", img: "", correct: false },
      { text: "increases the bank rate.", img: "", correct: false },
      { text: "sells securities to the public.", img: "", correct: false }
    ]
  },
  {
    question: "Expansionary fiscal policy implies",
    img: "",
    answers: [
      { text: "decreasing bank loans.", img: "", correct: false },
      { text: "raising tax rates.", img: "", correct: false },
      { text: "increasing the bank rate.", img: "", correct: false },
      { text: "decreasing tax rates.", img: "", correct: true }
    ]
  },
  {
    question: "A commodity with perfectly inelastic demand has the burden of tax borne by",
    img: "",
    answers: [
      { text: "both the sellers and the buyers.", img: "", correct: false },
      { text: "the buyers alone.", img: "", correct: true },
      { text: "the government alone.", img: "", correct: false },
      { text: "both the buyers and the government.", img: "", correct: false }
    ]
  },
  {
    question: "An increase in a country's production capacity usually leads to economic",
    img: "",
    answers: [
      { text: "development.", img: "", correct: false },
      { text: "stability.", img: "", correct: false },
      { text: "growth.", img: "", correct: true },
      { text: "efficiency.", img: "", correct: false }
    ]
  },
  {
    question: "One indicator of the low level of capital formation in developing countries is",
    img: "",
    answers: [
      { text: "low per capita income.", img: "", correct: true },
      { text: "high rate of investment.", img: "", correct: false },
      { text: "low importation of consumer goods.", img: "", correct: false },
      { text: "high rate of household savings.", img: "", correct: false }
    ]
  },
  {
    question: "Balance of payments is defined as the",
    img: "",
    answers: [
      { text: "difference between the values of visible imports and visible exports.", img: "", correct: false },
      { text: "record of financial transactions between a country and the rest of the world.", img: "", correct: true },
      { text: "relationship between prices of exports and prices of imports.", img: "", correct: false },
      { text: "difference between a country's expected revenue and proposed expenditure.", img: "", correct: false }
    ]
  },
  {
    question: "Devaluation of currency will help to correct balance of payments deficit if a country's",
    img: "",
    answers: [
      { text: "exports have perfectly inelastic demand.", img: "", correct: false },
      { text: "imports have inelastic demand.", img: "", correct: false },
      { text: "exports have elastic demand.", img: "", correct: true },
      { text: "productivity is low.", img: "", correct: false }
    ]
  },
  {
    question: "Terms of trade is favourable when the",
    img: "",
    answers: [
      { text: "value of visible imports is greater than that of visible exports.", img: "", correct: false },
      { text: "price on imports is greater than that of exports.", img: "", correct: false },
      { text: "payments on imports is greater than receipts from exports.", img: "", correct: false },
      { text: "price of exports is rising faster than that of imports.", img: "", correct: true }
    ]
  },
  {
    question: "Short-term deficits in the current account of the balance of payments can be financed by balancing with the",
    img: "",
    answers: [
      { text: "invisible account.", img: "", correct: false },
      { text: "capital account.", img: "", correct: true },
      { text: "visible account.", img: "", correct: false },
      { text: "national income account.", img: "", correct: false }
    ]
  },
  {
    question: "Harmonized monetary and fiscal policies is a feature of",
    img: "",
    answers: [
      { text: "a free trade area.", img: "", correct: false },
      { text: "an economic union.", img: "", correct: true },
      { text: "a customs union.", img: "", correct: false },
      { text: "a common market.", img: "", correct: false }
    ]
  },
  {
    question: "One major achievement of the Economic Commission for Africa (ECA) is the",
    img: "",
    answers: [
      { text: "setting up of the African Development Bank (AfDB).", img: "", correct: true },
      { text: "provision of long-term loans to non-members.", img: "", correct: false },
      { text: "reduction of balance of payments problems in Africa.", img: "", correct: false },
      { text: "removing the gap between African countries and the rich nations.", img: "", correct: false }
    ]
  },
  {
    question: "Exploitation of solid minerals in developing countries can stabilize their revenue base mainly because it helps in",
    img: "",
    answers: [
      { text: "promoting a mono-economy.", img: "", correct: false },
      { text: "the transfer of technology.", img: "", correct: false },
      { text: "the diversification of the economy.", img: "", correct: true },
      { text: "the provision of energy", img: "", correct: false }
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

  // IMAGE: Fixed variable to match data (.img instead of .image)
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