import face from "../assets/image/face.png";

import githubIcon from "../assets/svg/contato/github.svg";
import linkedinIcon from "../assets/svg/contato/linkedin.svg";
import downloadIcon from "../assets/svg/contato/download.svg";

const About = () => {
  return (
    <section id="sobre" className="section__container py-20 bg-gradient-to-b from-gray-50 to-white mt-14">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">
          Sobre <span className="text-blue-600">Mim</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Texto e Informações */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold text-gray-800 mb-4">
                Virgílio César
              </h1>
              <h2 className="text-3xl font-semibold text-blue-600 mb-8">
                Desenvolvedor Fullstack
              </h2>
            </div>

            <p className="text-gray-600 text-justify text-lg leading-relaxed">
              Ajudante geral em construção civil há mais de 5 anos. No tempo livre,
              tenho trabalhado como freelancer nos últimos 13 meses, implementando
              páginas em WordPress, HTML, CSS e JavaScript. Estou em transição de
              carreira para o desenvolvimento Fullstack. Minha especialidade é
              React, Typescript, JavaScript (ES6), HTML e CSS. Atualmente, estou
              estudando backend. Curso <b>Análise e Desenvolvimento de Sistemas</b>
              pela Unifatecie. Principais tecnologias:
              <b>
                {" "}
                React, Typescript, JavaScript (ES6), Node.js, MongoDB, Tailwind,
                Styled-components, HTML, CSS, Git, Figma e Photoshop.
              </b>
            </p>

            {/* Redes Sociais */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/virgiliocesar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <img src={githubIcon} alt="GitHub" className="w-8 h-8" />
                <span className="text-lg">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/virgilio-cesar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
                <span className="text-lg">LinkedIn</span>
              </a>
              <a
                href="https://1drv.ms/b/c/a9d5cdac6cc8c626/EfDyJQRh7HNLlTjImR6Ku6cBeDoqJ_eg6kNs-t8omr-1fw?e=S8ZlwT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <img src={downloadIcon} alt="Currículo" className="w-8 h-8" />
                <span className="text-lg">Currículo</span>
              </a>
            </div>

            {/* Email */}
            <p className="text-gray-600 text-lg">
              <strong>E-mail:</strong>{" "}
              <a
                href="mailto:virgilio_cesar.dev@outlook.com"
                className="text-blue-600 hover:underline"
              >
                virgilio_cesar.dev@outlook.com
              </a>
            </p>
          </div>

          {/* Foto de Perfil */}
          <div className="flex justify-center md:justify-end">
            <div className="max-w-[400px] rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={face}
                alt="Foto de perfil"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;