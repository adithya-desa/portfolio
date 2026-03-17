/* ══════════════════════════════════════════════
   DESA ADITHYA PORTFOLIO — main.js
   ══════════════════════════════════════════════ */

// ── Custom Cursor ─────────────────────────────────────────────────────────────
const cursor      = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursorTrail');

if (cursor && cursorTrail) {
  document.addEventListener('mousemove', e => {
    cursor.style.left      = e.clientX + 'px';
    cursor.style.top       = e.clientY + 'px';
    setTimeout(() => {
      cursorTrail.style.left = e.clientX + 'px';
      cursorTrail.style.top  = e.clientY + 'px';
    }, 80);
  });
}

// ── Nav: scroll style + burger ────────────────────────────────────────────────
const nav        = document.getElementById('nav');
const navBurger  = document.getElementById('navBurger');
const mobileMenu = document.getElementById('mobileMenu');
const mobLinks   = document.querySelectorAll('.mob-link');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

navBurger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobLinks.forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ── Scroll Reveal ─────────────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Fetch Portfolio Data & Render ─────────────────────────────────────────────
async function loadPortfolio() {
  try {
    const res  = await fetch('/api/portfolio');
    const data = await res.json();
    renderSkills(data.skills);
    renderProjects(data.projects);
    renderResearch(data.publications);
    renderCerts(data.certifications, data.achievements);
  } catch (err) {
    console.error('Failed to load portfolio data:', err);
  }
}

// ── Skills ────────────────────────────────────────────────────────────────────
const SKILL_ICONS = {
  'Languages': '{ }', 'Web': '🌐', 'Cloud': '☁', 'Databases': '🗄',
  'ML / AI': '🧠', 'Tools': '⚙', 'Concepts': '💡',
};

function renderSkills(skills) {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  let delay = 0;
  Object.entries(skills).forEach(([cat, tags]) => {
    const card = document.createElement('div');
    card.className = 'skill-card reveal';
    card.style.animationDelay = `${delay}s`;
    delay += 0.07;
    card.innerHTML = `
      <div class="skill-cat">${SKILL_ICONS[cat] || '▸'} &nbsp;${cat}</div>
      <div class="skill-tags">
        ${tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
      </div>`;
    grid.appendChild(card);
    revealObserver.observe(card);
  });
}

// ── Projects ──────────────────────────────────────────────────────────────────
function renderProjects(projects) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  projects.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.style.setProperty('--delay', `${i * 0.12}s`);
    card.innerHTML = `
      <span class="project-tag">${p.tag}</span>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-impact">${p.impact}</div>
      <div class="project-stack">
        ${p.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}
      </div>
      <a href="${p.github}" target="_blank" class="project-link">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
        View on GitHub
      </a>`;
    grid.appendChild(card);
    revealObserver.observe(card);
  });
}

// ── Research ──────────────────────────────────────────────────────────────────
function renderResearch(pubs) {
  const list = document.getElementById('researchList');
  if (!list) return;
  pubs.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'research-card reveal';
    card.style.setProperty('--delay', `${i * 0.1}s`);
    const linkHTML = p.link
      ? `<a href="${p.link}" target="_blank" style="color:var(--accent);font-family:var(--font-mono);font-size:0.75rem;">Read →</a>`
      : '';
    card.innerHTML = `
      <div class="research-index">0${i + 1}</div>
      <div>
        <span class="research-type">${p.type}</span>
        <div class="research-title">${p.title}</div>
        <div class="research-venue">${p.venue}</div>
        ${linkHTML}
      </div>
      <div class="research-year">${p.year}</div>`;
    list.appendChild(card);
    revealObserver.observe(card);
  });
}

// ── Certifications & Achievements ─────────────────────────────────────────────
const CERT_ICONS = ['☁', '🤖', '🧠', '📊', '🗣'];

function renderCerts(certs, achievements) {
  const grid = document.getElementById('certsGrid');
  const achRow = document.getElementById('achievementsRow');
  if (!grid || !achRow) return;

  certs.forEach((c, i) => {
    const card = document.createElement('div');
    card.className = 'cert-card reveal';
    card.style.setProperty('--delay', `${i * 0.08}s`);
    card.innerHTML = `
      <div class="cert-icon">${CERT_ICONS[i] || '🏆'}</div>
      <div>
        <div class="cert-name">${c.name}</div>
        <div class="cert-meta">${c.issuer} &nbsp;·&nbsp; <span>${c.date}</span></div>
      </div>`;
    grid.appendChild(card);
    revealObserver.observe(card);
  });

  achievements.forEach((a, i) => {
    const card = document.createElement('div');
    card.className = 'ach-card reveal';
    card.style.setProperty('--delay', `${i * 0.1}s`);
    card.innerHTML = `
      <div class="ach-title">${a.title}</div>
      <div class="ach-detail">${a.detail}</div>
      <div class="ach-year">${a.year}</div>`;
    achRow.appendChild(card);
    revealObserver.observe(card);
  });
}

// ── Contact Form ──────────────────────────────────────────────────────────────
const form      = document.getElementById('contactForm');
const formMsg   = document.getElementById('formMsg');
const submitBtn = document.getElementById('submitBtn');
const btnText   = document.getElementById('btnText');
const btnLoader = document.getElementById('btnLoader');

form && form.addEventListener('submit', async (e) => {
  e.preventDefault();
  btnText.style.display   = 'none';
  btnLoader.style.display = 'inline';
  submitBtn.disabled      = true;
  formMsg.textContent     = '';
  formMsg.className       = 'form-msg';

  const body = {
    name:    form.name.value.trim(),
    email:   form.email.value.trim(),
    subject: form.subject.value.trim(),
    message: form.message.value.trim(),
  };

  try {
    const res  = await fetch('/api/contact', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(body),
    });
    const data = await res.json();
    formMsg.textContent = data.message;
    formMsg.classList.add(data.success ? 'success' : 'error');
    if (data.success) form.reset();
  } catch {
    formMsg.textContent = 'Something went wrong. Please try again.';
    formMsg.classList.add('error');
  } finally {
    btnText.style.display   = 'inline';
    btnLoader.style.display = 'none';
    submitBtn.disabled      = false;
  }
});

// ── Smooth active nav highlight on scroll ────────────────────────────────────
const sections  = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${e.target.id}`
          ? 'var(--accent)' : '';
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => sectionObserver.observe(s));

// ── Init ──────────────────────────────────────────────────────────────────────
loadPortfolio();
