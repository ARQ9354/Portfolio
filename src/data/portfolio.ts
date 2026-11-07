export const personal = {
  name: 'Piyush Vishvkarma',
  role: 'ML/AI Engineer',
  tagline: 'I build intelligent applications that turn data into delightful experiences.',
  bio: 'I am an ML/AI student passionate about building intelligent applications. I enjoy working across the stack — from training models and crafting recommendation engines to shipping polished web experiences.',
  email: 'Piyushvishvkarma9@gmail.com',
  location: 'Delhi, India',
  availability: 'Open to internships & opportunities',
  social: {
    github: 'https://github.com/ARQ9354',
    linkedin: 'https://www.linkedin.com/in/piyush-v-197aa924a/',
    twitter: 'https://twitter.com/',
    dribbble: 'https://dribbble.com/',
  },
  resumeUrl: '#',
}

export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  image: string
  live?: string
  github?: string
  featured?: boolean
  year: string
}

export const projects: Project[] = [
  {
    id: 'laptopiq',
    title: 'LaptopIQ',
    description:
      'AI-powered laptop recommendation engine. Content-based filtering with cosine similarity over 796+ laptops, plus price predictor, comparison, deal analyzer, performance score, and an AI assistant.',
    tags: ['Python', 'Flask', 'scikit-learn', 'NLTK', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&q=80',
    live: 'https://new-laptop.onrender.com/',
    github: 'https://github.com/ARQ9354/new_laptop',
    featured: true,
    year: '2025',
  },
  {
    id: 'nebula',
    title: 'Nebula Analytics',
    description: 'Real-time analytics dashboard with streaming data pipelines, custom charting engine, and collaborative workspaces.',
    tags: ['React', 'TypeScript', 'WebSockets', 'D3.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
    live: '#',
    github: '#',
    featured: true,
    year: '2025',
  },
  {
    id: 'aurora',
    title: 'Aurora Design System',
    description: 'A comprehensive, accessible component library with 80+ components, theming engine, and Figma sync.',
    tags: ['React', 'Storybook', 'Tailwind', 'Radix'],
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&q=80',
    live: '#',
    github: '#',
    featured: true,
    year: '2025',
  },
  {
    id: 'pulse',
    title: 'Pulse E-commerce',
    description: 'Headless commerce platform with 3D product configurator, AR previews, and sub-100ms checkout.',
    tags: ['Next.js', 'Three.js', 'Stripe', 'Prisma'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80',
    live: '#',
    github: '#',
    featured: true,
    year: '2024',
  },
  {
    id: 'orbit',
    title: 'Orbit Task Manager',
    description: 'Offline-first productivity app with CRDT sync, natural language task parsing, and focus analytics.',
    tags: ['React Native', 'SQLite', 'Rust', 'WASM'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=900&q=80',
    live: '#',
    github: '#',
    year: '2024',
  },
  {
    id: 'lumen',
    title: 'Lumen AI Studio',
    description: 'No-code AI workflow builder with drag-and-drop pipelines, eval harness, and one-click deploy.',
    tags: ['Vue', 'Python', 'FastAPI', 'OpenAI'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80',
    live: '#',
    github: '#',
    year: '2023',
  },
  {
    id: 'forge',
    title: 'Forge CLI',
    description: 'Developer CLI for scaffolding, migrations, and infra provisioning with plugin ecosystem.',
    tags: ['Node.js', 'Go', 'Docker', 'Terraform'],
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=900&q=80',
    github: '#',
    year: '2023',
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  description: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Senior Full-Stack Engineer',
    company: 'Nebula Labs',
    period: '2022 — Present',
    description: 'Leading frontend architecture and design systems for a Series B analytics startup.',
    highlights: ['Scaled dashboard to 2M+ monthly users', 'Cut bundle size by 42%', 'Mentored team of 6 engineers'],
  },
  {
    role: 'Full-Stack Engineer',
    company: 'Aurora Studio',
    period: '2020 — 2022',
    description: 'Built and shipped multiple client products across fintech and e-commerce.',
    highlights: ['Delivered 12+ production apps', 'Introduced component-driven workflow', 'Reduced deploy time by 60%'],
  },
  {
    role: 'Frontend Developer',
    company: 'Pixel & Code',
    period: '2018 — 2020',
    description: 'Crafted marketing sites and interactive experiences for global brands.',
    highlights: ['Won Awwwards SOTD', 'Built WebGL hero experiences', 'Led accessibility overhaul'],
  },
]

export const skills = [
  'Python', 'Machine Learning', 'scikit-learn', 'NLTK', 'Flask', 'Pandas',
  'NumPy', 'SQL', 'Data Analysis', 'React', 'TypeScript', 'Tailwind CSS',
  'Git', 'Docker', 'Figma', 'REST APIs',
]

export const stats = [
  { label: 'Projects Built', value: '3+' },
  { label: 'ML Models', value: '5+' },
  { label: 'Tools Mastered', value: '12+' },
  { label: 'Open Source PRs', value: '4' },
]