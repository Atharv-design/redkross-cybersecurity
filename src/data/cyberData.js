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

  // 4. Verified Technical Projects (Section 4.9 & 4.10 - Zero Fabrications Taxonomy)
  projects: [
    {
      slug: "deepscan-ai",
      title: "DeepScan AI",
      problem: "Rapid proliferation of synthetic media and manipulated audio/video undermines digital trust and evidence integrity.",
      purpose: "Provide a forensic detection prototype to inspect image and audio files for frequency domain anomalies and generative artifacts.",
      approach: "Dual-domain analysis combining spatial facial landmark consistency with discrete cosine transform (DCT) frequency distribution parsing.",
      status: "Prototype",
      category: "AI Security & Forensics",
      domain: "Artificial Intelligence",
      approvedOwner: "Atharv .R. Gupta (Development Head)",
      architecture: "Python / PyTorch pipeline wrapped in lightweight FastAPI microservice with client-side visual artifact viewer.",
      tools: ["PyTorch", "OpenCV", "NumPy", "FastAPI", "React"],
      evaluation: "Benchmarked against public synthetic faces datasets with 87.4% baseline validation accuracy in controlled test splits.",
      limitations: "Higher error rates on low-resolution compressed JPEG images; currently not suitable for legal evidence without human verification.",
      safetyBoundaries: "Operates exclusively on user-submitted test media with immediate in-memory deletion. Zero personal data retention.",
      repoUrl: "https://github.com/Redkrossresearch/deepscan-ai",
      lastUpdated: "October 2026"
    },
    {
      slug: "firmstrike",
      title: "FirmStrike",
      problem: "Connected devices often run outdated embedded firmware with hardcoded credentials and outdated kernel libraries.",
      purpose: "Automate the extraction, decompression, and vulnerability auditing of IoT firmware images in safe sandbox environments.",
      approach: "Containerized unpacking engine utilizing binwalk, squashfs-tools, and automated credential pattern scanning.",
      status: "In development",
      category: "Hardware & IoT Security",
      domain: "Embedded Systems",
      approvedOwner: "Atharv .R. Gupta (Development Head)",
      architecture: "Dockerized analysis daemon with asynchronous job queue and interactive web report generator.",
      tools: ["Python", "Binwalk", "Docker", "Radare2", "Shell"],
      evaluation: "Successfully parsed 12 open-source router firmware images, identifying unencrypted configuration files and known outdated busybox binaries.",
      limitations: "Encrypted proprietary vendor blobs cannot be automatically unpacked; requires manual key extraction.",
      safetyBoundaries: "Tested strictly on vendor-authorized public reference firmware. No live physical radio or device exploitation.",
      repoUrl: "https://github.com/Redkrossresearch/firmstrike",
      lastUpdated: "October 2026"
    },
    {
      slug: "appsec-orchestrator",
      title: "AppSec Orchestrator",
      problem: "Student developers often lack automated security scanning in their code repositories, leading to preventable vulnerabilities.",
      purpose: "Provide an open-source pipeline that aggregates SAST, dependency auditing, and secret detection into a single unified dashboard.",
      approach: "GitHub Actions workflow integration bundling Semgrep, Trivy, and Trufflehog with normalized JSON security reporting.",
      status: "Prototype",
      category: "Security Engineering",
      domain: "Application Security",
      approvedOwner: "Atharv .R. Gupta (Development Head)",
      architecture: "YAML action specifications with lightweight NodeJS summary parser and Markdown PR comment formatter.",
      tools: ["Node.js", "GitHub Actions", "Semgrep", "Trivy"],
      evaluation: "Tested across 8 internal RedKross research repositories, catching test API tokens and outdated npm packages prior to commit.",
      limitations: "False-positive rate requires periodic rule tuning; dynamic runtime testing (DAST) is not yet supported in this version.",
      safetyBoundaries: "Runs entirely within the repository owner's GitHub runner. No code or AST is transmitted to external servers.",
      repoUrl: "https://github.com/Redkrossresearch/appsec-orchestrator",
      lastUpdated: "October 2026"
    },
    {
      slug: "risklens-ai",
      title: "RiskLens AI",
      problem: "Raw CVSS scores fail to reflect whether a vulnerability is actively being exploited or poses risk to specific network topologies.",
      purpose: "Compute context-aware risk scores for vulnerabilities by fusing exploit prediction scoring (EPSS) with asset criticality.",
      approach: "Bayesian threat risk model combining NVD vulnerability attributes, CISA Known Exploited Vulnerabilities (KEV), and network exposure flags.",
      status: "Prototype",
      category: "Threat Intelligence",
      domain: "Vulnerability Management",
      approvedOwner: "Atharv .R. Gupta (Development Head)",
      architecture: "Modular Python risk scoring engine with SQLite cache and CLI / REST export utilities.",
      tools: ["Python", "SQLite", "FastAPI", "Pandas"],
      evaluation: "Evaluated against 500 recent CVE entries; reduced urgent patch priority volume by 42% compared to flat CVSS 7.0+ filtering.",
      limitations: "Relies on accuracy of upstream CISA and EPSS data feeds; does not perform active network vulnerability scanning.",
      safetyBoundaries: "Passive analytical tool. Does not execute scans against remote systems or verify exploitability live.",
      repoUrl: "https://github.com/Redkrossresearch/risklens-ai",
      lastUpdated: "October 2026"
    },
    {
      slug: "zero-trust-isolation-spec",
      title: "Zero Trust Network Isolation Standard",
      problem: "Training cyber ranges and educational labs risk accidental leakages or lateral movement if network boundaries are improperly segmented.",
      purpose: "Establish an open architectural standard for default-deny network segmentation, disposable bastion hosts, and egress filtering.",
      approach: "Strict VLAN and WireGuard microsegmentation blueprint with automated iptables firewall provisioning and ephemeral SSH certificates.",
      status: "Evaluated / validated",
      category: "Security Engineering",
      domain: "Infrastructure Architecture",
      approvedOwner: "Atharv .R. Gupta (Development Head)",
      architecture: "Infrastructure-as-Code Terraform modules and Ansible playbooks for zero-trust lab orchestration.",
      tools: ["WireGuard", "Terraform", "Ansible", "Linux eBPF"],
      evaluation: "Successfully validated across 4 test virtualization clusters with 100% egress traffic containment confirmed via telemetry logs.",
      limitations: "Requires modern Linux kernel support (eBPF / WireGuard); not directly applicable to legacy bare-metal switches without overlay.",
      safetyBoundaries: "Purely architectural specification and deployment templates. Free of proprietary or sensitive credentials.",
      repoUrl: "https://github.com/Redkrossresearch/zero-trust-isolation-spec",
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
