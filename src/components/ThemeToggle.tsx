import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function ThemeToggle() {
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
    };

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded transition duration-300 relative overflow-hidden border border-yellow-600 shadow-md bg-gradient-to-r from-neutral-900 to-neutral-800 text-yellow-400 hover:scale-105"
        >
            <span
                key={theme}
                className={`inline-block transform transition-all duration-300 ${animating ? 'scale-125 opacity-0' : 'scale-100 opacity-100'
                    }`}
            >
                {theme === 'light' ? '🌙' : '☀️'}
            </span>
        </button>
    );
}
