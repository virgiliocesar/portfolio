import projects from "../data/skills.json";
import "./Projects.css"
export const Projects = () => {
  return (
    <section id="projetos" className="section-pj">
      <h1>Projetos</h1>
      <div id="container-pj">
        <ul className="ul-pj">
          {projects.map((project) => (
            <li key={project.id}>
              <a href={project.link} target="_blank" rel="noreferrer">
                <img
                  className="img-pj"
                  src={project.imagem}
                  alt={`Projeto ${project.id}`}
                />
              </a>
              <a className="a-pj" href={project.codigo} target="_blank" rel="noreferrer">
                Ver código
              </a>
              <p>{project.text}</p>
              <div>
                <button>Deploy</button>
                <button>Detalhes</button>
                <button>Código</button>
                
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;