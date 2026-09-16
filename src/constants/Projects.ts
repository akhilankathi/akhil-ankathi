import type { Project } from "../models";

export const projects: Project[] = [
  {
    name: "Market Scan",
    duration: "March 2026 - Present",
    description:
      "A frontend-driven automotive comparison platform built to analyze competing vehicle configurations, makes, and models through advanced multi-entity workflows.",
    highlights: [
      "Spearheaded the frontend implementation for an advanced comparison framework capable of processing complex automotive data schemas.",
      "Engineered interactive UX workflows with dense data grids, saved user views, and multi-tier detail layouts for granular comparison analytics.",
      "Built a modular Micro-frontend workspace using Rspack and Rsbuild to accelerate compilation times and enable independent feature deployments.",
      "Used TanStack Query and Zustand to reduce server-state redundancy, improve caching, and synchronize local UI state across micro-modules."
    ],
    technologies: ["React.js", "TypeScript", "Zustand", "TanStack Query", "Rspack", "Rsbuild", "Tailwind CSS", "shadcn/ui"]
  },
  {
    name: "Pay Equity",
    duration: "Dec 2024 - Present",
    description:
      "An enterprise SaaS platform for processing demographic and salary data to identify compensation disparities and simulate pay equity scenarios.",
    highlights: [
      "Engineered an end-to-end platform using React, TypeScript, and Micro-frontends to support large-scale compensation data workflows.",
      "Built data-heavy visualization dashboards with Zustand and secure NestJS APIs backed by MongoDB for real-time analytics experiences.",
      "Collaborated with backend teams to deliver secure data ingestion pipelines, automated reporting, and decision-focused workflows.",
      "Applied design system components and UX iteration to simplify complex pay-equity simulations for enterprise users."
    ],
    technologies: ["React.js", "TypeScript", "Micro Frontends", "Zustand", "NestJS", "MongoDB", "Tailwind CSS"]
  },
  {
    name: "Pay Analytics",
    duration: "Sep 2023 - Nov 2024",
    description:
      "A salary-benchmark analytics product built to surface pay gaps, improve talent retention, and deliver real-time market insights.",
    highlights: [
      "Led JavaScript architecture and code-splitting work to modernize a legacy compensation platform and improve performance by 30%.",
      "Built scalable state flows with Zustand and optimized micro-frontend delivery using Vite to support faster application loads.",
      "Mentored developers on modular UI practices and enforced TypeScript best practices for maintainable code quality.",
      "Collaborated with backend teams to align UI and API integration for a more streamlined analytics experience."
    ],
    technologies: ["React.js", "JavaScript", "TypeScript", "Vite", "Zustand", "NestJS", "Micro Frontends"]
  },
  {
    name: "Vehicle Dealership App",
    duration: "May 2022 - Aug 2023",
    description:
      "A digital platform to automate vehicle registration, dealer onboarding, and lienholder inquiries across 50+ dealership partners.",
    highlights: [
      "Built reusable Redux-powered components for onboarding, permissions, and registration workflows across dealership operations.",
      "Integrated .NET Core REST APIs and PostgreSQL-backed services to enable real-time validation and temp card issuance automation.",
      "Reduced manual effort and registration errors by improving role-based workflows and cross-functional data synchronization.",
      "Delivered responsive, accessible UI patterns that supported high-volume registration operations and stakeholder collaboration."
    ],
    technologies: ["React.js", "TypeScript", "Redux", "Redux-Toolkit", ".NET Core", "PostgreSQL", "REST API"]
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
      "Node.js",
      "Express.js",
      "MongoDB",
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
      "Node.js",
      "Express.js",
      "MongoDB",
      "Zustand",
      "Lucide-react",
      "Context API",
      "Vercel",
    ],
  },
]
