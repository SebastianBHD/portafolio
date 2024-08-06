import programingImage from '../svg-png/undraw_code_thinking_re_gka2.svg';
import InfoP from '../components/infoP';
import MyProjects from '../components/myProjects';
import '../App.css'; // Asegúrate de que este archivo CSS se importe para aplicar la animación


function Home() {
  const title = "Who I Am ?";
  const desc = "Mi name is Sebastian Britos. I'm 21 years old and I'm a student at the Faculty of Engineering of the University of the Republic. I have more than 250 credits approved and more than 22 subjects taken. I have worked on multiple group projects where I have acquired diverse knowledge and learned how to work as a team.";
  return (
    <>
      <div className="grid md:p-10 p-5 gap-y-5 md:mb-36 mb-20">
        <h1 className="md:text-6xl text-3xl font-poppins p-2 text-center text-tertiary whitespace-normal break-words animate-ascend">
          Hi, I am a <span className="font-bold text-primary">Systems Engineering</span> student
        </h1>
        <p className="md:text-3xl text-lg font-poppins font-light text-center text-tertiary whitespace-normal break-words animate-ascend">
          I like programming, learning new things and working in team
        </p>
      </div>
      <div className="flex justify-center items-end">
        <img className="md:w-1/2 w-3/4 p-5" src={programingImage} alt="Developer" />
      </div>
      <div>
        <InfoP titulo={title} descripcion={desc} bool={true} />
        <MyProjects />
      </div>
    </>
  );
}

export default Home;