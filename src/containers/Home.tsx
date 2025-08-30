import { ArrowRight, Award, Code, Download, DownloadIcon, Sparkles, TrendingUp, Users } from "lucide-react"
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { getProjectsList } from "../services/projects.service";
import { downloadResumeService } from "../services/downloadResume.service";

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

    const downloadResumeFunc = async()=>{
        let reponse = await downloadResumeService()
    }

    return (
        <div id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden max-w-full w-full left-0 right-0">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10 container px-6 py-32 min-h-screen flex items-center">
                <div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full mb-6 backdrop-blur-sm border border-white/10">
                                <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                                <span className="text-cyan-300 text-sm font-medium">Available for new opportunities</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                <span className="text-white">Hi, I'm</span>
                                <br />
                                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                    Akhil Ankathi
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-300 mb-6">
                                <span className="text-purple-400 font-semibold">Senior Frontend Developer</span>
                            </p>

                            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
                                Architecting scalable web applications with <span className="text-cyan-400 font-semibold">5.6+ years</span> of expertise in React.js, TypeScript, and micro frontend architecture. Leading teams to deliver performance-optimized solutions.
                            </p>

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
                                 <button
                                    onClick={() => downloadResumeFunc()}
                                    className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center"
                                >
                                    Download Resume
                                    <DownloadIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                                    <TrendingUp className="w-12 h-12 text-purple-400 mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Performance Expert</h3>
                                    <p className="text-gray-400 text-sm">30-40% performance gains through optimization</p>
                                </div>

                                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:scale-105 transition-transform duration-300 mt-8">
                                    <Users className="w-12 h-12 text-cyan-400 mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Team Leader</h3>
                                    <p className="text-gray-400 text-sm">Leading and mentoring 5+ developers</p>
                                </div>

                                <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:scale-105 transition-transform duration-300 -mt-4">
                                    <Code className="w-12 h-12 text-pink-400 mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">Architecture Focus</h3>
                                    <p className="text-gray-400 text-sm">Micro frontend expertise</p>
                                </div>

                                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                                    <Award className="w-12 h-12 text-yellow-400 mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">50k+ Users</h3>
                                    <p className="text-gray-400 text-sm">Pixel-perfect applications</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}