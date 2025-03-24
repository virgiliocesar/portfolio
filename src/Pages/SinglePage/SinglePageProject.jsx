import { useParams, useNavigate } from "react-router";
import projects from "../../data/projects.json";

const SinglePageProject = () => {
  const { id } = useParams(); // Captura o ID da URL
  const navigate = useNavigate(); // Hook para navegação
  const project = projects.find((proj) => proj.id === parseInt(id)); // Encontra o projeto correspondente

  if (!project) {
    return <div>Projeto não encontrado!</div>;
  }

  // Função para navegar para o próximo projeto
  const goToNextProject = () => {
    const nextProjectId = parseInt(id) + 1;
    const nextProject = projects.find((proj) => proj.id === nextProjectId);
    if (nextProject) {
      navigate(`/project/${nextProjectId}`);
    } else {
      // Se não houver próximo projeto, volta para o primeiro
      navigate(`/project/${projects[0].id}`);
    }
  };

  // Função para navegar para o projeto anterior
  const goToPreviousProject = () => {
    const previousProjectId = parseInt(id) - 1;
    const previousProject = projects.find((proj) => proj.id === previousProjectId);
    if (previousProject) {
      navigate(`/project/${previousProjectId}`);
    } else {
      // Se não houver projeto anterior, vai para o último
      navigate(`/project/${projects[projects.length - 1].id}`);
    }
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
    <section className="section__container py-16 bg-gradient-to-b from-gray-50 to-white mt-14 mb-30 ">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">
          Detalhes do <span className="text-blue-600">Projeto</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {/* Verifica se há um vídeo do YouTube */}
            {project.video ? (
              <div className="w-full h-96 rounded-lg shadow-xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${project.video}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&playlist=${project.video}`} // Usa o ID do vídeo do YouTube
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              // Fallback para imagem se não houver vídeo
              <img
                className="w-full h-96 object-cover rounded-lg shadow-xl"
                src={project.imagem}
                alt={project.title}
              />
            )}

            {/* Botões de navegação abaixo do vídeo/imagem */}
            <div className="flex justify-between mt-4">
              <button
                onClick={goToPreviousProject}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
              >
                Anterior
              </button>
              <button
                onClick={goToNextProject}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
              >
                Próximo
              </button>
            </div>
          </div>

          <div>
            

            <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
              {project.title}
            </h1>
            <p className="text-gray-600 mb-6">{project.text}</p>
            <div className="flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="proj_btn bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Visualizar Projeto
              </a>
              <a
                href={project.codigo}
                target="_blank"
                rel="noreferrer"
                className="proj_btn bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                Ver Código
              </a>
            </div>
            {/* Descrição detalhada */}
            <p className="text-gray-600 mt-6 font-bold">Tec:</p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePageProject;