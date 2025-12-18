const questions = [
  {
    question: "Which of the following substances is an example of a fine chemical?",
    img: "", // Add question image path here
    answers: [
      { text: "Sodium hydroxide", img: "", correct: false }, // Add option image path here
      { text: "Hydrochloric acid", img: "", correct: false },
      { text: "Ethylene", img: "", correct: false },
      { text: "Ammonia", img: "", correct: true }
    ]
  },
  {
    question: "The IUPAC name of the compound represented by the structure below is?",
    img: "chemistry_2020_question_2_image.png", // Existing image preserved (added .jpg extension as example)
    answers: [
      { text: "2-chloro but-1,3-diene", img: "", correct: true },
      { text: "But-1,3-chlorodiene", img: "", correct: false },
      { text: "2-chloro but-diene", img: "", correct: false },
      { text: "3-chloro but-1,3-diene", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following substances is a polypeptide?",
    img: "",
    answers: [
      { text: "Starch", img: "", correct: false },
      { text: "Glycogen", img: "", correct: false },
      { text: "Protein", img: "", correct: true },
      { text: "Fats", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following products could be formed during incomplete combustion of a hydrocarbon?<br/>i. Carbon<br/>ii. Hydrogen<br/>iii. Carbon(II) oxide",
    img: "",
    answers: [
      { text: "I only", img: "", correct: false },
      { text: "I and II only", img: "", correct: false },
      { text: "I and III only", img: "", correct: true },
      { text: "II and III only", img: "", correct: false }
    ]
  },
  {
    question: "What quantity of electrons is lost when one mole of iron(II) ions is oxidized to iron(III)?",
    img: "",
    answers: [
      { text: "0 mole", img: "", correct: false },
      { text: "3 moles", img: "", correct: false },
      { text: "1 mole", img: "", correct: true },
      { text: "2 moles", img: "", correct: false }
    ]
  },
  {
    question: "What is the mass of silver deposited when 24,125 C of electricity is passed through a solution of silver salt? [Ag = 108, F = 96,500 C]",
    img: "",
    answers: [
      { text: "432 g", img: "", correct: false },
      { text: "108 g", img: "", correct: false },
      { text: "54 g", img: "", correct: false },
      { text: "27 g", img: "", correct: true }
    ]
  },
  {
    question: "Equal masses of calcium trioxocarbonate(IV) were added to dilute hydrochloric acid at the temperature specified. Under which of the following conditions would the reaction be slowest?",
    img: "",
    answers: [
      { text: "Calcium trioxocarbonate(IV) chips at 20°C", img: "", correct: true },
      { text: "Calcium trioxocarbonate(IV) chips at 40°C", img: "", correct: false },
      { text: "Calcium trioxocarbonate(IV) powder at 20°C", img: "", correct: false },
      { text: "Calcium trioxocarbonate(IV) powder at 40°C", img: "", correct: false }
    ]
  },
  {
    question: "The high solubility of ethanol in water is due to",
    img: "",
    answers: [
      { text: "its low boiling point", img: "", correct: false },
      { text: "its low freezing point", img: "", correct: false },
      { text: "its covalent nature", img: "", correct: false },
      { text: "hydrogen bonding", img: "", correct: true }
    ]
  },
  {
    question: "Which of the following metals react with slowly with cold water?",
    img: "",
    answers: [
      { text: "Calcium", img: "", correct: true },
      { text: "Silver", img: "", correct: false },
      { text: "Iron", img: "", correct: false },
      { text: "Potassium", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following pairs of properties of alkali metals decreases down the group?",
    img: "",
    answers: [
      { text: "First ionization energy and reactivity", img: "", correct: false },
      { text: "Melting point and atomic radius", img: "", correct: false },
      { text: "Reactivity and electronegativity", img: "", correct: false },
      { text: "First ionization energy and melting point", img: "", correct: true }
    ]
  },
  {
    question: "The most suitable process of obtaining water from an aqueous solution of sugar is",
    img: "",
    answers: [
      { text: "Crystallization", img: "", correct: false },
      { text: "Distillation", img: "", correct: true },
      { text: "Filtration", img: "", correct: false },
      { text: "Decantation", img: "", correct: false }
    ]
  },
  {
    question: "Group VII elements in their combined states are called",
    img: "",
    answers: [
      { text: "Halogens", img: "", correct: true },
      { text: "Anions", img: "", correct: false },
      { text: "Halides", img: "", correct: false },
      { text: "Cations", img: "", correct: false }
    ]
  },
  {
    question: "When an ionic bond is broken, bonding electrons are",
    img: "",
    answers: [
      { text: "Shared between participating atoms", img: "", correct: false },
      { text: "Gained by the most electropositive atom", img: "", correct: false },
      { text: "Gained by the most electronegative atom", img: "", correct: true },
      { text: "Lost by both participating atoms", img: "", correct: false }
    ]
  },
  {
    question: "The oxidation state of chlorine in NaClO₃ is",
    img: "",
    answers: [
      { text: "+1", img: "", correct: false },
      { text: "+3", img: "", correct: false },
      { text: "+5", img: "", correct: true },
      { text: "+6", img: "", correct: false }
    ]
  },
  {
    question: "A balanced chemical equation is based on the law of",
    img: "",
    answers: [
      { text: "Periodicity", img: "", correct: false },
      { text: "Constant composition", img: "", correct: false },
      { text: "Multiple proportion", img: "", correct: false },
      { text: "Conservation of mass", img: "", correct: true }
    ]
  },
  {
    question: "Which of the following pairs of elements has the greatest difference in electronegativity?",
    img: "",
    answers: [
      { text: "Na and F", img: "", correct: true },
      { text: "Na and Cl", img: "", correct: false },
      { text: "Na and Br", img: "", correct: false },
      { text: "Na and I", img: "", correct: false }
    ]
  },
  {
    question: "A factor that is considered most important when siting a chemical industry is",
    img: "",
    answers: [
      { text: "Nearness to other industrial establishments", img: "", correct: false },
      { text: "Nearness to raw materials", img: "", correct: true },
      { text: "Favourable climatic conditions", img: "", correct: false },
      { text: "Availability of storage facilities", img: "", correct: false }
    ]
  },
  {
    question: "The boiling point of pentane is higher than that of propane because",
    img: "",
    answers: [
      { text: "Carbon–carbon single bonds are stronger than carbon–hydrogen bonds", img: "", correct: false },
      { text: "Pentane has more covalent bonds to break", img: "", correct: false },
      { text: "Pentane does not burn easily as propane", img: "", correct: false },
      { text: "The intermolecular forces in pentane are stronger than those of propane", img: "", correct: true }
    ]
  },
  {
    question: "Which of the following solids would not decompose on heating?",
    img: "",
    answers: [
      { text: "Ammonium chloride", img: "", correct: false },
      { text: "Lead(II) trioxonitrate(V)", img: "", correct: false },
      { text: "Potassium trioxocarbonate(IV)", img: "", correct: true },
      { text: "Sodium hydrogen trioxocarbonate(IV)", img: "", correct: false }
    ]
  },
  {
    question: "The following molecules have double covalent bonds between two atoms except",
    img: "",
    answers: [
      { text: "Oxygen", img: "", correct: false },
      { text: "Carbon(IV) oxide", img: "", correct: false },
      { text: "Ethene", img: "", correct: false },
      { text: "Water", img: "", correct: true }
    ]
  },
  {
    question: "The type of isomerism exhibited by cis and trans isomers is",
    img: "",
    answers: [
      { text: "Positional", img: "", correct: false },
      { text: "Geometrical", img: "", correct: true },
      { text: "Functional", img: "", correct: false },
      { text: "Optical", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following compounds has the lowest boiling point?",
    img: "",
    answers: [
      { text: "C₄H₁₀", img: "", correct: true },
      { text: "CH₃COOH", img: "", correct: false },
      { text: "H₂O", img: "", correct: false },
      { text: "C₂H₅OH", img: "", correct: false }
    ]
  },
  {
    question: "An alkanol containing 60% carbon by mass would have a molecular formula [H = 1.0, C = 12.0, O = 16.0]",
    img: "",
    answers: [
      { text: "CH₃OH", img: "", correct: false },
      { text: "C₂H₅OH", img: "", correct: false },
      { text: "C₃H₇OH", img: "", correct: true },
      { text: "C₄H₉OH", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following compounds would release hydrogen when reacted with sodium metal?<br/>I. CH₃COOH<br/>II. CH₃CH₂OH<br/>III. CH₃COOCH₃",
    img: "",
    answers: [
      { text: "I only", img: "", correct: false },
      { text: "I and II only", img: "", correct: true },
      { text: "II and III only", img: "", correct: false },
      { text: "I and III only", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following substances is not a reducing agent?",
    img: "",
    answers: [
      { text: "C", img: "", correct: false },
      { text: "CO", img: "", correct: false },
      { text: "O₂", img: "", correct: true },
      { text: "H₂", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following statements is correct for a reaction at equilibrium?",
    img: "",
    answers: [
      { text: "All reactions cease to occur", img: "", correct: false },
      { text: "The reaction has gone to completion", img: "", correct: false },
      { text: "The rates of the forward and backward reactions are equal", img: "", correct: true },
      { text: "The amount of product equals the amount of reactants", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following reactions are always exothermic?<br/>I. Neutralization<br/>II. Decomposition<br/>III. Combustion",
    img: "",
    answers: [
      { text: "I and II only", img: "", correct: false },
      { text: "I and III only", img: "", correct: true },
      { text: "II and III only", img: "", correct: false },
      { text: "I, II and III", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following standard conditions is not correct about energy changes?",
    img: "",
    answers: [
      { text: "Standard temperature is 298 K", img: "", correct: false },
      { text: "Standard pressure is 1 atm", img: "", correct: false },
      { text: "Concentration of solution must be 1 mol/dm³", img: "", correct: false },
      { text: "ΔH at 298 K is the activation energy", img: "", correct: true }
    ]
  },
  {
    question: "If 5.0 cm³ of 0.200 mol/dm³ Na₂CO₃ was diluted to 250 cm³ solution, what would be the concentration of the resulting solution?",
    img: "",
    answers: [
      { text: "0.004 mol/dm³", img: "", correct: true },
      { text: "0.020 mol/dm³", img: "", correct: false },
      { text: "0.200 mol/dm³", img: "", correct: false },
      { text: "0.400 mol/dm³", img: "", correct: false }
    ]
  },
  {
    question: "The initial volume and pressure of a given mass of gas is V and 3P. What is its pressure if its volume is increased to 2V at constant temperature?",
    img: "",
    answers: [
      { text: "3P", img: "", correct: false },
      { text: "2P", img: "", correct: false },
      { text: "3/2 P", img: "", correct: true },
      { text: "2/3 P", img: "", correct: false }
    ]
  },
  {
    question: "What volume of oxygen at s.t.p. is required to burn completely 7.5 dm³ of methane according to the following equation?<br/>CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g)",
    img: "",
    answers: [
      { text: "3.75 dm³", img: "", correct: false },
      { text: "7.5 dm³", img: "", correct: false },
      { text: "15.0 dm³", img: "", correct: true },
      { text: "30.0 dm³", img: "", correct: false }
    ]
  },
  {
    question: "When 250 cm³ of a saturated solution of CuSO₄ at 30°C was evaporated to dryness, 5.0 g of the salt was obtained. What is the solubility of the salt at 30°C? [CuSO₄ = 160]",
    img: "",
    answers: [
      { text: "0.031", img: "", correct: false },
      { text: "0.125", img: "", correct: true },
      { text: "0.640", img: "", correct: false },
      { text: "1.560", img: "", correct: false }
    ]
  },
  {
    question: "The bond between NH₃ and H⁺ in NH₄⁺ is",
    img: "",
    answers: [
      { text: "Dative", img: "", correct: true },
      { text: "Covalent", img: "", correct: false },
      { text: "Hydrogen", img: "", correct: false },
      { text: "Electrovalent", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following oxides has a giant covalent structure?",
    img: "",
    answers: [
      { text: "Al₂O₃", img: "", correct: false },
      { text: "Na₂O", img: "", correct: false },
      { text: "P₄O₁₀", img: "", correct: false },
      { text: "SiO₂", img: "", correct: true }
    ]
  },
  {
    question: "Which of the following hydroxides is not readily soluble in water?",
    img: "",
    answers: [
      { text: "NH₄OH", img: "", correct: false },
      { text: "Ca(OH)₂", img: "", correct: true },
      { text: "NaOH", img: "", correct: false },
      { text: "KOH", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following statements about the solubility of a salt is correct?",
    img: "",
    answers: [
      { text: "A salt whose solubility increases with temperature would not crystallize easily on cooling", img: "", correct: false },
      { text: "A salt whose solubility is independent of temperature would normally crystallize out on cooling", img: "", correct: false },
      { text: "Crystallization would be efficient in separating out a salt whose solubility increases considerably with temperature", img: "", correct: true },
      { text: "Solubility of a solid does not affect its crystallization", img: "", correct: false }
    ]
  },
  {
    question: "How many moles of H₂SO₄ are there in 50 cm³ of 0.108 mol/dm³ solution of the acid?",
    img: "",
    answers: [
      { text: "5.4 × 10", img: "", correct: false },
      { text: "5.4 × 10⁻³", img: "", correct: true },
      { text: "5.4 × 10⁻²", img: "", correct: false },
      { text: "5.4 × 10⁻¹", img: "", correct: false }
    ]
  },
  {
    question: "If 20 cm³ of sodium hydroxide was neutralized by 20 cm³ of 0.01 mol/dm³ tetraoxosulphate(VI) acid, what is the concentration of the sodium hydroxide solution?",
    img: "",
    answers: [
      { text: "0.010", img: "", correct: false },
      { text: "0.020", img: "", correct: true },
      { text: "0.100", img: "", correct: false },
      { text: "0.150", img: "", correct: false }
    ]
  },
  {
    question: "\"Electrons always occupy the lowest empty energy level\" is a statement of",
    img: "",
    answers: [
      { text: "Aufbau Principle", img: "", correct: true },
      { text: "Hund’s rule", img: "", correct: false },
      { text: "Pauli Exclusion Principle", img: "", correct: false },
      { text: "Periodic law", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following metals does not react with water to produce hydrogen?",
    img: "",
    answers: [
      { text: "Copper", img: "", correct: true },
      { text: "Potassium", img: "", correct: false },
      { text: "Sodium", img: "", correct: false },
      { text: "Zinc", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following arrangement of elements is in decreasing order of electronegativity?",
    img: "",
    answers: [
      { text: "Na, Mg, Al, Si, P", img: "", correct: false },
      { text: "Na, Al, Mg, P, Si", img: "", correct: false },
      { text: "P, Mg, Na, Si, Al", img: "", correct: false },
      { text: "P, Si, Al, Mg, Na", img: "", correct: true }
    ]
  },
  {
    question: "The metallic bond in magnesium is stronger than that in calcium because magnesium has a",
    img: "",
    answers: [
      { text: "Larger atomic size", img: "", correct: false },
      { text: "Smaller atomic size", img: "", correct: true },
      { text: "Greater number of valence electrons", img: "", correct: false },
      { text: "Lower melting point", img: "", correct: false }
    ]
  },
  {
    question: "Consider the reaction represented by the following equation:<br/>AgNO₃ + NaCl → AgCl + NaNO₃<br/>The steps that could be taken to obtain pure dry sample of AgCl(s) from the mixture include",
    img: "",
    answers: [
      { text: "Heating to saturation and drying", img: "", correct: false },
      { text: "Filtering and evaporation to dryness", img: "", correct: false },
      { text: "Filtering, washing and drying", img: "", correct: true },
      { text: "Crystallizing and allowing to cool", img: "", correct: false }
    ]
  },
  {
    question: "How many electrons does ³¹₁₅P³⁻ contain?",
    img: "",
    answers: [
      { text: "12", img: "", correct: false },
      { text: "15", img: "", correct: false },
      { text: "16", img: "", correct: false },
      { text: "18", img: "", correct: true }
    ]
  },
  {
    question: "The atomic number of an atom would be equal to its mass number if it",
    img: "",
    answers: [
      { text: "Has a totally filled valence shell", img: "", correct: false },
      { text: "Has a high charge to mass ratio", img: "", correct: false },
      { text: "Does not contain neutrons", img: "", correct: true },
      { text: "Exhibits isotopy", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following processes is not exhibited by atoms in order to attain more stable electron configuration?",
    img: "",
    answers: [
      { text: "Gaining of electrons", img: "", correct: false },
      { text: "Hybridization of orbitals", img: "", correct: true },
      { text: "Losing electrons", img: "", correct: false },
      { text: "Sharing electrons", img: "", correct: false }
    ]
  },
  {
    question: "Which of the following quantities is a molar quantity?",
    img: "",
    answers: [
      { text: "Molarity", img: "", correct: false },
      { text: "Molar mass", img: "", correct: true },
      { text: "Mass concentration", img: "", correct: false },
      { text: "Molality", img: "", correct: false }
    ]
  },
  {
    question: "Dilution factor is the",
    img: "",
    answers: [
      { text: "Amount of distilled water that is added to the concentrated solution to dilute it", img: "", correct: false },
      { text: "Quantity of distilled water added to 1 dm³ of the concentrated solution to give the dilute solution", img: "", correct: false },
      { text: "Number of times the volume of the concentrated solution is diluted to give the dilute solution", img: "", correct: true },
      { text: "Act of diluting the concentrated solution to obtain the dilute solution", img: "", correct: false }
    ]
  },
  {
    question: "Calcium chloride is an ionic compound. Which of the following statements account for its ionic character?<br/>I. Calcium has high ionization energy<br/>II. Calcium has low ionization energy<br/>III. Chlorine has high electron affinity<br/>IV. Chlorine has high ionization energy",
    img: "",
    answers: [
      { text: "I and II only", img: "", correct: false },
      { text: "I, II and IV only", img: "", correct: false },
      { text: "II, III and IV only", img: "", correct: true },
      { text: "I, II, III and IV", img: "", correct: false }
    ]
  },
  {
    question: "An example of a biodegradable pollutant is",
    img: "",
    answers: [
      { text: "Plastic", img: "", correct: false },
      { text: "Sewage", img: "", correct: true },
      { text: "Carbon(II) oxide", img: "", correct: false },
      { text: "Hydrogen sulphide", img: "", correct: false }
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