import ProjectCard from './project-card';
import { Button } from './ui/button'
import { NavLink } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

function MyProjects() {
    const { t } = useTranslation();
    const desc1 = t('myProjects.projects.scoutUsMarketing.description');
    const desc2 = t('myProjects.projects.scoutUsApp.description');
    const desc3 = t('myProjects.projects.oneplify.description');
    return (
        <>
            <div className='flex-col p-10 px-5 lg:p-16 justify-between gap-10'>
                <div className="flex items-center justify-center mb-8 lg:mb-12">
                    <div className="flex-grow h-px bg-gradient-to-r from-transparent via-tertiary/50 to-transparent" />
                    <h1 className="mx-6 md:mx-8 md:text-6xl text-3xl font-poppins text-center text-tertiary whitespace-normal break-words font-semibold tracking-tight bg-gradient-to-r from-tertiary to-tertiary/80 bg-clip-text cursor-default">
                        {t('myProjects.title')}
                    </h1>
                    <div className="flex-grow h-px bg-gradient-to-l from-transparent via-tertiary/50 to-transparent" />
                </div>
                <div className="flex justify-center items-center p-5">
                    <p className="md:text-3xl text-lg font-light font-poppins text-center text-tertiary whitespace-normal break-words cursor-default">
                        <i>{t('myProjects.subtitle')}</i>
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-24 xl:p-20 p-10 px-5 justify-items-center items-start">
                    <div className='w-full'>
                        <ProjectCard img="/images/ScoutUsCollege.png" desc={desc1} link="https://scoutuscollege.com/" projectTitle={t('myProjects.projects.scoutUsMarketing.title')}/>
                    </div>
                    <div className='w-full'>
                        <ProjectCard img="/images/ScoutUsCollegeApp.png" desc={desc2} link="https://scoutuscollege.com/colleges" projectTitle={t('myProjects.projects.scoutUsApp.title')}/>
                    </div>
                    <div className='w-full'>
                        <ProjectCard img="/images/Oneplify.png" desc={desc3} link="https://www.oneplify.com/" projectTitle={t('myProjects.projects.oneplify.title')}/>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <NavLink to='/my-projects' className='text-primary hover:text-primary underline'>
                        <Button size='lg'>{t('myProjects.viewAll')}</Button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default MyProjects;
