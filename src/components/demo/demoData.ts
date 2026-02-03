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
  CheckCircle,
} from 'lucide-react';
import { FeatureItem } from './FeatureContent';
import { VerticalTab } from './VerticalTabs';

export interface TabCategory {
  id: string;
  label: string;
  features: FeatureItem[];
}

// Tab 1: Overview & Framework (Slides 1-4)
const overviewFeatures: FeatureItem[] = [
  {
    id: 'what-is-proctorly',
    title: 'What is Proctorly',
    subtitle: 'Platform Overview',
    icon: Layers,
    heading: 'Proctorly is not a monitoring tool',
    description: 'It is a policy-driven examination governance platform that puts institutions in control while maintaining human accountability throughout the process.',
    bullets: [
      'Institutions define exam rules and policies',
      'Proctorly enforces policies consistently across all examinations',
      'Humans retain complete academic authority over decisions',
      'Evidence is preserved for audits, appeals, and disputes',
      'Transparent, inspectable governance framework',
    ],
    demoLinks: [
      { label: 'Policy Configuration', url: '#' },
      { label: 'Governance Dashboard', url: '#' },
    ],
    ctaText: 'Explore Platform',
    ctaSecondary: 'View Documentation',
  },
  {
    id: 'why-governance',
    title: 'Why Governance Matters',
    subtitle: 'Risk Management',
    icon: Target,
    heading: 'Online exams create governance risk, not just cheating risk',
    description: 'Monitoring alone is not sufficient. Institutions need comprehensive governance to ensure fairness, consistency, and defensibility.',
    bullets: [
      'Institutions are accountable for fairness and consistency',
      'Results must be defensible after publication',
      'Audits, appeals, and accreditation require complete evidence',
      'Regulatory compliance demands systematic approach',
      'Stakeholder trust depends on transparent processes',
    ],
    demoLinks: [
      { label: 'Compliance Dashboard', url: '#' },
      { label: 'Audit Reports', url: '#' },
    ],
    ctaText: 'Learn More',
  },
];

// Tab 2: Identity & Session Integrity (Slide 5)
const identityFeatures: FeatureItem[] = [
  {
    id: 'liveness-detection',
    title: 'Liveness Detection',
    subtitle: 'Real Human Verification',
    icon: Eye,
    heading: 'Ensures a real human is present',
    description: 'Advanced liveness detection uses passive biometric cues to verify that a real person is taking the exam, preventing the use of photos, videos, or other spoofing attempts.',
    bullets: [
      'Uses passive cues like blinking and head movement',
      'No active user participation required',
      'Real-time continuous verification throughout exam',
      'Anti-spoofing protection against photos and videos',
      'Privacy-preserving detection algorithms',
    ],
    demoLinks: [
      { label: 'Liveness Detection – Live Exam View', url: '#' },
    ],
    ctaText: 'Try Demo',
  },
  {
    id: 'facial-verification',
    title: 'Continuous Verification',
    subtitle: 'Identity Assurance',
    icon: Fingerprint,
    heading: 'Prevents impersonation during exams',
    description: 'Continuous facial verification ensures that the person who started the exam is the same person throughout the entire session, maintaining identity integrity.',
    bullets: [
      'Verifies identity throughout the entire session',
      'Prevents mid-exam impersonation attempts',
      'Correlation with registered student identity',
      'Timestamped verification checkpoints',
      'Alert system for identity anomalies',
    ],
    demoLinks: [
      { label: 'Continuous Identity Timeline', url: '#' },
    ],
    ctaText: 'View Demo',
  },
  {
    id: 'concurrent-login',
    title: 'Concurrent Login Detection',
    subtitle: 'Session Security',
    icon: Globe,
    heading: 'Prevents multiple simultaneous sessions',
    description: 'Detects and prevents the same candidate from having multiple exam sessions running simultaneously, correlating device and location signals for comprehensive security.',
    bullets: [
      'Prevents multiple exam sessions by same candidate',
      'Correlates device fingerprints and location signals',
      'Real-time session monitoring across platforms',
      'Instant alerts for concurrent access attempts',
      'Complete session history logging',
    ],
    demoLinks: [
      { label: 'Concurrent Session Alert', url: '#' },
    ],
    ctaText: 'See How It Works',
  },
  {
    id: 'geo-tagging',
    title: 'Geo-Tagging',
    subtitle: 'Location Verification',
    icon: MapPin,
    heading: 'Detects geographic anomalies with consent',
    description: 'Consent-based geo-tagging detects geographic anomalies while respecting candidate privacy, providing an additional layer of exam security.',
    bullets: [
      'Operates with explicit candidate consent',
      'Detects impossible travel scenarios',
      'Geographic pattern analysis',
      'Anomaly flagging for review',
      'Privacy-first implementation',
    ],
    demoLinks: [
      { label: 'Geo-Anomaly Dashboard', url: '#' },
    ],
    ctaText: 'Explore Feature',
  },
];

// Tab 3: Environment & Device Security (Slide 6)
const environmentFeatures: FeatureItem[] = [
  {
    id: 'browser-lock',
    title: 'Advanced Browser Lock',
    subtitle: 'Environment Control',
    icon: Lock,
    heading: 'Comprehensive browser lockdown',
    description: 'Restricts all potential data exfiltration methods including copy-paste, screenshots, keyboard shortcuts, and clipboard access during examinations.',
    bullets: [
      'Blocks copy-paste and clipboard operations',
      'Prevents screenshots and screen recording',
      'Disables keyboard shortcuts and function keys',
      'Restricts browser navigation and tab switching',
      'Full-screen enforcement with exit detection',
    ],
    demoLinks: [
      { label: 'Browser Lock Enforcement', url: '#' },
    ],
    ctaText: 'View Demo',
  },
  {
    id: 'secondary-device',
    title: 'Secondary Device Detection',
    subtitle: 'Multi-Device Security',
    icon: MonitorSmartphone,
    heading: 'Detects unauthorized secondary devices',
    description: 'Identifies the presence of unauthorized phones, tablets, or other devices that could be used for cheating during the examination.',
    bullets: [
      'Detects unauthorized phones and tablets',
      'Audio-based secondary device detection',
      'Visual monitoring for additional screens',
      'Bluetooth and wireless signal analysis',
      'Flagging with evidence capture',
    ],
    demoLinks: [
      { label: 'Secondary Device Flag', url: '#' },
    ],
    ctaText: 'Learn More',
  },
  {
    id: 'mouse-analysis',
    title: 'Mouse Movement Analysis',
    subtitle: 'Behavior Detection',
    icon: MousePointer,
    heading: 'Identifies non-human interaction patterns',
    description: 'Advanced behavioral analysis detects scripted or automated mouse movements that could indicate the use of bots or external assistance.',
    bullets: [
      'Detects non-human movement patterns',
      'Identifies scripted or automated behavior',
      'Pattern analysis for exam assistance tools',
      'Baseline behavior comparison',
      'Anomaly detection with scoring',
    ],
    demoLinks: [
      { label: 'Behaviour Analysis View', url: '#' },
    ],
    ctaText: 'See Analysis',
  },
  {
    id: 'secure-browser',
    title: 'Zero-Installation Browser',
    subtitle: 'Easy Deployment',
    icon: Download,
    heading: 'No software downloads or admin permissions required',
    description: 'Candidates can start exams instantly without downloading software or requiring administrative permissions, reducing technical barriers and support overhead.',
    bullets: [
      'No software installation required',
      'Works without admin permissions',
      'Instant exam start capability',
      'Cross-platform compatibility',
      'Reduced IT support requirements',
    ],
    demoLinks: [
      { label: 'Candidate Launch Flow', url: '#' },
    ],
    ctaText: 'Try Launch Flow',
  },
];

// Tab 4: AI-Driven Detection (Slide 7)
const aiFeatures: FeatureItem[] = [
  {
    id: 'behavioral-anomaly',
    title: 'Behavioural Anomaly Detection',
    subtitle: 'AI-Powered Analysis',
    icon: Brain,
    heading: 'Flags suspicious patterns without auto-penalties',
    description: 'Sophisticated AI analyzes candidate behavior to identify suspicious patterns while ensuring no automated academic decisions are made—humans always decide.',
    bullets: [
      'Flags suspicious patterns for human review',
      'No automated academic penalties',
      'Machine learning-based pattern recognition',
      'Continuous model improvement',
      'Transparent scoring methodology',
    ],
    demoLinks: [
      { label: 'Risk Signal Timeline', url: '#' },
    ],
    ctaText: 'View Detection',
    ctaSecondary: 'Learn About HITL',
  },
  {
    id: 'audio-analysis',
    title: 'NLP-Based Audio Analysis',
    subtitle: 'Voice Detection',
    icon: AudioLines,
    heading: 'Detects external voice assistance',
    description: 'Natural Language Processing analyzes audio to detect possible voice assistants, external helpers, or other verbal assistance during examinations.',
    bullets: [
      'Detects possible voice assistants',
      'Identifies external verbal help',
      'Speech-to-text analysis for review',
      'Background noise classification',
      'Ambient sound pattern detection',
    ],
    demoLinks: [
      { label: 'Audio Event Review', url: '#' },
    ],
    ctaText: 'Explore Audio Analysis',
  },
  {
    id: 'adversarial-attack',
    title: 'Adversarial Attack Detection',
    subtitle: 'System Integrity',
    icon: AlertTriangle,
    heading: 'Identifies system tampering attempts',
    description: 'Detects sophisticated attacks including audio manipulation, virtual machine usage, and other system-level tampering attempts.',
    bullets: [
      'Identifies audio manipulation attempts',
      'Detects virtual machine environments',
      'System tampering detection',
      'Remote desktop tool identification',
      'Integrity verification throughout exam',
    ],
    demoLinks: [
      { label: 'System Integrity Alerts', url: '#' },
    ],
    ctaText: 'See Alerts',
  },
];

// Tab 5: Policy-Driven Governance (Slide 8)
const governanceFeatures: FeatureItem[] = [
  {
    id: 'policy-configuration',
    title: 'Institution-Defined Policies',
    subtitle: 'Custom Rules',
    icon: Settings,
    heading: 'Policies configurable per exam, program, or cohort',
    description: 'Complete control over proctoring policies allows institutions to tailor security measures to specific examination requirements and risk profiles.',
    bullets: [
      'Configure policies per exam or program',
      'Cohort-specific rule sets',
      'Flexible security level adjustment',
      'Template-based policy creation',
      'Version control for policy changes',
    ],
    demoLinks: [
      { label: 'Policy Configuration Panel', url: '#' },
    ],
    ctaText: 'Configure Policies',
  },
  {
    id: 'hitl-review',
    title: 'Human-in-the-Loop Review',
    subtitle: 'Human Authority',
    icon: Users,
    heading: 'AI assists, humans decide',
    description: 'All flagged incidents are reviewed by human proctors who make the final academic decisions, ensuring fairness and accountability.',
    bullets: [
      'AI provides analysis and recommendations',
      'Human reviewers make all decisions',
      'Complete evidence presentation',
      'Structured review workflows',
      'Decision audit trail',
    ],
    demoLinks: [
      { label: 'Reviewer Decision Flow', url: '#' },
    ],
    ctaText: 'See Review Process',
    ctaSecondary: 'HITL Documentation',
  },
  {
    id: 'audit-trail',
    title: 'Complete Audit Trail',
    subtitle: 'Compliance Ready',
    icon: ClipboardList,
    heading: 'All actions logged and time-stamped',
    description: 'Comprehensive audit logging captures every action, decision, and event with precise timestamps for complete accountability and compliance.',
    bullets: [
      'Every action logged with timestamps',
      'Immutable audit records',
      'Exportable compliance reports',
      'Accreditation-ready documentation',
      'Long-term evidence preservation',
    ],
    demoLinks: [
      { label: 'Audit Log Export', url: '#' },
    ],
    ctaText: 'View Audit Logs',
  },
];

export const tabCategories: TabCategory[] = [
  {
    id: 'all',
    label: 'All Features',
    features: [...overviewFeatures, ...identityFeatures.slice(0, 2), ...environmentFeatures.slice(0, 2), ...aiFeatures.slice(0, 1), ...governanceFeatures.slice(0, 1)],
  },
  {
    id: 'overview',
    label: 'Overview',
    features: overviewFeatures,
  },
  {
    id: 'identity',
    label: 'Identity & Session',
    features: identityFeatures,
  },
  {
    id: 'environment',
    label: 'Environment Security',
    features: environmentFeatures,
  },
  {
    id: 'ai-detection',
    label: 'AI Detection',
    features: aiFeatures,
  },
  {
    id: 'governance',
    label: 'Governance',
    features: governanceFeatures,
  },
];

export const getVerticalTabs = (features: FeatureItem[]): VerticalTab[] => {
  return features.map((feature) => ({
    id: feature.id,
    title: feature.title,
    subtitle: feature.subtitle,
    icon: feature.icon,
  }));
};
