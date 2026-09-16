import { ArrowRight, Award, Code, Download, Sparkles, TrendingUp, Users, Github, Linkedin, Mail } from "lucide-react"
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { getProjectsList } from "../services/projects.service";
import MYProfile from '../assets/akhil_profile.jpg';

export const Home = () => {
    const navigate = useNavigate()

    // to activate the onrender API to trigger 
    const getProjectsListFunc = async () => {
        try {
            let response: any = await getProjectsList()
            console.log("onrender API is triggered and active now ", response)
        } catch (error) {
            console.log(error)
        }


    }

    useEffect(() => {
        getProjectsListFunc()
    }, [])

    // const downloadResumeFunc = async()=>{
    //     let reponse = await downloadResumeService()
    // }

    return (
        <div id="home" className="min-h-screen bg-[#101713] relative overflow-hidden max-w-full w-full left-0 right-0 home-shell">
            {/* Animated background blobs */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-96 h-96 bg-lime-300/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-300/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-emerald-400/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    ></div>
                ))}
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    25% { transform: translateY(-20px) translateX(10px); }
                    50% { transform: translateY(-40px) translateX(-10px); }
                    75% { transform: translateY(-20px) translateX(5px); }
                }
                @keyframes glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(198, 255, 74, 0.2); }
                    50% { box-shadow: 0 0 40px rgba(198, 255, 74, 0.45), 0 0 60px rgba(141, 235, 255, 0.2); }
                }
            `}</style>

            <div className="relative z-10 container mx-auto px-6 py-10 md:pt-32 min-h-screen flex items-center">
                <div className="w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left side - Content */}
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center hero-kicker">
                                <Sparkles className="w-4 h-4 text-cyan-400 mr-2 animate-pulse" />
                                <span className="text-cyan-300 text-sm font-medium">Available for new opportunities</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight hero-title">
                                <span className="text-white">Hi, I'm</span>
                                <br />
                                <span className="hero-title-accent">
                                    Akhil Ankathi
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-300 mb-4">
                                <span className="hero-role">Engineering Specialist</span>
                            </p>

                            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
                                Senior Engineer with <span className="text-[#c6ff4a] font-semibold">6.8 years</span> of experience building scalable SaaS products, enterprise data platforms, and high-performance frontend architectures using React.js, TypeScript, Node.js, and modern micro frontend tooling.
                            </p>

                            {/* Social links */}
                            <div className="flex gap-4 mb-8 hero-socials">
                                <a href="https://github.com/akhilankathi" target="_blank" rel="noopener noreferrer"
                                  aria-label="Open Akhil Ankathi's GitHub profile"
                                    className="hero-social-link">
                                    <Github className="w-5 h-5 text-gray-400" />
                                </a>
                                <a href="https://www.linkedin.com/in/akhilvarmaankathi" target="_blank" rel="noopener noreferrer"
                                  aria-label="Open Akhil Ankathi's LinkedIn profile"
                                    className="hero-social-link">
                                    <Linkedin className="w-5 h-5 text-gray-400" />
                                </a>
                                <a href="mailto:akhilankathi@gmail.com"
                                  aria-label="Email Akhil Ankathi"
                                    className="hero-social-link">
                                    <Mail className="w-5 h-5 text-gray-400" />
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => navigate('/projects')}
                                    className="group hero-cta hero-cta-primary"
                                >
                                    View My Work
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={() => navigate('/contact')}
                                    className="group hero-cta hero-cta-secondary"
                                >
                                    <Download className="mr-2 w-5 h-5" />
                                    Get In Touch
                                </button>
                            </div>
                        </div>

                        {/* Right side - Image and Stats */}
                        <div className="relative order-1 lg:order-2">
                            {/* Profile Image Container */}
                            <div className="relative mb-8 lg:mb-0">
                                <div className="relative w-80 h-80 mx-auto profile-orbit">
                                    {/* Animated rings */}
                                    <div className="absolute inset-0 profile-ring profile-ring-primary animate-pulse"></div>
                                    <div className="absolute inset-2 profile-ring profile-ring-secondary animate-pulse" style={{ animationDelay: '0.5s' }}></div>

                                    {/* Image container with glow effect */}
                                    <div className="absolute inset-4 profile-photo" style={{ animation: 'glow 3s ease-in-out infinite' }}>
                                        {/* Replace this with your actual image */}
                                        <div className="w-full h-full profile-photo-inner flex items-center justify-center">
                                            {/* <span className="text-white text-6xl font-bold">AA</span> */}

                                            {/* Uncomment below and add your image */}
                                            <img
                                                src={MYProfile}
                                                alt="Akhil Ankathi"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Floating badges */}
                                <div className="absolute right-20 top-12 tech-badge animate-pulse">
                                    <p className="text-white text-xs font-bold">React.js</p>
                                </div>
                                <div className="absolute left-16 top-12 tech-badge animate-pulse" style={{ animationDelay: '0.5s' }}>
                                    <p className="text-white text-xs font-bold">TypeScript</p>
                                </div>
                                <div className="absolute right-16 top-40 tech-badge animate-pulse" style={{ animationDelay: '1s' }}>
                                    <p className="text-white text-xs font-bold">Redux</p>
                                </div>
                                <div className="absolute left-18 top-40 tech-badge animate-pulse" style={{ animationDelay: '1.5s' }}>
                                    <p className="text-white text-xs font-bold">Node.js</p>
                                </div>
                                <div className="absolute right-24 bottom-16 tech-badge animate-pulse" style={{ animationDelay: '2s' }}>
                                    <p className="text-white text-xs font-bold">Vite</p>
                                </div>
                                <div className="absolute left-12 bottom-16 tech-badge animate-pulse" style={{ animationDelay: '2.5s' }}>
                                    <p className="text-white text-xs font-bold">JavaScript</p>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4 mt-8 stats-grid">
                              <div className="stat-card">
                                    <TrendingUp className="w-10 h-10 text-purple-400" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Performance Expert</h3>
                                    <p className="text-gray-400 text-sm">Micro-frontend and state optimization for faster user journeys</p>
                                </div>

                                <div className="stat-card mt-4">
                                    <Users className="w-12 h-12 text-cyan-400 mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Full-Stack Builder</h3>
                                    <p className="text-gray-400 text-sm">React, Node.js, NestJS, MongoDB, and .NET Core delivery</p>
                                </div>

                                <div className="stat-card mt-4">
                                    <Code className="w-12 h-12 text-pink-400 mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Architecture Focus</h3>
                                    <p className="text-gray-400 text-sm">Rspack, Rsbuild, Vite, and reusable component systems</p>
                                </div>

                                <div className="stat-card mt-4">
                                    <Award className="w-12 h-12 text-yellow-400 mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">6.8 Years</h3>
                                    <p className="text-gray-400 text-sm">Driving scalable product outcomes across multiple domains</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

{/* ================= Personal Products Section ================= */}
<section className="relative z-10 container mx-auto px-6 pb-28 products-section">
  {/* Section Header */}
  <div className="text-center mb-20 products-heading">
    <h2 className="text-4xl md:text-6xl font-bold mb-6">
      <span className="products-title">
        Personal Products
      </span>
    </h2>
    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
      Carefully crafted side projects that showcase real-world frontend
      architecture, UI engineering, and modern tooling.
    </p>
  </div>

  <div className="grid lg:grid-cols-2 gap-12">
    {/* ================= Frontend Learning Hub ================= */}
    <div className="group product-card product-card-lime">
      <div className="h-full product-card-inner">
        {/* Title */}
        <h3 className="text-3xl font-semibold text-white mb-4">
          Frontend Learning Hub
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-6">
          A curated learning platform for frontend developers to master React,
          JavaScript, UI engineering, and interview concepts — all structured in
          one clean, searchable experience.
        </p>

        {/* Tech Stack */}
        <div className="mb-8">
          <p className="text-sm uppercase tracking-wider text-gray-400 mb-3">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2 product-stack">
            {[
              "React",
              "Vite",
              "TypeScript",
              "Redux",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Zustand",
              "Tailwind CSS",
              "Lucide-react",
              "React Router",
              "Netlify",
            ].map((tech) => (
              <span
                key={tech}
                className="product-tag"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Value / Learnings */}
        <p className="text-sm text-gray-400 mb-8">
          <span className="text-white font-semibold">Focus:</span> Scalable
          component architecture, lightweight global state, performance-first
          rendering, and clean developer experience.
        </p>

        {/* CTA */}
        <a
          href="https://frontendlearninghub.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center product-link"
        >
          Explore Product
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>

    {/* ================= Avicii Music App ================= */}
    <div className="group product-card product-card-cyan">
      <div className="h-full product-card-inner">
        {/* Title */}
        <h3 className="text-3xl font-semibold text-white mb-4">
          Avicii Music App
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-6">
          A Spotify-inspired tribute music app built to deliver immersive UI,
          smooth animations, and playlist-driven navigation with a strong visual
          identity.
        </p>

        {/* Tech Stack */}
        <div className="mb-8">
          <p className="text-sm uppercase tracking-wider text-gray-400 mb-3">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2 product-stack">
            {[
              "React",
              "Vite",
              "Tailwind CSS",
              "Redux",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Zustand",
              "Framer Motion",
              "Lucide-react",
              "Context API",
              "Vercel",
            ].map((tech) => (
              <span
                key={tech}
                className="product-tag"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Value / Learnings */}
        <p className="text-sm text-gray-400 mb-8">
          <span className="text-white font-semibold">Focus:</span> Animation-heavy
          UI, route-based flows, visual polish, and managing complex UI state for
          media-driven experiences.
        </p>

        {/* CTA */}
        <a
          href="https://avicii-eight.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center product-link"
        >
          Explore Product
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}