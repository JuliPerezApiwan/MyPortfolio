export const Secciones = () => {
  return (
    <div className="secciones_grandes">
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 flex justify-center items-center">
      <div className="grid gap-8 lg:grid-cols-2 inline-block w-2/3">
      <a href="/sobremi"
            aria-label="Article"
            className="inline-block mb-3 text-xl leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
        <div className=" bg-white bg-opacity-80 p-4 border sm:rounded-3xl shadow-sm border-2  border-[#111827]">
          <h2>
            Sobre mi
          </h2>
        </div>
      </a>
         <a
            href="/estudios"
            aria-label="Article"
            className="inline-block mb-3 text-xl leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
        <div className="bg-white bg-opacity-80 p-4 sm:rounded-3xl shadow-sm border-2  border-[#111827]">
            Estudios
        </div>
        </a>
           <a
            href="/experiencias"
            aria-label="Article"
            className="inline-block mb-3 text-xl leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
        <div className="bg-white bg-opacity-80 p-4 border-2  border-[#111827] sm:rounded-3xl shadow-sm">
            Experiencias
        </div>
        </a>
        <a
            href="/proyectos"
            aria-label="Article"
            className="inline-block mb-3 text-xl leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
        <div className="bg-white bg-opacity-80 p-4 border-2  border-[#111827] sm:rounded-3xl shadow-sm">
          
            Proyectos Devs
          
        </div>
        </a>
        <a
            href="/fotoproductos"
            aria-label="Article"
            className="inline-block mb-3 text-xl leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
        <div className="bg-white bg-opacity-80 p-4 border-2  border-[#111827] sm:rounded-3xl shadow-sm">
          
            Foto Productos
          
        </div>
        </a>

        <a
            href="/placasylogos"
            aria-label="Article"
            className="inline-block mb-3 text-xl leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
        <div className="bg-white bg-opacity-80 p-4 border-2  border-[#111827] sm:rounded-3xl shadow-sm">
          
            Placas y Logos
          
        </div>
        </a>



      </div>
    </div>
    </div>
  );
};

export default Secciones