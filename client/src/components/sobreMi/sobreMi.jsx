export const SobreMi = () => {
    return (
      <div className="rounded-2xl px-4 mt-1 bg-white bg-opacity-90 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 border border-[#111827]">
        <div className="grid gap-9 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} Te cuento un poco quien soy ...
               
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              Hola  👋🏻, mi nombre es Julieta Perez Apiwan, Desarrolladora Full Stack. Actualmente me encuentro en la búsqueda de nuevas oportunidades laborales en esta área.
<br/>
<br/>
Mi formación académica en Henry me ha permitido adquirir habilidades para trabajar con Javascript, React-Redux, Node.js, Express.js, PostgreSQL, Sequelize, Railway, Git y GitHub, las cuales estoy deseosa de aplicar en un entorno laboral.
<br/>
<br/>
Si bien aun no tengo experiencia laboral previa en este ámbito, he realizado proyectos personales, en los que he aplicado lo aprendido en mi formación y demostrando mi capacidad para trabajar en equipo y resolver problemas.
<br/>
<br/>
Además, cuento con una amplia gama de conocimientos de distinta índole, como ser redacción de artículos periodísticos, diseño de logos e imagen publicitaria, edición de video, administración de documentación, y más. Soy una persona con amplios conocimientos en asesoramiento al cliente, ya que mis estudios como Profesional de Medios de Comunicación Masiva, sumado a mi experiencia laboral, me generaron los recursos suficientes para saber comunicarme correctamente y cumplir con el objetivo deseado.
<br/>
<br/>
Estoy muy interesada en seguir desarrollándome en el mundo IT, y busco una oportunidad para comenzar mi carrera profesional.
              </p>
            </div>
          
          </div>
          <div>
            <img
              className="object-cover rounded shadow-lg"
              src="https://res.cloudinary.com/dwwd5fadx/image/upload/v1685066788/Captura_de_Pantalla_2023-05-25_a_la_s_11.05.17_p._m._f9o4d1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };

  export default SobreMi;