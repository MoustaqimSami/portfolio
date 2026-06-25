export const profile = {
  name: 'Mohammad Moustaqim',
  role: 'Software Developer Co-op Candidate',
  location: 'Calgary, Alberta',
  availability: 'Available for Fall 2026 co-op',
  email: 'moustaqimsami1@gmail.com',
  github: 'https://github.com/MoustaqimSami',
  linkedin: 'https://linkedin.com/in/moustaqim1',
  resume: '/Mohammad_Moustaqim_Resume.pdf',
};

export const metrics = [
  { value: '3.84', label: 'GPA' },
  { value: '60+', label: 'client workflows' },
  { value: '50+', label: 'beta users' },
  { value: '200+', label: 'event participants' },
];

export const focusAreas = [
  'Full-stack product development',
  'AI-powered user workflows',
  'React Native and mobile experiences',
  'Backend systems, SQL, and REST APIs',
  'Workflow automation and operations tooling',
  'Competitive programming problem solving',
];

export const experiences = [
  {
    company: 'Hutton Safety Group',
    role: 'Software Engineering Intern',
    period: 'May 2026 — Aug 2026',
    summary:
      'Building client-facing workflow automation across safety operations, form processing, escalation alerts, and status tracking.',
    bullets: [
      'Consolidating 60+ client-specific workflows into one centralized platform using Python, PostgreSQL, and REST APIs.',
      'Automating routing, escalations, and status updates to reduce process completion time by about 70%.',
      'Working on computer vision flows that turn paper safety forms into structured database records.',
    ],
    tags: ['Python', 'PostgreSQL', 'REST APIs', 'Automation', 'Computer Vision'],
  },
  {
    company: 'TechStart',
    role: 'Full Stack Developer',
    period: 'Sept 2025 — Present',
    summary:
      'Developing Sterling, a mobile budgeting and analytics product with AI-powered insights for real beta users.',
    bullets: [
      'Building with React Native, TypeScript, PostgreSQL, AWS Amplify, and Supabase for 50+ beta users.',
      'Built a PyTorch-based finance assistant for spending patterns, insights, alerts, and reminders.',
      'Improved performance by about 40% through better data fetching, query design, and state management.',
    ],
    tags: ['React Native', 'TypeScript', 'PostgreSQL', 'Supabase', 'PyTorch'],
  },
];

export const projects = [
  {
    title: 'Hutton Workflow Platform',
    subtitle: 'Client operations platform',
    type: 'Professional work',
    problem:
      'Teams were relying on scattered forms, follow-ups, and unclear statuses across many client-specific processes.',
    solution:
      'Built workflow automation around routing, status visibility, escalation alerts, and digitized form processing.',
    impact: '60+ workflows centralized; about 70% faster process completion.',
    stack: ['Python', 'PostgreSQL', 'REST APIs', 'Automation'],
    accent: '01',
  },
  {
    title: 'Sterling',
    subtitle: 'AI budgeting app',
    type: 'Startup product',
    problem:
      'Budgeting tools often show numbers without helping users understand patterns or act on them.',
    solution:
      'Built a React Native finance app with AI-powered insights, alerts, reminders, and spending-pattern analysis.',
    impact: '50+ beta users; about 40% performance improvement.',
    stack: ['React Native', 'TypeScript', 'PostgreSQL', 'AWS Amplify', 'Supabase', 'PyTorch'],
    accent: '02',
  },
  {
    title: 'Healo',
    subtitle: 'Clinic workflow app',
    type: 'Product + ML project',
    problem:
      'Clinic appointment workflows can be repetitive, unclear, and frustrating for both staff and patients.',
    solution:
      'Designed a clinic management app and trained a booking-intent classifier from 1,000+ request samples.',
    impact: '92% model accuracy and 20 clinic interviews for workflow validation.',
    stack: ['PERN', 'scikit-learn', 'Figma', 'HCI'],
    accent: '03',
  },
  {
    title: 'Bnbnet',
    subtitle: 'Rental booking platform',
    type: 'Full-stack project',
    problem:
      'Rental platforms need reliable availability, payments, waitlists, and transaction-safe booking logic.',
    solution:
      'Built search, filtering, authentication, real-time bookings, chat, SQL-backed availability, and Stripe payments.',
    impact: 'Designed relational schemas and transaction-safe workflows.',
    stack: ['React', 'Node.js', 'SQL', 'Docker', 'Kubernetes', 'Stripe'],
    accent: '04',
  },
  {
    title: 'PerfectTemp',
    subtitle: 'Distributed thermostat',
    type: 'Embedded systems project',
    problem:
      'A single thermostat often fails to reflect comfort differences across rooms in a shared home.',
    solution:
      'Built distributed sensor nodes with separate sensing, communication, and heating-control responsibilities.',
    impact: 'FreeRTOS tasks, ESP-NOW communication, I²C sensors, and component-level debugging.',
    stack: ['C', 'ESP32', 'FreeRTOS', 'ESP-NOW', 'I²C'],
    accent: '05',
  },
];

export const skills = [
  {
    group: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Java', 'C', 'C++'],
  },
  {
    group: 'Product',
    items: ['React', 'React Native', 'Node.js', 'REST APIs', 'Responsive UI', 'User workflows'],
  },
  {
    group: 'Data & Cloud',
    items: ['PostgreSQL', 'MySQL', 'Supabase', 'AWS Amplify', 'Docker', 'Kubernetes'],
  },
  {
    group: 'AI / ML',
    items: ['PyTorch', 'scikit-learn', 'Classification', 'Time-series patterns', 'AI features'],
  },
];

export const principles = [
  {
    title: 'Make the messy part visible',
    text: 'I like understanding why a workflow is painful before trying to automate it. The boring details are usually where the real product lives.',
  },
  {
    title: 'Ship something people trust',
    text: 'A feature is not done when it works once. It is done when the next person can use it, debug it, and rely on it.',
  },
  {
    title: 'Use AI where it earns its place',
    text: 'AI is exciting when it fits naturally into a workflow. Otherwise, it is just a very confident button.',
  },
];
