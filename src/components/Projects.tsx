import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Projects = () => {
    const projects = [
        {
            title: "Sarcasm Detection using Natural Language",
            category: "Natural language Processing",
            image:
                "https://images.unsplash.com/photo-1753998943228-73470750c597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2RpbmclMjBwcm9qZWN0JTIwc2hvd2Nhc2UlMjBkYXJrfGVufDF8fHx8MTc2OTg5MDgwMHww",
            description:
                "Creating a web application for detecting sarcasm in various newspaper headlines using Natural language processing in machine learning.",
            tech: [
                "Python",
                "Flask",
                "Skit learn",
                "Tailwind",
                "Project Management",
            ],
            githubUrl: "https://github.com/AAYUSHI1507/Major_project_sarcasm_detection",
            externalUrl: "",
        },
        {
            title: "Forecasting Livestock using Stream lit",
            category: "Machine Learning",
            image:
                "https://images.unsplash.com/photo-1745509267699-1b1db256601e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "The goal of this application is to develop a stock predictor tool that uses data from Yahoo Finance's service to forecast future stock closing prices. Fbprophet is used for the prediction, while Stream lit was used to develop the web application.",
            tech: [
                "Python",
                "Flask",
                "Skit learn",
                "Tailwind",
                "Project Management",
                "Machine Learning",
            ],
            githubUrl: "",
            externalUrl: "https://drive.google.com/file/d/1-gV1D3CsbV4mL7QVdOdnPyT3OdPGcuf6/view",
        },
    ];

    return (
        <section
            id="projects"
            className="py-24 px-4 max-w-5xl mx-auto"
        >
            <div className="mb-16">
                <h2 className="text-4xl font-bold mb-4">
                    Featured Work
                </h2>
                <p className="text-gray-400">
                    A collection of projects showcasing my technical
                    versatility
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="group cursor-pointer"
                    >
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                            <ImageWithFallback
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                <div className="flex gap-4">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.externalUrl && (
                                        <a
                                            href={project.externalUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
                                {project.category}
                            </span>
                            <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 line-clamp-2">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-[10px] font-bold px-2 py-1 bg-white/5 border border-white/10 rounded uppercase tracking-widest text-gray-300"
                                    >
                                        {t}
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