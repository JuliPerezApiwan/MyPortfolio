export const Proyectos = () => {
    return (
        
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
         <h2 className=" mb-6 font-sans text-3xl text-purple-900 sm:text-4xl sm:leading-none pb-4 bg-white bg-opacity-80 p-4 sm:rounded-3xl shadow-sm border border-purple-500">
             Proyectos
              </h2>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="https://res.cloudinary.com/dwwd5fadx/image/upload/v1685074507/Landing_icnfgv.png"
              className="object-cover w-full h-48 mb-4"
              alt=""
            />
            <div className="p-5 border-none">
              <p
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700 mb-6"
              >
               Dogs
              </p>
              <p className="mb-2 text-gray-700">
              Single Page Application desarrollada con React, Redux, Node, Express y Sequelize. La aplicación consume una API externa para obtener datos y permite a los usuarios buscar información utilizando filtros y búsqueda por nombre. Además, permite la carga en tiempo real de nuevos datos. La aplicación sigue la arquitectura cliente-servidor, con la interfaz construida en React y Redux, y el servidor en Node y Express. La base de datos utiliza Sequelize para facilitar la manipulación y consulta de datos. La búsqueda y los filtros brindan una experiencia de usuario intuitiva, mientras que la carga en tiempo real garantiza información actualizada.
              </p>
              <a
                href="https://github.com/JuliPerezApiwan/Henry_PI_Dogs"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Ver codigo
              </a>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="https://res.cloudinary.com/dwwd5fadx/image/upload/v1685074671/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f313039343331343238313132333731373230302f313130343934393639383032363033333135322f436170747572615f64655f50616e74616c6c615f323032332d30352d30375f615f6c61735f3130_q7fv6u.png"
              className="object-cover w-full h-48 mb-4"
              alt=""
            />
            <div className="p-5 border-none">
              <p
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700 mb-6"
              >
                Medical Connect
              </p>
              <p className="mb-2 text-gray-700">
               Aplicación web que permite a pacientes y médicos realizar consultas médicas de forma remota mediante videollamadas en tiempo real.
              <br/>
              <br/>
              La aplicación ha sido desarrollada utilizando tecnologías web como JavaScript, React-Redux, Node.js, Express.js, PostgreSQL, Sequelize, entre otras, y manejando flujos de Git y GitFlow.
              </p>
              <a
                href="https://github.com/JuliPerezApiwan/Medical-ConnectAr"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Ver codigo
              </a>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="https://res.cloudinary.com/dwwd5fadx/image/upload/v1685075332/Captura_de_Pantalla_2023-05-26_a_la_s_1.27.49_a._m._t3kqj8.png"
              className="object-cover w-full h-42 mb-4"
              alt=""
            />
            <div className="p-5 border-none">
            
              <p
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700 mb-6"
              >
                Countries
              </p>
              <p className="mb-2 text-gray-700">
              SPA desarrollada con tecnologías web modernas como React, Redux, Node, Express y Sequelize. La aplicación consume una API externa para obtener datos y permite a los usuarios buscar información utilizando filtros y búsqueda por nombre. Además, permite la carga en tiempo real de nuevos datos. La aplicación sigue la arquitectura cliente-servidor, con la interfaz construida en React y Redux, y el servidor en Node y Express. La base de datos utiliza Sequelize para facilitar la manipulación y consulta de datos. La búsqueda y los filtros brindan una experiencia de usuario intuitiva, mientras que la carga en tiempo real garantiza información actualizada
              </p>
              <a
                href="https://github.com/JuliPerezApiwan/Henry_PI_Countries"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 mb-3"
              >
                Ver codigo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Proyectos;