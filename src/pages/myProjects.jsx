import ProjectCard from '../components/projectCard';
import proj1 from '../svg-png/QuePinta.png';
import proj2 from '../svg-png/CoffeePage.png';
import proj from '../svg-png/projectphoto.jpg';

function MyProjects() {

    const desc1 = "A web page where you can consult any movie or TV show data, with an AI Chatbot that helps you choose the best movie that fits you by considering your favorite actors or genres.";
    const desc2 = "A responsive web page where you can see the menu of a coffee shop, with some products and prices with a contact form to make a reservation. It is static only for practice purposes.";
    return (
        <>
            <div className="container mx-auto w-screen p-4">
                <div>
                    <div className="flex items-center justify-center">
                        <div className="flex-grow border-t border-tertiary"></div>
                        <h1 className="mx-4 md:text-6xl text-3xl font-poppins text-center text-tertiary whitespace-normal break-words">
                            My Projects
                        </h1>
                        <div className="flex-grow border-t border-tertiary"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 text-center gap-y-40 gap-x-4 justify-center items-center lg:grid-cols-2 sm:p-20 p-10 lg:p-10 lg:grid-rows-5 xl:grid-cols-3 xl:grid-rows-3 animate-ascend">
                    <div className='flex justify-center'>
                        <ProjectCard img={proj1} desc={desc1} link="http://webir-peliculas.vercel.app" projectTitle='QuePinta'/>
                    </div>
                    <div className='flex justify-center'>
                        <ProjectCard img={proj2} desc={desc2} link="https://sebastianbhd.github.io/coffeepage/" projectTitle='CoffeePage'/>
                    </div>
                    <div className='flex justify-center'>
                        <ProjectCard img={proj}/>
                    </div>
                    <div className='flex justify-center'>
                        <ProjectCard img={proj}/>
                    </div>
                    <div className='flex justify-center'>
                        <ProjectCard img={proj}/>
                    </div>
                    <div className='flex justify-center'>
                        <ProjectCard img={proj}/>
                    </div>
                    <div className='flex justify-center'>
                        <ProjectCard img={proj}/>
                    </div>
                    <div className='flex justify-center'>
                        <ProjectCard img={proj}/>
                    </div>
                    <div className='flex justify-center'>
                        <ProjectCard img={proj}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProjects;