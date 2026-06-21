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

export type ProjectLink = { label: string; url: string }

export type Project = {
  name: string
  tag: string
  category: string
  description: string
  contributions: string[]
  stack: string[]
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    name: 'Paisewise',
    tag: 'Production',
    category: 'Personal Finance Platform',
    description:
      'A cross-platform personal finance app that helps users track and manage their financial activities through actionable tools and insights. Shipped end-to-end to both the App Store and Play Store.',
    contributions: [
      'Built mobile app screens and core user workflows from the ground up.',
      'Integrated REST APIs for live financial data and account syncing.',
      'Developed a library of reusable, composable UI components.',
      'Owned the full release lifecycle — signing, versioning and store listings.',
      'Improved performance and usability across the app.',
    ],
    stack: ['React Native', 'TypeScript', 'REST APIs', 'App Store', 'Play Store'],
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/paisewise/id6763265923',
      },
      {
        label: 'Play Store',
        url: 'https://play.google.com/store/apps/details?id=com.paisewise.app',
      },
    ],
  },
  {
    name: 'SynchFit',
    tag: 'Web + Mobile',
    category: 'Fitness & Trainer Management Platform',
    description:
      'A fitness ecosystem connecting users with professional trainers, while letting fitness businesses manage services, trainer availability and merchandise sales — all in one platform.',
    contributions: [
      'Built responsive interfaces across both web and mobile applications.',
      'Developed flows for trainer discovery, enrollment and service booking.',
      'Implemented merchandise browsing and purchasing workflows.',
      'Built the trainer portal: profiles, availability schedules, client interactions and merch sales.',
      'Integrated REST APIs for dynamic data and improved reusable component architecture.',
    ],
    stack: ['React.js', 'React Native', 'TypeScript', 'REST APIs'],
  },
  {
    name: 'Propacity',
    tag: 'Web App',
    category: 'Real Estate Lead Management',
    description:
      'A real estate platform that helps builders and property agents manage leads, customer interactions and end-to-end sales workflows from a single dashboard.',
    contributions: [
      'Developed frontend modules for builders and real estate agents.',
      'Built lead management dashboards with creation, tracking and follow-ups.',
      'Implemented customer information management and sales pipeline tracking.',
      'Integrated APIs for real-time data updates and built reusable UI components.',
      'Collaborated with backend teams to improve data flow and user experience.',
    ],
    stack: ['React.js', 'TypeScript', 'Redux', 'REST APIs'],
  },
  {
    name: 'NixAuth',
    tag: 'Security',
    category: 'Authentication & Identity Platform',
    description:
      'A secure identity and authentication platform delivering user access management, verification and role-based access control across web and mobile.',
    contributions: [
      'Developed authentication interfaces and end-to-end user workflows.',
      'Integrated secure, API-based authentication flows.',
      'Worked on role-based access control (RBAC) features.',
      'Implemented responsive, reusable UI components.',
      'Improved the security-focused user experience throughout.',
    ],
    stack: ['React.js', 'React Native', 'TypeScript', 'APIs', 'RBAC'],
  },
  {
    name: 'Proctoring',
    tag: 'Real-time',
    category: 'Online Examination Monitoring',
    description:
      'An online assessment platform built to conduct secure, remote examinations with live candidate monitoring and verification capabilities.',
    contributions: [
      'Developed the exam interface and candidate-facing workflows.',
      'Built responsive assessment screens for a range of devices.',
      'Integrated APIs for exam data management.',
      'Implemented UI flows for monitoring and verification processes.',
    ],
    stack: ['React.js', 'TypeScript', 'Web APIs'],
  },
  {
    name: 'Dhunguru',
    tag: 'Web + Mobile',
    category: 'Digital Learning Platform',
    description:
      'An e-learning platform providing digital content delivery and learning management, with course dashboards for students and instructors.',
    contributions: [
      'Developed learning modules and user dashboards.',
      'Integrated APIs for courses and user data.',
      'Created reusable components for consistent UI.',
      'Improved UI consistency and overall performance.',
    ],
    stack: ['React.js', 'React Native', 'APIs'],
  },
  {
    name: 'Sahayaq',
    tag: 'On-device AI',
    category: 'Service Platform & AI Voice Billing',
    description:
      'A service platform featuring a voice-first billing system — real-time, low-latency speech commands with an offline-first architecture for unreliable networks and on-device facial recognition.',
    contributions: [
      'Developed reusable React components and responsive layouts.',
      'Built a voice-first billing flow with low-latency speech commands.',
      'Designed an offline-first architecture for unreliable network conditions.',
      'Integrated on-device facial recognition and backend APIs.',
      'Optimized page performance and the end-to-end user experience.',
    ],
    stack: ['React.js', 'TypeScript', 'Google ML Kit', 'TensorFlow Lite', 'Offline-First'],
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
