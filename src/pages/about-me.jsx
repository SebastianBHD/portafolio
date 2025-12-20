import { useMemo } from 'react';
import InfoP from '../components/info-personal';
import MoreInfo from '../components/more-info';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Baby, GraduationCap, School, Briefcase } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

function AboutMe({ color = '#9f86c0'}) {
  const { t } = useTranslation();
  const descText = t('aboutMe.description');
  const name = t('home.name');
  const degree = t('home.degree');
  const credits = t('home.credits');
  const subjects = t('home.subjects');
  
  const desc = (
    <>
      {descText.split(/(\{name\}|\{degree\}|\{credits\}|\{subjects\})/).map((part, index) => {
        if (part === '{name}') {
          return <span key={index} className=" text-primary font-normal cursor-default">{name}</span>;
        }
        if (part === '{degree}') {
          return <span key={index} className=" text-primary font-normal cursor-default">{degree}</span>;
        }
        if (part === '{credits}') {
          return <span key={index} className=" text-primary font-normal cursor-default">{credits}</span>;
        }
        if (part === '{subjects}') {
          return <span key={index} className=" text-primary font-normal cursor-default">{subjects}</span>;
        }
        return part;
      })}
    </>
  );

  // Convertir color hex a RGB para el timeline
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Timeline events data
  const timelineEvents = useMemo(() => [
    {
      id: 1,
      type: 'work',
      date: 'April 7, 2003',
      title: t('timeline.birth.title'),
      subtitle: t('timeline.birth.subtitle'),
      description: t('timeline.birth.description'),
      icon: Baby
    },
    {
      id: 2,
      type: 'education',
      date: '2008',
      title: t('timeline.schoolStarted.title'),
      subtitle: t('timeline.schoolStarted.subtitle'),
      description: t('timeline.schoolStarted.description'),
      icon: School
    },
    {
      id: 3,
      type: 'education',
      date: '2013',
      title: t('timeline.schoolCompleted.title'),
      subtitle: t('timeline.schoolCompleted.subtitle'),
      description: t('timeline.schoolCompleted.description'),
      icon: GraduationCap
    },
    {
      id: 4,
      type: 'education',
      date: '2014',
      title: t('timeline.highSchoolStarted.title'),
      subtitle: t('timeline.highSchoolStarted.subtitle'),
      description: t('timeline.highSchoolStarted.description'),
      icon: School
    },
    {
      id: 5,
      type: 'education',
      date: '2020',
      title: t('timeline.highSchoolCompleted.title'),
      subtitle: t('timeline.highSchoolCompleted.subtitle'),
      description: t('timeline.highSchoolCompleted.description'),
      icon: GraduationCap
    },
    {
      id: 6,
      type: 'education',
      date: '2021',
      title: t('timeline.universityStarted.title'),
      subtitle: t('timeline.universityStarted.subtitle'),
      description: t('timeline.universityStarted.description'),
      icon: School
    },
    {
      id: 7,
      type: 'work',
      date: 'February 2024 - Present',
      title: t('timeline.workStarted.title'),
      subtitle: t('timeline.workStarted.subtitle'),
      description: t('timeline.workStarted.description'),
      icon: Briefcase
    }
  ], [t]);

  const timelineStyles = useMemo(() => {
    const timelineColor = hexToRgb(color);
    return {
      content: { 
        background: '#202020', 
        color: '#EFF6E0',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease'
      },
      arrow: { 
        borderRight: '7px solid #202020' 
      },
      icon: { 
        background: timelineColor, 
        color: '#fff',
        boxShadow: `0 0 0 4px ${timelineColor}20`
      }
    };
  }, [color]);

  return (
    <>
      <div className="w-full pt-10 lg:pb-10 flex-col flex justify-center overflow-x-hidden">
        <InfoP titulo={t('aboutMe.title')} descripcion={desc} color={color}/>
      </div>
      <MoreInfo />
      <div className="w-full py-10 px-5 lg:px-20">
        <div className="mb-10">
          <div className="flex items-center justify-center">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-tertiary/50 to-transparent" />
            <h2 className="mx-6 md:mx-8 md:text-6xl text-3xl font-poppins text-center text-tertiary whitespace-normal break-words font-semibold tracking-tight bg-gradient-to-r from-tertiary to-tertiary/80 bg-clip-text cursor-default">
              {t('aboutMe.journeyTitle')}
            </h2>
            <div className="flex-grow h-px bg-gradient-to-l from-transparent via-tertiary/50 to-transparent" />
          </div>
        </div>
        <VerticalTimeline
          animate={true}
          lineColor={timelineStyles.icon.background}
        >
          {timelineEvents.map((event) => {
            const IconComponent = event.icon;
            return (
              <VerticalTimelineElement
                key={event.id}
                className={`vertical-timeline-element--${event.type}`}
                contentStyle={timelineStyles.content}
                contentArrowStyle={timelineStyles.arrow}
                date={event.date}
                dateClassName="text-tertiary font-medium"
                iconStyle={timelineStyles.icon}
                icon={<IconComponent size={24} />}
              >
                <h3 className="vertical-timeline-element-title text-lg font-semibold mb-2 text-tertiary cursor-default">
                  {event.title}
                </h3>
                {event.subtitle && (
                  <h4 className="vertical-timeline-element-subtitle text-sm text-tertiary opacity-90 mb-2 cursor-default">
                    {event.subtitle}
                  </h4>
                )}
                <p className="text-sm leading-relaxed text-tertiary opacity-80 cursor-default">
                  {event.description}
                </p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default AboutMe;
