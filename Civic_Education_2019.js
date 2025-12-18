const questions = [
  {
    question: "Values are best described as",
    img: "",
    answers: [
      { text: "legal codes enacted by the national assembly", img: "", correct: false },
      { text: "accepted moral standards of behaviour", img: "", correct: true },
      { text: "attitudes displayed by political leaders", img: "", correct: false },
      { text: "official gazettes of the government", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following is a negative value in the society?",
    img: "",
    answers: [
      { text: "Honesty", img: "", correct: false },
      { text: "Discipline", img: "", correct: false },
      { text: "Envy", img: "", correct: true },
      { text: "Contentment", img: "", correct: false }
    ]
  },
  {
    question: "The ability to defend one's right without being aggressive is known as",
    img: "",
    answers: [
      { text: "Assertiveness", img: "", correct: true },
      { text: "Selflessness", img: "", correct: false },
      { text: "Gentleness", img: "", correct: false },
      { text: "Indifference", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following skills is needed for data processing?",
    img: "",
    answers: [
      { text: "Computer literacy", img: "", correct: true },
      { text: "Interpersonal skill", img: "", correct: false },
      { text: "Decision making", img: "", correct: false },
      { text: "Negotiation skill", img: "", correct: false }
    ]
  },
  {
    question: "HIV/AIDS is a terminal disease because it",
    img: "",
    answers: [
      { text: "is contracted through sexual intercourse", img: "", correct: false },
      { text: "has no known cure", img: "", correct: true },
      { text: "is found among drug addicts", img: "", correct: false },
      { text: "can be transmitted from mother to child", img: "", correct: false }
    ]
  },
  {
    question: "Stigmatization of people living with HIV/AIDS (PLWHA) is contrary to the",
    img: "",
    answers: [
      { text: "freedom of the press", img: "", correct: false },
      { text: "universal declaration of human rights", img: "", correct: true },
      { text: "principle of federal character", img: "", correct: false },
      { text: "rule of law", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following is not a goal of youth empowerment?",
    img: "",
    answers: [
      { text: "Promotion of self-reliance", img: "", correct: false },
      { text: "Reduction of crime rate", img: "", correct: false },
      { text: "Encouragement of dependency", img: "", correct: true },
      { text: "Provision of employment", img: "", correct: false }
    ]
  },
  {
    question: "A responsible parent is one who",
    img: "",
    answers: [
      { text: "provides all the needs of the child", img: "", correct: true },
      { text: "sends the child to the most expensive school", img: "", correct: false },
      { text: "gives the child freedom to do whatever they like", img: "", correct: false },
      { text: "buys expensive gifts for the child", img: "", correct: false }
    ]
  },
  {
    question: "Citizenship status is acquired through the following except",
    img: "",
    answers: [
      { text: "birth", img: "", correct: false },
      { text: "naturalization", img: "", correct: false },
      { text: "registration", img: "", correct: false },
      { text: "colonization", img: "", correct: true }
    ]
  },
  {
    question: "The constitution of a country is important because it",
    img: "",
    answers: [
      { text: "guarantees the immunity of the president", img: "", correct: false },
      { text: "protects the rights of the citizens", img: "", correct: true },
      { text: "ensures that only the rich rule", img: "", correct: false },
      { text: "allows the military to take over power", img: "", correct: false }
    ]
  },
  {
    question: "The arm of government responsible for interpreting the law is the",
    img: "",
    answers: [
      { text: "Legislature", img: "", correct: false },
      { text: "Executive", img: "", correct: false },
      { text: "Judiciary", img: "", correct: true },
      { text: "Press", img: "", correct: false }
    ]
  },
  {
    question: "A major feature of a democratic government is",
    img: "",
    answers: [
      { text: "absence of rule of law", img: "", correct: false },
      { text: "popular participation", img: "", correct: true },
      { text: "single party system", img: "", correct: false },
      { text: "censorship of the press", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following is not a function of the local government?",
    img: "",
    answers: [
      { text: "Construction of trunk A roads", img: "", correct: true },
      { text: "Registration of births and deaths", img: "", correct: false },
      { text: "Construction of market stalls", img: "", correct: false },
      { text: "Naming of streets", img: "", correct: false }
    ]
  },
  {
    question: "The process of counting people in a country is called",
    img: "",
    answers: [
      { text: "election", img: "", correct: false },
      { text: "registration", img: "", correct: false },
      { text: "census", img: "", correct: true },
      { text: "immigration", img: "", correct: false }
    ]
  },
  {
    question: "<b>Use the image below to answer the question.</b><br>The traffic sign shown indicates:",
    img: "civic_education_year_2019_question_15_image.png",
    answers: [
      { text: "No Entry", img: "", correct: false },
      { text: "Dual Carriageway ahead", img: "", correct: true },
      { text: "Roundabout", img: "", correct: false },
      { text: "T-Junction", img: "", correct: false }
    ]
  },
  {
    question: "To prevent accidents on the road, motorists are advised to",
    img: "",
    answers: [
      { text: "overtake at corners", img: "", correct: false },
      { text: "obey traffic regulations", img: "", correct: true },
      { text: "drive at top speed", img: "", correct: false },
      { text: "drink alcohol before driving", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following is a consequence of drug abuse?",
    img: "",
    answers: [
      { text: "Academic excellence", img: "", correct: false },
      { text: "Mental disorder", img: "", correct: true },
      { text: "Good health", img: "", correct: false },
      { text: "National development", img: "", correct: false }
    ]
  },
  {
    question: "Human trafficking is different from human smuggling because it involves",
    img: "",
    answers: [
      { text: "consent of the victim", img: "", correct: false },
      { text: "exploitation of the victim", img: "", correct: true },
      { text: "crossing international borders", img: "", correct: false },
      { text: "payment of money", img: "", correct: false }
    ]
  },
  {
    question: "One of the ways to combat human trafficking is through",
    img: "",
    answers: [
      { text: "public enlightenment", img: "", correct: true },
      { text: "opening borders", img: "", correct: false },
      { text: "encouraging illegal migration", img: "", correct: false },
      { text: "stigmatizing victims", img: "", correct: false }
    ]
  },
  {
    question: "The agency responsible for the maintenance of law and order in Nigeria is the",
    img: "",
    answers: [
      { text: "Nigerian Army", img: "", correct: false },
      { text: "Nigeria Police Force", img: "", correct: true },
      { text: "Nigeria Customs Service", img: "", correct: false },
      { text: "Nigeria Immigration Service", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following is not a reason for political apathy?",
    img: "",
    answers: [
      { text: "Violence during elections", img: "", correct: false },
      { text: "Bad governance", img: "", correct: false },
      { text: "Fulfilled manifesto", img: "", correct: true },
      { text: "Rigging of elections", img: "", correct: false }
    ]
  },
  {
    question: "One of the duties of a citizen to the state is",
    img: "",
    answers: [
      { text: "participation in smuggling", img: "", correct: false },
      { text: "payment of tax", img: "", correct: true },
      { text: "taking laws into their hands", img: "", correct: false },
      { text: "evasion of rates", img: "", correct: false }
    ]
  },
  {
    question: "The Civil Service is characterized by",
    img: "",
    answers: [
      { text: "partisanship", img: "", correct: false },
      { text: "anonymity", img: "", correct: true },
      { text: "short tenure", img: "", correct: false },
      { text: "profit making", img: "", correct: false }
    ]
  },
  {
    question: "A public servant is expected to be",
    img: "",
    answers: [
      { text: "politically active", img: "", correct: false },
      { text: "corrupt", img: "", correct: false },
      { text: "neutral", img: "", correct: true },
      { text: "biased", img: "", correct: false }
    ]
  },
  {
    question: "Civil society organizations help to",
    img: "",
    answers: [
      { text: "overthrow the government", img: "", correct: false },
      { text: "promote good governance", img: "", correct: true },
      { text: "fund political parties", img: "", correct: false },
      { text: "incite the public", img: "", correct: false }
    ]
  },
  {
    question: "The Universal Declaration of Human Rights (UDHR) was adopted by the",
    img: "",
    answers: [
      { text: "African Union (AU)", img: "", correct: false },
      { text: "United Nations Organization (UNO)", img: "", correct: true },
      { text: "Economic Community of West African States (ECOWAS)", img: "", correct: false },
      { text: "European Union (EU)", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following is a limitation to human rights?",
    img: "",
    answers: [
      { text: "State of emergency", img: "", correct: true },
      { text: "Freedom of press", img: "", correct: false },
      { text: "Right to life", img: "", correct: false },
      { text: "Right to vote", img: "", correct: false }
    ]
  },
  {
    question: "Cultism in Nigerian universities can be curbed through",
    img: "",
    answers: [
      { text: "regular strikes", img: "", correct: false },
      { text: "effective counseling", img: "", correct: true },
      { text: "provision of arms", img: "", correct: false },
      { text: "encouraging secret societies", img: "", correct: false }
    ]
  },
  {
    question: "The primary aim of NAFDAC is to",
    img: "",
    answers: [
      { text: "arrest drug traffickers", img: "", correct: false },
      { text: "safeguard public health", img: "", correct: true },
      { text: "collect taxes on drugs", img: "", correct: false },
      { text: "manufacture drugs", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following is not an effect of cultism?",
    img: "",
    answers: [
      { text: "Peace and stability", img: "", correct: true },
      { text: "Loss of lives", img: "", correct: false },
      { text: "Destruction of property", img: "", correct: false },
      { text: "Disruption of academic activities", img: "", correct: false }
    ]
  },
  {
    question: "Nationalism in Nigeria was pioneered by",
    img: "",
    answers: [
      { text: "traditional rulers", img: "", correct: false },
      { text: "educated elites", img: "", correct: true },
      { text: "military officers", img: "", correct: false },
      { text: "farmers", img: "", correct: false }
    ]
  },
  {
    question: "A major problem of the Nigerian Civil Service is",
    img: "",
    answers: [
      { text: "efficiency", img: "", correct: false },
      { text: "red-tapism", img: "", correct: true },
      { text: "accountability", img: "", correct: false },
      { text: "punctuality", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following promotes national unity?",
    img: "",
    answers: [
      { text: "Federal Character Principle", img: "", correct: true },
      { text: "Statism", img: "", correct: false },
      { text: "Nepotism", img: "", correct: false },
      { text: "Tribalism", img: "", correct: false }
    ]
  },
  {
    question: "The highest court in Nigeria is the",
    img: "",
    answers: [
      { text: "High Court", img: "", correct: false },
      { text: "Court of Appeal", img: "", correct: false },
      { text: "Supreme Court", img: "", correct: true },
      { text: "Sharia Court", img: "", correct: false }
    ]
  },
  {
    question: "The Rule of Law implies that",
    img: "",
    answers: [
      { text: "leaders are above the law", img: "", correct: false },
      { text: "lawyers are supreme", img: "", correct: false },
      { text: "all citizens are equal before the law", img: "", correct: true },
      { text: "judges make the law", img: "", correct: false }
    ]
  },
  {
    question: "Political socialization begins in the",
    img: "",
    answers: [
      { text: "school", img: "", correct: false },
      { text: "family", img: "", correct: true },
      { text: "church/mosque", img: "", correct: false },
      { text: "political party", img: "", correct: false }
    ]
  },
  {
    question: "Democracy is best defined as the government of the people, by the people and for the",
    img: "",
    answers: [
      { text: "leaders", img: "", correct: false },
      { text: "people", img: "", correct: true },
      { text: "party", img: "", correct: false },
      { text: "elites", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following is a symbol of authority in the legislature?",
    img: "",
    answers: [
      { text: "The Gavel", img: "", correct: false },
      { text: "The Mace", img: "", correct: true },
      { text: "The Wig", img: "", correct: false },
      { text: "The Coat of Arms", img: "", correct: false }
    ]
  },
  {
    question: "One of the reasons for the establishment of the EFCC is to",
    img: "",
    answers: [
      { text: "monitor elections", img: "", correct: false },
      { text: "combat financial crimes", img: "", correct: true },
      { text: "regulate food and drugs", img: "", correct: false },
      { text: "ensure road safety", img: "", correct: false }
    ]
  },
  {
    question: "A citizen who votes in an election is performing a",
    img: "",
    answers: [
      { text: "civic duty", img: "", correct: false },
      { text: "political duty", img: "", correct: true },
      { text: "social duty", img: "", correct: false },
      { text: "moral duty", img: "", correct: false }
    ]
  },
  {
    question: "The practice of having more than one wife is called",
    img: "",
    answers: [
      { text: "Monogamy", img: "", correct: false },
      { text: "Polygamy", img: "", correct: true },
      { text: "Polyandry", img: "", correct: false },
      { text: "Celibacy", img: "", correct: false }
    ]
  },
  {
    question: "<b>Use the cartoon below to answer the question.</b><br>The cartoon depicts a scenario of:",
    img: "civic_education_year_2019_question_42_image.png",
    answers: [
      { text: "Free and fair election", img: "", correct: false },
      { text: "Vote buying / Electoral malpractice", img: "", correct: true },
      { text: "Political rally", img: "", correct: false },
      { text: "Voter registration", img: "", correct: false }
    ]
  },
  {
    question: "Based on the cartoon above, the electorate is influenced by",
    img: "civic_education_year_2019_question_42_image.png",
    answers: [
      { text: "party manifesto", img: "", correct: false },
      { text: "material inducement", img: "", correct: true },
      { text: "candidate's capability", img: "", correct: false },
      { text: "political ideology", img: "", correct: false }
    ]
  },
  {
    question: "Inter-communal relationship is best promoted through",
    img: "",
    answers: [
      { text: "inter-marriage", img: "", correct: true },
      { text: "religious intolerance", img: "", correct: false },
      { text: "land disputes", img: "", correct: false },
      { text: "political rivalry", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following is an attribute of a disciplined person?",
    img: "",
    answers: [
      { text: "Procrastination", img: "", correct: false },
      { text: "Self-control", img: "", correct: true },
      { text: "Impatience", img: "", correct: false },
      { text: "Aggression", img: "", correct: false }
    ]
  },
  {
    question: "The fundamental human rights are enshrined in which chapter of the 1999 Nigerian Constitution?",
    img: "",
    answers: [
      { text: "Chapter II", img: "", correct: false },
      { text: "Chapter IV", img: "", correct: true },
      { text: "Chapter VI", img: "", correct: false },
      { text: "Chapter VIII", img: "", correct: false }
    ]
  },
  {
    question: "A situation where citizens are not allowed to vote or be voted for is called",
    img: "",
    answers: [
      { text: "Disenfranchisement", img: "", correct: true },
      { text: "Enfranchisement", img: "", correct: false },
      { text: "Democracy", img: "", correct: false },
      { text: "Participation", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following is a means of political participation?",
    img: "",
    answers: [
      { text: "Thuggery", img: "", correct: false },
      { text: "Voting", img: "", correct: true },
      { text: "Ballot box snatching", img: "", correct: false },
      { text: "Assassination", img: "", correct: false }
    ]
  },
  {
    question: "The legislative body at the local government level is the",
    img: "",
    answers: [
      { text: "House of Assembly", img: "", correct: false },
      { text: "Council of Chiefs", img: "", correct: false },
      { text: "Legislative Council", img: "", correct: true },
      { text: "Senate", img: "", correct: false }
    ]
  },
  {
    question: "The Nigerian coat of arms features two horses which symbolize",
    img: "",
    answers: [
      { text: "Strength and Dignity", img: "", correct: true },
      { text: "Fertile Soil", img: "", correct: false },
      { text: "Peace and Unity", img: "", correct: false },
      { text: "Rich Culture", img: "", correct: false }
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