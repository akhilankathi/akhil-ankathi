import { skills } from "../constants/Skills"

export const Skills = () => {
    return (
        <div id="skills" className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Technical <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Frontend", skills: skills.frontend, gradient: "from-purple-500/20 to-purple-700/20", border: "border-purple-500/30", icon: "🎨" },
                            { title: "Backend", skills: skills.backend, gradient: "from-cyan-500/20 to-cyan-700/20", border: "border-cyan-500/30", icon: "⚡" },
                            { title: "Testing & Tools", skills: skills.testing, gradient: "from-pink-500/20 to-pink-700/20", border: "border-pink-500/30", icon: "🛠️" }
                        ].map((category, index) => (
                            <div key={index} className="group">
                                <div className={`bg-gradient-to-br ${category.gradient} backdrop-blur-sm border ${category.border} rounded-3xl p-8 hover:scale-105 transition-all duration-300 h-full`}>
                                    <div className="text-center mb-8">
                                        <div className="text-4xl mb-4">{category.icon}</div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                                        <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto"></div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-3">
                                        {category.skills.map((skill, skillIndex) => (
                                            <div key={skillIndex} className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-xl text-center text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white hover:scale-105 transition-all duration-200 cursor-default">
                                                {skill}
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
    )
}