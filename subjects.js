const subjectGrid = document.getElementById("subjectGrid");
const countSpan = document.getElementById("count");
const searchInput = document.getElementById("subjectSearch");
const selectedTopics = new Set();
const selectedSubjects = new Set();
let currentSelectedSubject = null;
let allSubjects = [];

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("questions.json");
        const data = await response.json();

        if (!data.subjects) {
            subjectGrid.innerHTML = `<p style="color:red;">Invalid JSON structure.</p>`;
            return;
        }

        allSubjects = data.subjects;
        renderSubjects(allSubjects);

        // Search functionality
        searchInput.addEventListener("input", (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredSubjects = allSubjects.filter(subject =>
                subject.name.toLowerCase().includes(searchTerm)
            );
            renderSubjects(filteredSubjects);
        });

        updateCount();
        showFab();

    } catch (error) {
        console.error("Error loading JSON:", error);
        subjectGrid.innerHTML = `<p style="color:red;">Failed to load subjects.</p>`;
    }
});

function renderSubjects(subjects) {
    subjectGrid.innerHTML = "";

    if (subjects.length === 0) {
        subjectGrid.innerHTML = `<p style="color:#999; text-align:center; padding: 20px;">No subjects found.</p>`;
        return;
    }

    subjects.forEach(subject => {
        // Group questions by topic
        const topicsMap = {};
        subject.questions.forEach(q => {
            if (!topicsMap[q.topic]) topicsMap[q.topic] = [];
            topicsMap[q.topic].push(q);
        });

        const card = document.createElement("div");
        card.className = "subject-card active";
        card.setAttribute("data-subject-name", subject.name);
        card.innerHTML = `
            <div class="card-header">
                <h3><i class="fas fa-book sub-icon"></i>${subject.name}</h3>
                <i class="fas fa-chevron-down chevron"></i>
            </div>
            <div class="topics-area">
                ${Object.keys(topicsMap).map(topic => `
                    <div class="topic-row" data-subject="${subject.name}" data-topic="${topic}">
                        <div class="custom-check"><i class="fas fa-check"></i></div>
                        <span>${topic}</span>
                    </div>
                `).join('')}
            </div>
        `;

        subjectGrid.appendChild(card);
    });

    // Topic selection logic - ENFORCE SINGLE SUBJECT ONLY
    document.querySelectorAll(".topic-row").forEach(row => {
        row.addEventListener("click", () => {
            const subject = row.dataset.subject;
            const topic = row.dataset.topic;
            const key = subject + "||" + topic;

            // If trying to select from a different subject, warn and prevent
            if (currentSelectedSubject && currentSelectedSubject !== subject) {
                alert(`You can only select topics from one subject at a time. You have already selected from "${currentSelectedSubject}". Clear your selection to switch subjects.`);
                return;
            }

            // Toggle selection
            if (row.classList.contains("selected")) {
                row.classList.remove("selected");
                selectedTopics.delete(key);
                
                // If no more topics from this subject, clear currentSelectedSubject
                let hasTopicsFromSubject = false;
                selectedTopics.forEach(t => {
                    if (t.startsWith(subject + "||")) {
                        hasTopicsFromSubject = true;
                    }
                });
                
                if (!hasTopicsFromSubject) {
                    currentSelectedSubject = null;
                }
            } else {
                // Select this topic
                row.classList.add("selected");
                selectedTopics.add(key);
                currentSelectedSubject = subject;
            }

            updateCount();
        });
    });

    // Card header click - toggle expand/collapse for individual subject only
    document.querySelectorAll(".card-header").forEach(header => {
        header.addEventListener("click", () => {
            const card = header.closest(".subject-card");
            card.classList.toggle("active");
        });
    });
}

function updateCount() {
    countSpan.innerText = selectedTopics.size;
}

function clearSelection() {
    // Clear all selected topics
    selectedTopics.clear();
    currentSelectedSubject = null;
    
    // Remove visual selection from all topic rows
    document.querySelectorAll(".topic-row.selected").forEach(row => {
        row.classList.remove("selected");
    });
    
    updateCount();
    alert("Selection cleared. You can now select from a different subject.");
}

function showFab() {
    const fab = document.getElementById("actionFab");
    fab.classList.add("show");
}

function showQuestionCountModal() {
    if (selectedTopics.size === 0) {
        alert("Please select at least one topic to continue.");
        return;
    }
    
    const modal = document.getElementById("questionCountModal");
    const selectedCountSpan = document.getElementById("selectedCount");
    const availableQuestionsSpan = document.getElementById("availableQuestionsCount");
    selectedCountSpan.textContent = selectedTopics.size;
    
    // Calculate available questions for selected topics
    let availableQuestions = 0;
    allSubjects.forEach(subject => {
        subject.questions.forEach(question => {
            // Check if this question matches any of the selected topics
            selectedTopics.forEach(selectedTopic => {
                if (selectedTopic.includes(question.topic || question.section)) {
                    availableQuestions++;
                }
            });
        });
    });
    
    availableQuestionsSpan.textContent = availableQuestions;
    
    // Set max value for the input
    const questionCountInput = document.getElementById("questionCount");
    questionCountInput.max = availableQuestions;
    
    // Set default value to min of 10 or available questions
    questionCountInput.value = Math.min(10, availableQuestions);
    
    modal.classList.remove("hidden");
}

function closeQuestionCountModal() {
    const modal = document.getElementById("questionCountModal");
    modal.classList.add("hidden");
}

function proceedToExam() {
    const studentNameInput = document.getElementById("studentNameInput");
    const studentName = studentNameInput.value.trim();
    const questionCountInput = document.getElementById("questionCount");
    const questionCount = parseInt(questionCountInput.value) || 10;
    
    if (!studentName) {
        alert("Please enter your name to continue.");
        return;
    }
    
    if (questionCount < 1) {
        alert("Please enter a valid number of questions (at least 1).");
        return;
    }
    
    // Store selected topics, question count, and student name in localStorage
    const topicsArray = Array.from(selectedTopics);
    localStorage.setItem("selectedTopics", JSON.stringify(topicsArray));
    localStorage.setItem("questionCount", questionCount);
    localStorage.setItem("studentName", studentName);
    localStorage.setItem("examStartTime", Date.now().toString());
    
    // Navigate to exam
    window.location.href = "exam.html";
}

function startGeneration() {
    if (selectedTopics.size === 0) {
        alert("Please select at least one topic.");
        return;
    }

    localStorage.setItem("selectedTopics", JSON.stringify([...selectedTopics]));
    window.location.href = "exam.html";
}
