const questions = [
  {
    question: "The hydrolysis of proteins by diluting mineral acids produces",
    img: "",
    answers: [
      { text: "sucrose", img: "", correct: false },
      { text: "glucose", img: "", correct: false },
      { text: "amino acids", img: "", correct: true },
      { text: "fatty acids", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following oxides causes acid rain?",
    img: "",
    answers: [
      { text: "CO", img: "", correct: false },
      { text: "NO", img: "", correct: false },
      { text: "H₂O₂", img: "", correct: false },
      { text: "NO₂", img: "", correct: true }
    ]
  },
  {
    question: "The ratio of carbon atoms to hydrogen atoms in a hydrocarbon is 1:2. If its molecular mass is 56, what is its molecular formula?",
    img: "",
    answers: [
      { text: "C₃H₆", img: "", correct: false },
      { text: "C₄H₈", img: "", correct: true },
      { text: "C₂H₄", img: "", correct: false },
      { text: "CH₂", img: "", correct: false }
    ]
  },
  {
    question: "What is the relative molecular mass of the compound below? [H = 1.0; C = 12.0; O = 16.0]",
    img: "chemistry_2021_question_4_image.png", // This will now show correctly
    answers: [
      { text: "137", img: "", correct: false },
      { text: "136", img: "", correct: true },
      { text: "64", img: "", correct: false },
      { text: "59", img: "", correct: false }
    ]
  },
  {
    question: "Cathodic protection of metals is based on",
    img: "",
    answers: [
      { text: "standard electrode potential of hydrogen", img: "", correct: false },
      { text: "its electrical conductivity", img: "", correct: false },
      { text: "nature of oxides formed", img: "", correct: false },
      { text: "relative tendencies of oxidation", img: "", correct: true }
    ]
  },
  {
    question: "If humid air is polluted by chlorine discharged, the air can be restored by sprinkling",
    img: "",
    answers: [
      { text: "solid MnO₂", img: "", correct: false },
      { text: "acidified KMnO₄", img: "", correct: false },
      { text: "acidified FeSO₄", img: "", correct: true },
      { text: "saturated NaCl(aq)", img: "", correct: false }
    ]
  },
  {
    question: "The alkanol represented by the structure below [Image Missing] is",
    img: "chemistry_2021_question_7_image.png", // This will now show correctly
    answers: [
      { text: "primary and dihydric", img: "", correct: false },
      { text: "secondary and monohydric", img: "", correct: true },
      { text: "tertiary and dihydric", img: "", correct: false },
      { text: "secondary and dihydric", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following pairs of compounds would form a precipitate when their aqueous solutions are mixed?",
    img: "",
    answers: [
      { text: "NaCl and KNO₃", img: "", correct: false },
      { text: "KCl and NaNO₃", img: "", correct: false },
      { text: "K₂SO₄ and BaCl₂", img: "", correct: true },
      { text: "NH₄NO₃ and CO₃", img: "", correct: false }
    ]
  },
  {
    question: "Study the graphs below and use them to answer questions 9 to 11. <br> Which of the following illustrates the variation of the rate of evolution of gas from a given length of magnesium ribbon with an increase in the concentration of the added reactant? [Image Missing]",
    img: "chemistry_2021_question_9-11_image.png", // This will now show correctly
    answers: [
      { text: "I", img: "", correct: true },
      { text: "II", img: "", correct: false },
      { text: "III", img: "", correct: false },
      { text: "IV", img: "", correct: false }
    ]
  },
  {
    question: "Which of the graphs illustrates the variation of the pH of a given volume of strong acid solution with the volume of strong base titrated against it? [Image Missing]",
    img: "chemistry_2021_question_9-11_image.png", // This will now show correctly
    answers: [
      { text: "I", img: "", correct: false },
      { text: "II", img: "", correct: true },
      { text: "III", img: "", correct: false },
      { text: "IV", img: "", correct: false }
    ]
  },
  {
    question: "Which of the graphs illustrates the variation of the solubility of a salt in water, with an increase in temperature if the dissolution process is exothermic? [Image Missing]",
    img: "chemistry_2021_question_9-11_image.png", // This will now show correctly
    answers: [
      { text: "I", img: "", correct: false },
      { text: "II", img: "", correct: false },
      { text: "III", img: "", correct: true },
      { text: "IV", img: "", correct: false }
    ]
  },
  {
    question: "The formation of ethene from dehydration of ethanol can be described as",
    img: "",
    answers: [
      { text: "an addition reaction", img: "", correct: false },
      { text: "an elimination reaction", img: "", correct: true },
      { text: "an oxidation reaction", img: "", correct: false },
      { text: "a substitution reaction", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following gases is highly soluble in water at room temperature?",
    img: "",
    answers: [
      { text: "ammonia", img: "", correct: true },
      { text: "carbon (IV) oxide", img: "", correct: false },
      { text: "chlorine", img: "", correct: false },
      { text: "nitrogen", img: "", correct: false }
    ]
  },
  {
    question: "A molecule of phosphorus is",
    img: "",
    answers: [
      { text: "diatomic", img: "", correct: false },
      { text: "triatomic", img: "", correct: false },
      { text: "tetraatomic", img: "", correct: true },
      { text: "monoatomic", img: "", correct: false }
    ]
  },
  {
    question: "The most common method of preparing insoluble salts is by",
    img: "",
    answers: [
      { text: "filtration", img: "", correct: false },
      { text: "decomposition", img: "", correct: false },
      { text: "neutralization", img: "", correct: false },
      { text: "double decomposition", img: "", correct: true }
    ]
  },
  {
    question: "What number of moles of oxygen would exert a pressure of 10 atm at 320 K in an 8.2 dm³ cylinder? [R = 0.082 atm·dm³·mol⁻¹·K⁻¹]",
    img: "",
    answers: [
      { text: "0.32", img: "", correct: false },
      { text: "1.56", img: "", correct: false },
      { text: "3.13", img: "", correct: true },
      { text: "31.25", img: "", correct: false }
    ]
  },
  {
    question: "The basic property of salts used as drying agents is by?",
    img: "",
    answers: [
      { text: "efflorescence", img: "", correct: false },
      { text: "high melting point", img: "", correct: false },
      { text: "hygroscopy", img: "", correct: true },
      { text: "low solubility", img: "", correct: false }
    ]
  },
  {
    question: "What would be observed when aqueous ammonia is added in drops and then in excess to a solution of copper(II) ions?",
    img: "",
    answers: [
      { text: "blue precipitate is formed which is soluble in excess ammonia", img: "", correct: true },
      { text: "brick red precipitate is produced which is insoluble in excess ammonia", img: "", correct: false },
      { text: "white precipitate is formed which is excess in ammonia", img: "", correct: false },
      { text: "green precipitate is formed which is insoluble in excess ammonia", img: "", correct: false }
    ]
  },
  {
    question: "When CuSO₄(aq) is added to Pb(NO₃)₂(aq)",
    img: "",
    answers: [
      { text: "there would be no visible change", img: "", correct: false },
      { text: "a blue precipitate would be formed", img: "", correct: false },
      { text: "the resulting solution would become colourless", img: "", correct: false },
      { text: "a white precipitate would be formed", img: "", correct: true }
    ]
  },
  {
    question: "Consider the structure below. How many carbon atoms does the parent chain contain?",
    img: "chemistry_2021_question_20_image.png", // This will now show correctly
    answers: [
      { text: "5", img: "", correct: true },
      { text: "4", img: "", correct: false },
      { text: "3", img: "", correct: false },
      { text: "2", img: "", correct: false }
    ]
  },
  {
    question: "Under which conditions of pressure (P) and temperature (T) would the volume of an inflated balloon increase?",
    img: "",
    answers: [
      { text: "P and T are increased", img: "", correct: false },
      { text: "both T and P are decreased", img: "", correct: false },
      { text: "T is increased and P is decreased", img: "", correct: true },
      { text: "T is decreased and P is increased", img: "", correct: false }
    ]
  },
  {
    question: "The collision between ideal gas molecules are considered to be perfectly elastic because",
    img: "",
    answers: [
      { text: "they collide without losing energy", img: "", correct: true },
      { text: "they move randomly in a straight line", img: "", correct: false },
      { text: "their average kinetic energy is variable", img: "", correct: false },
      { text: "the distance between them is large compared to their size", img: "", correct: false }
    ]
  },
  {
    question: "Elements with high ionization energies would",
    img: "",
    answers: [
      { text: "lose electrons easily", img: "", correct: false },
      { text: "have large atomic radii", img: "", correct: false },
      { text: "have high effective nuclear charges", img: "", correct: true },
      { text: "have low atomic numbers", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following statements about Group VII elements is correct?",
    img: "",
    answers: [
      { text: "they are present in the same physical state", img: "", correct: false },
      { text: "they are strong reducing agents", img: "", correct: false },
      { text: "their reactivity decreases down the group", img: "", correct: true },
      { text: "they exist as monoatomic molecules", img: "", correct: false }
    ]
  },
  {
    question: "Consider the diagram below and use it to answer questions 25 and 26. <br> Which of the following cell notations represent the diagram?",
    img: "chemistry_2021_question_25-26_image.png", // This will now show correctly
    answers: [
      { text: "B²⁺/B//A/A³⁺", img: "", correct: false },
      { text: "A³⁺/A//B/B²⁺", img: "", correct: false },
      { text: "B/B²⁺//A/³⁺", img: "", correct: false },
      { text: "A/A³⁺//B²⁺/B", img: "", correct: true }
    ]
  },
  {
    question: "Consider the diagram below and use it to answer questions 25 and 26. <br> Which of the following half-reaction equations represent the reaction at the cathode? [Image Missing]",
    img: "chemistry_2021_question_25-26_image.png",
    answers: [
      { text: "A³⁺(aq)+3e⁻ → A(s)", img: "", correct: true },
      { text: "B²⁺(aq)+2e⁻ → B(s)", img: "", correct: false },
      { text: "A(s) → A³⁺(aq)+3e⁻", img: "", correct: false },
      { text: "B(s) → B²⁺(aq)+2e⁻", img: "", correct: false }
    ]
  },
  {
    question: "The reactivity of fluorine is high because of",
    img: "",
    answers: [
      { text: "its high electronegativity", img: "", correct: true },
      { text: "the small size of the fluorine atom", img: "", correct: false },
      { text: "the availability of d-orbitals", img: "", correct: false },
      { text: "the strong F-F bond", img: "", correct: false }
    ]
  },
  {
    question: "How many coulombs of electricity would liberate 1.08 g of Ag from a solution of silver salt? [Ag = 108; 1F = 96500 C]",
    img: "",
    answers: [
      { text: "96500 C", img: "", correct: false },
      { text: "9650 C", img: "", correct: false },
      { text: "965 C", img: "", correct: true },
      { text: "9.65 C", img: "", correct: false }
    ]
  },
  {
    question: "The Bohr model of the atom proposed the existence of",
    img: "",
    answers: [
      { text: "the nucleus", img: "", correct: false },
      { text: "electron shells", img: "", correct: true },
      { text: "nucleons", img: "", correct: false },
      { text: "neutrons", img: "", correct: false }
    ]
  },
  {
    question: "The 25°C evaporation of a 100 cm³ solution of K₂CO₃ to dryness gave 14 g of the salt. What is the solubility of K₂CO₃ at 25°C? [K₂CO₃ = 138]",
    img: "",
    answers: [
      { text: "0.01 mol dm⁻³", img: "", correct: false },
      { text: "0.101 mol dm⁻³", img: "", correct: false },
      { text: "1.01 mol dm⁻³", img: "", correct: true },
      { text: "10.0 mol dm⁻³", img: "", correct: false }
    ]
  },
  {
    question: "Student X titrated 25 cm³ of Na₂CO₃ with 0.1 mol dm⁻³ HCl, using methyl orange as indicator. Student Y carried out the same exercise but used phenolphthalein as an indicator. Which of the following statements about the titration is true?",
    img: "",
    answers: [
      { text: "hydrogen chloride gas was released in both titrations", img: "", correct: false },
      { text: "the titer values obtained from the titration are equal", img: "", correct: false },
      { text: "the titer value obtained by X is twice that of Y", img: "", correct: true },
      { text: "the titer value obtained by Y is twice that of X", img: "", correct: false }
    ]
  },
  {
    question: "What is the concentration of a solution which contains 0.28 g of potassium hydroxide in 100 cm³ of solution [KOH = 56]?",
    img: "",
    answers: [
      { text: "0.01 mol dm⁻³", img: "", correct: false },
      { text: "0.05 mol dm⁻³", img: "", correct: true },
      { text: "0.10 mol dm⁻³", img: "", correct: false },
      { text: "0.50 mol dm⁻³", img: "", correct: false }
    ]
  },
  {
    question: "What is the empirical formula of a hydrocarbon containing 0.160 moles of carbon and 0.640 moles of hydrogen?",
    img: "",
    answers: [
      { text: "CH₂", img: "", correct: false },
      { text: "CH₃", img: "", correct: false },
      { text: "CH₄", img: "", correct: true },
      { text: "C₂H₄", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following species has the largest ionic radius?",
    img: "",
    answers: [
      { text: "S²⁻", img: "", correct: true },
      { text: "K⁺", img: "", correct: false },
      { text: "Cl⁻", img: "", correct: false },
      { text: "Ca²⁺", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following statements is correct about ionization energy?",
    img: "",
    answers: [
      { text: "decreases across the periods", img: "", correct: false },
      { text: "results in the formation of an anion", img: "", correct: false },
      { text: "causes metallic nuclei to disintegrate", img: "", correct: false },
      { text: "decreases down the group", img: "", correct: true }
    ]
  },
  {
    question: "Potassium trioxonitrate (V) can be obtained from its solution by",
    img: "",
    answers: [
      { text: "distillation", img: "", correct: false },
      { text: "evaporation", img: "", correct: false },
      { text: "crystallization", img: "", correct: true },
      { text: "filtration", img: "", correct: false }
    ]
  },
  {
    question: "An element, Q, contains 69% of ⁶³Q and 31% of ⁶⁵Q. What is the relative atomic mass of Q?",
    img: "",
    answers: [
      { text: "63.0", img: "", correct: false },
      { text: "63.6", img: "", correct: true },
      { text: "65.0", img: "", correct: false },
      { text: "69.0", img: "", correct: false }
    ]
  },
  {
    question: "The following ions have the same electron configuration except ⁸O, ¹²Mg, ¹³Al, ¹⁷Cl",
    img: "",
    answers: [
      { text: "Cl⁻", img: "", correct: true },
      { text: "O²⁻", img: "", correct: false },
      { text: "Mg²⁺", img: "", correct: false },
      { text: "Al³⁺", img: "", correct: false }
    ]
  },
  {
    question: "The region around the nucleus where electrons can be located is called",
    img: "",
    answers: [
      { text: "a spectra", img: "", correct: false },
      { text: "an orbital", img: "", correct: true },
      { text: "a quanta", img: "", correct: false },
      { text: "a field", img: "", correct: false }
    ]
  },
  {
    question: "Protons and electrons are called fundamental particles because they",
    img: "",
    answers: [
      { text: "are indivisible", img: "", correct: false },
      { text: "have different charges", img: "", correct: false },
      { text: "are the lightest particles", img: "", correct: false },
      { text: "are found in all matter", img: "", correct: true }
    ]
  },
  {
    question: "Consider the following energy profile diagram below and use it to answer questions 41 to 43. <br> The activation energy of the reaction is",
    img: "chemistry_2021_question_41-43_image.png",
    answers: [
      { text: "EA", img: "", correct: true },
      { text: "EB", img: "", correct: false },
      { text: "EC", img: "", correct: false },
      { text: "ED", img: "", correct: false }
    ]
  },
  {
    question: "Consider the following energy profile diagram below and use it to answer questions 41 to 43.<br> The enthalpy change of the reaction is [Image Missing]",
    img: "chemistry_2021_question_41-43_image.png",
    answers: [
      { text: "EA", img: "", correct: false },
      { text: "EB", img: "", correct: true },
      { text: "EC", img: "", correct: false },
      { text: "ED", img: "", correct: false }
    ]
  },
  {
    question: "Consider the following energy profile diagram below and use it to answer questions 41 to 43. <br> The energy profile diagram illustrates [Image Missing]",
    img: "chemistry_2021_question_41-43_image.png",
    answers: [
      { text: "an endothermic reaction", img: "", correct: false },
      { text: "an exothermic reaction", img: "", correct: true },
      { text: "a spontaneous reaction", img: "", correct: false },
      { text: "a redox reaction", img: "", correct: false }
    ]
  },
  {
    question: "How many molecules of oxygen would occupy a volume of 2.24 cm³ at s.t.p? [Molar volume = 22,400 cm³; Avogadro = 6.02×10²³]",
    img: "",
    answers: [
      { text: "3.01×10²⁰", img: "", correct: false },
      { text: "3.01×10²⁷", img: "", correct: false },
      { text: "6.02×10¹⁹", img: "", correct: true },
      { text: "6.02×10²⁷", img: "", correct: false }
    ]
  },
  {
    question: "The isotopes of neon are represented by the symbols ²⁰x Ne, ²¹y Ne, and ²²z Ne. The relationship between x, y, and z is",
    img: "",
    answers: [
      { text: "x > y > z", img: "", correct: false },
      { text: "x < y < z", img: "", correct: false },
      { text: "x = y = z", img: "", correct: true },
      { text: "x < z < y", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following pairs of molecules form hydrogen bonds?",
    img: "",
    answers: [
      { text: "C₂H₅OH and CH₃OH", img: "", correct: false },
      { text: "CH₃OH and H₂O", img: "", correct: true },
      { text: "H₂S and CH₄", img: "", correct: false },
      { text: "NH₃ and SO₂", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following statements about elements in Group VII is correct?",
    img: "",
    answers: [
      { text: "Br₂ will oxidize Cl⁻", img: "", correct: false },
      { text: "F₂ has the least tendency to be reduced", img: "", correct: false },
      { text: "Cl₂ will oxidize I⁻¹", img: "", correct: true },
      { text: "I₂ is a stronger oxidizing agent than F₂", img: "", correct: false }
    ]
  },
  {
    question: "Electrovalent compounds normally",
    img: "",
    answers: [
      { text: "have low boiling points", img: "", correct: false },
      { text: "have mobile electrons", img: "", correct: false },
      { text: "conduct electricity in the solid state", img: "", correct: false },
      { text: "dissolve in polar solvent", img: "", correct: true }
    ]
  },
  {
    question: "A coordinate covalent bond could be formed between",
    img: "",
    answers: [
      { text: "NH₃ and PCl₃", img: "", correct: false },
      { text: "BCl₃ and AlCl₃", img: "", correct: false },
      { text: "BCl₃ and NH₃", img: "", correct: true },
      { text: "H⁺ and AlCl₃", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following scientists discovered the electrons?",
    img: "",
    answers: [
      { text: "Joseph J. Thompson", img: "", correct: true },
      { text: "James Chadwick", img: "", correct: false },
      { text: "Amedeo Avogadro", img: "", correct: false },
      { text: "Ernest Rutherford", img: "", correct: false }
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