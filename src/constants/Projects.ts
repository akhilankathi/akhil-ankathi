import type { Project } from "../models";

export const projects: Project[] = [
  {
    name: "Pay Analytics",
    duration: "Sep 2023 - Present",
    description:
      "A SaaS-based analytics dashboard designed to identify and resolve pay gaps using real-time compensation insights and benchmarks.",
    highlights: [
      "Led frontend architecture using React.js, TypeScript, and modular components, improving scalability and reusability",
      "Boosted performance by 30% through code splitting, lazy loading, and Node.js optimizations",
      "Collaborated with design and backend teams to translate Figma wireframes and streamline REST and serverless API integrations",
      "Implemented responsive UI with LESS/CSS, aligned with design tokens and pixel-perfect requirements",
      "Deployed updates via AWS CI/CD pipelines, improving delivery efficiency"
    ],
    technologies: ["React.js", "TypeScript", "Zustand", "NestJS", "Vite", "LESS", "AWS", "CI/CD"]
  },
  {
    name: "Vehicle Dealership App",
    duration: "May 2022 - Aug 2023",
    description:
      "A platform to automate vehicle registration, dealer onboarding, and lienholder inquiries across 50+ dealerships.",
    highlights: [
      "Built reusable components for dealer launch, permission handling, and inquiry modules",
      "Implemented features to register all types of vehicles and generate temporary registration cards",
      "Reduced load times by 30% through code optimization and modularization",
      "Integrated REST APIs, resolved production bugs, and improved app responsiveness",
      "Wrote unit and integration tests to maintain code quality"
    ],
    technologies: ["React.js", "TypeScript", "Redux", "Redux-Toolkit", ".NET Core", "REST API"]
  },
  {
    name: "First Match App (Healthcare)",
    duration: "Dec 2021 - Apr 2022",
    description:
      "A healthcare tool for managing clients and predicting outcomes based on configurable sections and questions.",
    highlights: [
      "Built features to create, edit, and delete dynamic forms, organizations, and sections",
      "Integrated client redirection and score prediction features",
      "Used Redux Toolkit and persist for state and session management",
      "Worked closely with backend teams for API integration and bug fixing"
    ],
    technologies: ["React.js", "Redux Toolkit", "JavaScript", "REST API"]
  },
  {
    name: "Shophub App (E-Commerce)",
    duration: "Oct 2020 - Nov 2021",
    description:
      "An eCommerce platform supporting category-based shopping, payments, and order tracking.",
    highlights: [
      "Developed modules like login, add to cart, checkout, and admin panel",
      "Integrated Stripe for secure payments and implemented user authentication",
      "Built reusable components for product management and shopping workflow",
      "Improved performance with Redux Toolkit and optimized load times"
    ],
    technologies: ["React.js", "Redux Toolkit", "Stripe API", "JavaScript", "Bootstrap"]
  },
  {
    name: "E-Pratibha (Education Platform)",
    duration: "Jan 2020 - Sep 2020",
    description:
      "An e-learning platform connecting students with tutors, offering video sessions and content delivery.",
    highlights: [
      "Implemented login authentication and reusable component architecture",
      "Integrated Zoom Web SDK for virtual tutoring and Stripe for payments",
      "Optimized data flow using Redux Toolkit, improving application performance"
    ],
    technologies: ["React.js", "Redux Toolkit", "Zoom Web SDK", "Stripe API", "JavaScript"]
  }
];


export const personalProjects = [
  {
    name: "Frontend Learning Hub",
    url: "https://frontendlearninghub.netlify.app/",
    duration: "Personal Project · 2024",
    description:
      "A curated platform for frontend developers to learn React, JavaScript, UI engineering, and interview concepts in a structured way.",
    highlights: [
      "Built a scalable, config-driven resource system",
      "Implemented lightweight global state using Zustand & Redux patterns",
      "Optimized UI performance and component reusability",
      "Focused on clean UX for self-paced learning",
    ],
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Redux",
      "Zustand",
      "Tailwind CSS",
      "Lucide-react",
      "React Router",
      "Netlify",
    ],
  },
  {
    name: "Avicii Music App",
    duration: "Personal Project · 2023",
    url: "https://avicii-eight.vercel.app",
    description:
      "A Spotify-inspired tribute music app designed to deliver immersive UI, smooth animations, and playlist-driven user experience.",
    highlights: [
      "Designed animation-heavy UI with smooth transitions",
      "Handled complex UI state for media-driven interactions",
      "Built reusable layout and navigation components",
      "Focused on visual polish and UX consistency",
    ],
    technologies: [
      "React",
      "Vite",
      "Redux",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide-react",
      "Context API",
      "Vercel",
    ],
  },
]
