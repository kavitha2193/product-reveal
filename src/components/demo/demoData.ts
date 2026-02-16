import {
  Shield,
  FileCheck,
  Eye,
  Lock,
  Fingerprint,
  MapPin,
  Globe,
  MonitorSmartphone,
  MousePointer,
  Download,
  Brain,
  AudioLines,
  AlertTriangle,
  Settings,
  Users,
  ClipboardList,
  Layers,
  Zap,
  Target,
  KeyRound,
  UserCheck,
  Scale,
  Building,
  Server,
  Database,
  Calendar,
  BarChart3,
  Headphones,
  FileText,
  ShieldCheck,
  Network,
  HardDrive,
  UserCog,
  Award,
  LucideIcon,
} from 'lucide-react';

export type Persona =
  | 'all'
  | 'coe'
  | 'it-head'
  | 'registrar';


export interface SubFeature {
  id: string;
  title: string;
  heading: string;
  description: string;
  subheading?: string;
  miniheading?: string;
  
  bullets: { label: string; content: string; type?: 'item' | 'heading'; }[];
   image?: {
    src: string;
    alt?: string;
    variant?: 'plain' | 'framed' ;
  };
  demo?: {
    supaDemoUrl: string;
    thumbnail?: string;
    
  };
}

export interface VerticalSection {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
   subheading?: string; // ✅ add here
  subFeatures: SubFeature[];
   personas?: Persona[];
   showVideo?: boolean;
}

export interface TabCategory {
  id: string;
  label: string;
  sections: VerticalSection[];
}

// SLIDE 1 — WHAT PROCTORLY IS
const whatIsProctorly: VerticalSection = {
  id: 'proctorly',
  title: 'Proctorly',
  subtitle: 'Proctorly',
  icon: Globe,
  subFeatures: [
    {
      id: 'proctorly',
      title: 'Proctorly',
      heading: 'Proctorly',
      description: '',
       image: {
    src: '/brochure/images/tab-1.jpg',
    alt: 'Proctorly',
    variant: 'framed',
  },
      bullets: [
        { label: ' ', content: ' Policy-Driven Exam Governance' },
        { label: ' ', content: '	Audit-Ready by Design | Human Accountability' },
        { label: ' ', content: '	Enterprise-grade platform for high-stakes online examinations' },
      ],
     
      demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/2db2a336-bf84-44ae-9fc1-9424bba9e8e5?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
    
  },
    },
  ],
};

// SLIDE 2 — WHAT PROCTORLY IS
const whatIsProctorlySection: VerticalSection = {
  id: 'what-is-proctorly',
  title: 'What is Proctorly',
  subtitle: 'Policy-Driven Platform',
  icon: Layers,
  subFeatures: [
    {
      id: 'proctorly-definition',
      title: 'Proctorly Definition',
      heading: 'What is Proctorly',
      description: 'Proctorly is not a monitoring tool. It is a policy-driven examination governance platform',
      image: {
    src: '/brochure/images/tab-2.png',
    alt: 'What is Proctorly',
    variant: 'plain',
  },
      bullets: [
        { label: ' ', content: '	Institutions define exam rules' },
        { label: ' ', content: '	Proctorly enforces policies consistently' },
        { label: ' ', content: '	Humans retain academic authority' },
        { label: ' ', content: 'Evidence is preserved for audits and disputes' },
       
      ],
      demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/59cf7161-6854-4468-972c-a98b520843ac?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
    
  },
    },
  ],
};

// SLIDE 3 — WHY GOVERNANCE MATTERS
const whyGovernanceAll: VerticalSection = {
  id: 'why-governanceAll',
  title: 'Why Governance Matters',
  subtitle: 'Governance Risk',
  icon: Target,
   showVideo: false,
  personas: ['all'],
  subFeatures: [
    {
      id: 'governance-importance',
      title: 'Governance Importance',
      heading: 'Why Governance Matters',
      description: 'Online exams create governance risk, not just cheating risk',
      image: {
     src: '/brochure/images/tab-3.png',
    alt: 'Governance Risk',
    variant: 'plain',
  },
       bullets: [
        { label: ' ', content: '		Institutions are accountable for fairness and consistency' },
        { label: ' ', content: '		Results must be defensible after publication' },
        { label: ' ', content: '		Audits, appeals, and accreditation require evidence' },
        { label: ' ', content: '	Monitoring alone is not sufficient' },
       
      ],
    },
  ],
};


// SLIDE 3 — WHY GOVERNANCE MATTERS for CoE
const whyGovernanceCoe: VerticalSection = {
  id: 'why-governanceCoe',
  title: 'Why Online Exams Become An Institutional Risk', 
  subtitle: 'CoE-Centric',
  icon: Target,
   showVideo: false,
  personas: ['coe'],
   subFeatures: [
    {
      id: 'governance-importance',
      title: 'Governance Importance',
      heading: 'Why Online Exams Become An Institutional Risk',
      description: 'Online exams don’t just create cheating risk.they create fairness, consistency, and defensibility risk for the Institution.',
      image: {
     src: '/brochure/images/tab-3.1.png',
    alt: 'CoE-Centric',
    variant: 'plain',
  },
      bullets: [
        { label: ' ', content: '	Institutions are accountable for uniform treatment across large cohorts' },
          { label: ' ', content: '	Results must be defensible after declaration, not just during exams' },
            { label: ' ', content: '	Appeals, RTIs, and court notices demand evidence — not explanations' },
              { label: ' ', content: 'Manual reviews at scale lead to fatigue and inconsistent decisions' },
               { label: ' ', content: 'Monitoring tools shift complexity onto the Institutions instead of reducing it'},
        { label: 'The real challenge for Institutions is not only detection. it is delivering fair, explainable, defensible outcomes at scale.', content: '' },
      ],
    },
  ],
}; 

// SLIDE 3 — WHY GOVERNANCE MATTERS for It-head
const whyGovernanceIT: VerticalSection = {
  id: 'why-governanceIt',
  title: 'Why Online Exams Become An Institutional Risk',
  subtitle: 'IT-Specific',
  icon: Target,
   showVideo: false,
  personas: ['it-head'],
   subFeatures: [
    {
      id: 'governance-importance',
      title: 'Governance Importance',
      heading: 'Why Online Exams Become An Institutional Risk',
      description: 'Online exams introduce infrastructure, security, and audit risk — not just academic risk.',
      image: {
   src: '/brochure/images/tab-3.2.png',
    alt: 'IT-Specific',
    variant: 'plain',
  },
      bullets: [
        { label: ' ', content: '	Institutions are accountable for system integrity, data protection, and audit defensibility' },
          { label: ' ', content: '	Point tools create fragmented logs, blind spots, and blame ambiguity' },
            { label: ' ', content: '		Post-result disputes expose IT logs, configs, and access histories' },
              { label: ' ', content: '	Compliance failures become security incidents, not academic issues' },
               { label: ' ', content: '	Tools without governance shift risk onto Institution’s IT teams'},
        { label: 'Institutions don’t need more monitoring.Institutions need controlled, auditable exam infrastructure.', content: '' },
      ],
    },
  ],
};

// SLIDE 3 — WHY GOVERNANCE MATTERS for Registrar
const whyGovernanceRegistrar: VerticalSection = {
  id: 'why-governanceRegistrar',
  title: 'Why Online Exams Become An Institutional Risk',
  subtitle: 'Institutional Leadership Framing',
  icon: Target,
   showVideo: false,
  personas: ['registrar'],
   subFeatures: [
    {
      id: 'governance-importance',
      title: 'Governance Importance',
      heading: 'Why Online Exams Become An Institutional Risk',
      description: 'Online examinations expose the institution to governance, legal, and reputational risk — not just academic misconduct.',
      image: {
    src: '/brochure/images/tab-3.3.jpg',
    alt: 'Institutional Leadership Framing',
    variant: 'plain',
  },
     bullets: [
        { label: ' ', content: '		Institutions are accountable for process integrity, not just results' },
          { label: ' ', content: '		Examinations must withstand audits, accreditation reviews, and legal scrutiny' },
            { label: ' ', content: '			Inconsistent handling of cases creates precedent risk' },
              { label: ' ', content: '		Post-result disputes escalate to institutional leadership, not vendors' },
               { label: ' ', content: '		Monitoring tools address incidents — not institutional accountability'},
        { label: 'The challenge is not catching violations.It is proving that the institution governed examinations fairly, consistently, and lawfully.', content: '' },
      ],
    },
  ],
};


// SLIDE 4-new — THE PROCTORLY FRAMEWORK
const clientSection: VerticalSection = {
  id: 'clientspecific',
  title: 'Karunya’s Examination Governance Context',
  subtitle: 'Karunya’s Examination Governance Context',
  icon: Users,
   showVideo: false,
  subFeatures: [
    {
      id: 'four-pillars',
      title: 'Karunya’s Examination Governance Context',
      heading: 'Karunya’s Examination Governance Context',
      description: 'For Karunya, examination integrity is institutional accountability - not just invigilation. ',

       subheading:'As a University with multi-disciplinary programs and accreditation oversight, the examination framework must ensure:',
      image: {
    src: '/brochure/images/karunya.png',
    alt: 'Four Pillars',
    variant: 'framed',
  },
      bullets: [
        
        { label: ' ', content: 'Uniform policy enforcement across Schools & Departments' },
        { label: ' ', content: 'Defensible results in case of appeals, grievances, or RTI scrutiny' },
        { label: ' ', content: 'Audit-ready documentation for NAAC and regulatory reviews' },
        { label: ' ', content: 'Fairness across on-campus, hybrid, and remote exam formats' },
        { label: ' ', content: 'Protection of institutional reputation in high-stakes assessments' },


        { label: 'Registrar-Level Accountability Includes:', content: '',type: 'heading',},
        { label: '', content: 'Consistency of process' },
        { label: '', content: 'Policy adherence' },
        { label: '', content: 'Documented evidence trail' },
        { label: '', content: 'Academic decision defensibility' },
        
       
      ],
      miniheading:'Proctorly supports structured, policy-driven exam governance - aligned with institutional responsibility.',
    },
  ],
};


// SLIDE 4 — THE PROCTORLY FRAMEWORK
const frameworkSection: VerticalSection = {
  id: 'framework',
  title: 'The Proctorly Framework',
  subtitle: 'Four Pillars',
  icon: Shield,
   showVideo: false,
  subFeatures: [
    {
      id: 'four-pillars',
      title: 'Four Pillars',
      heading: 'The Proctorly Framework',
      description: 'Four pillars of institutional exam governance. All pillars are implemented through inspectable, demo-able features',
    
      image: {
    src: '/brochure/images/tab-4.png',
    alt: 'Four Pillars',
    variant: 'framed',
  },
      bullets: [
        { label: 'Superior Security', content: '' },
        { label: 'Audit-Ready Compliance', content: '' },
        { label: 'Seamless Integration', content: '' },
        { label: 'Privacy-First by Design', content: '' },
      ],
    },
  ],
};

// SLIDE 5 — IDENTITY & SESSION INTEGRITY
const identitySection: VerticalSection = {
  id: 'identity-session',
  title: 'Identity & Session Integrity',
  subtitle: 'Identity & Session Integrity',
  icon: Fingerprint,
  subFeatures: [
    {
      id: 'liveness-detection',
      title: 'Liveness Detection',
      heading: 'Liveness Detection',
      description: '',
      image: {
    src: '/brochure/images/tab-5.1.jpg',
    alt: 'Liveness Detection',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Ensures a real human is present, not a photo, video, or static feed' },
        { label: 'How it works', content: 'Passive cues like blinking and head movement are analysed in real time' },
      ],
      demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/4a7ec6a5-9976-4500-ba21-139bbf200ba2?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
    
  },
    },
    {
      id: 'facial-verification',
      title: 'Continuous Facial Verification',
      heading: 'Continuous Facial Verification',
      description: '',
       image: {
    src: '/brochure/images/tab-5.2.png',
    alt: 'Continuous Facial Verification',
    variant: 'plain',
  },
      bullets: [
        { label: 'What it means', content: 'Prevents impersonation throughout the exam, not just at login' },
        { label: 'How it works', content: 'Facial similarity is continuously validated across the session' },
      ],
      demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/ce3c2614-1e4a-4c68-a625-1b1733e4baba?language=en',
   thumbnail: '/brochure/thumbnail.PNG',
  },
    },
    {
      id: 'concurrent-login',
      title: 'Concurrent Login Detection',
      heading: 'Concurrent Login Detection',
      description: '',
      image: {
    src: '/brochure/images/tab-5.3.png',
    alt: 'Concurrent Login Detection',
    variant: 'plain',
  },
      bullets: [
        { label: 'What it means', content: 'Stops multiple simultaneous exam sessions by the same candidate' },
        { label: 'How it works', content: 'Session fingerprints across devices and locations are correlated' },
      ],
      demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/f42f0fb3-46c9-4243-ba61-2979b5d7b6c5?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
    },
    {
      id: 'geo-tagging',
      title: 'Geo-Tagging (Consent-Based)',
      heading: 'Geo-Tagging (Consent-Based)',
      description: '',
      image: {
    src: '/brochure/images/tab-5.4.png',
    alt: 'Geo-Tagging (Consent-Based)',
    variant: 'plain',
  },
      bullets: [
        { label: 'What it means', content: 'Detects geographic anomalies indicating proxy test-taking' },
        { label: 'How it works', content: 'Location signals are compared against allowed regions with consent' },
      ],
      demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/e0c3fa49-dc1d-4c7c-bc9a-906df902f398?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
  ],
};

// SLIDE 6 — ENVIRONMENT & DEVICE SECURITY
const environmentSection: VerticalSection = {
  id: 'environment-device',
  title: 'Environment & Device Security',
  subtitle: 'Environment & Device Security',
  icon: Lock,
  subFeatures: [
    {
      id: 'browser-lock',
      title: 'Advanced Browser Lock',
      heading: 'Advanced Browser Lock',
      description: '',
      image: {
    src: '/brochure/images/tab-6.1.jpg',
    alt: 'Advanced Browser Lock',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Prevents common digital cheating techniques' },
        { label: 'How it works', content: 'Restricts copy-paste, screenshots, shortcuts, clipboard access, cache manipulation, and system actions' },
      ],
       demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/816fc604-e926-466b-b493-990fdeae87fa?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
    {
      id: 'secondary-device',
      title: 'Secondary Device Detection',
      heading: 'Secondary Device Detection',
      description: '',
      image: {
    src: '/brochure/images/tab-6.2.png',
    alt: 'Secondary Device Detection',
    variant: 'plain',
  },
      bullets: [
        { label: 'What it means', content: 'Detects unauthorised phones or tablets used during exams' },
        { label: 'How it works', content: 'Camera, audio, and behavioural signals are correlated' },
      ],
       demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/ced0f27f-5f32-441a-8170-6ee43d34b0d3?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
     
    },
    {
      id: 'mouse-analysis',
      title: 'Mouse Movement Analysis',
      heading: 'Mouse Movement Analysis',
      description: '',
      image: {
    src: '/brochure/images/tab-6.3.jpg',
    alt: 'Mouse Movement Analysis',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Identifies non-human patterns or scripted control' },
        { label: 'How it works', content: 'Cursor behaviour is analysed for non-human patterns' },
      ],
       demo: {
   supaDemoUrl: 'https://share.synthesia.io/embeds/videos/e66f2ecb-ecdf-40f1-b6fb-ee31f99eda3b?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
    {
      id: 'secure-browser',
      title: 'Zero-Installation Secure Browser Delivery',
      heading: 'Zero-Installation Secure Browser Delivery',
      description: '',
      image: {
    src: '/brochure/images/tab-6.4.jpg',
    alt: 'Zero-Installation Secure Browser Delivery',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'No software downloads or admin rights required' },
        { label: 'How it works', content: 'Security controls are enforced through a secure browser-based model' },
      ],
       demo: {
     supaDemoUrl: 'https://share.synthesia.io/embeds/videos/25198d1b-c211-499b-8f37-4a67cd4d2960?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
     
    },
  ],
};

// SLIDE 7 — AI-DRIVEN THREAT DETECTION
const aiThreatSection: VerticalSection = {
  id: 'ai-threat',
  title: 'AI-Driven Threat Detection',
  subtitle: 'AI-Driven Threat Detection',
  icon: Brain,
  subFeatures: [
    {
      id: 'behavioral-anomaly',
      title: 'Behavioural Anomaly Detection',
      heading: 'Behavioural Anomaly Detection',
      description: '',
      image: {
    src: '/brochure/images/tab-7.1.jpg',
    alt: 'Behavioural Anomaly Detection',
    variant: 'plain',
  },
      bullets: [
        { label: 'What it means', content: 'Surfaces suspicious patterns without auto-penalising candidates' },
        { label: 'How it works', content: 'Multiple signals are correlated into contextual risk indicators' },
      ],
       demo: {
     supaDemoUrl: 'https://share.synthesia.io/embeds/videos/01ffbb15-ebbb-48bc-9441-7ed55671cdbf?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
    {
      id: 'audio-analysis',
      title: 'NLP-Based Audio Analysis',
      heading: 'NLP-Based Audio Analysis',
      description: '',
      image: {
    src: '/brochure/images/tab-7.2.jpg',
    alt: 'NLP-Based Audio Analysis',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Detects possible voice assistants or external help' },
        { label: 'How it works', content: 'Keywords and audio anomalies are flagged for review' },
      ],
       demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/5c3b8462-abfb-44c1-bf25-0169591c2fef?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
    {
      id: 'adversarial-attack',
      title: 'Adversarial Attack Detection',
      heading: 'Adversarial Attack Detection',
      description: '',
      image: {
    src: '/brochure/images/tab-7.3.jpg',
    alt: 'Adversarial Attack Detection',
    variant: 'plain',
  },
      bullets: [
        { label: 'What it means', content: 'Mitigates advanced cheating techniques' },
        { label: 'How it works', content: 'Detects audio manipulation and system tampering' },
      ],
       demo: {
     supaDemoUrl: 'https://share.synthesia.io/embeds/videos/bbb43659-da11-4280-a77b-b7565fbb3790?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
  ],
};

// SLIDE 8 — POLICY-DRIVEN GOVERNANCE
const policySection: VerticalSection = {
  id: 'policy-governance',
  title: 'Policy-Driven Governance',
  subtitle: 'Policy-Driven Governance',
  icon: Settings,
  subFeatures: [
    {
      id: 'institution-policies',
      title: 'Institution-Defined Proctoring Policies',
      heading: 'Institution-Defined Proctoring Policies',
      description: '',
      image: {
    src: '/brochure/images/tab-8.1.png',
    alt: 'Institution-Defined Proctoring Policies',
    variant: 'plain',
  },
      bullets: [
        { label: 'What it means', content: 'Each institution enforces its own academic rules' },
        { label: 'How it works', content: 'Policies are configured per exam, program, or cohort and enforced automatically' },
      ],
       demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/485cf71e-0d68-4ce6-bb18-3560b3a5ee36?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
    {
      id: 'hitl-review',
      title: 'Human-in-the-Loop (HITL) Review',
      heading: 'Human-in-the-Loop (HITL) Review',
      description: '',
      image: {
    src: '/brochure/images/tab-8.2.jpg',
    alt: 'Human-in-the-Loop (HITL) Review',
    variant: 'plain',
  },
      bullets: [
        { label: 'What it means', content: 'AI assists; humans decide' },
        { label: 'How it works', content: 'All flagged incidents are reviewed by trained reviewers before outcomes' },
      ],
       demo: {
   supaDemoUrl: 'https://share.synthesia.io/embeds/videos/0c142a9e-2d6e-406d-8449-20f187feb199?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
    {
      id: 'audit-trail',
      title: 'Complete Audit Trail',
      heading: 'Complete Audit Trail',
      description: '',
      image: {
    src: '/brochure/images/tab-8.3.jpg',
    alt: 'Complete Audit Trail',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Every action is traceable and defensible' },
        { label: 'How it works', content: 'Identity events, system actions, proctor actions, reviewer decisions, and admin changes are time-stamped and logged' },
      ],
       demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/9449e943-8150-4816-9d6a-4a9c2cb5af1f?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
  ],
};

// SLIDE 9 — ROLE-BASED ACCESS & ACCOUNTABILITY
const rbacSection: VerticalSection = {
  id: 'rbac',
  title: 'Role-Based Access & Accountability',
  subtitle: 'Role-Based Access & Accountability',
  icon: KeyRound,
  subFeatures: [
    {
      id: 'rbac-control',
      title: 'Role-Based Access Control (RBAC)',
      heading: 'Role-Based Access Control (RBAC)',
      description: '',
      image: {
    src: '/brochure/images/tab-9.1.jpg',
    alt: 'Role-Based Access Control (RBAC)',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Only authorised roles can perform specific actions' },
        { label: 'How it works', content: 'Access is segmented across admin, exam admin, proctor, reviewer, and auditor roles' },
      ],
       demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/aaa18c0f-5488-42cf-98cd-1e78c52e4013?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
    {
      id: 'segregation-duties',
      title: 'Segregation of Duties',
      heading: 'Segregation of Duties',
      description: '',
      image: {
    src: '/brochure/images/tab-9.2.png',
    alt: 'Segregation of Duties',
    variant: 'plain',
  },
      bullets: [
        { label: 'What it means', content: 'Prevents concentration of power and conflict of interest' },
        { label: 'How it works', content: 'Configuration, monitoring, review, and decision-making are separated' },
      ],
       demo: {
   supaDemoUrl: 'https://share.synthesia.io/embeds/videos/607f385b-03c0-48fe-9d26-ace978051d9d?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
    {
      id: 'admin-logging',
      title: 'Logged Administrative Actions',
      heading: 'Logged Administrative Actions',
      description: '',
      image: {
    src: '/brochure/images/tab-9.3.jpg',
    alt: 'Logged Administrative Actions',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Admin activity is auditable, not implicit trust' },
        { label: 'How it works', content: 'All configuration changes are logged and exportable' },
      ],
       demo: {
  supaDemoUrl: 'https://share.synthesia.io/embeds/videos/02a11af2-8004-409c-9ee5-1555027d2b21?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
  ],
};

// SLIDE 10 — REGULATORY & LEGAL READINESS
const regulatorySection: VerticalSection = {
  id: 'regulatory',
  title: 'Regulatory & Legal Readiness',
  subtitle: 'Regulatory & Legal Readiness',
  icon: Scale,
  subFeatures: [
    {
      id: 'gdpr-dpdpa',
      title: 'GDPR & DPDPA Alignment',
      heading: 'GDPR & DPDPA Alignment',
      description: '',
      image: {
    src: '/brochure/images/tab-10.1.png',
    alt: 'GDPR & DPDPA Alignment',
    variant: 'plain',
  },
      bullets: [
        { label: 'What it means', content: 'Supports global and Indian data protection laws' },
        { label: 'How it works', content: 'Lawful processing, consent, data subject rights, and retention controls are built in' },
      ],
       demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/cc0ddcd6-e30f-49db-981c-d2b69b44a5e7?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
     
    },
    {
      id: 'dpia-support',
      title: 'DPIA & Data Agreement Support',
      heading: 'DPIA & Data Agreement Support',
      description: '',
      image: {
    src: '/brochure/images/tab-10.2.jpg',
    alt: 'DPIA & Data Agreement Support',
    variant: 'plain',
  },
      bullets: [
        { label: 'What it means', content: 'Institutions can complete formal risk assessments' },
        { label: 'How it works', content: 'Documentation, risk classification, and mitigation mapping are supported' },
      ],
       demo: {
   supaDemoUrl: 'https://share.synthesia.io/embeds/videos/36589bab-6542-4b4d-aa57-bee8dc13ddff?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
  ],
};

// SLIDE 11 — LMS, IDENTITY & API INTEGRATION
const integrationSection: VerticalSection = {
  id: 'lms-integration',
  title: 'LMS, Identity & API Integration',
  subtitle: 'LMS, Identity & API Integration',
  icon: Network,
  subFeatures: [
    {
      id: 'lms',
      title: 'LMS Integration',
      heading: 'LMS Integration',
      description: '',
      image: {
    src: '/brochure/images/tab-11.1.jpg',
    alt: 'LMS Integration',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'No disruption to existing exam workflows' },
        { label: 'How it works', content: 'Proctorly launches securely from the LMS as an overlay' },
      ],
       demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/f9b972a4-4fbd-4b84-a3aa-78adebe088e8?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
    {
      id: 'sso',
      title: 'SSO with Institutional IAM',
      heading: 'SSO with Institutional IAM',
      description: '',
      image: {
    src: '/brochure/images/tab-11.2.png',
    alt: 'SSO with Institutional IAM',
    variant: 'plain',
  },
      bullets: [
        { label: 'What it means', content: 'No separate credentials for candidates or staff' },
        { label: 'How it works', content: 'Authentication via SAML or OIDC using institutional identity systems' },
      ],
       demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/3aff002a-a61d-40e2-addf-5b8c8ad20588?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
    {
      id: 'api',
      title: 'Secure APIs & CRM Integrations',
      heading: 'Secure APIs & CRM Integrations',
      description: '',
      image: {
    src: '/brochure/images/tab-11.3.jpg',
    alt: 'Secure APIs & CRM Integrations',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Custom data flows without vendor lock-in' },
        { label: 'How it works', content: 'Minimal metadata exchange with full logging' },
      ],
       demo: {
   supaDemoUrl: 'https://share.synthesia.io/embeds/videos/537ed013-5f9f-44b2-976d-a430e307e4f7?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
     
    },
  ],
};

// SLIDE 12 — EVALUATION & PRE-PRODUCTION SUPPORT
const evaluationSection: VerticalSection = {
  id: 'evaluation',
  title: 'Evaluation & Pre-Production Support',
  subtitle: 'Evaluation & Pre-Production Support',
  icon: Server,
  subFeatures: [
    {
      id: 'sandbox',
      title: 'Sandbox Environment',
      heading: 'Sandbox Environment',
      description: '',
      image: {
    src: '/brochure/images/tab-12.1.svg',
    alt: 'Sandbox Environment',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Safe evaluation without impacting live exams' },
        { label: 'How it works', content: 'Dedicated sandbox with full feature access' },
      ],
       demo: {
   supaDemoUrl: 'https://share.synthesia.io/embeds/videos/e9a28534-e2c7-432f-9bd3-f941ea006ef1?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
    {
      id: 'staging',
      title: 'Staging Environment',
      heading: 'Staging Environment',
      description: 'Test integrations before production rollout.',
      image: {
    src: '/brochure/images/tab-12.2.png',
    alt: 'Staging Environment',
    variant: 'plain',
  },
      bullets: [
        { label: 'What it means', content: 'Test integrations before production rollout' },
        { label: 'How it works', content: 'Staging mirrors production without real candidate data' },
      ],
       demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/33b63a93-5833-4579-80c5-8deefc5bf9fb?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
  ],
};

// SLIDE 13 — PRIVACY & DATA PROTECTION
const privacySection: VerticalSection = {
  id: 'privacy-protection',
  title: 'Privacy & Data Protection',
  subtitle: 'Privacy & Data Protection',
  icon: Database,
  subFeatures: [
    {
      id: 'data-minimisation',
      title: 'Data Minimisation & Purpose Limitation',
      heading: 'Data Minimisation & Purpose Limitation',
      description: '',
      image: {
    src: '/brochure/images/tab-13.1.jpg',
    alt: 'Data Minimisation & Purpose Limitation',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Only exam-relevant data is processed' },
        { label: 'How it works', content: 'Architecture-level controls prevent excess data capture' },
      ],
       demo: {
   supaDemoUrl: 'https://share.synthesia.io/embeds/videos/8cd0859e-e65c-40e5-b273-b366d6b9b695?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
    {
      id: 'no-biometric',
      title: 'No Biometric Storage',
      heading: 'No Biometric Storage',
      description: '',
      image: {
    src: '/brochure/images/tab-13.2.jpg',
    alt: 'No Biometric Storage',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'No facial templates or biometric databases' },
        { label: 'How it works', content: 'Facial data is processed transiently for verification only' },
      ],
       demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/6c58c98a-a93f-4b3a-98c2-dc80e08c58f7?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
    
    },
    {
      id: 'institution-owned',
      title: 'Institution-Owned Data',
      heading: 'Institution-Owned Data',
      description: '',
      image: {
    src: '/brochure/images/tab-13.3.png',
    alt: 'Institution-Owned Data',
    variant: 'plain',
  },
      bullets: [
        { label: 'What it means', content: 'Institutions retain full ownership of exam data' },
        { label: 'How it works', content: 'Proctorly acts strictly as a data processor' },
      ],
       demo: {
   supaDemoUrl: 'https://share.synthesia.io/embeds/videos/0d3844a6-20bf-4dec-8216-c4823e0264b5?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
    {
      id: 'no-ai-training',
      title: 'No AI Model Training on Exam Data',
      heading: 'No AI Model Training on Exam Data',
      description: '',
      image: {
    src: '/brochure/images/tab-13.4.png',
    alt: 'No AI Model Training on Exam Data',
    variant: 'plain',
  },
      bullets: [
        { label: 'What it means', content: 'Candidate data is never repurposed' },
        { label: 'How it works', content: 'Data is used only for exam integrity' },
      ],
       demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/2ad4a179-e771-4166-bdb2-4de4a9fb38a5?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
  ],
};

// SLIDE 14 — DATA RESIDENCY & STORAGE SECURITY
const dataResidencySection: VerticalSection = {
  id: 'data-residency',
  title: 'Data Residency & Storage Security',
  subtitle: 'Data Residency & Storage Security',
  icon: HardDrive,
  subFeatures: [
    {
      id: 'in-country-residency',
      title: 'In-Country Data Residency',
      heading: 'In-Country Data Residency',
      description: '',
      image: {
    src: '/brochure/images/tab-14.1.jpg',
    alt: 'In-Country Data Residency',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Supports jurisdiction-specific storage requirements' },
        { label: 'How it works', content: 'Architecture supports country-level residency controls' },
      ],
       demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/4a3506c9-2095-4329-aa50-f6cc1b7001b0?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
    {
      id: 'encryption',
      title: 'Encryption at Rest & in Transit',
      heading: 'Encryption at Rest & in Transit',
      description: '',
      image: {
    src: '/brochure/images/tab-14.2.svg',
    alt: 'Encryption at Rest & in Transit',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Data is protected throughout its lifecycle' },
        { label: 'How it works', content: 'TLS 1.2+ in transit and AES-256 at rest' },
      ],
       demo: {
   supaDemoUrl: 'https://share.synthesia.io/embeds/videos/d64a8742-da95-470e-b541-da6481c15997?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
     
    },
    {
      id: 'key-access',
      title: 'Controlled Key Access',
      heading: 'Controlled Key Access',
      description: '',
      image: {
    src: '/brochure/images/tab-14.3.svg',
    alt: 'Controlled Key Access',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Encryption keys are protected' },
        { label: 'How it works', content: 'Segregated storage and controlled key management' },
      ],
       demo: {
  supaDemoUrl: 'https://share.synthesia.io/embeds/videos/cbc231cc-b90a-48c2-ab64-532cdb327b4d?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
     
    },
  ],
};

// SLIDE 15 — EXAM OPERATIONS & RESOURCE MANAGEMENT
const operationsSection: VerticalSection = {
  id: 'exam-operations',
  title: 'Exam Operations & Resource Management',
  subtitle: 'Exam Operations & Resource Management',
  icon: Calendar,
  subFeatures: [
    {
      id: 'exam-calendar',
      title: 'Exam Calendar & Scheduling',
      heading: 'Exam Calendar & Scheduling',
      description: '',
      image: {
    src: '/brochure/images/tab-15.1.jpg',
    alt: 'Exam Calendar & Scheduling',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Centralised exam planning and visibility' },
      ],
       demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/1df715c5-cb42-46ad-8586-77444b219ac5?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
    {
      id: 'proctor-assignment',
      title: 'Automated / Manual Proctor Assignment',
      heading: 'Automated / Manual Proctor Assignment',
      description: '',
      image: {
    src: '/brochure/images/tab-15.2.jpg',
    alt: 'Automated / Manual Proctor Assignment',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Optimised use of human resources' },
      ],
      demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/44f60310-15f9-4565-999d-d6c1ef1fa0b7?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
    {
      id: 'high-risk-id',
      title: 'High-Risk Candidate Identification',
      heading: 'High-Risk Candidate Identification',
      description: '',
      image: {
    src: '/brochure/images/tab-15.3.jpg',
    alt: 'High-Risk Candidate Identification',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Focused review instead of blanket scrutiny' },
      ],
       demo: {
     supaDemoUrl: 'https://share.synthesia.io/embeds/videos/ef3a846d-7bce-45e4-b4d2-4c8987fe8418?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
  ],
};

// SLIDE 16 — ANALYTICS, REPORTING & LONG-TERM INTEGRITY
const analyticsSection: VerticalSection = {
  id: 'analytics-reporting',
  title: 'Analytics, Reporting & Long-Term Integrity',
  subtitle: 'Analytics, Reporting & Long-Term Integrity',
  icon: BarChart3,
  subFeatures: [
    {
      id: 'proview-index',
      title: 'Proview Index Score',
      heading: 'Proview Index Score',
      description: '',
      image: {
    src: '/brochure/images/tab-16.1.jpg',
    alt: 'Proview Index Score',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Structured, explainable risk categorisation' },
      ],
       demo: {
   supaDemoUrl: 'https://share.synthesia.io/embeds/videos/501de700-a54c-4528-a1cb-28dc8546c0af?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
     
    },
    {
      id: 'audit-reports',
      title: 'Exportable Audit-Ready Reports',
      heading: 'Exportable Audit-Ready Reports',
      description: '',
      image: {
    src: '/brochure/images/tab-16.2.jpg',
    alt: 'Exportable Audit-Ready Reports',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Regulator- and accreditation-ready documentation' },
      ],
       demo: {
   supaDemoUrl: 'https://share.synthesia.io/embeds/videos/aa425c2f-7e48-4f02-bbe1-d1f5aa53bc3b?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
    {
      id: 'cohort-analysis',
      title: 'Cohort-Level Integrity Analysis',
      heading: 'Cohort-Level Integrity Analysis',
      description: '',
      image: {
    src: '/brochure/images/tab-16.3.jpg',
    alt: 'Cohort-Level Integrity Analysis',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Integrity oversight across semesters' },
      ],
       demo: {
   supaDemoUrl: 'https://share.synthesia.io/embeds/videos/a019049d-94d9-4491-be53-4f7cf89fa588?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
    {
      id: 'repeat-risk',
      title: 'Repeat Risk Pattern Detection',
      heading: 'Repeat Risk Pattern Detection',
      description: '',
      image: {
    src: '/brochure/images/tab-16.4.png',
    alt: 'Repeat Risk Pattern Detection',
    variant: 'plain',
  },
      bullets: [
        { label: 'What it means', content: 'Identifies systemic issues' },
      ],
       demo: {
     supaDemoUrl: 'https://share.synthesia.io/embeds/videos/42b224a8-82e0-4526-8f74-cb9c2c0b51d9?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
    {
      id: 'consistency-mgmt',
      title: 'Consistency & Precedent Management',
      heading: 'Consistency & Precedent Management',
      description: '',
      image: {
    src: '/brochure/images/tab-16.5.svg',
    alt: 'Consistency & Precedent Management',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Ensures similar cases are treated consistently' },
      ],
       demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/72649753-3445-4d34-8c89-f6c77b1a7a78?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
  ],
};

// SLIDE 17 — ENTERPRISE SUPPORT & OPERATIONS
const enterpriseSection: VerticalSection = {
  id: 'enterprise-support',
  title: 'Enterprise Support & Operations',
  subtitle: 'Enterprise Support & Operations',
  icon: Headphones,
  subFeatures: [
    {
      id: 'live-support',
      title: '24×7 Live Exam Support',
      heading: '24×7 Live Exam Support',
      description: '',
      image: {
    src: '/brochure/images/tab-17.1.svg',
    alt: '24×7 Live Exam Support',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Institutions are supported during exam windows' },
        { label: 'How it works', content: 'Live monitoring, incident response, and escalation' },
      ],
       demo: {
     supaDemoUrl: 'https://share.synthesia.io/embeds/videos/e4f5e00a-b03e-4888-a8a7-12099c6e24bc?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
    {
      id: 'enterprise-sla',
      title: 'Defined Enterprise SLAs',
      heading: 'Defined Enterprise SLAs',
      description: '',
      image: {
    src: '/brochure/images/tab-17.2.jpg',
    alt: 'Defined Enterprise SLAs',
    variant: 'framed',
  },
      bullets: [
        { label: 'What it means', content: 'Clear operational commitments' },
        { label: 'How it works', content: 'Contractual SLAs covering uptime, response, and escalation' },
      ],
       demo: {
    supaDemoUrl: 'https://share.synthesia.io/embeds/videos/c889660f-4484-467b-b07b-a9701b7e6cf1?language=en',
    thumbnail: '/brochure/thumbnail.PNG',
  },
      
    },
  ],
};

// SLIDE 18 — WHY INSTITUTIONS CHOOSE PROCTORLY - All
const whyChooseAll: VerticalSection = {
  id: 'why-chooseAll',
  title: 'Why Institutions Choose Proctorly',
  subtitle: 'Why Institutions Choose Proctorly',
  icon: Award,
   showVideo: false,
  personas: ['all'],
  subFeatures: [
    {
      id: 'institution-benefits',
      title: 'What Institutions Gain',
      heading: 'What institutions gain with Proctorly',
      description: '',
      image: {
    src: '/brochure/images/tab-18.svg',
    alt: 'What institutions gain with Proctorly',
    variant: 'framed',
  },
      bullets: [
        { label: ' ', content: 'Fair exams without penalising honest candidates' },
        { label: ' ', content: 'Defensible results after publication' },
        { label: ' ', content: 'Reduced legal and reputational risk' },
        { label: ' ', content: 'Scalable operations without chaos' },
        { label: ' ', content: 'Academic authority always retained' },
      ],
      
    },
  ],
};



// SLIDE 18 — WHY INSTITUTIONS CHOOSE PROCTORLY - CoE
const whyChooseCoe: VerticalSection = {
  id: 'why-chooseCoe',
  title: 'Why CoEs Approve Proctorly',
  subtitle: 'What Institutions Gain',
  icon: Award,
   showVideo: false,
  personas: ['coe'],
  subFeatures: [
    {
      id: 'institution-benefits',
      title: 'What Institutions Gain',
      heading: 'Why CoEs Approve Proctorly',
      description: 'Proctorly helps Institutions deliver fair exams,defend results, manage scale, and retain academic authority.',
      image: {
    src: '/brochure/images/tab-18.1.jpg',
    alt: 'Why CoEs Approve Proctorly',
    variant: 'framed',
  },
      bullets: [
        { label: ' ', content: '	Ensures fairness and parity without penalising honest candidates' },
        { label: ' ', content: '	Preserves complete evidence timelines for post-result challenges' },
        { label: ' ', content: '	Keeps all academic decisions under Human-in-the-Loop control' },
        { label: ' ', content: '	Reduces reviewer overload and decision inconsistency at scale' },
        { label: ' ', content: '	Enables defensible outcomes without re-exams or ad-hoc committees' },
         { label: ' ', content: 'Provides long-term integrity insights across cohorts and semesters' },
        { label: ' ', content: '	Aligns exam security with academic ethics and student trust' },
      ],
    },
  ],
};

// SLIDE 18 — WHY INSTITUTIONS CHOOSE PROCTORLY - It head
const whyChooseIt: VerticalSection = {
  id: 'why-chooseIt',
  title: 'Why IT Heads Approve Proctorly',
  subtitle: 'What Institutions Gain',
  icon: Award,
   showVideo: false,
  personas: ['it-head'],
  subFeatures: [
    {
      id: 'institution-benefits',
      title: 'What Institutions Gain',
      heading: 'Why IT Heads Approve Proctorly',
      description: 'Proctorly lowers institutional riskwithout increasing IT ownership burden.',
      image: {
    src: '/brochure/images/tab-18.2.svg',
    alt: 'Why IT Heads Approve Proctorly',
    variant: 'framed',
  },
      bullets: [
  { label: ' ', content: 'Fits cleanly into existing LMS, IAM, and security architecture' },
  { label: ' ', content: 'Introduces no unmanaged data stores or biometric liabilities' },
  { label: ' ', content: 'Every action, config change, and decision is fully auditable' },
  { label: ' ', content: 'Reduces IT exposure during audits, disputes, and investigations' },
  { label: ' ', content: 'Prevents vendor lock-in through API-first, overlay design' },
  { label: ' ', content: 'Scales exam operations without manual firefighting' },
  { label: ' ', content: 'Behaves like infrastructure, not surveillance software' },
],
    },
  ],
};


// SLIDE 18 — WHY INSTITUTIONS CHOOSE PROCTORLY - Registrar
const whyChooseRegistrar: VerticalSection = {
  id: 'why-chooseRegistrar',
  title: 'Why Registrars / VCs Approve Proctorly',
  subtitle: 'What Institutions Gain',
  icon: Award,
   showVideo: false,
  personas: ['registrar'],
  subFeatures: [
    {
      id: 'institution-benefits',
      title: 'What Institutions Gain',
      heading: 'Why Registrars / VCs Approve Proctorly',
      description: 'Proctorly protects the institution-its governance, credibility, and authority.',
      image: {
    src: '/brochure/images/tab-18.3.jpg',
    alt: 'Why Registrars / VCs Approve Proctorly',
    variant: 'framed',
  },
      bullets: [
  { label: ' ', content: 'Establishes policy-driven examination governance across the institution' },
  { label: ' ', content: 'Makes the university audit-ready by design, not post-facto' },
  { label: ' ', content: 'Reduces legal, reputational, and escalation risk after results' },
  { label: ' ', content: 'Ensures consistent precedent across programs and semesters' },
  { label: ' ', content: 'Preserves academic autonomy under Human-in-the-Loop control' },
  { label: ' ', content: 'Aligns compliance with privacy, ethics, and student trust' },
  { label: ' ', content: 'Scales examinations without institutional embarrassment or crisis' },
],
    },
  ],
};


// SLIDE 19 — Book an enterprise demo
const bookDemo: VerticalSection = {
  id: 'book-demo',
  title: 'Pilot Collaboration',
  subtitle: 'Pilot Collaboration',
  icon: UserCheck,
  showVideo: false,
  personas: ['all'],
  subFeatures: [
    {
      id: 'book-demo',
      title: 'Pilot Collaboration',
      heading: 'Pilot Collaboration',
      description: 'We propose a structured pilot with Karunya University to evaluate Proctorly within your own examination environment.',
      subheading:'Pilot Scope:',
      image: {
    src: '/brochure/images/tab-19.png',
    alt: 'Pilot Collaboration',
    variant: 'plain',
  },
      bullets: [
       
        { label: ' ', content: 'One selected exam / cohort' },
         { label: ' ', content: 'Policy configuration aligned to your rules' },
          { label: ' ', content: 'Full operational support from our team' },
           { label: ' ', content: 'Post-exam governance & audit review' },

           
       
      ],
      miniheading:'Conduct a pilot. Review the outcomes. Decide based on evidence.',
      demo: {
    supaDemoUrl: 'https://app.supademo.com/demo/cml6gnosx00110s0iq12owxmt?preview=true&step=1',
    thumbnail: '/brochure/proctorly-three.png',
  },
    },
  ],
};


sections: [
   whatIsProctorly,
  whatIsProctorlySection,
  whyGovernanceAll,
  whyGovernanceCoe,
  whyGovernanceIT,
  whyGovernanceRegistrar,
  clientSection,
  frameworkSection,
  identitySection,
  environmentSection, 
  aiThreatSection,
  policySection,
  rbacSection, 
  regulatorySection,
  integrationSection,
  evaluationSection,
  privacySection,
  dataResidencySection,
  operationsSection,
  analyticsSection,
  enterpriseSection,
  whyChooseAll,
  whyChooseCoe,
  whyChooseIt,
  whyChooseRegistrar,
  bookDemo,
]



export const personaOrder: Record<Persona, string[]> = {
  all: [
    'proctorly',              //1
    'what-is-proctorly',      // 2
    'why-governanceAll',         // 3
    'clientspecific' ,             //4.1
    'framework',              // 4
    'identity-session',       // 5
    'environment-device',     // 6
    'ai-threat',              // 7
    'policy-governance',      // 8
    'rbac',                   // 9
    'regulatory',             // 10
    'lms-integration',        // 11
    'evaluation',             // 12
    'privacy-protection',     // 13
    'data-residency',         // 14
    'exam-operations',        // 15
    'analytics-reporting',    // 16
    'enterprise-support',     // 17
    'why-chooseAll',             // 18
    'book-demo'                  //19
  ],

  coe: [
     'proctorly',              //1
    'what-is-proctorly',      // 2
    'why-governanceCoe',         // 3
     'clientspecific' ,             //4.1
     'framework',             // 4
    'identity-session',       // 5
    'environment-device',     // 6
    'ai-threat',              // 7
    'policy-governance',      // 8
    'rbac',                   // 9
    'analytics-reporting',    // 16
    'regulatory',             // 10
    'exam-operations',        // 15
    'enterprise-support',     // 17
    'privacy-protection',     // 13
    'lms-integration',        // 11
    'evaluation',             // 12
    'data-residency',         // 14
    'why-chooseCoe',             // 18
    'book-demo'                  //19
  ],

  'it-head': [
     'proctorly',              //1
    'what-is-proctorly',      // 2
    'why-governanceIt',         // 3
     'clientspecific' ,             //4.1
     'framework',             // 4
    'lms-integration',        // 11
    'evaluation',             // 12
    'data-residency',         // 14
    'privacy-protection',     // 13
    'environment-device',     // 6
    'rbac',                   // 9
    'identity-session',       // 5
    'ai-threat',              // 7
    'policy-governance',      // 8
    'regulatory',             // 10
    'exam-operations',        // 15
    'enterprise-support',     // 17
    'analytics-reporting',    // 16
    'why-chooseIt',             // 18
    'book-demo'                  //19
  ],

  registrar: [
     'proctorly',              //1
    'what-is-proctorly',      // 2
    'why-governanceRegistrar',         // 3
     'clientspecific' ,             //4.1
     'framework',              // 4
    'policy-governance',      // 8
    'rbac',                   // 9
    'regulatory',             // 10
    'analytics-reporting',    // 16
    'identity-session',       // 5
    'environment-device',     // 6
    'ai-threat',              // 7
    'exam-operations',        // 15
    'enterprise-support',     // 17
    'privacy-protection',     // 13
    'data-residency',         // 14
    'lms-integration',        // 11
    'evaluation',             // 12
    'why-chooseRegistrar',             // 18
    'book-demo'                  //19
  ],
};





export const tabCategories: TabCategory[] = [
  {
    id: 'overview',
    label: 'Overview',
    sections: [whatIsProctorly,whatIsProctorlySection, whyGovernanceAll,
      whyGovernanceCoe,
      whyGovernanceIT,whyGovernanceRegistrar, frameworkSection, clientSection],
     
  },
  {
    id: 'security',
    label: 'Superior Security',
    sections: [identitySection, environmentSection, aiThreatSection],
  },
  {
    id: 'compliance',
    label: 'Audit-Ready Compliance',
    sections: [policySection, rbacSection, regulatorySection],
  },
  {
    id: 'integration',
    label: 'Seamless Integration',
    sections: [integrationSection, evaluationSection],
  },
  {
    id: 'privacy',
    label: 'Privacy-First',
    sections: [privacySection, dataResidencySection],
  },
  {
    id: 'operations',
    label: 'Operations & Analytics',
    sections: [operationsSection, analyticsSection, enterpriseSection, whyChooseAll,
      whyChooseCoe,
      whyChooseIt,
      whyChooseRegistrar,bookDemo,],
  },
];
