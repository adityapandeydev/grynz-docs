import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#102542] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center max-w-4xl px-4 sm:px-6 text-center">
                {/* Hero Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-6xl font-bold text-white mb-6"
                >
                    Compile Everything,<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f87060] to-[#f87060]/70">
                        With One Tool
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl"
                >
                    The universal compiler that brings simplicity to your development workflow.
                    Write in any language, compile with a single command.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Link
                        to="/download"
                        className="px-8 py-3 bg-[#f87060] text-white rounded-lg hover:bg-[#f87060]/90 transition-colors text-center font-medium"
                    >
                        Download
                    </Link>
                    <Link
                        to="/docs"
                        className="px-8 py-3 bg-transparent border border-white/20 text-white/90 rounded-lg hover:bg-white/5 transition-colors text-center font-medium"
                    >
                        Read Documentation
                    </Link>
                </motion.div>

                {/* Feature Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl"
                >
                    {[
                        { title: "Multi-Language", desc: "Support for all major programming languages" },
                        { title: "Easy to Use", desc: "Simple CLI interface" },
                    ].map((feature, index) => (
                        <div key={index} className="p-6 rounded-lg border border-white/10 bg-white/5 hover:border-[#f87060]/50 transition-colors">
                            <h3 className="text-white font-medium mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}