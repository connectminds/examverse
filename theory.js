// Redirect if not logged in
if (!localStorage.getItem('examVerseLoggedIn')) {
    window.location.href = 'login.html';
}

// Load and display user profile
displayUserProfile('#userAvatar');

// State management
let allSubjects = [];
let currentMode = null; // 'practice' or 'exam'

// Fetch and display subjects
async function loadSubjects() {
    try {
        const response = await fetch('questions.json');
        const data = await response.json();
        allSubjects = data.subjects || [];
        displaySubjects(allSubjects);
    } catch (error) {
        console.error('Error loading subjects:', error);
        showEmptyState();
    }
}

// Display all available subjects
function displaySubjects(subjects) {
    const grid = document.getElementById('subjectsGrid');
    const emptyState = document.getElementById('emptyState');
    
    if (!subjects || subjects.length === 0) {
        grid.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';
    grid.innerHTML = subjects.map(subject => `
        <div class="subject-card" data-subject="${subject.name}">
            <div class="subject-card-icon">
                <i class="fas fa-book"></i>
            </div>
            <h3>${subject.name}</h3>
            <p>${subject.questions ? subject.questions.length : 0} Questions</p>
        </div>
    `).join('');

    // Add click listeners to subject cards
    document.querySelectorAll('.subject-card').forEach(card => {
        card.addEventListener('click', () => {
            const subject = card.dataset.subject;
            showYearSelection(subject);
        });
    });
}

// Show year selection modal
function showYearSelection(subject) {
    const subjectData = allSubjects.find(s => s.name === subject);
    if (!subjectData) return;

    // Get unique years from questions
    const years = [...new Set(subjectData.questions.map(q => q.year))].sort((a, b) => b - a);
    
    const modal = document.getElementById('subjectModal');
    const modalTitle = document.getElementById('modalTitle');
    const yearList = document.getElementById('yearList');
    
    modalTitle.textContent = `Select Year - ${subject}`;
    
    yearList.innerHTML = years.map(year => `
        <div class="year-item" data-year="${year}" data-subject="${subject}">
            ${year}
        </div>
    `).join('');

    yearList.querySelectorAll('.year-item').forEach(item => {
        item.addEventListener('click', () => {
            const selectedYear = item.dataset.year;
            const selectedSubject = item.dataset.subject;
            
            if (currentMode === 'practice') {
                startPracticeMode(selectedSubject, selectedYear);
            } else if (currentMode === 'exam') {
                startExamMode(selectedSubject, selectedYear);
            }
            
            modal.classList.remove('show');
        });
    });

    modal.classList.add('show');
}

// Start practice mode
function startPracticeMode(subject, year) {
    const subjectData = allSubjects.find(s => s.name === subject);
    if (!subjectData) return;

    // Filter questions by year
    const yearQuestions = subjectData.questions.filter(q => q.year == year);
    
    // Store in localStorage for practice page
    localStorage.setItem('practiceSubject', subject);
    localStorage.setItem('practiceYear', year);
    localStorage.setItem('practiceQuestions', JSON.stringify(yearQuestions));
    
    // Redirect to practice page (you might create practice.html for this)
    window.location.href = `exam.html?mode=practice`;
}

// Start exam mode
function startExamMode(subject, year) {
    const subjectData = allSubjects.find(s => s.name === subject);
    if (!subjectData) return;

    // Filter questions by year
    const yearQuestions = subjectData.questions.filter(q => q.year == year);
    
    // Store in localStorage for exam page
    localStorage.setItem('examSubject', subject);
    localStorage.setItem('examYear', year);
    localStorage.setItem('selectedTopics', JSON.stringify([`${subject}||${year}`]));
    localStorage.setItem('questionCount', yearQuestions.length);
    
    // Set exam duration (example: 1 minute per question or fixed time)
    const durationMinutes = Math.ceil(yearQuestions.length * 1.5); // 1.5 minutes per question
    localStorage.setItem('examDurationMinutes', durationMinutes);
    localStorage.setItem('examEndTime', Date.now() + durationMinutes * 60 * 1000);
    
    // Redirect to exam page
    window.location.href = 'exam.html';
}

// Hide empty state
function showEmptyState() {
    document.getElementById('subjectsGrid').innerHTML = '';
    document.getElementById('emptyState').style.display = 'block';
}

// Filter subjects based on search
function filterSubjects(searchTerm) {
    if (!searchTerm.trim()) {
        displaySubjects(allSubjects);
        return;
    }

    const filtered = allSubjects.filter(subject =>
        subject.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    displaySubjects(filtered);
}

// Event Listeners
document.getElementById('practiceModeBtn').addEventListener('click', () => {
    currentMode = 'practice';
    // Show subject selection by scrolling to the subjects grid
    document.querySelector('.theory-content').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('examModeBtn').addEventListener('click', () => {
    currentMode = 'exam';
    // Show subject selection by scrolling to the subjects grid
    document.querySelector('.theory-content').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('subjectSearch').addEventListener('input', (e) => {
    filterSubjects(e.target.value);
});

document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('subjectModal').classList.remove('show');
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('subjectModal');
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Initialize the page
window.addEventListener('DOMContentLoaded', () => {
    loadSubjects();
});
