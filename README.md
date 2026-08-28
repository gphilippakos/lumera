# Luméra Skin Studio — Website

Luxury aesthetician business website for **Luméra Skin Studio**.

Built with **Next.js 14 (App Router + TypeScript)**, **Tailwind CSS**, **Cal.com** scheduling, and **Resend** for contact forms. Deploys to **Vercel** on every push to `main`.

---

## ✨ Features

- 🎨 Full luxury minimalist design — Warm Ivory palette, Cormorant Garamond + DM Sans typography
- 📅 **Cal.com scheduling embed** — clients book without leaving the page
- ✉️ **Serverless contact form** via Resend API
- 🖼 **Before/After comparison sliders** — drag to compare, works on touch
- 📸 Free stock imagery via Unsplash CDN (no API key needed)
- 🏷 Inline SVG logo — no external asset files
- 📱 Mobile-first responsive design
- ⚡ Optimized for Google PageSpeed 85+
- 🔍 SEO: metadata, JSON-LD LocalBusiness schema, sitemap, robots.txt
- ♿ WCAG 2.1 AA accessible
- 📊 Vercel Analytics + Google Analytics 4

---

## 🚀 Quick Start (Local Dev)

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/lumera-skin-studio.git
cd lumera-skin-studio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local — add your Cal.com URL and Resend API key (minimum required)

# 4. Run the dev server
npm run dev
# Opens at http://localhost:3000
```

---

## 🌐 Deploy to Vercel

**One-time setup:**

1. Push this repo to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Luméra Skin Studio"
   git remote add origin https://github.com/YOUR_USERNAME/lumera-skin-studio.git
   git push -u origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new) → **Import Git Repository**

3. Select your `lumera-skin-studio` repo → Vercel auto-detects Next.js

4. Add **Environment Variables** (Settings → Environment Variables):

   | Variable | Value |
   |---|---|
   | `NEXT_PUBLIC_CAL_URL` | Your Cal.com embed URL |
   | `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` (optional) |
   | `RESEND_API_KEY` | Your Resend API key |
   | `CONTACT_FORM_TO` | hello@lumeraskinstudio.com |
   | `NEXT_PUBLIC_MAPS_KEY` | Google Maps key (optional) |

5. Click **Deploy** → live in ~90 seconds ✅

**Ongoing updates:**
```bash
git add . && git commit -m "your change" && git push
# Vercel auto-redeploys within ~60 seconds
```

---

## 📁 Project Structure

```
/
├── app/
│   ├── layout.tsx          ← Root layout, fonts, metadata, GA4
│   ├── page.tsx            ← Homepage (all sections)
│   ├── globals.css         ← Tailwind + CSS token variables
│   ├── privacy/page.tsx    ← Privacy Policy page
│   ├── cancellation/page.tsx ← Cancellation Policy page
│   └── api/contact/route.ts ← Serverless contact form (Resend)
├── components/
│   ├── Logo.tsx            ← Inline SVG wordmark (dark + light)
│   ├── AnnouncementBar.tsx ← Dismissible gold top bar
│   ├── Navbar.tsx          ← Sticky nav + mobile slide menu
│   ├── Hero.tsx            ← Full-bleed hero + CTAs
│   ├── About.tsx           ← Brand story + credentials
│   ├── Services.tsx        ← Tabbed service card grid
│   ├── Booking.tsx         ← Cal.com iframe embed
│   ├── BeforeAfter.tsx     ← Drag comparison sliders
│   ├── Testimonials.tsx    ← Review cards
│   ├── Aesthetician.tsx    ← Meet the practitioner
│   ├── InstagramGrid.tsx   ← 3×3 photo grid
│   ├── Contact.tsx         ← Form + hours + map
│   └── Footer.tsx          ← Links + social + copyright
├── lib/
│   └── services.ts         ← Services data (edit here)
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── .env.local.example      ← Required env vars template
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🎨 Customization Guide

### Update your services
Edit `lib/services.ts` — all service cards, categories, names, prices, and descriptions live here.

### Change the color palette
Edit `tailwind.config.ts` and `app/globals.css` `:root` block — update the CSS variables.

### Update the Cal.com booking URL
Set `NEXT_PUBLIC_CAL_URL` in Vercel environment variables to your Cal.com embed URL.
Get it from: **Cal.com Dashboard → Event Types → Select event → Embed → Inline embed → Copy URL**

### Replace stock images
Swap any Unsplash URL in the component files with your own photos.
All images use `next/image` — just update the `src` prop.

### Update business info
- Address, phone, hours: `components/Contact.tsx`
- Email: `components/Contact.tsx` + `app/api/contact/route.ts`
- Instagram handle: `components/InstagramGrid.tsx` + `components/Footer.tsx`
- Aesthetician bio + name: `components/Aesthetician.tsx`

### Add your own logo
Replace the SVG in `components/Logo.tsx` with your actual logo, or adjust the SVG text elements to match your brand.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, TypeScript) |
| Styling | Tailwind CSS v3 |
| Fonts | Cormorant Garamond + DM Sans (next/font) |
| Scheduling | Cal.com (iframe embed) |
| Contact form | Resend (serverless API route) |
| Analytics | Vercel Analytics + Google Analytics 4 |
| Images | next/image + Unsplash CDN |
| Deployment | Vercel |

---

## 🔧 21st.dev Components

This project is structured to accept drop-in components from [21st.dev](https://21st.dev).

To upgrade any section with a 21st.dev component:
1. Visit [21st.dev](https://21st.dev) and search for the component type
2. Click **Copy Prompt**
3. Paste into Claude Code, Cursor, or your AI agent
4. It self-installs and adapts to your Tailwind config

**Recommended 21st.dev upgrades:**
- [Hero sections](https://21st.dev/community/components/s/hero) — animated hero variants
- [Testimonials](https://21st.dev/community/components/s/testimonial) — marquee scrollers
- [Navigation](https://21st.dev/community/components/s/navigation) — mega-menu or glassmorphism nav
- [Cards](https://21st.dev/community/components/s/card) — premium service card layouts

---

## 📋 Environment Variables Reference

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_CAL_URL` | ✅ Yes | Cal.com embed URL for booking widget |
| `RESEND_API_KEY` | ✅ Yes | Resend API key for contact form emails |
| `CONTACT_FORM_TO` | ✅ Yes | Email address to receive inquiries |
| `NEXT_PUBLIC_GA_ID` | Optional | Google Analytics 4 measurement ID |
| `NEXT_PUBLIC_MAPS_KEY` | Optional | Google Maps Embed API key |

---

## 📄 License

© Luméra Skin Studio. All rights reserved.
