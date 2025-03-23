import { useParams } from "react-router";
import projects from "../../data/projects.json";

const SinglePageProject = () => {
  const { id } = useParams(); // Captura o ID da URL
  const project = projects.find((proj) => proj.id === parseInt(id)); // Encontra o projeto correspondente

  if (!project) {
    return <div>Projeto não encontrado!</div>;
  }

  return (
    <section className="section__container py-16 bg-gradient-to-b from-gray-50 to-white mt-14">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">
          Detalhes do <span className="text-blue-600">Projeto</span>
        </h1>
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">
          {project.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              className="w-full h-96 object-cover rounded-lg shadow-xl"
              src={project.imagem}
              alt={project.title}
            />
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePageProject;