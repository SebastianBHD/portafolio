import { Button } from './ui/button';
import proj from '../svg-png/projectphoto.jpg';

function ProjectCard({ img = { proj }, desc = 'Coming Soon', link = 'https://www.youtube.com/watch?v=mCdA4bJAGGk', projectTitle = '' }) {
    return (
        <div className='flex flex-col max-w-96 min-w-80 h-full border-[1px] border-primary rounded-lg shadow-lg'>
            <div className='flex flex-col justify-center'>
                <img className='w-full h-56 object-cover rounded-t-lg' src={img} />
            </div>
            <div className='flex flex-col justify-center items-center md:text-xl min-w-full min-h-72 font-light text-start text-tertiary p-4 gap-y-4 bg-secondary rounded-b-lg'>
                <h3 className='flex text-2xl font-bold justify-start text-start w-full'>{projectTitle}</h3>
                <p className='flex'>{desc}</p>
                <a href={link} target='_blank' rel='noreferrer'>
                    <Button>View Project</Button>
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;

