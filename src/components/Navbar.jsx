import { useState } from "react";
import { NavLink } from "react-router"; // Substituí Link por NavLink

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar a visibilidade do menu

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-50 h-16">
      {/* Background do Navbar (gradiente suave e sombra) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 shadow-lg"></div>

      {/* Conteúdo Centralizado */}
      <div className="relative container mx-auto h-full flex items-center justify-between px-6">
        {/* Logo ou Nome do Portfólio */}
        <div className="text-2xl font-bold text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-gray-200 transition-colors duration-300 ${isActive ? "text-gray-200" : "text-white"
              }`
            }
          >
            Meu Portfólio
          </NavLink>
        </div>

        {/* Links de Navegação (Desktop) */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-gray-200 transition-colors duration-300 ${isActive
                  ? "text-gray-200 font-semibold border-b-2 border-gray-200"
                  : "text-white"
                }`
              }
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `hover:text-gray-200 transition-colors duration-300 ${isActive
                  ? "text-gray-200 font-semibold border-b-2 border-gray-200"
                  : "text-white"
                }`
              }
            >
              Habilidades
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `hover:text-gray-200 transition-colors duration-300 ${isActive
                  ? "text-gray-200 font-semibold border-b-2 border-gray-200"
                  : "text-white"
                }`
              }
            >
              Projetos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-gray-200 transition-colors duration-300 ${isActive
                  ? "text-gray-200 font-semibold border-b-2 border-gray-200"
                  : "text-white"
                }`
              }
            >
              Contato
            </NavLink>
          </li>
        </ul>

        {/* Menu Mobile (Hamburger) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Mobile (Links) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-blue-700 to-purple-700 shadow-lg">
            <ul className="flex flex-col space-y-4 p-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-gray-200 transition-colors duration-300 ${isActive
                      ? "text-gray-200 font-semibold border-b-2 border-gray-200"
                      : "text-white"
                    }`
                  }
                  onClick={toggleMenu} // Fecha o menu ao clicar em um link
                >
                  Sobre
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    `hover:text-gray-200 transition-colors duration-300 ${isActive
                      ? "text-gray-200 font-semibold border-b-2 border-gray-200"
                      : "text-white"
                    }`
                  }
                  onClick={toggleMenu}
                >
                  Habilidades
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `hover:text-gray-200 transition-colors duration-300 ${isActive
                      ? "text-gray-200 font-semibold border-b-2 border-gray-200"
                      : "text-white"
                    }`
                  }
                  onClick={toggleMenu}
                >
                  Projetos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `hover:text-gray-200 transition-colors duration-300 ${isActive
                      ? "text-gray-200 font-semibold border-b-2 border-gray-200"
                      : "text-white"
                    }`
                  }
                  onClick={toggleMenu}
                >
                  Contato
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;