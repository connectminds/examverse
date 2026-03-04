(() => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));
  const API_BASE_URL = localStorage.getItem('examVerseApiBaseUrl') || 'http://localhost:5000';
  const isLoggedIn = localStorage.getItem('examVerseLoggedIn');
  const isDashboardUnlocked = localStorage.getItem('dashboardUnlocked') === '1';
  const activationRequired = localStorage.getItem('activationRequired') === '1';

  function getStoredUser() {
    try {
      return JSON.parse(localStorage.getItem('examVerseUser') || 'null');
    } catch {
      return null;
    }
  }

  function getStoredEmail() {
    return (getStoredUser()?.email || '').trim().toLowerCase();
  }

  // if user already logged in, normally skip home and go straight to dashboard
  // but we must let them see the page if they still need to subscribe
  if (isLoggedIn) {
    if (!isDashboardUnlocked) {
      // user still needs to subscribe – keep them on this page
    } else {
      window.location.href = 'dashboard.html';
      return; // stop further initialization
    }
  }

  const preloader = $('#preloader');
  const yearEl = $('#year');
  const navToggle = $('#nav-toggle');
  const navLinks = $('#primary-nav');
  const heroCanvas = $('#hero-bg');
  const activationPanel = $('#activationPanel');
  const activationForm = $('#activationForm');
  const activationInput = $('#activationCodeInput');
  const activationMessage = $('#activationMessage');
  const activateBtn = $('#activateBtn');
  const resendCodeBtn = $('#resendCodeBtn');

  // hide subscribe button if already subscribed
  const subBtn = document.querySelector('.btn-subscribe');
  if (subBtn && isDashboardUnlocked) {
    subBtn.style.display = 'none';
  }

  function setActivationMessage(message, type = '') {
    if (!activationMessage) return;
    activationMessage.textContent = message;
    activationMessage.classList.remove('success', 'error');
    if (type) activationMessage.classList.add(type);
  }

  function showActivationPanel() {
    if (activationPanel) activationPanel.classList.add('show');
  }

  async function syncSubscriptionStatus() {
    if (!isLoggedIn) return;
    const email = getStoredEmail();
    if (!email) return;

    try {
      const response = await fetch(`${API_BASE_URL}/api/subscription/status?email=${encodeURIComponent(email)}`);
      const data = await response.json();
      if (!response.ok || !data.success) return;

      if (data.status === 'active') {
        localStorage.setItem('dashboardUnlocked', '1');
        localStorage.setItem('subscribed', '1');
        localStorage.setItem('subscriptionStatus', 'active');
        localStorage.setItem('activationRequired', '0');
      } else if (data.status === 'paid_pending_activation') {
        localStorage.setItem('dashboardUnlocked', '0');
        localStorage.setItem('subscriptionStatus', 'paid_pending_activation');
        localStorage.setItem('activationRequired', '1');
      }
    } catch (error) {
      console.warn('Subscription status sync failed:', error.message);
    }
  }

  const params = new URLSearchParams(window.location.search);
  if (activationRequired || params.get('activation') === 'pending') {
    showActivationPanel();
    setActivationMessage('Payment confirmed. Enter the activation code sent to your email to unlock dashboard access.');
  }

  if (activationForm) {
    activationForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (!localStorage.getItem('examVerseLoggedIn')) {
        setActivationMessage('Please login first before activating your subscription.', 'error');
        window.location.href = 'login.html?next=subscribe';
        return;
      }

      const email = getStoredEmail();
      const code = String(activationInput?.value || '').trim().toUpperCase();

      if (!email) {
        setActivationMessage('No account email found. Please login again.', 'error');
        return;
      }

      if (code.length !== 8) {
        setActivationMessage('Activation code must be exactly 8 characters.', 'error');
        return;
      }

      if (activateBtn) {
        activateBtn.disabled = true;
        activateBtn.textContent = 'Unlocking...';
      }

      try {
        const response = await fetch(`${API_BASE_URL}/api/subscription/activate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, activationCode: code })
        });

        const data = await response.json();
        if (!response.ok || !data.success) {
          throw new Error(data.error || data.details || 'Activation failed');
        }

        localStorage.setItem('dashboardUnlocked', '1');
        localStorage.setItem('subscribed', '1');
        localStorage.setItem('subscriptionStatus', 'active');
        localStorage.setItem('activationRequired', '0');
        setActivationMessage('Activation successful. Redirecting to dashboard...', 'success');

        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 700);
      } catch (error) {
        setActivationMessage(error.message, 'error');
      } finally {
        if (activateBtn) {
          activateBtn.disabled = false;
          activateBtn.textContent = 'Unlock Dashboard';
        }
      }
    });
  }

  if (resendCodeBtn) {
    resendCodeBtn.addEventListener('click', async () => {
      if (!localStorage.getItem('examVerseLoggedIn')) {
        setActivationMessage('Please login first before requesting a resend.', 'error');
        return;
      }

      const email = getStoredEmail();
      if (!email) {
        setActivationMessage('No account email found. Please login again.', 'error');
        return;
      }

      resendCodeBtn.disabled = true;
      resendCodeBtn.textContent = 'Resending...';

      try {
        const response = await fetch(`${API_BASE_URL}/api/subscription/resend-code`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });

        const data = await response.json();
        if (!response.ok || !data.success) {
          throw new Error(data.error || data.details || 'Unable to resend code');
        }

        setActivationMessage('Activation code resent. Please check your email inbox.', 'success');
      } catch (error) {
        setActivationMessage(error.message, 'error');
      } finally {
        resendCodeBtn.disabled = false;
        resendCodeBtn.textContent = 'Resend Code';
      }
    });
  }

  syncSubscriptionStatus();

  /* ===== Preloader ===== */
  window.addEventListener('load', () => {
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    if (preloader) {
      preloader.style.opacity = '0';
      setTimeout(() => preloader?.remove(), 350);
    }
  });

  /* ===== Mobile nav ===== */
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const opened = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(opened));
    });

    navLinks.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && window.innerWidth <= 768) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ===== Feature animations ===== */
  const animateEls = $$('[data-animate]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(ent => {
        if (ent.isIntersecting) {
          ent.target.style.opacity = 1;
          ent.target.style.transform = 'translateY(0)';
          io.unobserve(ent.target);
        }
      });
    }, { threshold: 0.15 });
    animateEls.forEach(el => io.observe(el));
  } else {
    animateEls.forEach(el => el.style.opacity = 1);
  }

  /* ===== Hero Canvas Background ===== */
  (function canvasBG() {
    if (!heroCanvas) return;
    const ctx = heroCanvas.getContext('2d');
    let w, h, raf, particles = [];

    const createParticles = (count) => {
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 3 + 1,
          dx: (Math.random() - 0.5) * 1,
          dy: (Math.random() - 0.5) * 1,
          alpha: Math.random() * 0.5 + 0.3
        });
      }
    };

    function resize() {
      w = heroCanvas.width = window.innerWidth;
      h = heroCanvas.height = window.innerHeight;
      createParticles(60);
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;

        ctx.beginPath();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = '#00aaff';
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else draw();
    });
  })();
})();