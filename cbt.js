/**
 * ExamVerse CBT Engine - Master Version 10.0
 * Specifically designed to extract data from your standalone files.
 */

const SUBJECT_CONFIG = {
    "General Mathematics": { prefix: "Mathematics_", startYear: 2010, endYear: 2025 },
    "English Language": { prefix: "English_", startYear: 2010, endYear: 2025 },
    "Chemistry": { prefix: "Chemistry_", startYear: 2010, endYear: 2025 },
    "Physics": { prefix: "Physics_", startYear: 2010, endYear: 2025 },
    "Biology": { prefix: "Biology_", startYear: 2010, endYear: 2025 },
    "Christian Religious Studies": { prefix: "CRS_", startYear: 2010, endYear: 2025 },
    "Islamic Studies": { prefix: "IS_", startYear: 2010, endYear: 2025 },
    "Citizenship and Heritage Studies": { prefix: "Civic_", startYear: 2010, endYear: 2025 },
    "Digital Technologies": { prefix: "Computer_", startYear: 2010, endYear: 2025 }
};

let currentQuestions = [];
let currentIndex = 0;
let userAnswers = {};
let timer;
let timeLeft = 0;

document.addEventListener('DOMContentLoaded', async () => {
    initBubbles();
    const sessionData = JSON.parse(sessionStorage.getItem('cbtSession'));
    if (!sessionData) { window.location.href = 'subjects.html'; return; }

    const config = SUBJECT_CONFIG[sessionData.subject];
    document.getElementById('displaySubject').innerText = sessionData.subject;

    let masterPool = [];

    // STEP 1: LOAD AS TEXT TO PREVENT SCRIPT CRASHES
    for (let y = config.startYear; y <= config.endYear; y++) {
        const fileName = `${config.prefix}${y}.js`;
        try {
            const response = await fetch(fileName);
            if (!response.ok) continue; 
            const text = await response.text();
            
            // Extract the Question Array portion [...] 
            // This ignores all the buttons/logic code at the bottom of your file.
            const start = text.indexOf('[');
            const end = text.lastIndexOf(']');
            
            if (start !== -1 && end !== -1) {
                const arrayString = text.substring(start, end + 1);
                // Safe extraction
                const rawData = new Function(`return ${arrayString}`)();
                
                if (Array.isArray(rawData)) {
                    // STEP 2: CONVERT FORMAT
                    const formatted = rawData.map(q => {
                        return {
                            question: q.question,
                            // Map your {text: "", correct: bool} array to simple options
                            options: q.answers.map(a => a.text),
                            // Find which index is marked "correct: true"
                            answer: q.answers.findIndex(a => a.correct === true),
                            topic: q.topic || "General",
                            year: y,
                            img: q.img || ""
                        };
                    });
                    masterPool.push(...formatted);
                }
            }
        } catch (e) {
            console.error(`Skipped ${fileName}`);
        }
    }

    if (masterPool.length === 0) {
        showErrorOnScreen(config.prefix);
        return;
    }

    initializeExam(masterPool, sessionData);
});

function initializeExam(allQuestions, sessionData) {
    // 1. FILTERING
    let filtered = allQuestions.filter(q => {
        if (sessionData.isFullSyllabus || !sessionData.topics || sessionData.topics.length === 0) return true;
        const selected = sessionData.topics.map(t => t.toLowerCase().trim());
        const qTopic = q.topic ? q.topic.toLowerCase().trim() : "general";
        return selected.includes(qTopic);
    });

    // 2. FALLBACK: If filtering returns 0, show all subject questions
    if (filtered.length === 0) filtered = allQuestions;

    // 3. SHUFFLE & STRICT 50 LIMIT (as requested)
    filtered.sort(() => Math.random() - 0.5);
    currentQuestions = filtered.slice(0, 50);

    document.getElementById('qTotal').innerText = currentQuestions.length;
    timeLeft = currentQuestions.length * 60; 
    
    renderQuestion();
    startTimer();
}

function renderQuestion() {
    const q = currentQuestions[currentIndex];
    document.getElementById('qNum').innerText = currentIndex + 1;
    
    document.getElementById('questionText').innerHTML = `
        <div style="margin-bottom:20px;">
            <span class="badge topic">${q.topic}</span>
            <span class="badge year">WAEC ${q.year}</span>
        </div>
        <p style="font-size: 1.35rem; line-height: 1.6; color:#fff;">${q.question}</p>
        ${q.img && q.img !== "" ? `<img src="${q.img}" style="max-width:100%; margin-top:20px; border-radius:15px; border: 1px solid rgba(255,255,255,0.1);">` : ''}
    `;

    const optionsList = document.getElementById('optionsList');
    optionsList.innerHTML = q.options.map((opt, i) => `
        <div class="option-item ${userAnswers[currentIndex] === i ? 'selected' : ''}" onclick="pickOption(${i})">
            <div class="opt-id">${String.fromCharCode(65 + i)}</div>
            <span>${opt}</span>
        </div>
    `).join('');

    const nextBtn = document.getElementById('nextBtn');
    if (currentIndex === currentQuestions.length - 1) {
        nextBtn.innerHTML = 'Submit Exam <i class="fas fa-check-double"></i>';
        nextBtn.classList.add('submit-btn');
    } else {
        nextBtn.innerHTML = 'Next <i class="fas fa-chevron-right"></i>';
        nextBtn.classList.remove('submit-btn');
    }

    document.getElementById('prevBtn').style.visibility = (currentIndex === 0) ? "hidden" : "visible";
}

function pickOption(i) { userAnswers[currentIndex] = i; renderQuestion(); }
function nextQuestion() { if (currentIndex < currentQuestions.length - 1) { currentIndex++; renderQuestion(); } else { submitExam(); } }
function prevQuestion() { if (currentIndex > 0) { currentIndex--; renderQuestion(); } }

/**
 * THE PRO SCOREBOARD LOGIC
 */
function submitExam() {
    clearInterval(timer);
    let score = 0;
    currentQuestions.forEach((q, i) => { if (userAnswers[i] === q.answer) score++; });

    const total = currentQuestions.length;
    const percentage = Math.round((score / total) * 100);

    document.getElementById('examInterface').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';
    
    // Result animations
    let start = 0;
    const duration = 1500; 
    const increment = percentage / (duration / 16);
    const animate = setInterval(() => {
        start += increment;
        if (start >= percentage) {
            start = percentage;
            clearInterval(animate);
        }
        document.getElementById('finalPercent').innerText = Math.floor(start) + "%";
        document.getElementById('circleProgress').style.background = `conic-gradient(var(--primary) ${start}%, rgba(255,255,255,0.1) 0%)`;
    }, 16);

    document.getElementById('finalScoreDisplay').innerText = `${score} / ${total}`;
    
    const grade = document.getElementById('gradeText');
    if (percentage >= 75) { grade.innerText = "EXCELLENT"; grade.style.color = "#10b981"; }
    else if (percentage >= 50) { grade.innerText = "GOOD"; grade.style.color = "#f59e0b"; }
    else { grade.innerText = "POOR"; grade.style.color = "#ef4444"; }
}

function showErrorOnScreen(prefix) {
    document.getElementById('questionText').innerHTML = `
        <div style="text-align:center; padding:30px; border:1px solid #ef4444; background:rgba(239, 68, 68, 0.1); border-radius:20px;">
            <h3 style="color:#ef4444">Question Data Not Accessible</h3>
            <p>I couldn't find your <b>${prefix}</b> files.</p>
            <p style="font-size:0.8rem; margin-top:10px; color:#94a3b8;">
                <b>Requirement:</b> You MUST use <b>VS Code Live Server</b>.<br>
                Right-click subjects.html -> Open with Live Server.
            </p>
        </div>`;
}

function startTimer() {
    const timerDisplay = document.getElementById('timer');
    timer = setInterval(() => {
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        timerDisplay.innerText = `${mins}:${secs.toString().padStart(2, '0')}`;
        if (timeLeft-- <= 0) { clearInterval(timer); submitExam(); }
    }, 1000);
}

function initBubbles() {
    const container = document.getElementById('bubbleLayer');
    if(!container) return;
    const colors = ['#8b5cf6', '#06b6d4', '#6366f1'];
    for (let i = 0; i < 10; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = Math.random() * 200 + 100;
        Object.assign(bubble.style, {
            width: size + 'px', height: size + 'px',
            left: Math.random() * 100 + '%', top: Math.random() * 100 + '%',
            background: colors[Math.floor(Math.random() * colors.length)],
            animationDuration: (Math.random() * 10 + 20) + 's',
            animationDelay: (Math.random() * -30) + 's'
        });
        container.appendChild(bubble);
    }
}