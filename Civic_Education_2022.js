const questions = [
  {
    question: "A prerequisite for orderliness is",
    img: "",
    answers: [
      { text: "Humility", img: "", correct: false },
      { text: "Hardwork", img: "", correct: false },
      { text: "Morality", img: "", correct: false },
      { text: "Politeness", img: "", correct: true }
    ]
  },
  {
    question: "National symbols are also referred to as symbols of national",
    img: "",
    answers: [
      { text: "Co-operation", img: "", correct: false },
      { text: "Identity", img: "", correct: true },
      { text: "Unity", img: "", correct: false },
      { text: "Development", img: "", correct: false }
    ]
  },
  {
    question: "Law of libel and defamation of character violates right to freedom of",
    img: "",
    answers: [
      { text: "Fair hearing", img: "", correct: false },
      { text: "Religion", img: "", correct: false },
      { text: "Expression", img: "", correct: true },
      { text: "Association", img: "", correct: false }
    ]
  },
  {
    question: "Who among the following is not a foremost Nigerian nationalist?",
    img: "",
    answers: [
      { text: "Sir Abubakar Tafawa Balewa", img: "", correct: false },
      { text: "Dr. Nnamdi Azikiwe", img: "", correct: false },
      { text: "General Yakubu Gowon", img: "", correct: true },
      { text: "Chief Obafemi Awolowo", img: "", correct: false }
    ]
  },
  {
    question: "The major reason for the enactment of traffic regulations is to",
    img: "",
    answers: [
      { text: "Make sure people travel for business purpose", img: "", correct: false },
      { text: "Arrest traffic offenders and violator", img: "", correct: false },
      { text: "Ensure safety and allow easy flow of traffic", img: "", correct: true },
      { text: "Ensure the sustenance and longevity of the roads", img: "", correct: false }
    ]
  },
  {
    question: "The basic responsibility of parents is",
    img: "",
    answers: [
      { text: "Providing necessities of life for the children", img: "", correct: true },
      { text: "Buying expensive gifts for the children", img: "", correct: false },
      { text: "Sending the children abroad for quality education", img: "", correct: false },
      { text: "Visiting sites of attraction with the children", img: "", correct: false }
    ]
  },
  {
    question: "The attitude that prevents peaceful resolution of inter-communal conflict is",
    img: "",
    answers: [
      { text: "Conciliation", img: "", correct: false },
      { text: "Resentment", img: "", correct: true },
      { text: "Dialogue", img: "", correct: false },
      { text: "Mediation", img: "", correct: false }
    ]
  },
  {
    question: "<b>Use the passage below to answer questions 8 and 9</b><br>It is a common practice for the youths of Upe village to meet every last Saturday of the month to build a proposed structure. Through this practice, they have successfully built a monumental market complex which attracts people from neighboring villages.<br><br>The zeal shown by the youths of Upe village is a manifestation of",
    img: "",
    answers: [
      { text: "Community service", img: "", correct: true },
      { text: "Political participation", img: "", correct: false },
      { text: "National development", img: "", correct: false },
      { text: "Town planning", img: "", correct: false }
    ]
  },
  {
    question: "The youth who took part in the various building projects in Upe village are said to be",
    img: "",
    answers: [
      { text: "Reliable", img: "", correct: false },
      { text: "Self reliant", img: "", correct: false },
      { text: "Hard-working", img: "", correct: false },
      { text: "Selfless", img: "", correct: true }
    ]
  },
  {
    question: "Which of the following sets of agencies are responsible for checking road worthiness of vehicle",
    img: "",
    answers: [
      { text: "The Federal Road Safety Corps and Vehicle Inspection Office", img: "", correct: true },
      { text: "The Police and National Security and Civil Defence Corps", img: "", correct: false },
      { text: "Federal Road Safety Corps and The Nigerian Army", img: "", correct: false },
      { text: "The Nigerian Army and Vehicle Inspection Office", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following may not be vested with a constituted authority?",
    img: "",
    answers: [
      { text: "Family", img: "", correct: false },
      { text: "A mob", img: "", correct: true },
      { text: "A school", img: "", correct: false },
      { text: "The State", img: "", correct: false }
    ]
  },
  {
    question: "An individual who finds it difficult to do without in-take of prohibited substances is",
    img: "",
    answers: [
      { text: "A human trafficker", img: "", correct: false },
      { text: "An armed robber", img: "", correct: false },
      { text: "A drug addict", img: "", correct: true },
      { text: "A kidnapper", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following is not a method of recruiting victims for human trafficking?",
    img: "",
    answers: [
      { text: "Deceit", img: "", correct: false },
      { text: "Threat", img: "", correct: false },
      { text: "Application", img: "", correct: true },
      { text: "Abduction", img: "", correct: false }
    ]
  },
  {
    question: "The law protecting certain individuals from being prosecuted is called",
    img: "",
    answers: [
      { text: "Penal code", img: "", correct: false },
      { text: "Constitutional protection", img: "", correct: false },
      { text: "Immunity clause", img: "", correct: true },
      { text: "Legal rights", img: "", correct: false }
    ]
  },
  {
    question: "<b>Use the cartoon in the figure below to answer questions 15 to 18</b><br><br>We can conclude that the mother of the boy putting on a face cap in the cartoon in the figure above is a",
    img: "civic_education_year_2022_question_15-18_image.png",
    answers: [
      { text: "Religious mother", img: "", correct: false },
      { text: "Responsible parent", img: "", correct: true },
      { text: "Wealthy person", img: "", correct: false },
      { text: "Child activist", img: "", correct: false }
    ]
  },
  {
    question: "<b>Use the cartoon in the figure below to answer questions 15 to 18</b><br><br>The effect of the interaction as captured in the cartoon in the figure above in relation to Civic Education is",
    img: "civic_education_year_2022_question_15-18_image.png",
    answers: [
      { text: "Mass mobilization", img: "", correct: false },
      { text: "Pressure group", img: "", correct: false },
      { text: "Peer pressure", img: "", correct: true },
      { text: "Popular participation", img: "", correct: false }
    ]
  },
  {
    question: "<b>Use the cartoon in the figure below to answer questions 15 to 18</b><br><br>We can make inference from the response of the boy wearing short pants in the cartoon in the figure above that he",
    img: "civic_education_year_2022_question_15-18_image.png",
    answers: [
      { text: "Needs the knowledge of Civic Education", img: "", correct: true },
      { text: "Became industrious through empowerment", img: "", correct: false },
      { text: "Gets financial support from his family", img: "", correct: false },
      { text: "Lacks moral care of a responsible parent", img: "", correct: false }
    ]
  },
  {
    question: "<b>Use the cartoon in the figure below to answer questions 15 to 18</b><br><br>Which of the following is not an advisable way through which the orientation of the boy wearing pants in the cartoon in the figure below can be corrected?",
    img: "civic_education_year_2022_question_15-18_image.png",
    answers: [
      { text: "Subjecting him to harsh punitive measures", img: "", correct: true },
      { text: "Impacting an effective Civic Education", img: "", correct: false },
      { text: "He needs morally upright and responsible parenting", img: "", correct: false },
      { text: "An effective guidance and counselling section", img: "", correct: false }
    ]
  },
  {
    question: "Limitation to the right to life can be found in the case of",
    img: "",
    answers: [
      { text: "An imprisoned person", img: "", correct: false },
      { text: "A kidnapped person", img: "", correct: false },
      { text: "A condemned person", img: "", correct: true },
      { text: "A trafficked person", img: "", correct: false }
    ]
  },
  {
    question: "In which of the following do citizens have equal rights? Right to",
    img: "",
    answers: [
      { text: "Freedom of movement", img: "", correct: false },
      { text: "Freedom from discrimination", img: "", correct: true },
      { text: "Free education", img: "", correct: false },
      { text: "Form or join any political party", img: "", correct: false }
    ]
  },
  {
    question: "Interest and willingness to participate in the affairs of a nation are forms of",
    img: "",
    answers: [
      { text: "Popular participation", img: "", correct: true },
      { text: "National consciousness", img: "", correct: false },
      { text: "Political apathy", img: "", correct: false },
      { text: "Citizenship education", img: "", correct: false }
    ]
  },
  {
    question: "The societal norm that represents the overall attitude of the people in a society is called",
    img: "",
    answers: [
      { text: "Group values", img: "", correct: false },
      { text: "General values", img: "", correct: true },
      { text: "Religious values", img: "", correct: false },
      { text: "Personal values", img: "", correct: false }
    ]
  },
  {
    question: "<b>Use the quotation below to answer question 23</b><br>“My stiffest earthly assignment is ended and major life's work is done. My country is now free.” — Dr. Nnamdi Azikiwe<br><br>The speaker quoted above must have fought hard for national",
    img: "",
    answers: [
      { text: "Prosperity", img: "", correct: false },
      { text: "Recognition", img: "", correct: false },
      { text: "Development", img: "", correct: false },
      { text: "Independence", img: "", correct: true }
    ]
  },
  {
    question: "Irresponsible parenting has the tendency of",
    img: "",
    answers: [
      { text: "Encouraging egoistic tendencies", img: "", correct: true },
      { text: "Preserving of culture", img: "", correct: false },
      { text: "Promoting of positive values", img: "", correct: false },
      { text: "Promoting peaceful co-existence", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following is a cause of political apathy in Nigeria",
    img: "",
    answers: [
      { text: "Adequate citizenship education", img: "", correct: false },
      { text: "A free and fair election", img: "", correct: false },
      { text: "Biased electoral umpires", img: "", correct: true },
      { text: "Adequate political awareness", img: "", correct: false }
    ]
  },
  {
    question: "Representation of Nigerians in the senate is",
    img: "",
    answers: [
      { text: "Proportional", img: "", correct: false },
      { text: "Collegial", img: "", correct: false },
      { text: "Equal", img: "", correct: true },
      { text: "Unequal", img: "", correct: false }
    ]
  },
  {
    question: "Identify the odd one from the list below in relation to citizenship obligations",
    img: "",
    answers: [
      { text: "Payment of tax", img: "", correct: false },
      { text: "Right to personal liberty", img: "", correct: true },
      { text: "Protection of public utility", img: "", correct: false },
      { text: "Obedience to the law", img: "", correct: false }
    ]
  },
  {
    question: "According to the 1999 constitution as amended, sovereignty belongs to the",
    img: "",
    answers: [
      { text: "President who is also the Commander-in-Chief of the Armed Forces", img: "", correct: false },
      { text: "People from whom government derives its power and authority", img: "", correct: true },
      { text: "National Assembly which has power to make laws and amend the constitution", img: "", correct: false },
      { text: "Judiciary which interprets the laws of the state", img: "", correct: false }
    ]
  },
  {
    question: "Article 1 of the Universal Declaration of Human Rights (UDHR) states that all human beings",
    img: "",
    answers: [
      { text: "Have freedom of movement", img: "", correct: false },
      { text: "Are born free and equal", img: "", correct: true },
      { text: "Should be free from torture", img: "", correct: false },
      { text: "Have the right to recognition", img: "", correct: false }
    ]
  },
  {
    question: "<b>Use the quotation below to answer questions 30 and 31</b><br>“If you cannot beat them, join them.”<br><br>The statement is an indication of a society that is",
    img: "",
    answers: [
      { text: "Ethically upright", img: "", correct: false },
      { text: "Morally degenerated", img: "", correct: true },
      { text: "Politically disintegrated", img: "", correct: false },
      { text: "Socially regenerated", img: "", correct: false }
    ]
  },
  {
    question: "Through which of the following means can the effect of the above quotation (“If you cannot beat them, join them”) on the society be rectified?",
    img: "",
    answers: [
      { text: "Compulsory communal service", img: "", correct: false },
      { text: "Strengthening of the constitution", img: "", correct: false },
      { text: "Reorientation of values", img: "", correct: true },
      { text: "Distribution of relief materials during emergency", img: "", correct: false }
    ]
  },
  {
    question: "Interpersonal relationship is promoted through the following ways except",
    img: "",
    answers: [
      { text: "Confrontation", img: "", correct: true },
      { text: "Healthy competition", img: "", correct: false },
      { text: "Cooperation", img: "", correct: false },
      { text: "Communal living", img: "", correct: false }
    ]
  },
  {
    question: "An activity meant to promote and protect the interest of a country is",
    img: "",
    answers: [
      { text: "Unitarianism", img: "", correct: false },
      { text: "Communism", img: "", correct: false },
      { text: "Communalism", img: "", correct: false },
      { text: "Nationalism", img: "", correct: true }
    ]
  },
  {
    question: "Democracy is important because it",
    img: "",
    answers: [
      { text: "Accommodates popular participation", img: "", correct: true },
      { text: "Accommodates political apathy", img: "", correct: false },
      { text: "Encourages operational bureaucracy", img: "", correct: false },
      { text: "Breeds ethnic competition and rivalry", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following criminal acts is most commonly perpetrated by cult members?",
    img: "",
    answers: [
      { text: "Prostitution", img: "", correct: false },
      { text: "Money Laundering", img: "", correct: false },
      { text: "Corruption", img: "", correct: false },
      { text: "Violence", img: "", correct: true }
    ]
  },
  {
    question: "<b>Use the dialogue below to answer questions 36 and 37</b><br>Tim: Jim, let's go to the hospital and confirm our HIV status.<br>Jim: Really? Does my face resemble that of someone with HIV? After all, I am too poor to engage in illicit sex, drug abuse nor keep numerous partners like you do.<br>Tim: It is more than what you think, Jim. You suffer other noticeable symptoms which make me suspicious of your status.<br>Jim: Okay, just to satisfy your curiosity, let's go.<br><br>From the above dialogue, noticeable symptoms Tim must have observed about Jim include the following except",
    img: "",
    answers: [
      { text: "Profuse night sweats", img: "", correct: false },
      { text: "Persistent diarrhea", img: "", correct: false },
      { text: "Increase in appetite", img: "", correct: true },
      { text: "Unusual fatigue", img: "", correct: false }
    ]
  },
  {
    question: "Individuals like Jim in the story above who believe HIV carriers are selective, can get enlightenment through",
    img: "",
    answers: [
      { text: "Effective praying and fasting", img: "", correct: false },
      { text: "Youth empowerment programme", img: "", correct: true },
      { text: "Sex and civic education", img: "", correct: false },
      { text: "Popular participation", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following is not a function of the judicial arm of government?",
    img: "",
    answers: [
      { text: "Interpretation of law", img: "", correct: false },
      { text: "Judicial review", img: "", correct: false },
      { text: "Checking of arbitrariness", img: "", correct: false },
      { text: "Initiation of bills", img: "", correct: true }
    ]
  },
  {
    question: "The officials of the administrative agency of the state that are most active in governance belong to the",
    img: "",
    answers: [
      { text: "Legislative organ", img: "", correct: false },
      { text: "Judicial organ", img: "", correct: false },
      { text: "Executive organ", img: "", correct: true },
      { text: "Civil societies", img: "", correct: false }
    ]
  },
  {
    question: "One major reason some Nigerian youths join cult groups is",
    img: "",
    answers: [
      { text: "Inadequate religious and moral instruction", img: "", correct: false },
      { text: "Poor welfare programme for students", img: "", correct: false },
      { text: "Inadequate support from guardians and parents", img: "", correct: true },
      { text: "Prevalence of corruption among political elites", img: "", correct: false }
    ]
  },
  {
    question: "All the following are aims of youth empowerment scheme except",
    img: "",
    answers: [
      { text: "Reduction of youth delinquency", img: "", correct: false },
      { text: "Promotion of self-reliance", img: "", correct: false },
      { text: "Maximization of profit", img: "", correct: true },
      { text: "Building of self-esteem", img: "", correct: false }
    ]
  },
  {
    question: "A situation where only 35% of over 80 million registered voters participated in a general election is an indication of political",
    img: "",
    answers: [
      { text: "Instability", img: "", correct: false },
      { text: "Exclusiveness", img: "", correct: false },
      { text: "Apathy", img: "", correct: true },
      { text: "Socialization", img: "", correct: false }
    ]
  },
  {
    question: "The organizations working against dictatorship and mounting campaigns for effective civil rule are called",
    img: "",
    answers: [
      { text: "Professional bodies", img: "", correct: false },
      { text: "Religious institutions", img: "", correct: false },
      { text: "Political parties", img: "", correct: false },
      { text: "Civil societies", img: "", correct: true }
    ]
  },
  {
    question: "<b>Use the diagram in the figure below to answer questions 44 and 45</b><br><br>In a democratic government structure, the portion marked X in the diagram above is occupied by the",
    img: "civic_education_year_2022_question_44-45_image.png",
    answers: [
      { text: "Press", img: "", correct: false },
      { text: "Judiciary", img: "", correct: true },
      { text: "Civil societies", img: "", correct: false },
      { text: "Political parties", img: "", correct: false }
    ]
  },
  {
    question: "<b>Use the diagram in the figure below to answer questions 44 and 45</b><br><br>The major function of the activity of the occupiers of the portion marked X in the diagram above is to",
    img: "civic_education_year_2022_question_44-45_image.png",
    answers: [
      { text: "Interpret laws", img: "", correct: true },
      { text: "Execute policies", img: "", correct: false },
      { text: "Make by-laws", img: "", correct: false },
      { text: "Formulate policies", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following is not a problem of civil society?",
    img: "",
    answers: [
      { text: "Leadership struggle", img: "", correct: false },
      { text: "Poor funding", img: "", correct: false },
      { text: "Planning to capture political power", img: "", correct: true },
      { text: "Embezzlement of fund", img: "", correct: false }
    ]
  },
  {
    question: "One of the major complaints against the public service is",
    img: "",
    answers: [
      { text: "Inefficiency", img: "", correct: true },
      { text: "Victimization", img: "", correct: false },
      { text: "Discrimination", img: "", correct: false },
      { text: "Election rigging", img: "", correct: false }
    ]
  },
  {
    question: "From which of the following sources are constitutional provisions not derived?",
    img: "",
    answers: [
      { text: "Statutory sources", img: "", correct: false },
      { text: "Customary sources", img: "", correct: false },
      { text: "Judicial precedents", img: "", correct: false },
      { text: "Story books", img: "", correct: true }
    ]
  },
  {
    question: "The head of the judicial arm of government in Nigeria is the",
    img: "",
    answers: [
      { text: "Chief Justice", img: "", correct: true },
      { text: "Supreme Leader", img: "", correct: false },
      { text: "Chief of Staff", img: "", correct: false },
      { text: "Chief Magistrate", img: "", correct: false }
    ]
  },
  {
    question: "The composition of the National Assembly of the Federal Republic of Nigeria could be termed",
    img: "",
    answers: [
      { text: "Unicameral", img: "", correct: false },
      { text: "Collegial", img: "", correct: false },
      { text: "Bicameral", img: "", correct: true },
      { text: "Hierarchical", img: "", correct: false }
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