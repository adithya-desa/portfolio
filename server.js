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
      connectSrc: ["'self'", "https://formsubmit.co"],
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

// ── Portfolio Data (Synchronized with Official Resume) ────────────────────────
const portfolioData = {
  name:     'Desa Adithya',
  tagline:  'Software Engineer · AI Researcher · Cloud Enthusiast',
  about:    `I'm a final-year Computer Science undergraduate at Vardhaman College of Engineering, Hyderabad, with a CGPA of 9.17/10.0. I build resilient software, publish peer-reviewed IEEE research, and engineer systems that solve real-world problems — from IoT flood detection to privacy-preserving federated learning and cloud computing across AWS and Azure.`,
  email:    'adithyadesa556@gmail.com',
  phone:    '+91 93928 94830',
  location: 'Hyderabad, Telangana, India',
  linkedin: 'https://linkedin.com/in/adithya-desa-567980291/',
  github:   'https://github.com/adithya-desa',
  website:  'https://adithyadesa.online',
  resume:   'resume.pdf',

  education: [
    {
      institution: 'Vardhaman College of Engineering',
      location:    'Hyderabad, Telangana',
      degree:      'B.Tech in Computer Science & Engineering',
      period:      'Aug 2023 – Apr 2027',
      score:       'CGPA: 9.17 / 10.0',
      coursework:  'Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Machine Learning, Cloud Computing',
    },
    {
      institution: 'Pragathi Junior College, Telangana State Board of Intermediate Education (TSBIE)',
      location:    'Telangana',
      degree:      'Class XII (MPC)',
      period:      '2023',
      score:       '98.7%',
      coursework:  '',
    },
    {
      institution: 'SPR High School, Board of Secondary Education, Telangana',
      location:    'Telangana',
      degree:      'Class X',
      period:      '2021',
      score:       'CGPA: 10.0 / 10.0',
      coursework:  '',
    },
  ],

  skills: {
    'Core CS Concepts':     ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'Machine Learning', 'Deep Learning'],
    'Web Technologies':     ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'JSP', 'Servlets', 'REST APIs'],
    'Databases':            ['MySQL', 'SQL'],
    'Cloud Platforms':      ['AWS', 'Microsoft Azure'],
    'Machine Learning':     ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Federated Learning', 'Neural Networks', 'Graph CNN'],
    'Developer Tools':      ['Git', 'Linux', 'Android Studio', 'Arduino IDE'],
    'Software Engineering': ['OOP', 'Agile', 'SDLC', 'CI/CD'],
    'Hardware & IoT':       ['Arduino', 'GPS', 'GSM', 'Embedded Systems'],
  },

  projects: [
    {
      title:   'AquaVigil – IoT Flood Monitoring & Emergency Response System',
      stack:   ['Arduino', 'IoT', 'GPS', 'GSM'],
      period:  'Feb 2025 – Apr 2025',
      desc:    'Designed and developed a real-time flood monitoring hardware device with a 3-level alert mechanism — automating alarms, SMS alerts, and emergency calls to rescue services. Integrated GPS for automatic location sharing at critical water levels.',
      bullets: [
        'Designed and developed an IoT-based flood monitoring and emergency response system using Arduino, GPS, and GSM modules.',
        'Implemented a three-level flood alert mechanism triggering alarms, automated SMS notifications, and emergency calls.',
        'Enabled real-time location sharing with rescue services during critical flood conditions to support disaster-response operations.',
        'Engineered reliable power management to ensure uninterrupted operation during extreme weather events.'
      ],
      impact:  'Disaster management · Real-time alerts · Public safety',
      github:  'https://github.com/adithya-desa',
      tag:     'IoT · Hardware',
    },
    {
      title:   'Energy-Efficient Mobile Sink Path Planning in HWSNs',
      stack:   ['Python', 'Federated Learning', 'Graph CNN'],
      period:  'Dec 2025 – Feb 2026',
      desc:    'Developed a Federated Graph CNN framework for mobile sink path optimization in Heterogeneous Wireless Sensor Networks (HWSNs). Modeled nodes as graph structures with privacy-preserving training across distributed clients.',
      bullets: [
        'Developed a Federated Graph CNN framework for mobile sink path optimization in Heterogeneous Wireless Sensor Networks (HWSNs).',
        'Modeled wireless sensor nodes as graph structures and implemented privacy-preserving federated learning across distributed clients.',
        'Improved network lifetime from 1200 to 1650 rounds while increasing load-balancing efficiency from 72% to 89%.',
        'Enhanced packet delivery ratio from 88% to 95% through adaptive sink-routing optimization.'
      ],
      impact:  'Network lifetime: 1200→1650 rounds · PDR: 88%→95% · Load balancing: 72%→89%',
      github:  'https://github.com/adithya-desa',
      tag:     'AI · Research',
    },
    {
      title:   'Federated Learning – Heart Disease Detection with Concept Drift',
      stack:   ['PyTorch', 'Federated Learning', 'Python'],
      period:  'May 2025 – Aug 2025',
      desc:    'Developed a privacy-preserving federated learning framework for heart disease prediction by sharing model gradients instead of sensitive patient records, featuring adaptive concept-drift retraining.',
      bullets: [
        'Developed a privacy-preserving federated learning framework for heart disease prediction by sharing model gradients instead of sensitive patient records.',
        'Implemented adaptive concept-drift detection mechanisms to automatically retrain models under changing data distributions, improving long-term predictive reliability.'
      ],
      impact:  'Privacy-preserving AI · Concept-drift adaptation · Healthcare diagnostics',
      github:  'https://github.com/adithya-desa',
      tag:     'AI · Healthcare',
    },
    {
      title:   'DeepFake Image Detection System',
      stack:   ['CNN', 'Transfer Learning', 'PyTorch'],
      period:  'Mar 2026 – May 2026',
      desc:    'Built a deep learning-based image classification system to identify AI-generated and manipulated media using transfer learning techniques with multiple CNN architectures.',
      bullets: [
        'Built a deep learning-based image classification system to identify AI-generated and manipulated media using transfer learning techniques.',
        'Compared multiple CNN architectures and optimized inference performance for robust deepfake detection across diverse image datasets.'
      ],
      impact:  'Deepfake detection · Transfer learning · High-accuracy inference',
      github:  'https://github.com/adithya-desa',
      tag:     'Deep Learning · CV',
    },
  ],

  publications: [
    {
      title:  'EchoSync: Smart Audio Recommendation Engine',
      venue:  'IEEE INDISCON 2025 – NIT Rourkela',
      type:   'Conference Presentation',
      year:   'Aug 2025',
      desc:   'Co-authored and presented research on neural vocal mapping and mood-aware music recommendation systems at IEEE INDISCON 2025 hosted at NIT Rourkela.',
      doi:    '10.1109/INDISCON66021.2025.11251708',
      link:   'https://doi.org/10.1109/INDISCON66021.2025.11251708',
    },
    {
      title:  'Real-Time MTCNN-Based Face Recognition for Criminal & Missing Person ID',
      venue:  'ICAICCIT 2025 – IEEE',
      type:   'Conference Presentation',
      year:   'Nov 2025',
      desc:   'Presented a real-time MTCNN-based face recognition system for criminal and missing-person identification at ICAICCIT 2025.',
      doi:    '10.1109/ICAICCIT68829.2025.11434096',
      link:   'https://doi.org/10.1109/ICAICCIT68829.2025.11434096',
    },
    {
      title:  'Automatic Diagnosis of Schizophrenia Using Hybrid Neural Networks',
      venue:  'IJIRT – Vol. 12, Issue 3 (ISSN 2349-6002)',
      type:   'Journal Publication',
      year:   'Aug 2025',
      desc:   'Published research on automated schizophrenia diagnosis using hybrid neural network architectures in IJIRT (Vol. 12, Issue 3).',
      doi:    '',
      link:   'https://ijirt.org/article?manuscript=183624',
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

  const recipient = process.env.EMAIL_TO || process.env.EMAIL_USER || portfolioData.email;

  // If no email credentials configured or placeholder password, return success (dev mode)
  if (!process.env.EMAIL_USER || process.env.EMAIL_PASS === 'your_gmail_app_password_here') {
    console.log('📧 Contact form submission (dev mode / email not configured):');
    console.log({ name, email, subject, message, forwardedTo: recipient });
    return res.json({ success: true, message: 'Message received! I will get back to you soon.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from:    `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to:      recipient,
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

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`\n🚀 Portfolio running at http://localhost:${PORT}\n`);
  });
}

module.exports = app;

