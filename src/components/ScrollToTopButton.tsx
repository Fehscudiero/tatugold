import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 200);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, y: 50, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.5 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-20 left-6 z-50 group"
                    aria-label="Voltar ao topo"
                >
                    <div className="absolute inset-0 bg-yellow-400 rounded-full blur-lg opacity-50 group-hover:opacity-75 group-hover:blur-xl transition-all duration-300" />
                    <div className="relative bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-black p-3 sm:p-4 rounded-full shadow-xl shadow-yellow-500/30 group-hover:shadow-yellow-500/50 transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12" />
                        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;
