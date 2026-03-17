require('dotenv').config();
const express    = require('express');
const helmet     = require('helmet');
const rateLimit  = require('express-rate-limit');
const nodemailer = require('nodemailer');
const path       = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Security & Middleware ─────────────────────────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc:   ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc:    ["'self'", "https://fonts.gstatic.com"],
      scriptSrc:  ["'self'", "'unsafe-inline'"],
      imgSrc:     ["'self'", "data:", "https:"],
    }
  }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ── Rate limiting for contact form ───────────────────────────────────────────
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 5,
  message: { success: false, message: 'Too many requests. Please try again later.' }
});

// ── Portfolio Data ────────────────────────────────────────────────────────────
const portfolioData = {
  name:     'Desa Adithya',
  tagline:  'Software Engineer · Researcher · Builder',
  about:    `I'm a final-year B.Tech Computer Science student at Vardhaman College of Engineering, Hyderabad,
             with a CGPA of 9.15. I build resilient software, publish research, and design hardware systems
             that solve real-world problems — from flood detection to AI-powered diagnostics.
             I'm passionate about using technology as a force for good.`,
  email:    'adithyadesa556@gmail.com',
  phone:    '+91 93928 94830',
  location: 'Hyderabad, Telangana, India',
  linkedin: 'https://linkedin.com/in/adithya-desa',
  github:   'https://github.com/adithya-desa',

  education: [
    {
      institution: 'Vardhaman College of Engineering',
      degree:      'B.Tech – Computer Science & Engineering',
      period:      'Aug 2023 – Apr 2027',
      score:       'CGPA: 9.15 / 10.0',
      note:        'No active backlogs',
    },
    {
      institution: 'Telangana State Board (TSBIE)',
      degree:      'Class XII – MPC',
      period:      '2022',
      score:       '98.7%',
      note:        '',
    },
    {
      institution: 'Board of Secondary Education, Telangana',
      degree:      'Class X',
      period:      '2020',
      score:       'CGPA: 10.0 / 10.0',
      note:        '',
    },
  ],

  skills: {
    'Languages':    ['Java', 'Python', 'C', 'JavaScript'],
    'Web':          ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express'],
    'Cloud':        ['AWS', 'Microsoft Azure'],
    'Databases':    ['MySQL', 'SQL++'],
    'ML / AI':      ['scikit-learn', 'Neural Networks', 'Federated Learning'],
    'Tools':        ['Git', 'Linux', 'Android Studio', 'Arduino IDE'],
    'Concepts':     ['Agile', 'SDLC', 'REST APIs', 'OOP', 'CI/CD', 'IoT'],
  },

  projects: [
    {
      title:   'AquaVigil – IoT Flood Monitoring System',
      stack:   ['Arduino', 'C', 'IoT', 'GPS', 'GSM'],
      desc:    'Designed and built a real-time flood monitoring hardware device with a 3-level alert mechanism — automating alarms, SMS alerts, and emergency calls to rescue services. Integrated GPS for automatic location sharing at critical water levels.',
      impact:  'Disaster management · Public safety · Real-world deployment',
      github:  'https://github.com/adithya-desa',
      tag:     'IoT · Hardware',
    },
    {
      title:   'Federated Graph CNN for Wireless Sensor Networks',
      stack:   ['Python', 'Federated Learning', 'Graph CNN', 'scikit-learn'],
      desc:    'Designed and built a Federated Relational Graph Clifford Steerable CNN (FRG-CSCNN) framework to optimise mobile sink routing in Heterogeneous Wireless Sensor Networks. Integrated federated learning for distributed, privacy-preserving model training.',
      impact:  'Energy efficiency · Privacy-preserving · Smart agriculture & environmental monitoring',
      github:  'https://github.com/adithya-desa',
      tag:     'AI · Research',
    },
    {
      title:   'Expense Tracker Web Application',
      stack:   ['Java Servlets', 'JSP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      desc:    'Built a full-stack web application for personal finance management — logging, categorising, and analysing expenses with daily, weekly, and monthly reports. Implemented secure authentication and real-time CRUD operations.',
      impact:  '100% secure login · Real-time insights · Interactive dashboard',
      github:  'https://github.com/adithya-desa',
      tag:     'Full-Stack · Web',
    },
  ],

  publications: [
    {
      title:  'EchoSync: A Smart Audio Recommendation Engine Using Neural Vocal Mapping and Contextual Mood',
      venue:  'IEEE INDISCON 2025 – NIT Rourkela',
      type:   'Conference Presentation',
      year:   '2025',
      link:   '',
    },
    {
      title:  'Towards Safer Communities: Real-Time MTCNN-Based Face Recognition for Criminal and Missing Person Identification',
      venue:  'ICAICCIT 2025 – IEEE Delhi Section',
      type:   'Conference Presentation',
      year:   '2025',
      link:   '',
    },
    {
      title:  'Automatic Diagnosis of Schizophrenia Using Hybrid Neural Networks: A Feature-Driven Study',
      venue:  'IJIRT – Vol. 12, Issue 3 (ISSN 2349-6002, Impact Factor 8.017)',
      type:   'Journal Publication',
      year:   'Aug 2025',
      link:   'https://ijirt.org/article?manuscript=183624',
    },
  ],

  certifications: [
    { name: 'Microsoft Azure SQL',                                  issuer: 'Microsoft · Coursera',                    date: 'Nov 2025' },
    { name: 'Responsible AI: Applying AI Principles with Google Cloud', issuer: 'Google Cloud · Coursera',             date: 'Nov 2025' },
    { name: 'Introduction to Artificial Intelligence (AI)',         issuer: 'IBM · Coursera',                          date: 'Nov 2025' },
    { name: 'Data Analytics Job Simulation',                        issuer: 'Deloitte · Forage',                       date: 'Jul 2025' },
    { name: 'Linguaskill Business – B2 (Listening: C1)',            issuer: 'Cambridge University Press & Assessment', date: 'Mar 2026' },
  ],

  achievements: [
    { title: 'Smart India Hackathon (SIH)', detail: 'Participant – Government of India national hackathon', year: '2024' },
    { title: 'Academic Excellence',         detail: 'CGPA 9.15 – Vardhaman College of Engineering',       year: 'Ongoing' },
    { title: 'IEEE Paper Presenter',        detail: 'Presented at two IEEE international conferences',     year: '2025' },
  ],
};

// ── API Routes ────────────────────────────────────────────────────────────────
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email address.' });
  }

  // If no email credentials configured, still return success (dev mode)
  if (!process.env.EMAIL_USER || process.env.EMAIL_PASS === 'your_gmail_app_password_here') {
    console.log('📧 Contact form submission (email not configured):');
    console.log({ name, email, subject, message });
    return res.json({ success: true, message: 'Message received! I will get back to you soon.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from:    `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to:      process.env.EMAIL_TO,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr/>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    res.json({ success: true, message: 'Message sent! I will get back to you soon.' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ success: false, message: 'Failed to send message. Please email me directly.' });
  }
});

// ── Serve index.html for all other routes (SPA fallback) ─────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🚀 Portfolio running at http://localhost:${PORT}\n`);
});
