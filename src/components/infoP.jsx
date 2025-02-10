import yo from '../svg-png/yo.jpg';
import { Button } from './ui/button'
import { NavLink } from 'react-router-dom';


function InfoP({ titulo, descripcion, bool }) {

    return (
        <>
            <div className="grid lg:p-10 min-w-full bg-primary p-5 -mt-5">
                <div>
                    <div className="flex items-center justify-center">
                        <div className="flex-grow border-t border-tertiary"></div>
                        <h1 className="mx-4 md:text-6xl text-3xl font-poppins text-center text-tertiary whitespace-normal break-words">
                            {titulo}
                        </h1>
                        <div className="flex-grow border-t border-tertiary"></div>
                    </div>
                </div>
                <div className="relative p-5 lg:p-20 flex flex-col xl:flex-row justify-center lg:justify-start items-center animate-ascend">
                    <div className="xl:flex shadow-xl border rounded-md text-tertiary bg-secondary bg-opacity-80 lg:p-10 p-5 lg:text-4xl md:text-2xl font-poppins font-light mt-4 md:mt-0 md:ml-4">
                        <div className="flex justify-center pb-5 items-center">
                            <img className="object-cover rounded-lg bg-opacity-50 lg:[min-width:350px] lg:[min-height:500px] [width:200px] [height:250px] shadow-xl" src={yo} alt="Developer" />
                        </div>
                        <div className='grid lg:p-12 gap-10'>
                        <p>
                            {descripcion}
                        </p>
                        {bool ? (
                            <NavLink to="/aboutMe">
                                <div>
                                    <Button className="lg:w-60 lg:h-16 lg:text-2xl">View More</Button>
                                </div>
                            </NavLink>
                        ) : (
                            <div className="space-x-4 flex justify-start">
                                <a href="/portafolio/cv.pdf" download >
                                <Button className="lg:w-auto lg:h-16 lg:text-2xl" size="sm" type="submit">Curriculum Vitae</Button>
                                </a>
                                <a href="/portafolio/ReporteEscolaridad.pdf" download>
                                <Button className="lg:w-auto lg:h-16 lg:text-2xl" size="sm" type="submit">Scolarship</Button>
                                </a>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InfoP;