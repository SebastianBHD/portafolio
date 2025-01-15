import InfoP from '../components/infoP';
import MoreInfo from '../components/moreInfo';

function AboutMe() {

  let desc = "My name is Sebastian, I'm 21 years old. I'm an advanced Uruguayan student of systems engineering at the University of the Republic. I have been a student for 4 years and I have more than 300 credits and almost 30 subjects approved."
  desc += " I'm searching for my first job experience in the programming area, to gain experience and become a professional."

  return (
    <>
      <div className="w-full pt-10 lg:pb-10 flex-col flex justify-center overflow-x-hidden">
          <InfoP titulo="About Me" descripcion={desc}/>
        </div>
        <MoreInfo />
    </>
  );
}

export default AboutMe;