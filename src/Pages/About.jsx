import "./About..css";
import face from "../assets/image/face.png";

const About = () => {
  return (
    <section id="sobre" className="section__container flex gap-20 aline-items-center" >

      {/* <div>
            <h1>Virgílio César</h1>
            <div className="Redes-sociais">
              <div className="social-box">
                <a href="https://github.com/virgiliocesar" target="blank">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/12868/12868746.png"
                    alt="GitHub"
                  />
                </a>
                <p>GitHub</p>
              </div>
              <div className="social-box">
                <a
                  href="https://www.linkedin.com/in/virgilio-cesar/"
                  target="blank"
                >
                  <img
                    src="https://icons.iconarchive.com/icons/martz90/circle/512/linkedin-icon.png"
                    alt="Linkedin"
                  />
                </a>
                <p>linkedin</p>
              </div>
              <div className="social-box">
                <a
                  href="https://1drv.ms/b/c/a9d5cdac6cc8c626/EfDyJQRh7HNLlTjImR6Ku6cBeDoqJ_eg6kNs-t8omr-1fw?e=S8ZlwT"
                  target="blank"
                >
                  <img
                    className="img-social"
                    src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/256/Downloads-icon.png"
                    alt="Currículo"
                  />
                </a>
                <p>Currículo</p>
              </div>
            </div>
            <p>
              <strong>E-mail:</strong> virgilio_cesar.dev@outlook.com
            </p>
          </div> */}
      <div>
      <h1 className="text-2xl font-semibold text-start">Virgílio César</h1>
        <h1 className="text-3xl font-semibold text-start mb-5">DESENVOLVEDOR
          FULLSTACK.</h1>
        
      <div className="max-w-[700px]">
        <p className="text-justify">
          Ajudante geral em construção civil há mais de 5 anos. No tempo livre,
          tenho trabalhado como freelancer nos últimos 13 meses, implementando
          páginas em WordPress, HTML, CSS e JavaScript. Estou em transição de
          carreira para o desenvolvimento de Fullstack. Minha especialidade é
          React, Typescript, JavaScript (ES6), HTML e CSS. Atualmente, estou
          estudando backend. Curso
          <b> Análise e Desenvolvimento de Sistema </b>
          pela Unifatecie. Principais tecnologias:
          <b>
            {" "}
            React, Typescript, JavaScript (ES6), Node.js, MongoDB, Tailwind,
            Styled-components, HTML, CSS e git, figma e Photoshop.
          </b>
        </p>
      </div>
      </div>

      <div >
        <div className="max-w-[500px]">
          <img
            className=""
            src={face}
            alt="Foto de perfil"
          />
        </div>
      </div>
    </section>

  )
}

export default About