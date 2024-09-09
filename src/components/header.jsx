
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <>
            <div className="w-full md:p-5 p-2 flex justify-center">

                <div className="flex justify-center items-center space-x-5 md:text-xl font-light text-tertiary">
                    <NavLink
                        to="/portafolio"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary hover:text-primary underline"
                                : "hover:text-primary"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/aboutMe"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary hover:text-primary underline"
                                : "hover:text-primary"
                        }
                    >
                        About Me
                    </NavLink>
                    <NavLink
                        to="/myProjects"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary hover:text-primary underline"
                                : "hover:text-primary"
                        }
                    >
                        My Projects
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary hover:text-primary underline xl:hidden block"
                                : "hover:text-primary xl:hidden block"
                        }
                    >
                        Contact
                    </NavLink>
                </div>

            </div>
        </>
    )
}

export default Header;