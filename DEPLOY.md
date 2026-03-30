# BookRunner — Deploy to Vercel

## Quick Deploy (3 minutes)

### Step 1: Push to GitHub
Open Terminal, navigate to this folder, and run:

```bash
cd "path/to/this/bookrunner-site"
npm install
git init
git add -A
git commit -m "BookRunner initial site"
gh repo create bookrunner --public --source=. --push
```

Or create a repo manually at github.com/new, then:
```bash
git remote add origin https://github.com/YOUR_USERNAME/bookrunner.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com/new
2. Import your `bookrunner` GitHub repo
3. Framework: Next.js (auto-detected)
4. Click Deploy

That's it — your site will be live at `bookrunner.vercel.app`

### Step 3 (Optional): Custom Domain
In Vercel dashboard → Settings → Domains → Add `bookrunner.com` or your preferred domain.
