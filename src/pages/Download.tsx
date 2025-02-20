import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Download() {
    return (
        <div className="min-h-screen bg-black">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-3">
                        <span className="h-8 w-8 rounded-lg bg-blue-600"></span>
                        <span className="text-xl font-bold text-white">Grynz</span>
                    </Link>
                    <div className="flex items-center space-x-6">
                        <Link to="/docs" className="text-gray-400 hover:text-white transition-colors">
                            Docs
                        </Link>
                        <a 
                            href="https://github.com/adityapandeydev/grynz" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="pt-32 pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-4xl font-bold text-white mb-4">
                            Download Grynz
                        </h1>
                        <p className="text-gray-400">
                            Version 1.0.0 - <Link to="/docs/release-notes" className="text-blue-400 hover:text-blue-300">Release Notes</Link>
                        </p>
                    </motion.div>

                    {/* Download Options */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Windows */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                        >
                            <h2 className="text-2xl font-bold text-white mb-4">Windows</h2>
                            <p className="text-gray-400 mb-6">
                                Choose between the universal binary or the installer package for Windows 10/11.
                            </p>
                            <div className="space-y-4">
                                <a 
                                    href="/downloads/windows/grynz.exe" 
                                    download
                                    className="block w-full px-4 py-2 bg-transparent border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-colors text-center"
                                >
                                    Universal Binary
                                </a>
                                <a 
                                    href="/downloads/windows/GrynzInstaller.exe" 
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
                            className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                        >
                            <h2 className="text-2xl font-bold text-white mb-4">Linux</h2>
                            <p className="text-gray-400 mb-6">
                                Choose a pre-built package for quick setup on your Linux distribution, or use the package manager.
                            </p>
                            <div className="space-y-4">
                                <a 
                                    href="/downloads/linux/grynz" 
                                    download
                                    className="block w-full px-4 py-2 bg-transparent border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-colors text-center"
                                >
                                    Universal Binary
                                </a>
                                <button 
                                    onClick={() => navigator.clipboard.writeText('curl -fsSL https://grynz.dev/install.sh | sh')}
                                    className="block w-full px-4 py-2 bg-transparent border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors text-center"
                                >
                                    Package Manager
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
} 