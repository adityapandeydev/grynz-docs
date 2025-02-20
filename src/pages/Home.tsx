import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center max-w-3xl px-6 text-center">
                {/* Logo Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                    >
                    <div className="w-32 h-32 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl border border-white/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white/70">LOGO</span>
                    </div>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-gray-400 text-lg mb-12 max-w-2xl"
                >
                    Grynz is a universal compiler that seamlessly compiles and runs multiple programming languages with a single command-line interface.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex gap-4"
                >
                    <Link
                        to="/download"
                        className="px-6 py-2 bg-transparent border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500/10 transition-colors"
                    >
                        Download
                    </Link>
                    <Link
                        to="/docs"
                        className="px-6 py-2 bg-transparent border border-white/20 text-white/90 rounded-lg hover:bg-white/5 transition-colors"
                    >
                        Documentation
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}