
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <>
            <div className="flex justify-center items-center p-4 sm:p-8">
                <div className="flex justify-between space-x-5 md:text-xl font-light text-tertiary">
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
                                ? "text-primary hover:text-primary underline lg:hidden block"
                                : "hover:text-primary lg:hidden block"
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