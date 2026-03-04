import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Award, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Certifications = () => {
    const certifications = [
        {
            title: "Salesforce Certified Platform Developer I",
            issuer: "Salesforce",
            date: "2026",
            image:
                "https://media.licdn.com/dms/image/v2/D4D22AQGu0fb0GWhdzw/feedshare-shrink_2048_1536/B4DZwS5nD.GYAk-/0/1769843618292?e=1772668800&v=beta&t=2TLzbgAcsUZUqcKAYBbhdmGdE7GgZpA9SOw9FJRRjPw",
            link: "https://www.salesforce.com/trailblazer/hsjo6rx8e7uzcpct8w",
        },
        // Add more here
        {
            title:
                "Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate",
            issuer: "Oracle",
            date: "2024",
            image:
                "https://brm-workforce.oracle.com/pdf/certview/images/OCI24AICFA.png",
            link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=2F0D856A25834205F8FEB827B8085439D3BFC2E51F5596653E1FF262342487A2",
        },
        {
            title:
                "Develop Serverless Apps with Firebase Skill Badge",
            issuer: "Google Cloud",
            date: "2025",
            image:
                "https://images.credly.com/size/680x680/images/826e89a5-1a1d-4e6c-b740-531957965a78/image.png",
            link: "https://www.credly.com/badges/07393538-281c-440c-8f65-a010a620da31/linked_in_profile",
        },
        {
            title:
                "Deploy Kubernetes Applications on Google Cloud Skill Badge",
            issuer: "Google Cloud",
            date: "2025",
            image:
                "https://images.credly.com/size/680x680/images/f0388a0c-130f-47cd-8750-d6357e907e58/image.png",
            link: "https://www.credly.com/badges/f2c61908-116d-40ca-8b70-57438c3a546b/linked_in_profile",
        },
    ];

    return (
        <section
            id="certifications"
            className="py-24 px-4 max-w-5xl mx-auto"
        >
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-4xl font-bold">Certifications</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {certifications.map((cert, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all"
                    >
                        <div className="aspect-video overflow-hidden">
                            <ImageWithFallback
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-2 text-blue-400 text-sm font-bold uppercase tracking-widest mb-2">
                                <ShieldCheck size={16} />
                                {cert.issuer}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">
                                {cert.title}
                            </h3>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500">
                                    {cert.date}
                                </span>
                                <a
                                    href={cert.link}
                                    className="flex items-center gap-2 text-sm font-bold hover:text-blue-400 transition-colors"
                                >
                                    Verify <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};