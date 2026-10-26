# RedKross Cybersecurity Subdomain Website

Official technical and applied research web platform of **RedKross Research Foundation**.

- **Primary Canonical Domain:** `https://cyber.redkross.org.in`
- **Alternate Domain:** `https://cybersecurity.redkross.org.in`
- **Parent Foundation Portal:** `https://redkross.org.in`
- **Psychology Subdomain Portal:** `https://psychology.redkross.org.in`

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Runs locally at `http://localhost:5174/`.

### Production Build
```bash
npm run build
```
Generates production-ready, minified static artifacts into `dist/`.

---

## 🗺️ Information Architecture & Route Map

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | `HomePage` | Executive introduction, 6 focus tracks, verified projects, 5-step research lifecycle, college CTA. |
| `/about` | `AboutCyberPage` | Institutional scope, Section 8 relationship to parent, active vs planned boundary. |
| `/research` | `ResearchPage` | Research methodology (threat modeling, sandboxing, limitation auditing). |
| `/research/:focusArea` | `FocusAreaPage` | Detailed dossiers for AI Security, Defensive Engineering, Forensics, Threat Intel, Cloud/IoT, Human-Centred Security. |
| `/projects` | `ProjectsDirectoryPage` | Verified project directory with maturity status filters. |
| `/projects/:slug` | `ProjectDetailPage` | Full project specification: problem, purpose, architecture, evaluation, limitations, and repo links. |
| `/labs` | `LabsPage` | Virtualization facilities, detection ranges, and strict air-gap access policies. |
| `/academy` | `AcademyPage` | Curriculum tracks, transparent non-accredited status, interest registration. |
| `/college-partnerships` | `CollegePartnershipsPage` | Workshop formats, 5 delivery stages, functional institutional enquiry form. |
| `/opportunities` | `OpportunitiesPage` | Open research roles with supervisor, tasks, hours, and application workflows. |
| `/resources` | `ResourcesPage` | Open technical guides and operational checklists. |
| `/publications` | `PublicationsPage` | Status of pre-prints and peer-reviewed technical specifications in preparation. |
| `/responsible-disclosure` | `ResponsibleDisclosurePage` | Coordinated vulnerability disclosure guidelines, handling timeline, channel `security@redkross.org.in`. |
| `/trust` | `TrustPage` | Governance, data minimization, and links to canonical parent policies. |
| `/contact` | `ContactPage` | Direct routing channels: Partnerships, Disclosure, Voice Line, Headquarters. |

---

## 🔒 Security & Deployment Headers

Vercel production headers configured in `vercel.json`:
- `X-Frame-Options: DENY` (Anti-Clickjacking)
- `X-Content-Type-Options: nosniff` (MIME sniffing prevention)
- `Content-Security-Policy`: Self-isolated scripts, google fonts, frame-ancestors none
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()`

---

## 📋 Developer Handover Checklist
- [x] Independent project directory with dedicated `package.json` and build scripts.
- [x] Zero NPM vulnerabilities reported by `npm audit`.
- [x] 100% adherence to `RedKross_Cybersecurity_Subdomain_Full_Specification.pdf`.
- [x] Seamless cross-subdomain bidirectional links to `redkross.org.in` and `psychology.redkross.org.in`.
- [x] Fully responsive across mobile, tablet, and desktop viewports.
