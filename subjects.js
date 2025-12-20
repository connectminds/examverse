const subjectsData = [
    { name: "General Mathematics", icon: "fa-calculator", topics: ["Number Bases", "Fractions, Decimals & Percentages", "Indices & Logarithms", "Sets", "Sequence & Series", "Algebraic Processes", "Quadratic Equations", "Matrices & Determinants", "Coordinate Geometry", "Trigonometry", "Plane Geometry", "Mensuration", "Statistics", "Probability", "Vectors", "Introductory Calculus"] },
    { name: "English Language", icon: "fa-book", topics: ["Lexis (Vocabulary)", "Structure (Grammar)", "Reading Comprehension", "Summary Writing", "Oral English", "Formal & Informal Letters", "Narrative & Descriptive Essays", "Argumentative Writing", "Register (Specialized Vocabulary)"] },
    { name: "Citizenship and Heritage Studies", icon: "fa-users", topics: ["Values & National Unity", "Citizenship Education", "Nigerian Heritage & Culture", "Human Rights & UDHR", "Constitutionalism (1999 Constitution)", "Constituted Authority", "Responsible Parenthood", "Traffic Regulations", "Inter-Personal Relationships", "Cultism & Society", "Drug Abuse", "Human Trafficking", "HIV/AIDS Prevention", "Youth Empowerment", "Democracy & Rule of Law", "Political Apathy", "Popular Participation", "Civil Society", "Public Service"] },
    { name: "Digital Technologies", icon: "fa-laptop-code", topics: ["Evolution of Computing", "Classification of Computers", "Computer Hardware (CPU, I/O)", "Logic Circuits", "Computer Software", "Operating Systems", "Networking & Internet", "Data Representation", "BASIC & Python Programming", "Database Management", "Computer Ethics & Cybersecurity", "Artificial Intelligence Basics"] },
    { name: "Christian Religious Studies", icon: "fa-bible", topics: ["The Sovereignty of God", "The Covenant", "Leadership Roles", "Parental Responsibility", "Consequences of Disobedience", "Submission to God’s Will", "Making Decisions", "Supremacy of God", "Greed and Its Effects", "Religious Reforms", "Concern for One’s Nation", "Faith in God", "Baptism & Temptation of Jesus", "The Call of Disciples", "The Beatitudes", "Miracles of Jesus", "The Parables", "The Crucifixion & Resurrection", "Early Church Fellowship", "Holy Spirit & Mission", "Justification by Faith", "Law and Grace", "New Life in Christ", "Faith and Works", "Effective Prayer", "Christian Living", "The Family", "The Second Coming (Parousia)"] },
    { name: "Islamic Studies", icon: "fa-moon", topics: ["Pre-Islamic Arabia (Jahiliyyah)", "Prophet Muhammad (PBUH) - Meccan Period", "Prophet Muhammad (PBUH) - Medinan Period", "The Hijrah", "The Rashidun Caliphs", "Compilation of the Qur'an", "Study of Selected Surahs", "Hadith Preservation", "Tawhid & Taharah", "Salat, Sawm, Zakat, Hajj", "Shari'ah Sources", "Marriage & Divorce", "Inheritance (Mirath)", "Islam in West Africa"] },
    { name: "Biology", icon: "fa-dna", topics: ["Classification of Living Things", "Cell Biology & Organization", "Plant & Animal Nutrition", "Transport Systems", "Respiration", "Excretory System", "Nervous & Hormonal Control", "Reproduction", "Genetics & Variation", "Ecology & Ecosystems", "Micro-organisms", "Evolution"] },
    { name: "Chemistry", icon: "fa-flask", topics: ["Atomic Structure", "Chemical Bonding", "Stoichiometry & Mole Concept", "Gases & Gas Laws", "Acids, Bases & Salts", "Redox Reactions", "Chemical Kinetics", "Chemical Equilibrium", "Energetics", "Organic Chemistry", "Metals & Compounds", "Non-Metals & Compounds", "Environmental Chemistry"] },
    { name: "Physics", icon: "fa-atom", topics: ["Units & Measurements", "Kinematics & Dynamics", "Work, Energy & Power", "Thermal Physics", "Waves & Optics", "Sound Waves", "Electrostatics", "Current Electricity", "Electromagnetism", "Atomic & Nuclear Physics", "Gravitational Fields", "Electronics"] },
    { name: "Further Mathematics", icon: "fa-square-root-variable", topics: ["Sets & Logic", "Binary Operations", "Surds", "Polynomials", "Partial Fractions", "Permutations & Combinations", "Binomial Theorem", "Matrices & Transformation", "Trigonometry", "Coordinate Geometry", "Differentiation", "Integration", "Vectors", "Statics & Dynamics", "Correlation & Regression"] },
    { name: "Economics", icon: "fa-chart-line", topics: ["Theory of Demand & Supply", "Elasticity", "Production Theory", "Market Structures", "National Income", "Money & Banking", "Public Finance", "International Trade", "Economic Planning", "Agriculture & Industry in Nigeria"] },
    { name: "Government", icon: "fa-landmark", topics: ["Basic Concepts (Power, Sovereignty)", "Types & Systems of Government", "Political Ideologies", "Constitutions", "Organs of Government", "Electoral Process", "Public Administration", "International Organizations", "Foreign Policy", "Colonial Administration"] },
    { name: "Literature-in-English", icon: "fa-book-open", topics: ["Introduction to Literature", "African Prose", "Non-African Prose", "African Drama", "Non-African Drama", "African Poetry", "Non-African Poetry", "Literary Devices & Terms"] },
    { name: "History", icon: "fa-monument", topics: ["Pre-Colonial Nigeria", "Hausa States & Kanem-Borno", "Islam & Christianity in West Africa", "Trans-Saharan Trade", "Slave Trade", "Colonial Rule in West Africa", "Nationalist Movements", "Post-Independence Nigeria", "ECOWAS & Regional Integration", "African Union & UN"] },
    { name: "Financial Accounting", icon: "fa-file-invoice-dollar", topics: ["Accounting Equation", "Double Entry Principles", "Books of Original Entry", "Ledger & Trial Balance", "Bank Reconciliation", "Sole Trader Accounts", "Partnership Accounts", "Company Accounts", "Manufacturing Accounts", "Departmental Accounts", "Public Sector Accounting"] },
    { name: "Agricultural Science", icon: "fa-seedling", topics: ["General Agriculture", "Agric Ecology", "Soil Science", "Crop Production", "Animal Husbandry", "Agric Economics", "Agric Engineering", "Mechanization", "Farm Surveying", "Forestry & Wildlife"] },
    { name: "Animal Husbandry", icon: "fa-cow", topics: ["Livestock Production", "Breeds & Classification", "Anatomy & Physiology", "Animal Nutrition", "Reproduction", "Health & Disease Control", "Livestock Management", "Pasture & Range Management", "Processing Livestock Products"] },
    { name: "Fisheries", icon: "fa-fish", topics: ["Introduction to Fisheries", "Types of Fish", "Fish Culture Systems", "Fish Farm Construction", "Water Quality Management", "Fish Nutrition", "Fish Health", "Fish Harvesting & Processing", "Marketing Fish Products"] },
    { name: "Marketing", icon: "fa-bullhorn", topics: ["Marketing Environment", "Market Concepts", "Market Segmentation", "Marketing Mix (4Ps)", "Product Planning", "Pricing Strategies", "Advertising & Promotion", "Distribution & Salesmanship", "International Marketing", "Digital Marketing Basics"] },
    { name: "Geography", icon: "fa-earth-africa", topics: ["The Earth & Solar System", "Lithosphere & Landforms", "Atmosphere & Climate", "Hydrosphere", "Map Reading & Interpretation", "Regional Geography (Nigeria)", "Economic Geography", "Environmental Management"] },
    { name: "Data Processing", icon: "fa-microchip", topics: ["Information Age", "Digitization", "Information Processing", "ICT Applications", "Operating Systems", "Computer Maintenance", "Word Processing", "Spreadsheets", "Databases", "Web Design", "Networking", "Security & Ethics"] },
    { name: "Visual Arts", icon: "fa-palette", topics: ["History of Art", "Elements & Principles of Design", "Drawing & Painting", "Graphics", "Textiles", "Sculpture", "Ceramics", "Appreciation & Criticism", "Exhibition & Marketing"] },
    { name: "Technical Drawing", icon: "fa-compass-drafting", topics: ["Lines & Lettering", "Geometric Construction", "Loci", "Scale Drawing", "Orthographic Projection", "Isometric & Oblique Drawing", "Sectional Views", "Surface Development", "Building & Mechanical Drawing"] },
    { name: "Catering Practice", icon: "fa-utensils", topics: ["Hospitality Industry", "Kitchen Organization", "Safety & Hygiene", "Catering Commodities", "Principles of Cooking", "Menu Planning", "Table Setting", "Bakery & Pastry", "Food Costing"] },
    { name: "Food and Nutrition", icon: "fa-bowl-food", topics: ["Nutrition & Health", "Food Commodities", "Meal Planning", "Kitchen Management", "Principles of Food Preparation", "Food Preservation", "Special Diets", "Beverages & Appetizers"] },
    { name: "Commerce", icon: "fa-cart-shopping", topics: ["Nature of Commerce", "Occupations", "Home & International Trade", "Transport & Communication", "Insurance & Banking", "Advertising", "Business Management", "Consumer Protection"] },
    { name: "Insurance", icon: "fa-shield-halved", topics: ["Principles of Insurance", "Risk Management", "Life Insurance", "Marine & Aviation", "Motor & Fire Insurance", "Liability Insurance", "Claims Settlement", "Insurance Regulation"] },
    { name: "Electrical Installation", icon: "fa-plug", topics: ["Safety Regulations", "Workshop Tools", "Joints & Cables", "Surface & Conduit Wiring", "Protective Devices", "Electrical Machines", "Illumination", "Entrepreneurship"] },
    { name: "Yoruba Language", icon: "fa-language", topics: ["Language & Translation", "Sound System (Fonetiki)", "Grammar (Nahawu)", "Composition", "Oral Literature (Alo, Oriki)", "Written Literature", "Culture (Naming, Marriage, Funeral)", "Institutions"] },
    { name: "Igbo Language", icon: "fa-language", topics: ["Asusu (Language & Grammar)", "Udaume na Mgbochiume", "Agumagu (Literature)", "Akuko Ifo na Abu", "Omenala (Igbo Culture)", "Ewumewu (Naming, Marriage)", "Ekike na nri Igbo"] },
    { name: "Hausa Language", icon: "fa-language", topics: ["Language & Translation", "Sound System (Sauti)", "Grammar (Nahawu)", "Composition", "Oral & Written Literature", "Culture (Abinci, Tufafi)", "Traditions (Sana'o'i)"] },
    { name: "French", icon: "fa-language", topics: ["Listening Comprehension", "Oral Expression", "Reading Comprehension", "Written Expression", "Grammar & Structure", "Literature (Selected Texts)", "Francophone Culture"] },
    { name: "Auto Mechanics", icon: "fa-car-wrench", topics: ["Workshop Safety", "Hand Tools", "Engine Systems", "Fuel Systems", "Transmission Systems", "Braking Systems", "Suspension & Steering", "Auto Electrical Systems"] },
    { name: "Photography", icon: "fa-camera", topics: ["History of Photography", "Camera Types & Functions", "Lenses & Aperture", "Exposure & Lighting", "Composition Techniques", "Digital Image Processing", "Ethics in Photography"] },
    { name: "Garment Making", icon: "fa-shirt", topics: ["Safety & Machines", "Tools & Equipment", "Body Measurements", "Pattern Drafting", "Garment Construction", "Fashion Sketching", "Textile Science"] }
];

let currentActiveSubject = null; 

document.addEventListener('DOMContentLoaded', () => {
    initBubbles(); // Flowing background start
    renderSubjects(subjectsData);

    const searchInput = document.getElementById('subjectSearch');
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = subjectsData.filter(s => s.name.toLowerCase().includes(term));
        renderSubjects(filtered);
    });
});

// PERFECTED BUBBLE FLOW: Independent drift using Linear Timing
function initBubbles() {
    const container = document.getElementById('bubbleLayer');
    if(!container) return;
    container.innerHTML = ''; 
    const colors = ['#8b5cf6', '#06b6d4', '#6366f1'];
    for (let i = 0; i < 15; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = Math.random() * 200 + 150;
        Object.assign(bubble.style, {
            width: size + 'px', height: size + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background: colors[Math.floor(Math.random() * colors.length)],
            animationDuration: (Math.random() * 10 + 25) + 's', // Slower drift
            animationDelay: (Math.random() * -30) + 's' // Start mid-animation
        });
        container.appendChild(bubble);
    }
}

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
    const card = header.parentElement;
    const wasActive = card.classList.contains('active');
    document.querySelectorAll('.subject-card').forEach(c => c.classList.remove('active'));
    if (!wasActive) card.classList.add('active');
}

function clearOtherSubjects(newSubject) {
    if (currentActiveSubject !== null && currentActiveSubject !== newSubject) {
        document.querySelectorAll('.topic-row.selected').forEach(el => el.classList.remove('selected'));
    }
}

function selectEntireSubject(row, subjectName) {
    clearOtherSubjects(subjectName);
    currentActiveSubject = subjectName;
    const card = row.closest('.subject-card');
    const isAlreadySelected = row.classList.contains('selected');
    const allRows = card.querySelectorAll('.topic-row');
    if (isAlreadySelected) {
        allRows.forEach(t => t.classList.remove('selected'));
        currentActiveSubject = null;
    } else {
        allRows.forEach(t => t.classList.add('selected'));
    }
    updateUI();
}

function selectTopic(row, subjectName) {
    clearOtherSubjects(subjectName);
    currentActiveSubject = subjectName;
    row.classList.toggle('selected');
    const card = row.closest('.subject-card');
    const selectAllRow = card.querySelector('.select-all-row');
    const totalTopics = card.querySelectorAll('.individual-topic').length;
    const selectedTopics = card.querySelectorAll('.individual-topic.selected').length;
    if (selectedTopics === totalTopics) selectAllRow.classList.add('selected');
    else selectAllRow.classList.remove('selected');
    if (selectedTopics === 0) currentActiveSubject = null;
    updateUI();
}

function updateUI() {
    const selectedCount = document.querySelectorAll('.individual-topic.selected').length;
    document.getElementById('count').innerText = selectedCount;
    const fab = document.getElementById('actionFab');
    if (selectedCount > 0) fab.classList.add('show');
    else fab.classList.remove('show');
}

function startGeneration() {
    const selectedNodes = document.querySelectorAll('.topic-row.selected:not(.select-all-row) span');
    const topics = Array.from(selectedNodes).map(n => n.innerText);
    if (topics.length === 0) return;
    sessionStorage.setItem('cbtSession', JSON.stringify({ subject: currentActiveSubject, topics: topics }));
    window.location.href = 'cbt.html';
}