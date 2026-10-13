# Virhino SmartQR

> **Scan Smarter. Create Better.**  
> Powered by **Virhino** ([www.virhino.com](https://www.virhino.com))  
> Founder: **Vignesh G**  
> Live Platform: [https://virhino-smartqr.vercel.app/](https://virhino-smartqr.vercel.app/)

A premium, production-grade, privacy-first QR generation suite built to deliver high-resolution, branded barcodes with zero paywalls and automated real-time optical scan verification.

---

## 🌟 Key Features

- **⚡ Real-Time QR Studio (`/create`)**:
  - Two-column responsive workspace with live preview, preset selector, and customize tabs.
  - Center logo upload with automatic safe white contrast badge padding.
  - Signature violet-to-blue gradients (`#7047FF` to `#3563FF`).
  - Dot module patterns (rounded, dots, squircle, classy, square).
  - Corner outer & inner style customization.
  - "SCAN ME" bottom pill and polaroid call-to-action captions.
- **🛡️ Real-Time Optical Camera Scan Verification**:
  - Genuine client-side barcode decoding using `jsQR`.
  - Simulates camera acquisition before you download.
  - Warns on low contrast or excessive logo coverage with auto-fix optimization.
- **🔒 100% Client-Side Privacy**:
  - No server uploads. Destination URLs and uploaded images are processed locally in browser memory via HTML5 Canvas and FileReader.
  - No accounts, no subscriptions, no tracking cookies.
  - Permanent static barcodes that never expire or route through redirect servers.
- **🖨️ Production-Ready Exports**:
  - **PNG Web (1000px)**: Instant web and digital asset export.
  - **Print Master (2400px • 300 DPI)**: Razor-sharp physical print quality for business cards, flyers, and table tents.
  - **Vector SVG**: Infinite resolution scalable vector graphic for Illustrator, Figma, and commercial print shops.
  - **Copy Image**: One-click direct clipboard copy for instant pasting.
- **📱 Phone Simulator View**:
  - Proportional smartphone pass simulator for testing visual impact on mobile devices.

---

## 🧭 Page Architecture & Routing

The application is structured into clean, dedicated routes:

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | Concise marketing landing page with hero, benefit pillars, and feature overview |
| `/create` | **QR Studio** | Primary functional generation suite and live preview workspace |
| `/about` | **About** | Virhino mission, product story, and verified profile of founder Vignesh G |
| `/privacy` | **Privacy Policy** | Authoritative breakdown of zero-knowledge, client-side data handling |
| `/help` | **Help & Guide** | 3-step walkthrough, logo safety rules, physical print sizing chart, and checklist |

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Routing**: React Router (`react-router-dom`) + `vercel.json` SPA rewrite
- **Styling**: Tailwind CSS + Curated Virhino Design System (`#7047FF`, `#3563FF`, `#111827`, `#F7F8FC`)
- **QR Generation Engine**: `qr-code-styling`
- **Optical Scanner Verification**: `jsQR`
- **Icons**: `lucide-react`
- **Linting & Code Quality**: `oxlint`

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server
npm run dev

# 3. Build production bundle
npm run build

# 4. Run lint check
npm run lint
```

---

## 🌐 Deployment (Vercel)

The repository includes a root `vercel.json` configured with SPA rewrites to ensure direct URL navigation and page refreshes work smoothly:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 👨‍💻 Founder & Leadership

- **Founder**: **Vignesh G**
- **Company**: **Virhino** ([www.virhino.com](https://www.virhino.com))
- **LinkedIn**: [linkedin.com/in/vignesh220904/](https://www.linkedin.com/in/vignesh220904/)
- **Instagram**: [instagram.com/mass._.vignesh](https://www.instagram.com/mass._.vignesh)
- **X (Twitter)**: [x.com/Vignesh_22904](https://x.com/Vignesh_22904)

---

## 📄 License

MIT License. 100% Free and Open Source. Powered by Virhino.
