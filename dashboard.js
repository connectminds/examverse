document.addEventListener('DOMContentLoaded', () => {
    // 1. Elements
    const welcomeEl = document.getElementById('welcomeMessage');
    const photoEl = document.getElementById('userPhoto');
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    const navLogout = document.getElementById('navLogout');

    // 2. Load the specific user object we created in Registration/Login
    const storedData = localStorage.getItem('examVerseUser');

    if (storedData) {
        try {
            const user = JSON.parse(storedData);

            // Populate Name
            if (user.firstName) {
                welcomeEl.textContent = `Welcome back, ${user.firstName}!`;
            }

            // Populate Profile Pic (The passport uploaded)
            if (user.passport && user.passport !== "") {
                photoEl.src = user.passport;
            }
        } catch (e) {
            console.error("Error parsing user data");
        }
    } else {
        // SILENT PROTECTION: No alerts used. 
        // If no user is found, jump straight to login.
        window.location.href = 'login.html';
        return;
    }

    // 3. Hamburger Menu Logic
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            mainNav.classList.toggle('open');
        });
    }

    // 4. Professional Logout function
    function handleLogout() {
        // Fade out for professional feel
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s';
        
        // Clear local storage
        localStorage.removeItem('examVerseUser');

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 500);
    }

    // Connect Logout Links
    if (navLogout) {
        navLogout.addEventListener('click', (e) => {
            e.preventDefault();
            handleLogout();
        });
    }
});