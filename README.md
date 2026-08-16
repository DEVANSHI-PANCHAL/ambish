# Ambish Engineering — Official Corporate & Machinery Portal

A high-performance Next.js web application for **Ambish Engineering**, a premier construction machinery manufacturer in Ahmedabad, Gujarat (Est. 1976).

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally (Development)
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Production Build & Verification

To build and test the optimized production bundle:

```bash
# 1. Generate optimized production bundle
npm run build

# 2. Start production server
npm run start
```

---

## 🌐 Deployment Options

### Option A: Vercel (Recommended)
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Import the project in [Vercel](https://vercel.com).
3. Framework Preset: **Next.js** (automatically detected).
4. Click **Deploy**.

### Option B: Netlify
1. Connect your repository to [Netlify](https://netlify.com).
2. Build Command: `npm run build`
3. Publish Directory: `.next` (using `@netlify/plugin-nextjs`).

### Option C: Self-Hosted Node.js Server / VPS
1. Clone the repository and install dependencies: `npm ci --production=false`
2. Build the project: `npm run build`
3. Run with PM2 or systemd:
```bash
npm install -g pm2
pm2 start npm --name "ambish-engineering" -- start
```

---

## 🛠️ Tech Stack & Features
- **Framework**: Next.js 14 (App Router) + React 18
- **Styling**: Tailwind CSS + Custom Design System
- **Motion & 3D**: Motion (Framer Motion) + Three.js / React Three Fiber
- **SEO & Performance**: 
  - Complete Schema.org JSON-LD structured data (LocalBusiness & OfferCatalog)
  - OpenGraph & Twitter Cards
  - Automated `sitemap.xml` and `robots.txt`
  - Inline Zero-Delay Instant CSS/SVG Loading Screen
  - Optimized Next.js image caching (AVIF/WebP)