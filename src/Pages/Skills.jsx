import css3 from "../assets/svg/frontend/css3.svg";
import html5 from "../assets/svg/frontend/html5.svg";
import javascript from "../assets/svg/frontend/javascript.svg";
import reactrouter from "../assets/svg/frontend/react_router.svg";
import react from "../assets/svg/frontend/react.svg";
import redux from "../assets/svg/frontend/redux.svg";
import tailwindcss from "../assets/svg/frontend/tailwindcss.svg";
import typescript from "../assets/svg/frontend/typescript.svg";
import express from "../assets/svg/backend/express.svg";
import nodejs from "../assets/svg/backend/nodejs.svg";
import mongodb from "../assets/svg/backend/mongodb.svg";
import docker from "../assets/svg/util/docker.svg";
import figman from "../assets/svg/util/figma.svg";
import git from "../assets/svg/util/git.svg";
import github from "../assets/svg/util/github.svg";
import jwtToken from "../assets/svg/backend/jwtToken.svg";

const Skills = () => {
  // Dados das habilidades comportamentais
  const skills = [
    { id: 1, name: "Comunicação", imagem: "caminho/para/imagem" },
    { id: 2, name: "Trabalho em Equipe", imagem: "caminho/para/imagem" },
    { id: 3, name: "Resolução de Problemas", imagem: "caminho/para/imagem" },
    { id: 4, name: "Adaptabilidade", imagem: "caminho/para/imagem" },
  ];

  // Dados das habilidades técnicas
  const frontendSkills = [
    { id: 1, name: "HTML5", imagem: html5 },
    { id: 2, name: "CSS3", imagem: css3 },
    { id: 3, name: "JavaScript", imagem: javascript },
    { id: 4, name: "React", imagem: react },
    { id: 5, name: "Redux", imagem: redux },
    { id: 6, name: "Tailwind CSS", imagem: tailwindcss },
    { id: 7, name: "TypeScript", imagem: typescript },
    { id: 8, name: "React Router", imagem: reactrouter },
  ];

  const backendSkills = [
    { id: 9, name: "Node.js", imagem: nodejs },
    { id: 10, name: "Express", imagem: express },
    { id: 11, name: "MongoDB", imagem: mongodb },
    { id: 12, name: "JWT", imagem: jwtToken },
  ];

  const toolsSkills = [
    { id: 12, name: "Docker", imagem: docker },
    { id: 13, name: "Figma", imagem: figman },
    { id: 14, name: "Git", imagem: git },
    { id: 15, name: "GitHub", imagem: github },
  ];

  return (
    <section className="section__container py-16 bg-gradient-to-b from-gray-50 to-white mt-14">
      <div className="container mx-auto px-4">
        {/* Habilidades Comportamentais */}
        <div className="mb-20">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Habilidades <span className="text-blue-600">Comportamentais</span>
          </h1>
          <div className="flex justify-center">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {skills.map((item) => (
                <li
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Habilidades Técnicas */}
        <div>
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Habilidades <span className="text-blue-600">Técnicas</span>
          </h1>

          {/* Frontend */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
              Frontend
            </h2>
            <div className="flex justify-center">
              <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {frontendSkills.map((item) => (
                  <li
                    key={item.id}
                    className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      className="w-16 h-16 mx-auto mb-4"
                      src={item.imagem}
                      alt={item.name}
                    />
                    <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Backend */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
              Backend
            </h2>
            <div className="flex justify-center">
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {backendSkills.map((item) => (
                  <li
                    key={item.id}
                    className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      className="w-16 h-16 mx-auto mb-4"
                      src={item.imagem}
                      alt={item.name}
                    />
                    <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ferramentas */}
          <div>
            <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
              Ferramentas
            </h2>
            <div className="flex justify-center">
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {toolsSkills.map((item) => (
                  <li
                    key={item.id}
                    className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      className="w-16 h-16 mx-auto mb-4"
                      src={item.imagem}
                      alt={item.name}
                    />
                    <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;