export const NavBar = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
      <div className="navbar">
      <div className="m-0 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between border-4 sm:rounded-3xl border-white-500 p-4">
          <div className="btn_home">
        <a 
          href="/"
          aria-label="home"
          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black bg-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
        Home
        </a>
        </div>
        
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/sobremi"
                className="font-medium tracking-wide text-gray-700 text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Sobre mi
              </a>
            </li>
            <li>
              <a
                href="/estudios"
                className="font-medium tracking-wide text-gray-700 text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Estudios
              </a>
            </li>
            <li>
              <a
                href="/experiencias"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-gray-700 text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Experiencias
              </a>
            </li>
            <li>
              <a
                 href="/proyectos"
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-gray-700 text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                Proyectos DevS
             </a>
            </li>
            <li>
              <a
                href="/fotoproductos"
                className="font-medium tracking-wide text-gray-700 text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Foto Productos
              </a>
            </li>
            <li>
              <a
                href="/placasylogos"
                className="font-medium tracking-wide text-gray-700 text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Placas y Logos
              </a>
            </li>
            <li>
              <div className="btn_contacto">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black bg-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
               
              >
                Contacto
              </a>
              </div>
            </li>
            
          </ul>
          
        </div>
      </div>
      </div>
    );
  };

  export default NavBar