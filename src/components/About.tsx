import React from "react";
import { motion } from "motion/react";
import { Code2, Cpu } from "lucide-react";

export const About = () => {
    return (
        <section
            id="about"
            className="py-24 relative overflow-hidden bg-black"
        >
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-12">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-[1px] bg-blue-500" />
                            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500">
                                About Me
                            </h2>
                        </div>

                        <h3 className="text-5xl font-bold mb-8 leading-tight">
                            I'm{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Aayushi Kataria
                            </span>
                            , a passionate developer.
                        </h3>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            With over 2 years of experience as a Programmer
                            Analyst at Cognizant, I specialize in building
                            robust enterprise solutions. My journey is fueled
                            by a passion for clean code and a commitment to
                            continuous learning, evidenced by my Salesforce
                            Platform Developer certification.
                        </p>
                    </motion.div>

                    {/* Main Layout: Cards Left */}
                    <div className="flex flex-col lg:flex-row items-start gap-12">
                        {/* Left side: Vertically aligned cards */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex-1 flex flex-col gap-6 w-full lg:max-w-xl"
                        >
                            <div className="bg-[#0f0f0f] border border-white/5 p-8 rounded-[2rem] flex items-center gap-6 group hover:border-blue-500/30 transition-all duration-500">
                                <div className="w-16 h-16 bg-blue-500/5 rounded-2xl flex items-center justify-center shrink-0 border border-blue-500/10 group-hover:scale-110 transition-transform">
                                    <Code2 className="text-blue-500/70 w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-white">
                                        Clean Architecture
                                    </h4>
                                    <p className="text-base text-gray-500 leading-relaxed">
                                        Focusing on building scalable and
                                        maintainable enterprise systems.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#0f0f0f] border border-white/5 p-8 rounded-[2rem] flex items-center gap-6 group hover:border-purple-500/30 transition-all duration-500">
                                <div className="w-16 h-16 bg-purple-500/5 rounded-2xl flex items-center justify-center shrink-0 border border-purple-500/10 group-hover:scale-110 transition-transform">
                                    <Cpu className="text-purple-500/70 w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-white">
                                        Cloud Solutions
                                    </h4>
                                    <p className="text-base text-gray-500 leading-relaxed">
                                        Expertise in Salesforce platform and modern
                                        cloud ecosystems.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};