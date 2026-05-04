import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import logoImage from "@/assets/icone.png";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "next-themes";

const menuItems = [
    { label: "Início", href: "#hero-bg" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#service" },
    { label: "Simulador", href: "#gold-simulator" },
    { label: "Localização", href: "#location" },
    { label: "Contato", href: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showMobileSimButton, setShowMobileSimButton] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 50);
            setShowMobileSimButton(scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const section = document.querySelector(href);
        if (section) {
            const offset = href === "#service" ? 0 : -80;
            const y = section.getBoundingClientRect().top + window.pageYOffset + offset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    const handleLinkClick = (e: React.MouseEvent, href: string) => {
        e.preventDefault();
        scrollToSection(href);
        setIsOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled
                    ? theme === "light"
                        ? "bg-white/70 backdrop-blur-xl shadow-lg shadow-black/5"
                        : "bg-black/70 backdrop-blur-xl shadow-lg shadow-yellow-500/5"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 py-1 flex items-center justify-between h-[70px] gap-4 relative">
                <button
                    className="md:hidden text-white relative z-50"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                >
                    <motion.div
                        animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </motion.div>
                </button>

                {showMobileSimButton && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center"
                    >
                        <a href="#hero-bg" onClick={(e) => handleLinkClick(e, "#hero-bg")}>
                            <img src={logoImage} alt="Tatugold" className="w-20 md:w-28 h-auto" />
                        </a>
                    </motion.div>
                )}

                {showMobileSimButton && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="md:hidden"
                    >
                        <button
                            onClick={() => scrollToSection("#gold-simulator")}
                            className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-black rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 shadow-lg hover:shadow-[0_0_25px_rgba(251,191,36,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            <Sparkles className="w-4 h-4 mr-1" />
                            <span>Simulador</span>
                        </button>
                    </motion.div>
                )}

                <nav className="hidden md:flex gap-2 ml-auto items-center" aria-label="Menu principal">
                    {menuItems.map((item, index) => (
                        <motion.a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleLinkClick(e, item.href)}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative px-4 py-2 text-sm font-medium text-white/90 hover:text-yellow-400 transition-all duration-300 group"
                        >
                            {item.label}
                            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg blur-sm" />
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:w-full transition-all duration-300 rounded-full" />
                        </motion.a>
                    ))}
                    <div className="ml-2">
                        <ThemeToggle />
                    </div>
                </nav>

                {!scrolled && (
                    <div className="md:hidden ml-auto">
                        <ThemeToggle />
                    </div>
                )}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "-100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className={`md:hidden absolute top-[70px] left-0 w-full h-screen z-40 ${
                            theme === "light"
                                ? "bg-white/95 backdrop-blur-xl"
                                : "bg-black/95 backdrop-blur-xl"
                        }`}
                    >
                        <nav className="flex flex-col p-8 space-y-4" aria-label="Menu mobile">
                            {menuItems.map((item, index) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => handleLinkClick(e, item.href)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-xl font-semibold text-foreground hover:text-yellow-500 transition-colors"
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <div className="pt-6">
                                <ThemeToggle onToggle={() => setIsOpen(false)} />
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
