const questions = [
  {
    question: "Which of the following is important for sustainable human relation in a society?",
    answers: [
      { text: "Tolerance", correct: true },
      { text: "Birth registration", correct: false },
      { text: "Cultural affinity", correct: false },
      { text: "Rehabilitation", correct: false }
    ]
  },
  {
    question: "The machinery through which the will of the state is driven is described as",
    answers: [
      { text: "Administration", correct: false },
      { text: "Rule of law", correct: false },
      { text: "Government", correct: true },
      { text: "Custom and tradition", correct: false }
    ]
  },
  {
    question: "A major attribute an individual will likely exhibit if not contended is",
    answers: [
      { text: "Jealousy", correct: false },
      { text: "Irresponsibility", correct: false },
      { text: "Greediness", correct: true },
      { text: "Dishonesty", correct: false }
    ]
  },
  {
    question: "Standards, rules and criteria that determine acceptable norms that influence a cordial relationship in the society are referred to as",
    answers: [
      { text: "Values", correct: true },
      { text: "Attitudes", correct: false },
      { text: "Conventions", correct: false },
      { text: "Regulations", correct: false }
    ]
  },
  {
    question: "Under the Nigeria 1999 constitution as amended, the right to secede is",
    answers: [
      { text: "Allowed to any state in the federation", correct: false },
      { text: "Denied all states in the federation", correct: true },
      { text: "Resident in local government in the federation", correct: false },
      { text: "Given to the federal government", correct: false }
    ]
  },
  {
    question: "The Nigerian Tribune newspaper was established by",
    answers: [
      { text: "Herbert Macauley", correct: false },
      { text: "Obafemi Awolowo", correct: true },
      { text: "Anthony Enahoro", correct: false },
      { text: "Ahamadu Bello", correct: false }
    ]
  },
  {
    question: "A person born in Ghana by Nigerian parents and resides in Ghana is a citizen of",
    answers: [
      { text: "Ghana by naturalization", correct: false },
      { text: "Nigeria by birth", correct: true },
      { text: "Nigeria by registration", correct: false },
      { text: "Ghana by birth", correct: false }
    ]
  },
  {
    question: "The payment of residential utility bills is a duty of the",
    answers: [
      { text: "Federal government", correct: false },
      { text: "State government", correct: false },
      { text: "Local government", correct: false },
      { text: "Citizens", correct: true }
    ]
  },
  {
    question: "An inalienable right enjoyed by citizens of a state but denied all non-citizens is the right to",
    answers: [
      { text: "Fair hearing", correct: false },
      { text: "Freedom of speech", correct: false },
      { text: "Be voted for", correct: true },
      { text: "Sue and be sued", correct: false }
    ]
  },
  {
    question: "Right to ownership of property falls under the category of",
    answers: [
      { text: "Civil right", correct: false },
      { text: "Social right", correct: false },
      { text: "Political right", correct: false },
      { text: "Economic right", correct: true }
    ]
  },
  {
    question: "The right to freedom of expression can be limited by",
    answers: [
      { text: "The legislature", correct: false },
      { text: "The police", correct: false },
      { text: "Slander", correct: true },
      { text: "Insecurity", correct: false }
    ]
  },
  {
    question: "Human rights abuse can be prevented with the existence of",
    answers: [
      { text: "Independent judiciary", correct: true },
      { text: "Well-equipped police force", correct: false },
      { text: "Strong arm force", correct: false },
      { text: "Strong intergovernmental relation", correct: false }
    ]
  },
  {
    question: "To enhance national development, parenthood, which is the nucleus of every society, must be",
    answers: [
      { text: "Regulated by religious clerics", correct: false },
      { text: "Relaxed in their responsibilities", correct: false },
      { text: "Supported by leaders in government", correct: false },
      { text: "A civil and morally responsible one", correct: true }
    ]
  },
  {
    question: "The beam of yellow colour on a traffic light is an indication to drivers to",
    answers: [
      { text: "Move", correct: false },
      { text: "Get ready to move", correct: true },
      { text: "Stop", correct: false },
      { text: "Watch out for cars", correct: false }
    ]
  },
  {
    question: "Roads signs are usually",
    answers: [
      { text: "Regulatory and informative", correct: true },
      { text: "Persuasive and regulatory", correct: false },
      { text: "Informatic and persuasive", correct: false },
      { text: "Punitive and informative", correct: false }
    ]
  },
  {
    question: "<b>Use the write-up below to answer question 16:</b> <br>Driving on the highways entails being very watchful, observant and attentive to one's surrounding, else you may run into an object or someone. Most accidents are caused by human factors. <br><br>From the above statement, it is clear that accidents can be",
    answers: [
      { text: "Discouraged", correct: false },
      { text: "Managed", correct: false },
      { text: "Eliminated", correct: false },
      { text: "Prevented", correct: true }
    ]
  },
  {
    question: "Traffic regulations are laws that mainly",
    answers: [
      { text: "Guide all road users on safety practices", correct: true },
      { text: "Establish agencies for control of traffic", correct: false },
      { text: "Ensure the teaching of road safety in school", correct: false },
      { text: "Instruct drivers on the use of traffic signs only", correct: false }
    ]
  },
  {
    question: "Positive interpersonal relationship mainly promotes",
    answers: [
      { text: "Competition with one another", correct: false },
      { text: "Peaceful co-existence", correct: true },
      { text: "Existence of healthy rivalry", correct: false },
      { text: "Acquisition of business ideas", correct: false }
    ]
  },
  {
    question: "A social affiliation between two or more people in the society is known as",
    answers: [
      { text: "Intercommunal relations", correct: false },
      { text: "Inter-ethnic relation", correct: false },
      { text: "Interpersonal relations", correct: true },
      { text: "Inter societal relations", correct: false }
    ]
  },
  {
    question: "A major achievement that can be attributed to good intercommunal relationship in Nigeria is",
    answers: [
      { text: "Curtailing rural-urban migration", correct: false },
      { text: "Promoting national cultural festivals", correct: false },
      { text: "Encourging competition among individuals in the society", correct: false },
      { text: "Promoting peace, mutual understanding and development", correct: true }
    ]
  },
  {
    question: "Activities of secret cults are not likely to be prominent in",
    answers: [
      { text: "Educational campuses", correct: false },
      { text: "Motor parks", correct: false },
      { text: "Market squares", correct: false },
      { text: "Religious gatherings", correct: true }
    ]
  },
  {
    question: "Which of the following factors have made political apathy in Nigeria more pronounced?",
    answers: [
      { text: "Long period of dictatorship and election rigging", correct: true },
      { text: "Poverty, ethnicity and religious fanaticism", correct: false },
      { text: "Indiscriminate registration of parties and illiteracy", correct: false },
      { text: "Use of card radars and complexity of voting procedures", correct: false }
    ]
  },
  {
    question: "Combating human trafficking requires the efforts of",
    answers: [
      { text: "Government, educational bodies, religious organisations including civil societies", correct: false },
      { text: "Government and non-governmental agencies excluding the students", correct: false },
      { text: "International bodies, pressure groups and other non-governmental agencies only", correct: false },
      { text: "Individuals, government, non-governmental agencies including international bodies", correct: true }
    ]
  },
  {
    question: "When voters exercise their right to vote based on monetary or material inducements, the elected candidates may suffer",
    answers: [
      { text: "Eroded legitimacy", correct: true },
      { text: "Loss of voter support in the next election", correct: false },
      { text: "Loss of party support for another term", correct: false },
      { text: "Erosion of dividends of democracy", correct: false }
    ]
  },
  {
    question: "Political apathy can be addressed by",
    answers: [
      { text: "Selling of votes to the highest bidders", correct: false },
      { text: "Criticizing the policies of elected officials", correct: false },
      { text: "Boycotting election campaigns and rallies", correct: false },
      { text: "Public enlightenment and campaigns", correct: true }
    ]
  },
  {
    question: "Legislative arm of government can check the executive by",
    answers: [
      { text: "Withholding the salaries of ministers", correct: false },
      { text: "Delaying the posting of ambassadors", correct: false },
      { text: "Demanding the review of any act of the executive", correct: true },
      { text: "Reporting them to the supreme court", correct: false }
    ]
  },
  {
    question: "The Nigerian federation is divided into how many geopolitical zones?",
    answers: [
      { text: "774", correct: false },
      { text: "36", correct: false },
      { text: "6", correct: true },
      { text: "4", correct: false }
    ]
  },
  {
    question: "The executive, legislative and judiciary constitute the",
    answers: [
      { text: "Arms of government", correct: true },
      { text: "Systems of government", correct: false },
      { text: "Tiers of government", correct: false },
      { text: "Forms of government", correct: false }
    ]
  },
  {
    question: "Civil societies act mainly as a link between",
    answers: [
      { text: "Government and international bodies", correct: false },
      { text: "Different opposing communities", correct: false },
      { text: "Individuals of divergent interests", correct: false },
      { text: "Government and the populace", correct: true }
    ]
  },
  {
    question: "When power is concentrated in one central government, the constitution is said to be",
    answers: [
      { text: "Federal", correct: false },
      { text: "Unitary", correct: true },
      { text: "Republican", correct: false },
      { text: "Semi-federal", correct: false }
    ]
  },
  {
    question: "Legislations on issues affecting policies on money, policing and international relations are within the scope of",
    answers: [
      { text: "Exclusive legislative matter", correct: true },
      { text: "Concurrent and residual list", correct: false },
      { text: "Residual legislative matter", correct: false },
      { text: "Concurrent and exclusive list", correct: false }
    ]
  },
  {
    question: "God-fatherism in a democratic system of government can lead to",
    answers: [
      { text: "Neglect of followers", correct: true },
      { text: "Citizens' participation", correct: false },
      { text: "Loss of employment", correct: false },
      { text: "Economic development", correct: false }
    ]
  },
  {
    question: "One significance of democracy in Nigeria is that it promotes",
    answers: [
      { text: "Secularism", correct: false },
      { text: "Sectionalism", correct: false },
      { text: "Regionalism", correct: false },
      { text: "Constitutionalism", correct: true }
    ]
  },
  {
    question: "Execution and implementation of government policies are parts of the functions of the",
    answers: [
      { text: "Military", correct: false },
      { text: "Civil society", correct: false },
      { text: "Legislature", correct: false },
      { text: "Public service", correct: true }
    ]
  },
  {
    question: "One of the political responsibilities of a citizen is",
    answers: [
      { text: "Exercising the right of franchise", correct: true },
      { text: "Participating in social gatherings", correct: false },
      { text: "Engaging in cultural debates", correct: false },
      { text: "Joining town hall meetings", correct: false }
    ]
  },
  {
    question: "Local government administration promotes",
    answers: [
      { text: "Consensus building in governance", correct: false },
      { text: "Responsible government", correct: false },
      { text: "Democracy at the grass roots", correct: true },
      { text: "Responsive government", correct: false }
    ]
  },
  {
    question: "<b>Use the image in the figure below to answer questions 37 and 38<b> <br> (WASSCE/WAEC traffic sign indicating “no waiting”). <br><br><br> The traffic sign indicated above means",
    image: "civic_education_year_2023_question_37-38_image.png",
    answers: [
      { text: "No waiting", correct: true },
      { text: "No stopping", correct: false },
      { text: "No crossing", correct: false },
      { text: "No overtaking", correct: false }
    ]
  },
  {
    question: "<b>Use the image in the figure below to answer questions 37 and 38<b> <br> (WASSCE/WAEC traffic sign indicating “no waiting”). <br><br><br> Where you will likely not find the 'No waiting' sign in Nigeria?",
    image: "civic_education_year_2023_question_37-38_image.png",
    answers: [
      { text: "Court areas", correct: false },
      { text: "Military zone", correct: false },
      { text: "Presidential villa", correct: false },
      { text: "Shopping malls", correct: true }
    ]
  },
  {
    question: "The major aim of youth empowerment programmes is to",
    answers: [
      { text: "Tackle the problem of insecurity and lawlessness", correct: false },
      { text: "Provide vocational skills to the youths", correct: true },
      { text: "Provide attitudinal reorientation to the youth", correct: false },
      { text: "Help the youths become good decision makers", correct: false }
    ]
  },
  {
    question: "Human trafficking can be described as",
    answers: [
      { text: "Desperate desire by youths to travel abroad for greener pasture", correct: false },
      { text: "Exploitation of humans in the ways their rights are deprived in the course of movement", correct: true },
      { text: "Exploration and adventures in foreign countries", correct: false },
      { text: "Recruitment of youths as casual workers in distant places", correct: false }
    ]
  },
  {
    question: "Traffic regulations are mainly meant for all",
    answers: [
      { text: "Pedestrians", correct: false },
      { text: "Road users", correct: true },
      { text: "Truck drivers", correct: false },
      { text: "Private drivers", correct: false }
    ]
  },
  {
    question: "When opposing communities come together to discuss a way out of a pending feud, the action is best described as",
    answers: [
      { text: "Co-operation", correct: false },
      { text: "Dialogue", correct: true },
      { text: "Arbitration", correct: false },
      { text: "Peacekeeping", correct: false }
    ]
  },
  {
    question: "Authority that is recognised by the law of the land is called",
    answers: [
      { text: "Religious authority", correct: false },
      { text: "Consultative authority", correct: false },
      { text: "Constituted authority", correct: true },
      { text: "Charismatic authority", correct: false }
    ]
  },
  {
    question: "Which of the following values will likely cause harm to the society?",
    answers: [
      { text: "Tolerance", correct: false },
      { text: "Indiscipline", correct: true },
      { text: "Politeness", correct: false },
      { text: "Fairplay", correct: false }
    ]
  },
  {
    question: "Carefully study the following list of civic education terms I to VII below and use them to answer questions 45 to 48: <br>I. HIV/AIDS <br>II. Law and order <br>III. Political apathy <br>IV. Human trafficking <br>V. Popular participation <br>VI. Responsible parenting <br>VII. Fundamental human rights <br><br>45. The major reasons some countries are termed developing resulted from",
    answers: [
      { text: "III and VI", correct: true },
      { text: "IV and V", correct: false },
      { text: "II and VII", correct: false },
      { text: "V and VI", correct: false }
    ]
  },
  {
    question: "Non-negotiable entitlements of every individual on earth are (using list I-VII)",
    answers: [
      { text: "II and V", correct: false },
      { text: "II and VII", correct: true },
      { text: "VI and VII", correct: false },
      { text: "II and VI", correct: false }
    ]
  },
  {
    question: "From the list (I-VII), the two experiences of individuals that require counselling are",
    answers: [
      { text: "III and V", correct: false },
      { text: "I and VII", correct: false },
      { text: "II and III", correct: false },
      { text: "I and IV", correct: true }
    ]
  },
  {
    question: "The major reasons for citizens’ reorientation in civic education are (using list I-VII)",
    answers: [
      { text: "II and V", correct: false },
      { text: "III and V", correct: true },
      { text: "VI and VII", correct: false },
      { text: "I and II", correct: false }
    ]
  },
  {
    question: "The search of a citizen’s residence by the police without a warrant or court order amounts to a breach of his or her right to",
    answers: [
      { text: "Privacy", correct: true },
      { text: "Freedom of conscience", correct: false },
      { text: "Freedom of expression", correct: false },
      { text: "Life", correct: false }
    ]
  },
  {
    question: "The unpleasant attitudes towards people living with HIV/AIDS is termed",
    answers: [
      { text: "Playing safe", correct: false },
      { text: "Civic neglect", correct: false },
      { text: "Human right abuse", correct: false },
      { text: "Stigmatization", correct: true }
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

  // IMAGE (Only adds if image property exists)
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
    // Record the missed question and the correct answer
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

  // Generate Review Section (Missed Questions)
  generateReviewSection();
}

// Restart quiz
restartBtn.addEventListener("click", startQuiz);

// Initialize app
startQuiz();