import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header({ changeColor }) {
    const colors = ["#9f86c0", "#ff8f33", "#4caf50"];
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    useEffect(() => {
        const savedColor = localStorage.getItem("primary-color");
        if (savedColor) {
            setSelectedColor(savedColor);
        }
    }, []);

    const handleColorChange = (color) => {
        setSelectedColor(color);
        changeColor(color);
        localStorage.setItem("primary-color", color);
    };

    return (
        <div className="grid justify-center items-center p-4 sm:p-8 gap-y-4">
            <div className="flex space-x-5 md:text-xl font-light text-tertiary">
                <NavLink to="/portafolio" className={({ isActive }) => isActive ? "text-primary underline" : "hover:text-primary"}>Home</NavLink>
                <NavLink to="/aboutMe" className={({ isActive }) => isActive ? "text-primary underline" : "hover:text-primary"}>About Me</NavLink>
                <NavLink to="/myProjects" className={({ isActive }) => isActive ? "text-primary underline" : "hover:text-primary"}>My Projects</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "text-primary underline lg:hidden block" : "hover:text-primary lg:hidden block"}>Contact</NavLink>
            </div>

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
        </div>
    );
}

export default Header;
