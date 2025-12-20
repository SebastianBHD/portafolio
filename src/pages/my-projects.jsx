import ProjectCard from '../components/project-card';
import { useTranslation } from '../hooks/useTranslation';

function MyProjects() {
    const { t } = useTranslation();
    const desc1 = t('myProjects.projects.scoutUsMarketing.description');
    const desc2 = t('myProjects.projects.scoutUsApp.description');
    const desc3 = t('myProjects.projects.oneplify.description');
    const desc4 = t('myProjects.projects.coffeePage.description');
    const desc5 = t('myProjects.projects.quePinta.description');
    return (
        <>
            <div className="container mx-auto w-screen p-4">
                <div>
                    <div className="flex items-center justify-center mb-8 lg:mb-12">
                        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-tertiary/50 to-transparent" />
                        <h1 className="mx-6 md:mx-8 md:text-6xl text-3xl font-poppins text-center text-tertiary whitespace-normal break-words font-semibold tracking-tight bg-gradient-to-r from-tertiary to-tertiary/80 bg-clip-text cursor-default">
                            {t('myProjects.title')}
                        </h1>
                        <div className="flex-grow h-px bg-gradient-to-l from-transparent via-tertiary/50 to-transparent" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-24 xl:p-20 p-10 px-5 justify-items-center items-start animate-ascend">
                    <div className='w-full'>
                        <ProjectCard img="/images/ScoutUsCollege.png" desc={desc1} link="https://scoutuscollege.com/" projectTitle={t('myProjects.projects.scoutUsMarketing.title')} />
                    </div>
                    <div className='w-full'>
                        <ProjectCard img="/images/ScoutUsCollegeApp.png" desc={desc2} link="https://scoutuscollege.com/colleges" projectTitle={t('myProjects.projects.scoutUsApp.title')} />
                    </div>
                    <div className='w-full'>
                        <ProjectCard img="/images/Oneplify.png" desc={desc3} link="https://www.oneplify.com/" projectTitle={t('myProjects.projects.oneplify.title')} />
                    </div>
                    <div className='w-full'>
                        <ProjectCard img="/images/CoffeePage.png" desc={desc4} link="https://sebastianbhd.github.io/coffeepage/" projectTitle={t('myProjects.projects.coffeePage.title')} />
                    </div>
                    <div className='w-full'>
                        <ProjectCard img="/images/QuePinta.png" desc={desc5} link="http://webir-peliculas.vercel.app" projectTitle={t('myProjects.projects.quePinta.title')} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProjects;