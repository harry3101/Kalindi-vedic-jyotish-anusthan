# Cosmic Navamsa Guide - Deployment & Setup Guide

## 📋 Project Information
- **Project**: Cosmic Navamsa Guide - Vedic Astrology Platform
- **Stack**: TanStack Start (React + SSR) + Vite + TypeScript + Tailwind CSS
- **Database**: Supabase (PostgreSQL) with Drizzle ORM
- **Package Manager**: npm (or yarn/pnpm)
- **Node Version**: 18.x or higher recommended

---

## 🚀 Local Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file in the root directory:
```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
LOVABLE_DB_MIGRATION_URL=postgresql://user:password@host:5432/database

# Application
VITE_APP_URL=http://localhost:5173
NODE_ENV=development
```

**To get Supabase credentials:**
1. Go to [Supabase Dashboard](https://supabase.com)
2. Create a project or open existing one
3. Navigate to Settings → API → Copy URL and anon key

### 3. Setup Database (First Time)
```bash
# Apply migrations
npm run db:migrate

# Or if using Drizzle:
npx drizzle-kit migrate
```

### 4. Run Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### 5. Other Useful Commands
```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

---

## 📦 Available NPM Scripts
| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode (debug) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

---

## 🌐 Deployment on Render

### Prerequisites
- Render account (https://render.com)
- GitHub repository with this code
- Supabase project configured

### Step-by-Step Deployment

#### 1. Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/cosmic-navamsa-guide.git
git push -u origin main
```

#### 2. Create Render Account & Project
- Go to https://render.com and sign up
- Click "New +" → "Web Service"
- Connect your GitHub repository
- Select the repo `cosmic-navamsa-guide`

#### 3. Configure Render Deployment
Fill in the following settings:

| Setting | Value |
|---------|-------|
| **Name** | cosmic-navamsa-guide |
| **Environment** | Node |
| **Region** | Pick closest to your users (e.g., US) |
| **Branch** | main |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm run start` OR `npm run preview` |

#### 4. Add Environment Variables on Render
In Render dashboard, go to Environment → Add:

```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-key
LOVABLE_DB_MIGRATION_URL=your-database-url
NODE_ENV=production
```

#### 5. Deploy
- Click "Create Web Service"
- Render will automatically build and deploy
- Once complete, you'll get a URL like: `https://cosmic-navamsa-guide.onrender.com`

#### 6. Enable Auto-Deploy
- Go to Settings → Auto-Deploy
- Toggle "Auto-deploy new commits"
- Now every GitHub push will automatically redeploy

---

## 🔧 Troubleshooting Deployment

### Build Fails
Check the render.com logs:
1. Go to your service dashboard
2. Click "Logs" tab
3. Look for errors in build output

Common issues:
- Missing environment variables → Add them in Render dashboard
- Node version mismatch → Add `"engines": { "node": "18.x" }` to package.json
- Database migration failure → Ensure `LOVABLE_DB_MIGRATION_URL` is correct

### App Not Starting
- Check if port is correctly set (default 3000)
- Verify `start` script exists in package.json
- Check logs for runtime errors

### Database Connection Issues
- Verify Supabase credentials in `.env`
- Check if Supabase project is active
- Ensure database migrations have run

---

## 📁 Project Structure Overview
```
.
├── src/
│   ├── routes/          # TanStack Router pages
│   ├── components/      # React components (UI, astrology forms)
│   ├── hooks/           # Custom React hooks
│   ├── integrations/    # Supabase, Lovable auth
│   ├── lib/             # Utilities (astrology, horoscope, etc.)
│   ├── server.ts        # SSR server configuration
│   └── router.tsx       # Route definitions
├── drizzle/
│   ├── schema.ts        # Database schema
│   └── migrations/      # SQL migration files
├── supabase/            # Supabase config
├── public/              # Static files
├── vite.config.ts       # Vite configuration
├── drizzle.config.ts    # Drizzle ORM configuration
├── package.json         # Dependencies & scripts
└── README.md            # Project documentation
```

---

## 🗄️ Database Schema
The application uses PostgreSQL via Supabase with Drizzle ORM.

**Main Tables:**
- `astrology_requests` - Stores kundli form submissions
- `admin_roles` - Admin user roles and permissions

View schema: [drizzle/schema.ts](drizzle/schema.ts)

---

## 🔐 Security Notes
- Never commit `.env.local` or sensitive credentials
- Use environment variables for all secrets
- `.env.example` shows what variables are needed
- On Render, set variables in the dashboard, not in code

---

## 📞 Support & Resources
- **TanStack Router**: https://tanstack.com/router
- **TanStack Start**: https://tanstack.com/start
- **Supabase Docs**: https://supabase.com/docs
- **Drizzle ORM**: https://orm.drizzle.team/
- **Render Docs**: https://docs.render.com/
- **Vite**: https://vitejs.dev/

---

## ✅ Pre-Deployment Checklist
- [ ] All dependencies installed (`npm install`)
- [ ] Environment variables configured (`.env.local`)
- [ ] Database migrations applied (`npm run build`)
- [ ] App runs locally (`npm run dev`)
- [ ] Code committed to GitHub
- [ ] Render.yaml reviewed
- [ ] Supabase project active and credentials ready
- [ ] Render environment variables configured
- [ ] Auto-deploy enabled (optional but recommended)

---

**Last Updated**: 2026-09-21
**Status**: Ready for Deployment ✅
