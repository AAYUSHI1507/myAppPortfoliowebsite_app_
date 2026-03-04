import emailjs from "@emailjs/browser";
import {
    Github,
    Linkedin,
    Loader2,
    Mail,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { projectId, publicAnonKey } from "../utils/supabase/info";

type ContactFormData = {
    name: string;
    email: string;
    message: string;
};

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [emailConfig, setEmailConfig] = useState<{
        publicKey: string;
        serviceId: string;
        templateId: string;
    } | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>();

    // Fetch EmailJS configuration on component mount
    useEffect(() => {
        const fetchConfig = async () => {
            try {
                const response = await fetch(
                    `https://${projectId}.supabase.co/functions/v1/make-server-03ed5896/emailjs-config`,
                    {
                        headers: {
                            "Authorization": `Bearer ${publicAnonKey}`,
                        },
                    }
                );
                const config = await response.json();
                setEmailConfig(config);

                console.log("EmailJS Config loaded:");
                console.log("- Public Key:", config.publicKey ? `${config.publicKey.substring(0, 10)}...` : "NOT SET");
                console.log("- Service ID:", config.serviceId ? `${config.serviceId.substring(0, 10)}...` : "NOT SET");
                console.log("- Template ID:", config.templateId ? `${config.templateId.substring(0, 10)}...` : "NOT SET");
            } catch (error) {
                console.error("Error fetching EmailJS config:", error);
            }
        };

        fetchConfig();
    }, []);

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);

        try {
            if (!emailConfig || !emailConfig.publicKey || !emailConfig.serviceId || !emailConfig.templateId) {
                console.error("EmailJS credentials missing");
                toast.error("Email service not configured properly.");
                return;
            }

            // Send email directly from frontend using EmailJS
            const response = await emailjs.send(
                emailConfig.serviceId,
                emailConfig.templateId,
                {
                    from_name: data.name,
                    from_email: data.email,
                    reply_to: data.email,
                    message: data.message,
                    to_email: "akataria954@gmail.com",
                },
                emailConfig.publicKey
            );

            console.log("Email sent successfully:", response);
            toast.success("Message sent successfully! I'll get back to you soon.");
            reset();
        } catch (error) {
            console.error("Error sending email:", error);
            toast.error("Failed to send email. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="py-24 px-4 max-w-5xl mx-auto"
        >
            <div className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 rounded-3xl p-8 md:p-12">
                <div className="text-left">
                    <h2 className="text-5xl font-bold mb-6">
                        Let's build something <br /> remarkable.
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-md">
                        I'm currently looking for new opportunities and
                        collaborations. Drop a message and I'll get back to
                        you soon!
                    </p>

                    <div className="flex items-center gap-4">
                        <motion.a
                            whileHover={{ y: -5 }}
                            href="https://github.com/AAYUSHI1507"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <Github size={24} />
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -5 }}
                            href="https://www.linkedin.com/in/aayushi-k-868125200"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <Linkedin size={24} />
                        </motion.a>
                    </div>
                </div>

                <form
                    className="space-y-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <input
                                {...register("name", { required: "Name is required" })}
                                type="text"
                                placeholder="Name"
                                disabled={isSubmitting}
                                className={`bg-white/5 border ${errors.name ? "border-red-500/50" : "border-white/10"
                                    } rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed`}
                            />
                            {errors.name && (
                                <span className="text-[10px] text-red-500 ml-1">
                                    {errors.name.message}
                                </span>
                            )}
                        </div>
                        <div className="space-y-1">
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                                type="email"
                                placeholder="Email"
                                disabled={isSubmitting}
                                className={`bg-white/5 border ${errors.email ? "border-red-500/50" : "border-white/10"
                                    } rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed`}
                            />
                            {errors.email && (
                                <span className="text-[10px] text-red-500 ml-1">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="space-y-1">
                        <textarea
                            {...register("message", { required: "Message is required" })}
                            placeholder="Your Message"
                            rows={4}
                            disabled={isSubmitting}
                            className={`bg-white/5 border ${errors.message ? "border-red-500/50" : "border-white/10"
                                } rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors w-full resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
                        ></textarea>
                        {errors.message && (
                            <span className="text-[10px] text-red-500 ml-1">
                                {errors.message.message}
                            </span>
                        )}
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                        className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <Loader2 size={18} className="animate-spin" />
                        ) : (
                            <Mail size={18} />
                        )}
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </motion.button>
                </form>
            </div>

            <footer className="mt-20 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-gray-500 text-sm">
                <p>
                    © 2026 Developer Aayushi Portfolio. Built with
                    passion.
                </p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">
                        Twitter
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aayushi-k-868125200/"
                        className="hover:text-white"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/AAYUSHI1507"
                        className="hover:text-white"
                    >
                        GitHub
                    </a>
                </div>
            </footer>
        </section>
    );
};