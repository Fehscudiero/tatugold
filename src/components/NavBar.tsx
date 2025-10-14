import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "@/assets/icone.png";

const menuItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Simulador", href: "#gold-simulator" },
    { label: "Serviços", href: "#services" },
    { label: "Contato", href: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showMobileSimButton, setShowMobileSimButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 50);
            setShowMobileSimButton(scrollY > 100); // aparece após 100px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const section = document.querySelector(href);
        if (section) {
            const yOffset = -80;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 py-2 flex items-center justify-between h-[56px] gap-4">
                {/* Menu Hamburguer */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Abrir menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Logo com espaço reservado e transição interna */}
                <div className="flex items-center" style={{ height: "40px", minWidth: "120px" }}>
                    <a
                        href="#home"
                        onClick={(e) => handleLinkClick(e, "#home")}
                        className={`transition-all duration-300 ${scrolled ? "opacity-100 scale-100" : "opacity-0 scale-95"
                            }`}
                    >
                        <img src={logoImage} alt="Tatugold" className="w-20 md:w-28 h-auto" />
                    </a>
                </div>

                {/* Botão Simulador - só mobile e com scroll */}
                {showMobileSimButton && (
                    <div className="md:hidden transition-all duration-300">
                        <button
                            onClick={() => scrollToSection("#gold-simulator")}
                            className="px-4 py-2 text-sm font-semibold text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full shadow-md transition-all duration-300 animate-pulse"
                        >
                            Simulador
                        </button>
                    </div>
                )}

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6 ml-auto">
                    {menuItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleLinkClick(e, item.href)}
                            className="text-sm font-medium text-white hover:text-yellow-400 transition duration-200"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-black/90 backdrop-blur-md px-6 py-4 space-y-3">
                    {menuItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleLinkClick(e, item.href)}
                            className="block text-white text-base font-medium hover:text-yellow-400 transition"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
