export const profile = {
  name: 'Jiyaul Mustaffa',
  role: 'Senior React Native Engineer',
  tagline:
    'Building production-grade, real-time, AI-powered mobile experiences.',
  summary:
    'Senior React Native Engineer with 4+ years of experience building production-grade, real-time mobile applications. Specialized in voice-enabled systems, WebRTC-based communication, and on-device AI. Proven track record of shipping apps to the Play Store and App Store, with a strong focus on performance, animation, and end-to-end feature ownership.',
  email: 'mustafaziyaul568@gmail.com',
  phone: '+91 6202925437',
  linkedin: 'https://linkedin.com/in/jiyaulmustaffa',
  location: 'India',
}

export const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '40%', label: 'Performance Gain' },
  { value: '2', label: 'Stores Shipped' },
  { value: '1000s', label: 'Live Users Synced' },
]

export type SkillGroup = { title: string; items: string[] }

export const skills: SkillGroup[] = [
  { title: 'Frontend', items: ['React Native', 'React.js', 'Expo'] },
  { title: 'Languages', items: ['TypeScript', 'JavaScript', 'Java', 'Python'] },
  {
    title: 'Navigation',
    items: ['Expo Router (file-based)', 'React Navigation'],
  },
  {
    title: 'Mobile UI/UX',
    items: ['Gluestack', 'NativeWind', 'Reanimated', 'Gesture Handler'],
  },
  { title: 'Real-time', items: ['WebRTC', 'WebSockets'] },
  {
    title: 'AI / ML',
    items: ['Google ML Kit', 'TensorFlow Lite', 'NLP (NLTK, TF-IDF)'],
  },
  {
    title: 'Architecture',
    items: ['Event-Driven Systems', 'Offline-First Design'],
  },
  { title: 'Tools', items: ['Git', 'Docker', 'VS Code'] },
]

export type Experience = {
  role: string
  company: string
  period: string
  points: string[]
}

export const experience: Experience[] = [
  {
    role: 'SDE-III · Senior React Native Developer',
    company: 'Panicle Tech Pvt Ltd',
    period: 'Oct 2023 — Present',
    points: [
      'Built scalable mobile apps with React Native, TypeScript and Expo.',
      'Designed modular navigation architecture using Expo Router (file-based routing).',
      'Implemented real-time communication with WebRTC for proctoring & monitoring.',
      'Built WebSocket systems enabling live data sync across thousands of users.',
      'Designed an offline-first voice billing system using Google ML Kit.',
      'Built on-device AI pipelines (speech + facial recognition) with ML Kit & TFLite.',
      'Improved application performance by 40% through rendering optimization.',
      'Owned end-to-end delivery of critical features from design to production rollout.',
    ],
  },
  {
    role: 'Frontend Developer · React / React Native',
    company: 'Panicle Tech Pvt Ltd',
    period: 'Mar 2022 — Oct 2023',
    points: [
      'Built scalable UI features using React Native and React.js.',
      'Implemented state management with Redux and the Context API.',
      'Integrated REST APIs and improved UX performance.',
      'Optimized rendering and reduced unnecessary re-renders.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Qubit Softwares',
    period: 'Oct 2021 — Mar 2022',
    points: [
      'Developed responsive web applications with modern JavaScript frameworks.',
      'Improved UI performance and overall user experience.',
    ],
  },
]

export type Project = {
  name: string
  tag: string
  description: string
  stack: string[]
  link?: { label: string; url: string }
}

export const projects: Project[] = [
  {
    name: 'AI Voice Billing — Sahayaq',
    tag: 'On-device AI',
    description:
      'Voice-first billing system with real-time, low-latency speech commands and an offline-first architecture for unreliable networks. Integrated on-device facial recognition.',
    stack: ['Google ML Kit', 'TensorFlow Lite', 'Offline-First', 'React Native'],
  },
  {
    name: 'NixAuth — Web + Mobile',
    tag: 'Security',
    description:
      'Secure authentication platform with RBAC and biometric integrations. Real-time WebRTC proctoring, external fingerprint & IRIS SDKs, and on-device facial recognition.',
    stack: ['WebRTC', 'RBAC', 'TensorFlow Lite', 'Biometrics'],
  },
  {
    name: 'Paisewise',
    tag: 'Production',
    description:
      'Cross-platform finance application shipped to both the Play Store and App Store. Managed the full release lifecycle — signing, versioning, store listing and updates.',
    stack: ['React Native', 'App Store', 'Play Store', 'CI/CD'],
    link: { label: 'View on stores', url: '#' },
  },
]

export const education = {
  degree: 'B.Tech in Computer Science',
  school: 'Guru Gobind Singh Technical Campus',
  period: '2020 — 2024',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
