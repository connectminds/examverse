document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // CONFIGURATION: Add new years here!
    // ==========================================
    const availableYears = [
        2025,
        2024, 
        2023, 
        2022, 
        2021, 
        2020,
        2019
        // Future: just add 2025 here
    ];

    const gridContainer = document.getElementById('year-grid');
    const heroText = document.querySelector('.hero-text');

    // 1. Generate HTML Dynamically
    availableYears.forEach(year => {
        // Create the card element
        const card = document.createElement('a');
        card.href = `subjects_${year}.HTML`; // Auto-links to subjects_2024.HTML, etc.
        card.className = 'year-card';
        
        card.innerHTML = `
            <span>Session</span>
            <h2>${year}</h2>
        `;

        // Append to the grid
        gridContainer.appendChild(card);
    });

    // 2. Animate Hero Text
    if (heroText) {
        heroText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 100);
    }

    // 3. Staggered Animation for Cards
    const cards = document.querySelectorAll('.year-card');
    cards.forEach((card, index) => {
        // Set initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        // Trigger animation
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
    });

});