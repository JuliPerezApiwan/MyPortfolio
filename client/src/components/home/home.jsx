import PerezApiwanJulieta from '../../assets/img/PerezApiwanJulieta.jpg';
import JulietaPerezApiwanCV from '../../assets/JulietaPerezApiwanCV.pdf'

export const Home = () => {
  return (
    <div className="home">
      <div className="mx-auto max-w-6xl py-3 px-4 sm:px-6 lg:px-8">
        <div className="relative isolate px-6 pt-16 sm:rounded-3xl sm:px-20 md:pt-24 lg:flex lg:gap-x-20 lg:px-20 lg:pt-0 flex flex-col lg:flex-row items-center"> 
          <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full">
            {/* Foto y Profesiones */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-24 w-full">
              
              {/* Información */}
              <div className="max-w-md text-center lg:text-left">
                <h2 className="font-[FangSong] text-3xl font-bold tracking-tight text-[#fafb63] sm:text-5xl">
                  Julieta Perez Apiwan
                </h2>
                <br />
                <div className="profesion">
                  <b><p className="bg-[#3fadb5] border-[#fafb63] mt-6 pt-3 sm:text-l leading-8 text-black border sm:rounded-2xl p-4 transform transition-all duration-700 ease-out hover:translate-x-10">
                    ➣ {'\u00A0'}Full Stack Developer orientada al Frontend
                  </p></b>
                  <b><p className="bg-[#3fadb5] border-[#fafb63] mt-6 pt-3 sm:text-l leading-8 text-black border sm:rounded-2xl p-4 transform transition-all duration-700 ease-out hover:translate-x-10">
                    ➣ {'\u00A0'}Productora en medios de comunicacion masiva
                  </p></b>
                  <b><p className="bg-[#3fadb5] border-[#fafb63] mt-6 pt-3 sm:text-l leading-8 text-black border sm:rounded-2xl p-4 transform transition-all duration-700 ease-out hover:translate-x-10">
                    ➣ {'\u00A0'}Colaboradora en comunidad <a className="text-[#e1eb2f]" href="https://instagram.com/beerjscba" target="_blank" rel="noopener noreferrer">BeerJSCba</a>
                  </p></b>
                  <b><p className="bg-[#3fadb5] border-[#fafb63] mt-6 pt-3 sm:text-l leading-8 text-black border sm:rounded-2xl p-4 transform transition-all duration-700 ease-out hover:translate-x-10">
                    ➣ {'\u00A0'}Content Creator
                  </p></b>
                  <div className="mt-10 flex items-center justify-center lg:justify-start pb-8">
                    <a
                      href={JulietaPerezApiwanCV} download
                      className="bg-[#fafb63] rounded-md px-4 py-2 sm:text-1xl font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition"
                    >
                      Curriculum Vitae en PDF
                    </a>
                  </div>
                </div>
              </div>

              {/* Imagen */}
              <div className="tarjeta2 flex justify-center">
                <div className="relative">
                  <div className="perfil">
                    <img
                      className="mt-12 rounded-full w-[17rem] sm:w-[27rem] h-auto max-w-none bg-white/5 ring-1 ring-white/10 border-4 border-black"
                      src={PerezApiwanJulieta}
                      alt="Julieta Perez Apiwan"
                      width={1824}
                      height={1080}
                    />
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
