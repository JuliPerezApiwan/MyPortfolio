export const Estudios = () => {
  return (
    <div className="estudios">
      <div className="rounded-2xl px-4 mt-1 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 m-5 pt-0">
        <h2 className="mb-6 mt-0 font-sans text-white text-3xl text-purple-900 sm:text-4xl sm:leading-none">
          Estudios certificados
        </h2>
        <div className="mb-10 border-t border-b divide-y">
          {/* Item 1 */}
          <div className="flex flex-col sm:flex-row items-start py-8 bg-[#3fadb5] bg-opacity-60 mb-3 border sm:rounded-2xl mt-6 w-auto pl-6 text-left">
            <div className="flex-1">
              <h3 className=" font-extrabold leading-none sm:text-4xl text-black xl:text-4xl">
                Full Stack Developer
              </h3>
              <p className="text-white mt-2">
                Henry Bootcamp 
                <br />
                700 horas de cursado teórico-práctico. Proyectos individuales y grupales.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col sm:flex-row items-start py-8 bg-[#fafb63] bg-opacity-60 mb-3 border sm:rounded-2xl w-auto pr-6 text-right">
            <div className="flex-1">
              <h3 className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl text-black">
                Productora en Medios de <br />comunicación masiva
              </h3>
              <p className="text-white mt-2">
                Universidad Nacional de Córdoba
                <br />
                Conocimientos y habilidades en áreas como redacción y producción de contenidos, fotografía y video,<br /> radio y televisión, periodismo digital y redes sociales, diseño gráfico y gestión de proyectos de medios, marketing.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-[#3fadb5] bg-opacity-60 flex flex-col sm:flex-row items-start py-8 border sm:rounded-2xl w-auto pl-6 text-left mb-3">
            <div className="flex-1">
              <h3 className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl text-black">
                Community Manager
              </h3>
              <p className="text-white mt-2">
                Platzi
                <br />
                Estrategias de redes sociales, creación de contenidos atractivos, gestión de comunidades, publicidad en redes sociales, atención al cliente, marketing y consideraciones éticas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estudios;
