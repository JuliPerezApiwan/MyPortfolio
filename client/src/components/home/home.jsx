import NavBar from "../navBar/navBar";
import ju from "../../assets/ju.png"
import Secciones from "../secciones/secciones";

  export const Home = () => {
    
    return (
        
        <div>
            <NavBar/>
        <div className="mx-auto max-w-6xl py-3 ">
          <div className="relative isolate  bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-20 md:pt-24 lg:flex lg:gap-x-20 lg:px-20 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={45} cy={45} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-[-20px] lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-7xl">
                Julieta Perez Apiwan
              </h2>
              <p className="mt-6 sm:text-2xl leading-8 text-gray-300">
              Full Stack Developer
                <br/>
                <br/>
              Productora en medios de comunicacion masiva
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 sm:text-1xl font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Mas informacion
                </a>
                
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute rounded-full left-0 top-5 w-[32rem] h-[32rem] max-w-none  bg-white/5 ring-1 ring-white/10"
                src="https://avatars.githubusercontent.com/u/102929707?v=4"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
<Secciones/>
      </div>
    //   <div>
    //     
    //   </div>
      );
  }




  
  export default Home