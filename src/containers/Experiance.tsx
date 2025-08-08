import { Calendar, MapPin } from "lucide-react"
import { experiences } from "../constants/Experiance"

export const Experiance = () => {
    return (
        <div id="experience" className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Work <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500"></div>

                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative pl-20">
                                    {/* Timeline dot */}
                                    <div className="absolute left-6 w-5 h-5 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full border-4 border-gray-900"></div>

                                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 group">
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                                {exp.title}
                                            </h3>
                                            <p className="text-xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold mb-3">
                                                {exp.company}
                                            </p>
                                            <div className="flex flex-wrap gap-4 text-gray-400">
                                                <div className="flex items-center">
                                                    <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                                                    <span>{exp.location}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                                                    <span>{exp.duration}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            {exp.achievements.map((achievement, idx) => (
                                                <div key={idx} className="flex items-start group-hover:translate-x-2 transition-transform duration-300">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                                                    <p className="text-gray-300 leading-relaxed">{achievement}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}