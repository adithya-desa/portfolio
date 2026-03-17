# Desa Adithya — Portfolio Website

A full-stack personal portfolio website built with **Node.js + Express** (backend) and
**vanilla HTML/CSS/JS** (frontend). Features a working contact form, REST API, and an
elegant dark-luxury design.

---

## 📁 Project Structure

```
portfolio/
├── server.js            ← Express server + API routes
├── package.json         ← Dependencies
├── .env.example         ← Environment variables template
├── .env                 ← Your actual secrets (create this — never commit it)
└── public/
    ├── index.html       ← Single-page frontend
    ├── css/
    │   └── style.css    ← All styles
    └── js/
        └── main.js      ← Frontend logic (cursor, API calls, form)
```

---

## 🚀 Step-by-Step Setup

### Step 1 — Install Node.js

Download and install Node.js (v18 or higher) from:
👉 https://nodejs.org

Verify installation:
```bash
node --version    # should print v18.x.x or higher
npm --version
```

---

### Step 2 — Extract & Open the Project

Unzip the portfolio folder, then open a terminal in it:
```bash
cd portfolio
```

---

### Step 3 — Install Dependencies

```bash
npm install
```

This installs: express, nodemailer, helmet, express-rate-limit, dotenv.

---

### Step 4 — Set Up Environment Variables

Copy the example file:
```bash
# On Mac/Linux:
cp .env.example .env

# On Windows:
copy .env.example .env
```

Open `.env` and fill in:
```
PORT=3000
EMAIL_USER=adithyadesa556@gmail.com
EMAIL_PASS=your_gmail_app_password_here
EMAIL_TO=adithyadesa556@gmail.com
```

**To get a Gmail App Password:**
1. Go to your Google Account → Security
2. Enable 2-Step Verification
3. Go to Security → App Passwords
4. Select "Mail" + "Windows Computer" → Generate
5. Paste the 16-character password into EMAIL_PASS

> ⚠️ If you skip this step, the contact form still works — it just logs messages to
> the terminal instead of sending emails.

---

### Step 5 — Start the Server

```bash
npm start
```

You should see:
```
🚀 Portfolio running at http://localhost:3000
```

Open your browser and visit: **http://localhost:3000**

---

### Step 6 — (Optional) Live Reload During Development

```bash
npm run dev
```

This uses `nodemon` to auto-restart the server when you edit files.

---

## 🌐 Deploying to the Internet (Free)

### Option A — Render.com (Recommended, Free)

1. Push your project to GitHub
2. Go to https://render.com → New → Web Service
3. Connect your GitHub repo
4. Set:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Add environment variables (from your .env) in the Render dashboard
6. Deploy — you'll get a free URL like `https://adithya-portfolio.onrender.com`

### Option B — Railway.app

1. Go to https://railway.app
2. New Project → Deploy from GitHub
3. Add environment variables
4. Deploy

### Option C — Vercel (requires minor changes)

Vercel works best with serverless. For this Express app, use Render or Railway instead.

---

## ✏️ Customising Your Portfolio

All your data lives in `server.js` in the `portfolioData` object (around line 30).
To update anything:

- **Projects** → edit `portfolioData.projects`
- **Certifications** → edit `portfolioData.certifications`
- **Publications** → edit `portfolioData.publications`
- **Skills** → edit `portfolioData.skills`

The frontend automatically fetches and renders everything from the API — no HTML editing needed.

---

## 🔒 Security Features

- `helmet` — sets secure HTTP headers
- `express-rate-limit` — limits contact form to 5 submissions per 15 minutes
- Input validation on contact form (frontend + backend)
- No raw user data exposed in API

---

## 📦 Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Backend   | Node.js, Express.js               |
| Frontend  | HTML5, CSS3, Vanilla JavaScript   |
| Email     | Nodemailer (Gmail SMTP)           |
| Fonts     | Syne, DM Sans, DM Mono (Google)   |
| Security  | Helmet, express-rate-limit        |
| Deploy    | Render / Railway (recommended)    |

---

## 📬 Contact Form

The `/api/contact` POST endpoint accepts:
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

Returns:
```json
{ "success": true, "message": "Message sent!" }
```

---

Built by Desa Adithya · adithyadesa556@gmail.com
