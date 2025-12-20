import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation";
import Flag from 'react-world-flags';
import LanguageDropdown from './language-dropdown';

function Header({ changeColor }) {
    const colors = ["#9f86c0", "#ff8f33", "#4caf50"];
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const { t, language, setLanguage } = useTranslation();
    const flagCodes = { es: 'ES', en: 'US', pt: 'PT' };

    useEffect(() => {
        const savedColor = localStorage.getItem("primary-color");
        if (savedColor) setSelectedColor(savedColor);
    }, []);

    const handleColorChange = (color) => {
        setSelectedColor(color);
        changeColor(color);
        localStorage.setItem("primary-color", color);
    };

    return (
        <div className="p-4 sm:p-8 lg:px-20 px-5">
            <div className="relative flex items-center justify-center">
                <div className="flex space-x-5 md:text-xl font-light text-tertiary">
                    <NavLink to="/portafolio" className={({ isActive }) => isActive ? "text-primary underline" : "hover:text-primary"}>{t('header.home')}</NavLink>
                    <NavLink to="/about-me" className={({ isActive }) => isActive ? "text-primary underline" : "hover:text-primary"}>{t('header.aboutMe')}</NavLink>
                    <NavLink to="/my-projects" className={({ isActive }) => isActive ? "text-primary underline" : "hover:text-primary"}>{t('header.myProjects')}</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "text-primary underline lg:hidden block" : "hover:text-primary lg:hidden block"}>{t('header.contact')}</NavLink>
                </div>
                <div className="absolute right-0 hidden md:flex items-center gap-2">
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-full overflow-hidden flex items-center justify-center">
                        <Flag code={flagCodes[language]} className="w-full h-full object-cover" />
                    </div>
                    <LanguageDropdown language={language} setLanguage={setLanguage} flagSize="w-5 h-5" textSize="text-sm md:text-base" textColor="text-tertiary" />
                </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-4">
                <div className="flex space-x-2 items-center justify-center">
                    {colors.map((color) => (
                        <button
                            key={color}
                            className={`w-6 h-6 md:w-12 md:h-12 rounded-full ${selectedColor === color ? "border-2 border-white" : ""}`}
                            style={{ backgroundColor: color }}
                            onClick={() => handleColorChange(color)}
                        ></button>
                    ))}
                </div>
                <div className="flex md:hidden items-center gap-2 border border-white rounded-xl px-1 py-[2px]">
                    <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center">
                        <Flag code={flagCodes[language]} className="w-full h-full object-cover" />
                    </div>
                    <LanguageDropdown language={language} setLanguage={setLanguage} flagSize="w-4 h-4" textSize="text-sm" textColor="text-tertiary" />
                </div>
            </div>
        </div>
    );
}

export default Header;
