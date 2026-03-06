import { Award, Code } from "lucide-react"
import './about.css'

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
                                        I'm a passionate Senior Frontend Developer with over <span className="text-cyan-400 font-semibold">6 years</span> of experience building
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
                    <div className="personal-life-section">
                        <div className="personal-life-header">
                            <div className="pl-line"></div>
                            <span className="pl-label">Beyond the Screen</span>
                            <div className="pl-line"></div>
                        </div>

                        <div className="personal-life-grid">

                            <div className="pl-card pl-travel">
                                <div className="pl-card-top">
                                    <span className="pl-big-icon">✈️</span>
                                    <div>
                                        <div className="pl-card-title">Travel Lover</div>
                                        <div className="pl-card-sub">Explorer at heart</div>
                                    </div>
                                </div>
                                <p className="pl-card-desc">
                                    Every trip rewires the way I think. Whether it's the chaos of a new city or the silence of a mountain trail — travel fuels my creativity and makes me a better problem-solver. I collect <strong>experiences</strong>, not souvenirs.
                                </p>
                                <div className="pl-tags">
                                    <span className="pl-tag">🏔️ Mountains</span>
                                    <span className="pl-tag">🌊 Beaches</span>
                                    <span className="pl-tag">🌆 City Vibes</span>
                                    <span className="pl-tag">🌿 Nature</span>
                                </div>
                                <div className="pl-quote">"The world is a book — I refuse to read just one page."</div>
                            </div>

                            <div className="pl-card pl-music">
                                <div className="pl-card-top">
                                    <span className="pl-big-icon">🎵</span>
                                    <div>
                                        <div className="pl-card-title">Music Soul</div>
                                        <div className="pl-card-sub">EDM · Electronic · Progressive</div>
                                    </div>
                                </div>
                                <p className="pl-card-desc">
                                    Music isn't background noise — it's <strong>fuel</strong>. My best code gets written when Avicii or Martin Garrix is playing. The way a drop hits is the same feeling I chase when a UI animation lands perfectly.
                                </p>
                                <div className="pl-artists">
                                    <span className="pl-artist">🎹 Avicii</span>
                                    <span className="pl-artist">🎧 Martin Garrix</span>
                                    <span className="pl-artist">🎼 Tiësto</span>
                                    <span className="pl-artist">🔊 Hardwell</span>
                                    <span className="pl-artist">🔥 Swedish House Mafia</span>
                                    <span className="pl-artist">🎶 Armin van Buuren</span>
                                    <span className="pl-artist">⚡ Dimitri Vegas & Like Mike</span>
                                    <span className="pl-artist">🎛 Steve Aoki</span>
                                    <span className="pl-artist">💥 Skrillex</span>
                                    <span className="pl-artist">🌌 Alan Walker</span>
                                    <span className="pl-artist">🎤 Calvin Harris</span>
                                    <span className="pl-artist">🎵 Gryffin</span>
                                </div>
                            </div>

                            <div className="pl-card pl-dj">
                                <div className="pl-card-top">
                                    <span className="pl-big-icon">🎛️</span>
                                    <div>
                                        <div className="pl-card-title">Aspiring DJ</div>
                                        <div className="pl-card-sub">The dream is in progress 🔥</div>
                                    </div>
                                </div>
                                <p className="pl-card-desc">
                                    My <strong>ultimate dream</strong> is to stand behind the decks and move a crowd. Inspired by legends like Avicii and Garrix, I believe technology and music are two sides of the same coin — both about creating an <strong>experience</strong> that hits deep.
                                </p>
                                <div className="dj-progress">
                                    <div className="dj-progress-label">
                                        <span>Learning the decks</span>
                                        <span style={{ color: 'var(--cyan)' }}>In Progress</span>
                                    </div>
                                    <div className="dj-bar-track">
                                        <div className="dj-bar-fill" style={{ width: '45%' }}></div>
                                    </div>
                                    <div className="dj-progress-label" style={{ marginTop: '10px' }}>
                                        <span>Music Theory</span>
                                        <span style={{ color: 'var(--pink)' }}>Growing 🎶</span>
                                    </div>
                                    <div className="dj-bar-track">
                                        <div className="dj-bar-fill" style={{ width: '60%', background: 'linear-gradient(90deg, var(--pink), #ff99ee)' }}></div>
                                    </div>
                                </div>
                                <div className="pl-quote" style={{ borderColor: 'rgba(0,229,255,0.2)', color: 'var(--cyan)' }}  >"Drop it like it's a production deploy 🎧"</div>
                            </div>

                        </div>
                        <div className="music-section pt-16 text-white gap-4">

                            <h2 className="text-4xl font-bold text-center">
                                🎧 Festival EDM & Dubstep Tracks
                            </h2>

                            {/* Featured Playlist */}
                            <div className="playlist-container px-4 mt-10">

                                <iframe
                                    src="https://open.spotify.com/embed/playlist/5WO5K55NsxCZJcScpjNl0V?utm_source=generator"
                                    width="100%"
                                    height="600"
                                    loading="lazy"
                                    className="spotify-playlist rounded-xl p-4 border border-gray-700 bg-gray-800/50 backdrop-blur-sm"
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                ></iframe>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}