/**
 * Shared User Profile Utility
 * Load and display user profile information across all pages
 */

function loadUserProfileInfo() {
    const userStr = localStorage.getItem('examVerseUser');
    if (!userStr) return null;

    try {
        const user = JSON.parse(userStr);
        return {
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            email: user.email || '',
            passport: user.passport || '',
            avatar: user.avatar || '',
            fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.name || 'User',
            photo: user.passport || user.avatar || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
        };
    } catch (e) {
        console.error('Error loading user profile:', e);
        return null;
    }
}

function displayUserProfile(nameSelector, photoSelector, emailSelector) {
    const userProfile = loadUserProfileInfo();
    if (!userProfile) return;

    // Display name
    if (nameSelector) {
        const nameEl = document.querySelector(nameSelector);
        if (nameEl) nameEl.textContent = userProfile.fullName;
    }

    // Display photo
    if (photoSelector) {
        const photoEl = document.querySelector(photoSelector);
        if (photoEl) photoEl.src = userProfile.photo;
    }

    // Display email/ID
    if (emailSelector) {
        const emailEl = document.querySelector(emailSelector);
        if (emailEl) {
            if (emailSelector.includes('ID')) {
                emailEl.textContent = 'ID: ' + userProfile.email;
            } else {
                emailEl.textContent = userProfile.email;
            }
        }
    }

    return userProfile;
}
