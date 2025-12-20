import { useState, useEffect, useRef } from 'react';
import Flag from 'react-world-flags';
import { ChevronDown } from 'lucide-react';

const languages = [
    { code: 'es', name: 'Español', flag: 'ES' },
    { code: 'en', name: 'English', flag: 'US' },
    { code: 'pt', name: 'Português', flag: 'PT' }
];

function LanguageDropdown({ language, setLanguage, flagSize = 'w-5 h-5', textSize = 'text-sm', direction = 'down', textColor = 'text-tertiary' }) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    const currentLang = languages.find(lang => lang.code === language);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={ref}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`bg-transparent ${textColor} border-none outline-none px-2 py-1 ${textSize} cursor-pointer flex items-center gap-1`}
            >
                {currentLang?.name}
                <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className={`absolute ${direction === 'up' ? 'bottom-full mb-1' : 'top-full mt-1'} left-0 bg-quinary border border-white/20 rounded-lg shadow-lg z-50 min-w-[120px]`}>
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                setLanguage(lang.code);
                                setIsOpen(false);
                            }}
                            className={`w-full flex items-center gap-2 px-3 py-2 ${textSize} ${textColor} hover:bg-primary/20 transition-colors ${language === lang.code ? 'bg-primary/10' : ''}`}
                        >
                            <div className={`${flagSize} rounded-full overflow-hidden flex items-center justify-center flex-shrink-0`}>
                                <Flag code={lang.flag} className="w-full h-full object-cover" />
                            </div>
                            <span>{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LanguageDropdown;
