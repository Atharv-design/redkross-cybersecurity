# 🛡️ RedKross Cybersecurity Wing — Defensive Systems & Applied Threat Research

[![Subdomain](https://img.shields.io/badge/Subdomain-cyber.redkross.org.in-00F0FF?style=for-the-badge&logo=shield)](https://cyber.redkross.org.in)
[![Vite](https://img.shields.io/badge/Vite-6.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0+-EA4C89?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Security Headers](https://img.shields.io/badge/Security-A%2B%20Vercel%20Headers-green?style=for-the-badge)](https://securityheaders.com)

> **Official technical and applied research web platform of the RedKross Cybersecurity Wing** — a specialized division of RedKross Research Foundation dedicated to applied threat intelligence, defensive systems hardening, adversarial AI evaluation, and grassroots digital safety.

- **Primary Canonical Domain:** [https://cyber.redkross.org.in](https://cyber.redkross.org.in)
- **Alternate Domain:** [https://cybersecurity.redkross.org.in](https://cybersecurity.redkross.org.in)
- **Parent Foundation Portal:** [https://redkross.org.in](https://redkross.org.in)
- **Psychology Subdomain Portal:** [https://psychology.redkross.org.in](https://psychology.redkross.org.in)

---

## 🎯 Institutional Mission & Scope

The RedKross Cybersecurity Wing operates as a non-commercial, ethics-first applied research initiative. Our work sits at the intersection of:
1. **Defensive Engineering:** Building verifiable security tooling, automated telemetry pipelines, and memory-safe infrastructure components.
2. **Applied Threat Modeling:** Analyzing real-world attack vectors against critical Indian infrastructure, micro-SMEs, and academia.
3. **Capacity Building:** Delivering non-commercial technical training, cyber forensics workshops, and responsible vulnerability disclosure mentorship.

---

## 🔬 Core Research Focus Areas

| Focus Track | Operational Scope | Key Methodologies & Tooling |
| :--- | :--- | :--- |
| **🤖 AI & Machine Learning Security** | Model inversion, prompt injection, training set poisoning, and adversarial evasion attacks. | PyTorch, ART (Adversarial Robustness Toolbox), LLM red-teaming harnesses. |
| **🛡️ Defensive Systems Engineering** | Host-level hardening, zero-trust architectures, and eBPF-based kernel observability. | Rust, eBPF, Cilium, Wazuh, Linux kernel security modules. |
| **🔍 Digital Forensics & IR (DFIR)** | Memory acquisition, filesystem timeline reconstruction, and malware reverse engineering. | Volatility 3, Ghidra, Autopsy, YARA rulesets, Wireshark. |
| **🌐 Threat Intelligence & Adversary Tracking** | Tracking APT campaigns targeting South Asian cyberspace and regional threat actor attribution. | MISP, OpenCTI, MITRE ATT&CK mapping, STIX/TAXII. |
| **☁️ Cloud & Critical Infrastructure (IoT)** | Microservice posture management, Kubernetes RBAC audits, and SCADA/ICS telemetry inspection. | Falco, Trivy, OpenSCAP, Modbus/DNP3 testbeds. |
| **👥 Human-Centred Security & Hygiene** | Social engineering resistance, organizational psychological triggers, and bilingual digital literacy. | Cognitive vulnerability modeling, open community toolkits. |

---

## 🧪 Virtualized Labs & Air-Gap Facilities

Our research methodology mandates strict containment and reproducible benchmarking:
- **Sandbox Detonation Chambers:** Ephemeral, micro-segmented virtual environments for dynamic malware execution.
- **Air-Gapped Simulation Ranges:** Isolated network topologies simulating multi-tier enterprise active directories, industrial OT environments, and edge IoT meshes.
- **Limitation Auditing:** Every published tool and whitepaper undergoes mandatory boundary auditing to document edge-case failures and operational bounds.

---

## 🗺️ Complete Information Architecture & Routes

| Route | View Component | Description |
| :--- | :--- | :--- |
| `/` | `HomePage` | Strategic mission summary, 6 focus tracks, verified projects, research lifecycle, and college outreach. |
| `/about` | `AboutCyberPage` | Governance structure, Section 8 relationship to parent, active research vs. planned roadmaps. |
| `/research` | `ResearchPage` | Detailed scientific methodology: threat modeling, hypothesis formulation, sandboxed experimentation. |
| `/research/:focusArea` | `FocusAreaPage` | Granular deep-dive dossiers for each of the 6 specialized security tracks. |
| `/projects` | `ProjectsDirectoryPage` | Interactive directory of open-source security tools with maturity status filters. |
| `/projects/:slug` | `ProjectDetailPage` | Comprehensive project breakdown: problem statement, system architecture, telemetry, limitations, and code. |
| `/labs` | `LabsPage` | Virtualization facilities, detection ranges, and strict air-gap governance protocols. |
| `/academy` | `AcademyPage` | Transparent non-accredited curriculum tracks, open syllabi, and interest registration. |
| `/college-partnerships` | `CollegePartnershipsPage` | 5-stage workshop delivery model, syllabus breakdown, and institutional MOU enquiry desk. |
| `/opportunities` | `OpportunitiesPage` | Open research fellowships with supervisor allocation, hours, prerequisites, and intake workflow. |
| `/resources` | `ResourcesPage` | Open-source defensive playbooks, hardening checklists, and compliance cheatsheets. |
| `/publications` | `PublicationsPage` | Status of pre-prints, whitepapers, and peer-reviewed technical specifications in preparation. |
| `/responsible-disclosure` | `ResponsibleDisclosurePage` | Coordinated Vulnerability Disclosure (CVD) framework, PGP encryption keys, and resolution timelines. |
| `/trust` | `TrustPage` | Data minimization protocols, telemetry disclosures, and canonical governance links. |
| `/contact` | `ContactPage` | Direct communication routing: Institutional Partnerships, Vulnerability Desk, and Emergency Hotline. |

---

## 🎓 Academic Partnerships (5-Stage Delivery Pipeline)

We partner with colleges, universities, and technical institutes to bridge the industry-academia cybersecurity gap:
1. **Institutional Alignment:** Scoping syllabus alignment and compute requirements.
2. **Curriculum Customization:** Tailoring hands-on labs (DFIR, Threat Hunting, Network Hardening).
3. **Execution & Detonation Drills:** Live workshop delivery inside controlled cloud lab ranges.
4. **Capstone Mentorship:** Guiding students through open-source security tool development.
5. **Research Incubation:** Onboarding top performers into funded research fellowship tracks.

---

## 🔒 Security Architecture & Deployment Guardrails

The platform is hardened in `vercel.json` with strict security response headers:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=(), payment=()" },
        { "key": "Content-Security-Policy", "value": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;" }
      ]
    }
  ]
}
```

---

## 🛠️ Local Development & Quickstart

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

```bash
# Clone repository
git clone https://github.com/Atharv-design/redkross-cybersecurity.git
cd redkross-cybersecurity

# Install packages
npm install

# Run development server
npm run dev
# Live at http://localhost:5174

# Production Build
npm run build
```

---

## 🛡️ Coordinated Vulnerability Disclosure (CVD)

If you discover a security vulnerability in RedKross systems or affiliated software:
- **Email:** `security@redkross.org.in`
- **PGP Key:** Available at `/responsible-disclosure`
- **Policy:** We commit to acknowledging receipt within 48 hours and providing a remediation timeline before public coordination.

© 2026 RedKross Cybersecurity Wing. All rights reserved.
