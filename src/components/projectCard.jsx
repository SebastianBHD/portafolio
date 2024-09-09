

import { Button } from '../components/ui/button';

function ProjectCard({ img = './projectphoto.jpg', desc = 'Coming Soon', link = 'https://www.youtube.com/watch?v=yqWX86uT5jM' }) {
    return (
        <div className="relative group">
            <div className="flex justify-center items-center ">
                <div className="relative text-center rounded-md border-2 lg:transition-transform lg:duration-500 lg:ease-in-outlg:transform lg:group-hover:scale-105">
                    <div className='overflow-hidden lg:[width:300px] lg:[height:250px] xl:[width:400px] xl:[height:280px] md:[width:400px] md:[height:280px] sm:[width:400px] sm:[height:280px] [width:250px] [height:300px]'>
                        <img
                            className="object-cover h-full w-full hover:border-none rounded-md blur-sm"
                            src={img}
                            alt="Developer"
                        />
                    </div>
                    <div className="absolute inset-0 grid xl:p-10 p-5 justify-center hover:border-none rounded-md bg-secondary bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                        <p className="text-white xl:text-md text-sm">
                            {desc}
                        </p>
                        <a href={link}>
                            <Button>View More</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;

