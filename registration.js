document.addEventListener('DOMContentLoaded', () => {
  // if already logged-in redirect to dashboard
  if (localStorage.getItem('examVerseLoggedIn')) {
    window.location.href = 'dashboard.html';
    return;
  }

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
      // make calendar light for easier reading
      instance.calendarContainer.style.backgroundColor = "#fff";
      instance.calendarContainer.style.color = "#000";
    },
    onOpen: function(selectedDates, dateStr, instance) {
      instance.calendarContainer.style.backgroundColor = "#fff";
      instance.calendarContainer.style.color = "#000";
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

  // Social login handlers (client-side demo fallback) with UI polish
  const socialLinks = document.querySelectorAll('.social-login');
  const socialsContainer = document.querySelector('.socials');
  const redirectDefault = socialsContainer ? socialsContainer.dataset.redirect || 'index.html' : 'index.html';

  // Modal & badge elements
  const socialModal = document.getElementById('socialModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalEmail = document.getElementById('modalEmail');
  const modalContinue = document.getElementById('modalContinue');
  const modalClose = document.getElementById('modalClose');

  const userBadge = document.getElementById('socialUserBadge');
  const userAvatar = document.getElementById('socialUserAvatar');
  const userNameEl = document.getElementById('socialUserName');
  const userEmailEl = document.getElementById('socialUserEmail');
  const signOutBtn = document.getElementById('socialSignOut');

  function getRedirectUrl(){
    return (socialsContainer && socialsContainer.dataset.redirect) ? socialsContainer.dataset.redirect : redirectDefault;
  }

  function saveSocialUser(profile){
    const user = {
      provider: profile.provider || 'local',
      name: profile.name || '',
      email: profile.email || '',
      phone: profile.phone || '',
      avatar: profile.avatar || '',
      demo: true
    };
    localStorage.setItem('examVerseUser', JSON.stringify(user));
    localStorage.setItem('examVerseLoggedIn', '1');
    renderUserBadge(user);
  }

  function renderUserBadge(user){
    if(!user){ hideUserBadge(); return; }
    if(user.avatar) userAvatar.src = user.avatar; else userAvatar.src = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
    userNameEl.textContent = user.name || 'Anonymous';
    userEmailEl.textContent = user.email || user.phone || '';
    userBadge.style.display = 'flex';
  }

  function hideUserBadge(){
    if(userBadge) userBadge.style.display = 'none';
  }

  function showModal(profile){
    if(!socialModal) return;
    modalTitle.textContent = 'Signed in via ' + (profile.provider || 'social');
    modalBody.innerHTML = 'You are signed in as <strong>' + (profile.name || profile.email || profile.phone || '') + '</strong>.';
    modalEmail.textContent = profile.email || profile.phone || '';
    socialModal.style.display = 'flex';
    socialModal.setAttribute('aria-hidden','false');

    // wire continue action to use configured redirect
    modalContinue.onclick = () => {
      socialModal.style.display = 'none';
      window.location.href = getRedirectUrl();
    };
    modalClose.onclick = () => {
      socialModal.style.display = 'none';
    };
  }

  function signOut(){
    localStorage.removeItem('examVerseUser');
    localStorage.removeItem('examVerseLoggedIn');
    hideUserBadge();
    alert('Signed out');
  }

  signOutBtn && signOutBtn.addEventListener('click', signOut);

  // If already logged in (demo), render badge
  const storedUser = JSON.parse(localStorage.getItem('examVerseUser') || 'null');
  if(storedUser && localStorage.getItem('examVerseLoggedIn')) renderUserBadge(storedUser);

  function simulateSocialLogin(provider){
    // Provider-specific quick flows
    if(provider === 'whatsapp'){
      const phone = prompt('Enter your phone number (e.g. +2348123456789) to continue with WhatsApp:');
      if(!phone) return;
      const profile = { provider: 'whatsapp', name: phone, phone };
      saveSocialUser(profile);
      // open chat in new tab but keep the user on site to confirm
      window.open('https://wa.me/' + encodeURIComponent(phone.replace(/[^+0-9]/g,'')), '_blank');
      showModal(profile);
      return;
    }

    // prompt user for demo name/email
    const proceed = confirm('Continue with ' + provider + '? (this demo will simulate authentication)');
    if(!proceed) return;
    const name = prompt('Enter your full name to use for this demo login:');
    const email = prompt('Enter your email address:');
    if(!email){ alert('Email is required for demo login.'); return; }

    const profile = { provider, name: name || email.split('@')[0], email, avatar: '' };
    saveSocialUser(profile);
    showModal(profile);
  }

  socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if(link.classList.contains('whatsapp')) simulateSocialLogin('whatsapp');
      else if(link.classList.contains('facebook')) simulateSocialLogin('facebook');
      else if(link.classList.contains('google')) simulateSocialLogin('google');
      else if(link.classList.contains('x')) simulateSocialLogin('x');
      else simulateSocialLogin('social');
    });
  });

  // ---------- Production-capable Google & Facebook flows (client-side) ----------
  // These flows will activate only if you add real app IDs in the socials container
  // attributes: data-google-client-id and data-facebook-app-id. If left blank, the
  // demo fallback remains available.

  const googleClientId = socialsContainer ? socialsContainer.dataset.googleClientId : '';
  const fbAppId = socialsContainer ? socialsContainer.dataset.facebookAppId : '';

  // Helper to fetch Google userinfo using an access token
  async function fetchGoogleUserInfo(accessToken){
    try{
      const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: 'Bearer ' + accessToken }
      });
      if(!res.ok) throw new Error('Failed fetching Google userinfo');
      return await res.json();
    }catch(err){ console.warn(err); return null; }
  }

  // Initialize Google token client if client id present
  let googleTokenClient = null;
  if(googleClientId && window.google && window.google.accounts && window.google.accounts.oauth2){
    try{
      googleTokenClient = google.accounts.oauth2.initTokenClient({
        client_id: googleClientId,
        scope: 'openid email profile',
        callback: async (resp) => {
          if(resp.error){ console.error('Google token error', resp); return; }
          const info = await fetchGoogleUserInfo(resp.access_token);
          if(info){
            const profile = { provider: 'google', name: info.name, email: info.email, avatar: info.picture };
            saveSocialUser(profile);
            showModal(profile);
          }
        }
      });
    }catch(err){ console.warn('Google init failed', err); }
  }

  // Attach click handler to the Google icon if present
  const googleIcon = document.getElementById('googleLogin');
  if(googleIcon){
    googleIcon.addEventListener('click', (e) => {
      e.preventDefault();
      if(googleClientId && googleTokenClient){
        // request access token via popup
        googleTokenClient.requestAccessToken();
        return;
      }
      // fallback to demo flow
      simulateSocialLogin('google');
    });
  }

  // Facebook: load SDK and wire click handler if app id present
  function loadFacebookSdk(appId, cb){
    if(!appId) { cb && cb(false); return; }
    window.fbAsyncInit = function(){
      FB.init({ appId: appId, cookie: true, xfbml: false, version: 'v16.0' });
      cb && cb(true);
    };
    // inject SDK
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if(d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  const fbIcon = document.getElementById('facebookLogin');
  if(fbAppId){
    loadFacebookSdk(fbAppId, (ok) => {
      if(!ok) return;
      if(fbIcon){
        fbIcon.addEventListener('click', (e) => {
          e.preventDefault();
          FB.login(function(response){
            if(response.status === 'connected'){
              FB.api('/me', { fields: 'name,email,picture' }, function(profile){
                const p = { provider: 'facebook', name: profile.name, email: profile.email, avatar: profile.picture?.data?.url };
                saveSocialUser(p);
                showModal(p);
              });
            } else {
              console.warn('Facebook login not connected', response);
            }
          }, { scope: 'email,public_profile' });
        });
      }
    });
  } else if(fbIcon){
    // if no FB app id, keep demo fallback
    fbIcon.addEventListener('click', (e) => { e.preventDefault(); simulateSocialLogin('facebook'); });
  }

  // If google client id present but token client did not initialize (script not loaded yet), attach a small retry
  if(googleClientId && !googleTokenClient){
    // try again after short delay (accounts script may be loading async)
    setTimeout(() => {
      if(window.google && window.google.accounts && window.google.accounts.oauth2){
        try{
          googleTokenClient = google.accounts.oauth2.initTokenClient({
            client_id: googleClientId,
            scope: 'openid email profile',
            callback: async (resp) => {
              if(resp.error) return;
              const info = await fetchGoogleUserInfo(resp.access_token);
              if(info){ saveSocialUser({ provider: 'google', name: info.name, email: info.email, avatar: info.picture }); showModal(info); }
            }
          });
        }catch(e){ console.warn('Google init retry failed', e); }
      }
    }, 800);
  }

  // Form submit - COLLECT DATA, WAIT 3 SECONDS, REDIRECT TO LOGIN
  form.addEventListener('submit', e => {
    e.preventDefault();

    // 1. Sleek Button Feedback
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.classList.add('btn-loading');
    submitBtn.innerHTML = '<span>Verifying...</span>';

    // 2. Collect user data (Keeping your original logic)
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

    // 3. Store user account in localStorage but DO NOT mark as logged-in yet.
    //    The user must log in to continue so we can exercise the "subscribe" flow.
    localStorage.setItem('examVerseUser', JSON.stringify(userData));
    // do not set examVerseLoggedIn here

    // 4. Smooth 3-second delay
    setTimeout(() => {
      submitBtn.innerHTML = '<span>Success! Redirecting...</span>';
      submitBtn.style.background = '#18b981';
      
      msg.textContent = 'Account created successfully!';
      msg.classList.add('success-msg');

      // 5. Final Redirect to login page with subscription trigger
      setTimeout(() => {
        window.location.href = 'login.html?next=subscribe';
      }, 500);
    }, 2500); 
  });
});

// === Dynamic Floating Bubbles ===
document.addEventListener('DOMContentLoaded', () => {
  const blobBg = document.querySelector('.blob-bg');
  const colors = ['#6a8cff','#18b981','#ff6b6b','#ffb547','#8e44ad','#ff4fcf','#4fc3ff','#f6ff00'];

  for(let i=0; i<25; i++){
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const sizeClass = ['small','medium','large'][Math.floor(Math.random()*3)];
    bubble.classList.add(sizeClass);
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.background = colors[Math.floor(Math.random()*colors.length)];
    bubble.style.animationDuration = (15 + Math.random()*15) + 's';
    bubble.style.animationDelay = (Math.random()*5) + 's';
    blobBg.appendChild(bubble);
  }
});