import Secciones from "../secciones/secciones";
import JulietaPerezApiwanCV from '../../assets/JulietaPerezApiwanCV.pdf'

  export const Home = () => {
    return (
        
        <div>
        <div className="mx-auto max-w-6xl py-3 ">
          <div className="relative isolate  bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-20 md:pt-24 lg:flex lg:gap-x-20 lg:px-20 lg:pt-0  border-8 border-white-500">
            <div className="mx-auto max-w-md text-center lg:mx-[-20px] lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-7xl">
                Julieta Perez Apiwan
              </h2>
              <br/>
              <p className="mt-6 sm:text-2xl leading-8 text-gray-300">
              ➣ {'\u00A0'}Full Stack Developer
                <br/>
              ➣ {'\u00A0'}Productora en medios de comunicacion {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}masiva
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href={JulietaPerezApiwanCV} download
                  className="rounded-md bg-white px-3.5 py-2.5 sm:text-1xl font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Curriculum Vitae en PDF
                </a>

              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute rounded-full left-5 top-5 w-[31rem] h-[32rem] max-w-none  bg-white/5 ring-1 ring-white/10"
                src="https://res.cloudinary.com/dwwd5fadx/image/upload/v1685073440/WhatsApp_Image_2023-05-26_at_00.56.24_cbbn76.jpg"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
        <Secciones/>
      </div>

      );
  }




  
  export default Home