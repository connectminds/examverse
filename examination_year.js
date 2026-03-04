document.addEventListener('DOMContentLoaded', () => {
    // 1. SILENT AUTH CHECK
    // Ensure only authenticated users may access exam selection.
    // older pages sometimes relied on "examVerseUser" but login only sets
    // the "examVerseLoggedIn" flag, so guard against both.
    if (!localStorage.getItem('examVerseLoggedIn')) {
        window.location.href = 'login.html';
        return;
    }
    // optional: we can still read profile if it exists
    const userData = localStorage.getItem('examVerseUser');

    // 2. BUBBLE ANIMATION HANDLED BY bubbles.js
    // No need to create bubbles here since bubbles.js manages it

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