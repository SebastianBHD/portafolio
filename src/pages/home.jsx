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
      <div className='image-container grid h-screen'>
      <div className="grid text-center justify-center items-center p-4 sm:gap-y-8">
        <h1 className="sm:text-6xl text-4xl text-center text-tertiary whitespace-normal break-words animate-ascend">
          Hi, I am a <span className="font-bold text-primary">Systems Engineering</span> student
        </h1>
        <p className="sm:text-3xl text-2xl font-light text-center text-tertiary whitespace-normal break-words animate-ascend">
          I like programming, learning new things and working in team
        </p>
      </div>
      <div className="flex justify-center items-end">
          <img className="xl:w-1/3 sm:w-1/2 w-5/6 p-5 z-10 " src="/images/fondocambio-Photoroom.png" alt="Developer" />
      </div>
      </div>
      <div>
        <InfoP titulo={title} descripcion={desc} bool={true} />
        <MyProjects />
      </div>
    </>
  );
}

export default Home;
