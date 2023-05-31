export const Estudios = () => {
    return (
      <div className="estudios">
      <div className="rounded-2xl px-4 mt-1 bg-white bg-opacity-90 px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 border border-[#111827] m-5">
        <h2 className=" mb-6 font-sans text-3xl text-purple-900 sm:text-4xl sm:leading-none">
              Estudios
              </h2>
        <div className="mb-10 border-t border-b divide-y">
          <div className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                <p
                  className="text-purple-600"
                  aria-label="date"
                >
                  Periodo
                </p>
                <p className="text-gray-600">2022 / 2023</p>
              </div>
            </div>
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                <p
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                    Full Stack Developer
                  </p>
                </p>
              </div>
              <p className="text-gray-900">
              Henry Bootcamp 
              <br/>
              700 horas de cursado teórico-práctico. Proyectos individuales y grupales.
              </p>
            </div>
          </div>
          <div className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <p
                  className="text-purple-600"
                  aria-label="date"
                >
                  Periodo
                </p>
                <p className="text-gray-600">2015 / 2018</p>
              </div>
            </div>
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                  <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  Productora en Medios de comunicación masiva
                  </p>
              </div>
              <p className="text-gray-700">
              Universidad Nacional de Córdoba.
              <br/>
              Conocimientos y habilidades en áreas como redacción y producción de contenidos, fotografía y video, radio y televisión, periodismo digital y redes sociales, diseño gráfico y gestión de proyectos de medios, marketing.
              </p>
            </div>
          </div>
          <div className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <p
                  className="text-purple-600"
                  aria-label="date"
                >
                  Periodo
                </p>
                <p className="text-gray-600">2018</p>
              </div>
            </div>
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                  <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  Community Manager
                  </p>
              </div>
              <p className="text-gray-700">
              Platzi
              <br/>
              Estrategias de redes sociales, creación de contenidos atractivos, gestión de comunidades, publicidad en redes sociales, atención al cliente, marketing y consideraciones éticas.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };

  export default Estudios