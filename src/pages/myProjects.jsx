import ProjectCard from '../components/projectCard';

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
                <div className="grid grid-cols-1 text-center gap-10 lg:grid-cols-2 p-20 lg:p-10 lg:grid-rows-5 xl:grid-cols-3 xl:grid-rows-3 animate-ascend">
                    <div>
                        <h2 className='text-xl xl:text-3xl lg:text-3xl font-poppins pb-2 text-tertiary'>QuePinta</h2>
                        <ProjectCard img="./portafolio/QuePinta.png" desc={desc1} link="http://webir-peliculas.vercel.app"/>
                    </div>
                    <div>
                        <h2 className='text-xl xl:text-3xl lg:text-3xl font-poppins pb-2 text-tertiary'>CoffeePage</h2>
                        <ProjectCard img="./portafolio/CoffeePage.png" desc={desc2} link="https://sebastianbhd.github.io/coffeepage/"/>
                    </div>
                    <div>
                        <h2 className='text-xl xl:text-3xl lg:text-3xl font-poppins pb-2 text-tertiary'>Coming Soon</h2>
                        <ProjectCard />
                    </div>
                    <div>
                        <h2 className='text-xl xl:text-3xl lg:text-3xl font-poppins pb-2 text-tertiary'>Coming Soon</h2>
                        <ProjectCard />
                    </div>
                    <div>
                        <h2 className='text-xl xl:text-3xl lg:text-3xl font-poppins pb-2 text-tertiary'>Coming Soon</h2>
                        <ProjectCard />
                    </div>
                    <div>
                        <h2 className='text-xl xl:text-3xl lg:text-3xl font-poppins pb-2 text-tertiary'>Coming Soon</h2>
                        <ProjectCard />
                    </div>
                    <div>
                        <h2 className='text-xl xl:text-3xl lg:text-3xl font-poppins pb-2 text-tertiary'>Coming Soon</h2>
                        <ProjectCard />
                    </div>
                    <div>
                        <h2 className='text-xl xl:text-3xl lg:text-3xl font-poppins pb-2 text-tertiary'>Coming Soon</h2>
                        <ProjectCard />
                    </div>
                    <div>
                        <h2 className='text-xl xl:text-3xl lg:text-3xl font-poppins pb-2 text-tertiary'>Coming Soon</h2>
                        <ProjectCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProjects;