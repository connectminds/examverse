(() => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));

  const preloader = $('#preloader');
  const yearEl = $('#year');
  const navToggle = $('#nav-toggle');
  const navLinks = $('#primary-nav');
  const heroCanvas = $('#hero-bg');

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