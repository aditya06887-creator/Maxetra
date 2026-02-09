import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center max-w-xl"
            >
                <p className="mt-b text-2xl md:text-4xl font-bold text-gray-300">
                    Whoops, that page is gone.
                </p>

                {/* Subtitle */}
                <p className="my-4 text-lg md:text-xl text-gray-300">
                   The page you're looking for doesn't exist or has been moved.
                </p>

                {/* 404 Heading */}
                <h1 className="text-8xl md:text-9xl font-extrabold tracking-tight">
                    404
                </h1>

                {/* Return Home Button */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg"
                >
                    <FaArrowLeft />
                    Return to Home
                </Link>
            </motion.div>
        </div>
    );
}
