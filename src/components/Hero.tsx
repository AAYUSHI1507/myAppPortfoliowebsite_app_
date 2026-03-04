import React from "react";
import { motion } from "motion/react";
import { Award, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
        >
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center z-10"
            >
                <div className="flex flex-col items-center mt-25">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-blue-500 font-bold tracking-[0.4em] uppercase text-sm mb-4"
                    >
                        Aayushi Kataria
                    </motion.p>
                    <h1 className="text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40">
                        Crafting Scalable <br /> Solutions with Code.
                    </h1>
                </div>

                <p className="max-w-xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed">
                    Full-stack developer with 2 years of experience at
                    Cognizant. Specializing in Salesforce, Python, and
                    Enterprise Application Development.
                </p>

                <div className="flex items-center justify-center gap-4">
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-blue-50 transition-colors inline-block"
                    >
                        View Work
                    </motion.a>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-white/5 border border-white/10 font-semibold rounded-full hover:bg-white/10 transition-colors inline-block"
                    >
                        Contact Me
                    </motion.a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-20 relative w-full max-w-4xl"
            >
                <div className="aspect-[32/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative"></div>

                {/* Floating Achievement Card */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -right-8 top-1/4 bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                            <Award className="text-white" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400">
                                Latest Achievement
                            </p>
                            <p className="text-sm font-semibold">
                                Salesforce Certified
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};