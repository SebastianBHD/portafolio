import yo from '../svg-png/yo.jpg';
import { Button } from '../components/ui/button'
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
                <div className="relative bg-primary p-5 lg:p-20 flex lg:gap-x-20 flex-col xl:flex-row justify-center lg:justify-start items-center animate-ascend">
                    <div className="flex justify-center pb-5 lg:block">
                        <img className="object-cover border-4 border-secondary lg:[min-width:350px] lg:[min-height:500px] [width:200px] [height:250px]" src={yo} alt="Developer" />
                    </div>
                    <div className="grid gap-5 border-2 border-secondary rounded-md text-tertiary bg-secondary lg:p-10 p-5 lg:text-4xl md:text-2xl font-poppins font-light mt-4 md:mt-0 md:ml-4">
                        <p>
                            {descripcion}
                        </p>
                        {bool ? (
                            <NavLink to="/aboutMe">
                                <div>
                                    <Button className="lg:w-36 lg:h-12 lg:text-lg">View More</Button>
                                </div>
                            </NavLink>
                        ) : (
                            <div className="space-x-4">
                                <a href="/path-to-cv" download className="underline hover:text-primary">Curriculum Vitae</a>
                                <a href="/ReporteEscolaridad.pdf" download className="underline hover:text-primary">Scolarship</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default InfoP;