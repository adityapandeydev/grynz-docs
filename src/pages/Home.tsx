import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center max-w-3xl px-4 sm:px-6 text-center">
                {/* Logo Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 sm:mb-8"
                >
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl border border-white/10 flex items-center justify-center">
                        <span className="text-xl sm:text-2xl font-bold text-white/70">LOGO</span>
                    </div>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl px-4"
                >
                    Grynz is a universal compiler that seamlessly compiles and runs multiple programming languages with a single command-line interface.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4"
                >
                    <Link
                        to="/download"
                        className="w-full sm:w-auto px-6 py-2 bg-transparent border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500/10 transition-colors text-center"
                    >
                        Download
                    </Link>
                    <Link
                        to="/docs"
                        className="w-full sm:w-auto px-6 py-2 bg-transparent border border-white/20 text-white/90 rounded-lg hover:bg-white/5 transition-colors text-center"
                    >
                        Documentation
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}