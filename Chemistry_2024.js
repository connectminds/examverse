const questions = [
  {
    question: "Which of the following gases could be collected by downward displacement of air?",
    answers: [
      { text: "Chlorine", correct: false },
      { text: "Hydrogen", correct: true },
      { text: "Hydrogen chloride", correct: false },
      { text: "Sulphur(IV) oxide", correct: false }
    ]
  },
  {
    question: "Which of the following substances has the lowest boiling point?",
    answers: [
      { text: "Aqueous sodium chloride", correct: false },
      { text: "Ethanol", correct: false },
      { text: "Tetrachloromethane", correct: true },
      { text: "Water", correct: false }
    ]
  },
  {
    question: "The branch of science that deals with the nature and properties of substances and how one substance can be converted to another is known as",
    answers: [
      { text: "Biology", correct: false },
      { text: "Chemistry", correct: true },
      { text: "Geography", correct: false },
      { text: "Physics", correct: false }
    ]
  },
  {
    question: "The electron configuration 1s² 2s² 2pₓ² contravenes the",
    answers: [
      { text: "Pauli's exclusion principle", correct: false },
      { text: "Aufbau's principle", correct: false },
      { text: "Octet rule", correct: false },
      { text: "Hund's rule", correct: true }
    ]
  },
  {
    question: "The oxidation number of Chromium in Na₂Cr₂O₇ is",
    answers: [
      { text: "+2", correct: false },
      { text: "+6", correct: true },
      { text: "+7", correct: false },
      { text: "+12", correct: false }
    ]
  },
  {
    question: "The most important ore of aluminium is",
    answers: [
      { text: "Bauxite", correct: true },
      { text: "Haematite", correct: false },
      { text: "Magnetite", correct: false },
      { text: "Monazite", correct: false }
    ]
  },
  {
    question: "Bases normally",
    answers: [
      { text: "are corrosive", correct: false },
      { text: "turn litmus paper from blue to red", correct: false },
      { text: "turn litmus paper from red to blue", correct: true },
      { text: "are non-metal oxides", correct: false }
    ]
  },
  {
    question: "The product formed when concentrated sodium chloride solution is electrolysed using carbon electrodes is",
    answers: [
      { text: "Chloride water", correct: false },
      { text: "Hydrochloric acid", correct: false },
      { text: "Sodium hydroxide", correct: true },
      { text: "Sodium oxochlorate(I)", correct: false }
    ]
  },
  {
    question: "The product of the reaction between ethanol and excess acidified K₂Cr₂O₇ is",
    answers: [
      { text: "CH₂=CH₂", correct: false },
      { text: "CH₃OCH₃", correct: false },
      { text: "CH₃COOH", correct: true },
      { text: "CH₃CH₃", correct: false }
    ]
  },
  {
    question: "Which of the following statements about ammonium salt is correct? It",
    answers: [
      { text: "dissolves in water to form solution of pH > 1", correct: false },
      { text: "dissolves in water to form solution of pH < 7", correct: true },
      { text: "does not decompose on heating", correct: false },
      { text: "is insoluble in water", correct: false }
    ]
  },
  {
    question: "Ethanedioic acid is an organic solid that can be purified by",
    answers: [
      { text: "Decantation", correct: false },
      { text: "Distillation", correct: false },
      { text: "Crystallization", correct: true },
      { text: "Filtration", correct: false }
    ]
  },
  {
    question: "Which of the following functional groups is present in alkanoic acid?",
    answers: [
      { text: "–COOH", correct: true },
      { text: "–OH", correct: false },
      { text: "–COOR", correct: false },
      { text: "–CHO", correct: false }
    ]
  },
  {
    question: "In ethanol, the attractive forces between adjacent molecules are",
    answers: [
      { text: "Covalent bonds only", correct: false },
      { text: "Hydrogen bonds only", correct: false },
      { text: "Hydrogen bonding and Van der Waals’ forces", correct: true },
      { text: "Van der Waals’ forces only", correct: false }
    ]
  },
  {
    question: "At 25°C, the saturated solution of a salt in water was found to contain 0.24 g of the salt in 100 cm³. What is the solubility of the salt in g dm⁻³?",
    answers: [
      { text: "0.024", correct: false },
      { text: "0.240", correct: false },
      { text: "2.40", correct: true },
      { text: "24.0", correct: false }
    ]
  },
  {
    question: "The reaction represented by the equation: Ni²⁺(aq) + Fe(s) → Ni(s) + Fe²⁺(aq) is a redox reaction because",
    answers: [
      { text: "Ni²⁺ ions are oxidized and Fe acts as an oxidizing agent", correct: false },
      { text: "Ni²⁺ ions are oxidized and Fe acts as a reducing agent", correct: false },
      { text: "Ni²⁺ ions are reduced and Fe acts as an oxidizing agent", correct: false },
      { text: "Ni²⁺ ions are reduced and Fe acts as a reducing agent", correct: true }
    ]
  },
  {
    question: "Which of the following statements describes transition elements? They",
    answers: [
      { text: "are very reactive", correct: false },
      { text: "have low melting points", correct: false },
      { text: "possess variable oxidation states", correct: true },
      { text: "form colourless salts", correct: false }
    ]
  },
  {
    question: "Aluminium is suitable for making alloys for aircraft construction because it",
    answers: [
      { text: "is hard and brittle", correct: false },
      { text: "is light and very resistant to corrosion", correct: true },
      { text: "has high density and is a non-conductor of electricity", correct: false },
      { text: "is amphoteric and allotropic", correct: false }
    ]
  },
  {
    question: "Which of the following arrangements of elements is in order of increasing ionization energy?",
    answers: [
      { text: "Si, Al, S, P", correct: false },
      { text: "S, P, Si, Al", correct: false },
      { text: "Al, Si, P, S", correct: true },
      { text: "P, Si, S, Al", correct: false }
    ]
  },
  {
    question: "If 0.1 mole of C₃H₈ was completely burnt, what volume of CO₂ would be produced at STP? (Equation: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O)",
    answers: [
      { text: "6.72 dm³", correct: true },
      { text: "2.24 dm³", correct: false },
      { text: "0.30 dm³", correct: false },
      { text: "0.10 dm³", correct: false }
    ]
  },
  {
    question: "Naturally occurring boron is made up of 19.9% ¹⁰B and 80.1% ¹¹B. The relative atomic mass of boron is",
    answers: [
      { text: "21.0", correct: false },
      { text: "10.8", correct: true },
      { text: "10.5", correct: false },
      { text: "10.0", correct: false }
    ]
  },
  {
    question: "The number of shared pairs of electrons in a molecule of methane is",
    answers: [
      { text: "2", correct: false },
      { text: "4", correct: true },
      { text: "6", correct: false },
      { text: "8", correct: false }
    ]
  },
  {
    question: "Isotopes of the same element have similar chemical properties because they have the same number of",
    answers: [
      { text: "Nuclides", correct: false },
      { text: "Protons", correct: true },
      { text: "Neutrons", correct: false },
      { text: "Atoms", correct: false }
    ]
  },
  {
    question: "Which of the following household liquids would be effective in treating someone with too much acid in the stomach?",
    answers: [
      { text: "Strong salt solution with pH 7.0", correct: false },
      { text: "Tomato juice with pH 4.1", correct: false },
      { text: "Milk of magnesia with pH 10.5", correct: true },
      { text: "Black coffee with pH 5.0", correct: false }
    ]
  },
  {
    question: "The percentage by mass of oxygen in MgSO₄·7H₂O is [Mr = 246]",
    answers: [
      { text: "26.0%", correct: false },
      { text: "45.5%", correct: false },
      { text: "71.5%", correct: true },
      { text: "84.0%", correct: false }
    ]
  },
  {
    question: "Catalysts alter reaction rates by",
    answers: [
      { text: "providing an alternative reaction pathway", correct: true },
      { text: "lowering the energy of reaction", correct: false },
      { text: "increasing the surface area of reactants", correct: false },
      { text: "aligning the reactant molecules properly", correct: false }
    ]
  },
  {
    question: "Ethane of volume 400 cm³ was completely burnt in excess oxygen. Calculate the volume of steam that would be produced.",
    answers: [
      { text: "200 cm³", correct: false },
      { text: "400 cm³", correct: false },
      { text: "600 cm³", correct: false },
      { text: "1200 cm³", correct: true }
    ]
  },
  {
    question: "A saturated solution at 300°C will normally produce crystals at a temperature of",
    answers: [
      { text: "500°C", correct: false },
      { text: "400°C", correct: false },
      { text: "350°C", correct: false },
      { text: "200°C", correct: true }
    ]
  },
  {
    question: "The following organic compounds are polymers except",
    answers: [
      { text: "rubber", correct: false },
      { text: "starch", correct: false },
      { text: "proteins", correct: false },
      { text: "fats", correct: true }
    ]
  },
  {
    question: "According to the collision theory, which of the following conditions is NOT required for two molecules to react?",
    answers: [
      { text: "come into contact without loss of energy on colliding", correct: true },
      { text: "collide with enough energy to overcome activation energy", correct: false },
      { text: "collide in an orientation that makes product possible", correct: false },
      { text: "possess enough speed to overcome intermolecular forces", correct: false }
    ]
  },
  {
    question: "A weak acid is one which",
    answers: [
      { text: "is not corrosive", correct: false },
      { text: "completely ionizes in water", correct: false },
      { text: "does not produce salt with alkali", correct: false },
      { text: "slightly ionizes in water", correct: true }
    ]
  },
  {
    question: "Which of the following conditions are necessary for the preparation of alkanoates from alkanols and alkanoic acid?",
    answers: [
      { text: "Water and NaOH", correct: false },
      { text: "Conc. H₂SO₄ and heat", correct: true },
      { text: "NaOH and heat", correct: false },
      { text: "Water and aqueous HCl", correct: false }
    ]
  },
  {
    question: "The volume of 22g of CO₂ at STP is equivalent to",
    answers: [
      { text: "22.0 dm³", correct: false },
      { text: "22.4 dm³", correct: false },
      { text: "11.2 dm³", correct: true },
      { text: "5.6 dm³", correct: false }
    ]
  },
  {
    question: "Pairs of outermost shell electrons which are not used in bonding are",
    answers: [
      { text: "lone pairs", correct: true },
      { text: "bonding pairs", correct: false },
      { text: "valence electrons", correct: false },
      { text: "electrovalent electrons", correct: false }
    ]
  },
  {
    question: "8X²⁻ and 10Y are",
    answers: [
      { text: "isomers", correct: false },
      { text: "isotopes", correct: false },
      { text: "allotropes", correct: false },
      { text: "isoelectronic", correct: true }
    ]
  },
  {
    question: "Pure water contaminated with quicklime will have a pH of",
    answers: [
      { text: "1", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: true }
    ]
  },
  {
    question: "The electron configuration of ²⁹Cu is",
    answers: [
      { text: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d¹⁰", correct: true },
      { text: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s³ 3d⁹", correct: false },
      { text: "1s² 2s² 2p⁵ 3s² 3p⁶ 4s² 3d¹⁰", correct: false },
      { text: "1s² 2s² 2p⁶ 3s² 3p² 4s¹ 3d¹⁰", correct: false }
    ]
  },
  {
    question: "When s and p block elements react, the bond formed is",
    answers: [
      { text: "electrovalent", correct: true },
      { text: "covalent", correct: false },
      { text: "metallic", correct: false },
      { text: "dative-covalent", correct: false }
    ]
  },
  {
    question: "The hardest form of carbon is",
    answers: [
      { text: "charcoal", correct: false },
      { text: "coke", correct: false },
      { text: "diamond", correct: true },
      { text: "graphite", correct: false }
    ]
  },
  {
    question: "The metallic bonding in aluminium is strong because of large number of",
    answers: [
      { text: "delocalized electrons", correct: false },
      { text: "immobile electrons", correct: false },
      { text: "lone pair electrons", correct: false },
      { text: "valence electrons", correct: true }
    ]
  },
  {
    question: "How many covalent bonds are formed by nitrogen?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "4", correct: false }
    ]
  },
  {
    question: "When an element exists in two or more forms in the same physical state, it exhibits",
    answers: [
      { text: "isotopy", correct: false },
      { text: "allotropy", correct: true },
      { text: "isobars", correct: false },
      { text: "isomerism", correct: false }
    ]
  },
  {
    question: "An atom of an element in the ground state contains 8 valence electrons. The element is considered as a",
    answers: [
      { text: "metal", correct: false },
      { text: "semi-metal", correct: false },
      { text: "noble gas", correct: true },
      { text: "halogen", correct: false }
    ]
  },
  {
    question: "The main function of limestone in the blast furnace during the extraction of iron is to",
    answers: [
      { text: "act as catalyst", correct: false },
      { text: "remove impurities", correct: true },
      { text: "act as a reducing agent", correct: false },
      { text: "supply carbon(IV) oxide", correct: false }
    ]
  },
  {
    question: "Which of the following is a monomer of polythene?",
    answers: [
      { text: "Ethanol", correct: false },
      { text: "Vinyl chloride", correct: false },
      { text: "Ethene", correct: true },
      { text: "Ethane", correct: false }
    ]
  },
  {
    question: "Which of the following compounds is formed by the oxidation of ethanol?",
    answers: [
      { text: "C₂H₄CO₂H", correct: false },
      { text: "C₂H₅OH", correct: false },
      { text: "CH₃OH", correct: false },
      { text: "CH₃CO₂H", correct: true }
    ]
  },
  {
    question: "Tetraoxosulphate(VI) acid is considered as a heavy chemical because",
    answers: [
      { text: "its relative molecular mass is high", correct: false },
      { text: "a high tonnage is produced every year", correct: true },
      { text: "it is an inorganic chemical", correct: false },
      { text: "it is used to manufacture heavy chemicals", correct: false }
    ]
  },
  {
    question: "How many isomers can be formed from a compound with molecular formula C₅H₁₂?",
    answers: [
      { text: "One", correct: false },
      { text: "Two", correct: false },
      { text: "Three", correct: true },
      { text: "Four", correct: false }
    ]
  },
  {
    question: "The oxidation number of iron in its free state is",
    answers: [
      { text: "0", correct: true },
      { text: "+1", correct: false },
      { text: "+2", correct: false },
      { text: "+3", correct: false }
    ]
  },
  {
    question: "Water pipes are produced from",
    answers: [
      { text: "polyethene", correct: false },
      { text: "Perspex", correct: false },
      { text: "polystyrene", correct: false },
      { text: "polyvinyl chloride", correct: true }
    ]
  },
  {
    question: "Consider the reaction: xAl + yCl₂ → zAlCl₃. The values of x, y, z are:",
    answers: [
      { text: "2, 3 and 2", correct: true },
      { text: "2, 2 and 3", correct: false },
      { text: "1, 2 and 1", correct: false },
      { text: "1, 1 and 1", correct: false }
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

function generateReviewSection() {
  // Remove existing review if any
  const oldReview = document.querySelector('.review-container');
  if(oldReview) oldReview.remove();

  if (missedQuestions.length === 0) return; // Perfect score, nothing to show

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

  // Insert before the Restart button
  resultSection.insertBefore(reviewContainer, restartBtn);
}

// Restart quiz
restartBtn.addEventListener("click", startQuiz);

// Initialize app
startQuiz();