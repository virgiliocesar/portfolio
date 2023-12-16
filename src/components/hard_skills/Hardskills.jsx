import "./Hardskills.css"

const Hardskills = () => {
    const hardskills = [
      {
        imagem:
          "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-64.png",
        skill: "HTML5",
      },
      {
        imagem:
          "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-64.png",
        skill: "CSS3",
      },
      {
        imagem:
          "	https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-64.png",
        skill: "JavaScript",
      },
      {
        imagem:
          "	https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-64.png",
        skill: "React",
      },
      {
        imagem:
          "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/141_Git_logo_logos-64.png",
        skill: "Git",
      },
      {
        imagem:
          "https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Github-64.png",
        skill: "GitHub",
      },
      {
        imagem:
          "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-64.png",
        skill: "Figman",
      },
      {
        imagem:
          "	https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/23_Photoshop_Adobe_logo_logos-64.png",
        skill: "Photoshop",
      }
    ];
    return (
      <section id="hard-skills">
        <h1>Hard skills</h1>
        <ul className="ul-skills">
          {hardskills.map((item) => (
            <li key={item.id}>
              <img src={item.imagem} alt={item.skill} />
              </li>
              
          ))}
        </ul>
      </section>
    );
}

export default Hardskills