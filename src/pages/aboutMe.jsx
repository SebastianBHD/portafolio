import InfoP from '../components/infoP';
import MoreInfo from '../components/moreInfo';

function AboutMe({ color = '#9f86c0'}) {
  const desc = (
    <>
      My name is <span className=" text-primary font-normal">Sebastian Britos</span>, I'm 21 years old. I'm an advanced Uruguayan student of
      <span className=" text-primary font-normal"> Systems Engineering</span> at the University of the Republic.
      I have been a student for 4 years and I have more than
      <span className=" text-primary font-normal"> 300 credits</span> and almost
      <span className=" text-primary font-normal"> 30 subjects</span> approved.
      I'm searching for my first job experience in the programming area, to gain experience and become a professional.
    </>
  );

  return (
    <>
      <div className="w-full pt-10 lg:pb-10 flex-col flex justify-center overflow-x-hidden">
        <InfoP titulo="About Me" descripcion={desc} color={color}/>
      </div>
      <MoreInfo />
    </>
  );
}

export default AboutMe;
