import { useState, useEffect } from "react";
import { Link } from "react-router";
import projects from "../data/projects.json";

export const Projects = () => {
  const [showButton, setShowButton] = useState(false);

  // Função para verificar a posição da rolagem
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para voltar ao topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Rolagem suave
    });
  };

  return (
    <section className="section__container py-16 bg-gradient-to-b from-gray-50 to-white mt-14">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">
          Portfólio de <span className="text-blue-600">Projetos</span>
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <a href={project.link} target="_blank" rel="noreferrer">
                <img
                  className="w-full h-56 object-cover"
                  src={project.imagem}
                  alt={project.title || "Project Image"}
                />
              </a>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h2>

                <div className="flex justify-between gap-4">
                  <Link
                    to={`/project/${project.id}`}
                    className="proj_btn bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Detalhes
                  </Link>
                  <a
                    href={project.codigo}
                    target="_blank"
                    rel="noreferrer"
                    className="proj_btn bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
                  >
                    Código
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="proj_btn bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                  >
                    Visualizar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>

      {/* Botão Flutuante */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </section>
  );
};

export default Projects;