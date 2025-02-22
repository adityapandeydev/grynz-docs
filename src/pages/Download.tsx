import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Download() {
    return (
        <div className="min-h-screen bg-black">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-3">
                        <span className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg bg-blue-600"></span>
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
            <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12 sm:mb-20"
                    >
                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
                            Download Grynz
                        </h1>
                        <p className="text-sm sm:text-base text-gray-400">
                            Version 1.0.0 - <Link to="/docs/release-notes" className="text-blue-400 hover:text-blue-300">Release Notes</Link>
                        </p>
                    </motion.div>

                    {/* Download Options */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {/* Windows Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6"
                        >
                            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Windows</h2>
                            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                                Choose between the universal binary or the installer package for Windows 10/11.
                            </p>
                            <div className="space-y-3 sm:space-y-4">
                                <a 
                                    href="/downloads/windows/grynz.exe" 
                                    download
                                    className="block w-full px-4 py-2 bg-transparent border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-colors text-center"
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

                        {/* macOS */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6"
                        >
                            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">MacOS</h2>
                            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                                Download the universal binary for macOS or install via package manager.
                            </p>
                            <div className="space-y-3 sm:space-y-4">
                                <a 
                                    href="/downloads/mac/grynz" 
                                    download
                                    className="block w-full px-4 py-2 bg-transparent border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-colors text-center"
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

                        {/* Linux */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6"
                        >
                            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Linux</h2>
                            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                                Choose a pre-built binary for your Linux distribution, or use the package manager.
                            </p>
                            <div className="space-y-3 sm:space-y-4">
                                <a 
                                    href="/downloads/linux/grynz" 
                                    download
                                    className="block w-full px-4 py-2 bg-transparent border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-colors text-center"
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
        </div>
    );
} 