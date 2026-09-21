# 🌟 Cosmic Navamsa Guide - Quick Start Guide

Welcome! This guide will help you get the application running locally and deployed to Render.

## 📋 Prerequisites

Before you start, ensure you have:
- **Node.js 18+** - [Download](https://nodejs.org/)
- **npm** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)
- **Supabase Account** - [Sign up free](https://supabase.com)
- **Render Account** - [Sign up free](https://render.com)

---

## ⚡ Quick Start (5 Minutes)

### Windows Users
```powershell
.\setup.bat
```

### macOS / Linux Users
```bash
chmod +x setup.sh
./setup.sh
```

### Manual Setup
```bash
# 1. Install dependencies
npm install

# 2. Copy environment template
cp .env.example .env.local

# 3. Edit .env.local with your credentials (see next section)

# 4. Run development server
npm run dev
```

Then open **http://localhost:5173** in your browser.

---

## 🔐 Environment Variables Setup

### Get Supabase Credentials

1. Go to https://supabase.com and sign in
2. Create a new project or select existing one
3. Go to **Settings → API** (left sidebar)
4. Copy:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon (public) key** → `VITE_SUPABASE_ANON_KEY`

### Create .env.local

Create a file named `.env.local` in the project root:

```env
# Supabase (Required)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here

# Database Migration URL (For Drizzle)
LOVABLE_DB_MIGRATION_URL=postgresql://user:password@host:5432/database

# Application Settings
NODE_ENV=development
VITE_APP_URL=http://localhost:5173
```

> **Note**: Never commit `.env.local` to git. It's already in `.gitignore`.

---

## 🎯 Running Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | 🚀 Start dev server (hot reload) |
| `npm run build` | 🏗️ Build for production |
| `npm run preview` | 👁️ Preview production build |
| `npm run lint` | 🔍 Check code style |
| `npm run format` | ✨ Format code automatically |

---

## 📊 Project Structure

```
cosmic-navamsa-guide/
├── src/
│   ├── routes/              # Pages (Home, About, Services, etc.)
│   ├── components/
│   │   ├── astrology/       # Kundli forms, horoscope components
│   │   └── ui/              # Reusable UI components
│   ├── integrations/        # Supabase & Auth
│   ├── lib/                 # Utilities (astrology calcs, etc.)
│   └── server.ts            # Server configuration
├── drizzle/
│   ├── schema.ts            # Database schema
│   └── migrations/          # SQL migrations
├── public/                  # Static assets
├── .env.example             # Environment template
├── vite.config.ts           # Build configuration
└── package.json             # Dependencies
```

---

## 🚀 Deploying to Render

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cosmic-navamsa-guide.git
git push -u origin main
```

### Step 2: Create Render Account

1. Go to https://render.com
2. Sign up with GitHub
3. Click "New +" → "Web Service"

### Step 3: Connect Repository

- Select "Connect a repository"
- Choose your GitHub repo
- Click "Connect"

### Step 4: Configure Service

Fill in these settings:

| Setting | Value |
|---------|-------|
| **Name** | `cosmic-navamsa-guide` |
| **Runtime** | `Node` |
| **Region** | Select closest to users |
| **Branch** | `main` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm run preview` |

### Step 5: Add Environment Variables

Click "Advanced" → "Add Environment Variable" for each:

```
VITE_SUPABASE_URL = your-supabase-url
VITE_SUPABASE_ANON_KEY = your-anon-key
LOVABLE_DB_MIGRATION_URL = your-db-url
NODE_ENV = production
```

### Step 6: Deploy

Click "Create Web Service" and wait for deployment to complete!

Your app will be live at: `https://cosmic-navamsa-guide.onrender.com`

---

## 🔧 Troubleshooting

### "npm: command not found"
Install Node.js from https://nodejs.org/

### ".env.local not found"
Run the setup script or manually create `.env.local` and copy content from `.env.example`

### "Cannot find module '@supabase/supabase-js'"
Run `npm install`

### Development server won't start
- Check if port 5173 is available
- Try: `npm run dev -- --port 3000`
- Check terminal for specific error messages

### Build fails on Render
Check Render logs:
1. Go to Service Dashboard
2. Click "Logs" tab
3. Look for error messages
4. Common fixes:
   - Add missing environment variables
   - Update Node.js version in package.json: `"engines": { "node": "18.x" }`
   - Check database URL format

### Database connection issues
- Verify Supabase URL and key are correct
- Check if database is active in Supabase dashboard
- Test connection locally before deploying

---

## 📚 Tech Stack Overview

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Framework |
| **TanStack Router** | Routing & SSR |
| **TanStack Start** | Full-stack framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **Radix UI** | UI Components |
| **Supabase** | Backend & Database |
| **Drizzle ORM** | Database management |
| **Vite** | Build tool |
| **Render** | Hosting |

---

## 📖 Resources & Docs

- **Full Deployment Guide**: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- **TanStack Start**: https://tanstack.com/start
- **Supabase Docs**: https://supabase.com/docs
- **Render Docs**: https://docs.render.com/
- **Tailwind CSS**: https://tailwindcss.com/
- **Radix UI**: https://www.radix-ui.com/

---

## ❓ Need Help?

1. Check [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed information
2. Review the troubleshooting section above
3. Check Render/Supabase dashboards for error logs
4. Open an issue on GitHub

---

**Happy coding! 🚀**

Last updated: 2026-09-21
