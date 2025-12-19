const subjectsData = [
    { name: "Mathematics", icon: "fa-calculator", topics: ["Algebraic Processes", "Plane Geometry", "Coordinate Geometry", "Trigonometry", "Calculus", "Statistics & Probability", "Number Bases", "Sets"] },
    { name: "English Language", icon: "fa-book", topics: ["Lexis & Structure", "Reading Comprehension", "Summary Writing", "Oral English", "Letter Writing"] },
    { name: "Physics", icon: "fa-atom", topics: ["Mechanics", "Thermal Physics", "Waves & Optics", "Electricity & Magnetism", "Atomic & Nuclear Physics"] },
    { name: "Chemistry", icon: "fa-flask", topics: ["Atomic Structure", "Chemical Bonding", "Stoichiometry", "Organic Chemistry", "Electrochemistry", "Gas Laws"] },
    { name: "Biology", icon: "fa-dna", topics: ["Classification", "Cell Biology", "Plant Nutrition", "Respiration", "Genetics & Evolution", "Ecology"] },
    { name: "Economics", icon: "fa-chart-line", topics: ["Theory of Demand", "Production Theory", "Market Structures", "National Income", "Public Finance"] },
    { name: "Government", icon: "fa-landmark", topics: ["Political Systems", "Constitutions", "Public Administration", "International Relations", "Local Government"] },
    { name: "Civic Education", icon: "fa-users", topics: ["Values", "Citizenship", "Human Rights", "Democracy", "Drug Abuse"] },
    { name: "Geography", icon: "fa-earth-africa", topics: ["Physical Geography", "Map Reading", "Regional Geography", "Economic Geography"] },
    { name: "Financial Accounting", icon: "fa-file-invoice-dollar", topics: ["Double Entry System", "Final Accounts", "Partnership Accounts", "Company Accounts"] }
];

let currentActiveSubject = null; 

document.addEventListener('DOMContentLoaded', () => {
    initBubbles();
    renderSubjects(subjectsData);

    const searchInput = document.getElementById('subjectSearch');
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = subjectsData.filter(s => s.name.toLowerCase().includes(term));
        renderSubjects(filtered);
    });
});

function renderSubjects(data) {
    const grid = document.getElementById('subjectGrid');
    grid.innerHTML = ''; 
    
    data.forEach(sub => {
        const card = document.createElement('div');
        card.className = 'subject-card';
        if(currentActiveSubject === sub.name) card.classList.add('active');

        card.innerHTML = `
            <div class="card-header" onclick="toggleCard(this)">
                <h3><i class="fas ${sub.icon} sub-icon"></i> ${sub.name}</h3>
                <i class="fas fa-chevron-down chevron"></i>
            </div>
            <div class="topics-area">
                <!-- NEW: Select All Subject Option -->
                <div class="topic-row select-all-row" onclick="selectEntireSubject(this, '${sub.name}')">
                    <div class="custom-check"><i class="fas fa-check-double"></i></div>
                    <span><strong>Select Full Syllabus (${sub.name})</strong></span>
                </div>
                
                <div class="divider" style="height:1px; background:rgba(255,255,255,0.1); margin: 5px 25px;"></div>

                ${sub.topics.map(topic => `
                    <div class="topic-row individual-topic" onclick="selectTopic(this, '${sub.name}')">
                        <div class="custom-check"><i class="fas fa-check"></i></div>
                        <span>${topic}</span>
                    </div>
                `).join('')}
            </div>
        `;
        grid.appendChild(card);
    });
}

function toggleCard(header) {
    header.parentElement.classList.toggle('active');
}

// Logic to clear previous subject's selections
function clearOtherSubjects(newSubject) {
    if (currentActiveSubject !== null && currentActiveSubject !== newSubject) {
        document.querySelectorAll('.topic-row.selected').forEach(el => {
            el.classList.remove('selected');
        });
    }
}

// OPTION 1: Select Entire Subject
function selectEntireSubject(row, subjectName) {
    clearOtherSubjects(subjectName);
    currentActiveSubject = subjectName;

    const card = row.closest('.subject-card');
    const isAlreadySelected = row.classList.contains('selected');
    const allTopicsInCard = card.querySelectorAll('.topic-row');

    if (isAlreadySelected) {
        // Deselect everything in this card
        allTopicsInCard.forEach(t => t.classList.remove('selected'));
        currentActiveSubject = null;
    } else {
        // Select everything in this card
        allTopicsInCard.forEach(t => t.classList.add('selected'));
    }

    updateUI();
}

// OPTION 2: Select Individual Topic
function selectTopic(row, subjectName) {
    clearOtherSubjects(subjectName);
    currentActiveSubject = subjectName;

    row.classList.toggle('selected');

    // Logic: If user manually deselects a topic, the "Select All" row should also uncheck
    const card = row.closest('.subject-card');
    const selectAllRow = card.querySelector('.select-all-row');
    const totalTopics = card.querySelectorAll('.individual-topic').length;
    const selectedTopics = card.querySelectorAll('.individual-topic.selected').length;

    if (selectedTopics === totalTopics) {
        selectAllRow.classList.add('selected');
    } else {
        selectAllRow.classList.remove('selected');
    }

    if (selectedTopics === 0) {
        currentActiveSubject = null;
    }

    updateUI();
}

function updateUI() {
    const selectedCount = document.querySelectorAll('.individual-topic.selected').length;
    
    // Check if "Full Syllabus" is selected (counts as 1 major action or all topics)
    const isFullSyllabus = document.querySelector('.select-all-row.selected');
    
    document.getElementById('count').innerText = selectedCount;
    
    const fab = document.getElementById('actionFab');
    if (selectedCount > 0) fab.classList.add('show');
    else fab.classList.remove('show');
}
function startGeneration() {
    const selectedNodes = document.querySelectorAll('.topic-row.selected:not(.select-all-row) span');
    const topics = Array.from(selectedNodes).map(n => n.innerText);

    const isFullSyllabus = document.querySelector('.select-all-row.selected') !== null;

    if (topics.length === 0 && !isFullSyllabus) {
        alert("Please select a subject or specific topics!");
        return;
    }

    const cbtSession = {
        subject: currentActiveSubject,
        topics: topics,
        isFullSyllabus: isFullSyllabus
    };

    sessionStorage.setItem('cbtSession', JSON.stringify(cbtSession));
    window.location.href = 'cbt.html';
}

function initBubbles() { /* ... same as before ... */ }