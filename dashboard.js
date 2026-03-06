// Dashboard Analytics & Exam History Management

function showCenteredAlert(message, options = {}) {
    const { redirectTo = '', delay = 1700 } = options;

    const existing = document.getElementById('centerAlertOverlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'centerAlertOverlay';
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.background = 'rgba(0,0,0,0.55)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '99999';

    const card = document.createElement('div');
    card.style.maxWidth = '520px';
    card.style.width = '92%';
    card.style.padding = '22px';
    card.style.borderRadius = '14px';
    card.style.textAlign = 'center';
    card.style.fontFamily = 'Inter, sans-serif';
    card.style.fontWeight = '600';
    card.style.lineHeight = '1.5';
    card.style.color = '#fff';
    card.style.border = '1px solid rgba(255,255,255,0.2)';
    card.style.backdropFilter = 'blur(8px)';
    card.style.background = 'linear-gradient(135deg, rgba(245,158,11,0.92), rgba(217,119,6,0.92))';
    card.textContent = message;

    overlay.appendChild(card);
    document.body.appendChild(overlay);

    setTimeout(() => {
        overlay.remove();
        if (redirectTo) {
            window.location.href = redirectTo;
        }
    }, delay);
}

let examHistory = [];
let charts = { scoreTr: null, subjectPerf: null, difficultDist: null };

// ============ Initialize ============
document.addEventListener('DOMContentLoaded', async () => {
    // redirect to login if not authenticated
    if (!localStorage.getItem('examVerseLoggedIn')) {
        window.location.href = 'login.html';
        return;
    }

    const active = await ensureSubscriberIsActive();
    if (!active) {
        return;
    }

    loadUserProfile();
    loadExamHistory();
    updateSummaryStats();
    renderCharts();
    renderHistoryTable();
    setupEventListeners();
});

async function ensureSubscriberIsActive() {
    try {
        const userStr = localStorage.getItem('examVerseUser');
        const user = userStr ? JSON.parse(userStr) : null;
        const email = (user?.email || '').trim().toLowerCase();

        if (!email) {
            showCenteredAlert('No subscriber email found. Complete subscription to continue.', {
                redirectTo: 'subscribe.html',
                delay: 1900
            });
            return false;
        }

        const apiBase = localStorage.getItem('notificationApiUrl') || 'http://localhost:5000/api';
        const response = await fetch(`${apiBase}/subscribers/status?email=${encodeURIComponent(email)}`);
        const data = await response.json();

        if (!response.ok || !data.success || data.status !== 'active') {
            showCenteredAlert('Your subscription is not active yet. Please complete payment confirmation.', {
                redirectTo: 'subscribe.html',
                delay: 2100
            });
            return false;
        }

        return true;
    } catch (error) {
        showCenteredAlert('Unable to verify subscription status. Please try again.', {
            redirectTo: 'subscribe.html',
            delay: 2100
        });
        return false;
    }
}

// ============ Load User Profile ============
function loadUserProfile() {
    try {
        console.log('Dashboard: Loading user profile...');
        
        // Get user data from localStorage
        const userStr = localStorage.getItem('examVerseUser');
        if (!userStr) {
            console.warn('No examVerseUser data in localStorage');
            setDefaultProfile();
            return;
        }
        
        const user = JSON.parse(userStr);
        console.log('Dashboard: User data loaded:', {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            hasPassport: !!user.passport
        });

        // Update welcome card
        updateWelcomeCard(user);
        
        // Update header profile
        updateHeaderProfile(user);
        
    } catch (error) {
        console.error('Dashboard: Error loading user profile:', error);
        setDefaultProfile();
    }
}

function updateWelcomeCard(user) {
    const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.name || 'Student';
    const email = user.email || 'No email provided';
    const photoUrl = user.passport || user.avatar || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
    
    // Update name
    const nameEl = document.getElementById('welcomeUserName');
    if (nameEl) {
        nameEl.textContent = fullName;
        console.log('Updated welcome name:', fullName);
    }
    
    // Update email
    const emailEl = document.getElementById('welcomeUserEmail');
    if (emailEl) {
        emailEl.textContent = email;
        console.log('Updated welcome email:', email);
    }
    
    // Update photo
    const photoEl = document.getElementById('welcomeUserPhoto');
    if (photoEl) {
        photoEl.src = photoUrl;
        photoEl.style.display = 'block';
        photoEl.style.visibility = 'visible';
        photoEl.style.opacity = '1';
        photoEl.alt = fullName;
        console.log('Updated welcome photo');
    }
}

function updateHeaderProfile(user) {
    const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.name || 'User';
    const email = user.email || '';
    const photoUrl = user.passport || user.avatar || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
    
    // Update header name
    const headerName = document.getElementById('userProfileName');
    if (headerName) {
        headerName.textContent = fullName;
    }
    
    // Update header email
    const headerEmail = document.getElementById('userProfileEmail');
    if (headerEmail) {
        headerEmail.textContent = email;
    }
    
    // Update header photo
    const headerPhoto = document.getElementById('userProfilePhoto');
    if (headerPhoto) {
        headerPhoto.src = photoUrl;
        headerPhoto.style.display = 'block';
        headerPhoto.style.visibility = 'visible';
        headerPhoto.style.opacity = '1';
    }
}

function setDefaultProfile() {
    console.warn('Setting default profile values');
    
    const defaultName = 'Student';
    const defaultEmail = 'No email';
    const defaultPhoto = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
    
    // Welcome card
    const nameEl = document.getElementById('welcomeUserName');
    if (nameEl) nameEl.textContent = defaultName;
    
    const emailEl = document.getElementById('welcomeUserEmail');
    if (emailEl) emailEl.textContent = defaultEmail;
    
    const photoEl = document.getElementById('welcomeUserPhoto');
    if (photoEl) photoEl.src = defaultPhoto;
    
    // Header
    const headerName = document.getElementById('userProfileName');
    if (headerName) headerName.textContent = defaultName;
    
    const headerEmail = document.getElementById('userProfileEmail');
    if (headerEmail) headerEmail.textContent = defaultEmail;
    
    const headerPhoto = document.getElementById('userProfilePhoto');
    if (headerPhoto) headerPhoto.src = defaultPhoto;
}

// ============ Load Exam Data ============
function loadExamHistory() {
    const stored = localStorage.getItem('examHistory');
    examHistory = stored ? JSON.parse(stored) : [];
    examHistory.sort((a, b) => new Date(b.date) - new Date(a.date)); // Newest first
}

// ============ Summary Statistics ============
function updateSummaryStats() {
    if (examHistory.length === 0) {
        document.getElementById('totalExams').textContent = '0';
        document.getElementById('avgScore').textContent = '0%';
        document.getElementById('studyTime').textContent = '0h';
        document.getElementById('bestScore').textContent = '0%';
        
        // Update welcome card
        document.getElementById('welcomeTotalExams').textContent = '0';
        document.getElementById('welcomeAvgScore').textContent = '0%';
        return;
    }

    // Total exams
    const totalExams = examHistory.length;
    document.getElementById('totalExams').textContent = totalExams;
    document.getElementById('welcomeTotalExams').textContent = totalExams;

    // Average score
    const avgScore = Math.round(
        examHistory.reduce((sum, exam) => sum + (exam.score || 0), 0) / totalExams
    );
    document.getElementById('avgScore').textContent = `${avgScore}%`;
    document.getElementById('welcomeAvgScore').textContent = `${avgScore}%`;

    // Best score
    const bestScore = Math.max(...examHistory.map(e => e.score || 0));
    document.getElementById('bestScore').textContent = `${bestScore}%`;

    // Total study time (in minutes)
    const totalMinutes = examHistory.reduce((sum, exam) => {
        const duration = parseInt(exam.duration) || 0;
        return sum + duration;
    }, 0);
    const hours = Math.round(totalMinutes / 60);
    document.getElementById('studyTime').textContent = `${hours}h`;
}

// ============ Charts ============
function renderCharts() {
    renderScoreTrendChart();
    renderSubjectPerformanceChart();
    renderDifficultyChart();
}

function renderScoreTrendChart() {
    const ctx = document.getElementById('scoreTrendChart');
    if (!ctx) return;

    const container = ctx.parentElement;
    // ensure container is visible regardless of data length
    if (container) container.style.display = 'block';

    if (examHistory.length === 0) {
        document.getElementById('noScoreTrend').style.display = 'flex';
        if (charts.scoreTr) charts.scoreTr.destroy();
        console.log('renderScoreTrendChart: no history available');
        return;
    }

    // there is at least one exam
    document.getElementById('noScoreTrend').style.display = 'none';

    const data = examHistory.slice(0, 10).reverse(); // Last 10 exams
    const labels = data.map((e, i) => `Exam ${i + 1}`);
    const scores = data.map(e => e.score || 0);
    console.log('renderScoreTrendChart: labels', labels, 'scores', scores);

    if (charts.scoreTr) charts.scoreTr.destroy();

    charts.scoreTr = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label: 'Score (%)',
                data: scores,
                borderColor: '#8b5cf6',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#8b5cf6',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 7,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { callback: v => v + '%' }
                }
            }
        }
    });
}

function renderSubjectPerformanceChart() {
    const ctx = document.getElementById('subjectPerformanceChart');
    if (!ctx) return;

    if (examHistory.length === 0) {
        document.getElementById('noSubjectData').style.display = 'flex';
        ctx.parentElement.style.display = 'none';
        if (charts.subjectPerf) charts.subjectPerf.destroy();
        return;
    }

    document.getElementById('noSubjectData').style.display = 'none';
    ctx.parentElement.style.display = 'block';

    // Group by subject
    const subjectData = {};
    examHistory.forEach(exam => {
        const subject = exam.subject || 'Unknown';
        if (!subjectData[subject]) {
            subjectData[subject] = { total: 0, count: 0 };
        }
        subjectData[subject].total += exam.score || 0;
        subjectData[subject].count += 1;
    });

    const labels = Object.keys(subjectData);
    const avgScores = labels.map(s => Math.round(subjectData[s].total / subjectData[s].count));

    const colors = [
        '#8b5cf6', '#0284c7', '#059669', '#d97706',
        '#db2777', '#7c2d12', '#581c87', '#312e81'
    ];

    if (charts.subjectPerf) charts.subjectPerf.destroy();

    charts.subjectPerf = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels,
            datasets: [{
                data: avgScores,
                backgroundColor: colors.slice(0, labels.length),
                borderColor: '#fff',
                borderWidth: 2,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        usePointStyle: true,
                    }
                }
            }
        }
    });
}

function renderDifficultyChart() {
    const ctx = document.getElementById('difficultyChart');
    if (!ctx) return;

    if (examHistory.length === 0) {
        document.getElementById('noDifficultyData').style.display = 'flex';
        ctx.parentElement.style.display = 'none';
        if (charts.difficultDist) charts.difficultDist.destroy();
        return;
    }

    document.getElementById('noDifficultyData').style.display = 'none';
    ctx.parentElement.style.display = 'block';

    // Count questions by difficulty from all exams
    const difficultyCount = { Easy: 0, Medium: 0, Hard: 0 };
    examHistory.forEach(exam => {
        if (exam.questions && Array.isArray(exam.questions)) {
            exam.questions.forEach(q => {
                // Note: The difficulty info would be from the original questions
                // For now, we'll estimate based on exam performance
                difficultyCount.Medium += 1;
            });
        }
    });

    // If we don't have question-level difficulty data, estimate based on exam patterns
    const totalQuestions = examHistory.reduce((sum, exam) => sum + (exam.totalQuestions || 0), 0);
    if (totalQuestions > 0) {
        // Rough estimation: 30% easy, 50% medium, 20% hard (typical distribution)
        difficultyCount.Easy = Math.round(totalQuestions * 0.3);
        difficultyCount.Medium = Math.round(totalQuestions * 0.5);
        difficultyCount.Hard = Math.round(totalQuestions * 0.2);
    }

    if (charts.difficultDist) charts.difficultDist.destroy();

    charts.difficultDist = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Easy', 'Medium', 'Hard'],
            datasets: [{
                label: 'Questions',
                data: [difficultyCount.Easy, difficultyCount.Medium, difficultyCount.Hard],
                backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
                borderColor: ['#059669', '#d97706', '#dc2626'],
                borderWidth: 2,
                borderRadius: 8,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { stepSize: 1 }
                }
            }
        }
    });
}

// ============ History Table ============
function renderHistoryTable() {
    const tbody = document.getElementById('historyTableBody');
    if (!tbody) return;

    if (examHistory.length === 0) {
        tbody.innerHTML = `
            <tr class="empty-row">
                <td colspan="6">
                    <i class="fas fa-inbox"></i>
                    No exams completed yet. <a href="examination_year.html">Start an exam</a>
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = examHistory.map((exam, idx) => {
        const date = new Date(exam.date);
        const dateStr = date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
        });
        const duration = exam.duration ? `${exam.duration} min` : '--';
        const score = exam.score !== undefined ? `${exam.score}%` : '--';
        const status = getStatusBadge(exam.score, exam.totalQuestions, exam.correct);

        return `
            <tr>
                <td>${dateStr}</td>
                <td>${exam.subject || '--'}</td>
                <td>${duration}</td>
                <td>${score}</td>
                <td>${status}</td>
                <td><button class="action-btn" onclick="viewResult(${idx})">View</button></td>
            </tr>
        `;
    }).join('');
}

function getStatusBadge(score, total, correct) {
    let status = 'incomplete';
    let label = 'Incomplete';

    if (score !== undefined && total !== undefined) {
        status = score >= 50 ? 'passed' : 'failed';
        label = score >= 50 ? 'Passed' : 'Failed';
    }

    return `<span class="status-badge status-${status}"><i class="fas fa-${status === 'passed' ? 'check-circle' : status === 'failed' ? 'times-circle' : 'clock'}"></i> ${label}</span>`;
}

// ============ View Result Modal ============
function viewResult(index) {
    const exam = examHistory[index];
    if (!exam) return;

    const modal = document.getElementById('resultModal');
    const score = exam.score || 0;

    // Update modal content
    document.getElementById('resultTitle').textContent = `${exam.subject} Result`;
    document.getElementById('resultScoreText').textContent = `${Math.round(score)}%`;
    document.getElementById('resultSubject').textContent = exam.subject || '--';
    document.getElementById('resultQCount').textContent = `${exam.correct}/${exam.totalQuestions}`;
    document.getElementById('resultCorrect').textContent = exam.correct || 0;
    document.getElementById('resultDuration').textContent = exam.duration ? `${exam.duration} min` : '--';

    // Update score circle progress
    const scoreCircle = document.querySelector('.score-progress');
    const circumference = 282.74;
    const offset = circumference - (score / 100) * circumference;
    scoreCircle.style.strokeDashoffset = offset;

    // Render question breakdown
    renderQuestionBreakdown(exam);

    // Store selected exam for retake
    window.selectedExamForRetake = exam;

    // Show modal
    modal.classList.add('active');
}

function renderQuestionBreakdown(exam) {
    const breakdown = document.getElementById('breakdownList');
    if (!exam.questions || exam.questions.length === 0) {
        breakdown.innerHTML = '<p style="color: #9ca3af;">No question data available.</p>';
        return;
    }

    breakdown.innerHTML = exam.questions.map((q, i) => {
        const isCorrect = q.answered === q.correct;
        const statusClass = isCorrect ? 'correct' : 'incorrect';
        const statusText = isCorrect ? 'Correct' : 'Incorrect';

        return `
            <div class="breakdown-item ${statusClass}">
                <span class="breakdown-number">${i + 1}.</span>
                <div class="breakdown-content">
                    <div>${q.question?.substring(0, 60) || 'Q' + (i+1)}...</div>
                    <div class="breakdown-status">${statusText}</div>
                </div>
            </div>
        `;
    }).join('');
}

function closeResultModal() {
    document.getElementById('resultModal').classList.remove('active');
}

// ============ Event Listeners ============
function setupEventListeners() {
    // Menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        });
    }

    // Sidebar toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        });
    }

    // Modal
    document.getElementById('modalClose')?.addEventListener('click', closeResultModal);
    document.getElementById('modalClose2')?.addEventListener('click', closeResultModal);

    // Close modal on outside click
    document.getElementById('resultModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'resultModal') closeResultModal();
    });

    // Logout
    document.getElementById('logoutBtn')?.addEventListener('click', logout);

    // Export
    document.getElementById('exportBtn')?.addEventListener('click', exportResults);

    // Retake exam
    document.getElementById('retakeBtn')?.addEventListener('click', () => {
        if (window.selectedExamForRetake) {
            const exam = window.selectedExamForRetake;
            localStorage.setItem('retakeSubject', exam.subject);
            localStorage.setItem('retakeYear', exam.year || '');
            window.location.href = 'subject.html';
        }
    });
}

// ============ Utility Functions ============
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        // clear our custom persistent flags (keep user data for convenience)
        localStorage.removeItem('examVerseLoggedIn');
        // optionally remove other temporary items if you wish
        // localStorage.removeItem('currentUser');
        // localStorage.removeItem('userEmail');
        window.location.href = 'login.html';
    }
}

function exportResults() {
    if (examHistory.length === 0) {
        alert('No exam data to export');
        return;
    }

    // Create CSV
    let csv = 'Date,Subject,Duration (min),Score (%),Status,Correct/Total\n';

    examHistory.forEach(exam => {
        const date = new Date(exam.date).toLocaleDateString();
        const subject = exam.subject || '--';
        const duration = exam.duration || '--';
        const score = exam.score || '--';
        const status = score >= 50 ? 'Passed' : 'Failed';
        const ratio = `${exam.correct}/${exam.totalQuestions}`;

        csv += `"${date}","${subject}",${duration},"${score}%","${status}","${ratio}"\n`;
    });

    // Download
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `examverse-results-${new Date().getTime()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
}

// ============ Save Exam Result (called from exam.js) ============
function saveExamResult(examData) {
    const result = {
        id: Date.now(),
        date: new Date().toISOString(),
        subject: examData.subject,
        year: examData.year,
        totalQuestions: examData.totalQuestions || 0,
        correct: examData.correctAnswers || 0,
        score: examData.score || 0,
        duration: examData.duration || 0,
        questions: examData.questionDetails || []
    };

    examHistory.unshift(result);
    localStorage.setItem('examHistory', JSON.stringify(examHistory));
    return result;
}

// listen for storage changes to refresh dashboard automatically
window.addEventListener('storage', event => {
    if (event.key === 'examHistory') {
        console.log('Storage event: examHistory updated, refreshing dashboard data');
        loadExamHistory();
        updateSummaryStats();
        renderCharts();
        renderHistoryTable();
    }
});

// ============ Debug Functions ============
window.debugDashboard = function() {
    console.log('=== DASHBOARD DEBUG INFO ===');
    console.log('examVerseLoggedIn:', localStorage.getItem('examVerseLoggedIn'));
    console.log('examVerseUser:', localStorage.getItem('examVerseUser'));
    console.log('examHistory:', localStorage.getItem('examHistory'));
    
    const userStr = localStorage.getItem('examVerseUser');
    if (userStr) {
        const user = JSON.parse(userStr);
        console.log('Parsed user:', user);
        console.log('Has passport:', !!user.passport);
        console.log('Has firstName:', !!user.firstName);
        console.log('Has lastName:', !!user.lastName);
        console.log('Has email:', !!user.email);
    }
    
    console.log('DOM Elements:');
    console.log('welcomeUserName:', document.getElementById('welcomeUserName'));
    console.log('welcomeUserEmail:', document.getElementById('welcomeUserEmail'));
    console.log('welcomeUserPhoto:', document.getElementById('welcomeUserPhoto'));
    console.log('userProfileName:', document.getElementById('userProfileName'));
    console.log('userProfilePhoto:', document.getElementById('userProfilePhoto'));
    console.log('userProfileEmail:', document.getElementById('userProfileEmail'));
    console.log('=== END DEBUG ===');
};

window.reloadProfile = function() {
    console.log('Reloading profile...');
    loadUserProfile();
    loadExamHistory();
    updateSummaryStats();
    console.log('Profile reloaded');
};