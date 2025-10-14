window.addEventListener('DOMContentLoaded', () => {
    const firstName = localStorage.getItem('examverseFirstName');
    const profilePic = localStorage.getItem('examverseProfilePic');
    if (firstName && profilePic) {
        document.getElementById('userImage').src = profilePic;
    }
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem('examverseEmail');
    const storedPassword = localStorage.getItem('examversePassword');
    const inputEmail = document.getElementById('loginEmail').value.trim();
    const inputPassword = document.getElementById('loginPassword').value;

    if (inputEmail === storedEmail && inputPassword === storedPassword) {
        alert(`Login successful! Welcome back to ExamVerse.`);
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});