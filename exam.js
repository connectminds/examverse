let allQuestions = [];
let questions = [];
let currentIndex = 0;
let userAnswers = {};
let timerInterval = null;

// redirect if not logged in (one‑time login persistence)
if (!localStorage.getItem('examVerseLoggedIn')) {
    window.location.href = 'login.html';
}

// populate student info from registration or topic modal
function setStudentDetails() {
    displayUserProfile('#studentName', '#studentPhoto', '#studentID');
}

// Countdown timer function (professional countdown, auto-submit on expiry)
function startCountdownTimer(){
    const timerEl = document.getElementById('timer');
    const endTime = parseInt(localStorage.getItem('examEndTime')) || (Date.now() + 5*60*1000);
    const durationMinutes = parseInt(localStorage.getItem('examDurationMinutes')) || 5;

    function formatTime(ms){
        if(ms < 0) ms = 0;
        const totalSeconds = Math.floor(ms/1000);
        const hours = Math.floor(totalSeconds/3600);
        const minutes = Math.floor((totalSeconds % 3600)/60);
        const seconds = totalSeconds % 60;
        if(hours > 0) return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
        return `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
    }

    function update(){
        const now = Date.now();
        const remaining = endTime - now;
        const pct = Math.max(0, remaining) / (durationMinutes*60*1000 || 1);

        if(timerEl) timerEl.textContent = formatTime(remaining);

        // style changes depending on remaining time
        const timerWrap = document.querySelector('.exam-timer');
        if(timerWrap){
            timerWrap.classList.remove('timer-warning','timer-danger');
            if(pct <= 0.1) timerWrap.classList.add('timer-danger');
            else if(pct <= 0.25) timerWrap.classList.add('timer-warning');
        }

        if(remaining <= 0){
            clearInterval(timerInterval);
            // Auto-submit if possible
            const submitBtn = document.getElementById('submitBtn');
            if(submitBtn){
                // briefly show 00:00 then submit
                if(timerEl) timerEl.textContent = '00:00';
                setTimeout(() => { submitBtn.click(); }, 600);
            }
        }
    }

    // Clear previous interval if any
    if(timerInterval) clearInterval(timerInterval);
    update();
    timerInterval = setInterval(update, 1000);
}

// set student info in header
setStudentDetails();

// Load all questions
fetch('questions.json')
    .then(res => res.json())
    .then(data => {
        // Extract all questions from all subjects
        allQuestions = [];
        data.subjects.forEach(subject => {
            allQuestions = allQuestions.concat(subject.questions);
        });

        // Get selected topics from subject page
        const selectedTopics = JSON.parse(localStorage.getItem('selectedTopics')) || [];
        const questionCount = parseInt(localStorage.getItem('questionCount')) || 0;
        
        console.log('=== EXAM.JS DEBUG ===');
        console.log('selectedTopics from localStorage:', selectedTopics);
        console.log('questionCount from localStorage:', questionCount);
        console.log('allQuestions loaded:', allQuestions.length);
        
        // Filter questions based on selected topics (format: "Subject||Topic")
        questions = allQuestions.filter(q => {
            // Create the topic key to match against selectedTopics
            const questionTopicKey = q.topic || q.section;
            
            // Check if this question's topic is in any of the selected topics
            const isIncluded = selectedTopics.some(selectedTopic => {
                // selectedTopic format: "Mathematics||Algebra"
                // We need to check if the question's topic matches
                return selectedTopic.includes('||') ? 
                    selectedTopic.split('||')[1] === questionTopicKey :
                    selectedTopic === questionTopicKey;
            });
            
            return isIncluded;
        });

        console.log('questions after filtering:', questions.length);

        // Shuffle questions
        questions.sort(() => Math.random() - 0.5);

        // Enforce maximum of 100 questions
        const MAX_QUESTIONS = 100;
        let maxRequested = questionCount > 0 ? Math.min(questionCount, MAX_QUESTIONS) : Math.min(questions.length, MAX_QUESTIONS);
        if (maxRequested > 0 && maxRequested < questions.length) {
            questions = questions.slice(0, maxRequested);
        } else if (questions.length > MAX_QUESTIONS) {
            questions = questions.slice(0, MAX_QUESTIONS);
        }

        console.log('questions after applying count limit:', questions.length);
        // Determine exam duration based on number of questions (countdown)
        function getDurationMinutes(n){
            if(n >= 80 && n <= 100) return 90; // 1h30
            if(n >= 60 && n <= 79) return 60; // 1h
            if(n >= 40 && n <= 59) return 30; // 30m
            if(n >= 20 && n <= 39) return 20; // 20m
            if(n >= 10 && n <= 19) return 10; // 10m
            if(n >= 1 && n <= 9) return 5;   // 5m
            return 5;
        }

        const numQuestions = questions.length;
        const durationMinutes = getDurationMinutes(numQuestions);
        // If an exam end time exists in localStorage (resuming), use it; otherwise set new end time
        const storedEnd = parseInt(localStorage.getItem('examEndTime')) || 0;
        let examEndTime = storedEnd > Date.now() ? storedEnd : (Date.now() + durationMinutes * 60 * 1000);
        localStorage.setItem('examEndTime', String(examEndTime));
        localStorage.setItem('examDurationMinutes', String(durationMinutes));
        localStorage.setItem('examStartTime', String(Date.now())); // Track start time for elapsed duration calculation
        
        if (questions.length === 0) {
            console.log('ERROR: No questions found!');
            document.getElementById('questionContent').innerHTML = '<p style="color: red; text-align: center;">No questions found for selected topics.</p>';
            return;
        }

        console.log('SUCCESS: Displaying', questions.length, 'questions');
        generateSidebar();
        showQuestion(currentIndex);
        startCountdownTimer();  // Start the countdown timer
    })
    .catch(err => {
        console.error('Error loading questions:', err);
        document.getElementById('questionContent').innerHTML = '<p style="color: red;">Failed to load exam.</p>';
    });

// Sidebar numbers
function generateSidebar() {
    const sidebar = document.getElementById('sidebar');
    const bottomBar = document.getElementById('bottomQuestionBar');
    sidebar.innerHTML = '';
    if(bottomBar) bottomBar.innerHTML = '';
    // ensure bottom bar is visible now that we've cleared inline hiding
    if(bottomBar) bottomBar.style.display = 'flex';
    questions.forEach((q, i) => {
        const div = document.createElement('div');
        div.className = 'question-number';
        if (userAnswers[q.id]) {
            div.classList.add('answered');
            div.title = 'Attempted';
        }
        div.textContent = i + 1;
        div.addEventListener('click', () => {
            currentIndex = i;
            showQuestion(currentIndex);
        });
        sidebar.appendChild(div);

        // bottom bar item (for small screens)
        if(bottomBar){
            const b = document.createElement('div');
            b.className = 'bottom-question-number';
            if (userAnswers[q.id]) {
                b.classList.add('answered');
                b.title = 'Attempted';
            }
            b.textContent = i + 1;
            b.addEventListener('click', () => { currentIndex = i; showQuestion(currentIndex); window.scrollTo({ top: 0, behavior: 'smooth' }); });
            bottomBar.appendChild(b);
        }
    });
}

// Sidebar toggle logic (collapsible / slide-in for mobile)
function initSidebarToggle(){
    const toggle = document.getElementById('sidebarToggle');
    if(!toggle) return;

    // create overlay element for mobile
    let overlay = document.querySelector('.sidebar-overlay');
    if(!overlay){
        overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        document.body.appendChild(overlay);
    }

    function openSidebar(){
        document.body.classList.add('sidebar-open');
        localStorage.setItem('sidebarOpen', '1');
    }
    function closeSidebar(){
        document.body.classList.remove('sidebar-open');
        localStorage.removeItem('sidebarOpen');
    }

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if(document.body.classList.contains('sidebar-open')) closeSidebar();
        else openSidebar();
    });

    overlay.addEventListener('click', closeSidebar);

    // allow pressing Escape to close
    document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeSidebar(); });

    // restore previous state (only on larger screens we'll honor collapsed state)
    if(localStorage.getItem('sidebarOpen')) openSidebar();
}

// Initialize sidebar toggle after DOM prepared
document.addEventListener('DOMContentLoaded', () => { initSidebarToggle(); });

// Display question
function showQuestion(index) {
    const q = questions[index];
    const container = document.getElementById('questionContent');
    
    // Handle both old and new question formats
    const options = Array.isArray(q.options) ? q.options : q.options;
    const displayOptions = Array.isArray(q.options) ? q.options.map(opt => `
        <div class="option ${userAnswers[q.id] === opt.label ? 'selected' : ''}" data-opt="${opt.label}">
            <div class="check"></div>
            <span>${opt.label}: ${opt.text}</span>
        </div>
    `).join('') : Object.keys(q.options).map(opt => `
        <div class="option ${userAnswers[q.id] === opt ? 'selected' : ''}" data-opt="${opt}">
            <div class="check"></div>
            <span>${opt}: ${q.options[opt]}</span>
        </div>
    `).join('');
    
    // Get difficulty level and set badge color
    const difficulty = q.difficulty || 'Medium';
    const difficultyClass = difficulty.toLowerCase();
    const difficultyColor = 
        difficulty === 'Easy' ? '#10b981' :
        difficulty === 'Medium' ? '#f59e0b' : '#ef4444';
    
    container.innerHTML = `
        <div class="question-header">
            <div>
                <h2>Q${index+1}: ${q.question}</h2>
                <p style="color: #999; font-size: 0.9rem; margin-top: 8px;"><strong>Topic:</strong> ${q.topic || q.section || 'General'}</p>
            </div>
            <div class="difficulty-badge" style="background-color: ${difficultyColor};">
                ${difficulty}
            </div>
        </div>
        ${displayOptions}
    `;

    // Highlight active and mark answered items in sidebar and bottom bar
    document.querySelectorAll('.question-number').forEach((el, i) => {
        el.classList.toggle('active', i === index);
        const qItem = questions[i];
        if (qItem && userAnswers[qItem.id]) {
            el.classList.add('answered');
            el.title = 'Attempted';
        }
    });
    document.querySelectorAll('.bottom-question-number').forEach((el, i) => {
        el.classList.toggle('active', i === index);
        const qItem = questions[i];
        if (qItem && userAnswers[qItem.id]) {
            el.classList.add('answered');
            el.title = 'Attempted';
        }
    });

    // Option click
    document.querySelectorAll('.option').forEach(el => {
        el.addEventListener('click', () => {
            const selected = el.dataset.opt;
            userAnswers[q.id] = selected;
            document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
            el.classList.add('selected');

            // mark question as answered in sidebar/bottom
            const sideEls = document.querySelectorAll('.question-number');
            if (sideEls[currentIndex]) {
                sideEls[currentIndex].classList.add('answered');
                sideEls[currentIndex].title = 'Attempted';
            }
            const botEls = document.querySelectorAll('.bottom-question-number');
            if (botEls[currentIndex]) {
                botEls[currentIndex].classList.add('answered');
                botEls[currentIndex].title = 'Attempted';
            }
        });
    });
}

// Navigation
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) currentIndex--;
    showQuestion(currentIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < questions.length - 1) currentIndex++;
    showQuestion(currentIndex);
});

// Submit
document.getElementById('submitBtn').addEventListener('click', () => {
    clearInterval(timerInterval);  // Stop the timer
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    localStorage.setItem('questions', JSON.stringify(questions));
    
    // Calculate score and save to exam history
    let correctCount = 0;
    questions.forEach(q => {
        const userAnswer = userAnswers[q.id];
        const correctAnswer = q.answer || q.correct;
        
        if (userAnswer === correctAnswer) {
            correctCount++;
        }
    });
    
    const score = Math.round((correctCount / questions.length) * 100);
    const durationMinutes = parseInt(localStorage.getItem('examDurationMinutes')) || 0;
    const examStartTime = parseInt(localStorage.getItem('examStartTime')) || Date.now();
    const elapsedMinutes = Math.round((Date.now() - examStartTime) / 60000);
    
    // Get subject name from active subject link or fallback
    const activeSubject = document.querySelector('.subject-card.active');
    const subject = activeSubject?.textContent || localStorage.getItem('selectedSubject') || 'Unknown';
    
    // Prepare question details for breakdown
    const questionDetails = questions.map(q => ({
        question: q.question,
        answered: userAnswers[q.id],
        correct: q.answer || q.correct
    }));
    
    // Save exam result to history
    const examResult = {
        id: Date.now(),
        date: new Date().toISOString(),
        subject: subject.trim(),
        year: localStorage.getItem('examYear') || 'Current',
        totalQuestions: questions.length,
        correct: correctCount,
        score: score,
        duration: elapsedMinutes,
        questions: questionDetails
    };
    
    // Add to exam history
    let history = JSON.parse(localStorage.getItem('examHistory') || '[]');
    history.unshift(examResult);
    localStorage.setItem('examHistory', JSON.stringify(history));
    
    localStorage.setItem('examEndTime', Date.now().toString());
    window.location.href = 'report.html';
});
