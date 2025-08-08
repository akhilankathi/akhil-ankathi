import { ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export const Contact = () => {
    return <div id="contact" className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20">
        <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Let's <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Ready to discuss your next project or explore collaboration opportunities? Let's create something amazing together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                                <Mail className="w-6 h-6 text-purple-400 mr-3" />
                                Get In Touch
                            </h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                I'm always interested in discussing new opportunities, innovative projects,
                                or just connecting with fellow developers. Feel free to reach out!
                            </p>

                            <div className="space-y-4">
                                <a href="mailto:akhilankathi@gmail.com" className="flex items-center p-4 bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl hover:border-purple-500/40 hover:bg-purple-500/20 transition-all duration-300 group">
                                    <Mail className="w-5 h-5 text-purple-400 mr-3 group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-300 group-hover:text-white">akhilankathi@gmail.com</span>
                                </a>
                                <a href="tel:+919010902696" className="flex items-center p-4 bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-xl hover:border-cyan-500/40 hover:bg-cyan-500/20 transition-all duration-300 group">
                                    <Phone className="w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-300 group-hover:text-white">+91 9010902696</span>
                                </a>
                                <div className="flex items-center p-4 bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/20 rounded-xl">
                                    <MapPin className="w-5 h-5 text-pink-400 mr-3" />
                                    <span className="text-gray-300">Hyderabad, Telangana, India</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <h3 className="text-2xl font-semibold text-white mb-6">Find Me Online</h3>
                            <div className="space-y-4">
                                <a href="https://github.com/akhilankathi" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600/50 rounded-xl hover:border-white/30 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 group">
                                    <div className="flex items-center">
                                        <Github className="w-6 h-6 text-white mr-4 group-hover:text-purple-400 transition-colors" />
                                        <div>
                                            <p className="text-white font-medium">GitHub</p>
                                            <p className="text-gray-400 text-sm">github.com/akhilankathi</p>
                                        </div>
                                    </div>
                                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                </a>

                                <a href="https://www.linkedin.com/in/akhilvarmaankathi/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-800 to-blue-700 border border-blue-600/50 rounded-xl hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group">
                                    <div className="flex items-center">
                                        <Linkedin className="w-6 h-6 text-white mr-4 group-hover:text-cyan-400 transition-colors" />
                                        <div>
                                            <p className="text-white font-medium">LinkedIn</p>
                                            <p className="text-gray-400 text-sm">linkedin.com/in/akhilvarmaankathi</p>
                                        </div>
                                    </div>
                                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                </a>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
                            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 p-6 rounded-2xl">
                                <h4 className="text-xl font-semibold text-white mb-2">Bachelor of Technology</h4>
                                <p className="text-purple-300 font-medium mb-1">Civil Engineering</p>
                                <p className="text-gray-400 text-sm mb-2">SR University Warangal, Telangana</p>
                                <p className="text-gray-500 text-sm">Jun 2015 - May 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}