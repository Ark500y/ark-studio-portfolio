# ARK STUDIO — Editorial Portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FArk500y%2Fark-studio-portfolio&project-name=ark-studio-portfolio&framework=nextjs)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Ark500y/ark-studio-portfolio)

Bespoke, cinematic, dark editorial portfolio for **Abdulrehman Khalid** (`ARK STUDIO`), Web Designer & Digital Creator based in Sargodha, Pakistan, serving clients worldwide (Saudi Arabia, UAE, and Pakistan).

---

## Tech Architecture & Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Pure CSS Modules (Zero Tailwind, Zero runtime CSS bloat)
- **Typography Tokens**:
  - `Anton` (Display Headlines & Error Codes)
  - `Inter` (Neutral Editorial Body Copy)
  - `Caveat` (Handwritten Accents & Attributions)
- **Design Palette**: `#050505` (Deep Dark Background), `#E50920` (Vivid Crimson), `#780B16` (Deep Red Glow), `#A0A0A0` (Muted), `#252525` (Thin Editorial Dividers)

---

## Key Features

- **Cinematic Hero**: Overlapping portrait depth composition, red rim lighting, Anton display typography, verified metrics (5 live projects, 3 countries served, EN/AR bilingual builds).
- **Selected Projects Gallery & Archive**:
  - 12-column responsive layout (3-column top row, 2-column wide base row).
  - Dedicated full archive route at [`/projects`](/projects).
  - Real screenshots and live links to production systems.
- **About, Skills & 5-Step Process**:
  - 14 compact outlined skill pills.
  - Numbered workflow spine with minimal line icons.
  - Crimson quote panel with curated handwriting accent.
- **Inquiry & Direct Channels**:
  - WhatsApp instant chat ([`03141495630`](https://wa.me/923141495630)).
  - Direct email with dynamic **Copy Email** clipboard feedback ([`ark203777@gmail.com`](mailto:ark203777@gmail.com)).
  - Project inquiry form with client validation and anti-spam honeypot filter.
- **Custom Error & Feedback Engine**:
  - Dedicated **404 Not Found** (`app/not-found.tsx`) with real HTTP 404 status.
  - Route **500 Error Boundary** (`app/error.tsx`) with recovery `reset()` action.
  - Self-contained **Global Root Error** (`app/global-error.tsx`) with system font fallbacks.
  - Minimalist on-brand **Loading state** (`app/loading.tsx`).

---

## Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/Ark500y/ark-studio-portfolio.git

# Enter project directory
cd ark-studio-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the live site in your browser.

---

## Production Build & Static Prerendering

```bash
# Compile and optimize production build
npm run build

# Start production server
npm run start
```

---

## Environment Variables (Optional)

Create a `.env.local` file in the root directory to customize external services:

```env
# Production domain for canonical SEO and sitemap.xml
NEXT_PUBLIC_SITE_URL="https://arkstudio.design"

# Form backend endpoint (e.g. Formspree / Basin / Formkeep)
# If omitted, form inquiries fall back to opening a pre-filled mailto draft.
NEXT_PUBLIC_FORM_ENDPOINT="https://formspree.io/f/your_form_id"
```

---

## Author & Brand

- **Creator**: Abdulrehman Khalid
- **Brand**: ARK STUDIO
- **WhatsApp**: [+92 314 1495630](https://wa.me/923141495630)
- **Email**: [ark203777@gmail.com](mailto:ark203777@gmail.com)
- **GitHub**: [@Ark500y](https://github.com/Ark500y)
