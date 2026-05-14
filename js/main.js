/* ── NAV ──────────────────────────────────────────────────── */
(function () {
  const nav    = document.querySelector('.site-nav');
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.querySelector('.nav-menu');

  // Scroll shadow
  window.addEventListener('scroll', () => {
    nav && nav.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });

  // Mobile toggle
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
    document.addEventListener('click', e => {
      if (!nav.contains(e.target)) {
        menu.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Active link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === path) a.classList.add('active');
  });

  // Footer year
  const yr = document.getElementById('footer-year');
  if (yr) yr.textContent = new Date().getFullYear();
})();

/* ── SCROLL REVEAL ────────────────────────────────────────── */
(function () {
  const els = document.querySelectorAll('.reveal, .reveal-left');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.06 });
  els.forEach(el => obs.observe(el));
})();

/* ── STAGGER CHILDREN ─────────────────────────────────────── */
(function () {
  document.querySelectorAll('[data-stagger]').forEach(parent => {
    parent.querySelectorAll(':scope > *').forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.07}s`;
    });
  });
})();
