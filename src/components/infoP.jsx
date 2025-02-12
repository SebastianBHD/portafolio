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
                    <div className="xl:flex shadow-xl border rounded-md text-tertiary bg-quinary lg:p-10 p-5 lg:text-4xl md:text-2xl font-poppins font-light mt-4 md:mt-0 md:ml-4">
                        <div className="flex justify-center items-center pb-8">
                            <img className="relative object-cover rounded-lg shadow-xl lg:min-w-[350px] lg:min-h-[500px] w-[200px] h-[250px]" src={yo} alt="Developer" />
                        </div>
                        <div className='grid lg:p-12 gap-10'>
                            <p className='font-light text-tertiary text-justify xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-sm'>
                                {descripcion}
                            </p> 
                            {bool ? (
                                <NavLink to="/aboutMe">
                                    <div className='sm:flex items-center lg:justify-start justify-center'>
                                        <Button className="lg:w-60 lg:h-16 lg:text-2xl sm:w-80 w-full">View More</Button>
                                    </div>
                                </NavLink>
                            ) : (
                                <div className="space-x-4 flex justify-start">
                                    <a href="/cv.pdf" download >
                                        <Button className="lg:w-auto lg:h-16 lg:text-2xl" size="sm" type="submit">Curriculum Vitae</Button>
                                    </a>
                                    <a href="/ReporteEscolaridad.pdf" download>
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