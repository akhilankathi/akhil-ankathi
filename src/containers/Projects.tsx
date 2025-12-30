import { Calendar, Code, ExternalLink, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"
import { getProjectsList } from "../services"
import { useProjects } from "../store/projects.store"
import type { Project } from "../models"
import Loader from "../components/Loader"
import { projects, personalProjects } from "../constants/Projects"
// import { useNavigate } from "react-router"
// import Dashboard from 'music/Dashboard'

export const Projects = () => {
    // const navigate = useNavigate()
    const setProjectsList = useProjects((state: any) => state.setProjectsList)
    const resetProjectsStore = useProjects((state: any) => state.resetProjectsStore)
    const [projectsListState] = useState<Project[]>(projects)

    const getProjectsListFunc = async () => {
        try {
            let response: any = await getProjectsList()
            console.log(response)
            if (response && response?.data)
                setProjectsList(response?.data)
        } catch (error) {
            console.log(error)
        }


    }

    useEffect(() => {
        getProjectsListFunc()
        return () => {
            resetProjectsStore()
        }
    }, [])



    return (
        <div id="projects" className="min-h-screen bg-gray-900 py-20">

            <div className="container mx-auto px-6 pt-5">                    {/* ================= Personal Projects ================= */}
                <div className="mb-12 max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Personal{" "}
                            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            End-to-end products I built independently to explore frontend architecture,
                            UI engineering, and modern tooling.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {personalProjects.map((project, index) => (
                            <div key={index} className="group">
                                <div className="bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:scale-[1.02] hover:border-pink-500/30 transition-all duration-500 h-full">
                                    <div className="mb-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors">
                                                {project.name}
                                            </h3>
                                            <div className="p-2 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl">
                                                <ExternalLink className="w-5 h-5 text-pink-400 cursor-pointer" onClick={() => window.open(project.url, "_blank")}/>
                                            </div>
                                        </div>

                                        <p className="text-pink-400 font-medium mb-4 flex items-center">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {project.duration}
                                        </p>

                                        <p className="text-gray-300 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-white mb-4 flex items-center">
                                            <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                                            Key Highlights
                                        </h4>

                                        <div className="space-y-3">
                                            {project.highlights.map((highlight, idx) => (
                                                <div key={idx} className="flex items-start">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                                                    <p className="text-gray-400 text-sm leading-relaxed">
                                                        {highlight}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-white mb-4 flex items-center">
                                            <Code className="w-4 h-4 mr-2 text-pink-400" />
                                            Technologies
                                        </h4>

                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-300 px-3 py-1.5 rounded-xl text-sm font-medium backdrop-blur-sm hover:scale-105 transition-transform"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Featured <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
                    </div>
                    {/* <Dashboard/> */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        {projectsListState ? projectsListState?.map((project, index) => (
                            <div key={index} className="group">
                                <div className="bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:scale-[1.02] hover:border-purple-500/30 transition-all duration-500 h-full">
                                    <div className="mb-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                                {project.name}
                                            </h3>
                                            <div className="p-2 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl">
                                                <ExternalLink className="w-5 h-5 text-purple-400" />
                                            </div>
                                        </div>
                                        <p className="text-cyan-400 font-medium mb-4 flex items-center">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {project.duration}
                                        </p>
                                        <p className="text-gray-300 leading-relaxed">{project.description}</p>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-white mb-4 flex items-center">
                                            <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                                            Key Highlights
                                        </h4>
                                        <div className="space-y-3">
                                            {project.highlights.map((highlight, idx) => (
                                                <div key={idx} className="flex items-start">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                    <p className="text-gray-400 text-sm leading-relaxed">{highlight}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-white mb-4 flex items-center">
                                            <Code className="w-4 h-4 mr-2 text-purple-400" />
                                            Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, idx) => (
                                                <span key={idx} className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-300 px-3 py-1.5 rounded-xl text-sm font-medium backdrop-blur-sm hover:scale-105 transition-transform">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) : <Loader />}
                    </div>
                </div>
            </div>

        </div>
    )
}