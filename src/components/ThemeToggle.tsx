import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ onToggle }: { onToggle?: () => void }) {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        const saved = Cookies.get('theme') || localStorage.getItem('theme') || 'dark';
        document.documentElement.classList.toggle('dark', saved === 'dark');
        setTheme(saved as 'light' | 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setAnimating(true);
        setTimeout(() => setAnimating(false), 300);

        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        Cookies.set('theme', newTheme, { expires: 30 });

        document.documentElement.classList.toggle('dark', newTheme === 'dark');

        if (onToggle) onToggle();
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black shadow-md hover:scale-105 transition-transform duration-300 overflow-hidden"
            aria-label="Alternar tema"
        >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[goldSweep_2.5s_infinite]" />
            <span
                key={theme}
                className={`relative z-10 transition-all duration-300 ease-in-out transform ${animating ? 'scale-125 rotate-180 opacity-0' : 'scale-100 opacity-100'
                    }`}
            >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </span>
        </button>
    );
}
