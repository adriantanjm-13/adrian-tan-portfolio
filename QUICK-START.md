# Quick Start Guide

## 5-Minute Setup (One Time Only)

### 1. Install Git
- Download from https://git-scm.com
- Install with default settings

### 2. Create GitHub Account
- Go to https://github.com
- Sign up with your email

### 3. Open Terminal in Your Project Folder
```bash
cd /path/to/your/my-portfolio
```

### 4. Initialize Git
```bash
git init
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### 5. First Commit
```bash
git add .
git commit -m "Initial commit"
```

### 6. Create Repository on GitHub
- Go to https://github.com/new
- Name it `adrian-tan-portfolio`
- Leave other settings default
- Click "Create repository"

### 7. Connect and Push
GitHub will show commands. Copy and paste them:
```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/adrian-tan-portfolio.git
git push -u origin main
```

Done! Your code is on GitHub. 🎉

---

## Regular Workflow (Every Update)

Whenever you change your portfolio:

```bash
git add .
git commit -m "Brief description of your change"
git push
```

That's it. Takes 30 seconds.

---

## Deploy to the Internet

### Option A: GitHub Pages (Free, Built-in)

```bash
npm run build
```

Then in GitHub:
- Settings → Pages
- Source: main branch
- Wait 1 minute
- Your site is live at: `https://YOUR-USERNAME.github.io/adrian-tan-portfolio`

### Option B: Vercel (Free, Easiest)

1. Go to https://vercel.com
2. Sign up with GitHub
3. Import your repository
4. Done! Site is live at: `https://adrian-tan-portfolio.vercel.app`

Auto-deploys on every push. 🚀

---

## Common Commands

| Task | Command |
|------|---------|
| Check status | `git status` |
| Add changes | `git add .` |
| Commit | `git commit -m "message"` |
| Push to GitHub | `git push` |
| See history | `git log` |
| View one commit | `git show` |

---

## Stuck?

1. Read `GITHUB-DEPLOYMENT-GUIDE.md` (detailed explanation)
2. Google your error message
3. GitHub has great docs at https://docs.github.com

You've got this! 💪
