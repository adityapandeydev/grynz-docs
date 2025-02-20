import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
            <motion.h1
                className="text-5xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                404
            </motion.h1>
            <p className="text-lg text-gray-300 mb-6">Oops! The page you're looking for doesn't exist.</p>
            <Link
                to="/"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-md"
            >
                Go Home
            </Link>
        </div>
    );
}
