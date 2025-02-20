import projects from "../data/projects.json";

export const Projects = () => {
  console.log(projects);
  return (
    <section className=" section__container">
      <h1 className="text-3xl font-semibold text-center mb-10">Projetos</h1>
      <div className="">
        <ul className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.id || project.index}>
              <a href={project.link} target="_blank" rel="noreferrer">
                <img
                  className="img-pj"
                  src={project.imagem}
  
                />
              </a>
              
              {/* <p>{project.text}</p> */}
              <div className="flex justify-between">
                <button><a href={project.codigo} target="_blank" rel="noreferrer">
                  visualizar
                </a></button>
                <button>Detalhes</button>
                <button>Código</button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;