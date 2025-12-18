document.addEventListener('DOMContentLoaded', () => {
    // 1. SILENT AUTH CHECK
    // Ensures only registered users can access the exam selection
    const userData = localStorage.getItem('examVerseUser');
    if (!userData) {
        window.location.href = 'login.html';
        return;
    }

    // 2. DYNAMIC BUBBLE GENERATOR
    const blobBg = document.querySelector('.blob-bg');
    const colors = ['#6a8cff', '#ffc107', '#ff6b6b', '#18b981', '#8e44ad'];

    function createBubbles() {
        for (let i = 0; i < 25; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');

            // Random Size
            const size = Math.random() * 60 + 20 + 'px';
            bubble.style.width = size;
            bubble.style.height = size;

            // Random Position
            bubble.style.left = Math.random() * 100 + '%';

            // Random Color
            bubble.style.background = colors[Math.floor(Math.random() * colors.length)];

            // Random Animation Duration
            const duration = Math.random() * 10 + 10 + 's';
            bubble.style.animationDuration = duration;

            // Random Delay
            bubble.style.animationDelay = Math.random() * 5 + 's';

            blobBg.appendChild(bubble);
        }
    }

    createBubbles();

    // 3. Smooth fade-in for buttons
    const buttons = document.querySelectorAll('.btnn');
    buttons.forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(20px)';
        btn.style.transition = 'all 0.5s ease forwards';
        btn.style.transitionDelay = `${index * 0.1}s`;
        
        setTimeout(() => {
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
        }, 100);
    });
});