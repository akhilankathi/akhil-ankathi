import { Award, Code } from "lucide-react"

export const About = () => {
    return (
        <div id="about" className="min-h-screen bg-gray-900 py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-purple-500/5 to-cyan-500/5 backdrop-blur-sm border border-white/5 p-8 rounded-3xl">
                                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                                    <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mr-4"></div>
                                    My Journey
                                </h3>
                                <div className="space-y-4 text-gray-300 leading-relaxed">
                                    <p>
                                        I'm a passionate Senior Frontend Developer with over <span className="text-cyan-400 font-semibold">5.6 years</span> of experience building
                                        scalable web applications across SaaS, automotive, and e-commerce domains. My expertise
                                        lies in React.js, TypeScript, and modern JavaScript.
                                    </p>
                                    <p>
                                        Currently at <span className="text-purple-400 font-semibold">Korn Ferry International</span>, I lead a team of 5 developers while
                                        architecting high-performance B2B SaaS applications. I'm passionate about clean code,
                                        test-driven development, and mentoring the next generation.
                                    </p>
                                    <p>
                                        My focus on <span className="text-pink-400 font-semibold">micro frontend architecture</span> and performance optimization
                                        has consistently delivered 30-40% performance improvements across projects.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-purple-500/10 to-transparent backdrop-blur-sm border border-purple-500/20 p-6 rounded-2xl">
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-purple-500/20 rounded-xl mr-4">
                                        <Award className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <h4 className="font-semibold text-white text-lg">Key Achievements</h4>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        "30-40% performance improvements",
                                        "20% faster project delivery",
                                        "25% defect reduction via TDD",
                                        "50k+ users served globally"
                                    ].map((achievement, index) => (
                                        <div key={index} className="flex items-center text-gray-300">
                                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                                            {achievement}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent backdrop-blur-sm border border-cyan-500/20 p-6 rounded-2xl">
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-cyan-500/20 rounded-xl mr-4">
                                        <Code className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <h4 className="font-semibold text-white text-lg">Technical Focus</h4>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        "Micro Frontend Architecture",
                                        "Component-Driven Development",
                                        "Test-Driven Development (TDD)",
                                        "Performance Optimization"
                                    ].map((focus, index) => (
                                        <div key={index} className="flex items-center text-gray-300">
                                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-3"></div>
                                            {focus}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}