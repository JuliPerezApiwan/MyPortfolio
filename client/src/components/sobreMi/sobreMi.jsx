import sobremi from '../../assets/img/sobremi.png';


export const SobreMi = () => {
    return (
      <div className="sobre_mi">
      <div className="rounded-2xl px-4 mt-1 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 pt-6 m-5">
        <div className="grid gap-9 row-gap-10 lg:grid-cols-2">
          <div className="flex justify-center items-center h-screen">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl  tracking-tight text-white-900 sm:text-4xl sm:leading-none">
              {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} Te cuento un poco de mi ...
               
              </h2>
              <div className='bg-[#fafb63] text-black border border-white border sm:rounded-2xl p-4 text-xs'>
              Hola  👋🏻, soy Julieta Perez Apiwan, Desarrolladora Full Stack orientada al Frontend, y profesional en Medios de Comunicación Masiva con un enfoque en tecnología, creatividad y comunicación efectiva.
</div>
<br />
<div className='bg-[#3fadb5] border border-white border sm:rounded-2xl p-4 text-xs'>
Mi formación desarrollo me ha permitido adquirir una sólida base técnica en tecnologías como HTML, CSS, JavaScript, React-Redux, Node.js, Express.js, PostgreSQL, Sequelize, Railway, Git y GitHub, y en el ultimo año he comenzado a adquirir habilidades en TypeScript, PrimeReact, Styled-Components y Storybook.
Estas herramientas las he aplicado en diversos proyectos, donde he demostrado mi capacidad para resolver problemas, aprender rápido y colaborar en equipo.
</div>
<br />

<div className='bg-[#fafb63] text-black border border-white border sm:rounded-2xl p-4 text-xs'>

Además, cuento con experiencia en áreas complementarias como diseño, redacción periodística, marketing digital, edición de video e imagen y administración de documentación, que potencian mi perfil al integrar habilidades técnicas con creatividad y comunicación estratégica.
</div>
<br />
<div className='flex  gap-3'>
<div className=' bg-[#3fadb5] border border-white border sm:rounded-2xl p-4 text-xs'>

Lo que me define como profesional es mi pasión por aprender, mi compromiso con los proyectos que asumo y mi habilidad para cumplir objetivos en tiempo y forma. Estoy deseosa de continuar desarrollándome en el ámbito IT, donde pueda combinar mi formación con mi experiencia previa.
</div>
<br />

<div className='bg-[#fafb63] text-black border border-white border sm:rounded-2xl p-4 text-xs'>

Estoy en búsqueda de nuevas oportunidades que me permitan crecer profesionalmente y aportar valor con mis habilidades y visión multidisciplinaria.

</div>
</div>
              
            </div>
          
          </div>
          <div>
            <img
              className="object-cover rounded shadow-lg mt-16"
              src={sobremi}
              alt=""
            />
          </div>
        </div>
      </div>
      </div>
    );
  };

  export default SobreMi;