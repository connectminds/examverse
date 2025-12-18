const questions = [
  {
    question: "Nationalism in Nigeria eventually led to",
    img: "",
    answers: [
      { text: "national renaissance", img: "", correct: false },
      { text: "creation of states", img: "", correct: false },
      { text: "decolonization", img: "", correct: true },
      { text: "the end of military rule", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following conditions gives rise to the denial of right to life?",
    img: "",
    answers: [
      { text: "Homicide", img: "", correct: true },
      { text: "Forgery", img: "", correct: false },
      { text: "Protest", img: "", correct: false },
      { text: "Burglary", img: "", correct: false }
    ]
  },
  {
    question: "Activities that act to clog the wheel of societal progress can be described as",
    img: "",
    answers: [
      { text: "social laws", img: "", correct: false },
      { text: "social changes", img: "", correct: false },
      { text: "social movements", img: "", correct: false },
      { text: "social vices", img: "", correct: true }
    ]
  },
  {
    question: "The following were the founding fathers of the Nigerian nation except",
    img: "",
    answers: [
      { text: "J. S. Tarka, S. L. Akintola, Aminu Kano and Ernest Ikoli", img: "", correct: false },
      { text: "Nnamdi Azikiwe, K. O. Mbadiwe, Arthur Richards and Aminu Kano", img: "", correct: true },
      { text: "Tafawa Balewa, Obafemi Awolowo, Nnamdi Azikiwe and Ahmadu Bello", img: "", correct: false },
      { text: "Adesoji Aderemi, Shehu Shagari, Obafemi Awolowo and Nnamdi Azikiwe", img: "", correct: false }
    ]
  },
  {
    question: "Responsible parenthood can complement the activities of government in several ways except by raising",
    img: "",
    answers: [
      { text: "responsible citizens", img: "", correct: false },
      { text: "citizens who oppose the government", img: "", correct: true },
      { text: "responsible future leaders", img: "", correct: false },
      { text: "entrepreneurs in the society", img: "", correct: false }
    ]
  },
  {
    question: "A major way of checking the prevalence of cultism in schools is by",
    img: "",
    answers: [
      { text: "pay-off cultists", img: "", correct: false },
      { text: "moral education", img: "", correct: true },
      { text: "hiring security guards", img: "", correct: false },
      { text: "closing down schools", img: "", correct: false }
    ]
  },
  {
    question: "The primary duty of the government to its citizens is the",
    img: "",
    answers: [
      { text: "provision of free education", img: "", correct: false },
      { text: "maintenance of law and order", img: "", correct: false },
      { text: "protection of lives and property", img: "", correct: true },
      { text: "provision of employment", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following is not a feature of a democratic state?",
    img: "",
    answers: [
      { text: "Rule of law", img: "", correct: false },
      { text: "Press freedom", img: "", correct: false },
      { text: "One party system", img: "", correct: true },
      { text: "Free and fair election", img: "", correct: false }
    ]
  },
  {
    question: "One of the reasons for human trafficking is",
    img: "",
    answers: [
      { text: "greed and poverty", img: "", correct: true },
      { text: "love for adventure", img: "", correct: false },
      { text: "desire for education", img: "", correct: false },
      { text: "need for international exposure", img: "", correct: false }
    ]
  },
  {
    question: "HIV/AIDS can be contracted through",
    img: "",
    answers: [
      { text: "sharing of toilets", img: "", correct: false },
      { text: "handshake with an infected person", img: "", correct: false },
      { text: "sharing of sharp objects", img: "", correct: true },
      { text: "mosquito bites", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a constituted authority?",
    img: "",
    answers: [
      { text: "A mob leader", img: "", correct: false },
      { text: "A school principal", img: "", correct: true },
      { text: "A gang leader", img: "", correct: false },
      { text: "A protest coordinator", img: "", correct: false }
    ]
  },
  {
    question: "The Universal Declaration of Human Rights (UDHR) was adopted in",
    img: "",
    answers: [
      { text: "1945", img: "", correct: false },
      { text: "1948", img: "", correct: true },
      { text: "1960", img: "", correct: false },
      { text: "1963", img: "", correct: false }
    ]
  },
  {
    question: "A person who is not a citizen of a country but lives in that country is called",
    img: "",
    answers: [
      { text: "an alien", img: "", correct: true },
      { text: "a refugee", img: "", correct: false },
      { text: "a native", img: "", correct: false },
      { text: "a citizen", img: "", correct: false }
    ]
  },
  {
    question: "Drug abuse is best described as the",
    img: "",
    answers: [
      { text: "intake of drugs prescribed by a doctor", img: "", correct: false },
      { text: "use of drugs without medical prescription", img: "", correct: true },
      { text: "production of drugs by pharmacists", img: "", correct: false },
      { text: "selling of drugs in a pharmacy", img: "", correct: false }
    ]
  },
  {
    question: "One of the consequences of electoral malpractice is",
    img: "",
    answers: [
      { text: "political stability", img: "", correct: false },
      { text: "free and fair elections", img: "", correct: false },
      { text: "political violence", img: "", correct: true },
      { text: "economic growth", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following is a function of the legislature?",
    img: "",
    answers: [
      { text: "Implementation of laws", img: "", correct: false },
      { text: "Interpretation of laws", img: "", correct: false },
      { text: "Making of laws", img: "", correct: true },
      { text: "Punishment of offenders", img: "", correct: false }
    ]
  },
  {
    question: "The process of acquiring skills and values for active participation in society is known as",
    img: "",
    answers: [
      { text: "Political socialization", img: "", correct: false },
      { text: "Civic education", img: "", correct: true },
      { text: "Moral education", img: "", correct: false },
      { text: "Religious education", img: "", correct: false }
    ]
  },
  {
    question: "<b>Use the image in Figure 1 to answer the question below.</b><br>The Federal Road Safety Corps (FRSC) carries out all these functions except",
    img: "civic_education_year_2020_question_18&24_image.png",
    answers: [
      { text: "construction of motorable roads", img: "", correct: true },
      { text: "effective patrol operation", img: "", correct: false },
      { text: "inspection of vehicles", img: "", correct: false },
      { text: "prompt rescue mission", img: "", correct: false }
    ]
  },
  {
    question: "The inalienable entitlements of an individual in a society are known as",
    img: "",
    answers: [
      { text: "basic necessities", img: "", correct: false },
      { text: "natural justice", img: "", correct: false },
      { text: "fundamental freedom", img: "", correct: false },
      { text: "human rights", img: "", correct: true }
    ]
  },
  {
    question: "Membership of an organization that is characterized by secrecy of operations is associated with",
    img: "",
    answers: [
      { text: "activism", img: "", correct: false },
      { text: "cultism", img: "", correct: true },
      { text: "radicalism", img: "", correct: false },
      { text: "spiritism", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following cannot be termed drug abuse?",
    img: "",
    answers: [
      { text: "Use of performance enhancing drugs", img: "", correct: false },
      { text: "Taking of heroin and cocaine", img: "", correct: false },
      { text: "Drinking of alcohol in moderation", img: "", correct: true },
      { text: "Excessive smoking of cigarettes", img: "", correct: false }
    ]
  },
  {
    question: "The body in charge of controlling trafficking of drugs in Nigeria is the",
    img: "",
    answers: [
      { text: "Federal Road Safety Corps (FRSC)", img: "", correct: false },
      { text: "National Agency for Food and Drug Administration and Control (NAFDAC)", img: "", correct: false },
      { text: "National Drug Law Enforcement Agency (NDLEA)", img: "", correct: true },
      { text: "Nigerian Institute of Medical Research (NIMR)", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following is a punitive measure against cultism?",
    img: "",
    answers: [
      { text: "Counselling and enlightenment in school", img: "", correct: false },
      { text: "A true and sincere religious inculcation", img: "", correct: false },
      { text: "Arrest and prosecution of suspects", img: "", correct: true },
      { text: "Good parental responsibility and care", img: "", correct: false }
    ]
  },
  {
    question: "<b>Use the image in Figure 1 to answer the question below.</b><br>The road sign in Figure 1 indicates",
    img: "civic_education_year_2020_question_18&24_image.png",
    answers: [
      { text: "move ahead", img: "", correct: false },
      { text: "stop ahead", img: "", correct: true },
      { text: "speed limit", img: "", correct: false },
      { text: "wait a bit", img: "", correct: false }
    ]
  },
  {
    question: "<b>Use the dialogue below to answer the question.</b><br>Zainab: Mum, I am afraid.<br>Mum: Afraid of what?<br>Zainab: Lucy, the girl with HIV/AIDS in my class, hugged me in school today.<br>Mum: Don't worry dear, you can't contract HIV by mere hugging. Cheer up, my daughter.<br><br>The dialogue above shows that Zainab needs",
    img: "",
    answers: [
      { text: "medical attention", img: "", correct: false },
      { text: "proper enlightenment", img: "", correct: true },
      { text: "isolation from Lucy", img: "", correct: false },
      { text: "transfer to another school", img: "", correct: false }
    ]
  },
  {
    question: "Authorized road users include the following except",
    img: "",
    answers: [
      { text: "pedestrians", img: "", correct: false },
      { text: "bicycle riders", img: "", correct: false },
      { text: "roller skaters", img: "", correct: true },
      { text: "tricycle riders", img: "", correct: false }
    ]
  },
  {
    question: "When a person is being fair, impartial and reasonable in dealing with others, such person is said to be",
    img: "",
    answers: [
      { text: "responsible", img: "", correct: false },
      { text: "tolerant", img: "", correct: false },
      { text: "honest", img: "", correct: false },
      { text: "just", img: "", correct: true }
    ]
  },
  {
    question: "Which of the following is not a form of political apathy?",
    img: "",
    answers: [
      { text: "Refusal to register", img: "", correct: false },
      { text: "Refusal to vote", img: "", correct: false },
      { text: "Joining a political party", img: "", correct: true },
      { text: "Lack of interest in politics", img: "", correct: false }
    ]
  },
  {
    question: "A major attribute of a civil society is",
    img: "",
    answers: [
      { text: "voluntarism", img: "", correct: true },
      { text: "profit-making", img: "", correct: false },
      { text: "government funding", img: "", correct: false },
      { text: "partisanship", img: "", correct: false }
    ]
  },
  {
    question: "The 1999 Constitution of Nigeria is",
    img: "",
    answers: [
      { text: "written and flexible", img: "", correct: false },
      { text: "unwritten and rigid", img: "", correct: false },
      { text: "written and rigid", img: "", correct: true },
      { text: "unwritten and flexible", img: "", correct: false }
    ]
  },
  {
    question: "<b>Use the dialogue below to answer the question.</b><br>Bayo: Wao! Shola, how did you manage to purchase a new tricycle?<br>Shola: I did not buy it. It was the Councillor from my town that distributed tricycles to unemployed youths. I am lucky to be one of them.<br>Bayo: Congratulations! That's a good gesture.<br><br>The step taken by the Councillor in the dialogue above is best described as:",
    img: "",
    answers: [
      { text: "Empowerment", img: "", correct: true },
      { text: "Selflessness", img: "", correct: false },
      { text: "Development", img: "", correct: false },
      { text: "Patriotism", img: "", correct: false }
    ]
  },
  {
    question: "Shola in the dialogue above will likely end up being:",
    img: "",
    answers: [
      { text: "Patriotic", img: "", correct: false },
      { text: "Hardworking", img: "", correct: false },
      { text: "Contented", img: "", correct: false },
      { text: "Self-reliant", img: "", correct: true }
    ]
  },
  {
    question: "Which of the following is a known cult group in Nigeria?",
    img: "",
    answers: [
      { text: "Rangers", img: "", correct: false },
      { text: "Pyrates", img: "", correct: true },
      { text: "Flamingoes", img: "", correct: false },
      { text: "Illuminatis", img: "", correct: false }
    ]
  },
  {
    question: "Incidences of broken home and irresponsible parenting are major causes of",
    img: "",
    answers: [
      { text: "unhealthy growth", img: "", correct: false },
      { text: "armed robbery", img: "", correct: false },
      { text: "migration", img: "", correct: false },
      { text: "cultism", img: "", correct: true }
    ]
  },
  {
    question: "Which of the following makes the votes of the poor and the rich equal?",
    img: "",
    answers: [
      { text: "Compulsory voting", img: "", correct: false },
      { text: "Right to vote", img: "", correct: false },
      { text: "Popular participation", img: "", correct: false },
      { text: "Universal Adult Suffrage", img: "", correct: true }
    ]
  },
  {
    question: "A major limitation to the operational effectiveness of the public service is",
    img: "",
    answers: [
      { text: "Change of government", img: "", correct: false },
      { text: "Corruption", img: "", correct: false },
      { text: "Nepotism", img: "", correct: false },
      { text: "Bureaucratic red-tapism", img: "", correct: true }
    ]
  },
  {
    question: "Which of these is a disadvantage to the application of the rule of law in a democratic society?",
    img: "",
    answers: [
      { text: "Existence of free and fair election", img: "", correct: false },
      { text: "Granting of immunity to public office holders", img: "", correct: true },
      { text: "Ensuring equal protection of citizens' rights", img: "", correct: false },
      { text: "Promoting popular participation in politics", img: "", correct: false }
    ]
  },
  {
    question: "The protection of citizens' rights can be best guaranteed when there is",
    img: "",
    answers: [
      { text: "Rule of law and judicial independence", img: "", correct: true },
      { text: "Press freedom and censorship", img: "", correct: false },
      { text: "One party system and military rule", img: "", correct: false },
      { text: "Nepotism and tribalism", img: "", correct: false }
    ]
  },
  {
    question: "Constructive criticism of government policies and actions in a democratic state is best promoted by",
    img: "",
    answers: [
      { text: "The Military", img: "", correct: false },
      { text: "Civil Society", img: "", correct: true },
      { text: "Religious Leaders", img: "", correct: false },
      { text: "Traditional Rulers", img: "", correct: false }
    ]
  },
  {
    question: "Smooth transition of government in a democratic state is ensured when there is",
    img: "",
    answers: [
      { text: "Free and fair election", img: "", correct: true },
      { text: "Military coup", img: "", correct: false },
      { text: "Political violence", img: "", correct: false },
      { text: "Election rigging", img: "", correct: false }
    ]
  },
  {
    question: "The approval of the government budget is the responsibility of the:",
    img: "",
    answers: [
      { text: "Judiciary", img: "", correct: false },
      { text: "Legislature", img: "", correct: true },
      { text: "Ministers", img: "", correct: false },
      { text: "Executive", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following is NOT a way of preserving our cultural heritage?",
    img: "",
    answers: [
      { text: "Using our local languages", img: "", correct: false },
      { text: "Dressing in our traditional attires", img: "", correct: false },
      { text: "Adopting foreign cultures wholesale", img: "", correct: true },
      { text: "Eating our local dishes", img: "", correct: false }
    ]
  },
  {
    question: "Political apathy refers to",
    img: "",
    answers: [
      { text: "Active participation in politics", img: "", correct: false },
      { text: "Lack of interest in political activities", img: "", correct: true },
      { text: "Running for political office", img: "", correct: false },
      { text: "Voting in every election", img: "", correct: false }
    ]
  },
  {
    question: "One of the benefits of popular participation is that it",
    img: "",
    answers: [
      { text: "leads to political instability", img: "", correct: false },
      { text: "ensures government accountability", img: "", correct: true },
      { text: "promotes dictatorship", img: "", correct: false },
      { text: "encourages corruption", img: "", correct: false }
    ]
  },
  {
    question: "Which of these cannot be responsible for the spread of HIV/AIDS?",
    img: "",
    answers: [
      { text: "Unprotected sex", img: "", correct: false },
      { text: "Sharing of needles", img: "", correct: false },
      { text: "Blood transfusion", img: "", correct: false },
      { text: "Sharing of cutlery", img: "", correct: true }
    ]
  },
  {
    question: "<b>Use the cartoon in Figure 2 to answer the question below.</b><br>In Figure 2, the statement 'government has started the war on corruption' is an indication that",
    img: "civic_education_year_2020_question_46-47_image.png",
    answers: [
      { text: "taxi drivers are not happy with the new fuel price", img: "", correct: false },
      { text: "the patronage of taxi has reduced", img: "", correct: false },
      { text: "government is now tackling a major civic problem", img: "", correct: true },
      { text: "corruption has been eradicated in the oil sector", img: "", correct: false }
    ]
  },
  {
    question: "Based on the cartoon in Figure 2, it is evident that fuel scarcity is associated with the following except",
    img: "civic_education_year_2020_question_46-47_image.png",
    answers: [
      { text: "corruption in public corporation driven oil sector", img: "", correct: false },
      { text: "the inability of fuel marketers to supply fuel", img: "", correct: false },
      { text: "corruption in private corporation driven oil sector", img: "", correct: false },
      { text: "adequate importation of petrol by licensed marketers", img: "", correct: true }
    ]
  },
  {
    question: "One of the major duties of a citizen is to",
    img: "",
    answers: [
      { text: "pay taxes regularly", img: "", correct: true },
      { text: "arrest criminals", img: "", correct: false },
      { text: "make laws", img: "", correct: false },
      { text: "interpret the constitution", img: "", correct: false }
    ]
  },
  {
    question: "A characteristic of a good law is that it must be",
    img: "",
    answers: [
      { text: "discriminatory", img: "", correct: false },
      { text: "unknown to the public", img: "", correct: false },
      { text: "reasonable and enforceable", img: "", correct: true },
      { text: "changeable every day", img: "", correct: false }
    ]
  },
  {
    question: "Inter-communal conflicts can best be resolved through",
    img: "",
    answers: [
      { text: "war", img: "", correct: false },
      { text: "dialogue and mediation", img: "", correct: true },
      { text: "segregation", img: "", correct: false },
      { text: "intimidation", img: "", correct: false }
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