import "./Hardskills.css"

const Hardskills = () => {
    const hardskills = [
      {
        name: "HTML 5",
        imagem:
          "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-64.png",
        skill: "HTML5",
      },
      {
        name: "CSS 3",
        imagem:
          "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-64.png",
        skill: "CSS3",
      },
      {
        name: "JavaScript",
        imagem:
          "	https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-64.png",
        skill: "JavaScript",
      },
      {
        name: "React",
        imagem:
          "	https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-64.png",
        skill: "React",
      },
      {
        name: "Git",
        imagem:
          "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/141_Git_logo_logos-64.png",
        skill: "Git",
      },
      {
        name: "GitHub",
        imagem:
          "https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Github-64.png",
        skill: "GitHub",
      },
      {
        name: "Figma",
        imagem:
          "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-64.png",
        skill: "Figma",
      },
      {
        name: "Photoshop",
        imagem:
          "	https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/23_Photoshop_Adobe_logo_logos-64.png",
        skill: "Photoshop",
      },
    ];
    return (
      <section id="section-hard-skills">
        <h1>Hard skills</h1>
        <div id="container-hard-skills">
          <ul className="ul-skills">
            {hardskills.map((item) => (
              <li key={item.id}>
                <img
                  className="img-hard-skills"
                  src={item.imagem}
                  alt={item.skill}
                />
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
}

export default Hardskills