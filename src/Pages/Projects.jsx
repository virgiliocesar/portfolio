import { useState, useEffect } from "react";
import { Link } from "react-router"; // Corrigi a importação do Link
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

  // Cores para cada tecnologia
  const tecnologiaCores = {
    React: "bg-blue-500",
    "Node.js": "bg-green-500",
    Express: "bg-yellow-500",
    MongoDB: "bg-purple-500",
    Docker: "bg-indigo-500",
    Axios: "bg-red-500",
    Tailwind: "bg-teal-500",
    TypeScript: "bg-blue-700",
    Vite: "bg-pink-500",
    JWT: "bg-red-500",
    HTML: "bg-orange-500",
    CSS: "bg-blue-500",
    javaScript: "bg-yellow-500",
    "React Hooks": "bg-pink-500",
    "React Native": "bg-pink-500",
    "React Router": "bg-pink-500",
    "React Query": "bg-pink-500",
    "Styled Components": "bg-pink-500",
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

                {/* Tags de tecnologias */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tecnologias.map((tech, index) => (
                    <span
                      key={index}
                      className={`${tecnologiaCores[tech] || "bg-gray-500"} text-white px-3 py-1 rounded-full text-sm`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

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