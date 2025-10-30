import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const CookieBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem('cookiesAccepted');
        if (accepted === null) {
            setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookiesAccepted', 'false');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-3xl bg-gradient-to-br from-zinc-900 via-black to-zinc-800 border border-neutral-700 text-white px-6 py-5 rounded-xl shadow-2xl backdrop-blur-md">
            <div className="space-y-5 text-center">
                <p className="text-sm sm:text-base font-medium leading-relaxed text-gray-200">
                    Este site utiliza cookies para melhorar sua experiência. Você pode aceitar ou rejeitar abaixo.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <Button
                        onClick={handleAccept}
                        variant="outline"
                        className="border border-gray-500 text-gray-300 font-semibold text-sm px-5 py-2 rounded-lg hover:border-gray-400 hover:text-white transition"
                    >
                        Aceitar
                    </Button>
                    <Button
                        onClick={handleReject}
                        variant="outline"
                        className="border border-gray-500 text-gray-300 font-semibold text-sm px-5 py-2 rounded-lg hover:border-gray-400 hover:text-white transition"
                    >
                        Rejeitar
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
