document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const modeToggle = document.getElementById('modeToggle');
  const pw = document.getElementById('password');
  const cpw = document.getElementById('confirmPassword');
  const pwMeter = document.getElementById('pwStrength');
  const togglePw = document.getElementById('togglePw');
  const form = document.getElementById('registerForm');
  const msg = document.getElementById('formMessage');
  const passportInput = document.getElementById('passport');
  const passportPreview = document.getElementById('passportPreview');

  // Light/Dark mode toggle
  modeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    modeToggle.textContent = body.classList.contains('light-mode') ? '🌙' : '☀️';

    // Refresh Flatpickr input to match new background
    if (dobPicker) dobPicker.redraw();
  });

  // Password visibility toggle
  togglePw.addEventListener('click', () => {
    const type = pw.type === 'password' ? 'text' : 'password';
    pw.type = type; 
    cpw.type = type;
    togglePw.textContent = type === 'text' ? 'Hide' : 'Show';
  });

  // Password strength
  pw.addEventListener('input', () => {
    let val = pw.value;
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    pwMeter.value = score;
  });

  // Initialize Flatpickr and store instance with dark popup
  const dobPicker = flatpickr("#dob", {
    dateFormat: "Y-m-d",
    maxDate: "today",
    altInput: true,
    altFormat: "F j, Y",
    allowInput: true,
    defaultDate: null,
    onReady: function(selectedDates, dateStr, instance) {
      instance.calendarContainer.style.backgroundColor = "#0a0f1a"; // dark popup
      instance.calendarContainer.style.color = "#fff";
    },
    onOpen: function(selectedDates, dateStr, instance) {
      instance.calendarContainer.style.backgroundColor = "#0a0f1a"; // dark popup
      instance.calendarContainer.style.color = "#fff";
    }
  });

  // Passport image preview
  passportInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        passportPreview.src = reader.result; // display preview
      };
      reader.readAsDataURL(file); // convert image to Base64
    } else {
      passportPreview.src = "";
    }
  });

  // Social login redirect simulation
  const socialLinks = document.querySelectorAll('.social-login');
  socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Redirecting to ExamVerse home page...');
      window.location.href = 'index.html';
    });
  });

  // Form submit - collect user data
  form.addEventListener('submit', e => {
    e.preventDefault();

    // Collect all user data
    const userData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      classLevel: document.getElementById('classLevel').value,
      dob: document.getElementById('dob').value,
      phone: document.getElementById('phone') ? document.getElementById('phone').value : '',
      password: document.getElementById('password').value,
      passport: passportPreview.src || ''
    };

    // Store in localStorage
    localStorage.setItem('examVerseUser', JSON.stringify(userData));

    // Log for testing
    console.log('User Data Collected:', userData);

    // Show success message
    msg.textContent = 'Form submitted successfully! Data collected.';
    msg.classList.add('success');

    // Optional: redirect to home page after 1.5 seconds
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  });
});

// === Dynamic Floating Bubbles ===
document.addEventListener('DOMContentLoaded', () => {
  const blobBg = document.querySelector('.blob-bg');
  const colors = ['#6a8cff','#18b981','#ff6b6b','#ffb547','#8e44ad','#ff4fcf','#4fc3ff','#f6ff00'];

  // Generate 25 bubbles
  for(let i=0; i<25; i++){
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Random size class
    const sizeClass = ['small','medium','large'][Math.floor(Math.random()*3)];
    bubble.classList.add(sizeClass);

    // Random horizontal position
    bubble.style.left = Math.random() * 100 + '%';

    // Random color
    bubble.style.background = colors[Math.floor(Math.random()*colors.length)];

    // Random animation duration and delay
    bubble.style.animationDuration = (15 + Math.random()*15) + 's';
    bubble.style.animationDelay = (Math.random()*5) + 's';

    blobBg.appendChild(bubble);
  }
});
