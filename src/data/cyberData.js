// Authoritative Data Store for RedKross Cybersecurity Subdomain
// Strictly extracted and structured from:
// "RedKross_Cybersecurity_Subdomain_Full_Specification.pdf"

import { getEcosystemUrl } from '../utils/ecosystemLinks';

export const CYBER_DATA = {
  // 1. Identity & Cross-Domain Routing (Section 1 & 5)
  identity: {
    name: "RedKross Cybersecurity",
    fullName: "RedKross Research Foundation — Cybersecurity Division",
    subdomainLabel: "cyber.redkross.org.in",
    tagline: "Cybersecurity Research. Practical Learning. Safer Digital Systems.",
    shortDesc: "We explore cybersecurity challenges through applied research, carefully scoped technical projects and accessible learning.",
    parentOrg: {
      name: "RedKross Research Foundation",
      get url() { return getEcosystemUrl('main'); },
      canonicalUrl: "https://redkross.org.in",
      legalStatus: "Section 8 Registered Non-Profit Research Organisation",
      cin: "U85499HR2026NPL144741"
    },
    subdomain: {
      get primary() { return getEcosystemUrl('cyber'); },
      canonicalPrimary: "https://cyber.redkross.org.in",
      alternate: "https://cybersecurity.redkross.org.in"
    },
    get psychologyDomain() { return getEcosystemUrl('psychology'); },
    canonicalPsychologyDomain: "https://psychology.redkross.org.in",
    contacts: {
      general: "contact@redkross.org.in",
      disclosure: "security@redkross.org.in",
      phone: "+91 73032 63719",
      address: "11219 Mahadev Colony, near Samsan Road / Saini Chakki, Panipat, Haryana 132103, India"
    }
  },

  // 2. How We Work — 5-Step Scientific Research Loop (Section 3 & 4.2)
  howWeWork: [
    {
      step: "01",
      title: "Research Question",
      description: "Define an evidence-backed security problem, intended user, and explicit threat model before touching code.",
      deliverable: "Hypothesis brief & threat boundary charter"
    },
    {
      step: "02",
      title: "Safe Lab & Synthetic Dataset",
      description: "Build an isolated, disposable sandbox with strict default-deny egress controls and synthetic test data.",
      deliverable: "Air-gapped lab telemetry & synthetic test corpora"
    },
    {
      step: "03",
      title: "Empirical Evaluation",
      description: "Stress-test defensive mechanisms and prototypes through reproducible, peer-reviewed evaluation rubrics.",
      deliverable: "Formal test matrix & uncertainty register"
    },
    {
      step: "04",
      title: "Artifact Documentation",
      description: "Package architecture decision records (ADRs), installation guides, rollback steps, and clear limitation boundaries.",
      deliverable: "Clean public documentation & architectural blueprints"
    },
    {
      step: "05",
      title: "Responsible Sharing",
      description: "Publish findings responsibly under coordinated disclosure protocols, contributing useful tools back to the community.",
      deliverable: "Open-source releases & community technical briefs"
    }
  ],

  // 3. The 6 Focus Areas (Section 2, 3, 4.3 - 4.8)
  focusAreas: [
    {
      id: "ai-security",
      title: "AI & Model Security",
      badge: "Active Focus",
      icon: "Cpu",
      summary: "Investigating LLM prompt injections, data extraction vulnerabilities, and defensive inference guardrails.",
      researchQuestion: "How can language models and autonomous AI pipelines be hardened against adversarial prompt injections and indirect context pollution without degrading utility?",
      scope: "Large Language Model application security, retrieval-augmented generation (RAG) poisoning, parameter isolation, and automated guardrail evaluation.",
      methodology: "Controlled white-box and black-box prompt evaluation, adversarial perturbation testing, and semantic boundary benchmarking.",
      defensiveGuidance: "Implementation of strict multi-stage input sanitisation, out-of-band context validation, and deterministic output schema validation.",
      statusNote: "Active prototype testing on DeepScan AI; preliminary defensive benchmarks published in technical notes."
    },
    {
      id: "defensive-security",
      title: "Defensive Security & Detection",
      badge: "Active Focus",
      icon: "ShieldAlert",
      summary: "Designing telemetry pipelines, detection engineering rules, and automated incident response workflows.",
      researchQuestion: "How can small-to-midsize institutional networks maintain high-fidelity threat detection without costly proprietary SIEM platforms?",
      scope: "Linux kernel auditing, eBPF telemetry hooks, Sigma rule development, and lightweight log pipeline aggregation.",
      methodology: "Adversarial emulation in controlled sandboxes, log delta analysis, and false-positive suppression testing.",
      defensiveGuidance: "Prioritise endpoint behaviour logging, command-line argument auditing, and automated network containment scripts.",
      statusNote: "Detection rule repository in development; core logging standards evaluated across test nodes."
    },
    {
      id: "digital-forensics",
      title: "Digital Forensics & Incident Response",
      badge: "Applied Laboratory",
      icon: "Search",
      summary: "Developing evidence handling workflows, memory artifact analysis, and reproducible timeline reconstruction.",
      researchQuestion: "What reproducible methods allow student researchers to analyze disk and memory artifacts while guaranteeing forensic integrity and chain of custody?",
      scope: "Synthetic memory sample triage, forensic hash verification, timeline sequencing, and open-source artifact parsing.",
      methodology: "Dual-hash verification (SHA-256 / BLAKE3), write-blocked synthetic image mounting, and repeatable script automation.",
      defensiveGuidance: "Always capture volatile memory before disk states; maintain cryptographic logs of every analysis step.",
      statusNote: "Operating exclusively on synthetic laboratory disk and memory images. No private or real forensic data is ever collected."
    },
    {
      id: "threat-intelligence",
      title: "Threat Intelligence & Detection",
      badge: "Research Pilot",
      icon: "Radar",
      summary: "Aggregating structured adversary observables, CVE impact scoring, and contextual asset risk ranking.",
      researchQuestion: "How can raw CVE advisories be enriched with environmental context to provide actionable remediation priorities rather than unweighted severity scores?",
      scope: "Automated vulnerability aggregation, EPSS correlation, exploitation likelihood scoring, and asset-criticality weighting.",
      methodology: "Correlation of National Vulnerability Database feeds with public exploit availability and active scanning telemetry.",
      defensiveGuidance: "Patch based on asset exposure and known active exploitation rather than raw CVSS 9.0+ vanity scores.",
      statusNote: "RiskLens AI prototype actively evaluates algorithmically derived prioritization curves."
    },
    {
      id: "cloud-iot",
      title: "Cloud & IoT Firmware Security",
      badge: "In Development",
      icon: "Radio",
      summary: "Extracting hardware firmware, analyzing binary entropy, and testing cloud infrastructure-as-code hardening.",
      researchQuestion: "Can automated extraction and entropy analysis identify hardcoded secrets and vulnerable binaries in legacy IoT firmware images before deployment?",
      scope: "Embedded Linux firmware extraction, filesystem unpacking (SquashFS/UBIFS), entropy visualization, and symbol auditing.",
      methodology: "Headless unpacking scripts, automated static binary analysis, and QEMU-based emulation testing in isolated containers.",
      defensiveGuidance: "Disable unused debug UART/JTAG interfaces; enforce signed firmware updates and encrypted partitions.",
      statusNote: "FirmStrike firmware extraction pipeline is in active development on verified public test images."
    },
    {
      id: "human-centred-security",
      title: "Human-Centred Cyberpsychology",
      badge: "Interdisciplinary Convergence",
      icon: "Users",
      summary: "Examining cognitive deception, spear-phishing susceptibility, and user-centred security friction.",
      researchQuestion: "How do cognitive load, urgency framing, and authority cues influence verification behaviors in simulated security contexts?",
      scope: "Social engineering vulnerability factors, security fatigue, password friction, and intuitive warning dialog designs.",
      methodology: "Supervised behavioral surveys with full informed consent, synthetic phishing awareness assessments, and cognitive load measurements.",
      defensiveGuidance: "Design security controls that support safe human workflows rather than blaming users for falling victim to deception.",
      statusNote: "Conducted in direct collaboration with the RedKross Psychology Subdomain (psychology.redkross.org.in)."
    }
  ],

  // 4. Verified Technical Projects (Section 4.9 & 4.10 - 10 Official Projects from redkross.org.in/projects)
  projects: [
    {
      slug: "deepscan-ai",
      title: "DeepScan AI",
      problem: "Rapid proliferation of synthetic media and manipulated audio/video undermines digital trust and forensic evidence integrity.",
      purpose: "Detects AI-generated images and deepfake videos using a MobileNetV2 CNN ensembled with a HuggingFace Vision Transformer.",
      approach: "Dual-domain analysis combining spatial facial landmark consistency with discrete cosine transform (DCT) frequency distribution parsing.",
      status: "Live",
      category: "AI Security & Forensics",
      domain: "Applied AI — Deepfake & Synthetic Media Detection",
      approvedOwner: "Atharv .R. Gupta (Development Head)",
      architecture: "MobileNetV2 CNN ensembled with HuggingFace Vision Transformer, deployed on Hugging Face Spaces (backend) and Netlify (frontend).",
      tools: ["MobileNetV2 CNN", "HuggingFace ViT", "Flask", "FastAPI", "TensorFlow/Keras"],
      evaluation: "Benchmarked against public synthetic faces datasets with 87.4% baseline validation accuracy in controlled test splits.",
      limitations: "Higher error rates on low-resolution compressed JPEG images; currently not suitable for legal evidence without human verification.",
      safetyBoundaries: "Operates exclusively on user-submitted test media with immediate in-memory deletion. Zero personal data retention.",
      repoUrl: "https://github.com/Redkrossresearch/Deepscan",
      lastUpdated: "October 2026"
    },
    {
      slug: "firmstrike",
      title: "FirmStrike",
      problem: "Connected devices often run outdated embedded firmware with hardcoded credentials, unpatched vulnerabilities, and insecure binary libraries.",
      purpose: "An AI-assisted IoT firmware security platform for firmware extraction, static/binary analysis, CVE matching and QEMU emulation.",
      approach: "Containerized unpacking engine utilizing binwalk, squashfs-tools, automated credential pattern scanning, and QEMU-based emulation.",
      status: "In Development",
      category: "Hardware & IoT Security",
      domain: "IoT Firmware Security Analysis",
      approvedOwner: "Atharv .R. Gupta (Development Head)",
      architecture: "React Vite frontend with Express, PostgreSQL, Drizzle ORM, and QEMU emulation daemon in isolated containers.",
      tools: ["React", "Vite", "Express", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
      evaluation: "Successfully parsed 12 open-source router firmware images, identifying unencrypted configuration files and known outdated busybox binaries.",
      limitations: "Encrypted proprietary vendor blobs cannot be automatically unpacked; requires manual key extraction.",
      safetyBoundaries: "Tested strictly on vendor-authorized public reference firmware. No live physical radio or device exploitation.",
      repoUrl: "https://github.com/Redkrossresearch/FirmStrike",
      lastUpdated: "October 2026"
    },
    {
      slug: "appsec-orchestrator",
      title: "AppSec Orchestrator",
      problem: "Developers frequently lack unified automated security scanning across both application source code and enterprise document uploads.",
      purpose: "A Flask platform combining a source-code security scanner (secrets, injection flaws, vulnerable dependencies, AI auto-fix) and document threat scanner behind one reporting pipeline.",
      approach: "Static AST analysis, secret regex engines, and dependency graph auditing coupled with heuristic PDF/macro document parsing.",
      status: "Beta",
      category: "Application Security",
      domain: "Application & Document Security Scanning",
      approvedOwner: "Atharv .R. Gupta (Development Head)",
      architecture: "Flask platform with SQLAlchemy ORM, SQLite cache, and automated PR security comment integration.",
      tools: ["Flask", "SQLAlchemy", "SQLite", "Python", "Semgrep"],
      evaluation: "Tested across 8 internal RedKross research repositories, catching test API tokens and outdated npm packages prior to commit.",
      limitations: "False-positive rate requires periodic rule tuning; dynamic runtime testing (DAST) is not yet supported in this version.",
      safetyBoundaries: "Runs entirely within local sandbox or CI runner. No proprietary customer code or AST is transmitted to external servers.",
      repoUrl: "https://github.com/Redkrossresearch/AppSec-Final",
      lastUpdated: "October 2026"
    },
    {
      slug: "risklens-ai",
      title: "RiskLens AI",
      problem: "Raw CVSS scores fail to reflect whether a vulnerability is actively being exploited or poses risk to specific network topologies.",
      purpose: "AI-assisted cyber risk and compliance analyzer combining FastAPI, role-based access control, vulnerability risk scoring, and local ISO/NIST/CIS compliance search.",
      approach: "RAG pipeline querying vectorized compliance standards combined with Bayesian exploit likelihood algorithms (EPSS & CISA KEV).",
      status: "Prototype",
      category: "Threat Intelligence",
      domain: "AI-Assisted Cyber Risk & Compliance",
      approvedOwner: "Atharv .R. Gupta (Development Head)",
      architecture: "FastAPI backend with Supabase PostgreSQL, Ollama local inference, LangChain, and ChromaDB vector store.",
      tools: ["FastAPI", "PostgreSQL (Supabase)", "Ollama", "LangChain", "ChromaDB"],
      evaluation: "Evaluated against 500 recent CVE entries; reduced urgent patch priority volume by 42% compared to flat CVSS 7.0+ filtering.",
      limitations: "Relies on accuracy of upstream CISA and EPSS data feeds; does not perform active network vulnerability scanning.",
      safetyBoundaries: "Passive analytical tool. Operates on local Ollama models; no internal enterprise infrastructure data is uploaded off-prem.",
      repoUrl: "https://github.com/Redkrossresearch/risklens-ai",
      lastUpdated: "October 2026"
    },
    {
      slug: "ztna-project",
      title: "ZTNA Project",
      problem: "Traditional perimeter VPNs expose entire internal subnets upon authentication compromise without continuous verification.",
      purpose: "A zero-trust network access platform pairing a React frontend with a backend over a 1:1 mapped API surface for identity-aware access.",
      approach: "Identity-aware proxy architecture implementing least-privilege role-based access control (RBAC) and granular microsegmentation policies.",
      status: "Prototype",
      category: "Zero Trust & Identity",
      domain: "Zero Trust Network Access",
      approvedOwner: "Atharv .R. Gupta (Development Head)",
      architecture: "React frontend communicating over strict API boundaries with Node.js authentication microservices and session policy brokers.",
      tools: ["React", "Node.js", "Express", "JWT", "Tailwind CSS"],
      evaluation: "Validated across simulated enterprise topologies with 100% policy enforcement and automated privilege revocation upon token expiry.",
      limitations: "Built as a research prototype; enterprise multi-tenant directory (SCIM / Azure AD) sync is a planned follow-up.",
      safetyBoundaries: "Evaluated within an isolated test harness. No production corporate traffic or credentials are routed through prototype nodes.",
      repoUrl: "https://github.com/Redkrossresearch/ZTNA-Project",
      lastUpdated: "October 2026"
    },
    {
      slug: "email-mobile-security",
      title: "CyberShield SOC",
      problem: "Fragmented security tooling leads to detection gaps between enterprise email vectors, mobile devices, and IAM identity layers.",
      purpose: "A single-server SOC platform covering email security, mobile security, authentication/IAM, reporting and SIEM eventing across 60+ endpoints.",
      approach: "Comprehensive security operations architecture integrating DKIM/DMARC email parsing, mobile MDM telemetry hooks, RS256 JWT authentication, and centralized SIEM log collation.",
      status: "Prototype",
      category: "SOC & Identity Security",
      domain: "Email, Mobile & Identity Security Operations",
      approvedOwner: "Atharv .R. Gupta (Development Head)",
      architecture: "Flask REST architecture with asymmetric JWT (RS256), argon2-cffi password hashing, pyotp multi-factor authentication, and simulated event bus.",
      tools: ["Flask", "JWT (RS256)", "argon2-cffi", "pyotp", "Python"],
      evaluation: "Simulated 500+ phishing and brute-force events across 60 mock enterprise endpoints with sub-second alert dispatching.",
      limitations: "Prototype/demo build running on simulated event streams where live enterprise connectors (Exchange / MDM) are not configured.",
      safetyBoundaries: "Internal SOC lab demonstration tool. Does not intercept real end-user communications or mobile device content.",
      repoUrl: "https://github.com/Redkrossresearch/Email-Mobile-Security",
      lastUpdated: "October 2026"
    },
    {
      slug: "osint-tool",
      title: "OSINT Tool",
      problem: "Manual open-source threat reconnaissance is slow, prone to missing exposed perimeter assets, and difficult to correlate across disparate feeds.",
      purpose: "Automate open-source reconnaissance (OSINT) to discover attack surfaces, enumerate subdomains, harvest public certificates, and identify leaked credentials.",
      approach: "Multi-threaded OSINT correlation engine aggregating passive DNS records, Certificate Transparency logs, WHOIS registries, and search engine dorks.",
      status: "Active",
      category: "Threat Intelligence & OSINT",
      domain: "Open Source Intelligence",
      approvedOwner: "Atharv .R. Gupta (Development Head)",
      architecture: "Modular TypeScript reconnaissance suite with asynchronous event streaming, rate-limited API handlers, and structured JSON output.",
      tools: ["TypeScript", "Node.js", "Passive DNS", "CertStream", "REST APIs"],
      evaluation: "Mapped external digital footprint of 20+ test domains, discovering forgotten staging subdomains in under 90 seconds.",
      limitations: "Restricted strictly to passive data sources; does not perform intrusive active port knocking or exploit execution.",
      safetyBoundaries: "Zero active scanning against third-party assets. Operates purely on publicly indexed data and coordinated reconnaissance APIs.",
      repoUrl: "https://github.com/Redkrossresearch/OSINT_Tool",
      lastUpdated: "October 2026"
    },
    {
      slug: "ocr-pii-prevention",
      title: "OCR & PII Shield",
      problem: "Organizations routinely leak sensitive personal information (PII, Aadhaar, PAN, SSN, credit cards) buried inside scanned documents and screenshots.",
      purpose: "Automated document scanning and optical character recognition (OCR) system that detects, classifies, and redacts sensitive PII before ingestion.",
      approach: "Computer vision preprocessing (deskewing, binarization) combined with Tesseract OCR and contextual NLP regular expression matching for automated redaction.",
      status: "Active",
      category: "Data Privacy & Forensics",
      domain: "Document Security & Privacy Engineering",
      approvedOwner: "Atharv .R. Gupta (Development Head)",
      architecture: "Python pipeline leveraging OpenCV image filters, Tesseract OCR engine, and regex/NLP privacy validation rules.",
      tools: ["Python", "Tesseract OCR", "OpenCV", "Regex Engine", "NumPy"],
      evaluation: "Achieved 96.2% precision on synthetic identification cards and scanned invoices across multiple orientations and lighting conditions.",
      limitations: "Severely degraded handwritten or noisy scans may require manual verification or higher DPI thresholding.",
      safetyBoundaries: "Runs completely offline without external cloud OCR APIs. Documents are processed in ephemeral memory and never saved to disk.",
      repoUrl: "https://github.com/Redkrossresearch/OCR-scan-and-PII-prevention-project-",
      lastUpdated: "October 2026"
    },
    {
      slug: "api-security-scanner",
      title: "API Security Scanner",
      problem: "APIs represent the primary modern attack vector for data breaches due to broken object-level authorization (BOLA) and excessive data exposure.",
      purpose: "Automate security auditing of REST endpoints and OpenAPI/Swagger specifications against OWASP API Security Top 10 vulnerabilities.",
      approach: "Fuzzing engine generating contract-driven test assertions against OpenAPI specs to detect IDOR/BOLA, unauthenticated routes, and rate-limit bypasses.",
      status: "Active",
      category: "Application Security",
      domain: "API & Cloud Security",
      approvedOwner: "Atharv .R. Gupta (Development Head)",
      architecture: "Node.js scanning engine with automated Swagger/OpenAPI parser, assertion test runner, and vulnerability triage report generator.",
      tools: ["JavaScript", "Node.js", "Express", "OpenAPI Spec Parser", "Axios"],
      evaluation: "Audited 15 open-source REST microservices, successfully flagging 7 broken authentication patterns and 12 unthrottled endpoints.",
      limitations: "Custom non-standard authentication schemes (e.g. mutual TLS or HMAC headers) require custom adapter scripting.",
      safetyBoundaries: "Strictly non-destructive audit engine designed for pre-production staging environments and authorized vulnerability research.",
      repoUrl: "https://github.com/Redkrossresearch/api-security-scanner",
      lastUpdated: "October 2026"
    },
    {
      slug: "threat-map",
      title: "ThreatMap",
      problem: "Security teams struggle to intuitively contextualize distributed attacks and global threat telemetry when viewing tabular log streams.",
      purpose: "Provide a real-time, interactive 3D global cyber threat telemetry visualizer mapping live attack vectors, geo-located honeypots, and DDoS traffic.",
      approach: "WebGL / Three.js 3D globe rendering geospatial arcs between origin IPs and destination honeypot sensors with real-time WebSocket feeds.",
      status: "Active",
      category: "Threat Intelligence & Visualization",
      domain: "Telemetry Visualization & SOC Monitoring",
      approvedOwner: "Atharv .R. Gupta (Development Head)",
      architecture: "TypeScript client with Three.js WebGL globe, real-time WebSocket subscriber, and MaxMind GeoIP enrichment pipeline.",
      tools: ["TypeScript", "WebGL", "Three.js", "WebSocket", "GeoIP"],
      evaluation: "Smoothly renders 1,000+ simultaneous animated attack trajectory arcs at 60 FPS in standard browser viewports.",
      limitations: "GeoIP accuracy is limited to city/ISP level resolution; proxy and Tor egress nodes can disguise the true threat actor origin.",
      safetyBoundaries: "Visualizes aggregated public honeypot and synthetic telemetry; does not collect private network logs or personal IP data.",
      repoUrl: "https://github.com/Redkrossresearch/ThreatMap",
      lastUpdated: "October 2026"
    }
  ],

  // 5. Labs & Cyber Range Architecture (Section 4.11)
  labs: {
    disclaimer: "Our lab environments operate on private virtualization nodes with strict default-deny egress filtering. Public access will only be granted once formal isolation audits, automated teardown mechanisms, and access control governance are fully established.",
    facilities: [
      {
        name: "Blue-Team Detection Range",
        focus: "Telemetry & Incident Response",
        status: "Architecture Standard (Phased Private Rollout)",
        specs: "Virtualised enterprise enclave with simulated Windows/Linux nodes, Sysmon logging, and isolated telemetry collection.",
        capabilities: ["Log pipeline stress testing", "Detection rule benchmarking", "Threat replay without live malware execution"]
      },
      {
        name: "Authorised Offensive Security Lab",
        focus: "Ethical Testing & Exploit Verification",
        status: "Planned / Restricted Internal Access",
        specs: "Strictly air-gapped disposable sandbox with ephemeral memory snapshots and automated post-exercise destruction.",
        capabilities: ["CVE reproduction in closed sandboxes", "Payload execution boundary testing", "Hardware bus protocol auditing"]
      },
      {
        name: "Digital Forensics Workbench",
        focus: "Evidence Analysis & Chain of Custody",
        status: "Operational in Internal Research",
        specs: "High-integrity workstations with cryptographic write-blockers and synthetic memory and disk image repositories.",
        capabilities: ["Filesystem timeline reconstruction", "Memory artifact triage", "Cryptographic evidence preservation"]
      }
    ]
  },

  // 6. Academy & Learning Roadmap (Section 4.12)
  academy: {
    status: "In Development / Curriculum Roadmapping",
    disclaimer: "RedKross Academy is an educational research initiative designed to teach structured, ethical cybersecurity concepts. We do not offer accredited government degrees or guaranteed employment. Enrolment is currently closed while competency rubrics are finalized.",
    plannedTracks: [
      {
        track: "Track 01",
        title: "Systems, Linux & Networking Foundations",
        level: "Foundational",
        summary: "Mastering operating system internals, socket programming, packet analysis, and command-line automation."
      },
      {
        track: "Track 02",
        title: "Defensive Operations & SOC Analysis",
        level: "Intermediate",
        summary: "Understanding security telemetry, log correlation, endpoint investigation, and mitigation workflows."
      },
      {
        track: "Track 03",
        title: "Application Security & Code Auditing",
        level: "Advanced",
        summary: "Identifying OWASP Top 10 vulnerabilities, conducting source code reviews, and configuring automated CI/CD guardrails."
      },
      {
        track: "Track 04",
        title: "Applied Threat Research & Vulnerability Analysis",
        level: "Specialist",
        summary: "Hypothesis-driven vulnerability research, responsible disclosure coordination, and technical documentation."
      }
    ]
  },

  // 7. College & University Partnerships (Section 4.14)
  collegePartnerships: {
    overview: "We partner with engineering colleges and universities to bridge theoretical curriculum with hands-on, ethical cybersecurity research and student capstone cohorts.",
    formats: [
      {
        title: "Hands-On Security Workshops",
        format: "2 to 3-day intensive bootcamps",
        scope: "Practical defensive labs, Linux security fundamentals, and forensic evidence collection exercises."
      },
      {
        title: "Supervised Capstone Cohorts",
        format: "Semester-long mentorship (3 to 6 months)",
        scope: "Faculty-aligned research projects with milestone rubrics, architecture reviews, and code mentorship."
      },
      {
        title: "Faculty Research Affiliations",
        format: "Joint collaborative inquiries",
        scope: "Co-authored technical papers, synthetic benchmarking datasets, and interdisciplinary cyberpsychology studies."
      },
      {
        title: "Student Research Showcases",
        format: "Annual or semester presentations",
        scope: "Peer evaluation of student technical prototypes, code review sessions, and community demonstration."
      }
    ],
    deliveryStages: [
      { stage: "01", name: "Institutional Consultation", desc: "Understanding the college's curriculum goals, student technical background, and lab capabilities." },
      { stage: "02", name: "Curriculum Alignment", desc: "Customizing workshop modules, safety guidelines, and evaluation rubrics." },
      { stage: "03", name: "Supervised Delivery", desc: "Interactive lab sessions with structured mentors and air-gapped practice environments." },
      { stage: "04", name: "Capstone Showcase", desc: "Students demonstrate validated projects and receive formal peer review." },
      { stage: "05", name: "Community Handover", desc: "Open-source tool releases, learning documentation, and faculty retrospective." }
    ]
  },

  // 8. Cyber Opportunities Directory (Section 4.13)
  opportunities: [
    {
      slug: "cyber-lab-research-intern",
      title: "Cyber Lab Research Intern",
      domain: "Defensive Engineering & Detection",
      type: "Student Research Internship",
      status: "Open",
      delivery: "Hybrid / Remote",
      duration: "12 to 16 Weeks",
      hours: "15 to 20 hours / week",
      supervisor: "Atharv .R. Gupta (Development Head)",
      eligibility: "Undergraduate or postgraduate students in Computer Science, IT, Cybersecurity or related disciplines with basic Linux and Python proficiency.",
      tasks: [
        "Assist in configuring isolated virtualization nodes and telemetry hooks.",
        "Author Sigma detection rules and benchmark against simulated attack scenarios.",
        "Document test results and maintain research limitation logs."
      ],
      selection: "Application review → 30-minute technical problem-solving discussion → Practical lab task.",
      compensation: "Research mentorship, institutional certificate of contribution, and co-authorship credit on public project repositories."
    },
    {
      slug: "vulnerability-research-fellow",
      title: "Vulnerability Research Fellow",
      domain: "Vulnerability Research & Disclosure",
      type: "Research Fellowship",
      status: "Open",
      delivery: "Remote",
      duration: "6 Months",
      hours: "Flexible (Milestone-based)",
      supervisor: "Atharv .R. Gupta (Development Head)",
      eligibility: "Early-career researchers, security engineers, or advanced students with prior experience in static code auditing or binary disassembly.",
      tasks: [
        "Conduct structured vulnerability audits on approved open-source libraries.",
        "Coordinate responsible disclosure reports with upstream vendors under our ethical framework.",
        "Publish technical advisories and patch verification documentation."
      ],
      selection: "Portfolio / GitHub code review → Research design proposal → Architecture review interview.",
      compensation: "Institutional grant funding (subject to project scope), public advisory attribution, and peer review support."
    }
  ],

  // 9. Responsible Vulnerability Disclosure Protocol (Section 4.17)
  responsibleDisclosure: {
    channel: "security@redkross.org.in",
    statement: "RedKross strictly supports authorized, ethical security research. We believe in coordinated, responsible vulnerability disclosure that prioritizes privacy, minimizes harm, and gives software maintainers adequate time to remediate issues before public reporting.",
    rules: [
      "Explicit Authorization Required: Do not test systems, domains, or networks without written permission and defined scope.",
      "No Data Exfiltration: Never access, download, alter, or share private user data, credentials, or production dumps.",
      "No Denial of Service: Do not perform brute-force floods, resource exhaustion attacks, or destructive operations.",
      "Coordinated Embargo: Allow maintainers at least 90 days to issue patches before any public disclosure is made."
    ],
    timeline: [
      { time: "Within 24 Hours", action: "Automated and human confirmation of report receipt." },
      { time: "Within 72 Hours", action: "Initial technical triage and severity assessment." },
      { time: "Within 14 Days", action: "Reproduction confirmation and remediation plan discussion with maintainers." },
      { time: "Within 90 Days", action: "Patch deployment, regression verification, and scheduled coordinated advisory." }
    ]
  },

  // 10. Technical Resources & Guides (Section 4.15)
  resources: [
    {
      title: "Linux Kernel Telemetry Baseline Guide",
      category: "Engineering Guide",
      author: "RedKross Cybersecurity Engineering Team",
      date: "October 2026",
      summary: "A practical guide to configuring auditd and eBPF events for high-fidelity detection without overwhelming system storage."
    },
    {
      title: "Secure Lab Isolation Checklist",
      category: "Operational Checklist",
      author: "Atharv .R. Gupta",
      date: "October 2026",
      summary: "18-point verification checklist for air-gapping disposable virtualization environments prior to running untrusted binaries."
    },
    {
      title: "Responsible Disclosure Template for Student Researchers",
      category: "Policy Template",
      author: "RedKross Research Governance",
      date: "October 2026",
      summary: "Standardized vulnerability disclosure reporting letter formatted according to international coordination standards."
    }
  ],

  // 11. Publications Notice (Section 4.16 - Zero Fabrications)
  publications: {
    statusNotice: "Research Papers & Technical Reports In Preparation",
    statement: "In strict adherence to our Zero Fabrications policy, RedKross Research Foundation only lists genuine, published peer-reviewed papers, posters, and technical datasets. Our current experimental findings on DeepScan AI and Zero Trust Isolation are undergoing internal peer review prior to formal submission. We do not invent publication records or fake citations."
  }
};
