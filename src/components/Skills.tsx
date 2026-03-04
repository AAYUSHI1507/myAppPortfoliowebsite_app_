import React from 'react';
import { motion } from 'motion/react';
import { Code2, Terminal, Database, Globe, Layers, Cpu } from 'lucide-react';

const SkillItem = ({ icon: Icon, name, level, color }: { icon: any, name: string, level: string, color: string }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center gap-4 text-center group transition-colors hover:border-blue-500/30"
    >
        <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center transition-colors ${color}`}>
            <Icon size={24} />
        </div>
        <div>
            <h4 className="font-bold text-lg mb-1">{name}</h4>
            <p className="text-sm text-gray-500">{level}</p>
        </div>
    </motion.div>
);

export const Skills = () => {
    const skills = [
        { name: 'Python', level: 'Advanced', icon: Code2, color: 'text-blue-400' },
        { name: 'Flask', level: 'Backend', icon: Globe, color: 'text-gray-400' },
        { name: 'Java', level: 'Enterprise', icon: Terminal, color: 'text-red-400' },
        { name: 'C#', level: 'DotNet', icon: Layers, color: 'text-purple-400' },
        { name: 'Salesforce', level: 'Certified PD', icon: Cpu, color: 'text-sky-400' },
        { name: 'Databases', level: 'SQL / NoSQL', icon: Database, color: 'text-emerald-400' },
    ];

    return (
        <section id="skills" className="py-24 px-4 max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Technical Arsenal</h2>
                <p className="text-gray-400">Deep expertise across multiple programming paradigms</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, idx) => (
                    <SkillItem key={idx} {...skill} />
                ))}
            </div>
        </section>
    );
};
