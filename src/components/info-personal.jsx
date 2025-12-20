import { useMemo } from 'react';
import { Button } from './ui/button';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Briefcase, GraduationCap, Languages } from 'lucide-react';
import AnimatedBg from './common/hero-section-animated-bg';
import FlipCard from './flip-card';
import { useTranslation } from '../hooks/useTranslation';

function InfoP({ titulo, descripcion, bool, color }) {
    const { t } = useTranslation();
    const borderStyle = useMemo(() => ({
        border: "4px solid transparent",
        background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)) padding-box, repeating-conic-gradient(from var(--a, 0deg), rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.2) 70%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.95) 82%, rgba(255,255,255,1) 88%, rgba(255,255,255,0.95) 94%, rgba(255,255,255,0) 100%) border-box`,
        filter: `drop-shadow(0 0 12px rgba(255, 255, 255, 0.4))`,
        animation: "borderSpin 6s linear infinite",
    }), []);

    return (
        <>
            <div className="relative min-w-full bg-primary p-5 lg:p-10 pb-0 -mt-5 overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle at 50% 0%, var(--primary-color) 0%, transparent 50%)` }} />
                <div className="relative z-10 mb-8 lg:mb-12">
                    <div className="flex items-center justify-center">
                        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-tertiary/50 to-transparent" />
                        <h1 className="mx-6 md:mx-8 md:text-6xl text-3xl font-poppins text-center text-tertiary whitespace-normal break-words font-semibold tracking-tight bg-gradient-to-r from-tertiary to-tertiary/80 bg-clip-text cursor-default">{titulo}</h1>
                        <div className="flex-grow h-px bg-gradient-to-l from-transparent via-tertiary/50 to-transparent" />
                    </div>
                </div>
                <div className="relative z-10 p-5 lg:p-20 pb-0 flex flex-col xl:flex-row justify-center lg:justify-start items-center animate-ascend">
                    <div className="relative mt-4 md:mt-0 md:ml-4 rounded-2xl" style={borderStyle}>
                        <div className="xl:flex text-tertiary bg-quinary backdrop-blur-sm lg:p-10 p-5 lg:text-4xl md:text-2xl font-poppins font-light rounded-2xl shadow-2xl">
                            {!bool && (
                                <div className="flex justify-center items-center pb-8 xl:pr-8 group">
                                    <div className="relative overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105">
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <img className="relative object-cover rounded-xl lg:min-w-[350px] lg:min-h-[500px] w-[200px] h-[250px] transition-transform duration-500" src="/images/yo.jpg" alt="Developer" />
                                    </div>
                                </div>
                            )}
                            <div className='grid lg:p-12 gap-8 lg:gap-10'>
                                <p className='font-light cursor-default text-tertiary/90 text-justify xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-sm leading-relaxed'>{descripcion}</p>
                                {bool && (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                                        <FlipCard 
                                            icon={Briefcase}
                                            title={t('flipCard.workExperience.title')}
                                            backContent={t('flipCard.workExperience.content')}
                                        />
                                        <FlipCard 
                                            icon={GraduationCap}
                                            title={t('flipCard.engineeringDegree.title')}
                                            backContent={t('flipCard.engineeringDegree.content')}
                                        />
                                        <FlipCard 
                                            icon={Languages}
                                            title={t('flipCard.english.title')}
                                            backContent={t('flipCard.english.content')}
                                        />
                                    </div>
                                )}
                                {bool ? (
                                    <div className='flex justify-end md:justify-end'>
                                        <NavLink to="/about-me" className="group w-full md:w-auto">
                                            <Button className="w-full md:w-auto h-auto px-4 py-2 text-sm md:text-base lg:text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 bg-transparent border border-white text-white hover:bg-white/10">
                                                {t('common.viewMore')}
                                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                            </Button>
                                        </NavLink>
                                    </div>
                                ) : (
                                    <div className="flex flex-wrap gap-4 justify-start">
                                        <a href="/pdfs/cv.pdf" download><Button className="lg:w-auto lg:h-16 lg:text-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg" size="sm" type="submit">{t('common.curriculumVitae')}</Button></a>
                                        <a href="/pdfs/ReporteEscolaridad.pdf" download><Button className="lg:w-auto lg:h-16 lg:text-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg" size="sm" type="submit">{t('common.scholarship')}</Button></a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AnimatedBg selectedColor={color} bool={true} />
        </>
    );
}

export default InfoP;