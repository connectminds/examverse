// redirect to login if user isn't authenticated
if (!localStorage.getItem('examVerseLoggedIn')) {
    window.location.href = 'login.html';
}

// Comments database based on score ranges
const commentsDatabase = {
    '0-40': [
        'Keep practicing regularly to improve your performance.',
        'Review the topics thoroughly before your next attempt.',
        'Consider seeking additional help from your teacher.',
        'Focus on understanding the fundamentals better.',
        'Don\'t give up! Consistent effort will bring improvement.'
    ],
    '41-50': [
        'You\'re on the right track, but needs more practice.',
        'Try to identify weak areas and focus on them.',
        'Review your mistakes and learn from them.',
        'With more effort, you can definitely do better.',
        'Good attempt! Keep pushing for improvement.'
    ],
    '51-60': [
        'Fair performance! Continue with your preparation.',
        'You have a good grasp of the topics.',
        'A bit more practice will help you achieve excellence.',
        'You\'re progressing well. Keep up the effort!',
        'Solid performance! Focus on challenging areas.'
    ],
    '61-70': [
        'Great work! You\'re showing strong understanding.',
        'Excellent effort! You\'re performing well.',
        'You\'re doing great! Just a little more to achieve excellence.',
        'Impressive performance! Keep maintaining this standard.',
        'Well done! Your dedication is paying off.'
    ],
    '80-100': [
        'Outstanding performance! Excellent work!',
        'Superb! You have demonstrated exceptional mastery.',
        'Remarkable! You\'re an exemplary student.',
        'Brilliant! Your excellence is truly commendable.',
        'Perfect effort! You\'re a shining example of excellence.'
    ]
};

function getRandomComment(scoreRange) {
    const comments = commentsDatabase[scoreRange];
    if (!comments) return 'Great effort!';
    return comments[Math.floor(Math.random() * comments.length)];
}

function getScoreRange(percentage) {
    if (percentage <= 40) return '0-40';
    if (percentage <= 50) return '41-50';
    if (percentage <= 60) return '51-60';
    if (percentage <= 70) return '61-70';
    return '80-100';
}

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function getPerformanceFeedback(percentage, timeMinutes) {
    if (percentage >= 80) {
        if (timeMinutes < 5) return '⚡ Exceptional (Very Fast)';
        if (timeMinutes < 10) return '✓ Excellent (On Time)';
        return '✓ Excellent (Thorough)';
    } else if (percentage >= 60) {
        if (timeMinutes < 5) return '⚡ Good (Very Fast)';
        return '✓ Good (On Time)';
    } else if (percentage >= 40) {
        return 'Fair (Needs Practice)';
    }
    return 'Needs Improvement';
}

// Student info (prefer registered user data but fall back to manual entry)
let studentName = localStorage.getItem('studentName') || 'Student';
let studentPhoto = '';
let studentEmail = '';
const storedUser = localStorage.getItem('examVerseUser');
if (storedUser) {
    try {
        const u = JSON.parse(storedUser);
        const fullName = [u.firstName, u.lastName].filter(Boolean).join(' ');
        if (fullName) studentName = fullName;
        if (u.passport) studentPhoto = u.passport;
        if (u.email) studentEmail = u.email;
    } catch (e) {
        console.error('Error parsing registered user data', e);
    }
}

// write values to DOM using shared utility
displayUserProfile('#studentName', '#studentPhoto', '#studentID');

// Questions & Answers
const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || {};
const questions = JSON.parse(localStorage.getItem('questions')) || [];
const examStartTime = parseInt(localStorage.getItem('examStartTime')) || Date.now();
const examEndTime = parseInt(localStorage.getItem('examEndTime')) || Date.now();

let correct = 0, incorrect = 0, attempted = 0;

questions.forEach(q => {
    if (userAnswers[q.id]) attempted++;
    if (userAnswers[q.id] === q.correctAnswer) correct++;
    else if(userAnswers[q.id]) incorrect++;
});

// Calculate time taken
const timeTakenMs = examEndTime - examStartTime;
const timeTakenMinutes = Math.floor(timeTakenMs / 1000 / 60);
const formattedTime = formatTime(timeTakenMs);
document.getElementById('timeTaken').textContent = formattedTime;

// Summary table
document.getElementById('total').textContent = questions.length;
document.getElementById('attempted').textContent = attempted;
document.getElementById('correct').textContent = correct;
document.getElementById('incorrect').textContent = incorrect;

// Calculate percentage and grade
const scorePercentage = Math.round((correct / questions.length) * 100);
document.getElementById('scorePercentage').textContent = scorePercentage + '%';

const grade = correct / questions.length >= 0.7 ? 'Excellent' :
              correct / questions.length >= 0.5 ? 'Good' : 'Needs Improvement';
document.getElementById('grade').textContent = grade;

// Performance feedback based on time
const performanceFeedback = getPerformanceFeedback(scorePercentage, timeTakenMinutes);
document.getElementById('performanceFeedback').textContent = performanceFeedback;

// Generate random comment based on score range
const scoreRange = getScoreRange(scorePercentage);
const randomComment = getRandomComment(scoreRange);
document.getElementById('teacherComment').textContent = randomComment;

// Explanations for Wrong and Unattempted Answers (Enhanced with Difficulty and Tags)
const explanationList = document.getElementById('explanationList');
questions.forEach((q, i) => {
    const userAnswer = userAnswers[q.id];
    const correctAnswer = q.correctAnswer;
    
    // Show explanation if answer is wrong OR not attempted
    if(!userAnswer || userAnswer !== correctAnswer){
        const li = document.createElement('li');
        
        const correctAnswerText = Array.isArray(q.options)
            ? q.options.find(opt => opt.label === correctAnswer)?.text || correctAnswer
            : q.options[correctAnswer] || correctAnswer;
        
        // Get difficulty and tags (from enhanced questions.json)
        const difficulty = q.difficulty || 'Medium';
        const tags = q.tags || [];
        
        const difficultyClass = difficulty.toLowerCase();
        const difficultyColor = 
            difficulty === 'Easy' ? '#10b981' :
            difficulty === 'Medium' ? '#f59e0b' : '#ef4444';
        
        let htmlContent = `
            <div class="explanation-item">
                <div class="explanation-header">
                    <strong>Q${i+1}: ${q.question || ''}</strong>
                    <div class="explanation-badges">
                        <span class="difficulty-badge difficulty-${difficultyClass}" style="background-color: ${difficultyColor};">
                            ${difficulty}
                        </span>
                    </div>
                </div>
        `;
        
        // If user didn't attempt
        if(!userAnswer){
            htmlContent += `
                <p><span style="color: #fbbf24; font-weight: 700;">Status:</span> <span style="color: #fbbf24;">Not Attempted</span></p>
            `;
        } else {
            // If user answered wrong
            const userAnswerText = Array.isArray(q.options) 
                ? q.options.find(opt => opt.label === userAnswer)?.text || userAnswer
                : q.options[userAnswer] || userAnswer;
            
            htmlContent += `
                <p><span style="color: #ef4444;">Your Answer:</span> <strong>${userAnswer}</strong> - ${userAnswerText}</p>
            `;
        }
        
        htmlContent += `
                <p><span style="color: #8b5cf6;">Correct Answer:</span> <strong>${correctAnswer}</strong> - ${correctAnswerText}</p>
                <div class="explanation-text">
                    <span style="color: #06b6d4; font-weight: 600;">Explanation:</span>
                    <p>${q.explanation || 'Review this topic carefully.'}</p>
                </div>
        `;
        
        // Add tags if available
        if (tags && tags.length > 0) {
            htmlContent += `
                <div class="explanation-tags">
                    <span style="color: #6b7280; font-size: 0.85rem; font-weight: 500;">Concepts:</span>
                    <div class="tags-list">
                        ${tags.map(tag => `<span class="tag">${tag.replace(/_/g, ' ')}</span>`).join('')}
                    </div>
                </div>
            `;
        }
        
        // Add topic if available
        if (q.topic) {
            htmlContent += `
                <p style="font-size: 0.9rem; color: #9ca3af; margin-top: 10px;">
                    <strong>Topic:</strong> ${q.topic}
                </p>
            `;
        }
        
        htmlContent += `</div>`;
        
        li.innerHTML = htmlContent;
        explanationList.appendChild(li);
    }
});

// Charts
const ctxBar = document.getElementById('barChart').getContext('2d');
new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Correct','Incorrect','Unattempted'],
        datasets: [{ 
            label: 'Performance', 
            data: [correct, incorrect, questions.length - attempted], 
            backgroundColor: ['#8b5cf6','#ef4444','#94a3b8'] 
        }]
    },
    options: { 
        responsive:true, 
        maintainAspectRatio:false, 
        plugins:{ legend:{display:false} }, 
        scales:{y:{beginAtZero:true, stepSize:1}} 
    }
});

const ctxPie = document.getElementById('pieChart').getContext('2d');
new Chart(ctxPie, {
    type: 'pie',
    data: { 
        labels:['Correct','Incorrect','Unattempted'], 
        datasets:[{
            data:[correct, incorrect, questions.length - attempted], 
            backgroundColor:['#8b5cf6','#ef4444','#94a3b8']
        }] 
    },
    options: { 
        responsive:true, 
        maintainAspectRatio:false, 
        plugins:{ legend:{position:'bottom'} } 
    }
});

// ============ Email Notification Integration ============
document.addEventListener('DOMContentLoaded', () => {
    const emailBtn = document.getElementById('emailBtn');
    if (!emailBtn) return;

    emailBtn.addEventListener('click', async () => {
        const prefs = NotificationService.getPreferences();
        
        if (!prefs || !prefs.email) {
            alert('Please subscribe to email notifications first.\n\nVisit: Settings > Email Notifications');
            return;
        }

        emailBtn.disabled = true;
        emailBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        try {
            const examData = {
                subject: localStorage.getItem('selectedSubject') || 'Exam',
                score: scorePercentage,
                correct: correct,
                totalQuestions: questions.length,
                duration: timeTakenMinutes
            };

            const result = await NotificationService.notifyExamResult(prefs.email, examData);

            if (result.success) {
                alert('✓ Exam result email sent to ' + prefs.email);
            } else {
                alert('Failed to send email: ' + (result.error || 'Unknown error'));
            }
        } catch (error) {
            alert('Error: ' + error.message);
        } finally {
            emailBtn.disabled = false;
            emailBtn.innerHTML = '<i class="fas fa-envelope"></i> Email Result';
        }
    });

    // Auto-send exam result email if user has preferences set
    (async () => {
        try {
            const prefs = NotificationService.getPreferences();
            if (prefs && prefs.email && prefs.examResults) {
                // Wait a moment for page to fully load
                setTimeout(async () => {
                    const examData = {
                        subject: localStorage.getItem('selectedSubject') || 'Exam',
                        score: scorePercentage,
                        correct: correct,
                        totalQuestions: questions.length,
                        duration: timeTakenMinutes
                    };

                    const result = await NotificationService.notifyExamResult(prefs.email, examData);
                    if (result.success) {
                        console.log('✓ Exam result auto-sent to:', prefs.email);
                    }
                }, 2000);
            }
        } catch (error) {
            console.log('Auto-send skipped:', error.message);
        }
    })();
});
