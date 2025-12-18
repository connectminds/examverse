const questions = [
  {
    question: "Which of the following laws or theory cannot be explained by the application of the kinetic theory of gases?",
    answers: [
      { text: "Dalton's atomic theory", correct: true },
      { text: "Charles' law", correct: false },
      { text: "Gay-lussac's law", correct: false },
      { text: "Boyle's law", correct: false }
    ]
  },
  {
    question: "The primary component of natural gas is",
    answers: [
      { text: "Butane", correct: false },
      { text: "Ethane", correct: false },
      { text: "Methane", correct: true },
      { text: "Propane", correct: false }
    ]
  },
  {
    question: "Thermal cracking of alkanes usually",
    answers: [
      { text: "Involves decomposition", correct: true },
      { text: "Is an exothermic process", correct: false },
      { text: "Produces only small alkanes", correct: false },
      { text: "Requires hydrogen", correct: false }
    ]
  },
  {
    question: "Carbon is deposited in the exhaust pipes of cars because of",
    answers: [
      { text: "Contamination of petrol with diesel", correct: false },
      { text: "Presence of carbon petrol", correct: false },
      { text: "Presence of additives in petrol", correct: false },
      { text: "Incomplete combustion of petrol", correct: true }
    ]
  },
  {
    question: "How many moles of copper would be deposited by passing 1 Faraday of electricity through a CuCl₂ solution?",
    answers: [
      { text: "2", correct: false },
      { text: "1", correct: false },
      { text: "0.5", correct: true },
      { text: "0.25", correct: false }
    ]
  },
  {
    question: "Alkenes can be manufactured by",
    answers: [
      { text: "Addition of hydrogen to unsaturated vegetable oils", correct: false },
      { text: "The cracking of hydrocarbons", correct: true },
      { text: "Polymerization reactions", correct: false },
      { text: "The combustion of alkanes", correct: false }
    ]
  },
  {
    question: "Petrochemistry is an example of",
    answers: [
      { text: "Pure chemistry", correct: false },
      { text: "Applied chemistry", correct: true },
      { text: "Biochemistry", correct: false },
      { text: "Environmental chemistry", correct: false }
    ]
  },
  {
    question: "Species that occur in a reaction pathway but not in the overall reaction are known as",
    answers: [
      { text: "Products", correct: false },
      { text: "Inhibitors", correct: false },
      { text: "Reactants", correct: false },
      { text: "Intermediates", correct: true }
    ]
  },
  {
    question: "Which of the following statements is correct?",
    answers: [
      { text: "An alkane with 49 carbon atoms contains 100 hydrogen atoms", correct: true },
      { text: "Addition reactions occur between alkanes and chlorine", correct: false },
      { text: "Butane has a lower boiling point than propane", correct: false },
      { text: "Pentane has five isomers", correct: false }
    ]
  },
  {
    question: "The best indicator to use for the titration of ethanoic acid with sodium hydroxide is",
    answers: [
      { text: "Methyl red", correct: false },
      { text: "Methyl orange", correct: false },
      { text: "Phenolphthalein", correct: true },
      { text: "Screened methyl orange", correct: false }
    ]
  },
  {
    question: "The reduction half-equation of Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s) is",
    answers: [
      { text: "CuSO₄(s) + H₂O → Cu²⁺ + SO₄²⁻", correct: false },
      { text: "Cu²⁺ + 2e⁻ → Cu(s)", correct: true },
      { text: "Cu²⁺ + e⁻ → Cu(s)", correct: false },
      { text: "Zn(s) → Zn²⁺ + 2e⁻", correct: false }
    ]
  },
  {
    question: "If 100 cm³ of a saturated solution of sodium tetraoxosulphate (VI) at 30°C contains 10.5 g of the salt, what would be its solubility at this temperature? [Na₂SO₄ = 142]",
    answers: [
      { text: "0.57 mol dm⁻³", correct: false },
      { text: "0.60 mol dm⁻³", correct: false },
      { text: "0.74 mol dm⁻³", correct: true },
      { text: "2.15 mol dm⁻³", correct: false }
    ]
  },
  {
    question: "An example of a crystalline substance that does not possess water of crystallization is",
    answers: [
      { text: "Potassium trioxonitrate", correct: true },
      { text: "Sodium trioxocarbonate (IV)", correct: false },
      { text: "Iron (II) tetraoxosulphate (VI)", correct: false },
      { text: "Sodium tetraoxosulphate (VI)", correct: false }
    ]
  },
  {
    question: "The salt solution formed from a reaction between ethanoic acid and sodium hydroxide would be",
    answers: [
      { text: "Basic", correct: true },
      { text: "Acidic", correct: false },
      { text: "Neutral", correct: false },
      { text: "Amphoteric", correct: false }
    ]
  },
  {
    question: "Which of the following reactions represents the hydrolysis of an alkanoate?",
    answers: [
      { text: "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O", correct: false },
      { text: "CH₃COOC₂H₅ + H₂O ⇌ CH₃COO⁻ + CH₃CH₂OH", correct: false },
      { text: "CH₃COOCH₂CH₃ + H₂O ⇌ CH₃COOH + CH₃CH₂OH", correct: true },
      { text: "CH₃COOH + OH⁻ ⇌ CH₃COO⁻ + H₂O", correct: false }
    ]
  },
  {
    question: "Which of the following statements about the collision theory is correct?",
    answers: [
      { text: "All collisions bring about reactions", correct: false },
      { text: "Rate of reaction is proportional to the number of effective collisions", correct: true },
      { text: "Collision of molecules will split the molecules", correct: false },
      { text: "Ineffective collision brings about reaction", correct: false }
    ]
  },
  {
    question: "Why are H₂SO₄ and CaCl₂ not suitable for drying ammonia gas? They",
    answers: [
      { text: "Are corrosive", correct: false },
      { text: "Are poisonous", correct: false },
      { text: "React with the gas", correct: true },
      { text: "Pollute the gas", correct: false }
    ]
  },
  {
    question: "Which of the following equations does not correctly illustrate a reaction of chlorine?",
    answers: [
      { text: "H₂S + Cl₂ → 2HCl + S", correct: false },
      { text: "Cl₂ + 2NaOH → NaCl + NaClO + H₂O", correct: false },
      { text: "Cl₂ + 2NaF → 2NaCl + F₂", correct: true },
      { text: "Ca(OH)₂ + Cl₂ → CaOCl₂ + H₂O", correct: false }
    ]
  },
  {
    question: "How many unpaired electrons are present in ²⁶Fe³⁺?",
    answers: [
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: true }
    ]
  },
  {
    question: "Going down Group II in the periodic table normally",
    answers: [
      { text: "Shielding effect decreases", correct: false },
      { text: "Melting point increases", correct: false },
      { text: "Ionization energy increases", correct: true },
      { text: "Electronegativity increases", correct: false }
    ]
  },
  {
    question: "Which of the following elements has its valence electrons in the s-orbital?",
    answers: [
      { text: "Sodium", correct: true },
      { text: "Carbon", correct: false },
      { text: "Phosphorus", correct: false },
      { text: "Aluminium", correct: false }
    ]
  },
  {
    question: "The periodic property used to determine whether a covalent molecule is polar or not is",
    answers: [
      { text: "Atomic radius", correct: false },
      { text: "Electron affinity", correct: false },
      { text: "Electronegativity", correct: true },
      { text: "Ionization energy", correct: false }
    ]
  },
  {
    question: "The following steps are scientific methods except",
    answers: [
      { text: "Analysis", correct: false },
      { text: "Open-mindedness", correct: true },
      { text: "Experimentation", correct: false },
      { text: "Problem identification", correct: false }
    ]
  },
  {
    question: "Isoelectronic species have the same number of",
    answers: [
      { text: "Electrons", correct: true },
      { text: "Neutrons", correct: false },
      { text: "Protons", correct: false },
      { text: "Ions", correct: false }
    ]
  },
  {
    question: "An element X has two isotopes, ³⁰₆₅X and ³⁰₆₆X with relative abundance of 60% and 40% respectively. The relative atomic mass of X is",
    answers: [
      { text: "65.00", correct: false },
      { text: "65.40", correct: true },
      { text: "65.50", correct: false },
      { text: "66.00", correct: false }
    ]
  },
  {
    question: "The pair of compounds that belongs to the same homologous series is",
    answers: [
      { text: "C₃H₈ and C₃H₆", correct: false },
      { text: "C₄H₁₀ and C₅H₁₀", correct: false },
      { text: "C₂H₄ and C₄H₁₀", correct: false },
      { text: "C₂H₆ and C₄H₁₀", correct: true }
    ]
  },
  {
    question: "A consequence of global warming is",
    answers: [
      { text: "Flooding", correct: true },
      { text: "Water pollution", correct: false },
      { text: "Air pollution", correct: false },
      { text: "High humidity", correct: false }
    ]
  },
  {
    question: "Which of the following gases has the lowest rate of diffusion? [H=1, C=12, N=14, O=16]",
    answers: [
      { text: "Nitrogen", correct: false },
      { text: "Ammonia", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Methane", correct: false }
    ]
  },
  {
    question: "The gas that is less dense than air is",
    answers: [
      { text: "Carbon (IV) oxide", correct: false },
      { text: "Nitrogen", correct: true },
      { text: "Chlorine", correct: false },
      { text: "Oxygen", correct: false }
    ]
  },
  {
    question: "Which of the following equimolar solutions has the highest conductivity?",
    answers: [
      { text: "H₂CO₃(aq)", correct: false },
      { text: "H₂SO₄(aq)", correct: true },
      { text: "NaOH(aq)", correct: false },
      { text: "CH₃COONa(aq)", correct: false }
    ]
  },
  {
    question: "What takes place at the cathode during electrolysis?",
    answers: [
      { text: "Anions lose electrons", correct: false },
      { text: "Anions are oxidized", correct: false },
      { text: "Cations are discharged", correct: true },
      { text: "Cations are oxidized", correct: false }
    ]
  },
  {
    question: "How many grams of NaOH(s) would be needed to produce 100 cm³ of a 0.20 mol dm⁻³ NaOH(aq)? [NaOH = 40.0]",
    answers: [
      { text: "0.02 g", correct: false },
      { text: "0.80 g", correct: true },
      { text: "20.0 g", correct: false },
      { text: "800.0 g", correct: false }
    ]
  },
  {
    question: "The formation of a bond between hydrogen and a highly electronegative atom results in",
    answers: [
      { text: "Polarity", correct: true },
      { text: "Dipole", correct: false },
      { text: "Metallic bond", correct: false },
      { text: "Electrovalent bond", correct: false }
    ]
  },
  {
    question: "The molecule that has a non-polar covalent bond is",
    answers: [
      { text: "H₂O", correct: false },
      { text: "HCl", correct: false },
      { text: "NH₃", correct: false },
      { text: "Cl₂", correct: true }
    ]
  },
  {
    // -------------------------------------------------------------------------
    // QUESTION 35 UPDATED WITH TABLE
    // -------------------------------------------------------------------------
    question: `Which of the elements in the table below would react more readily with chlorine? <br><br>
    <table border="1" style="width:100%; max-width:400px; text-align:center; border-collapse:collapse; margin-top:10px;">
      <tr style="background-color:#f0f0f0;">
        <th>Element</th>
        <th>Ionization energy<br>(kJ mol⁻¹)</th>
      </tr>
      <tr><td>W</td><td>12.0</td></tr>
      <tr><td>X</td><td>21.0</td></tr>
      <tr><td>Y</td><td>106.0</td></tr>
      <tr><td>Z</td><td>200.0</td></tr>
    </table>`,
    answers: [
      { text: "W and X only", correct: true },
      { text: "W and Z only", correct: false },
      { text: "X and Z only", correct: false },
      { text: "Y and Z only", correct: false }
    ]
  },
  {
    question: "The relative molar mass of a gaseous hydrocarbon is 30. Determine its vapour density.",
    answers: [
      { text: "15", correct: true },
      { text: "30", correct: false },
      { text: "60", correct: false },
      { text: "45", correct: false }
    ]
  },
  {
    question: "Consider the reaction: 2SO₃(g) → 2SO₂(g) + O₂(g), ΔH = +198 kJ mol⁻¹ Which of the following statements about the reaction is correct?",
    answers: [
      { text: "The reaction is exothermic", correct: false },
      { text: "The container would feel warm", correct: false },
      { text: "198 kJ of energy is given off", correct: false },
      { text: "198 kJ of energy is absorbed", correct: true }
    ]
  },
  {
    question: "Which of the following properties does not give evidence of the kinetic theory of matter?",
    answers: [
      { text: "Evaporation", correct: false },
      { text: "Diffusion", correct: false },
      { text: "Polymerization", correct: true },
      { text: "Melting", correct: false }
    ]
  },
  {
    question: "A compound that could be dried by using conc. tetraoxosulphate (VI) acid and not by calcium oxide is likely to be",
    answers: [
      { text: "An alkaline gas", correct: false },
      { text: "A neutral salt", correct: false },
      { text: "A deliquescent salt", correct: false },
      { text: "An acid anhydride", correct: true }
    ]
  },
  {
    question: "Positive ions in a sea of electrons are found in",
    answers: [
      { text: "Covalent bonds", correct: false },
      { text: "Dative bonds", correct: false },
      { text: "Ionic bonds", correct: false },
      { text: "Metallic bonds", correct: true }
    ]
  },
  {
    question: "Dilute trioxonitrate (V) acid does not produce hydrogen when it reacts with metals because",
    answers: [
      { text: "It is a strong oxidizing agent", correct: true },
      { text: "It reacts with the product", correct: false },
      { text: "There is no visible reaction", correct: false },
      { text: "It is highly corrosive", correct: false }
    ]
  },
  {
    question: "How many moles are there in 3.0 g of O₃? [O = 16]",
    answers: [
      { text: "0.0093", correct: false },
      { text: "0.0930", correct: false },
      { text: "0.6250", correct: false },
      { text: "0.0625", correct: true }
    ]
  },
  {
    question: "Copper (II) ions are able to participate in coordinate covalent bonding because they",
    answers: [
      { text: "Are coloured", correct: false },
      { text: "Have unpaired electrons", correct: false },
      { text: "Have vacant d-orbital", correct: true },
      { text: "Are positively charged", correct: false }
    ]
  },
  {
    question: "Determine the volume of 0.100 mol of HCl in 0.250 mol dm⁻³ solution.",
    answers: [
      { text: "20 cm³", correct: false },
      { text: "100 cm³", correct: false },
      { text: "200 cm³", correct: false },
      { text: "400 cm³", correct: true }
    ]
  },
  {
    question: "Which of the statements about gases is not correct?",
    answers: [
      { text: "The total kinetic energy of the gas is not affected by collision", correct: false },
      { text: "Molecules of the gas are in constant motion", correct: false },
      { text: "Gases have low densities compared to solids and liquids of equal mass", correct: false },
      { text: "Gases are highly soluble in water at high temperatures", correct: true }
    ]
  },
  {
    question: "Arrange the following compounds in decreasing order of their boiling points: NH₃, HF, SiH₄, CH₄",
    answers: [
      { text: "NH₃, CH₄, SiH₄, HF", correct: false },
      { text: "CH₃, SiH₄", correct: false },
      { text: "HF, NH₃, SiH₄, CH₄", correct: true },
      { text: "CH₄, SiH₄, HF, NH₃", correct: false }
    ]
  },
  {
    question: "The following statements are correct except",
    answers: [
      { text: "Energy is released when liquids change to solids", correct: false },
      { text: "Particles move faster in the gaseous state than in the liquid state", correct: false },
      { text: "Carbon atoms in gaseous methane are further apart than those in solid diamond", correct: false },
      { text: "There is large decrease in the volume of a solid metal when pressure is applied", correct: true }
    ]
  },
  {
    question: "The vapour density of an organic compound with molecular formula C₄H₄O₂ is [H=1, C=12, O=16]",
    answers: [
      { text: "120", correct: false },
      { text: "65", correct: false },
      { text: "40", correct: false },
      { text: "30", correct: true }
    ]
  },
  {
    question: "A mixture containing two salts of different solubility can be separated by",
    answers: [
      { text: "Chromatography", correct: false },
      { text: "Distillation", correct: false },
      { text: "Crystallization", correct: true },
      { text: "Evaporation", correct: false }
    ]
  },
  {
    question: "The separation technique suitable for separating iodine from tetrachloromethane is",
    answers: [
      { text: "Solvent extraction", correct: true },
      { text: "Fractional distillation", correct: false },
      { text: "Decantation", correct: false },
      { text: "Filtration", correct: false }
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