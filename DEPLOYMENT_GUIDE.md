# Deployment Guide for Blend and Co

## ✅ GitHub Repository
Your code is now available at: https://github.com/Nerayyyy/CoffeeShop.git

---

## 🚀 Deploy to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit [https://vercel.com](https://vercel.com)
   - Sign up or log in with your GitHub account

2. **Import Your Repository**
   - Click "Add New Project" or "Import Project"
   - Select "Import Git Repository"
   - Choose your GitHub account and find `CoffeeShop` repository
   - Click "Import"

3. **Configure Your Project**
   - **Framework Preset**: Select "Create React App"
   - **Root Directory**: Leave as `./` (root)
   - **Build Command**: `npm run build` (should be auto-detected)
   - **Output Directory**: `build` (should be auto-detected)
   - **Install Command**: `npm install` (should be auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-3 minutes)
   - Once done, you'll get a live URL like `https://coffee-shop-xxxxx.vercel.app`

5. **Custom Domain (Optional)**
   - Go to your project settings
   - Navigate to "Domains"
   - Add your custom domain if you have one

---

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Confirm the settings
   - Your site will be deployed!

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

---

## 📦 Environment Variables (if needed later)

If you need to add environment variables:

1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add your variables (e.g., API keys, URLs)
4. Redeploy your project

---

## 🔄 Automatic Deployments

Vercel automatically deploys your site whenever you:
- Push to the `main` branch (production)
- Create a pull request (preview deployment)

---

## 📝 Important Notes

- Make sure your `package.json` has the correct build script:
  ```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
  ```

- The `vercel.json` file is configured to handle React Router properly
- All routes will be handled by the React app for client-side routing

---

## 🐛 Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Make sure there are no console errors locally

### 404 Errors on Routes
- The `vercel.json` configuration should handle this
- Make sure all routes redirect to `index.html`

### Missing Dependencies
- Run `npm install` locally to ensure all packages are installed
- Commit your `package-lock.json` file

---

## 🎉 Next Steps

After deployment:
1. Test all routes on your live site
2. Set up a custom domain (optional)
3. Configure analytics (optional)
4. Set up continuous integration (optional)

Your site should be live at: `https://your-project-name.vercel.app`

Enjoy your deployed Blend and Co Coffee Shop website! ☕

