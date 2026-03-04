import React from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Experience = () => {
    const experiences = [
        {
            role: "Programmer Analyst",
            company: "Cognizant",
            period: "2024 - Present (2 Years)",
            description:
                "Leading the development of enterprise-scale applications, focusing on robust backend architectures and seamless Salesforce integrations. Responsible for full-stack delivery and system optimization.",
            skills: [
                "Salesforce",
                "Python",
                "Flask",
                "CI/CD",
                "Agile",
                "LWC",
                "Apex Programming",
                "Visualforce",
            ],
            logo: "https://media.licdn.com/dms/image/v2/D4E0BAQFZH4svu5BTZA/company-logo_100_100/B4EZk_EfNgHgAU-/0/1757699778309/cognizant_logo?e=1772668800&v=beta&t=KdH6FwHXfSbQe9B424EHOut5e4q7RYIUh5P3Dgni-Yg",
            type: "Full-time",
        },
        {
            role: "Web Development Intern",
            company: "The Sparks Foundation",
            period: "Apr 2022 - May 2022 · 2 mos",
            description:
                "Developed and implemented responsive web features. Gained hands-on experience with modern frontend frameworks and collaborative development workflows.",
            skills: ["Web Development", "React", "Frontend"],
            logo: "https://media.licdn.com/dms/image/v2/C560BAQFgHU3sTF4LfQ/company-logo_100_100/company-logo_100_100/0/1631365213896?e=1772668800&v=beta&t=FZ3SHmFvTjo2XxRQr2_TabRlJL-hn4rU1DDeqTIxHVY",
            type: "Internship",
        },
        {
            role: "Web Development Intern",
            company: "LetsGrowMore",
            period: "Jan 2022 - Feb 2022 · 2 mos",
            description:
                "Contributed to various web projects, focusing on building user-centric interfaces and improving site performance through optimized code practices.",
            skills: ["Web Development", "JavaScript", "HTML/CSS"],
            logo: "https://media.licdn.com/dms/image/v2/C4E0BAQH3Wp-0LMBbcw/company-logo_200_200/company-logo_200_200/0/1641653606284/letsgrowmore_logo?e=1772668800&v=beta&t=QzXasVUnsHajatIQRUghTCCVp544xltaL1amJFY36Nw",
            type: "Internship",
        },
    ];

    return (
        <section
            id="experience"
            className="py-24 px-4 max-w-5xl mx-auto"
        >
            <div className="mb-16">
                <h2 className="text-4xl font-bold mb-4">
                    Professional Journey
                </h2>
                <div className="w-20 h-1 bg-blue-500 rounded-full" />
            </div>

            <div className="space-y-12">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative pl-8 border-l border-white/10"
                    >
                        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-black shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                            <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-6">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        <ImageWithFallback
                                            src={exp.logo}
                                            alt={exp.company}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <p className="text-blue-400 font-medium">
                                                {exp.company}
                                            </p>
                                            <span className="text-gray-600 text-xs">
                                                •
                                            </span>
                                            <p className="text-gray-500 text-sm">
                                                {exp.type}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                    <Calendar
                                        size={14}
                                        className="text-blue-500"
                                    />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            <p className="text-gray-400 mb-6 leading-relaxed max-w-3xl">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-blue-500/5 border border-blue-500/10 rounded-full text-xs text-blue-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};