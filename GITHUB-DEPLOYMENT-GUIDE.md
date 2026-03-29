# GitHub Deployment Guide for Beginners

A complete step-by-step guide to get your Astro portfolio on GitHub and deployed to the world.

---

## Part 1: Prerequisites (15 minutes)

### Step 1: Install Git

Git is the version control system that tracks changes to your code.

**Windows:**
1. Go to https://git-scm.com/download/win
2. Download and run the installer
3. Click through with default settings (safe to click "Next" for all prompts)
4. Restart your computer

**Mac:**
1. Go to https://git-scm.com/download/mac
2. Download the installer and run it
3. Or use Homebrew: `brew install git`

**Linux:**
```bash
sudo apt-get install git
```

**Verify installation:**
Open Terminal/Command Prompt and type:
```bash
git --version
```
You should see something like: `git version 2.40.0`

### Step 2: Create a GitHub Account

1. Go to https://github.com
2. Click "Sign up"
3. Enter your email, create a password, choose a username
4. Follow the verification steps
5. You now have a GitHub account!

### Step 3: Configure Git with Your Info

Open Terminal/Command Prompt and run these commands (replace with YOUR info):

```bash
git config --global user.name "Adrian Tan"
git config --global user.email "adriantanjm@gmail.com"
```

This tells Git who you are so it can track who made each change.

---

## Part 2: Initialize Git in Your Project (5 minutes)

### Step 1: Open Terminal in Your Project Folder

Navigate to your portfolio folder in Terminal/Command Prompt:

```bash
cd /path/to/your/my-portfolio
```

(On Windows, you can also right-click your folder in File Explorer and select "Open Git Bash here")

### Step 2: Initialize Git Repository

```bash
git init
```

You should see: `Initialized empty Git repository in /path/to/my-portfolio/.git`

### Step 3: Check Git Status

```bash
git status
```

This shows all your files that haven't been tracked yet. You should see many red files (untracked).

---

## Part 3: Make Your First Commit (10 minutes)

A "commit" is like saving a snapshot of your project at a specific moment in time.

### Step 1: Add All Files to Git

```bash
git add .
```

The `.` means "add everything." Your files are now "staged" (ready to commit).

### Step 2: Create Your First Commit

```bash
git commit -m "Initial commit: Astro portfolio with case studies"
```

The message in quotes describes what you're committing. You should see output like:
```
[main (root-commit) a1b2c3d] Initial commit: Astro portfolio with case studies
 15 files changed, 500 insertions(+)
```

### Step 3: Verify the Commit

```bash
git log
```

You should see your commit listed. Press `q` to exit.

---

## Part 4: Create a GitHub Repository (5 minutes)

Now you're ready to move your project to GitHub!

### Step 1: Create a New Repository on GitHub

1. Go to https://github.com/new
2. **Repository name:** `adrian-tan-portfolio` (or whatever you want)
3. **Description:** "My UX Design Portfolio built with Astro"
4. **Public** or **Private**: Choose Public (so employers can see it)
5. **Do NOT check** "Initialize this repository with a README" (you already have one)
6. Click "Create repository"

You'll see a page with instructions. Don't follow them yet - keep this page open.

### Step 2: Connect Your Local Repository to GitHub

Copy the commands from GitHub and run them in your Terminal. They'll look something like this:

```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/adrian-tan-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

**What this does:**
- `branch -M main` — ensures your main branch is called "main"
- `remote add origin` — tells Git where your GitHub repository is
- `push -u origin main` — sends your code to GitHub

### Step 3: Verify on GitHub

1. Refresh the GitHub page
2. You should see all your files appear! Your code is now on GitHub.

---

## Part 5: Making Updates (Going Forward)

Every time you make changes to your code, follow these 3 steps:

### Step 1: Check What Changed
```bash
git status
```

### Step 2: Stage Your Changes
```bash
git add .
```

### Step 3: Commit with a Message
```bash
git commit -m "Update case study text"
# or
git commit -m "Fix layout styling"
# or
git commit -m "Add new component"
```

**Good commit messages are:**
- Short and descriptive
- Start with what you changed (Update, Fix, Add, Remove, etc.)
- Written in present tense

### Step 4: Push to GitHub (Optional but Recommended)
```bash
git push
```

This sends your changes to GitHub. You can do this once a week or whenever you want a backup.

---

## Part 6: Deploy to GitHub Pages (10 minutes)

GitHub Pages lets you host your website for FREE on GitHub's servers.

### Step 1: Update Your Astro Config

Open `astro.config.mjs` and update it:

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  base: '/adrian-tan-portfolio',
  root: '.',
  outDir: './dist',
  publicDir: './public',
  markdown: {
    syntaxHighlight: false,
  },
});
```

Replace `YOUR-USERNAME` with your GitHub username.

**Note:** If you want your portfolio at the root of your domain (e.g., `yourdomain.github.io`), skip the `base` line. Otherwise, it will be at `yourdomain.github.io/adrian-tan-portfolio`.

### Step 2: Build Your Site for Production

```bash
npm run build
```

This creates a `dist/` folder with your website ready to deploy.

### Step 3: Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub
2. Click "Settings" (top right)
3. Click "Pages" (left sidebar)
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select "main" folder and choose `/root` (or `/docs` if you prefer)
6. Click "Save"

**Wait 1-2 minutes** for GitHub to deploy your site.

### Step 4: Visit Your Live Website

GitHub will show you your site URL. It should be something like:
```
https://YOUR-USERNAME.github.io/adrian-tan-portfolio
```

Click it! Your portfolio is now live! 🎉

---

## Part 7: Alternative: Deploy with Vercel (15 minutes)

Vercel is easier and faster than GitHub Pages. It's completely free.

### Step 1: Sign Up on Vercel

1. Go to https://vercel.com
2. Click "Sign Up"
3. Click "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Project

1. Click "Add New..." → "Project"
2. Find `adrian-tan-portfolio` in your repositories
3. Click "Import"
4. Leave settings as default
5. Click "Deploy"

**That's it!** Vercel automatically deployed your site. You'll get a URL like:
```
https://adrian-tan-portfolio.vercel.app
```

### Step 3: Automatic Deployments

Every time you push to GitHub, Vercel automatically redeploys your site. Just:

```bash
git add .
git commit -m "Update case study"
git push
```

Your site updates in ~1 minute. No manual steps needed!

### Step 4: Connect a Custom Domain (Optional)

If you have a domain (like `adriantan.xyz`):
1. In Vercel Dashboard, go to Settings → Domains
2. Add your domain
3. Follow the DNS instructions (varies by domain registrar)
4. Your site is now at your custom domain!

---

## Part 8: Troubleshooting

### Problem: "Permission denied (publickey)"

**Solution:**
You need to set up SSH keys. Run:
```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```
Press Enter 3 times (accept defaults).

Then add the key to GitHub:
1. Go to GitHub Settings → SSH and GPG keys
2. Click "New SSH key"
3. Run this to copy your key:
   ```bash
   # Mac/Linux:
   cat ~/.ssh/id_ed25519.pub

   # Windows (Git Bash):
   cat ~/.ssh/id_ed25519.pub
   ```
4. Paste it into GitHub
5. Try pushing again

### Problem: "fatal: not a git repository"

**Solution:**
You're not in the right folder. Run:
```bash
cd /path/to/your/adrian-tan-portfolio
```

Then check:
```bash
git status
```

### Problem: "fatal: could not read Username"

**Solution:**
Use SSH instead of HTTPS. When creating your repository on GitHub, make sure you copy the SSH URL (starts with `git@github.com`), not the HTTPS URL.

### Problem: Site not updating after pushing

**For GitHub Pages:**
- Wait 2-5 minutes
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

**For Vercel:**
- Check your Vercel dashboard to see if deployment succeeded
- Look at the deployment logs for errors

---

## Part 9: Regular Workflow (Going Forward)

Once set up, here's your regular workflow:

### When You Make Changes

```bash
# 1. Check what changed
git status

# 2. Add changes
git add .

# 3. Commit with a message
git commit -m "Update case study content"

# 4. Push to GitHub
git push
```

That's it! Your site auto-deploys.

### Commit Message Examples

Good examples:
- `git commit -m "Add Wash Tracking case study"`
- `git commit -m "Fix layout spacing on mobile"`
- `git commit -m "Update contact information"`
- `git commit -m "Improve typography hierarchy"`

---

## Part 10: Next Steps

Once your site is live:

### Share Your Portfolio
- LinkedIn: Add your portfolio URL to your profile
- Email: Include it in email signatures
- Resume: Add the link prominently
- Twitter/Twitter X: Share it with your network

### Continue Building
- Add more case studies
- Improve the design
- Add interactive features
- Write blog posts about your design process

### Monitor Traffic (Optional)
- For Vercel: Built-in analytics (free)
- For GitHub Pages: Use Google Analytics

---

## Quick Reference: Common Commands

```bash
# Check repository status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Send to GitHub
git push

# View commit history
git log

# See what changed in last commit
git show

# Undo last commit (if you messed up)
git reset --soft HEAD~1

# Clone someone else's repository
git clone https://github.com/username/repo.git
```

---

## You Did It! 🎉

You now have:
- ✅ Git installed and configured
- ✅ Your project on GitHub
- ✅ Your portfolio website live on the internet
- ✅ Automatic deployments working

**Next time you update your portfolio:**
```bash
git add .
git commit -m "Your update"
git push
```

That's all you need. The site updates automatically!

---

**Questions or stuck?** Check the troubleshooting section above, or search "GitHub [your error]" on Google. 99% of beginner issues have solutions online.

Good luck! 🚀
