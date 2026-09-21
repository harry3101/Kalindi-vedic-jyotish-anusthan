# 🎯 Cosmic Navamsa Guide - Command Reference

## ✅ Status: READY FOR DEVELOPMENT & DEPLOYMENT

All dependencies are installed and the project is ready to run!

---

## 📦 Dependencies Installed Successfully

✅ **Frontend Framework**
- React 19.3.0
- @tanstack/react-start 1.168.32
- @tanstack/react-router 1.170.18
- Vite 8.1.5

✅ **UI Components**
- 30+ Radix UI components
- Tailwind CSS 4.3.3
- shadcn/ui integration

✅ **Backend & Database**
- Supabase 2.116.0
- Drizzle ORM 0.45.2
- PostgreSQL support

✅ **Development Tools**
- TypeScript 5.9.3
- ESLint 9.39.5
- Prettier 3.9.8

---

## 🚀 Commands to Run This Application

### **1. Development Mode**
```bash
npm run dev
```
- 🎯 **Purpose**: Start development server with hot reload
- 🌐 **Access**: http://localhost:5173
- 📝 **What it does**: Runs Vite dev server with live updates

### **2. Production Build**
```bash
npm run build
```
- 🎯 **Purpose**: Create optimized production build
- 📦 **Output**: Compiled files in `dist/` folder
- ⏱️ **Time**: ~30-60 seconds

### **3. Preview Production Build**
```bash
npm run preview
```
- 🎯 **Purpose**: Test production build locally
- 🌐 **Access**: http://localhost:5173 (or available port)
- ✅ **Use before**: Deploying to make sure everything works

### **4. Code Quality**

**Check code style:**
```bash
npm run lint
```

**Auto-format code:**
```bash
npm run format
```

---

## 📋 Complete Setup Checklist

### Phase 1: Local Development ✅
- [x] Dependencies installed (`npm install`)
- [ ] **Next**: Create `.env.local` with Supabase credentials
- [ ] Run `npm run dev` to test

### Phase 2: Before Deployment
- [ ] Create Supabase account & project
- [ ] Get Supabase URL and API key
- [ ] Create `.env.local` file
- [ ] Test locally: `npm run dev`
- [ ] Run: `npm run build`
- [ ] Run: `npm run preview`

### Phase 3: Deploy to Render
- [ ] Push to GitHub
- [ ] Create Render account
- [ ] Connect GitHub repository
- [ ] Set environment variables in Render
- [ ] Deploy
- [ ] Monitor logs

---

## 🔑 Environment Variables Setup

### Create `.env.local`

Copy from `.env.example`:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add these:
```env
# Get from Supabase Dashboard → Settings → API
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1N...

# Database connection string (for migrations)
LOVABLE_DB_MIGRATION_URL=postgresql://user:password@host:5432/dbname

# App configuration
NODE_ENV=development
VITE_APP_URL=http://localhost:5173
```

---

## 📊 How to Get Supabase Credentials

1. **Visit**: https://supabase.com
2. **Sign Up**: Create free account
3. **Create Project**: Click "New Project"
4. **Get Credentials**:
   - Go to: Settings (⚙️) → API
   - Copy: Project URL → `VITE_SUPABASE_URL`
   - Copy: anon (public) key → `VITE_SUPABASE_ANON_KEY`
5. **Get Database URL**:
   - Go to: Settings → Database
   - Look for connection string
   - Use for: `LOVABLE_DB_MIGRATION_URL`

---

## 🌐 Deployment on Render

### Quick Deploy Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Connect to Render**
   - Go to https://render.com
   - Click "New +" → "Web Service"
   - Select your GitHub repository
   - Click "Connect"

3. **Configure Build & Start**
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run preview`

4. **Add Environment Variables** (in Render dashboard)
   ```
   VITE_SUPABASE_URL=your-url
   VITE_SUPABASE_ANON_KEY=your-key
   LOVABLE_DB_MIGRATION_URL=your-db-url
   NODE_ENV=production
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for build (2-5 minutes)
   - Get your live URL!

### Enable Auto-Deploy
Go to Settings → Auto-Deploy → Enable
Now every GitHub push automatically redeploys!

---

## 🎯 Typical Workflow

### Daily Development
```bash
# 1. Start dev server
npm run dev

# 2. Make changes (auto-reloads)
# ... edit files ...

# 3. Before committing
npm run lint
npm run format

# 4. Push to GitHub
git add .
git commit -m "Your message"
git push
```

### Before Production
```bash
# 1. Build for production
npm run build

# 2. Test the build
npm run preview

# 3. If everything works, deploy!
# (Auto-deploys on Render after GitHub push)
```

---

## 🐛 Debugging

### Enable verbose logging
```bash
npm run dev -- --debug
```

### Check what npm scripts are available
```bash
npm run
```

### View all installed packages
```bash
npm list --depth=0
```

### Update packages
```bash
npm update
```

---

## 📁 Important Files Created

| File | Purpose |
|------|---------|
| `.env.example` | Template for environment variables |
| `.env.local` | Your actual secrets (NOT in git) |
| `render.yaml` | Render deployment configuration |
| `DEPLOYMENT_GUIDE.md` | Full deployment documentation |
| `QUICK_START.md` | Quick reference guide |
| `setup.sh` | Linux/macOS setup script |
| `setup.bat` | Windows setup script |

---

## ✨ Quick Reference Card

```
🚀 START DEVELOPMENT      npm run dev
🏗️  BUILD FOR PROD        npm run build
👁️  PREVIEW BUILD         npm run preview
🔍 CHECK CODE STYLE      npm run lint
✨ AUTO FORMAT CODE       npm run format
```

---

## 🔗 Useful Links

| Resource | URL |
|----------|-----|
| **Supabase** | https://supabase.com |
| **Render** | https://render.com |
| **Node.js** | https://nodejs.org |
| **TanStack Start** | https://tanstack.com/start |
| **Tailwind CSS** | https://tailwindcss.com |
| **Drizzle ORM** | https://orm.drizzle.team |

---

## 💡 Pro Tips

1. **Use Node v18+** for best compatibility
2. **Keep `.env.local` secure** - never commit it
3. **Test locally** before pushing to GitHub
4. **Check Render logs** if deployment fails
5. **Enable auto-deploy** on Render for hands-free updates
6. **Monitor your Supabase** usage in dashboard

---

## ❓ FAQs

**Q: Where do I get Supabase credentials?**
A: Sign up at supabase.com, create a project, go to Settings → API

**Q: Do I need to pay for Render?**
A: Free tier available! Paid plans start at $7/month

**Q: Will my code be visible on Render?**
A: No, only your compiled app is deployed. Source code stays on GitHub

**Q: How do I update the app after deployment?**
A: Just push to GitHub - Render auto-deploys!

**Q: What if the build fails on Render?**
A: Check the Logs tab in your Render service dashboard

---

## 🎉 You're All Set!

Everything is installed and ready. Just:

1. Create `.env.local` with your Supabase credentials
2. Run `npm run dev`
3. Open http://localhost:5173

**Happy coding! 🚀**

---

**Last Updated**: 2026-09-21  
**Node Version**: 18+ (Recommended)  
**Package Manager**: npm  
**Status**: ✅ READY
