import programingImage from '../svg-png/fondocambio-Photoroom.png';
import InfoP from '../components/infoP';
import MyProjects from '../components/myProjects';
import '../App.css';

function Home() {
  const title = "Who I Am ?";
  const desc = (
    <>
      My name is <span className="text-primary font-normal">Sebastian Britos</span>. I'm 21 years old and I'm a student of
      <span className="text-primary font-normal"> Systems Engineering</span> at the University of the Republic. I have more than
      <span className=" text-primary font-normal"> 300 credits</span> approved and almost
      <span className="text-primary font-normal"> 30 subjects</span> taken. I have worked on multiple group projects where I have acquired diverse knowledge and learned how to work as a team.
    </>
  );

  return (
    <>
      <div className="grid md:p-10 p-5 gap-y-5 md:mb-14 mb-10">
        <h1 className="md:text-6xl text-3xl  p-2 text-center text-tertiary whitespace-normal break-words animate-ascend">
          Hi, I am a <span className="font-bold text-primary">Systems Engineering</span> student
        </h1>
        <p className="md:text-3xl text-lg  font-light text-center text-tertiary whitespace-normal break-words animate-ascend">
          I like programming, learning new things and working in team
        </p>
      </div>
      <div className="flex justify-center items-end ">
          <img className="xl:w-1/4 sm:w-1/3 w-3/4 p-5 z-10 opacity-90" src={programingImage} alt="Developer" />
      </div>
      <div>
        <InfoP titulo={title} descripcion={desc} bool={true} />
        <MyProjects />
      </div>
    </>
  );
}

export default Home;
