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
        <div id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden max-w-full w-full left-0 right-0">
            {/* Animated background blobs */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
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
                    0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
                    50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8), 0 0 60px rgba(236, 72, 153, 0.4); }
                }
            `}</style>

            <div className="relative z-10 container mx-auto px-6 py-10 md:pt-32 min-h-screen flex items-center">
                <div className="w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left side - Content */}
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full mb-6 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                                <Sparkles className="w-4 h-4 text-cyan-400 mr-2 animate-pulse" />
                                <span className="text-cyan-300 text-sm font-medium">Available for new opportunities</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                <span className="text-white">Hi, I'm</span>
                                <br />
                                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                                    Akhil Ankathi
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-300 mb-4">
                                <span className="text-purple-400 font-semibold">Senior Frontend Developer</span>
                            </p>

                            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
                                Architecting scalable web applications with <span className="text-cyan-400 font-semibold">6+ years</span> of expertise in React.js, TypeScript, and micro frontend architecture. Leading teams to deliver performance-optimized solutions.
                            </p>

                            {/* Social links */}
                            <div className="flex gap-4 mb-8">
                                <a href="https://github.com/akhilankathi" target="_blank" rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300">
                                    <Github className="w-5 h-5 text-gray-400" />
                                </a>
                                <a href="https://www.linkedin.com/in/akhilvarmaankathi" target="_blank" rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                                    <Linkedin className="w-5 h-5 text-gray-400" />
                                </a>
                                <a href="mailto:akhilankathi@gmail.com"
                                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500/20 hover:border-pink-400/50 transition-all duration-300">
                                    <Mail className="w-5 h-5 text-gray-400" />
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => navigate('/projects')}
                                    className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center"
                                >
                                    View My Work
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={() => navigate('/contact')}
                                    className="group border-2 border-cyan-400/50 text-cyan-300 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm flex items-center"
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
                                <div className="relative w-80 h-80 mx-auto">
                                    {/* Animated rings */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 animate-pulse"></div>
                                    <div className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

                                    {/* Image container with glow effect */}
                                    <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl" style={{ animation: 'glow 3s ease-in-out infinite' }}>
                                        {/* Replace this with your actual image */}
                                        <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 flex items-center justify-center">
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
                                <div className="absolute right-20 top-12 bg-gradient-to-br from-purple-500/90 to-pink-500/90 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20 shadow-xl animate-pulse">
                                    <p className="text-white text-xs font-bold">React.js</p>
                                </div>
                                <div className="absolute left-16 top-12 bg-gradient-to-br from-cyan-500/90 to-blue-500/90 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20 shadow-xl animate-pulse" style={{ animationDelay: '0.5s' }}>
                                    <p className="text-white text-xs font-bold">TypeScript</p>
                                </div>
                                <div className="absolute right-16 top-40 bg-gradient-to-br from-pink-500/90 to-rose-500/90 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20 shadow-xl animate-pulse" style={{ animationDelay: '1s' }}>
                                    <p className="text-white text-xs font-bold">Redux</p>
                                </div>
                                <div className="absolute left-18 top-40 bg-gradient-to-br from-yellow-500/90 to-orange-500/90 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20 shadow-xl animate-pulse" style={{ animationDelay: '1.5s' }}>
                                    <p className="text-white text-xs font-bold">Node.js</p>
                                </div>
                                <div className="absolute right-24 bottom-16 bg-gradient-to-br from-indigo-500/90 to-purple-500/90 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20 shadow-xl animate-pulse" style={{ animationDelay: '2s' }}>
                                    <p className="text-white text-xs font-bold">Vite</p>
                                </div>
                                <div className="absolute left-12 bottom-16 bg-gradient-to-br from-green-500/90 to-emerald-500/90 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20 shadow-xl animate-pulse" style={{ animationDelay: '2.5s' }}>
                                    <p className="text-white text-xs font-bold">JavaScript</p>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:scale-105 hover:border-purple-400/50 transition-all duration-300">
                                    <TrendingUp className="w-10 h-10 text-purple-400" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Performance Expert</h3>
                                    <p className="text-gray-400 text-sm">30-40% performance gains through optimization</p>
                                </div>

                                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:scale-105 transition-transform duration-300 mt-4">
                                    <Users className="w-12 h-12 text-cyan-400 mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Team Leader</h3>
                                    <p className="text-gray-400 text-sm">Leading and mentoring 5+ developers</p>
                                </div>

                                <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:scale-105 transition-transform duration-300 mt-4">
                                    <Code className="w-12 h-12 text-pink-400 mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Architecture Focus</h3>
                                    <p className="text-gray-400 text-sm">Micro frontend expertise</p>
                                </div>

                                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:scale-105 transition-transform duration-300 mt-4">
                                    <Award className="w-12 h-12 text-yellow-400 mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">50k+ Users</h3>
                                    <p className="text-gray-400 text-sm">Pixel-perfect applications</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

{/* ================= Personal Products Section ================= */}
<section className="relative z-10 container mx-auto px-6 pb-28">
  {/* Section Header */}
  <div className="text-center mb-20">
    <h2 className="text-4xl md:text-6xl font-bold mb-6">
      <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
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
    <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-cyan-400/40 via-purple-400/40 to-pink-400/40 hover:scale-[1.02] transition-all duration-300">
      <div className="h-full backdrop-blur-xl rounded-3xl p-10 border border-white/10">
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
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Vite",
              "TypeScript",
              "Redux",
              "Zustand",
              "Tailwind CSS",
              "Lucide-react",
              "React Router",
              "Netlify",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/10 hover:bg-cyan-400/20 hover:border-cyan-400/40 transition"
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
          className="inline-flex items-center text-cyan-400 font-semibold hover:underline"
        >
          Explore Product
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>

    {/* ================= Avicii Music App ================= */}
    <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-pink-400/40 via-purple-400/40 to-indigo-400/40 hover:scale-[1.02] transition-all duration-300">
      <div className="h-full  backdrop-blur-xl rounded-3xl p-10 border border-white/10">
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
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Vite",
              "Tailwind CSS",
              "Redux",
              "Framer Motion",
              "Lucide-react",
              "Context API",
              "Vercel",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/10 hover:bg-pink-400/20 hover:border-pink-400/40 transition"
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
          className="inline-flex items-center text-pink-400 font-semibold hover:underline"
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