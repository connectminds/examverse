// Initialize Flatpickr
flatpickr("#dob", {
  dateFormat: "d M, Y",
  maxDate: "today",
  altInput: true,
  altFormat: "F j, Y"
});

// Preview uploaded image
document.getElementById('fileInput').addEventListener('change', function(e) {
  const reader = new FileReader();
  reader.onload = function() {
    document.getElementById('previewImage').src = reader.result;
  };
  reader.readAsDataURL(e.target.files[0]);
});

// Handle registration
document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const profilePic = document.getElementById('previewImage').src;

  if (password !== confirmPassword) {
    alert("Passwords do not match. Please recheck.");
    return;
  }

  localStorage.setItem('examverseFirstName', firstName);
  localStorage.setItem('examverseEmail', email);
  localStorage.setItem('examversePassword', password);
  localStorage.setItem('examverseProfilePic', profilePic);

  alert("Registration successful! Redirecting to login...");
  window.location.href = "login.html";
});
