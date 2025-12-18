const questions = [
  {
    question: "The by-product of fermentation of sugar is",
    answers: [
      { text: "Carbon (IV) oxide", correct: true },
      { text: "Ethanoic acid", correct: false },
      { text: "Propanol", correct: false },
      { text: "Propan-1,2, 3-triol", correct: false }
    ]
  },
  {
    question: "Which of the following sugars is a product of the condensation of monosaccharides?",
    answers: [
      { text: "Galactose", correct: false },
      { text: "Maltose", correct: true },
      { text: "Glucose", correct: false },
      { text: "Fructose", correct: false }
    ]
  },
  {
    question: "The cleansing effect of soap is low in acidic water because of",
    answers: [
      { text: "The formation of unionized fatty acid", correct: true },
      { text: "Increase in the PH of the soap molecules", correct: false },
      { text: "Anti-biodegradable effect of hydrogen ions", correct: false },
      { text: "The hardness of the acidic water", correct: false }
    ]
  },
  {
    question: "The following compounds are condensation polymers except",
    answers: [
      { text: "Nylon", correct: false },
      { text: "Protein", correct: false },
      { text: "Starch", correct: false },
      { text: "Polyethene", correct: true }
    ]
  },
  {
    question: "What amount of electricity is required to deposit one mole of aluminium from a solution of AlCl₃?",
    answers: [
      { text: "One faraday", correct: false },
      { text: "One ampere", correct: false },
      { text: "Three faradays", correct: true },
      { text: "Three amperes", correct: false }
    ]
  },
  {
    question: "Which of the following compounds would react rapidly with bromine?",
    answers: [
      { text: "Benzene", correct: false },
      { text: "Hexane", correct: false },
      { text: "Hexene", correct: true },
      { text: "Hexanol", correct: false }
    ]
  },
  {
    question: "Alkanols can be manufactured from alkenes by the initial reaction of alkenes with",
    answers: [
      { text: "Bromine in tetrachloromethane", correct: false },
      { text: "Concentrated tetraoxosulphate (VI) acid", correct: true },
      { text: "Aqueous potassium tetraoxomanganate (VII)", correct: false },
      { text: "Sodium hydroxide solution", correct: false }
    ]
  },
  {
    question: "Which of the following statements about the standard hydrogen electrode is not correct?",
    answers: [
      { text: "The hydrogen gas is at a pressure of 1 atmosphere", correct: false },
      { text: "A solution containing 1 mol dm⁻³ of H⁺(aq) ions is used", correct: false },
      { text: "A platinum electrode is used", correct: false },
      { text: "The temperature is kept at 20°C", correct: true }
    ]
  },
  {
    question: "If 60g of M combines with 24g of oxygen, what would the empirical formula of the oxide be? [O = 16.0, M = 120]",
    answers: [
      { text: "MO", correct: false },
      { text: "MO₂", correct: false },
      { text: "MO₃", correct: true },
      { text: "MO₄", correct: false }
    ]
  },
  {
    // -------------------------------------------------------------------------
    // QUESTION 10 UPDATED: Table Headers for Anode/Cathode
    // -------------------------------------------------------------------------
    question: `The products of the electrolysis of dilute sodium chloride using carbon electrodes are:<br><br>
    <table style="width:100%; text-align:center; font-weight:bold;">
      <tr>
        <td style="width:50%; border-bottom:1px solid #ccc;">Anode</td>
        <td style="width:50%; border-bottom:1px solid #ccc;">Cathode</td>
      </tr>
    </table>`,
    answers: [
      { text: "Chlorine and sodium", correct: false },
      { text: "Oxygen and hydrogen", correct: true }, // Correct for Dilute NaCl
      { text: "Chlorine and hydrogen", correct: false },
      { text: "Hydrogen and oxygen", correct: false }
    ]
  },
  {
    question: "Determine the quantity of electricity used when a current of 0.20 amperes is passed through an electrolytic cell for 60 minutes",
    answers: [
      { text: "12", correct: false },
      { text: "120", correct: false },
      { text: "360", correct: false },
      { text: "720", correct: true }
    ]
  },
  {
    question: "Oxochlorate (I) acid is used as a bleaching agent because it is",
    answers: [
      { text: "A weak acid", correct: false },
      { text: "A reducing agent", correct: false },
      { text: "An oxidizing agent", correct: true },
      { text: "A strong acid", correct: false }
    ]
  },
  {
    question: "The IUPAC name for CH₃CHCH₃CHClCHCH₃ is",
    answers: [
      { text: "2, 4-dimethyl-3-chlorohexane", correct: false },
      { text: "3, 5-dimethyl-4-chlorohexane", correct: false },
      { text: "4-chloro-3, 5-dimethylhexane", correct: true },
      { text: "3-chloro-2, 4-dimethylhexane", correct: false }
    ]
  },
  {
    question: "A colourless gas with a pungent smell is evolved when dilute hydrochloric acid is added to a sample of a salt. The gas evolved could turn",
    answers: [
      { text: "Acidified K₂Cr₂O₇ solution colourless", correct: false },
      { text: "Acidified KMnO₄", correct: true },
      { text: "Fe(NO₃)₂ solution green", correct: false },
      { text: "Pb(NO₃)₂ paper black", correct: false }
    ]
  },
  {
    question: "If 5.0g of marble reacts with 25.0 cm³ hydrochloric acid, which combination has the fastest reaction rate?",
    answers: [
      { text: "Marble chips and 2.0 mol dm⁻³ HCl(aq)", correct: false },
      { text: "Marble chips and 2.5 mol dm⁻³ HCl(aq)", correct: false },
      { text: "Powdered marble and 2.5 mol dm⁻³ HCl(aq)", correct: true },
      { text: "Powdered marble and 2.0 mol dm⁻³ HCl(aq)", correct: false }
    ]
  },
  {
    question: "Increasing the temperature generally",
    answers: [
      { text: "Decreases the solubility of a solid in a liquid but increases the solubility of a gas in a liquid", correct: false },
      { text: "Increases the solubility of a solid in a liquid but decreases the solubility of a gas in a liquid", correct: true },
      { text: "Increases the solubility of both a solid and a gas in a liquid", correct: false },
      { text: "Decreases the solubility of both a solid and a gas in a liquid", correct: false }
    ]
  },
  {
    question: "A white precipitate was formed when BaCl₂(aq) was added to an aqueous solution of salt X. The precipitate dissolved in dilute HCl with rapid effervescence. Salt X is likely to contain",
    answers: [
      { text: "SO₄²⁻ ions", correct: false },
      { text: "SO₃²⁻ ions", correct: true },
      { text: "NO₃⁻ ions", correct: false },
      { text: "CO₃²⁻ ions", correct: false }
    ]
  },
  {
    question: "Before a reaction could take place, there should be",
    answers: [
      { text: "Ionization of reactant particles", correct: false },
      { text: "Breakage of bonds of products", correct: false },
      { text: "Breakage of bonds of reactants", correct: true },
      { text: "Ionization of product particles", correct: false }
    ]
  },
  {
    question: "In the reaction CaO + SiO₂ → CaSiO₃, silicon (IV) oxide is acting as",
    answers: [
      { text: "A basic oxide", correct: false },
      { text: "A reducing agent", correct: false },
      { text: "An acidic oxide", correct: true },
      { text: "An oxidizing agent", correct: false }
    ]
  },
  {
    question: "Which of the following acids would form normal salt only?",
    answers: [
      { text: "Tetraoxosulphate (VI) acid", correct: false },
      { text: "Trioxonitrate (V) acid", correct: true },
      { text: "Tetraoxosulphate (V) acid", correct: false },
      { text: "Trioxosulphate (IV) acid", correct: false }
    ]
  },
  {
    question: "What is the partial pressure of oxygen at s.t.p in a gaseous mixture containing 100 cm³ of oxygen and 900 cm³ of other gases?",
    answers: [
      { text: "1.0 atm", correct: false },
      { text: "0.1 atm", correct: true },
      { text: "9.0 atm", correct: false },
      { text: "0.9 atm", correct: false }
    ]
  },
  {
    question: "Graphite is used as a dry lubricant due to the presence of",
    answers: [
      { text: "Mobile electrons", correct: false },
      { text: "Free electrons", correct: false },
      { text: "Octahedral structures", correct: false },
      { text: "Layered structures", correct: true }
    ]
  },
  {
    question: "Which of the following gases is alkaline?",
    answers: [
      { text: "NO₂", correct: false },
      { text: "CO₂", correct: false },
      { text: "NH₃", correct: true },
      { text: "N₂O", correct: false }
    ]
  },
  {
    question: "Which of the following statements about an equilibrium system is correct?",
    answers: [
      { text: "Forward and backward reactions occur at the same time", correct: true },
      { text: "The concentrations of reactants must equal that of the products", correct: false },
      { text: "The concentrations of reactants and products can be changed by adding a catalyst", correct: false },
      { text: "The concentrations of reactants and products are not affected by a change in temperature", correct: false }
    ]
  },
  {
    question: "In the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g); δH = −92 kJ, increasing the temperature would:",
    answers: [
      { text: "Shift the equilibrium to the right", correct: false },
      { text: "Increase the yield of ammonia", correct: false },
      { text: "Decrease the amount of hydrogen", correct: false },
      { text: "Decrease the yield of ammonia", correct: true }
    ]
  },
  {
    question: "When air in a syringe is compressed such that there is no change in temperature, the",
    answers: [
      { text: "Air liquefies", correct: false },
      { text: "Pressure increases", correct: true },
      { text: "Intermolecular space increases", correct: false },
      { text: "Density decreases", correct: false }
    ]
  },
  {
    question: "Which of the following statements about liquids is/are true?<br>I. Liquids maintain their volume at constant temperature<br>II. Liquids have fixed shape<br>III. Liquids do not diffuse<br>IV. Change in pressure affects volume of liquids",
    answers: [
      { text: "I only", correct: true },
      { text: "IV only", correct: false },
      { text: "I and IV only", correct: false },
      { text: "II and III only", correct: false }
    ]
  },
  {
    question: "A hydrogen chloride gas reacted with oxygen gas to yield water and chlorine gas. The mole ratio of hydrogen chloride gas to water is",
    answers: [
      { text: "1:3", correct: false },
      { text: "2:1", correct: true },
      { text: "3:1", correct: false },
      { text: "4:1", correct: false }
    ]
  },
  {
    question: "What number of moles of oxygen would exert a pressure of 10 atm at 320 K in an 8.2 dm³ cylinder? [R = 0.082 atm dm³ mol⁻¹ K⁻¹]",
    answers: [
      { text: "0.32", correct: false },
      { text: "1.52", correct: false },
      { text: "3.13", correct: true },
      { text: "31.25", correct: false }
    ]
  },
  {
    question: "If 50 cm³ of saturated solution of KNO₃ at 40°C contains...",
    answers: [
      { text: "1.0 mol dm⁻³", correct: false },
      { text: "1.5 mol dm⁻³", correct: false },
      { text: "2.0 mol dm⁻³", correct: true },
      { text: "5.0 mol dm⁻³", correct: false }
    ]
  },
  {
    question: "Which of the following elements would displace copper from a solution of copper ions?",
    answers: [
      { text: "Silver", correct: false },
      { text: "Gold", correct: false },
      { text: "Lead", correct: true },
      { text: "Mercury", correct: false }
    ]
  },
  {
    question: "What is the percentage composition of carbon in Ca(HCO₃)₂? [Ca = 40.0, O = 16.0, C = 12.0, H = 1.0]",
    answers: [
      { text: "22.2%", correct: false },
      { text: "14.8%", correct: true },
      { text: "1.4%", correct: false },
      { text: "3.7%", correct: false }
    ]
  },
  {
    question: "Which of the following bond types is intermolecular?",
    answers: [
      { text: "Covalent bond", correct: false },
      { text: "Hydrogen bond", correct: true },
      { text: "Ionic bond", correct: false },
      { text: "metallic bond", correct: false }
    ]
  },
  {
    question: "The maximum number of covalent bonds formed by nitrogen is",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: true }
    ]
  },
  {
    question: "The IUPAC name of the compound CH₃CH(CH₃)CHCH₂CH₃ is",
    answers: [
      { text: "2-methyl but-1-ene", correct: false },
      { text: "2-methyl but-2-ene", correct: false },
      { text: "3-methyl but-1-ene", correct: true },
      { text: "3-methyl but-2-ene", correct: false }
    ]
  },
  {
    question: "Ionization energy increases across the period in the periodic table because",
    answers: [
      { text: "Atomic number increases", correct: false },
      { text: "Effective nuclear charge increases", correct: true },
      { text: "Mass number decreases", correct: false },
      { text: "Screening effect decreases", correct: false }
    ]
  },
  {
    question: "Which of the following properties indicate that an element is a metal?<br>(I) reacts with oxygen to form an acidic oxide<br>(II) forms ionic chlorides<br>(III) has variable oxidation states<br>(IV) displaces hydrogen from dilute HCl",
    answers: [
      { text: "I and III only", correct: false },
      { text: "I and II only", correct: false },
      { text: "II and IV only", correct: true },
      { text: "I, II, III and IV", correct: false }
    ]
  },
  {
    question: "The electron configuration of carbon atom in its excited state is",
    answers: [
      { text: "1s²2s²2px²2py⁰", correct: false },
      { text: "1s²2s²2px¹2py¹", correct: false },
      { text: "1s²2s¹2px¹2py¹2pz¹", correct: true },
      { text: "1s¹2s²2px¹2py¹2pz¹", correct: false }
    ]
  },
  {
    question: "An oxide has the following properties:<br>(I) is a white powder<br>(II) Reacts with HCl<br>(III) Reacts with NaOH<br>(IV) is insoluble in water.<br>The oxide is",
    answers: [
      { text: "Alkaline", correct: false },
      { text: "Amphoteric", correct: true },
      { text: "Acidic", correct: false },
      { text: "Neutral", correct: false }
    ]
  },
  {
    question: "Which of the following statements about atoms of a metal is correct?",
    answers: [
      { text: "Readily accept electrons", correct: false },
      { text: "Are soft", correct: false },
      { text: "Are held together by covalent bond", correct: false },
      { text: "Are held together by a sea of electron cloud", correct: true }
    ]
  },
  {
   question: "Which of the following sketches is a graphical representation of Boyle's law?",
    answers: [
      { text: "", img: "chemistry_2022_question_41_option_a.jpg", correct: false }, // Text removed
      { text: "", img: "chemistry_2022_question_41_option_b.jpg", correct: false }, // Text removed
      { text: "", img: "chemistry_2022_question_41_option_c.jpg", correct: true },  // Text removed (Correct Answer)
      { text: "", img: "chemistry_2022_question_41_option_d.jpg", correct: false }  // Text removed
    ]
  },
  {
    question: "The atom with the electron configuration 1s²2s²2p⁶3s²3p⁶3d¹⁰4s²4p⁴ is",
    answers: [
      { text: "Period 4, p-block", correct: true },
      { text: "Period 3, p-block", correct: false },
      { text: "Period 4, d-block", correct: false },
      { text: "Period 3, d-block", correct: false }
    ]
  },
  {
    question: "Electropositivity of elements across the periodic table normally",
    answers: [
      { text: "Remains constant down the group", correct: false },
      { text: "Increases across the period", correct: false },
      { text: "Decreases across the period", correct: true },
      { text: "Decrease down the group", correct: false }
    ]
  },
  {
    question: `Consider the following table:<br><br>
    <table border="1" style="width:100%; max-width:400px; text-align:center; border-collapse:collapse; margin-top:10px;">
      <tr style="background-color:#f0f0f0;">
        <th>Substance</th>
        <th>Melting point/°C</th>
        <th>Boiling point/°C</th>
      </tr>
      <tr><td>P</td><td>-78</td><td>-25</td></tr>
      <tr><td>Q</td><td>-8</td><td>40</td></tr>
      <tr><td>R</td><td>-6</td><td>150</td></tr>
      <tr><td>S</td><td>44</td><td>280</td></tr>
    </table><br>
    Which of the substances is a liquid at room temperature and rapidly evaporates on exposure to air?`,
    answers: [
      { text: "P", correct: false },
      { text: "Q", correct: true },
      { text: "R", correct: false },
      { text: "S", correct: false }
    ]
  },
  {
    question: "Which of the following oxides is amphoteric?",
    answers: [
      { text: "Carbon (II) oxide", correct: false },
      { text: "Nitrogen (IV) oxide", correct: false },
      { text: "Lead (II) oxide", correct: true },
      { text: "Calcium oxide", correct: false }
    ]
  },
  {
    question: "Which of the following processes occur during fractional distillation of petroleum?",
    answers: [
      { text: "Condensation and diffusion", correct: false },
      { text: "Diffusion and evaporation", correct: false },
      { text: "Diffusion and sublimation", correct: false },
      { text: "Evaporation and condensation", correct: true }
    ]
  },
  {
    question: "If the molar mass of X(HCO₃)₂ is 162 g mol⁻¹, determine the relative atomic mass of X. [H = 1.0, C = 12.0, O = 16.0]",
    answers: [
      { text: "40", correct: true },
      { text: "48", correct: false },
      { text: "61", correct: false },
      { text: "101", correct: false }
    ]
  },
  {
    question: "Charcoal is used in the decolourization of sugar because of its",
    answers: [
      { text: "Absorption property", correct: false },
      { text: "Amorphous property", correct: false },
      { text: "Oxidizing property", correct: false },
      { text: "Adsorption property", correct: true }
    ]
  },
  {
    question: "The first definition of an element was made by:",
    answers: [
      { text: "A.J.Dalton", correct: false },
      { text: "B.A.Lavoisier", correct: false },
      { text: "C. R. Boyle", correct: true },
      { text: "D. J.J.Thomson", correct: false }
    ]
  },
  {
    question: "Which of the following scientists formulated the law of conservation of mass?",
    answers: [
      { text: "A. Lavoisier", correct: true },
      { text: "B. J.Dalton", correct: false },
      { text: "C. R.Boyle", correct: false },
      { text: "D. J.Proust", correct: false }
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
    // 🔹 SAFETY FIX: Check if a correct answer actually exists before trying to access .text
    // This prevents the app from crashing if an answer is missing!
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

  // This will now always run, making the button visible
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