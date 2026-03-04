import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [activeSection, setActiveSection] = useState("hero");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "#hero", id: "hero" },
        { label: "About", href: "#about", id: "about" },
        {
            label: "Experience",
            href: "#experience",
            id: "experience",
        },
        { label: "Projects", href: "#projects", id: "projects" },
        {
            label: "Certifications",
            href: "#certifications",
            id: "certifications",
        },
        {
            label: "Papers",
            href: "#publications",
            id: "publications",
        },
        { label: "Skills", href: "#skills", id: "skills" },
        { label: "Contact", href: "#contact", id: "contact" },
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-50% 0px -50% 0px",
            threshold: 0,
        };

        const observerCallback = (
            entries: IntersectionObserverEntry[],
        ) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions,
        );

        navItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6"
            >
                {/* Desktop & Tablet Navbar */}
                <div className="hidden md:flex bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full items-center gap-6 shadow-2xl relative">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className={`text-[10px] font-bold uppercase tracking-widest transition-all relative z-10 ${activeSection === item.id
                                    ? "text-white"
                                    : "text-gray-500 hover:text-gray-300"
                                }`}
                        >
                            {item.label}
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute -inset-x-2 -inset-y-1 bg-white/10 rounded-full z-[-1]"
                                    transition={{
                                        type: "spring",
                                        bounce: 0.2,
                                        duration: 0.6,
                                    }}
                                />
                            )}
                        </a>
                    ))}
                </div>

                {/* Mobile Trigger - Glassmorphism floating button */}
                <div className="md:hidden w-full flex justify-between items-center px-4">
                    <div className="text-sm font-bold tracking-widest text-white uppercase">
                        Aayushi<span className="text-blue-500">.K</span>
                    </div>
                    <button
                        onClick={toggleMenu}
                        className="p-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl text-white shadow-2xl z-[60] focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[55] bg-black/90 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center p-8"
                    >
                        {/* Background elements */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] -z-10" />

                        <div className="flex flex-col gap-8 w-full max-w-sm">
                            {navItems.map((item, idx) => (
                                <motion.a
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`flex items-center justify-between text-2xl font-bold transition-all ${activeSection === item.id
                                            ? "text-blue-500 translate-x-4"
                                            : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    <span className="flex items-center gap-4">
                                        <span className="text-[10px] text-gray-600 uppercase tracking-widest font-mono">
                                            0{idx + 1}
                                        </span>
                                        {item.label}
                                    </span>
                                    {activeSection === item.id && (
                                        <motion.div
                                            layoutId="mobileActiveDot"
                                            className="w-2 h-2 bg-blue-500 rounded-full"
                                        />
                                    )}
                                </motion.a>
                            ))}
                        </div>

                        {/* Bottom info in menu */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-20 pt-8 border-t border-white/5 w-full max-w-sm flex flex-col items-center gap-4"
                        >
                            <p className="text-gray-500 text-xs tracking-widest uppercase">
                                Available for hire
                            </p>
                            <div className="flex gap-6">
                                <a
                                    href="https://github.com/AAYUSHI1507"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/aayushi-k-868125200"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
