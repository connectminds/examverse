// dashboard.js - responsive nav + show user + logout
document.addEventListener('DOMContentLoaded', () => {
    // Load user info from localStorage
    const firstName = localStorage.getItem('examverseFirstName');
    const profilePic = localStorage.getItem('examverseProfilePic');

    // Elements
    const welcomeEl = document.getElementById('welcomeMessage');
    const photoEl = document.getElementById('userPhoto');

    if (!firstName || !profilePic) {
        // If user data missing, send to login
        // (This is safer than showing blank dashboard)
        try { alert('Please log in to access the dashboard.'); } catch (e) {}
        window.location.href = 'login.html';
        return;
    }

    // Populate UI
    welcomeEl.textContent = `Welcome back, ${firstName}!`;
    photoEl.src = profilePic;

    // Nav hamburger
    const nav = document.getElementById('mainNav');
    const navToggle = document.getElementById('navToggle');
    const navLogout = document.getElementById('navLogout');

    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.classList.toggle('open');
            nav.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        });
    }

    // Logout handlers (nav + logout button)
    function logout() {
        // Clear only relevant keys (keep other localStorage values if you want)
        localStorage.removeItem('examverseFirstName');
        localStorage.removeItem('examverseEmail');
        localStorage.removeItem('examversePassword');
        localStorage.removeItem('examverseProfilePic');
        // Redirect to login
        window.location.href = 'login.html';
    }

    if (navLogout) {
        navLogout.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Are you sure you want to log out?')) logout();
        });
    }

    // Also wire the top-right logout btn if present (old version)
    const topLogoutBtn = document.getElementById('logoutBtn');
    if (topLogoutBtn) topLogoutBtn.addEventListener('click', () => { if (confirm('Are you sure you want to log out?')) logout(); });
});