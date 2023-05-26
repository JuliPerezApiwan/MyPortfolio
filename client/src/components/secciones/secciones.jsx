export const Secciones = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 flex justify-center items-center">
      <div className="grid gap-8 lg:grid-cols-2 inline-block w-2/3">
      <a href="/sobremi"
            aria-label="Article"
            className="inline-block mb-3 text-3xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
        <div className=" bg-white bg-opacity-80 p-8 border sm:rounded-3xl shadow-sm border border-blue-500">
          <h2>
            Sobre mi
          </h2>
        </div>
      </a>
         <a
            href="/estudios"
            aria-label="Article"
            className="inline-block mb-3 text-3xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
        <div className="bg-white bg-opacity-80 p-8 sm:rounded-3xl shadow-sm border border-blue-500">
            Estudios
        </div>
        </a>
           <a
            href="/experiencias"
            aria-label="Article"
            className="inline-block mb-3 text-3xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
        <div className="bg-white bg-opacity-80 p-8 border border-blue-500 sm:rounded-3xl shadow-sm">
            Experiencias
        </div>
        </a>
        <a
            href="/proyectos"
            aria-label="Article"
            className="inline-block mb-3 text-3xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
        <div className="bg-white bg-opacity-80 p-8 border border-blue-500 sm:rounded-3xl shadow-sm">
          
            Proyectos
          
        </div>
        </a>
      </div>
    </div>
  );
};

export default Secciones