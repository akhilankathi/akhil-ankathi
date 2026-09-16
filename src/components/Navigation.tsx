import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export const NavigationBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate()

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' }
    ];
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 site-nav">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold site-brand">
                        Akhil Ankathi
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => navigate(item.id)}
                                className="nav-link"
                            // className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeSection === item.id
                            //         ? 'text-white shadow-lg bg-none'
                            //         : 'text-gray-300 hover:text-white bg-none'
                            //     }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            className="nav-menu-button"
                            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        // className="text-gray-300 hover:text-white p-2"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-white/10">
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    className="nav-mobile-link"
                                    onClick={() => {
                                        navigate(item.id)
                                        setIsMobileMenuOpen(!isMobileMenuOpen)
                                    }}
                                // className={`text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeSection === item.id
                                //         ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                                //         : 'text-gray-300 hover:text-white hover:bg-white/5'
                                //     }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}