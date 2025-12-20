import InfoP from '../components/info-personal';
import MyProjects from '../components/my-rojects';
import '../App.css';
import { useTranslation } from '../hooks/useTranslation';

function Home({ primaryColor = '#9f86c0' }) {
  const { t } = useTranslation();
  const title = t('home.title');
  const descText = t('home.description');
  const name = t('home.name');
  const degree = t('home.degree');
  const credits = t('home.credits');
  const subjects = t('home.subjects');
  
  const desc = (
    <>
      {descText.split(/(\{name\}|\{degree\}|\{credits\}|\{subjects\})/).map((part, index) => {
        if (part === '{name}') {
          return <span key={index} className="text-primary font-normal cursor-default">{name}</span>;
        }
        if (part === '{degree}') {
          return <span key={index} className="text-primary font-normal cursor-default">{degree}</span>;
        }
        if (part === '{credits}') {
          return <span key={index} className="text-primary font-normal cursor-default">{credits}</span>;
        }
        if (part === '{subjects}') {
          return <span key={index} className="text-primary font-normal cursor-default">{subjects}</span>;
        }
        return part;
      })}
    </>
  );

  // Mapeo de colores a imágenes
  const colorToImageMap = {
    '#9f86c0': '/images/fondocambio-Photoroom-violet.png',
    '#ff8f33': '/images/fondocambio-Photoroom-orange.png',
    '#4caf50': '/images/fondocambio-Photoroom-green.png',
  };

  const imageSrc = colorToImageMap[primaryColor] || '/images/fondocambio-Photoroom-violet.png'; 

  return (
    <>
      <div className='image-container grid lg:h-screen'>
        <div className="grid text-center justify-center items-center p-4 sm:gap-y-8">
          <h1 className="sm:text-6xl text-4xl text-center text-tertiary whitespace-normal break-words animate-ascend cursor-default">
            {t('home.greeting')} <span className="font-bold text-primary cursor-default">{t('home.greetingDegree')}</span> {t('home.greetingStudent')}
          </h1>
          <p className="sm:text-3xl text-2xl font-light text-center text-tertiary whitespace-normal break-words animate-ascend cursor-default">
            {t('home.subtitle')}
          </p>
        </div>
        <div className="flex justify-center items-end">
          <img className="xl:w-1/3 sm:w-1/2 w-5/6 p-5 z-10" src={imageSrc} alt="Developer" />
        </div>
      </div>
      <div className='relative z-20'>
        <InfoP titulo={title} descripcion={desc} bool={true} color={primaryColor}/>
        <MyProjects />
      </div>
    </>
  );
}

export default Home;