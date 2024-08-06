import ProjectCard from './projectCard';
import { Button } from '../components/ui/button'
import { NavLink } from 'react-router-dom';

function MyProjects() {

    const desc1 = "A web page where you can consult any movie or TV show data, with an AI Chatbot that helps you choose the best movie that fits you by considering your favorite actors or genres.";

    return (
        <>
            <div className='p-12 lg:p-16 justify-center align-middle flex-col'>
                <div className="flex items-center p-2 justify-center">
                    <div className="flex-grow border-t border-tertiary"></div>
                    <h1 className="mx-4 md:text-6xl text-3xl font-poppins text-center text-tertiary whitespace-normal break-words">
                        My Projects
                    </h1>
                    <div className="flex-grow border-t border-tertiary"></div>
                </div>
                <div className="flex justify-center items-center p-5">
                    <p className="md:text-3xl text-lg font-light font-poppins text-center text-tertiary whitespace-normal break-words">
                        <i>These are some of the projects I have worked on</i>
                    </p>
                </div>
                <div className="grid lg:flex lg:flex-row gap-10 md:p-20 p-10 justify-center items-center text-center">
                    <div>
                        <h2 className='text-xl xl:text-3xl lg:text-3xl font-poppins pb-2 text-tertiary'>QuePinta</h2>
                        <ProjectCard img="../QuePinta.png" desc={desc1} link="http://webir-peliculas.vercel.app"/>
                    </div>
                    <div>
                        <h2 className='text-xl xl:text-3xl lg:text-3xl font-poppins pb-2 text-tertiary'>Coming Soon</h2>
                        <ProjectCard />
                    </div>
                    <div>
                        <h2 className='text-xl xl:text-3xl lg:text-3xl font-poppins pb-2 text-tertiary'>Coming Soon</h2>
                        <ProjectCard/>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <NavLink to='/myProjects' className='text-primary hover:text-primary underline'>
                        <Button size='lg'>View All Projects</Button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default MyProjects;