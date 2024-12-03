export const Experiencias = () => {
  return (
    <div className="experiencias">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
      <h2 className="mb-6 font-sans border-b divide-y pb-4 text-white text-3xl text-purple-900 sm:text-4xl sm:leading-none">
          Experiencias
        </h2>
        <div className="grid max-w-3xl mx-auto text-left">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col rounded-2xl p-8 m-5 w-[48%] border border-[#3fadb5] text-white">
              <p className="text-xl font-semibold sm:text-base">Pasantia como Frontend Developer</p>
              <p className="text-sm">
                2022 - 2023
                <br />
                Experiencia en migración de proyectos con tecnologías modernas.
                <br /><br />
                ‣ Lenguajes: TypeScript, JavaScript.
                <br />
                ‣ Frameworks: PrimeReact, React, Storybook.
                <br />
                ‣ Herramientas: Git, Docker, Stripe.
                <br />
                ‣ Metodología: Scrum.
              </p>
            </div>
            <div className="flex flex-col rounded-2xl p-8 m-5 w-[48%] border border-[#3fadb5] text-white">
              <p className="text-xl font-semibold sm:text-base">Creación de proyectos académicos</p>
              <p className="text-sm">
                2022 - 2023
                <br />
                Desarrollo full-stack en proyectos individuales.
                <br /><br />
                ‣ Lenguajes: JavaScript, Node.js, React.
                <br />
                ‣ Frameworks: Express.js, Tailwind.
                <br />
                ‣ Base de Datos: PostgreSQL.
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col rounded-2xl p-8 m-5 border border-[#fafb63] text-white">
              <p className="text-xl font-semibold sm:text-base">Creadora de contenido Freelance</p>
              <p className="text-sm">
                2020 - 2023
                <br />
                Creación de contenido visual para redes sociales.
              </p>
            </div>
            <div className="flex flex-col rounded-2xl p-8 m-5 border border-[#fafb63] text-white">
              <p className="text-xl font-semibold sm:text-base">Redactora Freelance</p>
              <p className="text-sm">
                2020 - 2023
                <br />
                Redacción de artículos periodísticos.
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col rounded-2xl p-8 m-5 border border-[#3fadb5] text-white">
              <p className="text-xl font-semibold sm:text-base">Asistente administrativa</p>
              <p className="text-sm">
                2017 - 2019
                <br />
                Gestión de seguros y administración de cobros.
              </p>
            </div>
            <div className="flex flex-col rounded-2xl p-8 m-5 border border-[#3fadb5] text-white">
              <p className="text-xl font-semibold sm:text-base">Asesora de ventas</p>
              <p className="text-sm">
                2016 - 2022
                <br />
                Venta de indumentaria y gestión de redes sociales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiencias;
