let allQuestions = [];
let questions = [];
let currentIndex = 0;
let userAnswers = {};
let timerInterval = null;

// Timer function
function startTimer() {
    const examStartTime = parseInt(localStorage.getItem('examStartTime')) || Date.now();
    
    function updateTimer() {
        const now = Date.now();
        const elapsedMs = now - examStartTime;
        
        // Convert to minutes and seconds
        const totalSeconds = Math.floor(elapsedMs / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        
        // Format as MM:SS
        const displayTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        document.getElementById('timer').textContent = displayTime;
    }
    
    // Update immediately
    updateTimer();
    
    // Update every 100ms for smooth display
    timerInterval = setInterval(updateTimer, 100);
}

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

        // Limit to selected question count
        if (questionCount > 0 && questionCount < questions.length) {
            questions = questions.slice(0, questionCount);
        }

        console.log('questions after applying count limit:', questions.length);
        
        if (questions.length === 0) {
            console.log('ERROR: No questions found!');
            document.getElementById('questionContent').innerHTML = '<p style="color: red; text-align: center;">No questions found for selected topics.</p>';
            return;
        }

        console.log('SUCCESS: Displaying', questions.length, 'questions');
        generateSidebar();
        showQuestion(currentIndex);
        startTimer();  // Start the countdown timer
    })
    .catch(err => {
        console.error('Error loading questions:', err);
        document.getElementById('questionContent').innerHTML = '<p style="color: red;">Failed to load exam.</p>';
    });

// Sidebar numbers
function generateSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = '';
    questions.forEach((q, i) => {
        const div = document.createElement('div');
        div.className = 'question-number';
        div.textContent = i + 1;
        div.addEventListener('click', () => {
            currentIndex = i;
            showQuestion(currentIndex);
        });
        sidebar.appendChild(div);
    });
}

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
    
    container.innerHTML = `
        <h2>Q${index+1}: ${q.question}</h2>
        <p style="color: #999; font-size: 0.9rem; margin-bottom: 15px;">${q.topic || q.section || ''}</p>
        ${displayOptions}
    `;

    // Highlight active in sidebar
    document.querySelectorAll('.question-number').forEach((el, i) => {
        el.classList.toggle('active', i === index);
    });

    // Option click
    document.querySelectorAll('.option').forEach(el => {
        el.addEventListener('click', () => {
            const selected = el.dataset.opt;
            userAnswers[q.id] = selected;
            document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
            el.classList.add('selected');
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
    localStorage.setItem('examEndTime', Date.now().toString());
    window.location.href = 'report.html';
});
