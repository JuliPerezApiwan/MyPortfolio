import NavBar from "../navBar/navBar";
import ju from "../../assets/ju.png"
import Secciones from "../secciones/secciones";
import Footer from "../footer/footer";

  export const Home = () => {
    
    return (
        
        <div>
            <NavBar/>
        <div className="mx-auto max-w-6xl py-3 ">
          <div className="relative isolate  bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-20 md:pt-24 lg:flex lg:gap-x-20 lg:px-20 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-[-20px] lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-7xl">
                Julieta Perez Apiwan
              </h2>
              <br/>
              <p className="mt-6 sm:text-2xl leading-8 text-gray-300">
              ► Full Stack Developer
                <br/>
              ► Productora en medios de comunicacion 
              masiva
              </p>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute rounded-full left-20 top-5 w-[27.7rem] h-[27.7rem] max-w-none  bg-white/5 ring-1 ring-white/10"
                src="https://avatars.githubusercontent.com/u/102929707?v=4"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
<Secciones/>
   <Footer/>
      </div>

      );
  }




  
  export default Home