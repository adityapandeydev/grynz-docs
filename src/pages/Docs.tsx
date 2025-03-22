import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Docs() {
    const [showLanguages, setShowLanguages] = useState(false);
    const supportedLanguages = [
        'C', 'C++', 'Erlang', 'Elixir', 'Go', 'Java', 
        'JavaScript', 'Kotlin', 'Python', 'Rust', 'TypeScript', 'Zig'
    ];

    return (
        <div className="min-h-screen bg-[#102542] flex flex-col">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            {/* Navigation */}
            <nav className="relative z-10 px-8 sm:px-12 py-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-3">
                        <span className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg bg-[#f87060]"></span>
                        <span className="text-lg sm:text-xl font-bold text-white">Grynz</span>
                    </Link>
                    <div className="flex items-center space-x-4 sm:space-x-6">
                        <Link to="/docs" className="text-sm sm:text-base text-white transition-colors">
                            Docs
                        </Link>
                        <a 
                            href="https://github.com/adityapandeydev/grynz" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                        >
                            GitHub
                        </a>
                        <Link
                            to="/download"
                            className="text-sm sm:text-base px-4 py-2 bg-transparent border border-[#f87060] text-[#f87060] rounded-lg hover:bg-[#f87060]/10 transition-colors text-center"
                        >
                            Download
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="relative z-10 flex-1 flex">
                {/* Sidebar */}
                <div className="w-64 border-r border-gray-800/50 p-6 hidden lg:block">
                    <div className="sticky top-6">
                        <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Getting Started</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/docs/installation" className="text-white hover:text-[#f87060] transition-colors">
                                    Installation
                                </Link>
                            </li>
                            <li>
                                <Link to="/docs/configuration" className="text-white hover:text-[#f87060] transition-colors">
                                    Configuration
                                </Link>
                            </li>
                            <li>
                                <Link to="/docs/usage" className="text-white hover:text-[#f87060] transition-colors">
                                    Usage
                                </Link>
                            </li>
                        </ul>

                        <h3 className="text-sm font-semibold text-gray-400 uppercase mt-8 mb-4">Features</h3>
                        <ul className="space-y-3">
                            <li 
                                className="relative"
                                onMouseEnter={() => setShowLanguages(true)}
                                onMouseLeave={() => setShowLanguages(false)}
                            >
                                <span className="text-white cursor-default">
                                    Supported Languages
                                </span>
                                {showLanguages && (
                                    <div className="mt-2 w-full bg-[#1a365d] rounded-lg shadow-lg py-2 px-3">
                                        <div className="grid grid-cols-2 gap-2">
                                            {supportedLanguages.map((lang) => (
                                                <Link 
                                                    key={lang} 
                                                    to={`/docs/languages/${lang.toLowerCase()}`}
                                                    className="text-sm text-gray-300 hover:text-[#f87060] transition-colors"
                                                >
                                                    {lang}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </li>
                            <li>
                                <Link to="/docs/commands" className="text-white hover:text-[#f87060] transition-colors">
                                    Command Reference
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 lg:p-12">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="prose prose-invert"
                        >
                            <h1>Documentation</h1>
                            <p className="text-gray-400">
                                Welcome to the Grynz documentation. Here you'll find everything you need to know about using Grynz.
                            </p>
                            
                            <h2>What is Grynz?</h2>
                            <p className="text-gray-400">
                                Grynz is a universal compiler that seamlessly compiles and runs multiple programming languages with a single command-line interface.
                            </p>

                            {/* Add more documentation content as needed */}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 w-full border-t border-gray-800/50">
                <div className="px-8 sm:px-12">
                    <div className="py-3 flex flex-col sm:flex-row justify-between items-center">
                        <div className="flex items-center space-x-4 sm:space-x-6 mb-4 sm:mb-0">
                            <Link to="/docs" className="text-sm text-white transition-colors">
                                Docs
                            </Link>
                            <a 
                                href="https://github.com/adityapandeydev/grynz" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm text-gray-400 hover:text-white transition-colors"
                            >
                                GitHub
                            </a>
                            <Link to="/download" className="text-sm text-gray-400 hover:text-white transition-colors">
                                Download
                            </Link>
                        </div>
                        <div className="text-sm text-gray-400">
                            © 2025 Aditya Pandey
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
