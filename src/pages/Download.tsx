import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Download() {
    return (
        <div className="h-screen bg-[#102542] relative overflow-hidden flex flex-col">
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
                        <Link to="/docs" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
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
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="relative z-10 flex-1 flex flex-col px-4 sm:px-6">
                <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-8"
                    >
                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
                            Download Grynz
                        </h1>
                        <p className="text-sm sm:text-base text-gray-400">
                            Version 1.0.0 - <Link to="/docs/release-notes" className="text-[#f87060] hover:text-[#f87060]/80">Release Notes</Link>
                        </p>
                    </motion.div>

                    {/* Download Options */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto w-full place-content-center">
                        {/* Windows Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-gray-900/50 border border-gray-800 rounded-lg p-4"
                        >
                            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Windows</h2>
                            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                                Choose between the universal binary or the installer package for Windows 10/11.
                            </p>
                            <div className="space-y-3 sm:space-y-4">
                                <a 
                                    href="/downloads/windows/grynz.exe" 
                                    download
                                    className="block w-full px-4 py-2 bg-transparent border border-[#f87060] text-[#f87060] rounded-lg hover:bg-[#f87060]/10 transition-colors text-center"
                                >
                                    Compiled Binary
                                </a>
                                <a 
                                    href="/downloads/Output/GrynzInstaller.exe" 
                                    download
                                    className="block w-full px-4 py-2 bg-transparent border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors text-center"
                                >
                                    Installer
                                </a>
                            </div>
                        </motion.div>

                        {/* Linux */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-gray-900/50 border border-gray-800 rounded-lg p-4"
                        >
                            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Linux</h2>
                            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                                Choose a pre-built binary for your Linux distribution, or use the package manager.
                            </p>
                            <div className="space-y-3 sm:space-y-4">
                                <a 
                                    href="/downloads/linux/grynz" 
                                    download
                                    className="block w-full px-4 py-2 bg-transparent border border-[#f87060] text-[#f87060] rounded-lg hover:bg-[#f87060]/10 transition-colors text-center"
                                >
                                    Compiled Binary
                                </a>
                                <button 
                                    className="block w-full px-4 py-2 bg-transparent border border-gray-700 text-gray-300 rounded-lg opacity-50 cursor-not-allowed text-center"
                                >
                                    Package Manager (Coming Soon)
                                </button>
                            </div>
                        </motion.div>

                        {/* macOS */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="bg-gray-900/50 border border-gray-800 rounded-lg p-4"
                        >
                            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">MacOS</h2>
                            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                                Download the universal binary for macOS or install via package manager.
                            </p>
                            <div className="space-y-3 sm:space-y-4">
                                <a 
                                    href="/downloads/mac/grynz" 
                                    download
                                    className="block w-full px-4 py-2 bg-transparent border border-[#f87060] text-[#f87060] rounded-lg hover:bg-[#f87060]/10 transition-colors text-center"
                                >
                                    Compiled Binary
                                </a>
                                <button 
                                    className="block w-full px-4 py-2 bg-transparent border border-gray-700 text-gray-300 rounded-lg opacity-50 cursor-not-allowed text-center"
                                >
                                    Package Manager (Coming Soon)
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 w-full border-t border-gray-800/50">
                <div className="px-8 sm:px-12">
                    <div className="py-3 flex flex-col sm:flex-row justify-between items-center">
                        <div className="flex items-center space-x-4 sm:space-x-6 mb-4 sm:mb-0">
                            <Link to="/docs" className="text-sm text-gray-400 hover:text-white transition-colors">
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