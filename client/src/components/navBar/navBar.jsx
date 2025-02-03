import { useState } from "react";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="m-0 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between sm:rounded-3xl border-white-500 p-4">
          
          {/* Botón Home */}
          <div className="btn_home">
            <a
              href="/"
              aria-label="home"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black bg-white transition duration-200 rounded shadow-md hover:bg-gray-200"
            >
              Home
            </a>
          </div>

          {/* Menú en escritorio */}
          <ul className="hidden lg:flex items-center space-x-8">
            <li><a href="/sobremi" className="text-white font-medium tracking-wide hover:text-gray-200 transition duration-200">Sobre mí</a></li>
            <li><a href="/estudios" className="text-white font-medium tracking-wide hover:text-gray-200 transition duration-200">Estudios</a></li>
            <li><a href="/experiencias" className="text-white font-medium tracking-wide hover:text-gray-200 transition duration-200">Experiencias</a></li>
            <li><a href="/proyectos" className="text-white font-medium tracking-wide hover:text-gray-200 transition duration-200">Proyectos DevS</a></li>
            <li><a href="/fotoproductos" className="text-white font-medium tracking-wide hover:text-gray-200 transition duration-200">Foto Productos</a></li>
            <li><a href="/placasylogos" className="text-white font-medium tracking-wide hover:text-gray-200 transition duration-200">Placas y Logos</a></li>
            <li>
              <div className="btn_contacto">
                <a href="/contacto" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black bg-white transition duration-200 rounded shadow-md hover:bg-gray-200">
                  Contacto
                </a>
              </div>
            </li>
          </ul>

          {/* Botón menú hamburguesa en móviles */}
          <button
            className="lg:hidden p-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Icono de tres líneas (hamburguesa) */}
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>

        {/* Menú desplegable en móviles */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 right-0 w-64 bg-gray-800 text-white z-50 shadow-lg rounded-b-lg rounded-2xl mr-1">
            <ul className="flex flex-col items-center py-4 space-y-4">
              <li><a href="/sobremi" className="text-white font-medium tracking-wide hover:text-gray-200 transition duration-200">Sobre mí</a></li>
              <li><a href="/estudios" className="text-white font-medium tracking-wide hover:text-gray-200 transition duration-200">Estudios</a></li>
              <li><a href="/experiencias" className="text-white font-medium tracking-wide hover:text-gray-200 transition duration-200">Experiencias</a></li>
              <li><a href="/proyectos" className="text-white font-medium tracking-wide hover:text-gray-200 transition duration-200">Proyectos DevS</a></li>
              <li><a href="/fotoproductos" className="text-white font-medium tracking-wide hover:text-gray-200 transition duration-200">Foto Productos</a></li>
              <li><a href="/placasylogos" className="text-white font-medium tracking-wide hover:text-gray-200 transition duration-200">Placas y Logos</a></li>
              <li>
                <div className="btn_contacto">
                  <a href="/contacto" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black bg-white transition duration-200 rounded shadow-md hover:bg-gray-200">
                    Contacto
                  </a>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
