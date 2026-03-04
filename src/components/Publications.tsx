import { BookOpen, FileText } from "lucide-react";
import { motion } from "motion/react";

export const Publications = () => {
    const publications = [
        {
            title:
                "Sarcasm Detection Using Natural Language Processing",
            journal: "KeAI",
            year: "2023",
            description:
                "Sarcasm detection using natural language processing (NLP) enables identification of sarcastic expressions in text by analyzing linguistic cues and contextual meaning. Here we have developed a web application that not only detects sarcasm but also provides users with a detailed analysis of the input text.",
            tags: [
                "Flask",
                "Python",
                "Sarcasm detection",
                "sentiment analysis",
                "News headlines",
                "Machine Learning",
            ],
        },
    ];
    function redirectToSite() {
        // URL to open
        const url = "https://ssrn.com/abstract=4451909";

        // Open in a new tab
        window.open(url, "_blank");
    }

    return (
        <section
            id="publications"
            className="py-24 px-4 max-w-5xl mx-auto bg-white/[0.02] rounded-[3rem]"
        >
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">
                    Paper Publications
                </h2>
                <p className="text-gray-400">
                    Research and theoretical contributions to the field of
                    software development
                </p>
            </div>

            <div className="grid gap-6">
                {publications.map((paper, idx) => (
                    <motion.div
                        key={idx}
                        initial={{
                            opacity: 0,
                            x: idx % 2 === 0 ? -20 : 20,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group"
                    >
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <BookOpen
                                        size={20}
                                        className="text-purple-400"
                                    />
                                    <span className="text-sm font-medium text-gray-400">
                                        {paper.journal} • {paper.year}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                                    {paper.title}
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    {paper.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {paper.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <button
                                className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all self-start"
                                onClick={redirectToSite}
                            >
                                <FileText size={18} />
                                Read Paper
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};