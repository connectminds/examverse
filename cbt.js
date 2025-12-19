/**
 * ExamVerse Multi-Year CBT Engine
 * This version automatically pulls questions from ALL available years in your folder.
 */

const SUBJECT_CONFIG = {
    "Mathematics": { prefix: "Mathematics_", startYear: 2010, endYear: 2025 },
    "English Language": { prefix: "English_", startYear: 2010, endYear: 2025 },
    "Physics": { prefix: "Physics_", startYear: 2010, endYear: 2025 },
    "Chemistry": { prefix: "Chemistry_", startYear: 2010, endYear: 2025 },
    "Biology": { prefix: "Biology_", startYear: 2010, endYear: 2025 },
    "Economics": { prefix: "Economics_", startYear: 2010, endYear: 2025 },
    "Government": { prefix: "Government_", startYear: 2010, endYear: 2025 }
};

let currentQuestions = [];
let currentIndex = 0;
let userAnswers = {};
let timer;
let timeLeft = 0;

document.addEventListener('DOMContentLoaded', () => {
    const sessionData = JSON.parse(sessionStorage.getItem('cbtSession'));
    if (!sessionData) { window.location.href = 'subjects.html'; return; }

    const config = SUBJECT_CONFIG[sessionData.subject];
    if (!config) { alert("Subject configuration missing!"); return; }

    // 1. GENERATE YEAR RANGE: Try to load every year from start to end
    const yearsToTry = [];
    for (let y = config.startYear; y <= config.endYear; y++) {
        yearsToTry.push(y);
    }

    // 2. OPTIMISTIC LOADING: Try to load all files at once
    const loadPromises = yearsToTry.map(year => {
        const fileName = `${config.prefix}${year}.js`;
        const varName = `${config.prefix}${year}`;
        return attemptLoadScript(fileName, varName);
    });

    // Promise.allSettled ensures that if some years are missing, the app doesn't break
    Promise.allSettled(loadPromises).then(results => {
        const masterPool = [];
        
        results.forEach(result => {
            if (result.status === "fulfilled" && result.value) {
                masterPool.push(...result.value); // Merge questions into the master list
            }
        });

        if (masterPool.length === 0) {
            alert("No question files found in your folder for this subject.");
            window.location.href = 'subjects.html';
            return;
        }

        initializeExam(masterPool, sessionData);
    });
});

// Helper: Tries to load a script, returns null if it fails (404)
function attemptLoadScript(fileName, varName) {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = fileName;
        script.onload = () => {
            const data = window[varName];
            resolve(data || null);
        };
        script.onerror = () => resolve(null); // Ignore missing files
        document.head.appendChild(script);
    });
}

function initializeExam(allQuestions, sessionData) {
    // 3. FILTER: Filter by selected topics (or all if full syllabus)
    let filtered = allQuestions.filter(q => {
        if (sessionData.isFullSyllabus) return true;
        return sessionData.topics.includes(q.topic);
    });

    // 4. SHUFFLE: Randomize the entire pool
    // Fisher-Yates Shuffle for true randomness
    for (let i = filtered.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
    }

    // 5. LIMIT: Pick 50 random questions for Practice/Exam
    currentQuestions = filtered.slice(0, 50);

    document.getElementById('displaySubject').innerText = sessionData.subject;
    document.getElementById('qTotal').innerText = currentQuestions.length;
    timeLeft = currentQuestions.length * 60; // 1 min per question

    renderQuestion();
    startTimer();
}

/** 
 * UI RENDERING FUNCTIONS 
 */

function renderQuestion() {
    const q = currentQuestions[currentIndex];
    document.getElementById('qNum').innerText = currentIndex + 1;
    
    // Display Question with Year Badge so they know it's a real past question
    document.getElementById('questionText').innerHTML = `
        <div style="display:flex; gap:10px; margin-bottom:10px;">
            <span class="badge topic">${q.topic.toUpperCase()}</span>
            <span class="badge year">WAEC ${q.year || 'PAST Q'}</span>
        </div>
        <p>${q.question}</p>
        ${q.img ? `<img src="${q.img}" class="q-img">` : ''}
    `;

    const optionsList = document.getElementById('optionsList');
    optionsList.innerHTML = q.options.map((opt, i) => `
        <div class="option-item ${userAnswers[currentIndex] === i ? 'selected' : ''}" onclick="pickOption(${i})">
            <div class="opt-id">${String.fromCharCode(65 + i)}</div>
            <span>${opt}</span>
        </div>
    `).join('');

    const nextBtn = document.getElementById('nextBtn');
    nextBtn.innerHTML = (currentIndex === currentQuestions.length - 1) ? 'Submit Session' : 'Next <i class="fas fa-arrow-right"></i>';
}

function pickOption(idx) {
    userAnswers[currentIndex] = idx;
    renderQuestion();
}

function nextQuestion() {
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        renderQuestion();
    } else {
        submitExam();
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
    }
}

function submitExam() {
    clearInterval(timer);
    let score = 0;
    currentQuestions.forEach((q, i) => {
        if (userAnswers[i] === q.answer) score++;
    });

    const percent = Math.round((score / currentQuestions.length) * 100);
    alert(`SESSION COMPLETE!\n\nScore: ${score}/${currentQuestions.length}\nPercentage: ${percent}%`);
    window.location.href = 'subjects.html';
}

function startTimer() {
    const timerDisplay = document.getElementById('timer');
    timer = setInterval(() => {
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        timerDisplay.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        if (timeLeft-- <= 0) { clearInterval(timer); submitExam(); }
    }, 1000);
}