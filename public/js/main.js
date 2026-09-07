/* ══════════════════════════════════════════════
   DESA ADITHYA PORTFOLIO — main.js
   ══════════════════════════════════════════════ */

// ── Static Fallback Data (Matches Official Resume) ────────────────────────────
const FALLBACK_PORTFOLIO_DATA = {
  name: 'Desa Adithya',
  tagline: 'Software Engineer · AI Researcher · Cloud Enthusiast',
  education: [
    {
      institution: 'Vardhaman College of Engineering',
      location: 'Hyderabad, Telangana',
      degree: 'B.Tech in Computer Science & Engineering',
      period: 'Aug 2023 – Apr 2027',
      score: 'CGPA: 9.17 / 10.0',
      coursework: 'Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Machine Learning, Cloud Computing',
    },
    {
      institution: 'Pragathi Junior College, Telangana State Board (TSBIE)',
      location: 'Telangana',
      degree: 'Class XII (MPC)',
      period: '2023',
      score: '98.7%',
      coursework: '',
    },
    {
      institution: 'SPR High School, Board of Secondary Education, Telangana',
      location: 'Telangana',
      degree: 'Class X',
      period: '2021',
      score: 'CGPA: 10.0 / 10.0',
      coursework: '',
    },
  ],
  skills: {
    'Core CS Concepts': ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'Machine Learning', 'Deep Learning'],
    'Web Technologies': ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'JSP', 'Servlets', 'REST APIs'],
    'Databases': ['MySQL', 'SQL'],
    'Cloud Platforms': ['AWS', 'Microsoft Azure'],
    'Machine Learning': ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Federated Learning', 'Neural Networks', 'Graph CNN'],
    'Developer Tools': ['Git', 'Linux', 'Android Studio', 'Arduino IDE'],
    'Software Engineering': ['OOP', 'Agile', 'SDLC', 'CI/CD'],
    'Hardware & IoT': ['Arduino', 'GPS', 'GSM', 'Embedded Systems'],
  },
  projects: [
    {
      title: 'AquaVigil – IoT Flood Monitoring & Emergency Response System',
      stack: ['Arduino', 'IoT', 'GPS', 'GSM'],
      period: 'Feb 2025 – Apr 2025',
      desc: 'Designed and developed a real-time flood monitoring hardware device with automated alerts and emergency coordination.',
      bullets: [
        'Designed and developed an IoT-based flood monitoring and emergency response system using Arduino, GPS, and GSM modules.',
        'Implemented a three-level flood alert mechanism triggering alarms, automated SMS notifications, and emergency calls.',
        'Enabled real-time location sharing with rescue services during critical flood conditions to support disaster-response operations.',
        'Engineered reliable power management to ensure uninterrupted operation during extreme weather events.'
      ],
      impact: 'Disaster management · Real-time alerts · Public safety',
      github: 'https://github.com/adithya-desa',
      tag: 'IoT · Hardware',
    },
    {
      title: 'Energy-Efficient Mobile Sink Path Planning in HWSNs',
      stack: ['Python', 'Federated Learning', 'Graph CNN'],
      period: 'Dec 2025 – Feb 2026',
      desc: 'Developed a Federated Graph CNN framework for mobile sink path optimization in Heterogeneous Wireless Sensor Networks (HWSNs).',
      bullets: [
        'Developed a Federated Graph CNN framework for mobile sink path optimization in Heterogeneous Wireless Sensor Networks (HWSNs).',
        'Modeled wireless sensor nodes as graph structures and implemented privacy-preserving federated learning across distributed clients.',
        'Improved network lifetime from 1200 to 1650 rounds while increasing load-balancing efficiency from 72% to 89%.',
        'Enhanced packet delivery ratio from 88% to 95% through adaptive sink-routing optimization.'
      ],
      impact: 'Network lifetime: 1200→1650 rounds · PDR: 88%→95% · Load balancing: 72%→89%',
      github: 'https://github.com/adithya-desa',
      tag: 'AI · Research',
    },
    {
      title: 'Federated Learning – Heart Disease Detection with Concept Drift',
      stack: ['PyTorch', 'Federated Learning', 'Python'],
      period: 'May 2025 – Aug 2025',
      desc: 'Developed a privacy-preserving federated learning framework for heart disease prediction with adaptive drift compensation.',
      bullets: [
        'Developed a privacy-preserving federated learning framework for heart disease prediction by sharing model gradients instead of sensitive patient records.',
        'Implemented adaptive concept-drift detection mechanisms to automatically retrain models under changing data distributions, improving long-term predictive reliability.'
      ],
      impact: 'Privacy-preserving AI · Concept-drift adaptation · Healthcare diagnostics',
      github: 'https://github.com/adithya-desa',
      tag: 'AI · Healthcare',
    },
    {
      title: 'DeepFake Image Detection System',
      stack: ['CNN', 'Transfer Learning', 'PyTorch'],
      period: 'Mar 2026 – May 2026',
      desc: 'Built a deep learning-based image classification system to identify AI-generated and manipulated media using transfer learning techniques.',
      bullets: [
        'Built a deep learning-based image classification system to identify AI-generated and manipulated media using transfer learning techniques.',
        'Compared multiple CNN architectures and optimized inference performance for robust deepfake detection across diverse image datasets.'
      ],
      impact: 'Deepfake detection · Transfer learning · High-accuracy inference',
      github: 'https://github.com/adithya-desa',
      tag: 'Deep Learning · CV',
    },
  ],
  publications: [
    {
      title: 'EchoSync: Smart Audio Recommendation Engine',
      venue: 'IEEE INDISCON 2025 – NIT Rourkela',
      type: 'Conference Presentation',
      year: 'Aug 2025',
      desc: 'Co-authored and presented research on neural vocal mapping and mood-aware music recommendation systems at IEEE INDISCON 2025 hosted at NIT Rourkela.',
      doi: '10.1109/INDISCON66021.2025.11251708',
      link: 'https://doi.org/10.1109/INDISCON66021.2025.11251708',
    },
    {
      title: 'Real-Time MTCNN-Based Face Recognition for Criminal & Missing Person ID',
      venue: 'ICAICCIT 2025 – IEEE',
      type: 'Conference Presentation',
      year: 'Nov 2025',
      desc: 'Presented a real-time MTCNN-based face recognition system for criminal and missing-person identification at ICAICCIT 2025.',
      doi: '10.1109/ICAICCIT68829.2025.11434096',
      link: 'https://doi.org/10.1109/ICAICCIT68829.2025.11434096',
    },
    {
      title: 'Automatic Diagnosis of Schizophrenia Using Hybrid Neural Networks',
      venue: 'IJIRT – Vol. 12, Issue 3 (ISSN 2349-6002)',
      type: 'Journal Publication',
      year: 'Aug 2025',
      desc: 'Published research on automated schizophrenia diagnosis using hybrid neural network architectures in IJIRT (Vol. 12, Issue 3).',
      doi: '',
      link: 'https://ijirt.org/article?manuscript=183624',
    },
  ],
  certifications: [
    { name: 'Microsoft Azure SQL',                                      issuer: 'Microsoft · Coursera',                    date: 'Nov 2025' },
    { name: 'Responsible AI: Applying AI Principles with Google Cloud', issuer: 'Google Cloud · Coursera',                 date: 'Nov 2025' },
    { name: 'Introduction to Artificial Intelligence (AI)',             issuer: 'IBM · Coursera',                          date: 'Nov 2025' },
    { name: 'Data Analytics Job Simulation',                            issuer: 'Deloitte · Forage',                       date: 'Jul 2025' },
    { name: 'Linguaskill Business – B2 (Listening: C1)',                issuer: 'Cambridge University Press & Assessment', date: 'Mar 2026' },
  ],
  achievements: [
    { title: 'Academic Excellence',                     detail: 'CGPA 9.17 / 10.0 – Ranked among top-performing students in Computer Science cohort at Vardhaman College of Engineering', year: 'Ongoing' },
    { title: 'Secretary, Abhinaya Club (Drama Club)',   detail: 'Managed communications, maintained production records, and coordinated scheduling for 10+ member team executing cultural productions', year: '2024 – 2025' },
    { title: 'Volunteer Lead, Ortus 2K24 Annual Fest',  detail: 'Managed end-to-end execution of Gully Cricket event with 100+ participants, overseeing logistics and coordination', year: '2024' },
    { title: 'IEEE Paper Presenter',                    detail: 'Presented research at two prestigious IEEE international conferences (INDISCON & ICAICCIT)', year: '2025' },
  ],
};

// ── Custom Cursor ─────────────────────────────────────────────────────────────
const cursor      = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursorTrail');

if (cursor && cursorTrail && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  let isCursorActive = false;

  document.addEventListener('mousemove', e => {
    if (!isCursorActive) {
      cursor.classList.add('active');
      cursorTrail.classList.add('active');
      isCursorActive = true;
    }
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';

    setTimeout(() => {
      cursorTrail.style.left = e.clientX + 'px';
      cursorTrail.style.top  = e.clientY + 'px';
    }, 60);
  });

  document.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
    cursorTrail.classList.remove('active');
    isCursorActive = false;
  });
}

// ── Nav: scroll style + burger ────────────────────────────────────────────────
const nav        = document.getElementById('nav');
const navBurger  = document.getElementById('navBurger');
const mobileMenu = document.getElementById('mobileMenu');
const mobLinks   = document.querySelectorAll('.mob-link, .mob-resume-btn');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

function closeMenu() {
  mobileMenu.classList.remove('open');
  navBurger.classList.remove('open');
  document.body.classList.remove('menu-open');
}

navBurger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  navBurger.classList.toggle('open', isOpen);
  document.body.classList.toggle('menu-open', isOpen);
});

mobLinks.forEach(link => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
    closeMenu();
  }
});

// ── Scroll Reveal ─────────────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Load & Render Data ────────────────────────────────────────────────────────
async function loadPortfolio() {
  let data = FALLBACK_PORTFOLIO_DATA;
  try {
    const res = await fetch('api/portfolio');
    if (res.ok) {
      data = await res.json();
    }
  } catch {
    // Graceful offline / static fallback
    console.info('Using static resume portfolio data.');
  }

  if (data.education) renderEducation(data.education);
  if (data.skills) renderSkills(data.skills);
  if (data.projects) renderProjects(data.projects);
  if (data.publications) renderResearch(data.publications);
  if (data.certifications && data.achievements) renderCerts(data.certifications, data.achievements);
}

// ── Education ─────────────────────────────────────────────────────────────────
function renderEducation(eduList) {
  const container = document.getElementById('educationTimeline');
  if (!container) return;
  container.innerHTML = '';

  eduList.forEach((edu, i) => {
    const card = document.createElement('div');
    card.className = 'edu-card reveal';
    card.style.setProperty('--delay', `${i * 0.1}s`);

    const courseworkHTML = edu.coursework
      ? `<div class="edu-coursework"><strong>Relevant Coursework:</strong> ${edu.coursework}</div>`
      : '';

    card.innerHTML = `
      <div>
        <h3 class="edu-institution">${edu.institution}</h3>
        <div class="edu-degree">${edu.degree}</div>
        <div class="edu-location">${edu.location}</div>
        ${courseworkHTML}
      </div>
      <div class="edu-meta">
        <div class="edu-period">${edu.period}</div>
        <div class="edu-score">${edu.score}</div>
      </div>
    `;

    container.appendChild(card);
    revealObserver.observe(card);
  });
}

// ── Skills ────────────────────────────────────────────────────────────────────
const SKILL_ICONS = {
  'Core CS Concepts':     '💡',
  'Web Technologies':     '🌐',
  'Databases':            '🗄',
  'Cloud Platforms':      '☁',
  'Machine Learning':     '🧠',
  'Developer Tools':      '⚙',
  'Software Engineering': '🏗',
  'Hardware & IoT':       '📡',
};

function renderSkills(skills) {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  let delay = 0;

  Object.entries(skills).forEach(([cat, tags]) => {
    const card = document.createElement('div');
    card.className = 'skill-card reveal';
    card.style.setProperty('--delay', `${delay}s`);
    delay += 0.05;

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
  grid.innerHTML = '';

  projects.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.style.setProperty('--delay', `${i * 0.1}s`);

    const bulletsHTML = p.bullets && p.bullets.length
      ? `<ul class="project-bullets">${p.bullets.map(b => `<li>${b}</li>`).join('')}</ul>`
      : `<p class="project-desc">${p.desc}</p>`;

    card.innerHTML = `
      <span class="project-tag">${p.tag}</span>
      <div class="project-period">${p.period || ''}</div>
      <h3 class="project-title">${p.title}</h3>
      ${bulletsHTML}
      <div class="project-impact">${p.impact}</div>
      <div class="project-stack">
        ${p.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}
      </div>
      <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link">
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
  list.innerHTML = '';

  pubs.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'research-card reveal';
    card.style.setProperty('--delay', `${i * 0.1}s`);

    const linkHTML = p.link
      ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer" style="color:var(--accent);font-family:var(--font-mono);font-size:0.75rem;">View Publication (${p.doi ? 'DOI' : 'Article'}) →</a>`
      : '';

    card.innerHTML = `
      <div class="research-index">0${i + 1}</div>
      <div>
        <span class="research-type">${p.type}</span>
        <div class="research-title">${p.title}</div>
        <div class="research-venue">${p.venue}</div>
        ${p.desc ? `<div class="research-desc">${p.desc}</div>` : ''}
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
  grid.innerHTML = '';
  achRow.innerHTML = '';

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

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    btnText.style.display   = 'none';
    btnLoader.style.display = 'inline';
    submitBtn.disabled      = true;
    formMsg.textContent     = '';
    formMsg.className       = 'form-msg';

    const body = {
      name:    (form.elements.name ? form.elements.name.value : '').trim(),
      email:   (form.elements.email ? form.elements.email.value : '').trim(),
      subject: (form.elements.subject ? form.elements.subject.value : '').trim(),
      message: (form.elements.message ? form.elements.message.value : '').trim(),
    };

    try {
      const res = await fetch('api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(body),
      });

      if (res.ok) {
        const data = await res.json();
        formMsg.textContent = data.message;
        formMsg.classList.add(data.success ? 'success' : 'error');
        if (data.success) form.reset();
      } else {
        throw new Error('Server returned ' + res.status);
      }
    } catch {
      formMsg.textContent = 'Message could not be sent directly via server. Please email adithyadesa556@gmail.com!';
      formMsg.classList.add('error');
    } finally {
      btnText.style.display   = 'inline';
      btnLoader.style.display = 'none';
      submitBtn.disabled      = false;
    }
  });
}

// ── Smooth Active Nav Highlight On Scroll ────────────────────────────────────
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a:not(.nav-resume-pill)');

function updateActiveNav() {
  const scrollPos = window.scrollY + 160;
  sections.forEach(sec => {
    const top    = sec.offsetTop;
    const height = sec.offsetHeight;
    const id     = sec.getAttribute('id');
    if (scrollPos >= top && scrollPos < top + height) {
      navAnchors.forEach(a => {
        a.style.color = (a.getAttribute('href') === `#${id}`) ? 'var(--accent)' : '';
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
window.addEventListener('resize', updateActiveNav, { passive: true });

// ── Init ──────────────────────────────────────────────────────────────────────
loadPortfolio();
