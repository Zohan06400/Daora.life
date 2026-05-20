# Daora Website

Marketing and legal website for the Daora iOS app.

## Pages

| Route | Purpose | App Store Connect field |
|---|---|---|
| `/` | Marketing / landing page | Marketing URL |
| `/support` | Help & FAQ | Support URL |
| `/privacy` | Privacy Policy | Privacy Policy URL |
| `/terms` | Terms of Use | Terms of Use URL |
| `/contact` | Contact page | — |
| `/press` | Press Kit | — |

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Fill in placeholders

Search the source files for these tags and replace with real values before going live:

| Placeholder | Description |
|---|---|
| `[ADD SUPPORT EMAIL HERE]` | App support email address |
| `[ADD BUSINESS EMAIL HERE]` | Business / press email |
| `[ADD LEGAL NAME OR COMPANY NAME]` | Your legal entity name |
| `[ADD CONTACT EMAIL]` | Email for privacy/legal contact |
| `[ADD DATE]` | Effective date for Privacy Policy and Terms |
| `[ADD THIRD-PARTY SERVICES IF ANY]` | e.g. Firebase, Sentry, RevenueCat |

Files to update:

- `src/pages/Privacy.jsx`
- `src/pages/Terms.jsx`
- `src/pages/Support.jsx`
- `src/pages/Contact.jsx`
- `src/pages/Press.jsx`

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### 4. Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

## Deploy to Vercel

### Option A — Vercel CLI (recommended)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite and sets `npm run build` + `dist/` as output.

### Option B — Vercel Dashboard (no CLI)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the repository.
4. Framework preset: **Vite**
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**.

Vercel redeploys automatically on every push to the main branch.

### SPA routing

`vercel.json` is included and already configured to redirect all paths to `index.html`,
so React Router routes like `/support` and `/privacy` work correctly as direct URLs.

## App Store Connect URLs

Once deployed, copy these URLs into App Store Connect:

| Field | URL |
|---|---|
| Marketing URL | `https://your-domain.com` |
| Support URL | `https://your-domain.com/support` |
| Privacy Policy URL | `https://your-domain.com/privacy` |

> Replace `your-domain.com` with your actual Vercel domain or custom domain.

## Custom domain (optional)

In the Vercel dashboard → Project → Settings → Domains — add your custom domain
and follow the DNS instructions.
